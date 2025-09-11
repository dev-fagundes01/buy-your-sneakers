<template>
  <div class="p-5">
    <p class="text-lg">Formulário</p>
    <div>
      <form action="" class="flex gap-3 items-center" @submit.prevent="addStore">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Nome:</legend>
          <input v-model="product.name" type="text" class="input" placeholder="Ex: Puma" />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Quantidade:</legend>
          <input
            v-model.number="product.quantity"
            type="number"
            class="input"
            placeholder="Ex: 50"
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Preço:</legend>
          <input
            v-model.number="product.price"
            type="number"
            class="input"
            placeholder="Ex: 349.99"
          />
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">Imagem:</legend>
          <input
            v-model="product.img"
            type="text"
            class="input"
            placeholder="Ex: https://images.puma.net/images/402373/01/sv01/fnd/MEX/"
          />
        </fieldset>

        <div>
          <legend class="fieldset-legend">Cores</legend>
          <div class="w-20">
            <input
              v-for="(color, index) in productsStore.colors"
              :key="index"
              v-model="product.colors"
              type="checkbox"
              class="checkbox"
              :class="color"
              :value="color"
            />
          </div>
        </div>

        <button class="btn btn-primary mt-8" @click="addStore">Enviar</button>
      </form>

      <pre>{{ product }}</pre>
    </div>
    <div class="p-3 mt-3 absolute right-0 bottom-0">
      <button class="btn btn-primary mr-2" @click="router.push('/')">Ir para loja</button>
      <button class="btn btn-primary" @click="router.push('/dashboard')">Ir para Dashboard</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductsStore } from '@/stores/productsStore'

const productsStore = useProductsStore()
const router = useRouter()

const product = ref({
  name: '',
  quantity: 0,
  price: 0,
  img: '',
  colors: [],
})

const addStore = () => {
  if (product.value.colors.length < 1) return alert('Selecione pelo menos uma cor')

  productsStore.addProduct(product.value)
  router.push('/')
}
</script>
