import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { TreeNode } from '@/types/TreeNode'
import type { TreeTableNode } from '@/types/TreeTableNode'

export const useNodeStore = defineStore('node', () => {
  const treeNodes = ref<TreeNode[]>([])
  const treeTableNodes = ref<TreeTableNode[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchTreeNodes(): Promise<TreeNode[]> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/nodes/tree')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: TreeNode[] = await res.json()
      treeNodes.value = data
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return []
    } finally {
      loading.value = false
    }
  }

  async function fetchTreeTableNodes(): Promise<TreeTableNode[]> {
    loading.value = true
    error.value = null
    try {
      const res = await fetch('/api/nodes/tree-table')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: TreeTableNode[] = await res.json()
      treeTableNodes.value = data
      return data
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      return []
    } finally {
      loading.value = false
    }
  }

  return { treeNodes, treeTableNodes, loading, error, fetchTreeNodes, fetchTreeTableNodes }
})
