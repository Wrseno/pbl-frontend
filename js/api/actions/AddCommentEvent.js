import {getQueryParam, getSession} from "../../utils.js";
import {API_BASE_URL} from "../../config.js";
import loadComments from "../Comments.js";

(async () => {
  let userId;
  const eventId = getQueryParam("id");
  const session = await getSession();

  if (session) {
    userId = session.data.users_id;
  }

  const commentButton = document.getElementById("btn-comment");

  commentButton?.addEventListener("click", async (e) => {
    e.preventDefault();
    const commentInput = document.getElementById("input-comment");
    const comment = commentInput?.value.trim();

    if (!commentInput) {
      notyf.error("Komen input tidak ditemukan!");
      return;
    }

    if (!comment) {
      notyf.error("Komentar tidak boleh kosong!");
      return;
    }

    if (!eventId || !userId) {
      notyf.error("Kamu harus login untuk menulis komentar!");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event_id: eventId,
          users_id: userId,
          content_comment: comment,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        notyf.success("Berhasil mengirim komentar");
        loadComments();
        commentInput.value = "";
      } else {
        notyf.error("Gagal mengirim komentar.");
      }
    } catch (error) {
      notyf.error("Terjadi kesalahan jaringan atau server.");
      console.error("Error posting comment:", error);
    }
  });
})();
