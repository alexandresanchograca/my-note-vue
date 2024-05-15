<template>
  <div class="note-content">
    <button @click="handleView">View in markdown</button>
    <form @submit.prevent="handleSubmit">
      <h4 v-show="!isNoteSaved" class="saved-status">Unsaved note</h4>
      <label class="note-label">Forever note:</label>
      <textarea v-model="note"></textarea>
      <div v-if="error">{{ error }}</div>
      <button v-if="!isPending">Save</button>
      <button v-else disabled>Saving...</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";
import { Timestamp } from "@firebase/firestore";
import { watch } from "vue";
import { onBeforeMount } from "vue";

export default {
  setup() {
    const note = ref("");
    const isNoteSaved = ref(true);
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

      if (error.value) {
        return;
      }

      isNoteSaved.value = true;
    };

    const handleView = async () => {
      await handleSubmit();
      router.push({ name: "viewer" });
    };

    onBeforeMount(async () => {
      const doc = await getDocument(user.value.uid);

      if (doc.exists()) {
        note.value = doc.data().payload;
      }

      watch(note, () => {
        isNoteSaved.value = false;
      });
    });

    return { error, isPending, note, isNoteSaved, handleSubmit, handleView };
  },
};
</script>

<style scoped>
.note-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  height: 90vh;
}
form {
  display: flex;
  flex-direction: column;
  margin: 5px;
}
form > textarea {
  resize: none;
  flex-basis: 100%;
}
.note-content > button {
  margin: 5px;
}
button:disabled {
  background-color: rgb(51, 50, 50);
}
.saved-status {
  font-weight: bold;
  color: brown;
  text-align: center;
}
.note-label {
  border: 0px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px;
  border-color: rgb(222, 222, 220);
  border-style: dashed;
}
</style>
