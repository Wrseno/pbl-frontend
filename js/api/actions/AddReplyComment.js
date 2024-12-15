import {API_BASE_URL} from "../../config.js";
import {getProfileUser, getQueryParam} from "../../utils.js";
import loadReply, {loadRepliesForComment} from "../ReplyComment.js";

// Fungsi untuk menangani klik pada tombol balasan dengan delegasi event
const addReplyComment = async () => {
  window.addEventListener("click", async (e) => {
    if (e.target && e.target.classList.contains("btn-reply")) {
      const buttonReply = document.querySelectorAll(".btn-reply");
      const userProfile = await getProfileUser();
      const {avatar, username} = userProfile;
      const eventId = getQueryParam("id");

      buttonReply.forEach((button) => {
        button.addEventListener("click", function () {
          const parentUserIdComment = this.closest(".grid")
            .querySelector("[data-user-id]")
            .getAttribute("data-user-id");

          const commentId = this.closest(".grid")
            .querySelector("[data-comment-id]")
            .getAttribute("data-comment-id");

          // Menampilkan input untuk balasan
          let showReplyInput = document.getElementById(
            `replies-input-${parentUserIdComment}`
          );
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
                    src='${avatar}'
                    alt='Foto profil'
                    class='w-[40px] h-[40px] object-cover rounded-full'
                  />
                  <input
                    type='text'
                    placeholder='Tambahkan balasan...'
                    id='input-reply-${parentUserIdComment}-${commentId}'
                    class='border-b-2 w-full outline-none focus:border-primary duration-300 ease-in-out p-3'
                  />
                </div>
                <button
                  type='submit'
                  id='btn-add-reply-${parentUserIdComment}-${commentId}'
                  class='bg-gray-100 p-2 px-3 md:px-6 mt-3 md:mt-0 rounded-full'
                >
                  Balas
                </button>
              </div>
            `;

            const btnAddReply = document.getElementById(
              `btn-add-reply-${parentUserIdComment}-${commentId}`
            );

            btnAddReply.addEventListener("click", async function () {
              const replyInput = document.getElementById(
                `input-reply-${parentUserIdComment}-${commentId}`
              );
              const replyComment = replyInput?.value.trim();

              if (!replyComment) return;
              if (!userProfile) return;
              const {userId} = userProfile;
              let replyContainer = document.getElementById(
                `replies-${commentId}`
              );

              try {
                const response = await fetch(`${API_BASE_URL}/comments`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    user_id: userId,
                    event_id: eventId,
                    content: replyComment,
                    comment_parent_id: commentId,
                  }),
                });

                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }

                notyf.success("Balasan berhasil ditambahkan");
                replyInput.value = "";

                // Menambahkan balasan baru ke DOM
                await loadRepliesForComment(commentId, replyContainer);
              } catch (error) {
                console.error("Error posting reply:", error);
              }
            });
          }
        });
      });
    }
  });
};

// Panggil fungsi ini saat halaman dimuat atau ketika konten baru dimuat
export default addReplyComment;
