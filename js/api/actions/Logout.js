import {API_BASE_URL} from "../../config.js";
const notyf = new Notyf({
  duration: 1000,
  position: {
    x: "right",
    y: "top",
  },
});

const logoutButton = document.getElementById("logoutButton");
logoutButton?.addEventListener("click", async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const result = await response.json();

    // Hapus token di localStorage dan cookie
    localStorage.removeItem("token");
    document.cookie = "access_token=; path=/; max-age=0";

    // Notifikasi sukses
    notyf.success("Berhasil logout");

    // Update UI
    setTimeout(() => {
      window.location.href = "index";
    }, 1000);
  } catch (error) {
    console.error("Error : ", error);
  }
});
