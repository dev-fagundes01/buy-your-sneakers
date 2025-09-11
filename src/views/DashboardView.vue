<template>
  <div class="flex flex-wrap gap-8 my-0 mx-auto">
    <div
      v-for="(product, index) in productsStore.products"
      :key="index"
      class="card bg-base-100 shadow-sm w-[15rem] border-2"
    >
      <figure>
        <img :src="product.img" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ product.name }}
          <!-- <div v-if="exibeBadgeEsgotado" class="badge bg-red-500 text-white">Esgotado</div>
        <div v-else class="badge bg-accent text-white">Ultimos em Estoque</div> -->
        </h2>
        <p>
          {{ product.price }}
        </p>
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
        <div class="card-actions flex-row justify-end">
          <!-- <button class="btn btn-primary">Atualizar</button> -->
          <button class="btn btn-primary" @click="productsStore.removeProduct(product)">
            Apagar
          </button>
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

// const quantityLabel = computed(() => `Quantidade: ${quantityProduct.value}`)
// const exibeBadgeEsgotado = computed(() => {
//   return quantityProduct.value === 0 && true
// })
</script>
