import {getSession} from "../utils.js";
import {API_BASE_URL} from "../config.js";

const totalJoinedEvent = document.getElementById("total-joined-event");
const currentlyJoinedEvent = document.getElementById("currently-joined-event");
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
  } catch (err) {
    console.error(err);
  }
})();
