import { Storage } from "redux-persist";
import { MMKV } from "react-native-mmkv";

let storage: MMKV | null = null;
if (typeof window !== "undefined") {
  storage = new MMKV();
}
const isClient = typeof window !== "undefined";

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    if (isClient && storage) {
      storage.set(key, value);
      return Promise.resolve(true);
    }
    return Promise.reject("Storage is unavailable on the server");
  },
  getItem: (key) => {
    if (isClient && storage) {
      return Promise.resolve(storage.getString(key));
    }
    return Promise.resolve(null);
  },
  removeItem: (key) => {
    if (isClient && storage) {
      storage.delete(key);
      return Promise.resolve();
    }
    return Promise.reject("Storage is unavailable on the server");
  },
};
