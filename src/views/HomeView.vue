<template>
  <div>
    <h1 class="text-3xl font-bold text-center">Ande com mais estilo e conforto.</h1>
    <div class="grid grid-template-columns-fit gap-y-2 justify-items-center">
      <CardProduct
        v-for="(product, index) in productsStore.products"
        :key="index"
        :img="product.img"
        :name="product.name"
        :price="product.price"
        :quantity="product.quantity"
        :colors="product.colors"
        @buy="alertBuy"
      />
    </div>
  </div>
  <!-- <div v-if="toast" class="toast toast-start">
    <div
      class="alert font-bold"
      :style="`background-color: var(--color-base-content); color: black`"
    >
      <span>Tênis {{ productName }} comprado com sucesso!</span>
    </div>
  </div> -->
  <AlertToast :toast="toast" :productName="productName" message="comprado" />
  <div class="p-3 mt-3 absolute right-0 bottom-0">
    <button class="btn btn-primary" @click="router.push('/form')">Ir para o formulário</button>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/productsStore'
import CardProduct from '@/components/CardProduct.vue'
import AlertToast from '@/components/AlertToast.vue'

const router = useRouter()
const productsStore = useProductsStore()
const toast = ref(false)
const productName = ref('')

const alertBuy = (productNameRef: string) => {
  productName.value = productNameRef
  toast.value = true
  setTimeout(() => {
    toast.value = false
  }, 3000)
}

// const quantityLabel = computed(() => `Quantidade: ${quantityProduct.value}`)
// const exibeBadgeEsgotado = computed(() => {
//   return quantityProduct.value === 0 && true
// })
</script>
