const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    taskname: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
      required: true,
    },
    compl_date: {
      type: Date,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Task", taskSchema);
