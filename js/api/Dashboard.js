import {getProfileUser} from "../utils.js";
import {API_BASE_URL} from "../config.js";

const currentlyJoinedEvent = document.getElementById("currently-joined-event");
const hasPresentEvent = document.getElementById("has-present-event");
const totalJoinedEvent = document.getElementById("total-joined-event");
const totalEventHasPresent = document.getElementById("total-event-has-present");
const usernameText = document.getElementById("username-dashboard");

(async () => {
  const {username, userId} = await getProfileUser();

  try {
    const eventJoinedResponse = await fetch(
      `${API_BASE_URL}/registration?user_id=${userId}&not_present=true`
    );
    const eventHasPresentResponse = await fetch(
      `${API_BASE_URL}/registration?user_id=${userId}&has_present=true`
    );

    const {data: eventJoined} = await eventJoinedResponse.json();
    const {data: eventHasPresent} = await eventHasPresentResponse.json();

    if (eventJoined) {
      const event = eventJoined[0];
      currentlyJoinedEvent.textContent = event.title;
    } else {
      currentlyJoinedEvent.textContent = "Tidak ada.";
    }

    if (eventHasPresent) {
      const event = eventHasPresent[0];
      hasPresentEvent.textContent = event.title;
    } else {
      hasPresentEvent.textContent = "Tidak ada event yang telah diikuti.";
    }

    totalJoinedEvent.textContent = eventJoined ? eventJoined.length : 0;
    totalEventHasPresent.textContent = eventHasPresent
      ? eventHasPresent.length
      : 0;
    usernameText.textContent = username;
  } catch (err) {
    console.error(err);
  }
})();
