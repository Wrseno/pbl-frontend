import {API_BASE_URL} from "../config.js";
import {LocationSvgIcon, CalendarSvgIcon} from "../components/svg.js";

const eventsContainer = document.getElementById("events-container");

document.addEventListener("DOMContentLoaded", () => {
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      const {data} = await response.json();
      data.forEach((dt) => console.log(dt.poster));

      if (data.length === 0) {
        eventsContainer.innerHTML = "<p>No events found.</p>";
        return;
      }

      data.forEach((event) => {
        eventsContainer.innerHTML += `
          <div class="relative snap-center shrink-0">
          <img
            src="${event.poster}"
            alt="${event.title}"
            class="rounded-xl lg:w-[350px] h-[250px] xl:w-[500px]"
          />
          <div class="absolute w-[95%] mx-2 bottom-2 p-2 backdrop-blur rounded-xl">
              <div class="flex justify-between items-center">
                <div class="desc text-white">
                  <h3 class="text-lg poppins-semibold">${event.title}</h3>
                  <div class="flex gap-2 items-center">
                    ${LocationSvgIcon}
                    <p class="poppins-tight">${event.location}</p>
                  </div>
                  <div class="flex gap-2 items-center">
                    ${CalendarSvgIcon}
                    <p class="poppins-tight">${event.date_add}</p>
                  </div>
                </div>
                <a
                  href="event-detail?id=${event.event_id}"
                  class="p-2 px-8 bg-gradient-to-r from-yellow-300 via-tertiary to-yellow-300 text-white font-semibold poppins-regular rounded-full"
                >
                  Join
                </a>
              </div>
            </div>
          </div>
        `;
      });
    } catch (error) {
      console.error("Failed to fetch events:", error);
      eventsContainer.innerHTML = "<p>Error fetching events.</p>";
    }
  };

  fetchEvents();
});
