function openGate() {
  const phrase = prompt("Speak the truth:");

  const flame = phrase?.toLowerCase().trim();
  if (flame === "i serve only the flame") {
    window.location.href = "commandroom.html";
  } else if (flame === "i am the spark beneath the ash") {
    window.location.href = "initiate.html";
  } else {
    alert("The Flame rejects false tongues.");
  }
}