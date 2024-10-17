import {API_BASE_URL} from "../../config.js";
const notyf = new Notyf({
  duration: 1000,
  position: {
    x: "right",
    y: "top",
  },
});

document.getElementById("logoutButton").addEventListener("click", async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      method: "DELETE",
    });
    const result = await response.json();
    notyf.success(result.message);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.error("Error : ", error);
  }
});
