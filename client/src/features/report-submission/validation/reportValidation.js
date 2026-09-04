export const validateReport = (values) => {
  const errors = {};

  if (!values.district) {
    errors.district = "Please select a district.";
  }

  if (!values.area.trim()) {
    errors.area = "Area is required.";
  } else if (values.area.trim().length < 2) {
    errors.area = "Area must contain at least 2 characters.";
  }

  if (!values.problemType) {
    errors.problemType = "Please select a problem type.";
  }

  if (!values.severity) {
    errors.severity = "Please select a severity level.";
  }

  if (!values.description.trim()) {
    errors.description = "Description is required.";
  } else if (values.description.trim().length < 10) {
    errors.description =
      "Description must contain at least 10 characters.";
  } else if (values.description.trim().length > 300) {
    errors.description =
      "Description cannot exceed 300 characters.";
  }

  return errors;
};
