<template>
  <div class="card bg-base-100 w-[15rem] shadow-sm border">
    <figure>
      <img :src="props.img" class="h-40 w-full object-cover" alt="Shoes" />
    </figure>
    <div class="flex flex-col py-2 px-3 leading-5">
      <h2 class="card-title">
        {{ props.name }}
        <!-- <div v-if="exibeBadgeEsgotado" class="badge bg-red-500 text-white">Esgotado</div>
        <div v-else class="badge bg-accent text-white">Ultimos em Estoque</div> -->
      </h2>
      <p>R$: {{ props.price }}</p>
      <p class="text-accent">{{ props.quantity }} em estoque</p>
      <div class="flex gap-2 items-center">
        Cores:
        <div
          v-for="(color, index) in props.colors"
          :key="index"
          aria-label="status"
          class="checkbox h-2 w-2"
          :class="color"
        ></div>
      </div>
      <div class="card-actions justify-end">
        <button @click="callAlertBuy(props.name)" class="btn btn-primary">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['buy'])

interface ProductProps {
  img: string
  name: string
  price: number
  quantity: number
  colors: string[]
}

const props = withDefaults(defineProps<ProductProps>(), {
  img: '',
  name: '',
  price: 0,
  quantity: 0,
  colors: () => [],
})

const callAlertBuy = (productName: string) => {
  emit('buy', productName)
}
</script>
