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
  </head>
  <body>
    <main class="container mx-auto max-w-screen-2xl">
      <section id="event-detail-container"></section>
    </main>
    <script src="js/api/EventDetail.js" type="module"></script>
    <script>
      const joinButton = `
        <?php if (!isset($_SESSION['users_id'])): ?>
          <a href="login" class="p-2 px-8 bg-secondary text-white rounded-full font-semibold">Join</a>
        <?php else: ?>
          <button class="p-2 px-8 bg-secondary text-white rounded-full font-semibold">Join</button>
        <?php endif; ?>
      `;

      setTimeout(() => {
        document.getElementById('join-button-container').innerHTML = joinButton;
      }, 100);
    </script>
  </body>
</html>
