import React from "react";

export default function TaskList() {
  return (
    <section className="bg-gray-950 text-gray-300">
      <div className="container mx-auto py-4 md:py-10">
        <h1 className="text-lg font-semibold text-center pt-4 pb-12 md:font-bold md:text-2xl md:pt-8 md:pb-20">
          All TASKS
        </h1>
        <div className="grid grid-cols-1 mx-20 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center border border-gray-400 bg-gray-900 p-4 gap-2 rounded-lg ">
            <h2 className="font-semibold text-gray-200">TITLE</h2>
            <p className="font-light text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              recusandae accusamus praesentium rerum quidem fugit. Architecto
              ex, error facere nostrum voluptate aperiam quo mollitia nulla
              sint, magnam eligendi iusto excepturi?
            </p>
            <div className="w-full flex justify-center items-center gap-6 mt-4 sm:gap-2">
              <button className="border rounded-full py-1 px-2 bg-yellow-600">
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button className="border rounded-full py-1 px-2 bg-green-600">
                Completed <i class="fa-regular fa-square-check"></i>
              </button>
              <button className="border rounded-full py-1 px-2 bg-red-600">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center border border-gray-400 p-4 gap-2 rounded-lg">
            <h2 className="font-semibold text-gray-200">TITLE</h2>
            <p className="font-light text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              recusandae accusamus praesentium rerum quidem fugit. Architecto
              ex, error facere nostrum voluptate aperiam quo mollitia nulla
              sint, magnam eligendi iusto excepturi?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
