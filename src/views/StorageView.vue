<template>
  <button @click="handleUpload">Upload new file</button>
  <div class="storage-files">
    <div v-for="item in storageItems" :key="item.id" class="storage-item">
      <button class="delete item-btn" @click="handleDelete()">
        <i class="fa-solid fa-trash"></i>
      </button>
      <h3>File name</h3>
      <button class="download item-btn" @click="handleDownload()">
        Download
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const storageItems = ref([{ id: "kappa" }]);

function handleUpload() {
  console.log("Uploading file...");
}

function handleDownload() {
  console.log("Downloading file...");
}

function handleDelete() {
  console.log("Deleting file...");
}
</script>

<style scoped>
.storage-files {
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
