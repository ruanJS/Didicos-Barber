<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
      @click.self="close"
    >
      <transition name="scale-fade">
        <div class="bg-[#090909] rounded-2xl p-10 w-full max-w-md text-center text-white relative">
          <img src="/img/logo-didicos.png" alt="Didico's Barber" class="mx-auto w-100 mb-4" />

          <h2 class="text-3xl font-bold leading-snug mb-8">
            Entraremos em contato<br />
            para a confirmação
          </h2>

          <button
            :disabled="enviando"
            @click="close"
            class="border border-white text-white text-sm px-6 py-2 rounded-md hover:bg-[#808080] transition w-1/2 cursor-pointer mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ enviando ? 'Enviando...' : 'Voltar' }}
          </button>

          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            class="absolute top-5 right-5 cursor-pointer"
            @click="close"
          />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { useToast } from '#imports'
import { sendAgendamentoEmail } from '@/utils/useEmail.js'

const props = defineProps<{
  show: boolean
  formData: {
    nome: string
    telefone: string
    data: string
    tipoServico: string
    unidade: string
    horario: string
  }
}>()

const emit = defineEmits(['update:show', 'clear-form'])

const enviando = ref(false)
const toast = useToast()

const close = () => emit('update:show', false)

const formatarData = (data?: string) => {
  if (!data || typeof data !== 'string') return ''
  if (data.includes('/')) return data 
  const [ano, mes, dia] = data.split('-')
  if (!ano || !mes || !dia) return ''
  return `${dia}/${mes}/${ano}`
}

const enviarEmail = async () => {
  enviando.value = true

  const enviadoComSucesso = await sendAgendamentoEmail({
    nome: props.formData.nome,
    telefone: props.formData.telefone,
    data: formatarData(props.formData.data),
    servico: props.formData.tipoServico,
    unidade: props.formData.unidade,
    horario: props.formData.horario
  })

  if (enviadoComSucesso) {
    toast.add({
      title: 'E-mail enviado com sucesso!',
      icon: 'i-lucide-check-circle',
      color: 'success',
      description: 'Verifique sua caixa de entrada.',
      progress: true
    })
  } else {
    toast.add({
      title: 'Erro ao enviar o e-mail',
      icon: 'i-lucide-x-circle',
      color: 'error',
      description: 'Tente novamente mais tarde.',
      progress: true
    })
  }

  enviando.value = false
  emit('clear-form')
}

watch(() => props.show, async (val) => {
  if (val) {
    await nextTick()
    await enviarEmail()
  }
})
</script>
