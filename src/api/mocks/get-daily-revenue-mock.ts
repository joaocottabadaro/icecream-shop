import { differenceInDays } from 'date-fns'
import { http, HttpResponse } from 'msw'

import { GetDailyRevenueResponse } from '../get-daily-revenue'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const getDailyRevenueMock = http.get<
  never,
  never,
  GetDailyRevenueResponse | null
>('metrics/daily-receipt-in-period', async ({ request }) => {
  const url = new URL(request.url)
  const from = url.searchParams.get('from')
  const to = url.searchParams.get('to')
  console.log(
    '🚀 ~ > ~ differenceInDays(from, to) > 7:',
    from && to && differenceInDays(from, to),
  )
  if (from && to && differenceInDays(to, from) > 7)
    return HttpResponse.json(null, { status: 400 })

  return HttpResponse.json([
    { date: '01/04/2024', receipt: 4000 },
    { date: '02/04/2024', receipt: 3000 },
    { date: '03/04/2024', receipt: 2000 },
    { date: '04/04/2024', receipt: 1000 },
    { date: '05/04/2024', receipt: 7000 },
    { date: '06/04/2024', receipt: 8000 },
    { date: '07/04/2024', receipt: 10000 },
  ])
})
