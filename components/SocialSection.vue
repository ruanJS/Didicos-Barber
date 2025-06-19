<template>
  <section id="redes-sociais" class="bg-gray-100 py-24 relative">
    <div class="container mx-auto px-4 lg:px-48">

      <!-- Aviso de atualização -->
      <div class="mb-6 text-center">
        <div class="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm animate-pulse">
          🚀 Em breve: perfil com novidades e o feed do Instagram direto por aqui. Fique ligado!
        </div>
      </div>

      <!-- Título -->
      <div class="text-center mb-16">
        <h2 class="text-5xl md:text-6xl font-anton font-bold uppercase text-gray-800">
          Sigam a Didico´s
        </h2>
      </div>

      <!-- Cartão do perfil simulado -->
      <div class="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-xl border border-gray-200">
        
        <!-- Topo com avatar + botão -->
        <div class="flex items-center justify-between mb-6 flex-wrap gap-6">
          <div class="flex items-center gap-5">
            <div class="instagram-gradient p-[2px] rounded-full">
              <img
                src="/img/logo-redonda.jpg"
                alt="Didico'S Barber"
                class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white p-1"
              />
            </div>
            <div>
              <h3 class="text-2xl font-bold text-gray-900">Didico'S Barber</h3>
              <p class="text-gray-600">@didicosbarber</p>
            </div>
          </div>

          <!-- Botão seguir com link direto -->
          <UButton
            as="a"
            href="https://www.instagram.com/didicosbarber/"
            target="_blank"
            rel="noopener noreferrer"
            color="info"
            class="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base"
          >
            Seguir
          </UButton>
        </div>

        <!-- Estatísticas -->
        <div class="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <div class="text-xl font-semibold text-gray-900">215</div>
            <div class="text-sm text-gray-600">Publicações</div>
          </div>
          <div>
            <div class="text-xl font-semibold text-gray-900">2.573</div>
            <div class="text-sm text-gray-600">Seguidores</div>
          </div>
          <div>
            <div class="text-xl font-semibold text-gray-900">722</div>
            <div class="text-sm text-gray-600">Seguindo</div>
          </div>
        </div>

        <!-- Bio e link -->
        <div class="text-start text-gray-700 space-y-2 text-sm md:text-base">
          <p>🔸 Unidade I: Embu-Guaçu &nbsp;&nbsp; 🔸 Unidade II: Portal do Morumbi</p>
          <p>Estilo clássico, ousado e moderno</p>
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
          <p class="mt-3 italic text-gray-500 text-sm text-center">
            ✨ Em breve, você poderá ver nosso feed direto por aqui!
          </p>
        </div>

        <!-- Simulação do feed com blur -->
        <div class="mt-10">
          <div class="grid grid-cols-3 gap-2 relative">
            <div class="relative overflow-hidden rounded-md">
              <img src="/img/img-style-1.png" alt="Post 1" class="w-full h-32 object-cover filter blur-sm" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span class="text-white text-xs md:text-sm font-semibold">Em breve</span>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-md">
              <img src="/img/img-style-2.png" alt="Post 2" class="w-full h-32 object-cover filter blur-sm" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span class="text-white text-xs md:text-sm font-semibold">Em breve</span>
              </div>
            </div>
            <div class="relative overflow-hidden rounded-md">
              <img src="/img/img-style-3.png" alt="Post 3" class="w-full h-32 object-cover filter blur-sm" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span class="text-white text-xs md:text-sm font-semibold">Em breve</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
.instagram-gradient {
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
}
</style>
