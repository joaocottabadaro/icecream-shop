import { api } from '@/lib/axios'

export type GetDailyRevenueResponse = {
  date: string
  receipt: number
}[]
export interface GetDailyRevenueParams {
  from: Date | undefined
  to: Date | undefined
}
export async function getDailyRevenue({ from, to }: GetDailyRevenueParams) {
  const response = await api.get<GetDailyRevenueResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
