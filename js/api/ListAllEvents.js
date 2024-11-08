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
const mostLikedEventsContainer = document.getElementById(
  "recommended-events-container"
);
const allEventsContainer = document.getElementById("all-events-container");
const allEventsMobileContainer = document.getElementById(
  "all-events-mobile-container"
);
const paginationContainer = document.getElementById("pagination-container");

const EVENTS_PER_PAGE = 4;
let currentPage = 1;
let allEvents = [];

// Fetch all events and likes once and process data
document.addEventListener("DOMContentLoaded", async () => {
  try {
    const [eventsResponse, likesResponse] = await Promise.all([
      fetch(`${API_BASE_URL}/events`),
      fetch(`${API_BASE_URL}/likes?limit=5`),
    ]);

    const {data: events} = await eventsResponse.json();
    const {data: mostLikedEvents} = await likesResponse.json();
    console.log(mostLikedEvents, events);

    if (events.length === 0) {
      displayNoEventsMessage();
      return;
    }

    allEvents = events;
    renderMostLikedEvents(mostLikedEvents.slice(0, 8));
    renderUpcomingEvents(events.slice(0, 5));
    renderAllEvents();
  } catch (error) {
    console.error("Failed to fetch events:", error);
    displayErrorMessages();
  }
});

// Display a "no events" message in all relevant containers
function displayNoEventsMessage() {
  upcomingEventsContainer.innerHTML = "<p>No upcoming events found.</p>";
  mostLikedEventsContainer.innerHTML = "<p>No recommended events found.</p>";
  allEventsContainer.innerHTML = "<p>No events found.</p>";
}

// Display an error message in all relevant containers
function displayErrorMessages() {
  upcomingEventsContainer.innerHTML = "<p>Error fetching events.</p>";
  mostLikedEventsContainer.innerHTML = "<p>Error fetching events.</p>";
  allEventsContainer.innerHTML = "<p>Error fetching events.</p>";
}

// Render Recommended Events
function renderMostLikedEvents(events) {
  let htmlContent = "";
  events.forEach((event) => {
    htmlContent += `
      <swiper-slide class="h-[300px]">
        <a href="event-detail?id=${event.event_id}">
          <img src="${event.poster}" alt="${
      event.title
    }" class="rounded-xl object-cover w-full h-[400px] object-top"/>
          <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-t-xl">
            <div class="desc text-white">
              <h3 class="text-md poppins-semibold">${event.title}...</h3>
              <div class="flex gap-2 items-center">${LocationSvgIcon}<p class="text-sm">${
      event.location
    }</p></div>
              <div class="flex gap-2 items-center">${CalendarSvgIcon}<p class="text-sm">${formattedDate(
      event.date_add
    )}</p></div>
            </div>
          </div>
        </a>
      </swiper-slide>`;
  });
  mostLikedEventsContainer.innerHTML = htmlContent;
}

// Render Upcoming Events
function renderUpcomingEvents(events) {
  let htmlContent = "";
  events.forEach((event) => {
    const eventHtml = `
      <swiper-slide class="h-[400px]">
        <a href="event-detail?id=${event.event_id}">
          <img src="${event.poster}" alt="${
      event.title
    }" class="rounded-xl object-cover w-full"/>
          <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-xl">
            <div class="desc text-white">
              <h3 class="text-lg poppins-semibold truncate">${event.title}</h3>
              <div class="flex gap-2 items-center">${LocationSvgIcon}<p class="poppins-tight">${
      event.location
    }</p></div>
              <div class="flex gap-2 items-center">${CalendarSvgIcon}<p class="poppins-tight">${formattedDate(
      event.date_add
    )}</p></div>
            </div>
          </div>
        </a>
      </swiper-slide>`;
    htmlContent += eventHtml;
  });
  upcomingEventsContainer.innerHTML = htmlContent;
  upcomingEventsMobileContainer.innerHTML = htmlContent;
}

// Render All Events with pagination
function renderAllEvents() {
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const paginatedEvents = allEvents.slice(
    startIndex,
    startIndex + EVENTS_PER_PAGE
  );

  let htmlContent = "";
  paginatedEvents.forEach((event) => {
    htmlContent += `
      <swiper-slide class="h-[400px]">
        <a href="event-detail?id=${event.event_id}">
          <img src="${event.poster}" alt="${
      event.title
    }" class="rounded-xl object-cover w-full object-top h-[400px]"/>
          <div class="absolute w-full bottom-0 p-2 backdrop-blur bg-black/20 rounded-xl">
            <div class="desc text-white">
              <h3 class="text-lg poppins-semibold truncate">${event.title}</h3>
              <div class="flex gap-2 items-center">${LocationSvgIcon}<p class="poppins-tight">${
      event.location
    }</p></div>
              <div class="flex gap-2 items-center">${CalendarSvgIcon}<p class="poppins-tight">${formattedDate(
      event.date_add
    )}</p></div>
            </div>
          </div>
        </a>
      </swiper-slide>`;
  });
  allEventsContainer.innerHTML = htmlContent;
  allEventsMobileContainer.innerHTML = htmlContent;

  updatePagination();
}

// Update pagination based on the current page
function updatePagination() {
  const totalPages = Math.ceil(allEvents.length / EVENTS_PER_PAGE);
  paginationContainer.innerHTML = "";

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
      "focus:z-20"
    );

    if (i === currentPage) {
      pageLink.classList.add(
        "z-10",
        "bg-blue-600",
        "hover:text-gray-900",
        "focus-visible:outline-blue-600"
      );
    }

    pageLink.addEventListener("click", () => {
      currentPage = i;
      renderAllEvents();
    });

    paginationContainer.appendChild(pageLink);
  }
}
