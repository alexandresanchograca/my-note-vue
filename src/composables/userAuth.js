import { auth } from "@/firebase/config";
import { ref } from "vue";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("Couldn't sign in...");
    }

    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

const signup = async (email, password) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    if (!res) {
      throw new Error("Couldn't sign up...");
    }

    return res;
  } catch (err) {
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

const logout = async () => {
  error.value = null;
  try{
    return await signOut(auth);
  }catch(err){
    error.value = err.message;
  }
}

const userAuth = () => {
  return { error, isPending, login, logout, signup };
};

export default userAuth;
