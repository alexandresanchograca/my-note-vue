<template>
  <div class="chat-window">
    <div v-if="messages" class="messages" ref="messagesDiv">
      <div v-for="message in messages" :key="message.created" class="single">
        <span class="name">{{ message.user }}: </span>
        <span class="message language-markup" v-html="message.message"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onUpdated } from "vue";

const props = defineProps(["messages"]);
const messagesDiv = ref("");

onUpdated(() => {
  if (messagesDiv.value) {
    messagesDiv.value.scrollTop = messagesDiv.value.scrollHeight;
  }
});
</script>

<style scoped>
.chat-window {
  background-color: var(--widget-colors);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 30px 20px;
}

.single {
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  margin: 5px;
  gap: 10px;
  border-radius: 8px;
  padding: 12px;
}

.name {
  align-self: flex-start;
  padding: 2px 10px;
  border-radius: 8px;
  background-color: #5f5252;
  font-weight: bold;
  margin-right: 6px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
