import {arrowBottomSvgIcon} from "../components/svg.js";
import {API_BASE_URL} from "../config.js";
import {getProfileUser, getQueryParam, timeAgo} from "../utils.js";

const commentsContainer = document.getElementById("comments-container");
const commentsInput = document.getElementById("comments-input");
const eventId = getQueryParam("id");

const loadComments = async () => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/comments?event_id=${eventId}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        commentsContainer.innerHTML =
          "<p>Tidak ada komentar untuk event ini.</p>";
      } else {
        commentsContainer.innerHTML =
          "<p>Terjadi kesalahan saat memuat komentar.</p>";
      }
    } else {
      const {data} = await response.json();

      commentsContainer.innerHTML = "";

      if (!data || data.length === 0) {
        commentsContainer.innerHTML =
          "<p>Jadilah yang pertama berkomentar.</p>";
      } else {
        data.forEach((dt) => {
          if (dt.comment_parent_id === null) {
            commentsContainer.innerHTML += `
              <div>
                <div class="grid">
                  <div class="flex gap-2 p-2">
                    <img
                      src="${dt.avatar}"
                      alt="Profil"
                      class="w-[50px] h-[50px] rounded-full object-cover"
                    />
                    <div class="text-gray-900 text-sm">
                      <p class="font-semibold flex gap-4" data-parent-username="${
                        dt.username
                      }">
                        ${dt.username}
                        <span class="text-gray-500 font-normal">${timeAgo(
                          dt.created_at
                        )}</span>
                      </p>
                      <p class="dataId" data-parent-user-id="${
                        dt.user_id
                      }" data-parent-comment-id="${dt.comment_id}">
                        ${dt.content}
                      </p>
                      <button class="btn-reply flex items-center gap-2 justify-start px-4 text-sm text-center text-tertiary font-semibold hover:bg-gray-200 p-2 rounded-full">
                        Balas
                      </button>
                      <button class="btn-show-reply flex items-center gap-2 justify-start text-center text-sm px-6 text-tertiary font-semibold hover:bg-gray-200 p-2 rounded-full">
                        ${arrowBottomSvgIcon} Balasan
                      </button>
                    </div>
                  </div>
                </div>
                <div id="replies-input-${dt.user_id}"></div>
                <div id="replies-${dt.comment_parent_id}" class="ml-12"></div>
              </div>
            `;
          }
        });
      }
    }
  } catch (error) {
    commentsContainer.innerHTML =
      "<p>Terjadi kesalahan saat memuat komentar.</p>";
    console.error("Error loading comments:", error);
  }

  const userProfile = await getProfileUser();

  if (!userProfile) {
    commentsInput.innerHTML = `
      <div class="md:flex justify-between gap-2 mb-6">
        <div class="flex gap-2 items-center w-full">
          <img src="img/Logo Polivent.png" alt="Foto profil" class="w-[50px] h-[50px] rounded-full object-cover" />
          <input type="text" placeholder="Tambahkan komentar..." id="input-comment" class="border-b-2 w-full outline-none focus:border-primary duration-300 ease-in-out p-3" />
        </div>
        <button type="submit" id="btn-comment" class="bg-gray-100 p-2 px-3 md:px-6 mt-3 md:mt-0 rounded-full hover:bg-gray-200">
          Komentar
        </button>
      </div>
    `;
    return; // Kembali jika user belum login
  }

  const {avatar, username, user_id} = userProfile;

  commentsInput.innerHTML = `
    <div class="md:flex justify-between gap-2 mb-6">
      <div class="flex gap-2 items-center w-full">
        <img src="${
          avatar || ""
        }" alt="Foto profil" class="w-[50px] h-[50px] rounded-full object-cover" />
        <input type="text" placeholder="Tambahkan komentar..." id="input-comment" class="border-b-2 w-full outline-none focus:border-primary duration-300 ease-in-out p-3" />
      </div>
      <button type="submit" id="btn-comment" class="bg-gray-100 p-2 px-3 md:px-6 mt-3 md:mt-0 rounded-full hover:bg-gray-200">
        Komentar
      </button>
    </div>
  `;
};

export default loadComments;
