import { useState } from 'react'
import './SettingsForm.css'

const initialForm = {
  name: '',
  email: '',
  password: '',
}

function SettingsForm() {
  const [form, setForm] = useState(initialForm)
  const [saved, setSaved] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSaved(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSaved(true)
  }

  return (
    <section className="settings">
      <div className="settings__header">
        <h1>Settings</h1>
        <p>Update your account details below.</p>
      </div>

      <form className="settings__form" onSubmit={handleSubmit}>
        <div className="settings__field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="settings__field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="settings__field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            minLength={8}
            required
          />
        </div>

        <div className="settings__actions">
          <button type="submit" className="settings__submit">
            Save changes
          </button>
          {saved && (
            <p className="settings__feedback" role="status">
              Settings saved.
            </p>
          )}
        </div>
      </form>
    </section>
  )
}

export default SettingsForm
