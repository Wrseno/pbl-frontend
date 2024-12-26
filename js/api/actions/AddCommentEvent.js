import {getProfileUser, getQueryParam} from "../../utils.js";
import {API_BASE_URL} from "../../config.js";
import loadComments from "../Comments.js";
import loadReply from "../ReplyComment.js";

const AddCommentEvent = async () => {
  const commentInput = document.getElementById("input-comment");
  const commentButton = document.getElementById("btn-comment");

  if (!commentButton) console.log("Button komentar tidak ditemukan!");

  const eventId = getQueryParam("id");
  const userProfile = await getProfileUser();

  if (!userProfile) {
    commentButton.addEventListener("click", () => {
      notyf.error("Kamu harus login untuk menulis komentar!");
    });
    return;
  }
  const {userId} = userProfile;

  commentButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const comment = commentInput?.value.trim();

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
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          event_id: eventId,
          user_id: userId,
          content: comment,
        }),
      });

      if (response.ok) {
        notyf.success("Berhasil mengirim komentar");
        commentInput.value = "";
        loadComments(); // Reload comments
        loadReply(); // Reload replies after comment is added
      } else {
        notyf.error("Gagal mengirim komentar.");
      }
    } catch (error) {
      notyf.error("Terjadi kesalahan jaringan atau server.");
      console.error("Error posting comment:", error);
    }
  });
};

export default AddCommentEvent;
