import { describe, expect, it } from "vitest";
import { Semaphore } from "./semaphore.js";

describe("Semaphore", () => {
  it("limits concurrent execution to max", async () => {
    const sem = new Semaphore(2);
    let active = 0;
    let maxActive = 0;
    const task = () =>
      sem.run(async () => {
        active++;
        maxActive = Math.max(maxActive, active);
        await new Promise((resolve) => setTimeout(resolve, 5));
        active--;
      });

    await Promise.all(Array.from({ length: 6 }, task));
    expect(maxActive).toBe(2);
  });

  it("runs tasks in FIFO order when saturated", async () => {
    const sem = new Semaphore(1);
    const order: number[] = [];
    await Promise.all(
      [1, 2, 3].map((n) =>
        sem.run(async () => {
          order.push(n);
          await new Promise((resolve) => setTimeout(resolve, 1));
        }),
      ),
    );
    expect(order).toEqual([1, 2, 3]);
  });

  it("releases the slot even when the task throws", async () => {
    const sem = new Semaphore(1);
    await expect(sem.run(() => Promise.reject(new Error("boom")))).rejects.toThrow("boom");
    // 슬롯이 반납되지 않았다면 아래 작업은 영원히 대기한다.
    await expect(sem.run(() => Promise.resolve("ok"))).resolves.toBe("ok");
  });
});
