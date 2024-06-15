import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "@/firebase/config";
import createNoteAgent from "@/agents/NoteAgent.js";
import { ref } from "vue";

const functions = getFunctions(app);
const callGPT = httpsCallable(functions, "callgpt");

const useNoteAgent = () => {
  const messages = createNoteAgent();
  const isPending = ref(false);
  const error = ref(null);

  const ask = async (newMessage) => {
    error.value = null;
    isPending.value = true;
    messages.value.push({ role: "user", content: newMessage });

    try {
      const result = await callGPT({ messages: messages.value });
      const message = result.data.choices?.[0]?.message;

      if (message) {
        messages.value.push(message);
      }

      const messageContent = message?.content;
      const created = result.data.created;

      return { user: "Note Agent", created, message: messageContent };
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  };

  return { ask, error, isPending };
};

export default useNoteAgent;
