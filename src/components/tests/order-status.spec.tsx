import { render } from '@testing-library/react'

import { OrderStatus } from '../order-status'
describe('Order Status', () => {
  it('should display the correct order status', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByText('Pendente')

    const element = wrapper.getByTestId('status')

    expect(statusText).toBeInTheDocument()
    expect(element).toHaveClass('bg-slate-400')
  })
})
