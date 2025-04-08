import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB1l6p9ZHVLQ5Akg3qdCy1CdRl9o4T9UQU",
  authDomain: "veritas-app-v2.firebaseapp.com",
  databaseURL: "https://veritas-app-v2-default-rtdb.firebaseio.com/",
  projectId: "veritas-app-v2",
  storageBucket: "veritas-app-v2.firebasestorage.app",
  messagingSenderId: "1098505255373",
  appId: "1:1098505255373:web:811dacc4aaebf57eaf6c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const messagesRef = ref(db, "initiate/messages");

const form = document.getElementById("chat-form");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const log = document.getElementById("chat-log");
const userLabel = document.getElementById("user-label");

// Load username if stored
let username = localStorage.getItem("veritas-username") || "";
if (username) {
  usernameInput.value = username;
  userLabel.textContent = username;
}

usernameInput.addEventListener("input", () => {
  username = usernameInput.value.trim();
  localStorage.setItem("veritas-username", username);
  userLabel.textContent = username || "Unknown Flame";
});

// Send message
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = messageInput.value.trim();
  if (!username || !text) return;
  push(messagesRef, {
    user: username,
    text: text,
    timestamp: Date.now()
  });
  messageInput.value = "";
});

// Display messages
onChildAdded(messagesRef, (data) => {
  const msg = data.val();
  const msgDiv = document.createElement("div");
  const time = new Date(msg.timestamp).toLocaleTimeString();
  msgDiv.innerHTML = `<strong>${msg.user}</strong> <em>[${time}]</em><br>${msg.text}`;
  log.appendChild(msgDiv);
  log.scrollTop = log.scrollHeight;
});