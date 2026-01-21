/**
 * Shared types for the application
 */

export type Currency = 'ARS' | 'USD' | 'EUR'

export type BaseEntity = {
  id: string
  active: boolean
  order: number
}
