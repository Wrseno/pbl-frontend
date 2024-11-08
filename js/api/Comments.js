import {arrowBottomSvgIcon} from "../components/svg.js";
import {API_BASE_URL} from "../config.js";
import {getQueryParam, timeAgo} from "../utils.js";

const commentsContainer = document.getElementById("comments-container");
const commentsInput = document.getElementById("comments-input");
const eventId = getQueryParam("id");

const loadComments = async () => {
  if (!commentsContainer) {
    console.error("commentsContainer element not found");
    return;
  }

  commentsInput.innerHTML += `
    <div class="md:flex justify-between gap-2 mb-6">
      <div class="flex gap-2 items-center w-full">
        <img
          src="img/Logo Polivent.png"
          alt="Foto profil"
          class="w-[50px] rounded-full"
        />
        <input
          type="text"
          placeholder="Tambahkan komentar..."
          id="input-comment"
          class="border-b-2 w-full outline-none focus:border-primary duration-300 ease-in-out p-3"
        />
      </div>
      <button
        type="submit"
        id="btn-comment"
        class="bg-gray-100 p-2 px-3 md:px-6 mt-3 md:mt-0 rounded-full"
      >
        Komentar
      </button>
    </div>
  `;

  try {
    const response = await fetch(
      `${API_BASE_URL}/comments?event_id=${eventId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const {data} = await response.json();
    console.log(data);

    commentsContainer.innerHTML = "";

    if (data && data.length > 0) {
      data.forEach((dt) => {
        commentsContainer.innerHTML += `
        <div>
          <div class="grid">
            <div class="flex gap-2 items-center p-2">
              <img
                src="img/Logo Polivent.png"
                alt="Profil"
                class="w-[50px] rounded-full"
              />
              <div class="text-gray-900 text-sm">
                <p class="font-semibold flex gap-4" data-username="${
                  dt.username
                }">
                  ${dt.username} 
                  <span class="text-gray-500 font-normal">${timeAgo(
                    dt.created_at
                  )}</span>
                </p>
                <p
                  class="dataId"
                  data-user-id="${dt.users_id}"
                  data-comment-id="${dt.comment_id}"
                >
                  ${dt.content_comment}
                </p>
                <button
                  class="btn-reply flex items-center gap-2 justify-start px-4 text-sm text-center text-tertiary font-semibold hover:bg-gray-200 p-2 rounded-full"
                >
                  Balas
                </button>
                <button
                  class="btn-show-reply flex items-center gap-2 justify-start text-center text-sm px-6 text-tertiary font-semibold hover:bg-gray-200 p-2 rounded-full"
                >
                  ${arrowBottomSvgIcon} Balasan
                </button>
              </div>
            </div>
          </div>
          <div id="replies-input-${dt.users_id}"></div>
          <div id="replies-${dt.comment_id}" class="ml-12"></div>
        </div>

        `;
      });
    } else {
      commentsContainer.innerHTML = "<p>Jadilah yang pertama berkomentar.</p>";
    }
  } catch (error) {
    commentsContainer.innerHTML = "<p>Jadilah yang pertama berkomentar</p>";
    console.error("Error loading comments:", error);
  }
};

export default loadComments;
