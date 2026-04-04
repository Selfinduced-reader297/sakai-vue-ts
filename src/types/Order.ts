export type OrderStatus = 'PENDING' | 'DELIVERED' | 'RETURNED' | 'CANCELLED'

export interface Order {
  id: string
  productCode: string
  date: string
  amount: number
  quantity: number
  customer: string
  status: OrderStatus
}
