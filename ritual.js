function openGate() {
  const phrase = prompt("Enter access code:");
  const code = phrase?.toUpperCase().trim();

  switch (code) {
    case "VX-01-ACT":
      window.location.href = "commandroom.html";
      break;
    case "IN-14-XE3":
      window.location.href = "initiate.html";
      break;
    case "SN-22-VG9":
      window.location.href = "sentinel.html";
      break;
    case "EX-33-BL7":
      window.location.href = "executor.html";
      break;
    case "AR-04-Z9A":
      window.location.href = "architect.html";
      break;
    // VERITAS access is never granted
    default:
      window.location.href = "errorsigil.html";
      break;
  }
}