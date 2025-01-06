import {API_BASE_URL} from "../config.js";
import {timeAgo} from "../utils.js";

let parentUsername;
let nestedUsername;
let parentCommentId;

const toggleReplies = async (button) => {
  const parentCommentElement = button
    .closest(".grid")
    .querySelector("[data-parent-comment-id]");
  const parentUsernameElement = button
    .closest(".grid")
    .querySelector("[data-parent-username]");
  if (parentCommentElement && parentUsernameElement) {
    parentCommentId = parseInt(
      parentCommentElement.getAttribute("data-parent-comment-id")
    );
    parentUsername = parentUsernameElement.getAttribute("data-parent-username");

    let replyContainer = document.getElementById(`replies-${parentCommentId}`);
    if (!replyContainer) {
      replyContainer = document.createElement("div");
      replyContainer.id = `replies-${parentCommentId}`;
      button.closest(".grid").appendChild(replyContainer);
    }

    if (replyContainer.innerHTML) {
      replyContainer.innerHTML = "";
    } else {
      await loadRepliesForComment(parentCommentId, replyContainer);
    }
  } else {
    console.error("Elemen yang diperlukan tidak ditemukan.");
  }
};

export const loadRepliesForComment = async (
  parentCommentId,
  replyContainer
) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/comments?comment_parent_id=${parentCommentId}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const {data} = await response.json();
    replyContainer.innerHTML = "";

    if (data && data.length > 0) {
      // Memuat balasan dengan rekursif
      for (const dt of data) {
        replyContainer.innerHTML += await createCommentMarkup(dt, null);
      }
    } else {
      replyContainer.innerHTML =
        "<p class='text-sm ml-6'>Tidak ada balasan.</p>";
    }
  } catch (error) {
    replyContainer.innerHTML = "<p class='text-sm ml-6'>Tidak ada balasan.</p>";
  }
};

// Fungsi untuk membuat markup komentar
const createCommentMarkup = async (comment, parentUsername) => {
  const {
    username,
    created_at,
    content,
    comment_parent_id,
    comment_id,
    avatar,
    user_id,
  } = comment;

  const parentId = parseInt(parentCommentId);
  const currentParentId = parseInt(comment_parent_id);

  let displayedUsername;

  if (currentParentId === parentId) {
    displayedUsername = parentUsername;
  } else {
    displayedUsername = username;
  }

  let replyMarkup = `
    <div class="grid ml-${comment_parent_id ? 12 : 0}">
      <div class="flex gap-2 items-center p-2">
        <img
          src="${avatar}"
          alt="Profil"
          class="w-[50px] h-[50px] object-cover rounded-full"
        />
        <div class="text-gray-900 text-sm">
          <p class="font-semibold flex gap-4 items-center" data-parent-username="${username}">
            ${username} 
            <span class="text-gray-500 font-normal">${timeAgo(
              created_at
            )}</span>
          </p>
          <p><span class="text-tertiary font-medium" data-parent-user-id="${user_id}" data-parent-comment-id="${comment_id}" data-parent-comment-id="${comment_parent_id}"></span> ${content}</p>
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

const loadReply = () => {
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".btn-show-reply");
    if (button) {
      toggleReplies(button);
    }
  });
};

export default loadReply;
