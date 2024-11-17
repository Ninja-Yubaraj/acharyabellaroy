const countdownElement = document.getElementById("time");

// Set the countdown target date (e.g., 30 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30);

function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;

  if (remainingTime > 0) {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    countdownElement.textContent = "The wait is over!";
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();
