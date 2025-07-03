<template>
  <button @click="handleUpload">Upload new file</button>
  <div v-for="item in storageItems" :key="item.id" class="storage-item">
    {{ item.id }}
  </div>
  <div class="storage-view-component">Foobar</div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const storageItems = ref([{ id: "kappa" }]);

function handleUpload() {
  console.log("Uploading file...");
}
</script>

<style></style>
