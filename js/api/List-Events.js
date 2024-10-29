// Events.js
import { API_BASE_URL } from "../config.js";
import { LocationSvgIcon, CalendarSvgIcon } from "../components/svg.js";
import { formattedDate } from "../utils.js";

const upcomingEventsContainer = document.getElementById(
  "upcoming-events-container"
);
const recommendedEventsContainer = document.getElementById(
  "recommended-events-container"
);

document.addEventListener("DOMContentLoaded", () => {
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      const { data } = await response.json();

      if (data.length === 0) {
        upcomingEventsContainer.innerHTML = "<p>No upcoming events found.</p>";
        recommendedEventsContainer.innerHTML =
          "<p>No recommended events found.</p>";
        return;
      }

      // Slice data untuk upcoming dan recommended events
      const upcomingEvents = data.slice(0, 5);
      const recommendedEvents = data.slice(0, 8);

      // Render Upcoming Events
      upcomingEvents.forEach((event) => {
        upcomingEventsContainer.innerHTML += `
          <div class="swiper-slide bg-white shadow rounded-lg">
            <a href="event-detail?id=${event.event_id}">
              <img src="${event.poster}" alt="${
          event.title
        }" class="rounded-t-lg object-cover w-full h-48"/>
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-1">${event.title}</h3>
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
                <div class="text-blue-500 font-semibold mt-2">See detail</div>
              </div>
            </a>
          </div>
        `;
      });

      // Render Recommended Events
      recommendedEvents.forEach((event) => {
        recommendedEventsContainer.innerHTML += `
          <div class="swiper-slide bg-white shadow rounded-lg">
            <a href="event-detail?id=${event.event_id}">
              <img src="${event.poster}" alt="${
          event.title
        }" class="rounded-t-lg object-cover w-full h-48"/>
              <div class="p-4">
                <h3 class="text-lg font-semibold mb-1">${event.title}</h3>
                <div class="flex gap-2 items-center">
                      ${LocationSvgIcon}
                      <p class="text-grey-500 poppins-tight">${
                        event.location
                      }</p>
                    </div>
                <div class="flex gap-2 items-center">
                      ${CalendarSvgIcon}
                      <p class="text-grey-500 poppins-tight">${formattedDate(
                        event.date_add
                      )}</p>
                    </div>
                <div class="text-blue-500 font-semibold mt-2">See detail</div>
              </div>
            </a>
          </div>
        `;
      });

      upcomingSwiper.update(); // Update Swiper setelah menambahkan slides
      recommendedSwiper.update();
    } catch (error) {
      console.error("Failed to fetch events:", error);
      upcomingEventsContainer.innerHTML = "<p>Error fetching events.</p>";
      recommendedEventsContainer.innerHTML = "<p>Error fetching events.</p>";
    }
  };

  fetchEvents();
});
