<template>
  <div>
    <div class="chat-window">
      <div v-if="messages" class="messages" ref="messagesDiv">
        <div v-for="message in messages" :key="message.created" class="single">
          <span class="name">{{ message.user }} </span>
          <span class="message">{{ message.message }} </span>
        </div>
      </div>
    </div>
    <form>
      <textarea
        placeholder="Type a message...."
        v-model="userInput"
        @keypress.enter.prevent="handleSubmit"
        :disabled="false"
      ></textarea>
    </form>
  </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted, onUpdated, ref } from "vue";
import useNoteAgent from "@/composables/useAI.js";
import ChatbotWindow from "@/components/Chatbot/ChatbotWindow.vue";
import NewChatForm from "@/components/Chatbot/NewChatForm.vue";

const messagesDiv = ref("");
const userInput = ref("");
const messages = ref([]);
const noteAgent = useNoteAgent();

const handleSubmit = async () => {
  messages.value.push({
    user: "You",
    created: Date.now(),
    message: userInput.value,
  });

  const message = await noteAgent.ask(userInput.value);

  console.log("whaat", message);

  if (noteAgent.error.value) {
    return;
  }

  messages.value.push(message);

  userInput.value = "";
};

onUpdated(() => {
  if (messagesDiv.value) {
    messagesDiv.value.scrollTop = messagesDiv.value.scrollHeight;
  }
});
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  margin: 5px;
  gap: 10px;
  background-color: var(--widget-colors);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 30px 20px;
}

.single {
  margin: 18px 2px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
