export default function addTask(task) {
  //CHECKING IF THE TASK ARGUMENT IS PASSED
  if (!task) {
    console.error("No task provided!");
    return;
  }

  //GETTING THE PREVIOUS TASKS FROM LOCALSTORAGE
  const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  //UPDATING THE TASKS ARRAY
  const updatingTasks = [...existingTasks, task];

  //SETTING THE TASKS ARRAY INTO LOCALSTORAGE
  localStorage.setItem("tasks", JSON.stringify(updatingTasks));
  // console.log("Task saved:", task);
}
