import { useState } from "react";
import addTask from "../services/addTask";

export default function Welcome() {
  //THE TASK DATA STATE
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    completion: false,
  });

  //HANDLING THE USER INPUTTED DATA FUNCTION
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [name]: value,
    }));
  };
  console.log(taskData);

  //SAVING THE NEW TASK FUNCTION
  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(taskData);
    setTaskData({
      title: "",
      description: "",
      completion: false,
    });
    window.location.reload();
  };

  return (
    <section className="bg-gray-950 text-gray-300">
      <div className="container mx-auto">
        <h1 className="text-lg font-semibold text-center pt-4 pb-12 md:font-bold md:text-2xl md:pt-10 md:pb-20">
          What's on your MIND today!
        </h1>
        <div>
          <form
            action="POST"
            className="flex flex-col items-center justify-center mx-20"
            onSubmit={handleAddTask}
          >
            <input
              name="title"
              type="text"
              value={taskData.title}
              required
              placeholder="First Task"
              className="w-full mb-8 py-4 px-2 bg-transparent border-2 border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:rounded-none"
              onChange={handleInputChange}
            />
            <hr />
            <textarea
              name="description"
              type="text"
              className="w-full mb-4 py-4 px-2 bg-transparent border-2 border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:rounded-none md:mb-8"
              rows="5"
              onChange={handleInputChange}
            >
              I wanna achieve my GOALS...!
            </textarea>
            <button
              type="submit"
              className="inline-flex items-center gap-2 text-white bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-2 md:mt-0"
            >
              <i className="fa-solid fa-plus"></i>
              <span>Add</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
