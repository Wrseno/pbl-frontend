import {API_BASE_URL} from "../../config.js";
import {getQueryParam, getSession} from "../../utils.js";

const addReplyTagUserComment = async () => {
  console.log("first");
  const buttonReply = document.querySelectorAll(".btn-reply-tag-user");
  console.log(buttonReply);

  buttonReply.forEach((button) => {
    console.log(button);
    button.addEventListener("click", function () {
      console.log("clicked");
      const replyId = this.closest(".grid")
        .querySelector("[data-tag-user-id]")
        .getAttribute("data-tag-user-id");

      // Menampilkan input untuk balasan
      let showReplyInput = document.getElementById(`tag-user-input-${replyId}`);
      if (!showReplyInput) {
        showReplyInput = document.createElement("div");
        showReplyInput.id = `tag-user-input-${replyId}`;
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
                id='input-reply-${replyId}'
                class='border-b-2 w-full outline-none focus:border-primary duration-300 ease-in-out p-3'
              />
            </div>
            <button
              type='submit'
              id='btn-add-reply-${replyId}'
              class='bg-gray-100 p-2 px-3 md:px-6 mt-3 md:mt-0 rounded-full'
            >
              Balas
            </button>
          </div>
        `;

        // Tambahkan event listener untuk tombol balas yang baru ditambahkan
        const btnAddReply = document.getElementById(`btn-add-reply-${replyId}`);
        btnAddReply.addEventListener("click", async function () {
          const replyInput = document.getElementById(`input-reply-${replyId}`);
          const replyComment = replyInput?.value.trim();

          if (!replyComment) return;

          try {
            const response = await fetch(`${API_BASE_URL}/taguser`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                replay_id: replyId,
                content_taguser: replyComment,
              }),
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const {data} = await response.json();
            console.log("Reply added:", data);

            // Bersihkan input setelah berhasil mengirim balasan
            replyInput.value = "";
          } catch (error) {
            console.error("Error posting reply:", error);
          }
        });
      }
    });
  });
};

export default addReplyTagUserComment;
