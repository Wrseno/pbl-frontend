import {getQueryParam, getSession} from "../../utils.js";
import {API_BASE_URL} from "../../config.js";

setTimeout(async () => {
  const container = document.getElementById("join-button-container");
  let userId;
  const eventId = getQueryParam("id");
  const session = await getSession();

  if (session) {
    userId = session.data.users_id;
  }

  if (session) {
    container.innerHTML = `
      <button
        type="button"
        id="button-join"
        class="w-full mx-auto p-2 px-8 bg-gradient-to-r from-primary via-secondary to-primary text-white rounded-full font-semibold"
      >
        Daftar Event
      </button>
      `;
  } else {
    container.innerHTML = `
        <a
          href="login"
          id="button-join"
          class="w-full block text-center mx-auto p-2 px-8 bg-gradient-to-r from-primary via-secondary to-primary text-white rounded-full font-semibold"
        >
          Daftar Event
        </a>
      `;
  }

  const joinButton = document.getElementById("button-join");

  joinButton?.addEventListener("click", async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_id: eventId,
          users_id: userId,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        notyf.success(result.message);
      } else {
        notyf.error(result.message);
      }
    } catch (error) {
      console.error("Error", error);
    }
  });
}, 100);
