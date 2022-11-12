enum CacheType {
  Local,
  Session
}
class Cache {
  store
  constructor(type: CacheType) {
    this.store = CacheType.Local === type ? localStorage : sessionStorage
  }
  getCache(key: string) {
    const value = this.store.getItem(key)
    if (value) return JSON.parse(value)
  }
  setCache(key: string, value: any) {
    if (key) {
      this.store.setItem(key, JSON.stringify(value))
    }
  }
  removeCache(key: string) {
    this.store.removeItem(key)
  }
  clear() {
    this.store.clear()
  }
}

const localCache = new Cache(CacheType.Local)
const sessionCache = new Cache(CacheType.Session)

export { localCache, sessionCache }
