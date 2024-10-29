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
  <body>
    <?php include_once 'header.php' ?>

    <main class="container mx-auto max-w-screen-2xl">
      <div class="grid gap-y-60 px-2 sm:px-12">
        <section id="hero" class="relative px-2 sm:px-0">
          <div class="grid items-center min-h-screen text-center">
            <div
              class="grid gap-y-2 items-center absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
            >
              <p class="poppins-semibold text-lg sm:text-2xl">
                <span class="text-gradient">Weekend</span> free?
              </p>
              <h2 class="poppins-bold text-2xl sm:text-4xl">
                Mending
                <span class="text-gradient">ikut</span>
                semua
                <span class="text-gradient"> events </span>
                yang
                <span class="text-gradient"> diselenggarain Polivent </span>
              </h2>
              <p class="poppins-tight sm:poppins-regular">
                Kamu akan dapat berbagai ilmu dan pengalaman berharga loh. Ikuti
                berbagai event yang ada dengan klik tombol dibawah.
              </p>
              <div
                class="w-full flex flex-col sm:flex-row justify-center gap-4 my-4 px-4 sm:px-0"
              >
                <a
                  href="#events"
                  class="p-2 px-6 font-semibold bg-gradient-to-r from-blue-300 via-primary to-blue-300 text-white hover:from-primary hover:via-blue-300 hover:to-primary rounded-full"
                >
                  Jelajahi Event
                </a>
                <a
                  href="#download"
                  class="p-2 px-6 bg-transparent shadow rounded-full"
                >
                  Unduh Aplikasi
                </a>
              </div>
            </div>
            <div
              class="absolute w-[150px] h-[150px] md:w-[300px] md:h-[300px] rounded-full blur-[75px] md:blur-[100px] -top-10 -left-14 bg-gradient-to-r from-blue-300 via-primary to-blue-300"
            ></div>
            <div
              class="absolute w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full blur-[70px] md:blur-[100px] bottom-0 -right-0 md:-right-10 bg-gradient-to-r from-blue-300 via-primary to-blue-300"
            ></div>
          </div>
        </section>
        <section id="events" class="relative grid justify-center">
          <div class="text-center mb-12">
            <h4 class="text-xl poppins-bold">Coming Soon</h4>
            <h2 class="text-3xl poppins-bold text-gradient">Big Events</h2>
            <p class="poppins-regular">
              Cari semua event menarik sesuai dengan minatmu.
            </p>
          </div>
          <div class="container">
            <swiper-container
              class="mySwiper max-w-[400px] lg:max-w-full"
              pagination="true"
              pagination-clickable="true"
              space-between="30"
              effect="fade"
              navigation="true"
              autoplay="true"
              id="events-container"
            ></swiper-container>
          </div>
          <!-- <div class="relative overflow-hidden">
            <div
              class="relative w-full flex gap-4 snap-x overflow-x-auto"
              id="events-container"
            ></div>
          </div> -->
          <div class="absolute top-0 right-0">
            <a
              href="events"
              class="poppins-medium mt-8 p-2 px-6 bg-gradient-to-r from-yellow-300 via-tertiary to-yellow-300 text-white rounded-full"
            >
              View All
            </a>
          </div>
        </section>
        <section id="download">
          <div class="mb-12">
            <h2 class="text-3xl poppins-bold text-center text-gradient">
              Download Aplikasi
            </h2>
          </div>
          <div class="grid lg:grid-cols-3 relative text-center lg:text-left">
            <div
              class="-z-10 absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full blur-[100px] top-0 -right-0 md:-right-10 bg-gradient-to-r from-blue-300 via-primary to-blue-300"
            ></div>
            <div
              class="-z-10 absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full blur-[100px] bottom-0 -left-10 bg-gradient-to-r from-blue-300 via-primary to-blue-300"
            ></div>
            <div class="grid justify-between">
              <div>
                <p class="poppins-regular">
                  Lebih nyaman menggunakan Smartphone?
                </p>
                <h2 class="text-xl poppins-semibold mb-4">
                  Download Aplikasinya!
                </h2>
                <p class="poppins-tight">
                  Klik tombol dibawah untuk mengunduh aplikasi, rasakan
                  kemudahan dalam mengaksesnya!
                </p>
              </div>
              <div class="hidden sm:block">
                <a
                  href="#"
                  class="lg:w-1/2 border-gray-900 flex items-center justify-center gap-2 p-2 px-6 md:p-4 md:px-8 border poppins-medium rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-down-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                    />
                  </svg>
                  Download
                </a>
              </div>
            </div>
            <div class="drop-shadow-wh">
              <img
                src="img/mockup-hp.png"
                alt="Mockup Aplikasi"
                class="w-full drop-shadow-wh"
              />
            </div>
            <div class="grid lg:justify-end">
              <div>
                <p class="poppins-regular">Beberapa fitur dalam aplikasi</p>
                <h2 class="text-xl poppins-semibold mb-4">Fitur Utama</h2>
                <ol class="lg:list-disc poppins-tight">
                  <li>Desain yang sederhana dan mudah digunakan</li>
                  <li>Melihat semua event yang tersedia</li>
                  <li>Mendaftar dan mengikuti event</li>
                  <li>Memberikan komentar pada event</li>
                  <li>Menyukai event</li>
                </ol>
              </div>
            </div>
            <div class="block sm:hidden my-6">
              <a
                href="#"
                class="md:w-1/2 flex items-center justify-center gap-2 p-2 px-6 md:p-4 md:px-8 border poppins-medium rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-down-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                  />
                </svg>
                Download
              </a>
            </div>
          </div>
        </section>
        <section id="categories" class="relative">
          <div class="mb-12 text-center">
            <h4 class="text-xl poppins-bold">Cari berdasarkan</h4>
            <h2 class="text-3xl poppins-bold text-tertiary">
              Kategori Populer
            </h2>
          </div>
          <div class="absolute top-0 right-0">
            <a
              href="#"
              class="p-2 px-6 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold"
            >
              View All
            </a>
          </div>
          <div
            class="group p-4 relative grid gap-y-6 m-auto w-[320px] sm:w-[1000px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']"
          >
            <div
              class="animate-infinite-slider flex w-[calc(250px*10)] group-hover:paused"
            >
              <div class="slide flex gap-4 mx-auto w-full justify-center">
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-motherboard-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 7h3V4H5z" />
                      <path
                        d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1m7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Teknologi</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-mortarboard-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"
                      />
                      <path
                        d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Pendidikan</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-cash-coin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                      />
                      <path
                        d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"
                      />
                      <path
                        d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"
                      />
                      <path
                        d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"
                      />
                    </svg>
                  </div>

                  <div>
                    <p>Ekonomi</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-briefcase-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"
                      />
                      <path
                        d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Bisnis</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-boombox-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                      />
                      <path
                        d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Musik</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-7-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.37 5.11h3.972v.07L6.025 12H7.42l3.258-6.85V4.002H5.369v1.107Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Olahraga</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="animate-infinite-slider-reverse flex w-[calc(250px*10)] group-hover:paused"
            >
              <div class="slide flex gap-4 mx-auto w-full justify-center">
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-motherboard-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 7h3V4H5z" />
                      <path
                        d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2zm11 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zM3.5 10a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM4 4h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3a1 1 0 0 0-1 1m7 7.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Teknologi</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-mortarboard-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"
                      />
                      <path
                        d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Pendidikan</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-cash-coin"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                      />
                      <path
                        d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"
                      />
                      <path
                        d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"
                      />
                      <path
                        d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"
                      />
                    </svg>
                  </div>

                  <div>
                    <p>Ekonomi</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-briefcase-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"
                      />
                      <path
                        d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Bisnis</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-boombox-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M2 3.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m7.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m1.5-.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 3h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                      />
                      <path
                        d="M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Musik</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
                <a
                  href=""
                  class="flex gap-4 items-center shadow p-2 px-6 rounded-xl"
                >
                  <div
                    class="bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-7-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.37 5.11h3.972v.07L6.025 12H7.42l3.258-6.85V4.002H5.369v1.107Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Olahraga</p>
                    <p class="text-sm">events</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div class="mb-12 text-center">
            <h2 class="text-3xl poppins-bold text-tertiary">Tentang Kami</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              aspernatur laboriosam, illum, quidem architecto obcaecati quia
              fugit nulla minima cumque eligendi molestiae? Accusamus aliquid
              reiciendis dignissimos nobis, ut vel, modi nam, aut harum vero
              odio voluptates quos suscipit ducimus. Iusto corrupti ex, modi
              molestias hic necessitatibus error facere excepturi dignissimos?
            </p>
          </div>
        </section>
      </div>
    </main>

    <?php include_once 'footer.php' ?>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <script src="js/api/Events.js" type="module"></script>
    <!-- <script src="js/api/Categories.js" type="module"></script> -->
    <script src="js/app.js" type="module"></script>
  </body>
</html>
