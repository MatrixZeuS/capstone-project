import styles from './FormField.module.css'

function FormField({ id, label, type = 'text', register, error, description, ...props }) {
  const describedBy = [description ? `${id}-description` : undefined, error ? `${id}-error` : undefined]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`${styles.input} ${error ? styles.invalid : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy || undefined}
        {...register(id)}
        {...props}
      />
      {description && (
        <p className={styles.desc} id={`${id}-description`}>
          {description}
        </p>
      )}
      {error && (
        <p className={styles.err} id={`${id}-error`} role="alert">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default FormField
