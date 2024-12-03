import { useState } from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  const [showCompleted, setShowCompleted] = useState(false);

  const handleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };
  return (
    <section className="bg-gray-950 text-gray-300">
      <div className="container mx-auto min-h-[80vh] py-4 md:py-10">
        <div>
          <h1 className="text-lg font-semibold text-center pt-4 pb-8 md:font-bold md:text-2xl md:pt-8 md:pb-12">
            All TASKS
          </h1>
          <div className="grid grid-cols-1 mx-20 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tasks.map(
              (task) => task.completion !== true && <TaskItem task={task} />
            )}
          </div>
        </div>
        <div className="flex flex-col mt-24">
          {tasks.map((task) => task.completion === true) ? (
            <button
              className="inline-flex items-center gap-2 text-white bg-green-700 border-0 mx-auto py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mb-8"
              onClick={handleShowCompleted}
            >
              COMPLETED TASKS{" "}
              {showCompleted === false ? (
                <i class="fa-solid fa-chevron-down"></i>
              ) : (
                <i class="fa-solid fa-chevron-up"></i>
              )}
            </button>
          ) : null}
          {showCompleted === true ? (
            <div className="grid grid-cols-1 mx-20 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {tasks.map(
                (task) => task.completion === true && <TaskItem task={task} />
              )}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
