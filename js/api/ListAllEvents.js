import {API_BASE_URL} from "../config.js";
import {LocationSvgIcon, CalendarSvgIcon} from "../components/svg.js";
import {formattedDate} from "../utils.js";

const categoriesContainer = document.getElementById("category-container");
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
let currentCategory = null;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const categoriesResponse = await fetch(`${API_BASE_URL}/categories`);
    const {data: categories} = await categoriesResponse.json();

    if (!categoriesResponse.ok) {
      throw new Error(
        `Failed to fetch categories: ${categoriesResponse.statusText}`
      );
    }

    renderCategories(categories);

    const eventsResponse = await fetch(`${API_BASE_URL}/available_events`);
    const upcomingEventResponse = await fetch(
      `${API_BASE_URL}/available_events?upcoming=true`
    );
    const likesResponse = await fetch(
      `${API_BASE_URL}/available_events?most_likes=true`
    );

    const {data: events} = await eventsResponse.json();
    const {data: upcomingEvent} = await upcomingEventResponse.json();
    const {data: mostLikedEvents} = await likesResponse.json();
    console.log(mostLikedEvents);

    if (!eventsResponse.ok) {
      throw new Error(`Failed to fetch events: ${eventsResponse.statusText}`);
    }

    if (!likesResponse.ok) {
      throw new Error(
        `Failed to fetch most liked events: ${likesResponse.statusText}`
      );
    }

    if (events.length === 0) {
      displayNoEventsMessage();
      return;
    }

    allEvents = events;
    renderMostLikedEvents(mostLikedEvents.slice(0, 8));
    renderUpcomingEvents(upcomingEvent.slice(0, 5));
    renderAllEvents();
  } catch (error) {
    console.error("Failed to fetch events:", error);
    displayErrorMessages();
  }
});

function displayNoEventsMessage() {
  allEventsContainer.innerHTML = "<p>Event tidak ditemukan.</p>";
}

function displayErrorMessages() {
  upcomingEventsContainer.innerHTML = "<p>Error fetching events.</p>";
  mostLikedEventsContainer.innerHTML = "<p>Error fetching events.</p>";
  allEventsContainer.innerHTML = "<p>Error fetching events.</p>";
}

function renderCategories(categories) {
  let htmlContent = "";
  categories.forEach((category) => {
    htmlContent += `
      <a href="#all-events" 
         class="snap-center shrink-0 flex gap-1 items-center shadow-md p-2 h-10 rounded-xl transition-colors duration-200 hover:bg-blue-100 active:bg-blue-200 border border-blue-500 category-link"
         data-category-name="${category.category_name}">
        <div class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-motherboard-fill" viewBox="0 0 16 16">
            <path d="M5 7h3V4H5z" />
            <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1m7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5"/>
          </svg>
        </div>
        <div>
          <p>${category.category_name}</p>
        </div>
      </a>
    `;
  });
  categoriesContainer.innerHTML = htmlContent;

  document.querySelectorAll(".category-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      const categoryName = e.target.closest("a").dataset.categoryName;
      currentCategory = categoryName; // Set selected category
      fetchEventsByCategory(categoryName); // Fetch events for the selected category
      scrollTo("#all-events");
    });
  });
}

export async function fetchEventsByCategory(categoryName) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/available_events?category=${categoryName}`
    );
    const {data: events} = await response.json();

    if (!response.ok) {
      throw new Error(
        `Failed to fetch events for category: ${response.statusText}`
      );
    }

    if (events.length === 0) {
      displayNoEventsMessage();
      return;
    }

    allEvents = events;
    renderAllEvents();
  } catch (error) {
    console.error("Failed to fetch events by category:", error);
    displayErrorMessages();
  }
}

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
      event.date_start
    )}</p></div>
            </div>
          </div>
        </a>
      </swiper-slide>
    `;
  });
  mostLikedEventsContainer.innerHTML = htmlContent;
}

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
      event.date_start
    )}</p></div>
            </div>
          </div>
        </a>
      </swiper-slide>
    `;
    htmlContent += eventHtml;
  });
  upcomingEventsContainer.innerHTML = htmlContent;
  upcomingEventsMobileContainer.innerHTML = htmlContent;
}

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
      event.date_start
    )}</p></div>
            </div>
          </div>
        </a>
      </swiper-slide>
    `;
  });

  allEventsContainer.innerHTML = htmlContent;
  allEventsMobileContainer.innerHTML = htmlContent;
  updatePagination();
}

function updatePagination() {
  const totalPages = Math.ceil(allEvents.length / EVENTS_PER_PAGE);
  paginationContainer.innerHTML = "";

  const paginationList = document.createElement("ul");
  paginationList.classList.add(
    "flex",
    "items-center",
    "-space-x-px",
    "h-8",
    "text-sm"
  );

  const prevButton = document.createElement("li");
  const prevLink = document.createElement("a");
  prevLink.href = "#all-events";
  prevLink.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "px-3",
    "h-8",
    "ms-0",
    "leading-tight",
    "text-gray-500",
    "bg-white",
    "border",
    "border-e-0",
    "border-gray-300",
    "rounded-s-lg",
    "hover:bg-gray-100",
    "hover:text-gray-700"
  );
  prevLink.innerHTML = `
    <span class="sr-only">Previous</span>
    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
    </svg>
  `;
  prevButton.appendChild(prevLink);
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderAllEvents();
    }
  });
  paginationList.appendChild(prevButton);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    const pageLink = document.createElement("a");
    pageLink.href = "#all-events";
    pageLink.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "px-3",
      "h-8",
      "leading-tight",
      "text-gray-500",
      "bg-white",
      "border",
      "border-gray-300",
      "hover:bg-gray-100",
      "hover:text-gray-700"
    );
    pageLink.textContent = i;

    if (i === currentPage) {
      pageLink.classList.add(
        "z-10",
        "flex",
        "items-center",
        "justify-center",
        "px-3",
        "h-8",
        "leading-tight",
        "text-blue-600",
        "border",
        "border-blue-300",
        "bg-blue-50",
        "hover:bg-blue-100",
        "hover:text-blue-700"
      );
    }

    pageItem.appendChild(pageLink);
    pageLink.addEventListener("click", () => {
      currentPage = i;
      renderAllEvents();
    });

    paginationList.appendChild(pageItem);
  }

  const nextButton = document.createElement("li");
  const nextLink = document.createElement("a");
  nextLink.href = "#all-events";
  nextLink.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "px-3",
    "h-8",
    "leading-tight",
    "text-gray-500",
    "bg-white",
    "border",
    "border-gray-300",
    "rounded-e-lg",
    "hover:bg-gray-100",
    "hover:text-gray-700"
  );
  nextLink.innerHTML = `
    <span class="sr-only">Next</span>
    <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
    </svg>
  `;
  nextButton.appendChild(nextLink);
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderAllEvents();
    }
  });
  paginationList.appendChild(nextButton);

  paginationContainer.appendChild(paginationList);
}
