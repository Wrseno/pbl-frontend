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

  async function isUserJoinedEvent() {
    const response = await fetch(
      `${API_BASE_URL}/registration?user_id=${userId}&event_id=${eventId}`
    );
    const result = await response.json();
    return result.data.isJoined;
  }

  const isJoined = await isUserJoinedEvent();

  if (session) {
    if (isJoined) {
      container.innerHTML = `
        <button
          type="button"
          id="button-join"
          class="w-full mx-auto p-2 px-8 bg-slate-100 text-secondary rounded-full font-semibold"
          disabled
        >
          Sudah Terdaftar
        </button>
      `;
      return;
    }

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
    console.log(eventId, session.data.users_id);

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
      if (response.ok) {
        notyf.success("Berhasil mendaftar event!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        notyf.error("Gagal mendaftar event!");
      }
    } catch (error) {
      console.error("Error", error);
    }
  });
}, 500);
