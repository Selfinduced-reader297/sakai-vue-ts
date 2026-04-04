import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/types/Product'
import type { Order } from '@/types/Order'

type ProductWithOrders = Product & { orders: Order[] }

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const productsWithOrders = ref<ProductWithOrders[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchProducts(): Promise<Product[]> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/products')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: Product[] = await res.json()
      products.value = data
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return []
    } finally {
      loading.value = false
    }
  }

  async function fetchProductsMini(): Promise<Product[]> {
    const data = await fetchProducts()
    const result = data.slice(0, 5)
    products.value = result
    return result
  }

  async function fetchProductsSmall(): Promise<Product[]> {
    const data = await fetchProducts()
    const result = data.slice(0, 10)
    products.value = result
    return result
  }

  async function fetchProductsWithOrders(): Promise<ProductWithOrders[]> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/products/with-orders')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: ProductWithOrders[] = await res.json()
      productsWithOrders.value = data
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return []
    } finally {
      loading.value = false
    }
  }

  async function fetchProductsWithOrdersSmall(): Promise<ProductWithOrders[]> {
    const data = await fetchProductsWithOrders()
    const result = data.slice(0, 10)
    productsWithOrders.value = result
    return result
  }

  return {
    products,
    productsWithOrders,
    loading,
    error,
    fetchProducts,
    fetchProductsMini,
    fetchProductsSmall,
    fetchProductsWithOrders,
    fetchProductsWithOrdersSmall,
  }
})
