<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm overflow-y-auto pt-10 px-4"
      @click.self="close"
    >
      <transition name="scale-fade">
        <div class="bg-zinc-900 text-white rounded-2xl shadow-xl w-full max-w-md relative p-6">
          <h3 class="text-xl font-bold mb-6 text-center">Confirmar Agendamento</h3>

          <form class="space-y-3">
            <label class="block text-sm mb-1">Nome Completo</label>
            <input
              v-model="form.nome"
              type="text"
              readonly
              class="w-full bg-zinc-800 text-white text-sm border border-zinc-700 rounded-md px-4 py-1 mb-4 cursor-default"
            />
            <label class="block text-sm mb-1">Telefone</label>
            <input
              v-model="form.telefone"
              type="text"
              readonly
              class="w-full bg-zinc-800 text-white text-sm border border-zinc-700 rounded-md px-4 py-1 mb-4 cursor-default"
            />
            <label class="block text-sm mb-1">Data</label>
            <input
              v-model="form.data"
              type="text"
              readonly
              class="w-full bg-zinc-800 text-white text-sm border border-zinc-700 rounded-md px-4 py-1 mb-4 cursor-default"
            />
            <label class="block text-sm mb-1">Serviço</label>
            <input
              v-model="form.tipoServico"
              type="text"
              readonly
              class="w-full bg-zinc-800 text-white text-sm border border-zinc-700 rounded-md px-4 py-1 mb-4 cursor-default"
            />
            <label class="block text-sm mb-1">Unidade</label>
            <input
              v-model="form.unidade"
              type="text"
              readonly
              class="w-full bg-zinc-800 text-white text-sm border border-zinc-700 rounded-md px-4 py-1 mb-4 cursor-default"
            />
            <label class="block text-sm mb-1">Horário</label>
            <input
              v-model="form.horario"
              type="text"
              readonly
              class="w-full bg-zinc-800 text-white text-sm border border-zinc-700 rounded-md px-4 py-1 cursor-default"
            />
          </form>

          <div class="flex justify-between items-center gap-4 mt-10">
            <button
              @click="editar"
              class="bg-white text-black text-sm px-6 py-2 rounded-md hover:bg-[#808080] transition w-1/2 cursor-pointer mb-4"
            >
              Editar campos
            </button>
            <button
              @click="confirmar"
              class="border border-white text-white text-sm px-6 py-2 rounded-md hover:bg-[#808080] transition w-1/2 cursor-pointer mb-4"
            >
              Agendar horário
            </button>
          </div>

          <UButton
            icon="i-lucide-x"
            color="neutral"
            variant="ghost"
            class="absolute top-5 right-3 cursor-pointer"
            size="xl"
            @click="close"
          />
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ show: boolean; data: any }>()
const emit = defineEmits(['update:show', 'next', 'edit'])

const form = ref({ ...props.data })

watch(() => props.data, (newData) => {
  form.value = { ...newData }
})

const close = () => emit('update:show', false)

const confirmar = () => {
  emit('next', form.value)
  close()
}

const editar = () => {
  emit('edit', form.value)
  close()
}

const formatarData = (data: string) => {
  const [ano, mes, dia] = data.split('-') // caso venha como 'aaaa-mm-dd'
  return `${dia}/${mes}/${ano}`
}

watch(() => props.data, (newData) => {
  form.value = {
    ...newData,
    data: formatarData(newData.data)
  }
})

</script>
