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

<style scoped>
.daily-notes {
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-row: 1fr;
}
</style>
