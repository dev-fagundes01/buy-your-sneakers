<template>
  <div>
    <h1 class="text-3xl font-bold text-center">Ande com mais estilo e conforto.</h1>
    <div class="flex flex-wrap gap-4 justify-center">
      <div
        v-for="(product, index) in productsStore.products"
        :key="index"
        class="card bg-base-100 w-[15rem] shadow-sm border"
      >
        <figure>
          <img :src="product.img" class="h-40 w-full object-cover" alt="Shoes" />
        </figure>
        <div class="flex flex-col py-2 px-3 leading-5">
          <h2 class="card-title">
            {{ product.name }}
            <!-- <div v-if="exibeBadgeEsgotado" class="badge bg-red-500 text-white">Esgotado</div>
        <div v-else class="badge bg-accent text-white">Ultimos em Estoque</div> -->
          </h2>
          <p>R$: {{ product.price }}</p>
          <p class="text-accent">{{ product.quantity }} em estoque</p>
          <div v-if="product.colors?.length > 0" class="flex gap-2 items-center">
            Cores:
            <div
              v-for="(color, index) in product.colors"
              :key="index"
              aria-label="status"
              class="checkbox h-2 w-2"
              :class="color"
            ></div>
          </div>
          <div class="card-actions justify-end">
            <button @click="alertBuy(product.name)" class="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="p-3 mt-3 absolute right-0 bottom-0">
    <button class="btn btn-primary" @click="router.push('/form')">Ir para o formulário</button>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/productsStore'

const router = useRouter()
const productsStore = useProductsStore()
console.log(productsStore)

// const quantityLabel = computed(() => `Quantidade: ${quantityProduct.value}`)
// const exibeBadgeEsgotado = computed(() => {
//   return quantityProduct.value === 0 && true
// })

const alertBuy = (productName: string) => {
  alert(`Produto ${productName} comprado!`)
}
</script>
