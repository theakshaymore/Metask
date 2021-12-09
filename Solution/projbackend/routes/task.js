const express = require("express");
const router = express.Router();

const {
  getTaskById,
  createTask,
  getTask,
  getAllTask,
  updateTask,
  removeTask,
} = require("../controllers/task");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//params
router.param("userId", getUserById);
router.param("taskId", getTaskById);

//actual routers goes here

//create
router.post("/task/create/:userId", isSignedIn, isAuthenticated, createTask);

//read
router.get("/task/:taskId", getTask);
router.get("/tasks", getAllTask);

//update
router.put(
  "/task/:taskId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateTask
);

//delete

router.delete(
  "/task/:taskId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeTask
);

module.exports = router;
