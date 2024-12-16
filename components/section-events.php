<section id="events" class="relative grid justify-center">
  <div class="text-center mb-12">
    <h4 class="text-xl poppins-bold">Akan Datang</h4>
    <h2 class="text-3xl poppins-bold text-gradient">Event Terbaru</h2>
    <p class="poppins-regular">
      Cari semua event menarik sesuai dengan minatmu.
    </p>
  </div>

  <!-- mobile -->
  <div class="container mx-auto md:hidden">
    <swiper-container
      class="mySwiper w-[300px] lg:w-full"
      pagination="true"
      slides-per-view="1"
      space-between="30"
      autoplay="true"
      id="events-container-mobile"
    ></swiper-container>
  </div>

  <!-- tablet -->
  <div class="container mx-auto hidden md:block">
    <swiper-container
      class="mySwiper w-[400px] lg:w-full"
      pagination="true"
      slides-per-view="3"
      space-between="30"
      autoplay="true"
      id="events-container"
    ></swiper-container>
  </div>
  <div class="absolute top-0 right-0">
    <a
      href="events"
      class="poppins-medium mt-8 p-2 px-6 bg-gradient-to-r from-yellow-300 via-tertiary to-yellow-300 text-white rounded-full"
    >
      Lihat Semua
    </a>
  </div>
</section>
