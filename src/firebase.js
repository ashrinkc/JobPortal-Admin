import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBPsDpVqQPxETTwVyAKo7_ShDtIZ5RoHhs",
  authDomain: "jobportal-175d7.firebaseapp.com",
  projectId: "jobportal-175d7",
  storageBucket: "jobportal-175d7.appspot.com",
  messagingSenderId: "311752159195",
  appId: "1:311752159195:web:00f98b7fbd120d837b01fe",
  measurementId: "G-QNBX8WWW80",
};

//initialize app
const app = initializeApp(firebaseConfig);
export default app;
