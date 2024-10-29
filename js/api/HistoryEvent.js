import {API_BASE_URL} from "../config.js";
import {LocationSvgIcon, CalendarSvgIcon} from "../components/svg.js";
import {formattedDate, getSession} from "../utils.js";

const tableBody = document.getElementById("table-body");

document.addEventListener("DOMContentLoaded", () => {
  const fetchEvents = async () => {
    const session = await getSession();
    const userId = session.data.users_id;

    try {
      const response = await fetch(
        `${API_BASE_URL}/registration?user_id=${userId}`
      );
      const {data} = await response.json();

      if (!data) {
        tableBody.innerHTML = "<p>Tidak ada event yang diikuti.</p>";
        return;
      }

      const sliceEvents = data.slice(0, 5);

      sliceEvents.forEach((event) => {
        tableBody.innerHTML += `
        <tr class="bg-white border-b hover:bg-gray-50">
        <td class="w-4 p-4">
            <div class="flex items-center">
                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
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
            <img src=${event.poster} alt=${
          event.title
        } class="w-[50px] h-[50px]"/>
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
    </tr>
        `;
      });
    } catch (error) {
      console.error("Failed to fetch events:", error);
      historyEventsContainer.innerHTML = "<p>Error fetching events.</p>";
    }
  };

  fetchEvents();
});
