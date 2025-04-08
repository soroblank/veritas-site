function openGate() {
  const phrase = prompt("Enter access code:");
  const code = phrase?.toUpperCase().trim();

  if (code === "VX-01-ACT") {
    window.location.href = "commandroom.html";
  } else if (code === "IN-14-XE3") {
    window.location.href = "initiate.html";
  } else if (code === "SN-22-VG9") {
    window.location.href = "sentinel.html";
  } else if (code === "EX-33-BL7") {
    window.location.href = "executor.html";
  } else if (code === "AR-04-Z9A") {
    window.location.href = "architect.html";
  } else if (code === "VT-00-Ω") {
    window.location.href = "veritas.html";
  } else {
    else {
  window.location.href = "errorsigil.html";
}
  }
}