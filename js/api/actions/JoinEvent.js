import {getisLoggedIn, getProfileUser, getQueryParam} from "../../utils.js";
import {API_BASE_URL} from "../../config.js";

async function initializeJoinButton() {
  const userProfile = await getProfileUser();

  const eventId = getQueryParam("id");
  const container = document.getElementById("join-button-container");

  if (!userProfile) {
    container.innerHTML = `
    <a
        href="login"
        id="button-join"
        class="w-full block text-center mx-auto p-2 px-8 bg-gradient-to-r from-primary via-secondary to-primary text-white rounded-full font-semibold"
        >
        Login untuk Daftar Event
        </a>
        `;
    return;
  }

  const {userId} = userProfile;

  async function isUserJoinedEvent() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/registration?user_id=${userId}&event_id=${eventId}`
      );
      const result = await response.json();
      return result.data.isJoined;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }

  // Fungsi untuk mengecek apakah event sudah berakhir
  async function isEventEnded() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/available_events?event_id=${eventId}`
      );
      const {data} = await response.json();
      const eventDate = new Date(data.date_end);
      const currentDate = new Date();
      return currentDate > eventDate;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }

  async function isEventFull() {
    try {
      const response = await fetch(
        `${API_BASE_URL}/available_events?event_id=${eventId}`
      );

      const {data} = await response.json();
      return data.quota === 0 ? true : false;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }

  const isJoined = await isUserJoinedEvent();
  const eventEnded = await isEventEnded();
  const isQuotaFull = await isEventFull();

  if (isJoined) {
    container.innerHTML = `
      <button
        type="button"
        id="button-join"
        class="w-full mx-auto p-2 px-8 bg-slate-100 text-gray-400 rounded-full font-semibold"
        disabled
      >
        Sudah Terdaftar
      </button>
    `;
    return;
  } else if (eventEnded) {
    container.innerHTML = `
      <button
        type="button"
        id="button-join"
        class="w-full mx-auto p-2 px-8 bg-slate-100 text-gray-400 rounded-full font-semibold"
        disabled
      >
        Event Berakhir
      </button>
    `;
    return;
  } else if (isQuotaFull) {
    container.innerHTML = `
      <button
        type="button"
        id="button-join"
        class="w-full mx-auto p-2 px-8 bg-slate-100 text-gray-400 rounded-full font-semibold"
        disabled
      >
        Kuota Penuh
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

  const joinButton = document.getElementById("button-join");
  const jwtToken = localStorage.getItem("token");

  joinButton?.addEventListener("click", async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/registration`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_id: eventId,
          user_id: userId.toString(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        notyf.success("Berhasil mendaftar event!");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        if (
          response.status === 409 &&
          data.message === "User has already joined this event!"
        ) {
          notyf.error("Anda sudah terdaftar pada event ini!");
        } else if (
          response.status === 409 &&
          data.message === "No available quota for this event"
        ) {
          notyf.error("Gagal, kuota telah habis!");
        } else if (response.status === 403) {
          notyf.error("Gagal, Hanya member yang bisa mendaftar!");
        } else {
          notyf.error("Gagal mendaftar event, coba lagi!");
        }
      }
    } catch (error) {
      console.error("Error", error);
      notyf.error("Terjadi kesalahan, coba lagi!");
    }
  });
}

export default initializeJoinButton;
