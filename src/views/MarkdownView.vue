<template>
  <button @click="handleClick">Back</button>
  <div class="markdown-view">
    <div class="line-numbers language-markup" v-html="formattedContent"></div>
  </div>
</template>

//@Credits https://github.com/michaeldhead/vue32-markdown
<script setup>
import { marked } from "marked";
import prism from "prismjs";

// Add numbering to the Code blocks
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "prismjs/plugins/toolbar/prism-toolbar.js"; // required for the following plugins
import "prismjs/plugins/toolbar/prism-toolbar.css"; // required for the following plugins
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js"; // show copy button
import "prismjs/plugins/show-language/prism-show-language.js"; // display the language of the code block

import { onMounted, ref } from "vue";
import userAuthState from "@/composables/userAuthState";
import useDoc from "@/composables/useDoc";
import { useRouter } from "vue-router";

const props = defineProps(["id"]);
const note = ref("");
const formattedContent = ref("");

const { user } = userAuthState();
const { getDocument, error } = useDoc("notes", "daily");
const router = useRouter();

marked.use({
  highlight: (code, lang) => {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  },
});

onMounted(async () => {
  const doc = await getDocument(user.value.uid, props.id);

  if (doc.exists()) {
    note.value = doc.data().payload;
    formattedContent.value = marked.parse(note.value);
    prism.highlightAll();
  }
});

const handleClick = () => {
  router.go(-1);
};
</script>

<style>
@import "prismjs/themes/prism-tomorrow.css";
</style>
