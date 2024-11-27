import React from "react";

export default function InputModal({ onClose }) {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative container m-8 sm:mx-20 lg:mx-40">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-400 outline-none focus:outline-none py-4">
            {/*header*/}
            <div className="flex items-center justify-between pb-4 px-4 border-b border-solid border-gray-900 rounded-t">
              <h3 className="text-2xl font-semibold text-gray-950 text-center">
                Add new Task
              </h3>
              <button onClick={onClose}>
                <span className="bg-transparent text-gray-900 opacity-1 h-6 w-6 text-2xl outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="my-8 ">
              <form
                action="POST"
                className="flex flex-col items-center justify-center mx-20"
              >
                <input
                  id="title"
                  type="text"
                  required
                  placeholder="Task Title"
                  className="w-full mb-8 py-4 px-2 bg-transparent placeholder:text-gray-700 border-2 border-gray-900 text-gray-950 rounded-md focus:outline-none focus:ring-0 focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:rounded-none"
                />
                <hr />
                <textarea
                  id="description"
                  type="text"
                  className="w-full mb-4 py-4 px-2 bg-transparent border-2 border-gray-900 text-gray-950 rounded-md focus:outline-none focus:ring-0 focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:rounded-none md:mb-8"
                  rows="5"
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
            {/*footer*/}
          </div>
        </div>
      </div>
    </>
  );
}
