import { api } from '@/lib/axios'

export interface GetDailyOrdersResponse {
  amount: number
  diffFromYesterday: number
}

export async function getDailyOrders() {
  const response = await api.get<GetDailyOrdersResponse>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
