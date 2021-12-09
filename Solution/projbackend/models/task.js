const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const taskSchema = new mongoose.Schema(
  {
    taskname: {
      type: String,
      required: true,
    },
    comple_date: {
      type: Date,
      required: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
