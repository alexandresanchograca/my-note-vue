import {collection, query, getDocs, getDoc} from "firebase/firestore";
import { db } from "@/firebase/config.js";
import {ref} from "vue";

const useCollection = () => {

    const getDocumentIds = async (collectionName) => {
        const error = ref(null);
        const documentIds = ref([]);

        try {
            const colRef = collection(db, collectionName);
            const q = query(colRef);
            const querySnapshot = await getDocs(q);

            documentIds.value = querySnapshot.docs.map(doc => doc.id);

            return {iDs: documentIds.value};
        } catch (err) {
            error.value = err.message;
        }
    }

    return { getDocumentIds }
}

export default useCollection;

