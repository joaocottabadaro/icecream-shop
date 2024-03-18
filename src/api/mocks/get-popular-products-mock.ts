import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'leite', amount: 1 },
    { product: 'suco', amount: 4 },
    { product: 'pizza', amount: 12 },
    { product: 'ovo', amount: 7 },
  ])
})
