import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: '1',
      name: 'joao',
      email: 'joao@gmail.com',
      role: 'manager',
      phone: '3290412321',
      createdAt: null,
      updatedAt: null,
    })
  },
)
