import {API_BASE_URL} from "../config.js";
import initializeLikeButton from "./actions/AddLikesEvent.js";
import initializeJoinButton from "./actions/JoinEvent.js";
import loadComments from "./Comments.js";
import loadDateEnd from "./Countdown.js";
import loadReply from "./ReplyComment.js";
import {
  LocationSvgIcon,
  CalendarSvgIcon,
  ClockSvgIcon,
  LikesSvgIcon,
  ticketSvgIcon,
} from "../components/svg.js";
import {formattedDate, formattedHour, getQueryParam} from "../utils.js";
import addReplyComment from "./actions/AddReplyComment.js";
import {hideSkeleton, showSkeleton} from "../components/skeleton.js";
import addReplyTagUserComment from "./actions/AddReplyTagUserComment.js";
import AddCommentEvent from "./actions/AddCommentEvent.js";

const eventDetailContainer = document.getElementById("event-detail-container");
const currentPage = document.getElementById("current-page");
const eventId = getQueryParam("id");

const getEventById = async (eventId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/available_events?event_id=${eventId}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const {data} = await response.json();

    if (data) currentPage.textContent = `${data.title}`;

    if (data) {
      eventDetailContainer.innerHTML += ` 
        <div class="grid md:grid-cols-2 items-center gap-8">
          <div class="md:hidden mt-6">
            <img
              src=${data.poster}
              alt="thumbnail"
              class="w-full h-[200px] rounded-lg object-cover"
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
                  ${data.description}
                </p>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="grid gap-2">
                <p class="font-medium text-gray-500">Ends in</p>
                <div class="flex items-center gap-4" id="countdown">
                  <div class="grid text-center">
                    <span
                      class="bg-gray-100 p-2 px-4 rounded-md font-bold text-tertiary"
                      id="days"
                      ></span
                    >
                    <span class="text-sm text-gray-500 font-medium">Days</span>
                  </div>
                  <div class="grid text-center">
                    <span
                      class="bg-gray-100 p-2 px-4 rounded-md font-bold text-tertiary"
                      id="hours"
                      ></span
                    >
                    <span class="text-sm text-gray-500 font-medium">Hrs</span>
                  </div>
                  <div class="grid text-center">
                    <span
                      class="bg-gray-100 p-2 px-4 rounded-md font-bold text-tertiary"
                      id="mins"
                      ></span
                    >
                    <span class="text-sm text-gray-500 font-medium">Mins</span>
                  </div>
                  <div class="grid text-center">
                    <span
                      class="bg-gray-100 p-2 px-4 rounded-md font-bold text-tertiary"
                      id="sec"
                      ></span
                    >
                    <span class="text-sm text-gray-500 font-medium">Sec</span>
                  </div>
                </div>
              </div>
              <div class="bg-gray-100 rounded-full">
                <button
                  class="w-full flex items-center gap-2 py-3 px-6 text-sm font-medium text-gray-400"
                  id="like-button"
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
              class="w-full h-[350px] rounded-lg object-cover"
            />
          </div>
        </div>
        <div
          class="flex flex-wrap justify-center md:grid md:grid-cols-6 gap-4 items-center border-t border-b my-6 p-4"
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
            <p class="text-center text-gray-500">${formattedHour(
              data.date_start
            )} - <br/> ${formattedHour(data.date_end)} WIB</p>
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
          <div class="border-r">
            <div class="flex items-center gap-2 justify-center text-gray-500">
              ${ticketSvgIcon}
              <p class="font-medium">Kuota</p>
            </div>
            <p class="text-center text-gray-500">${data.quota} tersisa</p>
          </div>
          <div
            class="w-full col-span-2 mx-auto justify-center"
            id="join-button-container"
          ></div>
        </div>
        `;
    } else {
      eventDetailContainer.innerHTML = `
          <h2 class="poppins-semibold text-xl text-center">Tidak ada event yang ditemukan.</h2>
        `;
    }
  } catch (error) {
    eventDetailContainer.innerHTML = `<h2 class="poppins-semibold text-xl text-center">Tidak ada event yang ditemukan.</h2>`;
  }
};

const initializePage = async () => {
  if (eventId) {
    showSkeleton();
    await getEventById(eventId);
    await initializeLikeButton();
    await initializeJoinButton();
    await loadComments();
    await loadDateEnd();
    await AddCommentEvent();
    await addReplyComment();
    loadReply();
    // await addReplyTagUserComment();
    hideSkeleton();
  } else {
    eventDetailContainer.innerHTML = "<p>Event id dibutuhkan.</p>";
  }
};

document.addEventListener("DOMContentLoaded", initializePage);
