import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Photo } from '@/types/Photo'

export const usePhotoStore = defineStore('photo', () => {
  const photos = ref<Photo[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchImages(): Promise<Photo[]> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/photos')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: Photo[] = await res.json()
      photos.value = data
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return []
    } finally {
      loading.value = false
    }
  }

  return { photos, loading, error, fetchImages }
})
