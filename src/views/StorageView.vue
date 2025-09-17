<template>
  <button @click="triggerFileInput">Upload new file</button>
  <div v-if="isUploading" class="loading-bar-wrapper">
    <div class="loading-bar" :style="{ width: uploadProgress + '%' }"></div>
  </div>
  <input type="file" ref="fileInput" style="display: none" @change="handleFileUpload" />
  <div class="storage-files">
    <div v-for="item in storageDocs" :key="item.url" class="storage-item">
      <button class="delete item-btn" @click="handleDelete(item.fullPath)">
        <i class="fa-solid fa-trash"></i>
      </button>
      <h3>{{ item.name }}</h3>
      <div class="action-buttons">
        <button class="copy item-btn" @click="copyLink(item.url)" :disabled="isCopying[item.url]" :aria-live="'polite'">
          <i class="fa-solid fa-link" v-if="!copied[item.url]"></i>
          <i class="fa-solid fa-check" v-else></i>
          &nbsp;
        </button>
        <a class="downlaod item-btn" :href="item.url" target="_blank">
          <i class="fa-solid fa-download"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useUserStorage from "@/composables/useUserStorage.js";
import { onBeforeMount } from "vue";

const fileInput = ref(null);
const isUploading = ref(false);
const copied = ref({});
const isCopying = ref({});

const { storageDocs, uploadProgress, uploadFile, deleteFile, getAllDocsUrls } =
  useUserStorage();

onBeforeMount(async () => {
  await getAllDocsUrls();
});

function triggerFileInput() {
  fileInput.value.click();
}

async function handleFileUpload(event) {
  isUploading.value = true;
  const file = event.target.files[0];
  if (file) {
    try {
      await uploadFile(file);
    } catch (err) {
      console.error("[ERROR] Uploading file failed:", err);
    } finally {
      isUploading.value = false;
    }
  }
}

async function handleDelete(filePath) {
  await deleteFile(filePath);
}

async function copyLink(url) {
  if (!url) return;
  if (isCopying.value[url]) return;
  isCopying.value = { ...isCopying.value, [url]: true };

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(url);
    } else {
      // Fallback (works in non-HTTPS or older browsers)
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    copied.value = { ...copied.value, [url]: true };
    setTimeout(() => {
      copied.value = { ...copied.value, [url]: false };
    }, 1500);
  } catch (e) {
    console.error("[ERROR] Copy failed:", e);
  } finally {
    isCopying.value = { ...isCopying.value, [url]: false };
  }
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
  box-sizing: content-box;
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

.action-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
}

a {
  background: var(--secondary);
  border-radius: 8px;
  margin-top: 8px;
  border: 0;
  padding: 8px 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
}

a:hover,
button:hover,
.btn:hover {
  background: var(--widget-colors);
  color: var(--widget-colors);
}

a:disabled {
  opacity: 0.5;
  color: var(--primary);
  background: var(--secondary);
  cursor: not-allowed;
}

.loading-bar-wrapper {
  background: var(--widget);
  border-radius: 8px;
  height: 20px;
  overflow: hidden;
  position: relative;
  margin: 16px 0 16px 0;
}

.loading-bar {
  height: 100%;
  background: var(--primary);
  border-radius: 8px;
  width: 0%;
  transition: width 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
}
</style>
