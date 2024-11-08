<nav
      class="bg-gray-50 navbar fixed left-0 right-0 text-slate-800 z-20 p-2 poppins-regular duration-300"
    >
      <div class="flex justify-between items-center w-[92%] mx-auto">
        <a href='./' class="flex items-center gap-1">
          <img
            class="w-12 cursor-pointer"
            src="img/Logo Polivent.png"
            alt="Logo Polivent"
          />
          <h3 class="font-bold text-lg text-gradient hidden sm:block">
            POLIVENT
          </h3>
        </a>
        <div
          class="nav-links duration-500 md:static absolute bg-gray-50 lg:bg-transparent md:min-h-fit min-h-[60vh] left-0 -top-[800px] md:w-auto w-full flex items-center px-5"
        >
          <ul
            class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8"
          >
            <li>
              <a class="hover:text-primary duration-300" href="./">Beranda</a>
            </li>
            <li>
              <a class="hover:text-primary duration-300" href="./#events"
                >Event</a
              >
            </li>
            <li>
              <a class="hover:text-primary duration-300" href="./#download"
                >Download</a
              >
            </li>
            <li>
              <a class="hover:text-primary duration-300" href="./#categories"
                >Kategori</a
              >
            </li>
            <li>
              <a class="hover:text-primary duration-300" href="./#about">Tentang</a>
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
            <div class="flex items-center">
            <div class="flex items-center ms-3">
              <div>
                <button
                  type="button"
                  class="flex items-center text-sm bg-gradient-to-r from-primary to-secondary rounded-full focus:ring-4 focus:ring-gray-300 py-1 px-2"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                  <p class="text-white"><?php echo $_SESSION["username"] ?></p>
                </button>
              </div>
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
                id="dropdown-user"
              >
                <div class="w-[200px]" role="none">
                  <a href="./dashboard" class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md">Dashboard</a>
                  <a href="./history-events" class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md">Riwayat Event</a>
                  <a href="./events-to-attend" class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md">Event Untuk Dihadiri</a>
                  <a href="#" id="logoutButton" class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md">Keluar</a>
                </div>
                <!-- <ul class="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                      role="menuitem"
                      >Sign out</a
                    >
                  </li>
                </ul> -->
              </div>
            </div>
          </div>
          <?php endif; ?>
          <ion-icon
            name="menu"
            class="text-3xl cursor-pointer md:hidden toggle-icon"
          ></ion-icon>
        </div>
      </div>
    </nav>

    