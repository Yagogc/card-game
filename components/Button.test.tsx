import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Button } from './Button'

const mockHandleClick = jest.fn()

beforeEach(() => {
  jest.resetAllMocks()
})

test('Renders the children', async () => {
  render(<Button>Test1</Button>)

  expect(screen.getByText('Test1')).toBeInTheDocument()
})

test('Triggers the handle click when clicked', async () => {
  render(<Button handleClick={mockHandleClick}>Test1</Button>)
  fireEvent.click(screen.getByText('Test1'))

  expect(mockHandleClick).toBeCalledTimes(1)
})

test(`Can't be clicked if it is disabled`, async () => {
  render(
    <Button handleClick={mockHandleClick} disabled>
      Test1
    </Button>
  )

  const button = screen.getByText('Test1')

  expect(button).toBeDisabled()

  fireEvent.click(button)

  expect(mockHandleClick).toBeCalledTimes(0)
})
