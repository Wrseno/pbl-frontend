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
              <a class="hover:text-primary duration-300" href="#download"
                >Downloads</a
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