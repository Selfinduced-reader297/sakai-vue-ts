import type { MenuItem } from '@/types/MenuItem'

export interface LayoutState {
  staticMenuInactive: boolean
  overlayMenuActive: boolean
  profileSidebarVisible: boolean
  configSidebarVisible: boolean
  sidebarExpanded: boolean
  menuHoverActive: boolean
  activeMenuItem: MenuItem | null
  activePath: string | null
  mobileMenuActive: boolean
  anchored: boolean
}
