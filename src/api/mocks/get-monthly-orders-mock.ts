import { http, HttpResponse } from 'msw'

import { GetMonthlyOrdersResponse } from '../get-monthly-orders'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const getMonthlyOrdersMock = http.get<
  never,
  never,
  GetMonthlyOrdersResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 500,
    diffFromLastMonth: -10,
  })
})
