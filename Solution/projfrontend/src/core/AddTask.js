import React, { useState } from "react";
import { createTask } from "./helper/taskHelper";
import { isAutheticated } from "../auth/helper";

const AddTask = () => {
  const [values, setValues] = useState({
    name: "",
    status: false,
    date: "",
    error: "",
    success: false,
  });

  const { name, date, status, error, success } = values;

  const userId = isAutheticated() && isAutheticated().user._id;
  const token = isAutheticated() && isAutheticated().token;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    createTask(userId, token, { name, status })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            date: "",
            status: false,
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in adding task"));
  };

  const addTaskForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Task Name</label>
              <input
                onChange={handleChange("name")}
                className="form-control"
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Completion Date</label>
              <input
                onChange={handleChange("email")}
                className="form-control"
                type="date"
                value={date}
              />
            </div>

            <button
              onClick={onSubmit}
              className="btn btn-success col-12 rounded mt-4"
            >
              ADD TASK
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New task added successfully
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {successMessage()}
      {errorMessage()}
      {addTaskForm()}
    </div>
  );
};

export default AddTask;
