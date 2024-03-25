//This line defines a function named speedlimit using an arrow function syntax.
const speedlimit = () => {
  const speedInput = document.getElementById("speedInput").value;
  //This line converts the retrieved speed value from the input field (speedInput) into a number using parseInt.
  const parseSpeed = parseInt(speedInput);
  const limit = 70;
  const demeritPoints = Math.floor((parseSpeed - limit) / 5);
// this is the switch function. Result Display (Switch Statement)
  switch (true) {
    case demeritPoints <=0:
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
