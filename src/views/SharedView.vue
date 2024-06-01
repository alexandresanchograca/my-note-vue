<template>
  <div v-if="notes" id="shared-notes">
    <button class="btn" @click="handleCreate">Create note</button>
    <div v-for="note in notes" :key="note.title" class="note">
      <ul v-if="note.users">
        <li v-for="user in note.users" :key="user">
          <i class="fa-solid fa-user"></i> {{ user }}
        </li>
        <li v-if="note.users.length > 3">
          <i class="fa-solid fa-user"></i> ...
        </li>
      </ul>
      <div class="note-title">
        <h3>{{ note.title }}</h3>
      </div>
      <button class="view-btn" @click="handleView(note)">View</button>
    </div>
  </div>
</template>

<script setup>
import { watch, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import useCollection from "@/composables/useCollection";
import userAuthState from "@/composables/userAuthState";

const router = useRouter();
const { getDocuments } = useCollection();
const { user } = userAuthState();

const { documents: notes, error } = getDocuments(
  "shared-notes",
  ["users", "array-contains", user.value.email],
  ["owner", "==", user.value.email]
);

watch(notes, () => {
  console.log(notes.value);
});

const handleCreate = () => {
  router.push({ name: "create" });
};

const handleView = (note) => {
  router.push({ name: "note", params: { id: note.id } });
};
</script>

<style scoped>
#shared-notes {
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 10px;
}
.note {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 10px;
  gap: 2.8rem;
  height: 140px;
  overflow: hidden;
  background: #575757;
}

.note-title {
  overflow: hidden;
}

h3 {
  text-wrap: wrap;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
  line-height: 1.6rem;

  @media (max-width: 600px) {
    display: none;
  }
}

li {
  font-size: 0.85rem;
  text-wrap: nowrap;
}

.fa-user {
  color: #252222;
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

.view-btn {
  margin: 20px;
  width: 160px;
  height: 80%;
  background-color: var(--secondary);
  flex-shrink: 0;
}
</style>
