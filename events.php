<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Polytechnic Event</title>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="./style.css" />
    <script src="./tailwind.config.js"></script>
    <link
      href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css"
      rel="stylesheet"
    />
    <style type="text/tailwindcss">
      .text-gradient {
        @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-primary to-blue-300;
      }

      @layer utilities {
        .paused {
          animation-play-state: paused;
        }
      }

      div {
        scroll-margin-top: 200px;
      }
    </style>
  </head>

  <body class="bg-white-50">
    <?php include_once './components/header.php'; ?>

    <main class="container mx-auto max-w-screen-2xl p-12 grid gap-y-14 h-full">
      <div class="overflow-x-auto sticky top-14 z-10 bg-white p-2 mt-6">
        <div
          class="flex gap-2 w-full overflow-x-auto snap-x snap-mandatory"
          id="category-container"
        ></div>
        <div class="flex justify-between items-center w-full">
          <!-- <div class="flex gap-2 items-center">
            <button class="flex bg-gray-100 my-2 px-2 rounded-lg items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-funnel-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"
                />
              </svg>
              <p class="p-2">Filter</p>
            </button>
          </div> -->
        </div>
      </div>

      <!-- Upcoming Events Section -->
      <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-4">Event Akan Datang</h2>

        <!-- mobile -->
        <div class="relative block md:hidden">
          <swiper-container
            class="mySwiper max-w-[300px] lg:max-w-full"
            pagination="true"
            slides-per-view="1"
            space-between="30"
            autoplay="true"
            id="upcoming-events-mobile-container"
          >
            <!-- Event Cards will be injected here -->
          </swiper-container>
          <!-- Arrows -->
          <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
        </div>

        <!-- Swiper for Upcoming Events -->
        <div class="relative hidden md:block">
          <swiper-container
            class="mySwiper max-w-[400px] lg:max-w-full"
            pagination="true"
            slides-per-view="3"
            space-between="30"
            autoplay="true"
            id="upcoming-events-container"
          >
            <!-- Event Cards will be injected here -->
          </swiper-container>
          <!-- Arrows -->
          <!-- <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div> -->
        </div>
      </div>

      <!-- Recommended Events Section -->
      <div class="container mx-auto my-16 hidden md:block">
        <h2 class="text-2xl font-bold mb-4">Event Paling Banyak Disukai</h2>

        <!-- Swiper for Recommended Events -->
        <div class="relative">
          <div class="swiper mySwiper2">
            <div class="swiper mySwiper">
              <swiper-container
                class="mySwiper max-w-[400px] lg:max-w-full"
                pagination="true"
                slides-per-view="5"
                space-between="30"
                autoplay="true"
                id="recommended-events-container"
              >
                <!-- Event Cards will be injected here -->
              </swiper-container>
              <!-- Arrows -->
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- All Events Section -->
      <div class="container mx-auto" id="all-events">
        <h2 class="text-2xl font-bold mb-4">Semua Event</h2>
        <div class="md:hidden">
          <swiper-container
            class="mySwiper max-w-[300px] lg:max-w-full"
            pagination="true"
            slides-per-view="1"
            space-between="30"
            autoplay="true"
            id="all-events-mobile-container"
          >
            <!-- Event Cards will be injected here -->
          </swiper-container>
        </div>

        <div class="hidden md:block">
          <swiper-container
            class="mySwiper max-w-[400px] lg:max-w-full"
            pagination="true"
            slides-per-view="4"
            space-between="30"
            autoplay="true"
            id="all-events-container"
          >
            <!-- Event Cards will be injected here -->
          </swiper-container>
        </div>
        <!-- <div id="all-events-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            </div> -->
        <div id="pagination-container" class="flex justify-center mt-8">
          <div
            class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          >
            <div class="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >Previous</a
              >
              <a
                href="#"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >Next</a
              >
            </div>
            <div
              class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"
            >
              <div>
                <nav
                  class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <!-- Halaman akan diisi oleh JavaScript -->
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Swiper.js Library -->
    </main>

    <?php include_once './components/footer.php'; ?>

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
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
    <script src="./js/api/ListAllEvents.js" type="module"></script>
    <script src="./js/api/GetUserLogin.js" type="module"></script>
    <script src="js/api/actions/UpdateProfileUser.js" type="module"></script>
    <script src="./js/api/actions/Logout.js" type="module"></script>
  </body>
</html>
