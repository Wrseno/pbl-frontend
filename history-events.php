<script>
  !localStorage.getItem("token") && window.location.replace("login");
</script>

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
    <?php include_once './components/header.php' ?>

    <div class="p-4">
      <div class="p-4 rounded-lg mt-14">
        <h2 class="text-2xl font-bold text-tertiary">Event yang telah diikuti</h2>
        <p class="mb-4">Daftar event yang pernah diikuti</p>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div
            class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4"
          >
          <div
              id="date-range-picker"
              date-rangepicker
              class="flex items-center"
            >
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  id="datepicker-range-start"
                  name="start"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Select date start"
                />
              </div>
              <span class="mx-4 text-gray-500">to</span>
              <div class="relative">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                    />
                  </svg>
                </div>
                <input
                  id="datepicker-range-end"
                  name="end"
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Select date end"
                />
              </div>
            </div>
            
            <label for="search-input" class="sr-only">Search</label>
            <form class="relative flex justify-between">
              <input
                type="text"
                id="search-input"
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
                <th scope="col" class="px-6 py-3">Nama Event</th>
                <th scope="col" class="px-6 py-3">Kategori</th>
                <th scope="col" class="px-6 py-3">Tempat</th>
                <th scope="col" class="px-6 py-3">Lokasi</th>
                <th scope="col" class="px-6 py-3">Tanggal Mulai</th>
                <th scope="col" class="px-6 py-3">Tanggal Berakhir</th>
                <th scope="col" class="px-6 py-3">Detail Event</th>
              </tr>
            </thead>
            <tbody id="table-body"></tbody>
          </table>
        </div>
      </div>
      <div id="pagination-container" class="w-full grid mx-auto justify-center"></div>
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
    <script src="js/api/getUserLogin.js" type="module"></script>
    <script src="js/api/actions/UpdateProfileUser.js" type="module"></script>
    <script src="js/api/actions/Logout.js" type="module"></script>
  </body>
</html>
