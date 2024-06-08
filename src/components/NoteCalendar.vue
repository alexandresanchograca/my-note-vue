<template>
  <div class="note-calendar">
    <DatePicker
      transparent
      :attributes="attrs"
      v-model="date"
      :is-required="true"
    ></DatePicker>
  </div>
</template>

<script setup>
import { DatePicker } from "v-calendar";
import { onMounted, ref, watch, defineModel } from "vue";
import useCollection from "@/composables/useCollection";
import userAuthState from "@/composables/userAuthState";

const date = ref(new Date());
const attrs = ref(null);
const { user } = userAuthState();

const selectedDate = defineModel();

const { getDocumentIdsRealtime } = useCollection();

const assignSelectedDate = () => {
  selectedDate.value = date.value.toISOString().substring(0, 10);
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

onMounted(() => {
  if (!selectedDate.value) {
    assignSelectedDate();
  } else {
    date.value = new Date(selectedDate.value);
  }

  watch(date, () => {
    assignSelectedDate();
  });
});
</script>

<style>
.note-calendar {
  margin-top: 5px;
}
</style>
