import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyB1l6p9ZHVLQ5Akg3qdCy1CdRl9o4T9UQU",
  authDomain: "veritas-app-v2.firebaseapp.com",
  projectId: "veritas-app-v2",
  storageBucket: "veritas-app-v2.appspot.com",
  messagingSenderId: "1098505255373",
  appId: "1:1098505255373:web:811dacc4aaebf57eaf6c84",
  databaseURL: "https://veritas-app-v2-default-rtdb.firebaseio.com/"
};

// INIT
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const room = "initiate";
const username = localStorage.getItem("veritasName") || prompt("Name thyself:");
localStorage.setItem("veritasName", username);

const messageRef = ref(db, `rooms/${room}`);

// SEND MESSAGE
document.getElementById("send-btn").addEventListener("click", () => {
  const msg = document.getElementById("message-input").value.trim();
  if (!msg) return;

  push(messageRef, {
    name: username,
    text: msg,
    time: new Date().toISOString()
  });

  document.getElementById("message-input").value = "";
});

// LISTEN FOR MESSAGES
onChildAdded(messageRef, (snapshot) => {
  const data = snapshot.val();
  const div = document.createElement("div");
  div.className = "message";
  div.innerHTML = `<strong>${data.name}</strong>: ${data.text}`;
  document.getElementById("chat-window").appendChild(div);
  document.getElementById("chat-window").scrollTop = document.getElementById("chat-window").scrollHeight;
});