import { useState } from "react";
import deleteTask from "../services/deleteTask";

export default function DeleteModal({ task, onClose }) {
  //DELETING THE SELECTED TASK FUNCTION
  const handleDeleteTask = (e) => {
    e.preventDefault();
    deleteTask(task.id);
    onClose();
    window.location.reload();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative container m-8 sm:mx-40 lg:mx-80">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-400 outline-none focus:outline-none py-4">
            {/*header*/}
            <div className="flex items-center justify-between pb-4 px-4 border-b border-solid border-gray-900 rounded-t">
              <h3 className="text-2xl font-semibold text-gray-950 text-center">
                Are you sure you wanna delete this Task?
              </h3>
              <button onClick={onClose}>
                <span className="bg-transparent text-gray-900 opacity-1 h-6 w-6 text-2xl outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="mt-8 justify-center flex gap-4">
              <button
                className="inline-flex items-center gap-2 text-white bg-red-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"
                onClick={onClose}
              >
                <i class="fa-solid fa-ban"></i>No
              </button>
              <button className="inline-flex items-center gap-2 text-white bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0">
                <i class="fa-solid fa-check" onClick={handleDeleteTask}></i>Yes
              </button>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
    </>
  );
}
