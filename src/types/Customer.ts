import type { Country } from './Country'
import type { Representative } from './Representative'

export type CustomerStatus = 'unqualified' | 'negotiation' | 'qualified' | 'new' | 'renewal'

export interface Customer {
  id: number
  name: string
  country: Country
  company: string
  date: string
  status: CustomerStatus
  verified: boolean
  activity: number
  representative: Representative
  balance: number
}
