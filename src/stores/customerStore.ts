import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Customer } from '@/types/Customer'

export const useCustomerStore = defineStore('customer', () => {
  const customers = ref<Customer[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchCustomers(): Promise<Customer[]> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/customers')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: Customer[] = await res.json()
      customers.value = data
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return []
    } finally {
      loading.value = false
    }
  }

  return { customers, loading, error, fetchCustomers }
})
