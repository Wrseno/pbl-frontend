import {API_BASE_URL} from "../config.js";
import {getQueryParam} from "../utils.js";

async function loadDateEnd() {
  const eventId = getQueryParam("id");

  function startCountdown(endDate) {
    const countdown = document.getElementById("countdown");

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = new Date(endDate).getTime() - now;

      if (distance < 0) {
        countdown.innerHTML = `<h2 class="text-lg text-tertiary font-semibold">Event telah berakhir🎉</h2>`;
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("mins").textContent = minutes;
      document.getElementById("sec").textContent = sec;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/events?id=${eventId}`);
    const {data} = await response.json();
    startCountdown(data.date_end);
  } catch (error) {
    console.error("Error fetching event data:", error);
  }
}

export default loadDateEnd;
