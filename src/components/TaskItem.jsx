import { useState } from "react";
import toast from "react-hot-toast";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import updateCompleted from "../services/updateCompleted";

export default function TaskItem({ task }) {
  //THE MODAL STATE
  const [modal, setModal] = useState(false);
  //THE DELETE POPUP STATE
  const [deleteModal, setDeleteModal] = useState(false);

  //HANDLING THE OPEN/CLOSE MODAL BUTTON CLICK
  const handleClickModal = () => {
    setModal(!modal);
    // console.log(task);
  };

  //HANDLING THE DELETE BUTTON POPUP
  const handleClickDelete = () => {
    setDeleteModal(!deleteModal);
    // console.log(id);
  };

  //HANDLING THE COMPLETED BUTTON CLICK
  const handleCompleted = () => {
    updateCompleted(task.id);
    toast.success("Task Completed");
    window.location.reload();
  };

  return (
    <>
      <div
        className={`relative flex flex-col items-center border border-gray-400 bg-gray-900 p-4 gap-2 rounded-lg ${
          task.completion === false ? "h-48" : "h-28"
        }`}
        key={task.id}
      >
        <button onClick={handleClickModal} className="w-full">
          <h2 className="font-semibold text-gray-200">{task.title}</h2>
          <p
            className={`font-light text-gray-400 ${
              task.completion === false ? "h-24" : ""
            } overflow-clip`}
          >
            {task.description}
          </p>
        </button>
        {task.completion === false ? (
          <div className="w-full flex justify-center items-center absolute bottom-2 gap-6 mt-4 sm:gap-2 ">
            <button
              className="border rounded-full py-1 px-2 bg-yellow-600 transition duration-300 ease-in-out hover:scale-110 hover:bg-yellow-500"
              onClick={handleClickModal}
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              className="border rounded-full py-1 px-2 bg-green-600 transition duration-300 ease-in-out hover:scale-110 hover:bg-green-500"
              onClick={handleCompleted}
            >
              Completed <i class="fa-regular fa-square-check"></i>
            </button>
            <button
              className="border rounded-full py-1 px-2 bg-red-600 transition duration-300 ease-in-out hover:scale-110 hover:bg-red-500"
              onClick={handleClickDelete}
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        ) : null}
      </div>
      {modal && <EditModal task={task} onClose={handleClickModal} />}
      {deleteModal && <DeleteModal task={task} onClose={handleClickDelete} />}
    </>
  );
}
9;
