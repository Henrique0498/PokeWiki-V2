import {
  getByTitle,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import AlertSmall, { AlertSmallProps } from '.'

// describe('<SmallAlert />', () => {
//   it('Should render the alert small', () => {
//     const { container } = render(
//       <SmallAlert children="react avançado" type="info" />
//     )

//     expect(
//       screen.getByRole('heading', { name: /react avançado/i })
//     ).toBeInTheDocument()

//     expect(container.firstChild).toMatchSnapshot()
//   })

//   it('should render the colors correctly', () => {
//     const { container } = render(<SmallAlert />)

//     expect(container.firstChild).toHaveClass(
//       'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-100'
//     )
//   })
// })
let value = 'testing'

const mock: AlertSmallProps = {
  children: value,
  type: 'info',
  setMessage: () => {
    value = ''
  }
}

// test('sum', () => {
//   const { getByText } = render(<SmallAlert {...mock} />)

//   expect(getByText('testing')).toBeTruthy()
// })

describe('<SmallAlert/>', () => {
  it('should render component', () => {
    const { getByText } = render(<AlertSmall {...mock} />)

    expect(getByText('testing')).toBeInTheDocument()
  })

  it('should be able to add new item to list', async () => {
    const { queryByText, getByTitle } = render(<AlertSmall {...mock} />)

    const closeAlert = getByTitle('close')

    userEvent.click(closeAlert)

    await waitFor(() => {
      expect(queryByText('testing')).toBeInTheDocument()
    })
  })

  it('should render correctly', () => {
    const { container } = render(<AlertSmall {...mock} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should color correctly', () => {
    const { container } = render(<AlertSmall {...mock} />)

    expect(container.firstChild).toHaveStyle({ 'border-radius': '0.125rem' })
  })
})
