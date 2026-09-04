const allowedProblemTypes = [
  "Illegal Dumping",
  "Uncollected Garbage",
  "Overflowing Bin",
  "Roadside Waste",
  "Waste Burning",
  "Other",
];

const allowedSeverities = [
  "Low",
  "Medium",
  "High",
];

const validateReportData = (data) => {
  const errors = [];

  if (
    !data.district ||
    typeof data.district !== "string"
  ) {
    errors.push(
      "District is required."
    );
  }

  if (
    !data.area ||
    typeof data.area !== "string" ||
    data.area.trim().length < 2
  ) {
    errors.push(
      "Area must contain at least 2 characters."
    );
  }

  if (
    !allowedProblemTypes.includes(
      data.problemType
    )
  ) {
    errors.push(
      "Please select a valid problem type."
    );
  }

  if (
    !allowedSeverities.includes(
      data.severity
    )
  ) {
    errors.push(
      "Please select a valid severity level."
    );
  }

  if (
    !data.description ||
    typeof data.description !== "string"
  ) {
    errors.push(
      "Description is required."
    );
  } else {
    const description =
      data.description.trim();

    if (
      description.length < 10 ||
      description.length > 300
    ) {
      errors.push(
        "Description must contain between 10 and 300 characters."
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

module.exports = {
  validateReportData,
};
