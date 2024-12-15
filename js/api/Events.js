import {API_BASE_URL} from "../config.js";
import {LocationSvgIcon, CalendarSvgIcon} from "../components/svg.js";
import {formattedDate} from "../utils.js";

const eventsContainer = document.getElementById("events-container");
const eventsContainerMobile = document.getElementById(
  "events-container-mobile"
);

document.addEventListener("DOMContentLoaded", () => {
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/available_events`);
      const {data} = await response.json();

      if (data.length === 0) {
        eventsContainer.innerHTML = `<p class="text-lg font-semibold">No events found.</p>`;
        return;
      }

      const sliceEvents = data.slice(0, 5);

      sliceEvents.forEach((event) => {
        eventsContainerMobile.innerHTML += `
          <swiper-slide class="h-[400px]">
            <a
              href="event-detail?id=${event.event_id}"
            >
              <img
                src="${event.poster}"
                alt="${event.title}"
                class="rounded-xl object-cover w-full"
              />
              <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-t-xl">
                  <div class="flex justify-between items-center">
                    <div class="desc text-white">

                    <h3 class="text-lg poppins-semibold">${event.title}</h3>
                    <div class="flex gap-2 items-center">
                      ${LocationSvgIcon}
                      <p class="poppins-tight">${event.location}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                      ${CalendarSvgIcon}
                      <p class="poppins-tight">${formattedDate(
                        event.date_add
                      )}</p>
                    </div>
                  </div>              
                </div>
              </div>
            </a>
          </swiper-slide>
        `;
      });

      sliceEvents.forEach((event) => {
        eventsContainer.innerHTML += `
          <swiper-slide class="h-[400px]">
            <a
              href="event-detail?id=${event.event_id}"
            >
              <img
                src="${event.poster}"
                alt="${event.title}"
                class="rounded-xl object-cover w-full"
              />
              <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-t-xl">
                  <div class="flex justify-between items-center">
                    <div class="desc text-white">

                    <h3 class="text-lg poppins-semibold">${event.title}</h3>
                    <div class="flex gap-2 items-center">
                      ${LocationSvgIcon}
                      <p class="poppins-tight">${event.location}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                      ${CalendarSvgIcon}
                      <p class="poppins-tight">${formattedDate(
                        event.date_add
                      )}</p>
                    </div>
                  </div>              
                </div>
              </div>
            </a>
          </swiper-slide>
        `;
      });
    } catch (error) {
      console.error("Failed to fetch events:", error);
      eventsContainer.innerHTML = "<p>Error fetching events.</p>";
    }
  };

  fetchEvents();
});
