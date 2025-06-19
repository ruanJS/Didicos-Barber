<template>
  <section id="sobre" class="bg-[#1C1C1C] py-35">
    <div class="container mx-auto px-4 lg:px-48">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Images -->
        <div class="relative">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <img 
                src="/img/barbers.png" 
                alt="Barbeiros" 
                class="w-full rounded-lg shadow-lg"
              >
              <img 
                src="/img/barbearia.png" 
                alt="Barbearia" 
                class="w-full rounded-lg shadow-lg"
              >
            </div>
            <div class="pt-8">
              <img 
                src="/img/img-sobre.png" 
                alt="Sobre" 
                class="w-full rounded-lg shadow-lg"
              >
            </div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-6">
          <h2 class="text-6xl lg:text-8xl font-anton font-bold uppercase gradient-title">
            SOBRE
          </h2>
          
          <h3 class="text-xl text-white font-medium">
            Didicos Barber: O Que Significa?
          </h3>
          
          <div class="space-y-4 text-white/90 leading-relaxed">
            <p>
              "Didicos" é uma pergunta que todos fazem, e a resposta é simples, mas cheia de significado. 
              O nome nasceu de uma brincadeira entre amigos na escola, mas logo se transformou em algo muito maior. 
              Em 2018, decidimos dar o primeiro passo nessa jornada, com a missão de criar um espaço onde as pessoas 
              pudessem não só cortar o cabelo, mas também fazer amizades, compartilhar histórias e, acima de tudo, realizar sonhos.
            </p>
            
            <p>
              Desde então, cada pessoa que entra em nossa barbearia se torna parte de algo especial. "Didicos" não é apenas um nome; 
              é uma ideia, um movimento que busca, a cada dia, melhorar a experiência e trazer o melhor de nós mesmos para cada cliente.
            </p>
            
            <p>
              Nossa trajetória não é apenas sobre cortes de cabelo ou estilo. É sobre transformar momentos simples em algo extraordinário, 
              é sobre acreditar que só quem se arrisca pode realmente alcançar o extraordinário.
            </p>
            
            <p>
              Hoje, quando você é um "Didicos", você faz parte de uma história que está em constante evolução, 
              buscando sempre o melhor para que todos possamos crescer e viver o extraordinário. E você, o que acha dessa jornada?
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
  <HoursBanner />
</template>