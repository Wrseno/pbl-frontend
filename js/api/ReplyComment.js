import {API_BASE_URL} from "../config.js";
import {timeAgo} from "../utils.js";

// Fungsi untuk menangani tampilan balasan
const toggleReplies = async (button) => {
  const commentId = button
    .closest(".grid")
    .querySelector("[data-comment-id]")
    .getAttribute("data-comment-id");

  let replyContainer = document.getElementById(`replies-${commentId}`);
  if (!replyContainer) {
    replyContainer = document.createElement("div");
    replyContainer.id = `replies-${commentId}`;
    button.closest(".grid").appendChild(replyContainer);
  }

  if (replyContainer.innerHTML) {
    // Jika sudah ada balasan, sembunyikan dengan mengosongkan konten
    replyContainer.innerHTML = "";
  } else {
    // Jika belum ada balasan, panggil API untuk memuat balasan
    await loadRepliesForComment(commentId, replyContainer);
  }
};

// Fungsi untuk mengambil balasan dari API
export const loadRepliesForComment = async (commentId, replyContainer) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/comments?comment_parent_id=${commentId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const {data} = await response.json();
    replyContainer.innerHTML = "";

    if (data && data.length > 0) {
      // Memuat balasan dengan rekursif
      for (const dt of data) {
        replyContainer.innerHTML += await createCommentMarkup(dt, dt.username);
      }
    } else {
      replyContainer.innerHTML =
        "<p class='text-sm ml-6'>Tidak ada balasan.</p>";
    }
  } catch (error) {
    replyContainer.innerHTML = "<p class='text-sm ml-6'>Tidak ada balasan.</p>";
  }
};

const loadReply = () => {
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".btn-show-reply");
    if (button) {
      toggleReplies(button); // Panggil toggleReplies ketika tombol diklik
    }
  });
};

export const createCommentMarkup = async (comment, usernameParentComment) => {
  const {
    username,
    created_at,
    content,
    comment_parent_id,
    comment_id,
    avatar,
    user_id,
  } = comment;

  let replyMarkup = `
    <div class="grid ml-${comment_parent_id ? 12 : 0}">
      <div class="flex gap-2 items-center p-2">
        <img
          src="${avatar}"
          alt="Profil"
          class="w-[50px] h-[50px] object-cover rounded-full"
        />
        <div class="text-gray-900 text-sm">
          <p class="font-semibold flex gap-4 items-center" data-username="${username}">
            ${username} 
            <span class="text-gray-500 font-normal">${timeAgo(
              created_at
            )}</span>
          </p>
          <p><span class="text-tertiary font-medium" data-user-id="${user_id}" data-comment-id="${comment_id}">@${usernameParentComment}</span> ${content}</p>
          <button
            class="btn-reply flex items-center gap-2 justify-start px-4 text-sm text-center text-tertiary font-semibold hover:bg-gray-200 p-2 rounded-full"
          >
            Balas
          </button>
        </div>
      </div>
      <div id="replies-input-${user_id}"></div>
      <div id="replies-${comment_parent_id}" class="ml-12"></div>
    </div>
  `;

  const nestedReplies = await fetchNestedReplies(comment_id);
  if (nestedReplies && nestedReplies.length > 0) {
    for (const nestedComment of nestedReplies) {
      replyMarkup += await createCommentMarkup(nestedComment, username);
    }
  }

  return replyMarkup;
};

// Fungsi untuk mengambil balasan berlapis dari API
const fetchNestedReplies = async (parentId) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/comments?comment_parent_id=${parentId}`
    );

    if (!response.ok) {
      return [];
    }

    const {data} = await response.json();
    return data || [];
  } catch (error) {
    return [];
  }
};

export default loadReply;
