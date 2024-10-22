import {API_BASE_URL} from "../config.js";
import {LocationSvgIcon, CalendarSvgIcon} from "../components/svg.js";
import {formattedDate, getSession} from "../utils.js";

const historyEventsContainer = document.getElementById(
  "history-event-container"
);

document.addEventListener("DOMContentLoaded", () => {
  const fetchEvents = async () => {
    const session = await getSession();
    const userId = session.data.users_id;

    try {
      const response = await fetch(
        `${API_BASE_URL}/registration?user_id=${userId}`
      );
      const {data} = await response.json();

      if (!data) {
        historyEventsContainer.innerHTML =
          "<p>Tidak ada event yang diikuti.</p>";
        return;
      }

      const sliceEvents = data.slice(0, 6);

      sliceEvents.forEach((event) => {
        historyEventsContainer.innerHTML += `
          <div class="relative">
          <img
            src="${event.poster}"
            alt="${event.title}"
            class="rounded-xl lg:w-[350px] h-[250px] xl:w-[500px]"
          />
          <a
            href="event-detail?id=${event.event_id}"
          >
            <div class="absolute w-[95%] mx-2 bottom-2 p-2 backdrop-blur rounded-xl">
                <div class="flex justify-between items-center">
                  <div class="desc text-white">

                  <h3 class="text-lg poppins-semibold">${event.title}</h3>
                </div>              
              </div>
            </div>
          </a>
          </div>
        `;
      });
    } catch (error) {
      console.error("Failed to fetch events:", error);
      historyEventsContainer.innerHTML = "<p>Error fetching events.</p>";
    }
  };

  fetchEvents();
});
