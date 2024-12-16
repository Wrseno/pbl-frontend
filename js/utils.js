import {API_BASE_URL} from "./config.js";

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function getisLoggedIn() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Tidak dapat memverifikasi status login");
    }

    const {data} = await response.json();
    return data;
  } catch (error) {
    console.error("Error dalam memverifikasi status login:", error);
    return null;
  }
}

async function getProfileUser() {
  const user = await getisLoggedIn();

  if (!user) {
    return null;
  }

  const {avatar, username, user_id: userId, about, roles} = user;
  return {avatar, username, userId, about, roles};
}

function formattedDate(date) {
  return new Date(date).toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formattedHour(date) {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) {
    return "Invalid Date";
  }

  return parsedDate.toLocaleString("id-ID", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function timeAgo(timestamp) {
  const now = new Date();
  const date = new Date(timestamp);
  const secondsAgo = Math.floor((now - date) / 1000);

  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  if (secondsAgo < 60) {
    return `${secondsAgo} detik yang lalu`;
  } else if (minutesAgo < 60) {
    return `${minutesAgo} menit yang lalu`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} jam yang lalu`;
  } else {
    return `${daysAgo} hari yang lalu`;
  }
}

export {
  getQueryParam,
  formattedDate,
  formattedHour,
  timeAgo,
  getisLoggedIn,
  getProfileUser,
};
