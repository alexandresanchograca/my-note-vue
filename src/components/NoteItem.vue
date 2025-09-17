<template>
  <div class="note-content">
    <button @click="handleView">View in markdown</button>
    <AddUsers v-if="note" v-model="note.users"></AddUsers>
    <form ref="componentRef" @submit.prevent="">
      <h4 v-show="!isNoteSaved" class="saved-status">Unsaved note</h4>
      <div class="title-container">
        <label class="title-label">Title:</label>
        <input class="title-label" v-model="note.title" required />
      </div>
      <div class="note-header">
        <label>Payload:</label>
        <div class="font-size-changer">
          <button class="btn" @click="increaseFontSize">+</button>
          <button class="btn" @click="decreaseFontSize">-</button>
        </div>
      </div>
      <code-mirror v-model="note.payload" basic :dark="dark" :extensions="extensions"
        :style="{ fontSize: fontSize + 'px', flexGrow: '1', overflowY: 'scroll' }" />
      <div v-if="error">{{ error }}</div>
      <button v-if="!isPending" @click="handleSubmit">Save</button>
      <button v-else disabled>Saving...</button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";
import { Timestamp } from "@firebase/firestore";
import { watch } from "vue";
import { onBeforeMount } from "vue";
import AddUsers from "./AddUsers.vue";
import CodeMirror from "vue-codemirror6";
import { markdownLanguage, markdown } from "@codemirror/lang-markdown";
import { Vim, vim } from "@replit/codemirror-vim";
import { EditorView, lineNumbers } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { bespin as selectedTheme } from "thememirror";
import { languages } from "@codemirror/language-data";
import { bracketMatching, defaultHighlightStyle } from "@codemirror/language";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";
import { javascript } from "@codemirror/lang-javascript";
import useAvailableHeight from "@/composables/useAvailableHeight";

const props = defineProps(["noteId"]);

const myHighlightStyle = HighlightStyle.define([
  { tag: tags.heading1, fontSize: "1.6em", fontWeight: "bold" },
  { tag: tags.heading2, fontSize: "1.4em", fontWeight: "bold" },
  { tag: tags.heading3, fontSize: "1.2em", fontWeight: "bold" },
]);

const extensions = [
  selectedTheme,
  vim(),
  lineNumbers({
    formatNumber: (lineNo, state) => {
      const currentLine = state.doc.lineAt(state.selection.main.head).number;
      return Math.abs(lineNo - currentLine).toString();
    },
  }),
  EditorView.lineWrapping,
  markdown({
    base: markdownLanguage,
    codeLanguages: languages,
    addKeymap: true,
    extensions: [javascript()],
  }),
  bracketMatching(),
  syntaxHighlighting(myHighlightStyle),
];

Vim.defineEx("write", "w", () => handleSubmit());

const note = ref("");
const fontSize = ref(16);
const isNoteSaved = ref(true);
const isDocChanged = ref(false);
const dark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
const router = useRouter();
const { getDocumentRealtime, setDocument, deleteDocument, error, isPending } =
  useDoc("shared-notes");

const { componentRef, componentHeight } = useAvailableHeight()

const handleSubmit = async () => {
  note.value.users = note.value.users
    .filter((usr) => usr.length)
    .reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
    }, []);

  let savedNote = {
    ...note.value,
    modifiedAt: Timestamp.fromDate(new Date()),
  };

  await setDocument(props.noteId, savedNote);

  if (error.value) {
    return;
  }

  isNoteSaved.value = true;
};

const handleView = async () => {
  await handleSubmit();
  router.push({ name: "viewer", state: { payload: note.value.payload } });
};

onBeforeMount(() => {
  const { document: doc } = getDocumentRealtime(props.noteId);

  watch(doc, () => {
    isDocChanged.value = true;
    note.value = doc.value;
  });

  watch(
    note,
    () => {
      if (!isDocChanged.value) {
        isNoteSaved.value = false;
      } else {
        isDocChanged.value = false;
      }
    },
    { deep: true }
  );
});

const increaseFontSize = () => {
  fontSize.value++;
};
const decreaseFontSize = () => {
  fontSize.value--;
};
</script>

<style scoped>
.note-content {
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
  margin: 5px;
  height: calc(v-bind(componentHeight) - 16px);
}

form>textarea {
  resize: none;
  flex-basis: 45svh;
}

.note-content>button {
  margin: 5px;
}

button:disabled {
  background-color: rgb(51, 50, 50);
}

.saved-status {
  font-weight: bold;
  color: brown;
  text-align: center;
}

.title-container {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  border: 0px;
  border-bottom: 1px;
  border-color: rgb(222, 222, 220);
  border-style: dashed;
  margin-bottom: 20px;
}

.title-container input {
  font-size: 1.2rem;
}

.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0px;
  border-bottom: 1px;
  border-color: rgb(222, 222, 220);
  border-style: dashed;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.font-size-changer {
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(177, 177, 177, 0.5);
  border-radius: 8px;
  padding: 5px;
  margin: 0px;
}

.btn {
  margin: 0px;
}

:deep(.cm-editor) {
  height: 100%;
}

:deep(.cm-fenced-code) {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
  border-radius: 0.3em;
}

:deep(.ͼ1x) {
  background: var(--widget-colors);
}

:deep(.ͼ1x .cm-gutters) {
  background: #2d2d2d;
}

:deep(.cm-line) {
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-size: 1em;
  line-height: 1.5;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 4;
  hyphens: none;
}
</style>
