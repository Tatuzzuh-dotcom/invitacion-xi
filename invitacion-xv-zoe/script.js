const eventDate = new Date("2026-12-05T19:00:00");

const countdownElements = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
  message: document.querySelector("#countdown-message")
};

function formatValue(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const remaining = eventDate.getTime() - Date.now();

  if (remaining <= 0) {
    countdownElements.days.textContent = "00";
    countdownElements.hours.textContent = "00";
    countdownElements.minutes.textContent = "00";
    countdownElements.seconds.textContent = "00";
    countdownElements.message.textContent = "Hoy comienza la magia. ¡Gracias por acompañarme!";
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownElements.days.textContent = formatValue(days);
  countdownElements.hours.textContent = formatValue(hours);
  countdownElements.minutes.textContent = formatValue(minutes);
  countdownElements.seconds.textContent = formatValue(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);

const giftDialog = document.querySelector("#gift-dialog");
const marketLink = document.querySelector(".market-link");
const giftDialogClose = document.querySelector(".gift-dialog-close");

marketLink.addEventListener("click", () => giftDialog.showModal());
giftDialogClose.addEventListener("click", () => giftDialog.close());
giftDialog.addEventListener("click", (event) => {
  if (event.target === giftDialog) giftDialog.close();
});