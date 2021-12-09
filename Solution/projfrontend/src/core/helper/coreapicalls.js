import { API } from "../../backend";

export const getTasks = () => {
  return fetch(`${API}/tasks`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
