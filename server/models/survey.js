const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    name: String,
    description: {
      type: String,
      default: ""
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("survey", surveySchema);
