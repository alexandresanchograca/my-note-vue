import { ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/config";

const user = ref(auth.currentUser);

onAuthStateChanged(auth, (userObj) => {
    user.value = userObj;
});

const userAuthState = () => {
    return { user };
};

export default userAuthState;