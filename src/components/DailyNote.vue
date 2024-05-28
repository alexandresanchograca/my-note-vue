<template>
  <form @submit.prevent="handleSubmit">
    <h4 v-if="!isNoteSaved" class="saved-status">Unsaved note</h4>
    <label class="note-label">Daily Note:</label>
    <textarea v-model="note"></textarea>
    <div v-if="error">{{ error }}</div>
    <button v-if="!isPending">Save</button>
    <button v-else disabled>Saving...</button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";
import { onBeforeMount } from "vue";

const props = defineProps(["selectedDate", "wasViewClicked"]);

const note = ref("");
const isNoteSaved = ref(true);
const isNewlyLoadedNote = ref(true);
const isDocChanged = ref(false);
const { user } = userAuthState();
const { getDocumentRealtime, addDocument, deleteDocument, error, isPending } =
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

let unWatchDoc = null;
const handleGetDoc = () => {
  const { document: doc } = getDocumentRealtime(
    user.value.uid,
    props.selectedDate
  );

  if (unWatchDoc) {
    //Removing old listener
    unWatchDoc();
  }

  unWatchDoc = watch(doc, () => {
    console.log(doc.value);
    isDocChanged.value = true;
    if (doc.value) {
      note.value = doc.value.payload;
    } else {
      note.value = "";
    }
  });

  isNewlyLoadedNote.value = true;
  isNoteSaved.value = true;
};

const handleView = async () => {
  await handleSubmit();
  router.push({ name: "dailyViewer", params: { id: props.selectedDate } });
};

const handlePropsChange = () => {
  if (props.wasViewClicked) {
    handleView();
  } else {
    handleGetDoc();
  }
};

onBeforeMount(() => {
  watch(props, handlePropsChange);

  const wat = watch(note, () => {
    if (!isNewlyLoadedNote.value && !isDocChanged.value) {
      isNoteSaved.value = false;
    } else {
      isNewlyLoadedNote.value = false;
      isDocChanged.value = false;
    }
  });
});
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 5px;
}
form > textarea {
  flex-basis: 70vh;
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
