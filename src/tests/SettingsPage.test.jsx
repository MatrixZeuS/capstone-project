import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import SettingsPage from '../pages/SettingsPage.jsx'

describe('SettingsPage', () => {
  test('renders form fields and submit button', () => {
    render(<SettingsPage />)

    expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /save settings/i })).toBeInTheDocument()
  })

  test('shows validation errors when submission is invalid', async () => {
    render(<SettingsPage />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /save settings/i }))

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument()
    expect(await screen.findByText(/enter a valid email/i)).toBeInTheDocument()
    expect(await screen.findByText(/password must be at least 8 characters/i)).toBeInTheDocument()
  })

  test('submits successfully with valid values', async () => {
    render(<SettingsPage />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/full name/i), 'Jane Doe')
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByRole('button', { name: /save settings/i }))

    expect(await screen.findByText(/settings saved successfully/i)).toBeInTheDocument()
  })
})
