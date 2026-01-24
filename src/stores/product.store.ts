import {defineStore} from "pinia"
import {fetchProducts} from "@/services/product.service"
import ProductModel from "@/domain/product/models/ProductModel"

import type { ProductDto } from "@/domain/product/dto/ProductDto"

export const useProductStore = defineStore("product",{
  state: () => ({
    productsDto: [] as ProductDto[],
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async loadProducts() {
      this.isLoading = true
      this.error = null

      try {
        this.productsDto = await fetchProducts()
      } catch (e) {
        this.error = e instanceof Error ? e.message: "unknown error"
      } finally {
        this.isLoading = false
      }

    }
  },

getters: {
  products: (state) => ProductModel.fromDtos(state.productsDto),
  hasProducts: (state) => state.productsDto.length > 0,
},
  persist:true,
})
