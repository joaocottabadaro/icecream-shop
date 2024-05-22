import { api } from '@/lib/axios'

export interface GetMonthlyOrdersResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthlyOrders() {
  const response = await api.get<GetMonthlyOrdersResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
