export const storeManager = {
  get: (key: string) => {
    if(typeof window === 'undefined') return null;

    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  },
  set: (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  },
  flush: () => {
    localStorage.clear();
  },
};
