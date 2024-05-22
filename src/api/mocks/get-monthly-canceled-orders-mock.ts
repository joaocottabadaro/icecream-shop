import { http, HttpResponse } from 'msw'

import { GetMonthlyCanceledOrdersResponse } from '../get-monthly-canceled-orders'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const getMonthlyCanceledOrdersMock = http.get<
  never,
  never,
  GetMonthlyCanceledOrdersResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 100,
    diffFromLastMonth: +50,
  })
})
