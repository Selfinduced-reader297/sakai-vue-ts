import type { MenuItem as PrimeVueMenuItem, MenuItemCommandEvent } from 'primevue/menuitem'

export interface MenuItem extends Omit<PrimeVueMenuItem, 'command'> {
  to?: string
  path?: string
  items?: MenuItem[]
  command?: (event: MenuItemCommandEvent) => void
  class?: string
}
