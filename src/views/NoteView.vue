<template>
  <div v-if="id">
    <NoteItem :noteId="id"></NoteItem>
  </div>
</template>

<script setup>
import NoteItem from "@/components/NoteItem.vue";

const props = defineProps(["id"]);
</script>

<style></style>
