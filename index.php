<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Polytechnic Event</title>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="style.css" />
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
  <body class="overflow-x-hidden">
    <?php include_once './components/header.php' ?>

    <main class="container mx-auto max-w-screen-2xl">
      <div class="grid gap-y-60 px-2 sm:px-12">
        <?php include_once './components/section-hero.php'?>
        <?php include_once './components/section-events.php'?>
        <?php include_once './components/section-download.php'?>
        <?php include_once './components/section-category.php'?>
        <?php include_once './components/section-about.php'?>
      </div>
    </main>

    <?php include_once './components/footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
    <script src="js/api/Events.js" type="module"></script>
    <script src="js/api/actions/Logout.js" type="module"></script>
    <!-- <script src="js/api/Categories.js" type="module"></script> -->
    <script src="js/app.js" type="module"></script>
  </body>
</html>
