<template>
  <section id="conheca" class="bg-white py-20">
    <div class="container mx-auto px-4 lg:px-48">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-6xl lg:text-8xl font-anton font-bold uppercase gradient-title-dark">
          CONHEÇA NOSSAS UNIDADES
        </h2>
      </div>

      <!-- Units Grid -->
      <div class="grid lg:grid-cols-2 gap-16">
        <div
          v-for="unit in units"
          :key="unit.id"
          class="relative text-center"
        >
          <div class="relative inline-block">
            <img 
              :src="unit.image" 
              :alt="unit.name"
              class="w-full max-w-md mx-auto rounded-3xl shadow-lg"
            >
            
            <!-- Info Card -->
            <div class="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-black/85 text-white p-6 rounded-lg w-4/5 max-w-xs">
              <h3 class="text-xl font-semibold mb-2">{{ unit.name }}</h3>
              <a 
                :href="unit.mapUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm shine-text hover:text-barber-light-gray transition-colors duration-300"
              >
                {{ unit.address }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const units = [
  {
    id: 1,
    name: 'Embu Guaçu - Centro',
    image: '/img/unidade-embu.png',
    address: 'Rua Independência, Nº 90',
    mapUrl: 'https://www.google.com.br/maps/@-23.8305096,-46.8167009,3a,75y,44.62h,75.35t/data=!3m7!1e1!3m5!1sX4Zs8xCKmhC60bXubSbc1A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.652035905961938%26panoid%3DX4Zs8xCKmhC60bXubSbc1A%26yaw%3D44.61521092004858!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    id: 2,
    name: 'Portal Morumbi - SP',
    image: '/img/unidade-morumbi.png',
    address: 'Avenida Doutor Guilherme Dumont Vilares, Nº 1147',
    mapUrl: 'https://www.google.com.br/maps/place/Av.+Dr.+Guilherme+Dumont+Vilares,+1147+-+Vila+Suzana,+S%C3%A3o+Paulo+-+SP,+05640-001/@-23.6131779,-46.7434587,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce56a585c9acb5:0x3eb37dcbe5e20e9e!8m2!3d-23.6131828!4d-46.7408838!16s%2Fg%2F11c1z34hq4?entry=ttu&g_ep=EgoyMDI0MTIwMy4wIKXMDSoASAFQAw%3D%3D'
  }
]
</script>