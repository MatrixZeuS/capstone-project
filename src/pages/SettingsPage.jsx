import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormField from '../components/FormField.jsx'
import { settingsSchema } from '../schemas/settingsSchema.js'
import styles from './SettingsPage.module.css'
import { User, Shield, Moon, CheckCircle } from 'lucide-react'

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
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Settings</h1>
          <p className={styles.subtitle}>Manage your account preferences and security.</p>
        </div>

        <div className={`${styles.card} ${styles.profileCard}`}>
          <div className={styles.profileTop}>
            <div className={styles.avatar} aria-hidden="true">
              <User />
            </div>
            <div className={styles.profileName}>
              <div className="name">Your name</div>
              <div className="email">you@example.com</div>
            </div>
          </div>

          <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
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

            <div className={styles.saveRow}>
              <button type="submit" className={styles.buttonPrimary} disabled={isSubmitting}>
                Save Changes
              </button>
              <button type="button" className={styles.btnGhost} onClick={() => setSaved(false)}>
                Reset
              </button>
            </div>

            {saved && (
              <p className={`${styles.helperNote} ${styles.success}`} role="status">
                <CheckCircle /> Settings saved successfully.
              </p>
            )}
          </form>
        </div>

        <div className={styles.rightColumn}>
          <div className={`${styles.smallCard}`}>
            <div className={styles.iconRow}>
              <Shield />
              <h3 className={styles.sectionTitle}>Security</h3>
            </div>
            <p className={styles.smallText}>Password: {'••••••••'}</p>
            <p className={styles.smallText}>Last updated: —</p>
          </div>

          <div className={`${styles.smallCard}`}>
            <div className={styles.iconRow}>
              <Moon />
              <h3 className={styles.sectionTitle}>Preferences</h3>
            </div>
            <p className={styles.smallText}>Dark mode</p>
            <p className={styles.smallText}>Email notifications</p>
          </div>
        </div>

        <div className={styles.header} style={{gridColumn:'1 / -1'}}>
          <p className={styles.helperNote}>Changes are saved securely.</p>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
