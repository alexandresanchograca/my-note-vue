<template>
  <div class="welcome">
    <form @submit.prevent="handleSubmit">
      <h3>Sign up</h3>
      <input type="email" placeholder="email" v-model="email" required />
      <input
        type="password"
        placeholder="password"
        v-model="password"
        required
      />
      <p>
        Already a user?
        <router-link class="welcome-alt" to="login">Login now!</router-link>
      </p>
      <button v-if="!isPending">Signup</button>
      <button v-else disabled>Signing up...</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import userAuth from "@/composables/userAuth.js";
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();

const { error, isPending, signup } = userAuth();

const handleSubmit = async () => {
  const res = await signup(email.value, password.value);

  if (error.value) {
    console.log(error.value);
    return;
  }

  router.push({ name: "home" });
};
</script>

<style scoped>
.welcome {
  margin: 0 5px;
}
button {
  margin: 20px auto;
}
.welcome .welcome-alt {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
