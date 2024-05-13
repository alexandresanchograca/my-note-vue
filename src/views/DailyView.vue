<template>
  <div class="daily-notes">
    <NoteCalendar @changedDate="handleDate"></NoteCalendar>
    <DailyNote :selectedDate="selectedDate"></DailyNote>
  </div>
</template>

<script>
import DailyNote from "@/components/DailyNote.vue";
import NoteCalendar from "@/components/NoteCalendar.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    DailyNote,
    NoteCalendar,
  },
  setup() {
    const selectedDate = ref(null);

    const handleDate = (eventData) => {
      selectedDate.value = eventData;
    };

    return { handleDate, selectedDate };
  },
};
</script>

<style>
.daily-notes {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
}
form {
  display: flex;
  flex-grow: 1;
  margin: 5px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
textarea {
  flex-basis: 480px;
}
</style>
