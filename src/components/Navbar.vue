<template>
  <div class="navbar">
    <nav>
      <div v-if="user" class="links">
        <router-link :to="{ name: 'home' }">Forever Note</router-link>
        <router-link :to="{ name: 'daily' }">Daily Notes</router-link>
        <router-link :to="{ name: 'shared' }">Note List</router-link>
        <router-link :to="{ name: 'search' }">Search Notes</router-link>
        <router-link :to="{ name: 'storage' }">Storage</router-link>
        <router-link :to="{ name: 'chatbot' }">Help</router-link>
      </div>
      <div class="login-info">
        <div v-if="user">
          <span class="user-status">Logged in {{ user.email }}</span>
          <button @click="handleLogout">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import userAuth from "@/composables/userAuth";
import { useRouter } from "vue-router";
import userAuthState from "@/composables/userAuthState";

const { error, logout } = userAuth();
const router = useRouter();
const { user } = userAuthState();

const handleLogout = async () => {
  const res = await logout();

  if (error.value) {
    return;
  }

  router.push({ name: "login" });
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin: 5px;
  background: var(--widget-colors);
  border-radius: 8px;
}

nav {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

nav h1 {
  margin-left: 20px;
  white-space: nowrap;
}

nav .login-info {
  margin-left: auto;
}

nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}

nav img {
  max-height: 60px;
}

span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
}

@media only screen and (max-width: 600px) {
  .user-status {
    display: none;
  }
}
</style>
