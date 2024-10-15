import {JSON_BASE_URL, API_BASE_URL} from "../config.js";
import {LocationSvgIcon, CalendarSvgIcon} from "../components/svg.js";

const eventDetailContainer = document.getElementById("event-detail-container");

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const eventId = getQueryParam("id");

document.addEventListener("DOMContentLoaded", () => {
  const fetchEventById = async (eventId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/events/${eventId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const {data} = await response.json();
      console.log(data);

      if (data) {
        eventDetailContainer.innerHTML += ` 
          <div class="relative grid w-full items-center">
            <img
              src="${data.poster}"
              alt="${data.event_name}"
              class="w-full h-[60vh] blur-sm rounded-b-2xl shadow-lg"
            />
            <div class="w-full grid justify-center">
              <div class="w-full md:w-8/12 absolute -bottom-[70%] md:-bottom-1/2 xl:-bottom-44 left-1/2 -translate-x-1/2 bg-white shadow-lg p-4 md:p-8  rounded-xl">
                <h2 class="font-bold text-3xl">${data.title}</h2>
                  <div class="md:flex md:justify-between items-center">
                    <div>  
                      <div class="flex gap-2 items-center">
                        ${LocationSvgIcon}
                        <p class="poppins-tight">${data.location}</p>
                      </div>
                      <div class="flex gap-2 items-center">
                        ${CalendarSvgIcon}
                        <p class="poppins-tight">${data.date_add}</p>
                      </div>
                    </div>
                    <div class="flex gap-2 items-center">
                      <img src="img/logo.png" alt="a" class="w-[20px]"/>
                      <p>Polivent</p>
                    </div>
                  </div>
                  <div class="my-4">
                    <h3 class="text-lg font-semibold">Description</h3>
                    <p>${data.desc_event}</p>
                  </div>
                  <div class="flex justify-between">
                    <div>
                      <p class="text-tertiary text-lg font-bold">Free</p>
                      <p class="text-gray-500 text-sm">45 Ticket Left</p>
                    </div>
                    <div id="join-button-container"></div>
                  </div>
              </div>
            </div>
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
