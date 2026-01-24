import type { ProductDto } from "@/domain/product/dto/ProductDto";

const API_URL = import.meta.env.VITE_API_URL as string

export async function fetchProducts(): Promise<ProductDto[]> {
  const res = await fetch(`${API_URL}/products`)

  if(!res.ok){
    throw new Error(`Fetching Error: ${res.status}`)
  }

  const data = (await res.json()) as ProductDto[]
  return data
}
