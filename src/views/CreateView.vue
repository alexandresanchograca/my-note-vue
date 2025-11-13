<template>
  <div class="note-content">
    <AddUsers v-model="sharedUsers"></AddUsers>
    <form ref="componentRef" @submit.prevent="handleSubmit">
      <div class="title-container">
        <label class="title-label">Title:</label>
        <input class="title-label" v-model="note.title" required />
      </div>
      <label class="note-label">Payload:</label>
      <code-mirror @ready="focusEditor" v-model="note.payload" basic :dark="dark" :extensions="extensions"
        :style="{ fontSize: fontSize + 'px', flexGrow: '1', overflowY: 'scroll' }" />
      <div v-if="error">{{ error }}</div>
      <button v-if="!isPending">Create</button>
      <button v-else disabled>Saving...</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AddUsers from "@/components/AddUsers.vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";
import { Timestamp } from "@firebase/firestore";
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

const router = useRouter();
const { user } = userAuthState();
const { componentRef, componentHeight } = useAvailableHeight()

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

const fontSize = ref(16);
const dark = ref(window.matchMedia("(prefers-color-scheme: dark)").matches);
const note = ref({
  title: "",
  payload: "",
  owner: user.value.email,
  users: [],
});

const sharedUsers = ref([]);

const { addDocument, error, isPending } = useDoc("shared-notes");

const focusEditor = ({ view }) => view.focus();

const handleSubmit = async () => {
  note.value.users = sharedUsers.value
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

  await addDocument(savedNote);

  if (error.value) {
    return;
  }

  router.push({ name: "shared" });
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

.note-content>button {
  margin: 5px;
}

button:disabled {
  background-color: rgb(51, 50, 50);
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

.title-label {
  float: left;
}

.note-label {
  border: 0px;
  margin-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px;
  border-color: rgb(222, 222, 220);
  border-style: dashed;
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
