import {defineStore} from "pinia"
import {fetchProducts} from "@/services/product.service"
import ProductModel from "@/domain/product/models/ProductModel"

export const useProductStore = defineStore("product",{
  state: () => ({
    products: [] as ProductModel[],
    isLoading: false,
    error: null as string | null,
  }),

  actions: {
    async loadProducts() {
      this.isLoading = true
      this.error = null

      try {
        const dtos = await fetchProducts()
        this.products = ProductModel.fromDtos(dtos)
      } catch (e) {
        this.error = e instanceof Error ? e.message: "unknown error"
      } finally {
        this.isLoading = false
      }

    }
  },

  getters: {
    hasProducts: (state) => state.products.length > 0,
  },
  persist:true,
})
