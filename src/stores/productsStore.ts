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
    products: <Product[]>[
      {
        name: 'Puma Flyer Runner',
        quantity: 10,
        price: 99.9,
        colors: ['checkbox-primary', 'checkbox-warning'],
        img: 'https://images.puma.net/images/310109/01/sv01/fnd/BRA/',
      },
      {
        name: 'Mizuno Base Rone',
        quantity: 5,
        price: 159.9,
        colors: ['checkbox-secondary'],
        img: 'https://mizunobr.vtexassets.com/arquivos/ids/252167-800-800?v=638572752039630000&width=800&height=800&aspect=true',
      },
      {
        name: 'Asics Gel Pulse',
        quantity: 20,
        price: 50,
        colors: ['checkbox-primary', 'checkbox-secondary', 'checkbox-info', 'checkbox-neutral'],
        img: 'https://pittol.vtexassets.com/arquivos/ids/387965/3186631.jpg?v=638684143391830000',
      },
      {
        name: 'Olympikus Veloz 3',
        quantity: 20,
        price: 50,
        colors: ['checkbox-primary', 'checkbox-secondary', 'checkbox-info', 'checkbox-neutral'],
        img: 'https://vulcabras.vtexassets.com/arquivos/ids/292488/43502346-01.jpg?v=638780118899200000',
      },
    ],
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
    updateProduct(index: number, produto: Product) {
      this.products[index] = produto
    },
  },
  persist: {
    storage: sessionStorage,
  },
})
