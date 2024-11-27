import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks }) {
  return (
    <section className="bg-gray-950 text-gray-300">
      <div className="container mx-auto h-[80vh] py-4 md:py-10">
        <h1 className="text-lg font-semibold text-center pt-4 pb-12 md:font-bold md:text-2xl md:pt-8 md:pb-20">
          All TASKS
        </h1>
        <div className="grid grid-cols-1 mx-20 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tasks.map((task) => (
            <TaskItem task={task} />
          ))}
        </div>
      </div>
    </section>
  );
}
