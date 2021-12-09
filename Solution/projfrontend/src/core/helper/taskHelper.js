import { API } from "../../backend";

export const createTask = (userId, token, task) => {
  return fetch(`${API}/task/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateTask = (userId, token, task) => {
  return fetch(`${API}/task/${task.id}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteTask = (userId, token, task) => {
  return fetch(`${API}/task/${task.id}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(task),
  })
    .then((response) => {
      return response.json({
        msg: "Deleted successfully",
      });
    })
    .catch((err) => console.log(err));
};
