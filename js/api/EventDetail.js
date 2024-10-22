import {JSON_BASE_URL, API_BASE_URL} from "../config.js";
import {
  LocationSvgIcon,
  CalendarSvgIcon,
  ClockSvgIcon,
  LikesSvgIcon,
} from "../components/svg.js";
import {formattedDate, getQueryParam} from "../utils.js";

const eventDetailContainer = document.getElementById("event-detail-container");
const currentPage = document.getElementById("current-page");
const eventId = getQueryParam("id");

document.addEventListener("DOMContentLoaded", () => {
  const fetchEventById = async (eventId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/events/${eventId}`);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const {data} = await response.json();

      if (data) currentPage.textContent = `${data.title}`;

      if (data) {
        eventDetailContainer.innerHTML += ` 
        <div class="grid md:grid-cols-2 items-center gap-8">
          <div class="md:hidden mt-6">
            <img
              src=${data.poster}
              alt="thumbnail"
              class="w-full h-[200px] rounded-lg"
            />
          </div>
          <div>
            <div class="md:my-12 grid gap-4">
              <div>
                <h4 class="text-lg font-medium text-tertiary">Events</h4>
                <h2 class="text-4xl font-extrabold text-gradient">
                  ${data.title}
                </h2>
              </div>
              <div>
                <p class="font-semibold">Deskripsi</p>
                <p>
                  ${data.desc_event}
                </p>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="grid gap-2">
                <p class="font-medium text-gray-500">Ends in</p>
                <div class="flex items-center gap-4">
                  <div class="grid text-center">
                    <span
                      class="bg-gray-100 p-2 px-4 rounded-md font-bold text-tertiary"
                      >1</span
                    >
                    <span class="text-sm text-gray-500 font-medium">Days</span>
                  </div>
                  <div class="grid text-center">
                    <span
                      class="bg-gray-100 p-2 px-4 rounded-md font-bold text-tertiary"
                      >10</span
                    >
                    <span class="text-sm text-gray-500 font-medium">Hrs</span>
                  </div>
                  <div class="grid text-center">
                    <span
                      class="bg-gray-100 p-2 px-4 rounded-md font-bold text-tertiary"
                      >1</span
                    >
                    <span class="text-sm text-gray-500 font-medium">Mins</span>
                  </div>
                </div>
              </div>
              <div class="bg-gray-100 rounded-full">
                <button
                  class="w-full flex items-center gap-2 py-3 px-6 text-sm font-medium text-rose-700"
                >
                  ${LikesSvgIcon}
                  Likes
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <img
              src=${data.poster}
              alt="thumbnail"
              class="w-full h-[300px] rounded-lg"
            />
          </div>
        </div>
        <div
          class="flex flex-wrap justify-center md:grid md:grid-cols-5 gap-4 items-center border-t border-b my-6 p-4"
        >
          <div class="border-r">
            <div class="flex items-center gap-2 justify-center text-gray-500">
              ${LocationSvgIcon}
              <p class="font-medium">Lokasi</p>
            </div>
            <p class="text-center text-gray-500">${data.location}</p>
          </div>
          <div class="border-r">
            <div class="flex items-center gap-2 justify-center text-gray-500">
              ${ClockSvgIcon}
              <p class="font-medium">Waktu</p>
            </div>
            <p class="text-center text-gray-500">08.00 - 16.00 WIB</p>
          </div>
          <div class="border-r">
            <div class="flex items-center gap-2 justify-center text-gray-500">
              ${CalendarSvgIcon}
              <p class="font-medium">Tanggal</p>
            </div>
            <p class="text-center text-gray-500">${formattedDate(
              data.date_start
            )}</p>
          </div>
          <div
            class="w-full col-span-2 mx-auto justify-center"
            id="join-button-container"
          ></div>
        </div>
        `;
      } else {
        eventDetailContainer.innerHTML = `
          <h2 class="poppins-semibold text-xl text-center">No events found.</h2>
        `;
      }
    } catch (error) {
      console.error("Failed to fetch event:", error);
      eventDetailContainer.innerHTML = "<p>Error fetching event.</p>";
    }
  };

  if (eventId) {
    fetchEventById(eventId);
  } else {
    eventDetailContainer.innerHTML = "<p>No event ID provided.</p>";
  }
});
