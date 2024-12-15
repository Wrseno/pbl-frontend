import {API_BASE_URL} from "../config.js";
import {formattedDate, getProfileUser} from "../utils.js";

const tableBody = document.getElementById("table-body");
const inputSearch = document.getElementById("input-search"); // Pastikan id ini ada di HTML
const paginationContainer = document.getElementById("pagination-container"); // Pastikan id pagination-container ada di HTML

let currentPage = 1;
let eventsData = [];
const EVENTS_PER_PAGE = 5; // Tentukan jumlah event per halaman

document.addEventListener("DOMContentLoaded", () => {
  // Fungsi untuk mengambil events
  const fetchEvents = async (search = "") => {
    const {userId} = await getProfileUser();
    let url = `${API_BASE_URL}/registration?upcoming=true&user_id=${userId}&not_present=true`; // Ambil semua data

    if (search) {
      url = `${API_BASE_URL}/registration?search=${search}&upcoming=true&user_id=${userId}`;
    }

    try {
      const response = await fetch(url);
      const {data} = await response.json();

      if (!data || data.length === 0) {
        tableBody.innerHTML = `<p class="font-semibold p-8 text-center">Tidak ada event yang diikuti.</p>`;
        paginationContainer.innerHTML = "";
        return;
      }

      // Simpan semua event ke dalam eventsData
      eventsData = data;

      // Render data per halaman
      renderPage(currentPage);
    } catch (error) {
      console.error("Error fetching events:", error);
      tableBody.innerHTML = "<p>Error fetching events.</p>";
    }
  };

  // Fungsi untuk merender halaman tertentu
  const renderPage = (page) => {
    const start = (page - 1) * EVENTS_PER_PAGE;
    const end = start + EVENTS_PER_PAGE;

    // Ambil data untuk halaman tertentu
    const pageData = eventsData.slice(start, end);

    tableBody.innerHTML = "";

    pageData.forEach((event) => {
      tableBody.innerHTML += `
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input id="checkbox-table-search-1" type="checkbox" 
                     class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            ${event.title}
          </th>
          <td class="px-6 py-4">
            ${event.category_name}
          </td> 
          <td class="px-6 py-4">
            ${event.place}
          </td>
          <td class="px-6 py-4">
            ${event.location}
          </td>
          <td class="px-6 py-4">
            ${formattedDate(event.date_start)}
          </td>
          <td class="px-6 py-4">
            ${formattedDate(event.date_end)}
          </td>
          <td class="px-6 py-4">
            <a href="event-detail?id=${
              event.event_id
            }" class="font-medium text-blue-600 hover:underline">Detail</a>
          </td>
        </tr>`;
    });

    // Render pagination
    renderPagination();
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(eventsData.length / EVENTS_PER_PAGE);
    paginationContainer.innerHTML = ""; // Bersihkan kontainer pagination

    const paginationList = document.createElement("ul");
    paginationList.classList.add(
      "flex",
      "items-center",
      "-space-x-px",
      "h-8",
      "text-sm"
    );

    // Tombol "Previous"
    const prevButton = document.createElement("li");
    const prevLink = document.createElement("a");
    prevLink.href = "#";
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
    prevLink.innerHTML = `<span class="sr-only">Previous</span>
      <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
      </svg>`;
    prevButton.appendChild(prevLink);
    prevButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
      }
    });
    paginationList.appendChild(prevButton);

    // Tombol halaman
    for (let i = 1; i <= totalPages; i++) {
      const pageItem = document.createElement("li");
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.textContent = i;
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

      // Menandai halaman aktif
      if (i === currentPage) {
        pageLink.classList.add(
          "z-10",
          "text-blue-600",
          "bg-blue-50",
          "border",
          "border-blue-300",
          "hover:bg-blue-100",
          "hover:text-blue-700"
        );
      }

      pageLink.addEventListener("click", (e) => {
        e.preventDefault();
        currentPage = i;
        renderPage(currentPage);
      });

      pageItem.appendChild(pageLink);
      paginationList.appendChild(pageItem);
    }

    // Tombol "Next"
    const nextButton = document.createElement("li");
    const nextLink = document.createElement("a");
    nextLink.href = "#";
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
    nextLink.innerHTML = `<span class="sr-only">Next</span>
      <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
      </svg>`;
    nextButton.appendChild(nextLink);
    nextButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
      }
    });
    paginationList.appendChild(nextButton);

    paginationContainer.appendChild(paginationList); // Menambahkan daftar pagination ke kontainer
  };

  // Memanggil renderPagination setiap kali data berubah
  fetchEvents();

  // Event listener untuk search
  inputSearch.addEventListener("input", async (e) => {
    const search = e.target.value.trim().toLowerCase();

    fetchEvents(search);
  });
});
