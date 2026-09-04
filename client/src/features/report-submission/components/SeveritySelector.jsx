const SeveritySelector = ({
  value,
  onChange,
  error,
}) => {
  const options = ["Low", "Medium", "High"];

  return (
    <div className="form-group">
      <label>
        Severity
        <span className="required">*</span>
      </label>

      <div className="severity-options">
        {options.map((option) => (
          <label
            key={option}
            className={`severity-option ${
              value === option ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="severity"
              value={option}
              checked={value === option}
              onChange={onChange}
            />

            <span>{option}</span>
          </label>
        ))}
      </div>

      {error && (
        <small className="error-message">{error}</small>
      )}
    </div>
  );
};

export default SeveritySelector;
