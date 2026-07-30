function FormField({
  id,
  label,
  type = 'text',
  register,
  error,
  description,
  ...props
}) {
  const describedBy = [description ? `${id}-description` : undefined, error ? `${id}-error` : undefined]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={`form-input ${error ? 'invalid' : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy || undefined}
        {...register(id)}
        {...props}
      />
      {description && (
        <p className="field-description" id={`${id}-description`}>
          {description}
        </p>
      )}
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error.message}
        </p>
      )}
    </div>
  )
}

export default FormField
