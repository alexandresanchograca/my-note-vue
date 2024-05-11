<template>
  <div class="navbar">
    <nav>
      <h1><router-link :to="{ name: 'home' }">My-Note</router-link></h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'home' }">Forever Note</router-link>
          <router-link :to="{ name: 'daily' }">Daily Notes</router-link>
          <span>Logged in {{ user.email }}</span>
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

<script>
import userAuth from "@/composables/userAuth";
import { useRouter } from "vue-router";
import userAuthState from "@/composables/userAuthState";

export default {
  setup() {
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

    return { user, handleLogout };
  },
};
</script>

<style>
.navbar {
  padding: 16px 10px;
  margin-bottom: 0px;
  background: white;
}

nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
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
  border-left: 1px solid #eee;
}
</style>
