<template>
  <button @click="handleView">View in markdown</button>
  <form @submit.prevent="handleSubmit">
    <label>Forever note:</label>
    <textarea v-model="note"></textarea>
    <div v-if="error">{{ error }}</div>
    <button v-if="!isPending">Save</button>
    <button v-else disabled>Saving...</button>
  </form>
</template>

<script>
import { onMounted, onUpdated, ref, watchEffect } from "vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";
import { Timestamp, serverTimestamp } from "@firebase/firestore";

export default {
  setup() {
    const note = ref("");
    const router = useRouter();
    const { user } = userAuthState();
    const {
      getDocument,
      addDocument,
      deleteDocument,
      updateDocument,
      error,
      isPending,
    } = useDoc("notes");

    const handleSubmit = async () => {
      let savedNote = {
        payload: note.value,
        modifiedAt: Timestamp.fromDate(new Date()),
      };

      await addDocument(user.value.uid, savedNote);
    };

    const handleView = async () => {
      await handleSubmit();
      router.push({ name: "viewer" });
    };

    onMounted(async () => {
      const doc = await getDocument(user.value.uid);

      if (doc.exists()) {
        note.value = doc.data().payload;
      }
    });

    return { error, isPending, note, handleSubmit, handleView };
  },
};
</script>

<style scoped>
form {
  display: flex;
  margin: 5px;
  flex-direction: column;
}
textarea {
  flex-basis: 580px;
}
button:disabled {
  background-color: rgb(51, 50, 50);
}
</style>
