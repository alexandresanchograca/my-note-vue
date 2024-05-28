import {
  collection,
  query,
  getDocs,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase/config.js";
import { ref, watchEffect } from "vue";

const useCollection = () => {
  const getDocumentIds = async (collectionName) => {
    const error = ref(null);
    const documentIds = ref([]);

    try {
      const colRef = collection(db, collectionName);
      const q = query(colRef);
      const querySnapshot = await getDocs(q);

      documentIds.value = querySnapshot.docs.map((doc) => doc.id);

      return { iDs: documentIds.value };
    } catch (err) {
      error.value = err.message;
    }
  };

  const getDocumentIdsRealtime = (collectionName) => {
    const error = ref(null);
    const documentIds = ref([]);

    const colRef = collection(db, collectionName);
    const q = query(colRef);

    const unsub = onSnapshot(
      q,
      (querySnapshot) => {
        documentIds.value = querySnapshot.docs.map((doc) => doc.id);
      },
      (err) => {
        error.value = err.message;
      }
    );

    watchEffect((onInvalidate) => {
      onInvalidate(() => unsub());
    });

    return { documentIds, error };
  };

  return { getDocumentIds, getDocumentIdsRealtime };
};

export default useCollection;
