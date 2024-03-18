import { http, HttpResponse } from 'msw'

import { CancelOrderParams } from '../cancel-order'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const cancelOrderMock = http.patch<CancelOrderParams, never, never>(
  '/orders/:orderId/cancel',
  ({ params }) => {
    if (params.orderId === 'error-order-id')
      return new HttpResponse(null, { status: 400 })

    return new HttpResponse(null, { status: 204 })
  },
)
