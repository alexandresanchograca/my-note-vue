<template>
  <div class="note-content">
    <AddUsers v-model="sharedUsers"></AddUsers>
    <form @submit.prevent="handleSubmit">
      <div class="title-container">
        <label class="title-label">Title:</label>
        <input class="title-label" v-model="note.title" required />
      </div>
      <label class="note-label">Payload:</label>
      <textarea v-model="note.payload"></textarea>
      <div v-if="error">{{ error }}</div>
      <button v-if="!isPending">Create</button>
      <button v-else disabled>Saving...</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddUsers from "@/components/AddUsers.vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";
import { Timestamp } from "@firebase/firestore";
import { watch } from "vue";
import { onBeforeMount } from "vue";

const router = useRouter();
const { user } = userAuthState();

const note = ref({
  title: "",
  payload: "",
  owner: user.value.email,
  users: [],
});

const sharedUsers = ref([]);

const {
  getDocument,
  getDocumentRealtime,
  addDocument,
  deleteDocument,
  updateDocument,
  error,
  isPending,
} = useDoc("shared-notes");

const handleSubmit = async () => {
  console.log(sharedUsers.value);

  let savedNote = {
    ...note.value,
    modifiedAt: Timestamp.fromDate(new Date()),
  };

  await addDocument(savedNote);

  if (error.value) {
    return;
  }

  router.push({ name: "shared" });
};
</script>

<style scoped>
.note-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 90svh;
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

.title-label {
  float: left;
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
