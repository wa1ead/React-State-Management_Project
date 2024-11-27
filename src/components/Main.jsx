import { useState, useEffect } from "react";
import Welcome from "./Welcome";
import TaskList from "./TaskList";
import InputModal from "./InputModal";
import getTasks from "../services/getTasks";

export default function Main() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchAllTasks() {
      try {
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (err) {
        throw err;
      }
    }
    fetchAllTasks();
  }, []);

  console.log(tasks);
  return tasks.length > 0 ? <TaskList tasks={tasks} /> : <Welcome />;
  // return <InputModal />;
}
