<template>
  <Navbar></Navbar>
  <div class="content">
    <router-view />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
</style>
