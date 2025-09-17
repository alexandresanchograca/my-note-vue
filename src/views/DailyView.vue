<template>
  <div class="daily-content">
    <button @click="wasViewClicked = true">View in markdown</button>
    <div class="daily-notes">
      <NoteCalendar class="calendar-col" v-model="selectedDate"></NoteCalendar>
      <DailyNote
        class="note-col"
        :selectedDate="selectedDate"
        :wasViewClicked="wasViewClicked"
      ></DailyNote>
    </div>
  </div>
</template>

<script setup>
import DailyNote from "@/components/DailyNote.vue";
import NoteCalendar from "@/components/NoteCalendar.vue";
import { ref } from "vue";

const props = defineProps(["date"]);
const selectedDate = ref(props.date);
const wasViewClicked = ref(false);
</script>

<style scoped>
.daily-content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
}
.daily-content > button {
  margin: 5px;
}
.daily-notes {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
  flex-wrap: wrap;
  height: 60vh;
}
.calendar-col {
  margin: 5px;
  width: 250px;
}
.note-col {
  flex-grow: 1;
}
</style>
