<?php
session_start();
if (!isset($_SESSION['users_id'])) {
    header('Location: login');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard</title>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css"
    />
    <script src="tailwind.config.js"></script>
    <style type="text/tailwindcss">
      .text-gradient {
        @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-primary to-blue-300;
      }

      @layer utilities {
        .paused {
          animation-play-state: paused;
        }
      }
    </style>
  </head>
  <body class="poppins-regular">
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="index" class="flex ms-2 md:me-24">
              <img src="img/logo.png" class="h-8 me-3" alt="Polivent Logo" />
              <span
                class="self-center text-xl font-bold sm:text-2xl whitespace-nowrap text-gradient"
                >POLIVENT</span
              >
            </a>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                id="dropdown-user"
              >
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-gray-500" role="none">
                    <?php echo $_SESSION["username"] ?>
                  </p>
                  <p
                    class="text-sm font-medium text-gray-500 truncate"
                    role="none"
                  >
                    <?php echo $_SESSION["email"] ?>
                  </p>
                </div>
                <!-- <ul class="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                      >Sign out</a
                    >
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="dashboard"
              class="flex items-center p-2 text-gray-500 rounded-lg"
            >
              <svg
                class="w-5 h-5 text-gray-500 transition duration-75"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                />
                <path
                  d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                />
              </svg>
              <span class="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="history"
              class="flex items-center p-2 text-gray-500 rounded-lg bg-gray-100 group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="ms-3">History</span>
            </a>
          </li>
          <li>
            <button
              id="logoutButton"
              class="w-full flex items-center p-2 text-gray-500 rounded-lg group"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="ms-3 whitespace-nowrap">Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg mt-14">
        <h2 class="text-2xl font-bold text-tertiary">Riwayat Event</h2>
        <p>Event yang pernah diikuti</p>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div
            class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4"
          >
            <div>
              <button
                id="dropdownRadioButton"
                data-dropdown-toggle="dropdownRadio"
                class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
                type="button"
              >
                <svg
                  class="w-3 h-3 text-gray-500 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"
                  />
                </svg>
                Filter by days
                <svg
                  class="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownRadio"
                class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
                data-popper-reference-hidden=""
                data-popper-escaped=""
                data-popper-placement="top"
                style="
                  position: absolute;
                  inset: auto auto 0px 0px;
                  margin: 0px;
                  transform: translate3d(522.5px, 3847.5px, 0px);
                "
              >
                <ul
                  class="p-3 space-y-1 text-sm text-gray-700"
                  aria-labelledby="dropdownRadioButton"
                >
                  <li>
                    <div
                      class="flex items-center p-2 rounded hover:bg-gray-100"
                    >
                      <input
                        id="filter-radio-example-1"
                        type="radio"
                        value="latest"
                        name="filter-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        for="filter-radio-example-1"
                        class="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >Latest</label
                      >
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex items-center p-2 rounded hover:bg-gray-100"
                    >
                      <input
                        checked=""
                        id="filter-radio-example-2"
                        type="radio"
                        value="last7days"
                        name="filter-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        for="filter-radio-example-2"
                        class="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >Last 7 days</label
                      >
                    </div>
                  </li>
                  <li>
                    <div
                      class="flex items-center p-2 rounded hover:bg-gray-100"
                    >
                      <input
                        id="filter-radio-example-3"
                        type="radio"
                        value="last30days"
                        name="filter-radio"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                      />
                      <label
                        for="filter-radio-example-3"
                        class="w-full ms-2 text-sm font-medium text-gray-900 rounded"
                        >Last 30 days</label
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <button type="submit" id="btn-filter" class="bg-gradient-to-r from-primary to-secondary p-2 rounded-r-lg text-white">Filter</button>
            </div>
            <label for="table-search" class="sr-only">Search</label>
            <form class="relative flex justify-between">
              <input
                type="text"
                id="table-search"
                class="block p-2 text-sm text-gray-900 border border-gray-300 rounded-l-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search for items"
              />
              <button type="submit" id="btn-search" class="bg-gradient-to-r from-primary to-secondary p-2 rounded-r-lg text-white">Cari</button>
            </form>
          </div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label for="checkbox-all-search" class="sr-only"
                      >checkbox</label
                    >
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">Event Name</th>
                <th scope="col" class="px-6 py-3">Category</th>
                <th scope="col" class="px-6 py-3">Poster</th>
                <th scope="col" class="px-6 py-3">Location</th>
                <th scope="col" class="px-6 py-3">Date Start</th>
                <th scope="col" class="px-6 py-3">Date End</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody id="table-body"></tbody>
          </table>
        </div>
      </div>
      <nav aria-label="Page navigation example" class="grid justify-center">
        <ul class="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >4</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              >5</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
    <script>
      const notyf = new Notyf({
        duration: 1000,
        position: {
          x: "right",
          y: "top",
        },
      });
    </script>
    <script src="js/api/HistoryEvent.js" type="module"></script>
    <script src="js/api/actions/SearchEvent.js" type="module"></script>
    <script src="js/api/actions/FilterEvent.js" type="module"></script>
    <script src="js/api/actions/Logout.js" type="module"></script>
  </body>
</html>
