<template>
  <button @click="handleView">View in markdown</button>
  <form @submit.prevent="handleSubmit">
    <label>Daily Note:</label>
    <textarea v-model="note"></textarea>
    <div v-if="error">{{ error }}</div>
    <button v-if="!isPending">Save</button>
    <button v-else disabled>Saving...</button>
  </form>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";

export default {
  props: ["selectedDate"],
  setup(props, context) {
    const note = ref("");

    const { user } = userAuthState();
    const { getDocument, addDocument, deleteDocument, error, isPending } =
      useDoc("notes", "daily");

    const router = useRouter();

    const handleSubmit = async () => {
      if (!note.value) {
        await deleteDocument(user.value.uid, props.selectedDate);
        return;
      }

      let savedNote = {
        payload: note.value,
      };

      await addDocument(user.value.uid, savedNote, props.selectedDate);
    };

    const handleGetDoc = async () => {
      const doc = await getDocument(user.value.uid, props.selectedDate);

      if (doc.exists()) {
        note.value = doc.data().payload;
      } else {
        note.value = "";
      }
    };

    const handleView = async () => {
      await handleSubmit();
      router.push({ name: "dailyViewer", params: { id: props.selectedDate } });
    };

    onMounted(handleGetDoc);

    watch(props, handleGetDoc);

    return { error, note, handleSubmit, handleView, isPending };
  },
};
</script>

<style scoped>
button:disabled {
  background-color: rgb(51, 50, 50);
}
</style>
