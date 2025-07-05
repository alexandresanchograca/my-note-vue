import { ref as vueRef } from "vue";
import {
  ref,
  getDownloadURL,
  listAll,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { storage } from "@/firebase/config";
import userAuthState from "@/composables/userAuthState";

export default function useUserStorage() {
  const { user } = userAuthState();
  const storageDocs = vueRef([]);
  const uploadProgress = vueRef(0);

  async function getResourceUrl(resourcePath) {
    const docRef = ref(storage, resourcePath);
    try {
      return await getDownloadURL(docRef);
    } catch (err) {
      console.log("[error] useStorageStore", err);
    }
  }

  async function listUserFiles() {
    const listRef = ref(storage, `files/${user.value?.uid}`);
    const { items, prefixes } = await listAll(listRef);
    return items;
  }

  async function getAllDocsUrls() {
    storageDocs.value = [];
    try {
      const docRefs = await listUserFiles();

      for (const doc of docRefs) {
        const url = await getDownloadURL(doc);
        storageDocs.value.push({
          name: doc.name,
          fullPath: doc.fullPath,
          url,
        });
      }
    } catch (err) {
      console.error("[ERROR] Getting Docs:", err);
    }
    return storageDocs.value;
  }

  async function deleteFile(filePath) {
    const storageRef = ref(storage, filePath);
    try {
      await deleteObject(storageRef);

      storageDocs.value = storageDocs.value.filter(
        (doc) => doc.fullPath !== filePath
      );
    } catch (err) {
      console.log("[error] Could not delete:", err);
    }
  }

  async function uploadFile(file) {
    const storageRef = ref(storage, `files/${user.value.uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          uploadProgress.value = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          console.error("Upload failed:", error);
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            const doc = uploadTask.snapshot.ref;
            storageDocs.value.push({
              name: doc.name,
              fullPath: doc.fullPath,
              url,
            });
            resolve(url);
          });
        }
      );
    });
  }

  return {
    storageDocs,
    uploadProgress,
    deleteFile,
    getResourceUrl,
    listUserFiles,
    getAllDocsUrls,
    uploadFile,
  };
}
