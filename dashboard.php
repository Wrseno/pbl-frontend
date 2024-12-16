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

      .text-gradient-yellow {
        @apply bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-tertiary to-yellow-300;
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
        <h1 class="text-2xl font-bold mb-4">
          Halo
          <span
            id="username-dashboard"
            class="text-gradient-yellow text-2xl"
          ></span
          >, Selamat datang di Polivent
        </h1>
        <input
          type="text"
          class="w-full border border-gray-300 rounded-lg mb-8"
          placeholder="Cari event..."
        />
        <div class="grid md:grid-cols-2 gap-4 mb-4">
          <div
            class="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg"
          >
            <div class="flex justify-between">
              <div>
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-ticket-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3z"
                    />
                  </svg>
                  <h3
                    class="text-lg font-semibold"
                    id="total-joined-event"
                  ></h3>
                </div>
                <p>Event yang akan diikuti</p>
              </div>
              <div>
                <a
                  href="events-to-attend"
                  class="text-lg my-4 bg-sky-100 text-sky-500 p-2 px-4 rounded-lg"
                  >Detail</a
                >
              </div>
            </div>
          </div>
          <div
            class="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg"
          >
            <div class="flex justify-between">
              <div>
                <div class="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-ticket-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3z"
                    />
                  </svg>
                  <h3
                    class="text-lg font-semibold"
                    id="total-event-has-present"
                  ></h3>
                </div>
                <p>Event yang telah diikuti</p>
              </div>
              <div>
                <a
                  href="history-events"
                  class="text-lg my-4 bg-sky-100 text-sky-500 p-2 px-4 rounded-lg"
                  >Detail</a
                >
              </div>
            </div>
          </div>
          <div
            class="bg-gradient-to-r from-tertiary to-yellow-300 text-white p-8 rounded-lg"
          >
            <p>Event yang akan diikuti</p>
            <h3 class="text-lg font-semibold" id="currently-joined-event"></h3>
          </div>
          <div
            class="bg-gradient-to-r from-yellow-300 to-tertiary text-white p-8 rounded-lg"
          >
            <p>Event yang telah diikuti</p>
            <h3 class="text-lg font-semibold" id="has-present-event"></h3>
          </div>
        </div>
      </div>
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
    <script src="js/api/Dashboard.js" type="module"></script>
    <script src="js/api/getUserLogin.js" type="module"></script>
    <script src="js/api/actions/UpdateProfileUser.js" type="module"></script>
    <script src="js/api/actions/Logout.js" type="module"></script>
  </body>
</html>
