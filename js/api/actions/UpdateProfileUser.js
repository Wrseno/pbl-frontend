import {API_BASE_URL} from "../../config.js";
import {getProfileUser} from "../../utils.js";

const notyf = new Notyf({
  duration: 1000,
  position: {
    x: "right",
    y: "top",
  },
});

document.addEventListener("DOMContentLoaded", async () => {
  const btnUpdate = document.getElementById("btn-update-profile");
  const usernameInputModal = document.getElementById("username-modal");
  const userAvatarModal = document.getElementById("user-avatar-modal");
  const bioInputModal = document.getElementById("user-bio");
  const profile = await getProfileUser();

  if (!profile) {
    return;
  }

  btnUpdate.addEventListener("click", async (e) => {
    e.preventDefault();

    const updatedUsername = usernameInputModal.value.trim();
    const updatedBio = bioInputModal.value.trim();

    const formData = new FormData();
    formData.append("username", updatedUsername);
    formData.append("about", updatedBio);

    if (userAvatarModal.files.length > 0) {
      const updatedAvatar = userAvatarModal.files[0];
      formData.append("avatar", updatedAvatar);
    } else {
      formData.append("avatar", profile.avatar);
    }

    formData.append("roles", profile.roles);
    formData.append("user_id", profile.userId);

    try {
      const response = await fetch(
        `${API_BASE_URL}/users?user_id=${profile.userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );

      notyf.success("Berhasil mengupdate profile");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      notyf.error("Gagal mengupdate profile");
    }
  });
});
