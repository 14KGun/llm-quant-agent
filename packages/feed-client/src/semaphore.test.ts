import { describe, expect, it } from "vitest";
import { Semaphore } from "./semaphore.js";

const tick = () => new Promise((resolve) => setTimeout(resolve, 0));

describe("Semaphore", () => {
  it("never exceeds the max concurrency", async () => {
    const sem = new Semaphore(2);
    let active = 0;
    let maxActive = 0;
    const task = async () => {
      active++;
      maxActive = Math.max(maxActive, active);
      await new Promise((resolve) => setTimeout(resolve, 5));
      active--;
    };

    await Promise.all(Array.from({ length: 6 }, () => sem.run(task)));
    expect(maxActive).toBe(2);
  });

  it("queues work until a slot frees up", async () => {
    const sem = new Semaphore(1);
    const order: string[] = [];
    let release!: () => void;
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });

    const p1 = sem.run(async () => {
      order.push("start1");
      await gate;
      order.push("end1");
    });
    const p2 = sem.run(async () => {
      order.push("start2");
    });

    await tick();
    expect(order).toEqual(["start1"]); // p2 still queued

    release();
    await Promise.all([p1, p2]);
    expect(order).toEqual(["start1", "end1", "start2"]);
  });

  it("releases the slot even when the task throws", async () => {
    const sem = new Semaphore(1);
    await expect(
      sem.run(async () => {
        throw new Error("boom");
      }),
    ).rejects.toThrow("boom");

    await expect(sem.run(async () => "ok")).resolves.toBe("ok");
  });
});
