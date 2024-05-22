import { http, HttpResponse } from 'msw'

import { GetDailyOrdersResponse } from '../get-daily-orders'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const getDailyOrdersMock = http.get<
  never,
  never,
  GetDailyOrdersResponse
>('/metrics/day-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromYesterday: -10,
  })
})
