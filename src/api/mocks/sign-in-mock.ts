import { http, HttpResponse } from 'msw'

import { SignInBody } from '../sign-in'
// esse generis a tipagem do primeiro sao os parametros da rota tipo :id, como nao tem o never ajuda a nao usar eles e o segundo do generics é o request  body o terceiro é do response
export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'joaobadaro@gmail.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': `auth=sample-jwt`,
        },
      })
    }

    return new HttpResponse('Hello world', { status: 401 })
  },
)
