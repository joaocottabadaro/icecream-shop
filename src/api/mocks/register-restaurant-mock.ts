import { http, HttpResponse } from 'msw'

import { RegisterRestaurantBody } from '../register-restaurant'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const registerRestaurantMock = http.post<never, RegisterRestaurantBody>(
  '/restaurants',
  async ({ request, cookies }) => {
    console.log('🚀 ~ request:', request)
    console.log('🚀 ~ request:', request.body)
    console.log('🚀 ~ RegisterRestaurantMock ~ cookies:', cookies)
    const { email, restaurantName } = await request.json()
    console.log('🚀 ~ RegisterRestaurantMock ~ email:', email)

    if (restaurantName === 'Choneys') {
      return new HttpResponse(null, {
        status: 201,
      })
    }

    return new HttpResponse('Hello world', { status: 400 })
  },
)
