import React from "react";
import Welcome from "./Welcome";
import TaskList from "./TaskList";

export default function Main() {
  const task = true;
  return task ? <TaskList /> : <Welcome />;
}
