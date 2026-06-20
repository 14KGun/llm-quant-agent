/**
 * 동시 실행 개수를 `max` 로 제한하는 세마포어.
 * 한도를 초과한 작업은 FIFO 큐에 대기하다 슬롯이 비면 실행된다.
 * 토스증권 API 그룹별 TPS 레이트리밋을 피하기 위해 동시 in-flight 요청 수를 제한하는 용도.
 */
export class Semaphore {
  private active = 0;
  private readonly queue: Array<() => void> = [];

  constructor(private readonly max: number) {}

  /** 슬롯을 확보해 `fn` 을 실행하고, 완료 시 슬롯을 반납한다. */
  async run<T>(fn: () => Promise<T>): Promise<T> {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }

  private acquire(): Promise<void> {
    if (this.active < this.max) {
      this.active++;
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      this.queue.push(resolve);
    });
  }

  private release(): void {
    this.active--;
    const next = this.queue.shift();
    if (next) {
      this.active++;
      next();
    }
  }
}
