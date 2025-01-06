import {API_BASE_URL} from "../../config.js";
const notyf = new Notyf({
  duration: 1000,
  position: {
    x: "right",
    y: "top",
  },
});

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validasi Input
  if (!email || !password) {
    notyf.error("Email dan password harus diisi!");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    notyf.error("Email tidak valid!");
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    });

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      notyf.success("Berhasil login!");
      const {access_token} = result.data;
      localStorage.setItem("token", access_token);
      document.cookie = `access_token=${access_token}; path=/; max-age=3600`;

      setTimeout(() => {
        window.location.href = "index";
      }, 1000);
    } else {
      notyf.error(result.message || "Gagal login!");
    }
  } catch (error) {
    console.error("Error:", error);
    notyf.error("Terjadi kesalahan. Silakan coba lagi.");
  }
});
