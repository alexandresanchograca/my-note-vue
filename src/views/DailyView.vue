<template>
  <div class="daily-notes">
    <NoteCalendar class="calendar-col" @changedDate="handleDate"></NoteCalendar>
    <DailyNote class="note-col" :selectedDate="selectedDate"></DailyNote>
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
  flex-wrap: wrap;
}
.calendar-col {
  margin: 5px;
  width: 250px;
}
.note-col {
  flex-grow: 1;
}
</style>
