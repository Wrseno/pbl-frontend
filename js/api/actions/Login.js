import {API_BASE_URL} from "../../config.js";
let notyf = new Notyf({
  duration: 1000,
  position: {
    x: "right",
    y: "top",
  },
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    if (response.ok) {
      notyf.success("Berhasil login!");
      setTimeout(() => {
        window.location.href = "index";
      }, 1000);
    } else {
      notyf.error("result.message");
    }
  } catch (error) {
    console.error("Error : ", error);
  }
});
