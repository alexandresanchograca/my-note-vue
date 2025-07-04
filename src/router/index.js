import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import { auth } from "@/firebase/config";
import DailyView from "@/views/DailyView.vue";
import NoteListView from "@/views/NoteListView.vue";
import CreateView from "@/views/CreateView.vue";
import MarkdownView from "@/views/MarkdownView.vue";
import NoteView from "@/views/NoteView.vue";
import SearchView from "@/views/SearchView.vue";
import ChatbotView from "@/views/ChatbotView.vue";
import StorageView from "@/views/StorageView.vue";

function isAuthed(to, from, next) {
  if (auth.currentUser) {
    next();
  } else {
    next({ name: "login" });
  }
}

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: isAuthed,
  },
  {
    path: "/daily/:date?",
    name: "daily",
    component: DailyView,
    props: true,
  },
  {
    path: "/shared",
    name: "shared",
    component: NoteListView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
  },
  {
    path: "/viewer",
    name: "viewer",
    component: MarkdownView,
  },
  {
    path: "/note/:id",
    name: "note",
    component: NoteView,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/chatbot",
    name: "chatbot",
    component: ChatbotView,
  },
  {
    path: "/storage",
    name: "storage",
    component: StorageView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
