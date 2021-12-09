import React, { useState, useEffect } from "react";
import Base from "./Base";
import AddTask from "./AddTask";
import { getTasks } from "./helper/coreapicalls";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <Base title="Metask" description="My ToDO List" className="my-5 py-5">
        <AddTask />

        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <p>{task.taskname}</p>
            </div>
          );
        })}
      </Base>
    </div>
  );
}
