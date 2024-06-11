import {
  collection,
  query,
  or,
  getDocs,
  getDoc,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase/config.js";
import { ref, watchEffect } from "vue";

const useCollection = () => {
  const getSubcollectionDocuments = (
    collectionName,
    documentName,
    subCollectionName
  ) => {
    const error = ref(null);
    const documents = ref([]);

    const colRef = collection(
      db,
      `${collectionName}/${documentName}/${subCollectionName}`
    );
    const q = query(colRef);

    const unsub = onSnapshot(
      q,
      (querySnapshot) => {
        documents.value = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      },
      (err) => {
        error.value = err.message;
      }
    );

    watchEffect((onInvalidate) => {
      onInvalidate(() => unsub());
    });

    return { documents, error };
  };

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

  const getDocuments = (collectionName, firstQueryParam, secQueryParam) => {
    const error = ref(null);
    const documents = ref([]);

    const colRef = collection(db, collectionName);

    let q = query(colRef);

    if (firstQueryParam && secQueryParam) {
      q = query(
        colRef,
        or(where(...firstQueryParam), where(...secQueryParam)),
        orderBy("modifiedAt", "desc")
      );
    }

    const unsub = onSnapshot(
      q,
      (querySnapshot) => {
        documents.value = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      },
      (err) => {
        console.log(err.message);
        error.value = err.message;
      }
    );

    watchEffect((onInvalidate) => {
      onInvalidate(() => unsub());
    });

    return { documents, error };
  };

  return {
    getDocumentIds,
    getDocumentIdsRealtime,
    getDocuments,
    getSubcollectionDocuments,
  };
};

export default useCollection;
