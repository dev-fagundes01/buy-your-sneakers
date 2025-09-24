<template>
  <div class="flex flex-wrap gap-8 justify-center">
    <div
      v-for="(product, index) in productsStore.products"
      :key="index"
      class="card bg-base-100 shadow-sm w-[15rem] border-2"
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
        <div class="card-actions flex-row justify-end">
          <button class="btn btn-primary" @click="editProduct(index, product)">Atualizar</button>
          <button class="btn btn-primary" @click="productsStore.removeProduct(product)">
            Apagar
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="productToEdit.index !== null"
      class="p-4 border rounded-2xl absolute top-10 bg-base-300 shadow-md"
    >
      <h3 class="text-lg font-bold mb-4">Editar Produto</h3>
      <div class="form-control mb-2">
        <label class="label">Nome</label>
        <input type="text" v-model="productToEdit.product!.name" class="input input-bordered" />
      </div>
      <div class="form-control mb-2">
        <label class="label">Preço</label>
        <input type="number" v-model="productToEdit.product!.price" class="input input-bordered" />
      </div>
      <div class="form-control mb-2">
        <label class="label">Quantidade</label>
        <input
          type="number"
          v-model="productToEdit.product!.quantity"
          class="input input-bordered"
        />
      </div>
      <div v-if="productToEdit.product!.colors?.length > 0" class="flex gap-2 items-center">
        Cores:
        <input
          v-for="(color, index) in productToEdit.product!.colors"
          :key="index"
          type="checkbox"
          v-model="productToEdit.product!.colors"
          :value="color"
          aria-label="status"
          class="checkbox h-2 w-2"
          :class="color"
        />
      </div>
      <button class="btn btn-primary mr-2" @click="saveUpdate">Salvar</button>
      <button class="btn btn-ghost" @click="cancelUpdate">Cancelar</button>
    </div>
  </div>
  <div class="p-3 mt-3 absolute right-0 bottom-0">
    <button class="btn btn-primary" @click="router.push('/form')">Ir para o formulário</button>
  </div>
</template>

<script setup lang="ts">
// import { computed } from 'vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductsStore, type Product } from '@/stores/productsStore'

const router = useRouter()
const productsStore = useProductsStore()

const productToEdit = ref<{ index: number | null; product: Product | null }>({
  product: null,
  index: null,
})

const editProduct = (index: number, product: Product) => {
  productToEdit.value = {
    index,
    product: { ...product },
  }
}

const saveUpdate = () => {
  if (productToEdit.value.product && productToEdit.value.index !== null) {
    productsStore.updateProduct(productToEdit.value.index, productToEdit.value.product)
  }
  cancelUpdate()
}

const cancelUpdate = () => {
  productToEdit.value = {
    index: null,
    product: null,
  }
}

// const quantityLabel = computed(() => `Quantidade: ${quantityProduct.value}`)
// const exibeBadgeEsgotado = computed(() => {
//   return quantityProduct.value === 0 && true
// })
</script>
