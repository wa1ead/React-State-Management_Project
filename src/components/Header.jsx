import { useState } from "react";
import InputModal from "./InputModal";

export default function Header() {
  //THE MODAL STATE
  const [modal, setModal] = useState(false);

  //HANDLING THE OPEN/CLOSE MODAL BUTTON CLICK
  const handleClickModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex p-5 flex-col md:flex-row items-center justify-between">
          <a
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
            href="/"
          >
            <img
              src="/todo_list-icon.png"
              alt="logo"
              width="100"
              height="100"
            />
          </a>
          <button
            className="inline-flex items-center gap-2 text-white bg-green-700 border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0"
            onClick={handleClickModal}
          >
            <i className="fa-solid fa-plus"></i>Add new Task
          </button>
        </div>
      </header>
      {modal && <InputModal onClose={handleClickModal} />}
    </div>
  );
}
