import React from "react";

export default function TaskList() {
  return (
    <section className="bg-gray-950 text-gray-300">
      <div className="container mx-auto">
        <h1 className="text-lg font-semibold text-center pt-4 pb-12 md:font-bold md:text-2xl md:pt-10 md:pb-20">
          All TASKS
        </h1>
        <div className="grid grid-cols-1 mx-20 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center border border-gray-400 p-4 gap-2 rounded-lg ">
            <h2 className="font-semibold text-gray-200">TITLE</h2>
            <p className="font-light text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              recusandae accusamus praesentium rerum quidem fugit. Architecto
              ex, error facere nostrum voluptate aperiam quo mollitia nulla
              sint, magnam eligendi iusto excepturi?
            </p>
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
