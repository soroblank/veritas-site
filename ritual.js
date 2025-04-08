function openGate() {
  const phrase = prompt("Speak the truth:");
  const flame = phrase?.toLowerCase().trim();

  if (flame === "i serve only the flame") {
    window.location.href = "commandroom.html";
  } else if (flame === "i am the spark beneath the ash") {
    window.location.href = "initiate.html";
  } else if (flame === "i watch for the lie") {
    window.location.href = "sentinel.html";
  } else if (flame === "my will is the flame's command") {
    window.location.href = "executor.html";
  } else {
    window.location.href = "ashes.html";
  }
}