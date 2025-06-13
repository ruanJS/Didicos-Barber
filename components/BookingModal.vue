<template>
  <UModal v-model="isOpen" :ui="{ width: 'sm:max-w-md' }">
    <UCard>
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-white">
            {{ currentStep === 'booking' ? 'Agendar horário' : currentStep === 'confirm' ? 'Confirme o seu Agendamento' : 'Agendamento Concluído' }}
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            @click="closeModal"
          />
        </div>
      </template>

      <!-- Booking Form -->
      <div v-if="currentStep === 'booking'" class="space-y-4">
        <UFormGroup label="Nome completo">
          <UInput v-model="form.nome" placeholder="Digite seu nome..." required />
        </UFormGroup>

        <UFormGroup label="Telefone">
          <UInput v-model="form.telefone" placeholder="Digite seu telefone..." required />
        </UFormGroup>

        <UFormGroup label="Selecione a data">
          <UInput v-model="form.data" type="date" :min="minDate" required />
        </UFormGroup>

        <UFormGroup label="Selecione um tipo de serviço">
          <USelect
            v-model="form.servico"
            :options="serviceOptions"
            placeholder="Qual serviço você gostaria?"
            required
          />
        </UFormGroup>

        <UFormGroup label="Selecione uma unidade">
          <USelect
            v-model="form.unidade"
            :options="unitOptions"
            placeholder="Escolha um local..."
            required
          />
        </UFormGroup>

        <UFormGroup label="Selecione um horário">
          <div class="flex items-center gap-2">
            <UButton
              variant="ghost"
              color="gray"
              @click="showPreviousTimeSlots"
            >
              <ChevronLeft class="h-4 w-4" />
            </UButton>
            
            <div class="flex-1 overflow-hidden">
              <div class="flex gap-2 transition-transform duration-300" :style="{ transform: `translateX(-${timeSlotOffset * 100}px)` }">
                <UButton
                  v-for="time in visibleTimeSlots"
                  :key="time"
                  :variant="form.horario === time ? 'solid' : 'outline'"
                  :color="form.horario === time ? 'primary' : 'gray'"
                  size="sm"
                  @click="form.horario = time"
                >
                  {{ time }}
                </UButton>
              </div>
            </div>
            
            <UButton
              variant="ghost"
              color="gray"
              @click="showNextTimeSlots"
            >
              <ChevronRight class="h-4 w-4" />
            </UButton>
          </div>
        </UFormGroup>

        <UButton
          color="primary"
          block
          @click="submitBooking"
          :disabled="!isFormValid"
        >
          Agendar Horário
        </UButton>
      </div>

      <!-- Confirmation -->
      <div v-else-if="currentStep === 'confirm'" class="space-y-4">
        <div class="space-y-2">
          <p><strong>Nome:</strong> {{ form.nome }}</p>
          <p><strong>Telefone:</strong> {{ form.telefone }}</p>
          <p><strong>Data:</strong> {{ formatDate(form.data) }}</p>
          <p><strong>Serviço:</strong> {{ form.servico }}</p>
          <p><strong>Unidade:</strong> {{ form.unidade }}</p>
          <p><strong>Horário:</strong> {{ form.horario }}</p>
        </div>
        
        <div class="flex gap-2">
          <UButton
            color="gray"
            variant="outline"
            @click="currentStep = 'booking'"
          >
            Editar
          </UButton>
          <UButton
            color="green"
            @click="confirmBooking"
          >
            Agendar
          </UButton>
        </div>
      </div>

      <!-- Success -->
      <div v-else class="text-center space-y-4">
        <img src="/img/logo.png" alt="Logo Barber" class="mx-auto w-32">
        <h3 class="text-xl font-semibold text-white">
          Entraremos em contato para a confirmação!
        </h3>
        <UButton
          color="primary"
          @click="closeModal"
        >
          Voltar
        </UButton>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const isOpen = ref(false)
const currentStep = ref('booking') // 'booking', 'confirm', 'success'
const timeSlotOffset = ref(0)

const form = reactive({
  nome: '',
  telefone: '',
  data: '',
  servico: '',
  unidade: '',
  horario: ''
})

const serviceOptions = [
  'Corte',
  'Barba',
  'Cabelo + Barba + Sobrancelha',
  'Cabelo + Sobrancelha',
  'Cabelo + Barba'
]

const unitOptions = [
  'Portal Morumbi - SP',
  'Embu Guaçu - Centro'
]

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
]

const visibleTimeSlots = computed(() => {
  const start = timeSlotOffset.value
  return timeSlots.slice(start, start + 4)
})

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const isFormValid = computed(() => {
  return form.nome && form.telefone && form.data && form.servico && form.unidade && form.horario
})

const showPreviousTimeSlots = () => {
  if (timeSlotOffset.value > 0) {
    timeSlotOffset.value--
  }
}

const showNextTimeSlots = () => {
  if (timeSlotOffset.value < timeSlots.length - 4) {
    timeSlotOffset.value++
  }
}

const formatDate = (dateString) => {
  return dateString.split('-').reverse().join('/')
}

const submitBooking = () => {
  // Check if selected date is Sunday
  const selectedDate = new Date(form.data)
  if (selectedDate.getDay() === 0) {
    alert('Não atendemos aos Domingos. Por favor, selecione outro dia.')
    return
  }
  
  currentStep.value = 'confirm'
}

const confirmBooking = () => {
  const message = `NOME: ${form.nome}\nTELEFONE: ${form.telefone}\nDATA: ${formatDate(form.data)}\nSERVICO: ${form.servico}\nUNIDADE: ${form.unidade}\nHORARIO: ${form.horario}\n\nPodemos confirmar sua solicitação?`
  
  const whatsappUrl = `https://web.whatsapp.com/send?phone=5511934963123&text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
  
  setTimeout(() => {
    currentStep.value = 'success'
  }, 3000)
}

const closeModal = () => {
  isOpen.value = false
  currentStep.value = 'booking'
  timeSlotOffset.value = 0
  Object.keys(form).forEach(key => {
    form[key] = ''
  })
}

// Listen for modal open events
onMounted(() => {
  const handleOpenModal = () => {
    isOpen.value = true
  }
  
  window.addEventListener('open-booking-modal', handleOpenModal)
  
  onUnmounted(() => {
    window.removeEventListener('open-booking-modal', handleOpenModal)
  })
})
</script>