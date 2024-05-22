import { api } from '@/lib/axios'

export interface GetMonthlyCanceledOrdersResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthlyCanceledOrders() {
  const response = await api.get<GetMonthlyCanceledOrdersResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
