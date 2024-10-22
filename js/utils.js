import {API_BASE_URL} from "./config.js";

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function getSession() {
  try {
    const response = await fetch(`${API_BASE_URL}/session`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok)
      throw new Error("Session not found or user not logged in");
    return await response.json();
  } catch (error) {
    return null;
  }
}

function formattedDate(date) {
  return new Date(date).toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export {getQueryParam, getSession, formattedDate};
