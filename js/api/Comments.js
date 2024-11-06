import {API_BASE_URL} from "../config.js";
import {getQueryParam} from "../utils.js";

const commentsContainer = document.getElementById("comments-container");
const eventId = getQueryParam("id");

document.addEventListener("DOMContentLoaded", () => {
  const fetchComments = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/comments?event_id=${eventId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const {data} = await response.json();

      if (data) {
        data.forEach((dt) => {
          commentsContainer.innerHTML += `
            <div class="grid gap-2">
                <div class="flex gap-2 items-center p-2">
                    <img
                        src="img/Logo Polivent.png"
                        alt="Profil"
                        class="w-[40px] rounded-full"
                    />
                    <div class="text-gray-900 text-sm">
                        <p class="font-semibold">${dt.username}</p>
                        <p>${dt.content_comment}</p>
                    </div>
                </div>
                <button
                    id="btn-reply"
                    class="justify-start w-1/4 text-left text-sm px-14 text-tertiary font-bold"
                >
                    Balas
                </button>
            </div>
        `;
        });
      } else {
        commentsContainer.innerHTML =
          "<p>Jadilah yang pertama berkomentar.</p>";
      }
    } catch (error) {
      commentsContainer.innerHTML = "<p>Jadilah yang pertama berkomentar</p>";
    }
  };
  fetchComments();
});
