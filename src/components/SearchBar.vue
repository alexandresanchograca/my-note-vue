<template>
  <div id="search-notes">
    <form @submit.prevent="handleSearch" class="search-bar">
      <input placeholder="search" type="text" v-model="searchValue" />
      <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </form>
    <NotePreview
      v-for="note in searchedNotes"
      :key="note.title"
      :note="note"
    ></NotePreview>
    <NotePreview
      v-for="note in searchedDailyNotes"
      :key="note.title"
      :note="note"
      :dailyNote="true"
    ></NotePreview>
  </div>
</template>

<script setup>
import NotePreview from "./NotePreview.vue";
import useCollection from "@/composables/useCollection";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { ref, watch } from "vue";

const { getDocuments } = useCollection();
const { user } = userAuthState();
const searchValue = ref("");
const searchedNotes = ref([]);
const searchedDailyNotes = ref([]);

const { documents: notes, error } = getDocuments(
  "shared-notes",
  ["users", "array-contains", user.value.email],
  ["owner", "==", user.value.email]
);

const { getDocumentRealtime, error: docError } = useDoc("notes");

const { document: doc } = getDocumentRealtime(user.value.uid);

const { getSubcollectionDocuments } = useCollection();

const { documents: dailyNotes, error: dailyError } = getSubcollectionDocuments(
  "notes",
  user.value.uid,
  "daily"
);

watch(
  notes,
  () => {
    notes.value.forEach((note) => searchedNotes.value.push(note));
  },
  { once: true }
);

watch(
  doc,
  () => {
    searchedNotes.value.push({ ...doc.value, isPersistent: true });
  },
  { once: true }
);

watch(
  dailyNotes,
  () => {
    dailyNotes.value.forEach((note) => searchedDailyNotes.value.push(note));
  },
  { once: true }
);

const searchNotes = (notesCollection, searchParams) => {
  const searchValues = searchParams.value.toLowerCase().split(" ");
  const tempNotes = [];

  //Only the loops are O(n*m)... and the includes is O(k) = O(n*m*k)
  //Using for loops as copium for this
  for (var i = 0; i < notesCollection.value.length; i++) {
    const noteTitle = notesCollection.value[i].title;
    const notePayload = notesCollection.value[i].payload.toLowerCase();
    for (var j = 0; j < searchValues.length; j++) {
      if (notePayload.includes(searchValues[j])) {
        tempNotes.push(notesCollection.value[i]);
      }

      if (noteTitle && noteTitle.includes(searchValues[j])) {
        tempNotes.push(notesCollection.value[i]);
      }
    }
  }

  return tempNotes;
};

const handleSearch = () => {
  searchedNotes.value = searchNotes(notes, searchValue);
  searchedDailyNotes.value = searchNotes(dailyNotes, searchValue);
};
</script>

<style scoped>
#search-notes {
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 10px;
}

.search-bar {
  display: flex;
  box-sizing: border-box;
  align-self: center;
  width: 100%;
}

.search-bar input {
  width: 95%;
}

.search-bar button {
  box-sizing: border-box;
  flex-grow: 1;
  margin-left: 10px;
  padding: 10px;
}
</style>
