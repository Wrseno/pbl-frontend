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

<body class="bg-white-50">

    <!-- Header -->
    <!-- <?php include_once 'header.php'; ?> -->

    <main class="container mx-auto max-w-screen-2xl p-12">

        <!-- Upcoming Events Section -->
        <div class="container mx-auto mb-12 mt-12">
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

        <!-- All Events Section -->
        <div class="container mx-auto mt-12">
            <h2 class="text-2xl font-bold mb-4">Semua Event</h2>
            <div id="all-events-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Event Cards will be injected here -->
            </div>
            <div id="pagination-container" class="flex justify-center mt-8">
                <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                    <div class="flex flex-1 justify-between sm:hidden">
                        <a href="#"
                            class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
                        <a href="#"
                            class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
                    </div>
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                Showing
                                <span class="font-medium">1</span>
                                to
                                <span class="font-medium">10</span>
                                of
                                <span class="font-medium">97</span>
                                results
                            </p>
                        </div>
                        <div>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a href="#"
                                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <span class="sr-only">Previous</span>
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                        data-slot="icon">
                                        <path fill-rule="evenodd"
                                            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                                            clip-rule="evenodd" />
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
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        <script src="js/api/List-Events.js" type="module"></script>
        <script>
        // Initialize Swiper for Upcoming Events
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

        // Initialize Swiper for Recommended Events
        const recommendedSwiper = new Swiper(".mySwiper2", {
            slidesPerView: 5,
            spaceBetween: 16,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        </script>
    </main>
</body>

</html>