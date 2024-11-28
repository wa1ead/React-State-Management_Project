import getTasks from "./getTasks";
export default function updateTask(task) {
  //GETTING ALL TASKS FROM LOCALSTORAGE
  const allTasks = getTasks();
  console.log(allTasks);

  // //SELECTING THE TASK TO BE UPDATED
  const updatedTask = allTasks.map((tasky) =>
    tasky.id === task.id ? task : tasky
  );
  console.log(updatedTask);

  //SAVE UPDATED TASK INTO LOCALSTORAGE
  localStorage.setItem("tasks", JSON.stringify(updatedTask));
}
