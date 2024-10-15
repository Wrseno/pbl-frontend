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
    </style>
  </head>
  <body>
    <nav
      class="bg-gray-50 navbar fixed left-0 right-0 text-slate-800 z-10 p-2 poppins-regular duration-300"
    >
      <div class="flex justify-between items-center w-[92%] mx-auto">
        <div class="flex items-center gap-1">
          <img
            class="w-12 cursor-pointer"
            src="img/Logo Polivent.png"
            alt="Logo Polivent"
          />
          <h3 class="font-bold text-lg text-gradient hidden sm:block">
            POLIVENT
          </h3>
        </div>
        <div
          class="nav-links duration-500 md:static absolute bg-gray-50 lg:bg-transparent md:min-h-fit min-h-[60vh] left-0 -top-[800px] md:w-auto w-full flex items-center px-5"
        >
          <ul
            class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
          >
            <li>
              <a class="hover:text-primary duration-300" href="#">Home</a>
            </li>
            <li>
              <a class="hover:text-primary duration-300" href="#events"
                >Events</a
              >
            </li>
            <li>
              <a class="hover:text-primary duration-300" href="#categories"
                >Categories</a
              >
            </li>
            <li>
              <a class="hover:text-primary duration-300" href="#about">About</a>
            </li>
            <li>
              <a class="hover:text-primary duration-300" href="#contact"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <?php if(!isset($_SESSION["users_id"])): ?>
              <a
                href="login"
                class="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:scale-[0.96] duration-300"
              >
                Sign In
              </a>
          <?php else: ?>
              <a
                href="dashboard"
                class="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:scale-[0.96] duration-300"
              >
                Dashboard
              </a>
          <?php endif; ?>
          <ion-icon
            name="menu"
            class="text-3xl cursor-pointer md:hidden toggle-icon"
          ></ion-icon>
        </div>
      </div>
    </nav>

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
                  class="p-2 px-6 bg-transparent border border-black rounded-full"
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
        <section id="events">
          <div class="text-center mb-12">
            <h2 class="text-3xl poppins-bold">All Events</h2>
            <p class="poppins-regular">
              Cari semua event menarik sesuai dengan minatmu.
            </p>
          </div>
          <div class="relative overflow-hidden">
            <div
              class="relative w-full flex gap-4 snap-x overflow-x-auto"
              id="events-container"
            ></div>
          </div>
          <div class="grid mx-auto justify-center items-center">
            <button
              class="poppins-medium mt-8 p-2 px-6 bg-gradient-to-r from-yellow-300 via-tertiary to-yellow-300 text-white rounded-full"
            >
              Lihat Semua
            </button>
          </div>
        </section>
        <section id="download">
          <div class="mb-12">
            <h2 class="text-3xl poppins-bold text-center">Download Aplikasi</h2>
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
                    width="16"
                    height="16"
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
                  width="16"
                  height="16"
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
        <section id="categories">
          <div class="flex gap-4">
            <a href="" class="bg-tertiary text-white p-2 px-6 rounded-full">Teknologi</a>
            <a href="" class="bg-primary text-white p-2 px-6 rounded-full">Bisnis</a>
            <a href="" class="bg-tertiary text-white p-2 px-6 rounded-full">Ekonomi</a>
            <a href="" class="bg-secondary text-white p-2 px-6 rounded-full">Musik</a>
            <a href="" class="bg-tertiary text-white p-2 px-6 rounded-full">Olahraga</a>
          </div>
        </section>
        <section id="about"></section>
        <section id="contact"></section>
      </div>
    </main>

    <script src="js/api/Events.js" type="module"></script>
    <!-- <script src="js/api/Categories.js" type="module"></script> -->
  </body>
</html>
