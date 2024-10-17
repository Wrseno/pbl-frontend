<?php
session_start();
?>

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
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css"
    />
  </head>
  <body>
    <main class="container mx-auto max-w-screen-2xl">
      <section id="event-detail-container"></section>
    </main>

    <script src="js/api/EventDetail.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
    <script>
      function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
      }

      const notyf = new Notyf({
        duration: 1000,
        position: {
          x: "right",
          y: "top",
        },
      });

      const button = `
        <?php if (!isset($_SESSION['users_id'])): ?>
        <a
          href="login"
          class="p-2 px-8 bg-secondary text-white rounded-full font-semibold"
          >Join</a
        >
        <?php else: ?>
        <button
          type="button"
          id="button-join"
          class="p-2 px-8 bg-secondary text-white rounded-full font-semibold"
        >
          Join
        </button>
        <?php endif; ?>
        `;

      setTimeout(() => {
        document.getElementById("join-button-container").innerHTML = button;
        const eventId = getQueryParam("id");
        const userId = `<?php echo isset($_SESSION["users_id"]) ? json_encode($_SESSION["users_id"]) : 'null'; ?>`;
        const joinButton = document.getElementById("button-join");

        if (joinButton) {
          joinButton.addEventListener("click", async () => {
            try {
              const response = await fetch(
                "http://localhost/pbl/api-coba/registration",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    event_id: eventId,
                    users_id: userId,
                  }),
                }
              );
              const result = await response.json();
              if (response.ok) {
                notyf.success(result.message);
              } else {
                notyf.error(result.message);
              }
            } catch (error) {
              console.error("Error", error);
            }
          });
        }
      }, 1000);
    </script>
  </body>
</html>
