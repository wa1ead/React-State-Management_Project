import React from "react";

export default function Welcome() {
  return (
    <section className="bg-gray-950 text-gray-300">
      <div className="container h-[80vh] mx-auto">
        <h1 className="text-lg font-semibold text-center pt-4 pb-12 md:font-bold md:text-2xl md:pt-10 md:pb-20">
          What's on your MIND today!
        </h1>
        <div>
          <form
            action="POST"
            className="flex flex-col items-center justify-center mx-20"
          >
            <input
              id="title"
              type="text"
              required
              placeholder="First Task"
              className="w-full mb-8 py-4 px-2 bg-transparent border-2 border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:rounded-none"
            />
            <hr />
            <textarea
              id="description"
              type="text"
              className="w-full mb-8 py-4 px-2 bg-transparent border-2 border-gray-400 rounded-md focus:outline-none focus:ring-0 focus:border-t-transparent focus:border-r-transparent focus:border-l-transparent focus:rounded-none "
              rows="5"
            >
              I wanna achieve my DREAMS...
            </textarea>
            <button
              type="submit"
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-2 md:mt-0"
            >
              <i className="fa-solid fa-plus"></i>
              <span className="ml-2">Add</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}