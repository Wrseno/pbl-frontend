import {API_BASE_URL} from "../../config.js";
import {getQueryParam, getSession} from "../../utils.js";
import loadReply from "../ReplyComment.js";

const addReplyComment = async () => {
  let userIdLogedIn;
  const buttonReply = document.querySelectorAll(".btn-reply");
  const session = await getSession();
  if (session) {
    userIdLogedIn = session.data.users_id;
  }

  buttonReply.forEach((button) => {
    button.addEventListener("click", function () {
      const userId = this.closest(".grid")
        .querySelector("[data-user-id]")
        .getAttribute("data-user-id");

      const commentId = this.closest(".grid")
        .querySelector("[data-comment-id]")
        .getAttribute("data-comment-id");

      // Menampilkan input untuk balasan
      let showReplyInput = document.getElementById(`replies-input-${userId}`);
      if (!showReplyInput) {
        showReplyInput = document.createElement("div");
        showReplyInput.id = `replies-input-${userId}`;
        this.closest(".grid").appendChild(showReplyInput);
      }

      // Toggle input balasan
      if (showReplyInput.innerHTML) {
        showReplyInput.innerHTML = "";
      } else {
        showReplyInput.innerHTML = `
          <div class='md:flex justify-between gap-2 mb-6 px-12'>
            <div class='flex gap-2 items-center w-full'>
              <img
                src='img/Logo Polivent.png'
                alt='Foto profil'
                class='w-[40px] rounded-full'
              />
              <input
                type='text'
                placeholder='Tambahkan balasan...'
                id='input-reply-${userId}-${commentId}'
                class='border-b-2 w-full outline-none focus:border-primary duration-300 ease-in-out p-3'
              />
            </div>
            <button
              type='submit'
              id='btn-add-reply-${userId}-${commentId}'
              class='bg-gray-100 p-2 px-3 md:px-6 mt-3 md:mt-0 rounded-full'
            >
              Balas
            </button>
          </div>
        `;

        // Tambahkan event listener untuk tombol balas yang baru ditambahkan
        const btnAddReply = document.getElementById(
          `btn-add-reply-${userId}-${commentId}`
        );
        btnAddReply.addEventListener("click", async function () {
          const replyInput = document.getElementById(
            `input-reply-${userId}-${commentId}`
          );
          const replyComment = replyInput?.value.trim();

          if (!replyComment) return;

          try {
            const response = await fetch(`${API_BASE_URL}/replies`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                users_id: userIdLogedIn,
                comment_id: commentId,
                content_replay: replyComment,
              }),
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            loadReply();
            replyInput.value = "";
          } catch (error) {
            console.error("Error posting reply:", error);
          }
        });
      }
    });
  });
};

export default addReplyComment;
