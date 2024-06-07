<template>
  <div v-if="notes" id="shared-notes">
    <button class="btn" @click="handleCreate">Create note</button>
    <NotePreview
      v-for="note in notes"
      :key="note.title"
      :note="note"
    ></NotePreview>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCollection from "@/composables/useCollection";
import NotePreview from "@/components/NotePreview.vue";
import userAuthState from "@/composables/userAuthState";

const router = useRouter();
const { getDocuments } = useCollection();
const { user } = userAuthState();

const { documents: notes, error } = getDocuments(
  "shared-notes",
  ["users", "array-contains", user.value.email],
  ["owner", "==", user.value.email]
);

const handleCreate = () => {
  router.push({ name: "create" });
};
</script>

<style scoped>
#shared-notes {
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 10px;
}
.btn {
  background: var(--secondary);
  border-radius: 8px;
  margin: 0;
  border: 0;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
}
</style>
