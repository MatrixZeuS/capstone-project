import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormField from '../components/FormField.jsx'

describe('FormField', () => {
  const register = () => ({})

  test('connects label and input and exposes accessibility attributes', () => {
    render(
      <FormField
        id="email"
        label="Email"
        type="email"
        register={register}
        description="Enter a valid email address."
        error={{ message: 'Invalid email' }}
      />,
    )

    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveAttribute('id', 'email')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveAttribute('aria-describedby', 'email-description email-error')
    expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
  })
})
