interface CacheEntry {
  value: unknown;
  /** Epoch ms after which the entry is considered stale. */
  expiresAt: number;
}

/**
 * 단순 TTL 인메모리 캐시. 만료된 항목은 조회 시점에 제거(lazy eviction)된다.
 * 시세처럼 단기간 동일 요청이 반복되는 경우의 중복 호출을 줄이는 용도.
 */
export class TtlCache {
  private readonly store = new Map<string, CacheEntry>();

  constructor(private readonly ttlMs: number) {}

  /** 살아있는 값을 반환하고, 만료/부재 시 `undefined`. */
  get(key: string): unknown | undefined {
    const entry = this.store.get(key);
    if (entry === undefined) return undefined;
    if (entry.expiresAt <= Date.now()) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }

  set(key: string, value: unknown): void {
    this.store.set(key, { value, expiresAt: Date.now() + this.ttlMs });
  }

  clear(): void {
    this.store.clear();
  }

  /** 만료 항목을 포함한 현재 엔트리 수(주로 테스트/디버깅용). */
  get size(): number {
    return this.store.size;
  }
}
