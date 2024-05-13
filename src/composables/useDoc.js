import { ref, watchEffect } from "vue";
import { getDoc, setDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/config.js";

const useDoc = (collectionName, subCollectionName) => {
  const error = ref("");
  const isPending = ref(false);

  const getDocument = async (documentId, timestamp) => {
    error.value = "";
    isPending.value = true;

    try {
      //TODO organize this better, (function overloading?)
      let collectionPath = collectionName;
      let documentName = documentId;
      if (subCollectionName && timestamp) {
        collectionPath = `${collectionName}/${documentId}/${subCollectionName}`;
        documentName = timestamp;
      }

      const docRef = doc(db, collectionPath, documentName);
      return await getDoc(docRef);
    } catch (err) {
      error.value = "Couldn't retrieve note, try again later...";
    } finally {
      isPending.value = false;
    }
  };

  const addDocument = async (documentId, documentData, timestamp) => {
    error.value = "";
    isPending.value = true;

    try {
      let collectionPath = collectionName;
      let documentName = documentId;
      if (subCollectionName && timestamp) {
        collectionPath = `${collectionName}/${documentId}/${subCollectionName}`;
        documentName = timestamp;
      }

      const docRef = doc(db, collectionPath, documentName);
      return await setDoc(docRef, documentData);
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  };

  const deleteDocument = async (documentId, timestamp) => {
    error.value = "";
    isPending.value = true;

    try {
      let collectionPath = collectionName;
      let documentName = documentId;
      if (subCollectionName && timestamp) {
        collectionPath = `${collectionName}/${documentId}/${subCollectionName}`;
        documentName = timestamp;
      }

      const docRef = doc(db, collectionPath, documentName);
      return await deleteDoc(docRef);
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  };

  const updateDocument = async (documentId, documentData) => {
    error.value = "";
    isPending.value = true;

    try {
      const docRef = doc(db, collectionName, documentId);
      return await updateDoc(docRef, documentData);
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  };

  return {
    getDocument,
    addDocument,
    deleteDocument,
    updateDocument,
    error,
    isPending,
  };
};

export default useDoc;
