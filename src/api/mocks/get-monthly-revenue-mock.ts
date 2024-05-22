import { http, HttpResponse } from 'msw'

import { GetMonthlyRevenueResponse } from '../get-monthly-revenue'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const getMonthlyRevenueMock = http.get<
  never,
  never,
  GetMonthlyRevenueResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 5000,
    diffFromLastMonth: -200,
  })
})
