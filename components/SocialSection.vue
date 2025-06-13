<template>
  <section id="redes-sociais" class="bg-gray-100 py-20">
    <div class="container mx-auto px-4 lg:px-48">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-6xl lg:text-8xl font-anton font-bold uppercase gradient-title-dark">
          Sigam a Didico´s
        </h2>
      </div>

      <!-- Instagram Profile -->
      <div class="max-w-4xl mx-auto bg-white rounded-lg p-8 mb-12">
        <!-- Profile Header -->
        <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div class="flex items-center gap-6">
            <!-- Avatar with Instagram gradient -->
            <div class="instagram-gradient p-1 rounded-full">
              <img 
                src="/img/logo-redonda.jpg" 
                alt="Didico'S Barber"
                class="w-24 h-24 rounded-full bg-white p-1"
              >
            </div>
            
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Didico'S Barber</h3>
              <p class="text-gray-600">@didicosbarber</p>
            </div>
          </div>
          
          <UButton
            color="blue"
            class="bg-blue-500 hover:bg-blue-600"
          >
            <a 
              href="https://www.instagram.com/didicosbarber/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white"
            >
              Seguir
            </a>
          </UButton>
        </div>

        <!-- Stats -->
        <div class="flex justify-around text-center mb-8">
          <div>
            <div class="text-xl font-semibold text-gray-900">212</div>
            <div class="text-sm text-gray-600">Publicações</div>
          </div>
          <div>
            <div class="text-xl font-semibold text-gray-900">2K+</div>
            <div class="text-sm text-gray-600">Seguidores</div>
          </div>
          <div>
            <div>
              <div class="text-xl font-semibold text-gray-900">716</div>
              <div class="text-sm text-gray-600">Seguindo</div>
            </div>
          </div>
        </div>

        <!-- Bio -->
        <div class="text-center text-gray-700">
          <p class="mb-2">
            🔸 Unidade I: Embu-Guaçu 🔸 Unidade II: Portal do Morumbi
          </p>
          <p class="mb-2">Estilo clássico ousado e moderno</p>
          <p>
            WhatsApp: 
            <a 
              href="https://wa.me/message/O3W3ST3HA272K1" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-blue-600 hover:underline"
            >
              https://wa.me/message/O3W3ST3HA272K1
            </a>
          </p>
        </div>
      </div>

      <!-- Instagram Feed -->
      <div class="text-center">
        <iframe 
          src="https://snapwidget.com/embed/1096518" 
          class="w-full h-96 border-0"
          allowtransparency="true"
          frameborder="0" 
          scrolling="no"
          title="Posts from Instagram"
        ></iframe>
      </div>
    </div>
  </section>
</template>