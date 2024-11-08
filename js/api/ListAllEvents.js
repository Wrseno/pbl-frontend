// List-Events.js
import {API_BASE_URL} from "../config.js";
import {LocationSvgIcon, CalendarSvgIcon} from "../components/svg.js";
import {formattedDate} from "../utils.js";

const upcomingEventsContainer = document.getElementById(
  "upcoming-events-container"
);
const upcomingEventsMobileContainer = document.getElementById(
  "upcoming-events-mobile-container"
);
const recommendedEventsContainer = document.getElementById(
  "recommended-events-container"
);
const allEventsContainer = document.getElementById("all-events-container");
const allEventsMobileContainer = document.getElementById(
  "all-events-mobile-container"
);
const paginationContainer = document.getElementById("pagination-container");

const EVENTS_PER_PAGE = 4; // Jumlah event per halaman
let currentPage = 1;
let allEvents = [];

document.addEventListener("DOMContentLoaded", () => {
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events`);
      const {data} = await response.json();

      if (data.length === 0) {
        upcomingEventsContainer.innerHTML = "<p>No upcoming events found.</p>";
        recommendedEventsContainer.innerHTML =
          "<p>No recommended events found.</p>";
        allEventsContainer.innerHTML = "<p>No events found.</p>";
        return;
      }

      // Slice data untuk upcoming dan recommended events
      const recommendedEvents = data.slice(0, 8);
      allEvents = data; // Simpan semua events untuk pagination

      // Render Recommended Events
      recommendedEvents.forEach((event) => {
        recommendedEventsContainer.innerHTML += `
                    <swiper-slide class="h-[300px]">
            <a
              href="event-detail?id=${event.event_id}"
            >
              <img
                src="${event.poster}"
                alt="${event.title}"
                class="rounded-xl object-cover w-full h-[400px] object-top"
              />
              <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-t-xl">
                  <div class="flex justify-between items-center">
                    <div class="desc text-white">

                    <h3 class="text-md poppins-semibold" >${event.title.substring(
                      0,
                      15
                    )}...</h3>
                    <div class="flex gap-2 items-center">
                      ${LocationSvgIcon}
                      <p class="text-sm">${event.location}</p>
                    </div>
                    <div class="flex gap-2 items-center">
                      ${CalendarSvgIcon}
                      <p class="text-sm">${formattedDate(event.date_add)}</p>
                    </div>
                  </div>              
                </div>
              </div>
            </a>
          </swiper-slide>
                `;
      });

      // upcomingSwiper.update(); // Update Swiper setelah menambahkan slides
      // recommendedSwiper.update();

      // Render All Events dengan pagination
      renderAllEvents();
    } catch (error) {
      console.error("Failed to fetch events:", error);
      upcomingEventsContainer.innerHTML = "<p>Error fetching events.</p>";
      recommendedEventsContainer.innerHTML = "<p>Error fetching events.</p>";
      allEventsContainer.innerHTML = "<p>Error fetching events.</p>";
    }
  };

  const fetchUpcomingEvents = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/events?upcoming`);
      const {data} = await response.json();

      const upcomingEvents = data.slice(0, 5);
      // Render Upcoming Events mobile
      upcomingEvents.forEach((event) => {
        upcomingEventsMobileContainer.innerHTML += `
                    <swiper-slide class="h-[400px]">
            <a
              href="event-detail?id=${event.event_id}"
            >
              <img
                src="${event.poster}"
                alt="${event.title}"
                class="rounded-xl object-cover w-full"
              />
              <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-xl">
                  <div class="flex justify-between items-center">
                    <div class="desc text-white">

                    <h3 class="text-lg poppins-semibold truncate">${
                      event.title
                    }</h3>
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

      // Render Upcoming Events mobile medium
      upcomingEvents.forEach((event) => {
        upcomingEventsContainer.innerHTML += `
                    <swiper-slide class="h-[400px]">
            <a
              href="event-detail?id=${event.event_id}"
            >
              <img
                src="${event.poster}"
                alt="${event.title}"
                class="rounded-xl object-cover w-full"
              />
              <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-xl">
                  <div class="flex justify-between items-center">
                    <div class="desc text-white">

                    <h3 class="text-lg poppins-semibold truncate">${
                      event.title
                    }</h3>
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
    } catch (error) {}
  };

  const renderAllEvents = () => {
    allEventsContainer.innerHTML = ""; // Clear previous events
    allEventsMobileContainer.innerHTML = ""; // Clear previous events
    const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
    const endIndex = startIndex + EVENTS_PER_PAGE;
    const paginatedEvents = allEvents.slice(startIndex, endIndex);

    // Render paginated events mobile
    paginatedEvents.forEach((event) => {
      allEventsMobileContainer.innerHTML += `
        <swiper-slide class="h-[400px]">
            <a
              href="event-detail?id=${event.event_id}"
            >
              <img
                src="${event.poster}"
                alt="${event.title}"
                class="rounded-xl object-cover w-full object-top h-[400px]"
              />
              <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-xl">
                  <div class="flex justify-between items-center">
                    <div class="desc text-white">

                    <h3 class="text-lg poppins-semibold truncate">${
                      event.title
                    }</h3>
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

    // all events medium
    paginatedEvents.forEach((event) => {
      allEventsContainer.innerHTML += `
        <swiper-slide class="h-[400px]">
            <a
              href="event-detail?id=${event.event_id}"
            >
              <img
                src="${event.poster}"
                alt="${event.title}"
                class="rounded-xl object-cover w-full object-top h-[400px]"
              />
              <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-xl">
                  <div class="flex justify-between items-center">
                    <div class="desc text-white">

                    <h3 class="text-lg poppins-semibold truncate">${
                      event.title
                    }</h3>
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
        "text-white",
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
          "hover:text-gray-900",
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
  fetchUpcomingEvents();
});
