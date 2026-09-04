const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    district: {
      type: String,
      required: true,
      trim: true,
    },

    area: {
      type: String,
      required: true,
      trim: true,
    },

    problemType: {
      type: String,
      required: true,
      enum: [
        "Illegal Dumping",
        "Uncollected Garbage",
        "Overflowing Bin",
        "Roadside Waste",
        "Waste Burning",
        "Other",
      ],
    },

    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 300,
      trim: true,
    },

    severity: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },

    status: {
      type: String,
      enum: ["Reported", "In Progress", "Resolved"],
      default: "Reported",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Report", reportSchema);
