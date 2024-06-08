<template>
  <div class="note-content">
    <button @click="handleView">View in markdown</button>
    <AddUsers v-if="note" v-model="note.users"></AddUsers>
    <form @submit.prevent="handleSubmit">
      <h4 v-show="!isNoteSaved" class="saved-status">Unsaved note</h4>
      <div class="title-container">
        <label class="title-label">Title:</label>
        <input class="title-label" v-model="note.title" required />
      </div>
      <label class="note-label">Payload:</label>
      <textarea v-model="note.payload"></textarea>
      <div v-if="error">{{ error }}</div>
      <button v-if="!isPending">Save</button>
      <button v-else disabled>Saving...</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";
import { Timestamp } from "@firebase/firestore";
import { watch } from "vue";
import { onBeforeMount } from "vue";
import AddUsers from "./AddUsers.vue";

const props = defineProps(["noteId"]);

const note = ref("");

const isNoteSaved = ref(true);
const isDocChanged = ref(false);
const router = useRouter();
const { getDocumentRealtime, setDocument, deleteDocument, error, isPending } =
  useDoc("shared-notes");

const handleSubmit = async () => {
  note.value.users = note.value.users
    .filter((usr) => usr.length)
    .reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

  let savedNote = {
    ...note.value,
    modifiedAt: Timestamp.fromDate(new Date()),
  };

  await setDocument(props.noteId, savedNote);

  if (error.value) {
    return;
  }

  isNoteSaved.value = true;
};

const handleView = async () => {
  await handleSubmit();
  router.push({ name: "viewer", state: { payload: note.value.payload } });
};

onBeforeMount(() => {
  const { document: doc } = getDocumentRealtime(props.noteId);

  watch(doc, () => {
    isDocChanged.value = true;
    note.value = doc.value;
  });

  watch(
    note,
    () => {
      if (!isDocChanged.value) {
        isNoteSaved.value = false;
      } else {
        isDocChanged.value = false;
      }
    },
    { deep: true }
  );
});
</script>

<style scoped>
.note-content {
  display: flex;
  flex-direction: column;
}
form {
  display: flex;
  flex-direction: column;
  margin: 5px;
}
form > textarea {
  resize: none;
  flex-basis: 45svh;
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

.title-container {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border: 0px;
  border-bottom: 1px;
  border-color: rgb(222, 222, 220);
  border-style: dashed;
  margin-bottom: 20px;
}

.title-container input {
  font-size: 1.2rem;
}

.note-label {
  border: 0px;
  margin-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px;
  border-color: rgb(222, 222, 220);
  border-style: dashed;
}
</style>
