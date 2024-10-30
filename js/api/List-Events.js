// List-Events.js
import { API_BASE_URL } from "../config.js";
import { LocationSvgIcon, CalendarSvgIcon } from "../components/svg.js";
import { formattedDate } from "../utils.js";

const upcomingEventsContainer = document.getElementById(
  "upcoming-events-container"
);
const recommendedEventsContainer = document.getElementById(
  "recommended-events-container"
);
const allEventsContainer = document.getElementById("all-events-container");
const paginationContainer = document.getElementById("pagination-container");

const EVENTS_PER_PAGE = 10; // Jumlah event per halaman
let currentPage = 1;
let allEvents = [];

document.addEventListener("DOMContentLoaded", () => {
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      const { data } = await response.json();

      if (data.length === 0) {
        upcomingEventsContainer.innerHTML = "<p>No upcoming events found.</p>";
        recommendedEventsContainer.innerHTML =
          "<p>No recommended events found.</p>";
        allEventsContainer.innerHTML = "<p>No events found.</p>";
        return;
      }

      // Slice data untuk upcoming dan recommended events
      const upcomingEvents = data.slice(0, 5);
      const recommendedEvents = data.slice(0, 8);
      allEvents = data; // Simpan semua events untuk pagination

      // Render Upcoming Events
      upcomingEvents.forEach((event) => {
        upcomingEventsContainer.innerHTML += `
                    <div class="swiper-slide bg-white shadow-md hover:shadow-lg rounded-lg mb-2">
                        <a href="event-detail?id=${event.event_id}">
                            <img class="rounded-t-lg object-cover w-full h-48 object-top" src="${
                              event.poster
                            }" alt="${
          event.title
        }" class="rounded-t-lg object-cover w-full h-48"/>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-1 truncate" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                    ${event.title}
                                </h3>
                                <div class="flex gap-2 items-center">
                                    <span class="text-gray-600">${LocationSvgIcon}</span>
                                    <p class="text-gray-600 poppins-tight">${
                                      event.location
                                    }</p>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <span class="text-gray-600">${CalendarSvgIcon}</span>
                                    <p class="text-gray-600 poppins-tight">${formattedDate(
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
                    <div class="swiper-slide bg-white shadow-md hover:shadow-lg rounded-lg mb-2">
                        <a href="event-detail?id=${event.event_id}">
                            <img class="rounded-t-lg object-cover w-full h-48 object-top" src="${
                              event.poster
                            }" alt="${
          event.title
        }" class="rounded-t-lg object-cover w-full h-48"/>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-1 truncate" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                    ${event.title}
                                </h3>
                                <div class="flex gap-2 items-center">
                                    <span class="text-gray-600">${LocationSvgIcon}</span>
                                    <p class="text-gray-600 poppins-tight">${
                                      event.location
                                    }</p>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <span class="text-gray-600">${CalendarSvgIcon}</span>
                                    <p class="text-gray-600 poppins-tight">${formattedDate(
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

      // Render All Events dengan pagination
      renderAllEvents();
    } catch (error) {
      console.error("Failed to fetch events:", error);
      upcomingEventsContainer.innerHTML = "<p>Error fetching events.</p>";
      recommendedEventsContainer.innerHTML = "<p>Error fetching events.</p>";
      allEventsContainer.innerHTML = "<p>Error fetching events.</p>";
    }
  };

  const renderAllEvents = () => {
    allEventsContainer.innerHTML = ""; // Clear previous events
    const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
    const endIndex = startIndex + EVENTS_PER_PAGE;
    const paginatedEvents = allEvents.slice(startIndex, endIndex);

    // Render paginated events
    paginatedEvents.forEach((event) => {
      allEventsContainer.innerHTML += `
        <div class="bg-white shadow-md hover:shadow-lg rounded-lg">
              <a href="event-detail?id=${event.event_id}">
                        <img class="rounded-t-lg object-cover w-full h-48 object-top" src="${
                          event.poster
                        }" alt="${
        event.title
      }" class="rounded-t-lg object-cover w-full h-48"/>
          <div class="p-4">
              <h3 class="text-lg font-semibold mb-1 truncate" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
                                    ${event.title}
                                </h3>
                        <div class="flex gap-2 items-center">
                          <span class="text-gray-600">${LocationSvgIcon}</span>
                        <p class="text-gray-600 poppins-tight">${
                          event.location
                        }</p>
                        </div>
                        <div class="flex gap-2 items-center">
                          <span class="text-gray-600">${CalendarSvgIcon}</span>
                        <p class="text-gray-600 poppins-tight">${formattedDate(
                          event.date_add
                        )}</p>
                        </div>
                    </a>
                </div>
            `;
    });

    // Update pagination
    updatePagination();
  };

  const updatePagination = () => {
    const totalPages = Math.ceil(allEvents.length / EVENTS_PER_PAGE);

    // Clear previous pagination
    paginationContainer.innerHTML = "";

    // Render pagination
    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#all-events-container";
      pageLink.textContent = i;
      pageLink.classList.add(
        "relative",
        "inline-flex",
        "items-center",
        "px-4",
        "py-2",
        "text-sm",
        "font-semibold",
        "text-gray-900",
        "ring-1",
        "ring-inset",
        "ring-gray-300",
        "hover:bg-blue-50",
        "focus:z-20",
        "focus:outline-offset-0"
      );

      if (i === currentPage) {
        pageLink.classList.add(
          "z-10",
          "bg-blue-600",
          "text-white",
          "focus-visible:outline",
          "focus-visible:outline-2",
          "focus-visible:outline-offset-2",
          "focus-visible:outline-blue-600"
        );
      }

      pageLink.addEventListener("click", () => {
        currentPage = i;
        renderAllEvents();
      });

      paginationContainer.appendChild(pageLink);
    }
  };

  fetchEvents();
});
