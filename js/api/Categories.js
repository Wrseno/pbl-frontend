import {API_BASE_URL} from "../config.js";

const categoriesContainer = document.getElementById("categories");

document.addEventListener("DOMContentLoaded", () => {
  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const {data} = await response.json();
      console.log(data);

      data.forEach((category) => {
        categoriesContainer.innerHTML = `
                <div class="flex">
                    <a href="${API_BASE_URL}/events?category=${category.id}">
                        <h3>${category.category_name}</h3>
                    </a>
                </div>
                `;
      });
    } catch (error) {
      categoriesContainer.innerHTML = "<p>Error fetching categories.</p>";
    }
  };
  fetchCategories();
});
