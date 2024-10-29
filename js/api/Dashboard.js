import {getSession} from "../utils.js";
import {API_BASE_URL} from "../config.js";

const totalJoinedEvent = document.getElementById("total-joined-event");
const currentlyJoinedEvent = document.getElementById("currently-joined-event");
const username = document.getElementById("username");
const session = await getSession();
const userId = session.data.users_id;

(async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/registration?user_id=${userId}`
    );
    const {data} = await response.json();

    if (data) {
      const event = data[0];
      currentlyJoinedEvent.textContent = event.title;
    } else {
      currentlyJoinedEvent.textContent = "Tidak ada.";
    }

    totalJoinedEvent.textContent = data ? data.length : 0;
    username.textContent = session.data.username;
  } catch (err) {
    console.error(err);
  }
})();
