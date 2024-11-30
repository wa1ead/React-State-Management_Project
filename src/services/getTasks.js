export default function getTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  return tasks || [];
  console.log(tasks);
}
