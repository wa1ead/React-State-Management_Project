export default function addTask(task) {
  if (!task) {
    console.error("No task provided!");
    return;
  }

  const parsedTask = JSON.stringify(task);
  localStorage.setItem("task", parsedTask);
  console.log("Task saved:", parsedTask);
}
