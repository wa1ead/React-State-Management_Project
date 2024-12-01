export default function updateCompleted(id) {
  //GETTING ALL TASKS FROM LOCALSTORAGE
  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  // console.log(allTasks);

  //SELECTING THE TASK AND CHANGE THE COMPLETION VALUE TO TRUE
  const completedTask = allTasks.map((task) =>
    task.id === id ? { ...task, completion: true } : task
  );
  // console.log(updatedTask);

  //SAVE UPDATED TASK INTO LOCALSTORAGE
  localStorage.setItem("tasks", JSON.stringify(completedTask));
}
