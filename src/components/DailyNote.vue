<template>
  <button @click="handleView">View in markdown</button>
  <form @submit.prevent="handleSubmit">
    <h4 v-if="!isNoteSaved" class="saved-status">Unsaved note</h4>
    <label>Daily Note:</label>
    <textarea v-model="note"></textarea>
    <div v-if="error">{{ error }}</div>
    <button v-if="!isPending">Save</button>
    <button v-else disabled>Saving...</button>
  </form>
</template>

<script>
import { ref, watch } from "vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

export default {
  props: ["selectedDate"],
  setup(props, context) {
    const note = ref("");
    const isNoteSaved = ref(true);
    const isNewlyLoadedNote = ref(true);
    const { user } = userAuthState();
    const { getDocument, addDocument, deleteDocument, error, isPending } =
      useDoc("notes", "daily");

    const router = useRouter();

    const handleSubmit = async () => {
      if (!note.value) {
        await deleteDocument(user.value.uid, props.selectedDate);

        if (error.value) {
          return;
        }

        isNoteSaved.value = true;
      } else {
        let savedNote = {
          payload: note.value,
        };

        await addDocument(user.value.uid, savedNote, props.selectedDate);

        if (error.value) {
          return;
        }

        isNoteSaved.value = true;
      }
    };

    const handleGetDoc = async () => {
      const doc = await getDocument(user.value.uid, props.selectedDate);

      if (doc.exists()) {
        note.value = doc.data().payload;
      } else {
        note.value = "";
      }

      isNewlyLoadedNote.value = true;
      isNoteSaved.value = true;
    };

    const handleView = async () => {
      await handleSubmit();
      router.push({ name: "dailyViewer", params: { id: props.selectedDate } });
    };

    onBeforeMount(async () => {
      watch(props, handleGetDoc);

      watch(note, () => {
        if (!isNewlyLoadedNote.value) {
          isNoteSaved.value = false;
        } else {
          isNewlyLoadedNote.value = false;
        }
      });
    });

    return { error, note, isNoteSaved, handleSubmit, handleView, isPending };
  },
};
</script>

<style scoped>
button:disabled {
  background-color: rgb(51, 50, 50);
}
.saved-status {
  color: brown;
}
</style>
