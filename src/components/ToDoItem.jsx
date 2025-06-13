import { useRef, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ToDoItem = (props) => {
  const dialog = useRef();

  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(props.todo.title);

  const OpenModal = (isEditing) => {
    setEditing(isEditing);

    dialog.current.showModal();
  };

  const ClickOutsideModal = (e) => {
    if (e.target === dialog.current) {
      CloseModal();
    }
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    if (editing) {
      const task = {
        title: title,
        date: props.todo.date,
      };
      props.EditTask(task, props.id);
    } else {
      props.DeleteTask(props.id);
    }
    CloseModal();
  };

  const CloseModal = () => {
    dialog.current.close();
  };

  return (
    <>
      <li className="flex bg-white rounded shadow-sm p-4 mt-4">
        <div className="flex gap-x-4 mr-auto items-center">
          <div className="h-4 w-4 rounded-full shadow-sm text-white text-sm bg-green-300"></div>

          <div>
            <p className="font-semibold text-gray-800">{props.todo.title}</p>

            <p className="text-sm text-gray-400">{props.todo.date}</p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <button
            onClick={() => OpenModal(true)}
            type="button"
            className="to-do-button"
          >
            <MdEdit />
          </button>

          <button
            onClick={() => OpenModal(false)}
            type="button"
            className="to-do-button"
          >
            <MdDelete />
          </button>
        </div>
      </li>

      <dialog
        ref={dialog}
        onClick={ClickOutsideModal}
        className="w-[450px] rounded-md mx-auto mt-60"
      >
        <form onSubmit={SubmitForm} className="p-6">
          <h3 className="text-xl font-semibold">
            {editing ? "Edit Task" : "Delet Task"}
          </h3>
          <div className="mt-2">
            {editing ? (
              <input
                type="text"
                className="foucus:outline-none w-full rounded py-2 px-3 border"
                maxLength="30"
                placeholder="Type someting here"
                autoFocus
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              "This will delete permanently."
            )}
          </div>

          <div className="mt-12 text-end">
            <button
              onClick={CloseModal}
              type="button"
              className="default-button mr-3"
            >
              Close
            </button>

            <button type="submit" className="default-button">
              {editing ? "Edit" : "Delete"}
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default ToDoItem;
