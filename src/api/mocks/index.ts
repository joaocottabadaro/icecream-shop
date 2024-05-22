import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock copy'
import { getDailyOrdersMock } from './get-daily-orders-mock'
import { getDailyRevenueMock } from './get-daily-revenue-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { getMonthlyCanceledOrdersMock } from './get-monthly-canceled-orders-mock'
import { getMonthlyOrdersMock } from './get-monthly-orders-mock'
import { getMonthlyRevenueMock } from './get-monthly-revenue-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders.mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(
  signInMock,
  getDailyOrdersMock,
  registerRestaurantMock,
  getMonthlyCanceledOrdersMock,
  getMonthlyOrdersMock,
  getMonthlyRevenueMock,
  getProfileMock,
  getDailyRevenueMock,
  getPopularProductsMock,
  getManagedRestaurantMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'mock') {
    return
  }

  await worker.start()
}
