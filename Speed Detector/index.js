const speedlimit = () => {
  const speedInput = document.getElementById("speedInput").value;
  const parseSpeed = parseInt(speedInput);
  const limit = 70;
  const demeritPoints = Math.floor((parseSpeed - limit) / 5);

  switch (true) {
    case demeritPoints ===0:
      document.getElementById("resultValue").textContent = "OK";
      break;
    case demeritPoints <= 12 && demeritPoints >= 0:
      document.getElementById("resultValue").textContent = `You have earned ${demeritPoints}`;
      break;
    default:
      document.getElementById("resultValue").textContent = `You have exceeded: ${demeritPoints}, license suspended`;
      break;
  }
};
