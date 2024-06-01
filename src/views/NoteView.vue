<template>
  <div v-if="id">
    <SharedNote :noteId="id"></SharedNote>
  </div>
</template>

<script setup>
import SharedNote from "@/components/SharedNote.vue";

const props = defineProps(["id"]);
</script>

<style></style>
