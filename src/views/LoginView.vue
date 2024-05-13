<template>
  <div class="welcome">
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>
      <input type="email" placeholder="email" v-model="email" required />
      <input
        type="password"
        placeholder="password"
        v-model="password"
        required
      />
      <p>
        Not a user yet?
        <router-link class="welcome-alt" to="signup">Signup now!</router-link>
      </p>
      <button v-if="!isPending">Login</button>
      <button v-else disabled>Logging in...</button>
    </form>
    <div></div>
  </div>
</template>

<script>
import { ref } from "vue";
import userAuth from "@/composables/userAuth.js";
import { useRouter } from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const { error, isPending, login } = userAuth();

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);

      if (error.value) {
        console.log(error.value);
        return;
      }

      await router.push({ name: "home" });
    };

    return { email, password, error, isPending, handleSubmit };
  },
};
</script>

<style scoped>
button {
  margin: 20px auto;
}
.welcome .welcome-alt {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
