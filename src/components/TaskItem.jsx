import { useState } from "react";
import EditModal from "./EditModal";
import deleteTask from "../services/deleteTask";

export default function TaskItem({ task }) {
  //THE MODAL STATE
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  //HANDLING THE OPEN/CLOSE MODAL BUTTON CLICK
  const handleClickModal = () => {
    setModal(!modal);
    console.log(task);
  };

  const handleClickDelete = (id) => {
    setDeleteModal(!deleteModal);
    // console.log(id);
    deleteTask(id);
    window.location.reload();
  };

  return (
    <>
      <div
        className="flex flex-col items-center border border-gray-400 bg-gray-900 p-4 gap-2 rounded-lg "
        key={task.id}
      >
        <button onClick={handleClickModal}>
          <h2 className="font-semibold text-gray-200">{task.title}</h2>
          <p className="font-light text-gray-400">{task.description}</p>
        </button>
        <div className="w-full flex justify-center items-center gap-6 mt-4 sm:gap-2">
          <button
            className="border rounded-full py-1 px-2 bg-yellow-600 transition duration-300 ease-in-out hover:scale-110 hover:bg-yellow-500"
            onClick={handleClickModal}
          >
            <i class="fa-regular fa-pen-to-square"></i>
          </button>
          <button className="border rounded-full py-1 px-2 bg-green-600 transition duration-300 ease-in-out hover:scale-110 hover:bg-green-500">
            Completed <i class="fa-regular fa-square-check"></i>
          </button>
          <button
            className="border rounded-full py-1 px-2 bg-red-600 transition duration-300 ease-in-out hover:scale-110 hover:bg-red-500"
            onClick={() => handleClickDelete(task.id)}
          >
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
      {modal && <EditModal task={task} onClose={handleClickModal} />}
    </>
  );
}
9;
