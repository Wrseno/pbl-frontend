import {API_BASE_URL} from "../../config.js";
import {formattedDate} from "../../utils.js";

const inputSearch = document.getElementById("table-search");
const btnSearch = document.getElementById("btn-search");
const tableBody = document.getElementById("table-body"); // Make sure you select the correct table body element.

btnSearch.addEventListener("click", async (e) => {
  e.preventDefault();
  // Get the latest search value here
  const search = inputSearch.value.trim().toLowerCase();

  if (!search) {
    notyf.error("Masukkan judul events");
    return;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/events?keyword=${search}`);
    if (!response.ok) {
      throw new Error(`Could not fetch events`);
    }
    const {data} = await response.json();
    let sliceEvents;
    if (data) sliceEvents = data.slice(0, 5);

    tableBody.innerHTML = "";

    if (data && sliceEvents) {
      sliceEvents.forEach((event) => {
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
              <img src="${event.poster}" alt="${
          event.title
        }" class="w-[50px] h-[50px]"/>
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
    } else {
      tableBody.innerHTML = `<tr><td colspan="6" class="text-center py-4">Tidak ada event yang ditemukan.</td></tr>`;
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
});
