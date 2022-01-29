// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyChoDgAYvdp_t-sPD5GyutM7Hzo3OLi4B4",
  authDomain: "myloginpage-7cbdb.firebaseapp.com",
  projectId: "myloginpage-7cbdb",
  storageBucket: "myloginpage-7cbdb.appspot.com",
  messagingSenderId: "506447305850",
  appId: "1:506447305850:web:e1cd81e2eca563bd936fc3"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)