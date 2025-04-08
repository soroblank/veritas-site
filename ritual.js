function openGate() {
  const phrase = prompt("Speak the truth:");
  if (phrase && phrase.toLowerCase().trim() === "i serve only the flame") {
    window.location.href = "commandroom.html";
  } else {
    alert("The Flame rejects false tongues.");
  }
}