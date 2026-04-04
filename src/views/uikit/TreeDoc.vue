<script setup lang="ts">
import { useNodeStore } from '@/stores/nodeStore'
import type { TreeNode } from '@/types/TreeNode'
import type { TreeTableNode } from '@/types/TreeTableNode'
import { onMounted, ref } from 'vue'

interface TreeSelectionKey {
  checked: boolean
  partialChecked: boolean
}

const nodeStore = useNodeStore()

const treeValue = ref<TreeNode[]>([])
const selectedTreeValue = ref<Record<string, TreeSelectionKey> | undefined>(undefined)
const treeTableValue = ref<TreeTableNode[]>([])
const selectedTreeTableValue = ref<Record<string, TreeSelectionKey> | undefined>(undefined)

onMounted(async () => {
  treeValue.value = await nodeStore.fetchTreeNodes()
  treeTableValue.value = await nodeStore.fetchTreeTableNodes()
})
</script>

<template>
  <div class="card">
    <div class="font-semibold text-xl">Tree</div>
    <Tree
      :value="treeValue"
      selectionMode="checkbox"
      v-model:selectionKeys="selectedTreeValue"
    ></Tree>
  </div>

  <div class="card">
    <div class="font-semibold text-xl mb-4">TreeTable</div>
    <TreeTable
      :value="treeTableValue"
      selectionMode="checkbox"
      v-model:selectionKeys="selectedTreeTableValue"
    >
      <Column field="name" header="Name" :expander="true"></Column>
      <Column field="size" header="Size"></Column>
      <Column field="type" header="Type"></Column>
    </TreeTable>
  </div>
</template>
