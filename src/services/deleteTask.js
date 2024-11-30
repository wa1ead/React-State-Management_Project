export default function deleteTask(taskId) {
  //STORING ALL TASKS INTO VARIABLE
  const tasks = JSON.parse(localStorage.getItem("tasks"));

  //FILTERING THE TASKS ARRAY FROM SELECTED TASK
  const updatedTasks = tasks.filter((task) => taskId !== task.id);
  console.log(updatedTasks);

  //SETTING THE NEW ARRAY TO LOCALSTORAGE WITHOUT THE DELETED TASK
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
