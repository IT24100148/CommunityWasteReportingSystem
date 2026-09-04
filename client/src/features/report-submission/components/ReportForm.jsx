import { useState } from "react";

import FormField from "./FormField";
import SeveritySelector from "./SeveritySelector";

import { validateReport } from "../validation/reportValidation";
import { submitReport } from "../services/reportSubmissionApi";

const districts = [
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Colombo",
  "Galle",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kandy",
  "Kegalle",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullaitivu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];

const problemTypes = [
  "Illegal Dumping",
  "Uncollected Garbage",
  "Overflowing Bin",
  "Roadside Waste",
  "Waste Burning",
  "Other",
];

const initialValues = {
  district: "",
  area: "",
  problemType: "",
  severity: "",
  description: "",
};

const ReportForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const [submitting, setSubmitting] = useState(false);

  const [successMessage, setSuccessMessage] =
    useState("");

  const [serverError, setServerError] =
    useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSuccessMessage("");
    setServerError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateReport(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setSubmitting(true);
      setServerError("");
      setSuccessMessage("");

      await submitReport({
        district: values.district,
        area: values.area.trim(),
        problemType: values.problemType,
        severity: values.severity,
        description: values.description.trim(),
      });

      setSuccessMessage(
        "Waste issue reported successfully."
      );

      setValues(initialValues);
      setErrors({});
    } catch (error) {
      console.error("Report submission error:", error);

      const message =
        error.response?.data?.message ||
        "Unable to submit the report. Please try again.";

      setServerError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="report-form"
      onSubmit={handleSubmit}
      noValidate
    >
      {successMessage && (
        <div className="form-success">
          ✓ {successMessage}
        </div>
      )}

      {serverError && (
        <div className="form-server-error">
          {serverError}
        </div>
      )}

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="district">
            District
            <span className="required">*</span>
          </label>

          <select
            id="district"
            name="district"
            value={values.district}
            onChange={handleChange}
            className={
              errors.district ? "input-error" : ""
            }
          >
            <option value="">
              Select a district
            </option>

            {districts.map((district) => (
              <option
                key={district}
                value={district}
              >
                {district}
              </option>
            ))}
          </select>

          {errors.district && (
            <small className="error-message">
              {errors.district}
            </small>
          )}
        </div>

        <FormField
          label="Area"
          name="area"
          value={values.area}
          onChange={handleChange}
          error={errors.area}
          placeholder="Example: Nallur"
        />

        <div className="form-group">
          <label htmlFor="problemType">
            Problem Type
            <span className="required">*</span>
          </label>

          <select
            id="problemType"
            name="problemType"
            value={values.problemType}
            onChange={handleChange}
            className={
              errors.problemType
                ? "input-error"
                : ""
            }
          >
            <option value="">
              Select a problem type
            </option>

            {problemTypes.map((type) => (
              <option
                key={type}
                value={type}
              >
                {type}
              </option>
            ))}
          </select>

          {errors.problemType && (
            <small className="error-message">
              {errors.problemType}
            </small>
          )}
        </div>

        <SeveritySelector
          value={values.severity}
          onChange={handleChange}
          error={errors.severity}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">
          Description
          <span className="required">*</span>
        </label>

        <textarea
          id="description"
          name="description"
          rows="6"
          value={values.description}
          onChange={handleChange}
          placeholder="Describe the waste issue and where it is located..."
          className={
            errors.description
              ? "input-error"
              : ""
          }
        />

        <div className="textarea-footer">
          <div>
            {errors.description && (
              <small className="error-message">
                {errors.description}
              </small>
            )}
          </div>

          <small>
            {values.description.length}/300
          </small>
        </div>
      </div>

      <button
        type="submit"
        className="submit-report-button"
        disabled={submitting}
      >
        {submitting
          ? "Submitting..."
          : "Submit Waste Report"}
      </button>
    </form>
  );
};

export default ReportForm;
