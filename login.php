<?php
session_start();
if (isset($_SESSION["users_id"])) {
  header("Location: index");
}
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Polivent</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="tailwind.config.js"></script>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css"
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
    </style>
  </head>
  <body>
    <main class="relative grid items-center my-auto min-h-screen">
      <div
        class="absolute w-[150px] h-[150px] rounded-full blur-[100px] top-0 -right-0 md:-right-0 bg-gradient-to-r from-blue-300 via-primary to-blue-300"
      ></div>
      <div
        class="-z-10 absolute w-[200px] h-[200px] rounded-full blur-[100px] bottom-0 -left-0 md:-left-0 bg-gradient-to-r from-blue-300 via-primary to-blue-300"
      ></div>
      <!-- 
      <form id="loginForm" method="post">
        <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
          <div class="relative py-3">
            <div
              class="shadow-lg absolute inset-0 bg-gradient-to-r from-primary to-secondary transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
            ></div>
            <div
              class="relative px-4 py-10 bg-gray-100 shadow-lg sm:rounded-3xl sm:p-20"
            >
              <div class="max-w-md mx-auto">
                <div>
                  <h1 class="text-2xl font-semibold">Login</h1>
                  <p class="">Masuk menggunakan akun Anda yang valid.</p>
                </div>
                <div class="divide-y divide-gray-200">
                  <div
                    class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                  >
                    <div class="relative">
                      <input
                        autocomplete="off"
                        id="email"
                        name="email"
                        type="text"
                        class="bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <label
                        for="email"
                        class="absolute left-0 -top-3.5 text-gray-900 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-900 peer-focus:text-sm"
                        >Email Address</label
                      >
                    </div>
                    <div class="relative">
                      <input
                        autocomplete="off"
                        id="password"
                        name="password"
                        type="password"
                        class="bg-transparent tw peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                      <label
                        for="password"
                        class="absolute left-0 -top-3.5 text-gray-900 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-900 peer-focus:text-sm"
                        >Password</label
                      >
                    </div>
                    <div class="relative flex justify-between">
                      <button class="bg-secondary rounded-md px-4 py-1">
                        Submit
                      </button>
                       <a href="#" class="text-gray-300 hover:text-gray-400"
                        >Lupa password?</a
                      > 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
       -->
      <div class="px-4 md:px-12 mx-auto w-full">
        <div class="grid md:grid-cols-2 md:gap-8 w-full">
          <div id="login-image" class="grid items-center justify-center text-center">
            <img
              src="img/Logo Polines 1.png"
              alt="Logo Polivent"
              class="w-[400px]"
            />
            <h2 class="text-6xl text-gradient font-bold">POLIVENT</h2>
          </div>
          <div
            class="items-center my-auto p-8 rounded-md w-full"
            id="login-form"
          >
            <h1 class="font-bold text-3xl">Masuk</h1>
            <p>Masuk menggunakan data Anda yang valid.</p>
            <form id="loginForm" method="post">
              <div class="my-4">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-800"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  required=""
                  placeholder="Masukkan Email"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-co-dark-blue focus:border-co-dark-blue"
                />
              </div>
              <div class="my-4">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required=""
                  placeholder="Masukkan password"
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-co-dark-blue focus:border-co-dark-blue"
                />
              </div>

              <button
                class="w-full mt-4 mb-12 p-2 px-6 bg-gradient-to-r from-primary to-secondary text-white rounded-md"
              >
                Login
              </button>
              <div
                class="flex flex-col sm:flex-row gap-3 justify-between items-center"
              >
                <div class="text-sm text-gray-800 underline">
                  <a href="/register">Belum punya akun?</a>
                </div>
                <div class="text-sm text-gray-800 underline">
                  <a href="/forgot-password">Lupa password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

    <script src="js/api/actions/Login.js" type="module"></script>
    <script src="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.js"></script>
  </body>
</html>
