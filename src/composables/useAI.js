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
    messages.value.push({
      user: "Note Agent",
      role: "user",
      content: newMessage,
    });

    try {
      const result = await callGPT({ messages: messages.value });
      const message = result.data.choices?.[0]?.message?.content;
      const created = result.data.created;

      return { created, message };
    } catch (err) {
      error.value = err.message;
    } finally {
      isPending.value = false;
    }
  };

  return { ask, error, isPending };
};

export default useNoteAgent;
