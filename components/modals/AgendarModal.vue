<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 py-10"
      @click.self="close"
    >
      <transition name="scale-fade">
        <div class="bg-[#090909] text-white rounded-2xl shadow-2xl w-full max-w-lg relative p-10 space-y-6">
          <h3 class="text-2xl font-bold text-center">Agendar horário</h3>

          <form class="space-y-6" @submit.prevent="confirmar">
            <div>
              <label class="block text-sm mb-1">Nome completo</label>
              <UInput
                v-model="form.nome"
                placeholder="Digite seu nome..."
                color="neutral"
                variant="outline"
                class="w-full border border-gray-500 rounded-md text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label class="block text-sm mb-1">Telefone</label>
              <UInput
                :value="form.telefone"
                placeholder="(00) 00000-0000"
                color="neutral"
                variant="outline"
                class="w-full border border-gray-500 rounded-md text-white placeholder-gray-400"
                @input="onTelefoneInput"
                required
              />
            </div>

            <div>
              <label class="block text-sm mb-1">Selecione a data</label>
              <UInput
                v-model="form.data"
                type="date"
                color="neutral"
                variant="outline"
                class="w-full border border-gray-500 rounded-md text-white placeholder-gray-400 cursor-pointer"
                placeholder="Selecione uma data"
                max-length=8
              />
            </div>

            <div>
              <label class="block text-sm mb-1">Selecione um tipo de serviço</label>
              <USelect
                v-model="form.tipoServico"
                :items="[  'Corte', 'Barba','Cabelo + Barba + Sobrancelha','Cabelo + Sobrancelha', 'Cabelo + Barba']"
                placeholder="Escolha um serviço..."
                class="w-full border border-gray-500  text-white placeholder-gray-400 cursor-pointer"
              />
            </div>

            <div>
              <label class="block text-sm mb-1">Selecione uma unidade</label>
              <USelect
                v-model="form.unidade"
                :items="['Portal Morumbi - SP','Embu Guaçu - Centro']"
                placeholder="Escolha uma unidade..."
                class="w-full border border-gray-500  text-white placeholder-gray-400 cursor-pointer"
              />
            </div>

            <div>
              <label class="block text-sm mb-2">Selecione um horário</label>
              <div class="flex items-center space-x-2 overflow-x-auto no-scrollbar">
                <UButton
                  icon="i-lucide-chevron-left"
                  variant="ghost"
                  color="neutral"
                  class="shrink-0 cursor-pointer"
                  @click.prevent="scrollHorarios(-1)"
                />

                <div ref="horarioContainer" class="flex gap-2 overflow-x-auto px-1 scroll-smooth no-scrollbar">
                  <button
                    v-for="horario in horarios"
                    :key="horario"
                    class="text-sm min-w-[100px] h-9 px-3 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-200 transition-colors duration-200 cursor-pointer"
                    :class="form.horario === horario
                      ? 'bg-[#808080] text-white'
                      : 'bg-[#0D121E] text-white hover:bg-[#1a1f2e]'"
                    @click.prevent="form.horario = horario"
                  >
                    {{ horario }}
                  </button>
                </div>

                <UButton
                  icon="i-lucide-chevron-right"
                  variant="ghost"
                  color="neutral"
                  class="shrink-0 cursor-pointer"
                  @click.prevent="scrollHorarios(1)"
                />
              </div>
            </div>

            <UButton
              color="neutral"
              variant="outline"
              block
              type="submit"
              class="mt-2 border border-gray-200 bg-[#2F2F2F] hover:bg-[#808080] cursor-pointer h-10"
            >
              Agendar horário
            </UButton>
          </form>

          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            class="absolute top-9 right-8 cursor-pointer"
            size="xl"
            @click="close"
          />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { useToast } from '#imports'
import { ref } from 'vue'

const toast = useToast()    
const props = defineProps<{ show: boolean }>()
const emit = defineEmits(['update:show', 'next', 'edit'])

const form = ref({
  nome: '',
  telefone: '',
  data: '',
  tipoServico: '',
  unidade: '',
  horario: ''
})

const horarios = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00', '20:00'
]

const close = () => emit('update:show', false)

const confirmar = () => {
  if (!form.value.nome.trim()) {
    toast.add({ title: 'Nome é obrigatório.', icon: 'i-lucide-alert-circle', color: 'error', progress: true })
    return
  }

  if (!form.value.telefone.trim() || form.value.telefone.length < 14) {
    toast.add({ title: 'Telefone inválido.', icon: 'i-lucide-alert-circle', color: 'error', progress: true })
    return
  }

  if (!form.value.data) {
    toast.add({ title: 'Selecione uma data.', icon: 'i-lucide-alert-circle', color: 'error', progress: true })
    return
  }

  // Verifica se a data selecionada é domingo
  const selectedDate = new Date(form.value.data)
  if (selectedDate.getDay() === 0) {
    toast.add({ title: 'Domingos não estão disponíveis para agendamento.', icon: 'i-lucide-alert-circle', color: 'error', progress: true })
    return
  }

  if (!form.value.tipoServico) {
    toast.add({ title: 'Selecione um tipo de serviço.', icon: 'i-lucide-alert-circle', color: 'error', progress: true })
    return
  }

  if (!form.value.unidade) {
    toast.add({ title: 'Selecione uma unidade.', icon: 'i-lucide-alert-circle', color: 'error', progress: true })
    return
  }

  if (!form.value.horario) {
    toast.add({ title: 'Selecione um horário.', icon: 'i-lucide-alert-circle', color: 'error', progress: true })
    return
  }

  toast.add({ title: 'Agendamento realizado com sucesso!', icon: 'i-lucide-check-circle', color: 'success', progress: true })
  emit('next', form.value)
  close()
}

const horarioContainer = ref<HTMLElement | null>(null)

const scrollHorarios = (direction: number) => {
  if (horarioContainer.value) {
    horarioContainer.value.scrollLeft += direction * 100
  }
}

// Formatação simples do telefone (00) 00000-0000
const formatTelefone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length === 0) return ''
  if (digits.length < 3) return `(${digits}`
  if (digits.length < 8) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const onTelefoneInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  input.value = formatTelefone(input.value)
  form.value.telefone = input.value
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.scale-fade-enter-active, .scale-fade-leave-active {
  transition: all 0.3s ease;
}
.scale-fade-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body.no-scrollbar {
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none;    /* Firefox */
}
body.no-scrollbar::-webkit-scrollbar {
  display: none;            /* Chrome/Safari */
}
</style>