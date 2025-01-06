import {API_BASE_URL} from "../config.js";

const categoriesSliderRight = document.getElementById(
  "categories-slider-right"
);
const categoriesSliderLeft = document.getElementById("categories-slider-left");

document.addEventListener("DOMContentLoaded", () => {
  const fetchCategoriesHome = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      const {data} = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      data.forEach((category) => {
        categoriesSliderRight.innerHTML += `
        <div class="slide flex gap-4 mx-auto w-full justify-center">
          <a href="#" class="flex gap-4 items-center shadow p-2 px-6 rounded-xl">
            <div
              class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-motherboard-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 7h3V4H5z" />
                <path
                  d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1m7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5"
                />
              </svg>
            </div>
            <div>
              <p>${category.category_name}</p>
              <p class="text-sm">events</p>
            </div>
          </a>
        </div>
        `;
        categoriesSliderLeft.innerHTML += `
        <div class="slide flex gap-4 mx-auto w-full justify-center">
          <a href="#" class="flex gap-4 items-center shadow p-2 px-6 rounded-xl">
            <div
              class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-motherboard-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5 7h3V4H5z" />
                <path
                  d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1m7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5"
                />
              </svg>
            </div>
            <div>
              <p>${category.category_name}</p>
              <p class="text-sm">events</p>
            </div>
          </a>
        </div>
        `;
      });
    } catch (error) {
      categoriesSliderLeft.innerHTML = "<p>Error fetching categories.</p>";
    }
  };

  fetchCategoriesHome();
});
