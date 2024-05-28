<template>
  <div class="note-calendar">
    <DatePicker
      transparent
      @click="emitSelectedDate"
      :attributes="attrs"
      v-model="date"
      :is-required="true"
    ></DatePicker>
  </div>
</template>

<script setup>
import { DatePicker } from "v-calendar";
import { onMounted, ref, watch, watchEffect } from "vue";
import useCollection from "@/composables/useCollection";
import userAuthState from "@/composables/userAuthState";

const date = ref(new Date());
const attrs = ref(null);
const selectedDate = ref(date.value.toISOString().substring(0, 10));
const { user } = userAuthState();
const emit = defineEmits(["changedDate"]);

const { getDocumentIdsRealtime } = useCollection();

const emitSelectedDate = () => {
  selectedDate.value = date.value.toISOString().substring(0, 10);
  emit("changedDate", selectedDate.value);
};

const { documentIds } = getDocumentIdsRealtime(`notes/${user.value.uid}/daily`);

watch(documentIds, () => {
  attrs.value = [
    {
      dot: true,
      dates: documentIds.value,
    },
  ];
});

onMounted(emitSelectedDate);
</script>

<style>
.note-calendar {
  margin-top: 5px;
}
</style>
