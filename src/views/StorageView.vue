<template>
  <button @click="triggerFileInput">Upload new file</button>
  <input
    type="file"
    ref="fileInput"
    style="display: none"
    @change="handleFileUpload"
  />
  <div class="storage-files">
    <div v-for="item in storageDocs" :key="item.url" class="storage-item">
      <button class="delete item-btn" @click="handleDelete(item.fullPath)">
        <i class="fa-solid fa-trash"></i>
      </button>
      <h3>{{ item.name }}</h3>
      <button class="download item-btn">
        <a class="item-btn" :href="item.url" target="_blank">
          <i class="fa-solid fa-download" style="min-width: 100px"></i>
        </a>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useUserStorage from "@/composables/useUserStorage.js";
import { onBeforeMount } from "vue";

const fileInput = ref(null);

const { storageDocs, uploadProgress, uploadFile, deleteFile, getAllDocsUrls } =
  useUserStorage();

onBeforeMount(async () => {
  await getAllDocsUrls();
});

function triggerFileInput() {
  fileInput.value.click();
}

async function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    try {
      await uploadFile(file);
    } catch (err) {
      console.error("[ERROR] Uploading file failed:", err);
    }
  }
}

async function handleDelete(filePath) {
  await deleteFile(filePath);
}
</script>

<style scoped>
.storage-item {
  margin: 1rem 0;
}

.storage-item {
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

h3 {
  overflow: hidden;
  text-wrap: wrap;
  font-weight: bold;
}

.item-btn {
  height: 80%;
  flex-shrink: 0;
}

.view {
  margin: 20px;
  width: 160px;
  background-color: var(--secondary);
}

.delete {
  margin: 20px 0px;
  background-color: rgba(150, 37, 0, 0.5);
}
</style>
