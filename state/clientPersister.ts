import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { Platform } from "react-native";
import { MMKV } from "react-native-mmkv";
import { MMKVLoader } from "react-native-mmkv-storage";

const storage = new MMKV();

const isWeb = Platform.OS === "web";
const storageAvailable = isWeb
  ? typeof localStorage !== "undefined"
  : typeof storage !== "undefined";

export const clientStorage = {
  setItem: (key: string, value: string) => {
    if (isWeb && storageAvailable) {
      localStorage.set(key, value);
    } else if (storageAvailable && storage) {
      storage.set(key, value); // Assuming `storage.set` is synchronous
    }
  },

  getItem: (key: string): string | null => {
    if (isWeb && storageAvailable) {
      const value = localStorage.getItem(key);
      return value === null ? null : value;
    } else if (storageAvailable && storage) {
      const value = storage.getString(key); // Assuming `storage.getString` is synchronous
      return value || null;
    } else {
      return null;
    }
  },

  removeItem: (key: string) => {
    if (isWeb && storageAvailable) {
      localStorage.removeItem(key);
    } else if (storageAvailable && storage) {
      storage.delete(key); // Assuming `storage.delete` is synchronous
    }
  },
};

export const clientPersister = createSyncStoragePersister({
  storage: clientStorage,
});
