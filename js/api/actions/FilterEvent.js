import {API_BASE_URL} from "../../config.js";
import {formattedDate} from "../../utils.js";

const tableBody = document.getElementById("table-body");
const filterRadios = document.querySelectorAll('input[name="filter-radio"]');
const btnFilter = document.getElementById("btn-filter"); // Assuming you have a search button

btnFilter.addEventListener("click", async () => {
  const selectedFilter = getSelectedFilter();

  if (!selectedFilter) {
    alert("Please select a filter.");
    return;
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/events?filter=${selectedFilter}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch events.");
    }

    const {data} = await response.json();
    console.log(data);
    if (data) {
      renderEvents(data); // Display first 5 events
    } else {
      tableBody.innerHTML = `<td class="py-4>No events found</td>`;
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
});

// Helper function to get the selected filter value
function getSelectedFilter() {
  let filterValue;
  filterRadios.forEach((radio) => {
    if (radio.checked) {
      filterValue = radio.value;
    }
  });
  console.log(filterValue);
  return filterValue;
}

// Render the events in the table
function renderEvents(data) {
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = ""; // Clear previous results

  if (data) {
    data.forEach((event) => {
      tableBody.innerHTML += `
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
              <label class="sr-only">checkbox</label>
            </div>
          </td>
          <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            ${event.title || "N/A"}
          </th>
          <td class="px-6 py-4">${event.category_name || "N/A"}</td>
          <td class="px-6 py-4">
            <img src="${event.poster || "#"}" alt="${
        event.title || "No Image"
      }" class="w-[50px] h-[50px]"/>
          </td>
          <td class="px-6 py-4">${event.location || "N/A"}</td>
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
    tableBody.innerHTML += `<td class="py-4 text-center">No events found</td>`;
  }
}
