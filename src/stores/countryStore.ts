import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Country } from '@/types/Country'

export const useCountryStore = defineStore('country', () => {
  const countries = ref<Country[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchCountries(): Promise<Country[]> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/countries')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: Country[] = await res.json()
      countries.value = data
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return []
    } finally {
      loading.value = false
    }
  }

  return { countries, loading, error, fetchCountries }
})
