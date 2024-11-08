import {API_BASE_URL} from "../config.js";
import {timeAgo} from "../utils.js";

const loadReply = async () => {
  const buttonShowReply = document.querySelectorAll(".btn-show-reply");

  buttonShowReply.forEach((button) => {
    button.addEventListener("click", async function () {
      const userId = this.closest(".grid")
        .querySelector("[data-user-id]")
        .getAttribute("data-user-id");

      const commentId = this.closest(".grid")
        .querySelector("[data-comment-id]")
        .getAttribute("data-comment-id");

      const usernameParentComment = this.closest(".grid")
        .querySelector("[data-username]")
        .getAttribute("data-username");

      let replyContainer = document.getElementById(`replies-${commentId}`);
      if (!replyContainer) {
        replyContainer = document.createElement("div");
        replyContainer.id = `replies-${commentId}`;
        this.closest(".grid").appendChild(replyContainer);
      }

      if (replyContainer.innerHTML) {
        replyContainer.innerHTML = ""; // Sembunyikan balasan dengan mengosongkan konten
      } else {
        try {
          const response = await fetch(
            `${API_BASE_URL}/replies?users_id=${userId}&comment_id=${commentId}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const {data} = await response.json();

          replyContainer.innerHTML = ""; // Kosongkan kontainer sebelum menampilkan konten baru

          if (data && data.length > 0) {
            data.forEach((dt) => {
              if (
                replyContainer.getAttribute("id") === `replies-${dt.comment_id}`
              ) {
                replyContainer.innerHTML += `
                  <div class="grid">
                    <div class="flex gap-2 items-center p-2">
                      <img
                        src="img/Logo Polivent.png"
                        alt="Profil"
                        class="w-[50px] rounded-full"
                      />
                      <div class="text-gray-900 text-sm">
                        <p class="font-semibold flex gap-4 items-center">${
                          dt.username
                        } 
                        <span class="text-gray-500 font-normal">${timeAgo(
                          dt.created_at
                        )}</span></p>
                        <p><span class="text-tertiary font-medium" data-tag-user-id="${
                          dt.replay_id
                        }">@${usernameParentComment}</span> ${
                  dt.content_replay
                }</p>
                        <button
                        class="btn-reply-tag-user flex items-center gap-2 justify-start px-4 text-sm text-center text-tertiary font-semibold hover:bg-gray-200 p-2 rounded-full"
                      >
                        Balas
                      </button>
                      </div>
                    </div>
                    <div id="tag-user-input-${dt.replay_id}"></div>
                    <div id="tag-user-${dt.replay_id}" class="ml-12"></div>
                  </div>
                `;
              }
            });
          } else {
            replyContainer.innerHTML =
              "<p class='text-sm ml-6'>Tidak ada balasan.</p>";
          }
        } catch (error) {
          replyContainer.innerHTML =
            "<p class='text-sm ml-6'>Tidak ada balasan.</p>";
          console.error("Error loading comments:", error);
        }
      }
    });
  });
};

export default loadReply;
