<script type="module">
  const token = localStorage.getItem("token");

  if (token) {
    document.cookie = `access_token=${token}; path=/; max-age=3600`; // Set cookie untuk 1 jam
  }
</script>

<nav
  class="bg-gray-50 navbar fixed left-0 right-0 text-slate-800 z-20 p-2 poppins-regular duration-300"
>
  <div class="flex justify-between items-center w-[92%] mx-auto">
    <a href="./" class="flex items-center gap-1">
      <img
        class="w-12 cursor-pointer"
        src="img/Logo Polivent.png"
        alt="Logo Polivent"
      />
      <h3 class="font-bold text-lg text-gradient hidden sm:block">POLIVENT</h3>
    </a>
    <div
      class="nav-links duration-500 md:static absolute bg-gray-50 lg:bg-transparent md:min-h-fit min-h-[60vh] left-0 -top-[800px] md:w-auto w-full flex items-center px-5"
    >
      <ul class="flex md:flex-row flex-col md:items-center gap-12">
        <li>
          <a class="hover:text-primary duration-300" href="./">Beranda</a>
        </li>
        <li>
          <a class="hover:text-primary duration-300" href="./#events"
            >Event Terbaru</a
          >
        </li>
        <li>
          <a class="hover:text-primary duration-300" href="./events"
            >Semua Event</a
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
      <?php if (!isset($_COOKIE["access_token"])) { ?>
      <a
        href="login"
        id="login-button"
        class="bg-gradient-to-r from-primary to-secondary text-white px-5 py-2 rounded-full hover:scale-[0.96] duration-300"
      >
        Sign In
      </a>
      <?php } else { ?>
      <div class="flex items-center">
        <div class="flex items-center ms-3">
          <div>
            <button
              type="button"
              id="dropdown-user-button"
              class="flex items-center text-sm bg-gradient-to-r from-primary to-secondary rounded-full focus:ring-4 focus:ring-gray-300 py-1 px-2"
              aria-expanded="false"
              data-dropdown-toggle="dropdown-user"
            >
              <span class="sr-only">Open user menu</span>
              <div class="flex items-center w-[150px] h-[35px] mx-auto">
                <div id="user-avatar"></div>
                <p class="text-white px-2" id="username"></p>
              </div>
            </button>
          </div>
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow"
            id="dropdown-user"
          >
            <div class="w-[200px]" role="none">
              <a
                href="./dashboard"
                class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md"
                >Dashboard</a
              >
              <a
                href="./events-to-attend"
                class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md"
                >Event untuk dihadiri</a
              >
              <a
                href="./history-events"
                class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md"
                >Event telah diikuti</a
              >
              <a
                href="./history-events"
                class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md"
                >Event favorit</a
              >
              <!-- Modal toggle -->
              <button
                data-modal-target="authentication-modal"
                data-modal-toggle="authentication-modal"
                class="block w-full hover:bg-gray-100 text-sm text-left p-2"
                type="button"
              >
                Manage Profile
              </button>
              <a
                href="#"
                id="logoutButton"
                class="p-2 text-sm hover:bg-gray-100 w-full block rounded-md"
                >Keluar</a
              >
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
      <?php } ?>
      <ion-icon
        name="menu"
        class="text-3xl cursor-pointer md:hidden toggle-icon"
      ></ion-icon>
    </div>
  </div>
</nav>

<!-- Main modal -->
<div
  id="authentication-modal"
  tabindex="-1"
  aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
>
  <div class="relative p-4 w-full max-w-md max-h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow">
      <!-- Modal header -->
      <div
        class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
      >
        <h3 class="text-xl font-semibold text-gray-900">Manage profile kamu</h3>
        <button
          type="button"
          class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="authentication-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4 md:p-5">
        <!-- <form class="space-y-4" action="#" id="form-profile"> -->
          <div>
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Username</label
            >
            <input
              type="text"
              name="username"
              id="username-modal"
              value=""
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Masukkan username"
              required
            />
          </div>
          <div>
            <label
              for="avatar"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Avatar</label
            >
            <div class="flex items-center">
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                aria-describedby="user_avatar_help"
                id="user-avatar-modal"
                type="file"
              />
              <div id="avatar-image-modal"></div>
            </div>
          </div>
          <div>
            <label
              for="user-bio"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Bio</label
            >
            <textarea
              id="user-bio"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
          id="btn-update-profile"
            type="submit"
            class="w-full text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Update Profile
          </button>
        <!-- </form> -->
      </div>
    </div>
  </div>
</div>
