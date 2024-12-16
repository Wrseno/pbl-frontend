<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Detail Event</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="tailwind.config.js"></script>
    <link rel="stylesheet" href="style.css" />
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
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css"
    />
  </head>
  <body class="poppins-regular">
    <main class="container mx-auto max-w-screen-2xl">
      <div id="loading-container"></div>
      <!-- <section id="event-detail-container"></section> -->
      <!-- Breadcrumb -->
      <nav class="flex px-8 py-3 text-gray-700" aria-label="Breadcrumb">
        <ol
          class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
        >
          <li class="inline-flex items-center">
            <a
              href="index"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
            >
              <svg
                class="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                />
              </svg>
              Home
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400"
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
              <a
                href="events"
                class="ms-1 text-sm font-medium text-gray-700 hover:text-primary md:ms-2"
                >Events</a
              >
            </div>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400"
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
              <span
                id="current-page"
                class="ms-1 text-sm font-medium text-secondary md:ms-2"
              ></span>
            </div>
          </li>
        </ol>
      </nav>

      <section id="event-detail-container" class="px-8"></section>
      <section id="comments" class="p-8">
        <div id="comments-input"></div>
        <div id="comments-container" class="grid gap-3"></div>
      </section>
    </main>

    <!-- <script src="js/api/EventDetail.js" type="module"></script> -->
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
    <script src="js/api/EventDetail.js" type="module"></script>
    <script src="js/api/actions/JoinEvent.js" type="module"></script>
    <script src="js/api/Comments.js" type="module"></script>
    <script src="js/api/actions/AddCommentEvent.js" type="module"></script>
    <script src="js/api/actions/AddLikesEvent.js" type="module"></script>
    <script src="js/api/actions/AddReplyComment.js" type="module"></script>
  </body>
</html>
