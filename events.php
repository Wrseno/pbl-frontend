<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Polytechnic Event</title>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
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

<body class="bg-gray-50 p-8">

    <!-- Upcoming Events Section -->
    <div class="container mx-auto mb-12">
        <h2 class="text-2xl font-bold mb-4">Event Terbaru</h2>

        <!-- Swiper for Upcoming Events -->
        <div class="relative">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper" id="upcoming-events-container">
                    <!-- Event Cards will be injected here -->
                </div>
                <!-- Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>

    <!-- Recommended Events Section -->
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-4">Rekomendasi Event</h2>

        <!-- Swiper for Recommended Events -->
        <div class="relative">
            <div class="swiper mySwiper2">
                <div class="swiper-wrapper" id="recommended-events-container">
                    <!-- Event Cards will be injected here -->
                </div>
                <!-- Arrows -->
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>

    <!-- Swiper.js Library -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="js/api/List-Events.js" type="module"></script>
    <script>
    // Initialize Swiper
    const upcomingSwiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 16,
        loop: true,
        autoplay: {
            delay: 3000
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const recommendedSwiper = new Swiper(".mySwiper2", {
        slidesPerView: 5,
        spaceBetween: 16,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    </script>
</body>

</html>