import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//styles
import "./assets/main.css"
import 'v-calendar/style.css';


//Firebase auth imports
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

//Wait until firebase auth connection is established

let app = null;
onAuthStateChanged(auth, (userObj) => {
    if(!app) {
        app = createApp(App).use(router).mount('#app');
    }
});