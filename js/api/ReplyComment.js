import {API_BASE_URL} from "../config.js";
import {timeAgo} from "../utils.js";

let parentUsername;
let nestedUsername;
let parentCommentId;

// Fungsi untuk menangani tampilan balasan
const toggleReplies = async (button) => {
  // Mengambil elemen yang mengandung data-comment-id dan data-username
  const parentCommentElement = button
    .closest(".grid")
    .querySelector("[data-parent-comment-id]");
  const parentUsernameElement = button
    .closest(".grid")
    .querySelector("[data-parent-username]");
  // Pastikan elemen-elemen tersebut ada sebelum mencoba mengakses atributnya
  if (parentCommentElement && parentUsernameElement) {
    parentCommentId = parseInt(
      parentCommentElement.getAttribute("data-parent-comment-id")
    );
    parentUsername = parentUsernameElement.getAttribute("data-parent-username");
    // nestedUsername = nestedUsernameElement.getAttribute("data-username");

    let replyContainer = document.getElementById(`replies-${parentCommentId}`);
    if (!replyContainer) {
      replyContainer = document.createElement("div");
      replyContainer.id = `replies-${parentCommentId}`;
      button.closest(".grid").appendChild(replyContainer);
    }

    if (replyContainer.innerHTML) {
      // Jika sudah ada balasan, sembunyikan dengan mengosongkan konten
      replyContainer.innerHTML = "";
    } else {
      // Jika belum ada balasan, panggil API untuk memuat balasan
      await loadRepliesForComment(parentCommentId, replyContainer);
    }
  } else {
    console.error("Elemen yang diperlukan tidak ditemukan.");
  }
};

// Fungsi untuk mengambil balasan dari API
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

  // Konversi ke tipe integer sebelum dibandingkan
  const parentId = parseInt(parentCommentId);
  const currentParentId = parseInt(comment_parent_id);

  // Tentukan username yang ditampilkan
  let displayedUsername;

  // Jika komentar ini membalas komentar utama
  if (currentParentId === parentId) {
    displayedUsername = parentUsername || username; // Jika belum ada parentUsername, gunakan username
  } else {
    // Jika komentar ini membalas komentar lain, gunakan username yang dibalas
    displayedUsername = username;
  }

  // Menampilkan markup untuk komentar
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
          <p><span class="text-tertiary font-medium" data-user-id="${user_id}" data-comment-id="${comment_id}" data-parent-comment-id="${comment_parent_id}">@${displayedUsername}</span> ${content}</p>
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

  // Memuat balasan komentar secara rekursif jika ada
  const nestedReplies = await fetchNestedReplies(comment_id);
  if (nestedReplies && nestedReplies.length > 0) {
    for (const nestedComment of nestedReplies) {
      replyMarkup += await createCommentMarkup(nestedComment, username); // Pass username as parentUsername
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

// Fungsi untuk menginisialisasi event listener klik balasan
const loadReply = () => {
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".btn-show-reply");
    if (button) {
      toggleReplies(button); // Panggil toggleReplies ketika tombol diklik
    }
  });
};

export default loadReply;
