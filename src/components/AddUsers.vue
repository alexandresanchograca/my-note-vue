<template>
  <div class="shared-users-container">
    <button v-if="!sharedUsers.length" @click="handleShare">
      Share with user
    </button>
    <button v-else @click="handleShare">+ Add user</button>
    <form v-if="sharedUsers.length" @submit.prevent="">
      <div v-for="(user, index) in sharedUsers" :key="user" class="shared-user">
        <label :for="`email-${index}`"
          >User Email:
          <input
            :name="`email-${index}`"
            v-model="sharedUsers[index]"
            :placeholder="`user_${index}@mail.com`"
        /></label>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineModel } from "vue";

const sharedUsers = defineModel();

const handleShare = () => {
  sharedUsers.value.push("");
};
</script>

<style scoped>
.shared-users-container {
  box-sizing: border-box;
  margin: 5px;
}
.shared-user {
  display: flex;
  align-items: center;
}

button {
  width: 100%;
}

label {
  text-wrap: nowrap;
}
</style>
