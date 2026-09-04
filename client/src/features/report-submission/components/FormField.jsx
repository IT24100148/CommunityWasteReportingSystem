const FormField = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        <span className="required">*</span>
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={error ? "input-error" : ""}
      />

      {error && (
        <small className="error-message">{error}</small>
      )}
    </div>
  );
};

export default FormField;
