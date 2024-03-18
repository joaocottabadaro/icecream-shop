import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Pagination from '../pagination'

const onChangePageCallback = vi.fn()
describe('Pagination', () => {
  beforeEach(() => {
    onChangePageCallback.mockClear()
  })
  it('should display the correct page position', () => {
    const wrapper = render(
      <Pagination
        pageIndex={0}
        itemsPerPage={10}
        totalCount={20}
        onPageChange={onChangePageCallback}
      />,
    )

    const currentPageText = wrapper.getByText('Página 1 de 2')
    const NumberOfPagesText = wrapper.getByText('Total de 20 items(s)')

    expect(currentPageText).toBeInTheDocument()
    expect(NumberOfPagesText).toBeInTheDocument()
  })

  it('should navigate to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        itemsPerPage={10}
        totalCount={20}
        onPageChange={onChangePageCallback}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onChangePageCallback).toHaveBeenCalledTimes(1)
  })
  it('should navigate to the previous page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={1}
        itemsPerPage={10}
        totalCount={20}
        onPageChange={onChangePageCallback}
      />,
    )

    const previousPageButton = wrapper.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(previousPageButton)

    expect(onChangePageCallback).toHaveBeenCalledTimes(1)
  })
  it('should navigate to the last page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pageIndex={0}
        itemsPerPage={10}
        totalCount={20}
        onPageChange={onChangePageCallback}
      />,
    )

    const lastPageButton = wrapper.getByRole('button', {
      name: 'Última página',
    })

    await user.click(lastPageButton)

    expect(onChangePageCallback).toHaveBeenCalledTimes(1)
  })
})
