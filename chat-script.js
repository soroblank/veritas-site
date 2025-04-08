import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB1l6p9ZHVLQ5Akg3qdCy1CdRl9o4T9UQU",
  authDomain: "veritas-app-v2.firebaseapp.com",
  databaseURL: "https://veritas-app-v2-default-rtdb.firebaseio.com/",
  projectId: "veritas-app-v2",
  storageBucket: "veritas-app-v2.firebasestorage.app",
  messagingSenderId: "1098505255373",
  appId: "1:1098505255373:web:811dacc4aaebf57eaf6c84"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let username = "";

document.getElementById("username").addEventListener("change", (e) => {
  username = e.target.value || "Nameless";
  document.getElementById("user-display").textContent = username;
});

window.sendMessage = function () {
  const message = document.getElementById("message").value;
  if (!username) {
    alert("Name yourself before speaking to the flame.");
    return;
  }
  if (message.trim() !== "") {
    push(ref(db, "initiate/messages"), {
      user: username,
      text: message,
      timestamp: Date.now()
    });
    document.getElementById("message").value = "";
  }
};

const chatRef = ref(db, "initiate/messages");
onValue(chatRef, (snapshot) => {
  const data = snapshot.val();
  const log = document.getElementById("chat-log");
  log.innerHTML = "";
  for (let id in data) {
    const msg = data[id];
    log.innerHTML += `<div><strong>${msg.user}:</strong> ${msg.text}</div>`;
  }
});
