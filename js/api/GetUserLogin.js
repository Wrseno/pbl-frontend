import {getProfileUser} from "../utils.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const usernameText = document.getElementById("username");
    const userAvatar = document.getElementById("user-avatar");

    const usernameModal = document.getElementById("username-modal");
    const userBio = document.getElementById("user-bio");
    const avatarImageModal = document.getElementById("avatar-image-modal");

    const {avatar, username, about} = await getProfileUser();

    usernameModal.value = username;
    userBio.value = about;
    const avatarImgElement = document.createElement("img");
    avatarImgElement.className = "w-8 h-8 mx-2 rounded-lg object-cover";
    avatarImgElement.src = avatar; // data.avatar berisi URL gambar
    avatarImageModal.appendChild(avatarImgElement);

    usernameText.innerHTML = username;
    const imgElement = document.createElement("img");
    imgElement.className = "w-8 h-8 rounded-full object-cover";
    imgElement.src = avatar; // data.avatar berisi URL gambar

    // Menambahkan img ke dalam elemen userAvatar
    userAvatar.appendChild(imgElement);
  } catch (error) {
    console.error("Error:", error);
  }
});
