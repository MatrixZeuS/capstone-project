import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from '../components/FormField.jsx'
import { settingsSchema } from '../schemas/settingsSchema.js'

function SettingsPage() {
  const [saved, setSaved] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(settingsSchema),
    mode: 'onSubmit',
  })

  const onSubmit = () => {
    setSaved(true)
  }

  const fields = [
    {
      id: 'fullName',
      label: 'Full Name',
      type: 'text',
      description: 'Enter your full name.',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      description: 'Use a valid email address.',
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      description: 'At least 8 characters.',
    },
  ]

  return (
    <section id="center">
      <div className="settings-card">
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Update your account information below.</p>
        </div>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          {fields.map(({ id, label, type, description }) => (
            <FormField
              key={id}
              id={id}
              label={label}
              type={type}
              register={register}
              error={errors[id]}
              description={description}
            />
          ))}
          <button type="submit" className="form-submit" disabled={isSubmitting}>
            Save settings
          </button>
          {saved && <p className="form-status">Settings saved successfully.</p>}
        </form>
      </div>
    </section>
  )
}

export default SettingsPage
