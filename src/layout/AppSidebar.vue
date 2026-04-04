<script setup lang="ts">
import { useLayout } from '@/layout/composables/layout'
import { onBeforeUnmount, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppMenu from './AppMenu.vue'

const { layoutState, isDesktop, hasOpenOverlay } = useLayout()
const route = useRoute()
const sidebarRef = ref<HTMLElement | null>(null)
let outsideClickListener: ((event: Event) => void) | null = null

watch(
  () => route.path,
  (newPath) => {
    if (isDesktop()) layoutState.activePath = null
    else layoutState.activePath = newPath

    layoutState.overlayMenuActive = false
    layoutState.mobileMenuActive = false
    layoutState.menuHoverActive = false
  },
  { immediate: true },
)

watch(hasOpenOverlay, (newVal) => {
  if (isDesktop()) {
    if (newVal) bindOutsideClickListener()
    else unbindOutsideClickListener()
  }
})

const bindOutsideClickListener = () => {
  if (!outsideClickListener) {
    outsideClickListener = (event: Event) => {
      if (isOutsideClicked(event)) {
        layoutState.overlayMenuActive = false
      }
    }

    document.addEventListener('click', outsideClickListener)
  }
}

const unbindOutsideClickListener = () => {
  if (outsideClickListener) {
    document.removeEventListener('click', outsideClickListener)
    outsideClickListener = null
  }
}

const isOutsideClicked = (event: Event) => {
  const topbarButtonEl = document.querySelector('.layout-menu-button')
  const sidebarEl = sidebarRef.value

  return (
    !sidebarEl ||
    !(
      sidebarEl.isSameNode(event.target as Node | null) ||
      sidebarEl.contains(event.target as Node | null) ||
      topbarButtonEl?.isSameNode(event.target as Node | null) ||
      topbarButtonEl?.contains(event.target as Node | null)
    )
  )
}

onBeforeUnmount(() => {
  unbindOutsideClickListener()
})
</script>

<template>
  <div ref="sidebarRef" class="layout-sidebar">
    <AppMenu />
  </div>
</template>
