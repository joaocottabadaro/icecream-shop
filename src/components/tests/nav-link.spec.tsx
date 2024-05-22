import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import NavLink from '../nav-link'
describe('Nav link', () => {
  it('should highlight the current page', () => {
    const wrapper = render(
      <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/orders'}>Orders</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={['/orders']}>{children}</MemoryRouter>
          )
        },
      },
    )

    expect(wrapper.getByText('Home').dataset.active).toEqual('false')
    expect(wrapper.getByText('Orders').dataset.active).toEqual('true')
  })
})
