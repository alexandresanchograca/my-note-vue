<template>
  <div v-if="notes" id="shared-notes">
    <button class="btn" @click="handleCreate">Create note</button>
    <div
      class="drop-zone"
      @drop="onDrop($event, 0)"
      @dragenter.prevent
      @dragover.prevent
    ></div>
    <div v-for="(note, index) in notes" :key="note.title">
      <NotePreview
        :note="note"
        draggable="true"
        @dragstart="startDrag($event, index)"
      ></NotePreview>
      <div
        class="drop-zone"
        @drop="onDrop($event, index)"
        @dragenter.prevent
        @dragover.prevent
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useCollection from "@/composables/useCollection";
import NotePreview from "@/components/NotePreview.vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { Timestamp } from "@firebase/firestore";

const router = useRouter();
const { getDocuments } = useCollection();
const { updateDocument } = useDoc("shared-notes");
const { user } = userAuthState();

const { documents: notes, error } = getDocuments(
  "shared-notes",
  ["users", "array-contains", user.value.email],
  ["owner", "==", user.value.email]
);

const startDrag = (event, index) => {
  event.dataTransfer.setData("noteIndex", index);
};

const onDrop = async (event, index) => {
  const draggedNoteIndex = event.dataTransfer.getData("noteIndex");

  if (
    !notes.value ||
    draggedNoteIndex >= notes.value.length ||
    index >= notes.value.length ||
    draggedNoteIndex == index
  ) {
    return;
  }

  const grabbedNote = notes.value[draggedNoteIndex];
  const targetNote = notes.value[index];

  if (!grabbedNote || !targetNote) {
    return;
  }

  const temp = grabbedNote.modifiedAt.seconds;
  grabbedNote.modifiedAt.seconds = targetNote.modifiedAt.seconds;
  targetNote.modifiedAt.seconds = temp;

  await updateDocument(grabbedNote.id, { modifiedAt: grabbedNote.modifiedAt });
  await updateDocument(targetNote.id, { modifiedAt: targetNote.modifiedAt });
};

const handleCreate = () => {
  router.push({ name: "create" });
};
</script>

<style scoped>
#shared-notes {
  display: flex;
  flex-direction: column;
  margin: 5px;
}

.drop-zone {
  box-sizing: border-box;
  width: 100%;
  height: 10px;
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
