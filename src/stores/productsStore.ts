import { defineStore } from 'pinia'

export interface Product {
  name: string
  quantity: number
  price: number
  colors: string[]
  img: string
}

export const useProductsStore = defineStore('products', {
  state: () => ({
    colors: [
      'checkbox-primary',
      'checkbox-secondary',
      'checkbox-accent',
      'checkbox-neutral',
      'checkbox-info',
      'checkbox-warning',
    ],
    products: <Product[]>[],
  }),
  actions: {
    addProduct(produto: Product) {
      this.products.push(produto)
    },
    removeProduct(produto: Product) {
      this.products = this.products.filter(
        (item) => item.name !== produto.name && item.price !== produto.price,
      )
    },
    // updateProduct(index: number, produto: Product) {
    //   this.products[index] = produto
    // },
  },
  persist: {
    storage: sessionStorage,
  },
})
