export type InventoryStatus = 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK'

export interface Product {
  id: string
  code: string
  name: string
  description: string
  image: string | null
  price: number
  category: string
  quantity: number
  inventoryStatus: InventoryStatus
  rating: number
}
