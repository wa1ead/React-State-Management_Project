import React from "react";

export default function Header() {
  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
              src="/todo_list-icon.png"
              alt="logo"
              width="100"
              height="100"
            />
          </a>
          <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Completed
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
