<template>
  <div>
    <div class="chat-window">
      <div v-if="messages" class="messages" ref="messagesDiv">
        <div v-for="message in messages" :key="message.created" class="single">
          <span class="name">{{ message.user }}: </span>
          <span class="message language-markup" v-html="message.message"></span>
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
import { computed, onBeforeMount, onMounted, onUpdated, ref, watch } from "vue";
import useNoteAgent from "@/composables/useAI.js";
import ChatbotWindow from "@/components/Chatbot/ChatbotWindow.vue";
import NewChatForm from "@/components/Chatbot/NewChatForm.vue";

import { marked } from "marked";
import prism from "prismjs";

// Add numbering to the Code blocks
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar.js"; // required for the following plugins
import "prismjs/plugins/toolbar/prism-toolbar.css"; // required for the following plugins
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js"; // show copy button
import "prismjs/plugins/show-language/prism-show-language.js"; // display the language of the code block

const messagesDiv = ref("");
const userInput = ref("");
const messages = ref([]);
const noteAgent = useNoteAgent();

marked.use({
  highlight: (code, lang) => {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

onMounted(() => {
  const message = "Hi!, How can I help you today";
  const formattedMessage = marked.parse(message);
  prism.highlightAll();

  messages.value.push({
    user: "Note Agent",
    created: Date.now(),
    message: formattedMessage,
  });
});

const handleSubmit = async () => {
  const userMessage = userInput.value;
  const formattedUserMessage = marked.parse(userMessage);
  prism.highlightAll();

  messages.value.push({
    user: "You",
    created: Date.now(),
    message: formattedUserMessage,
  });

  const message = await noteAgent.ask(userInput.value);

  if (noteAgent.error.value) {
    return;
  }

  const formattedAgentMessage = marked.parse(message.message);
  prism.highlightAll();

  message.message = formattedAgentMessage;

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
  background-color: var(--widget-colors);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 30px 20px;
  margin: 5px;
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

form {
  margin: 5px;
}
</style>
