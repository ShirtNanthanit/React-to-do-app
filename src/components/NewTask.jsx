import React, { useRef, useState } from "react";

const NewTask = ({ addTask }) => {
  const title = useRef();
  const form = useRef();

  const SubmitForm = (e) => {
    e.preventDefault();

    const task = {
      title: title.current.value,
      date: new Date().toLocaleString(),
    };

    addTask(task);

    form.current.reset();
  };
  return (
    <form
      ref={form}
      onSubmit={SubmitForm}
      className="flex-col flex justify-center items-center"
    >
      <label htmlFor="title" className="text-lg">
        New Tesk
      </label>
      <div className="flex gap-x-2 bg-white rounded-md shadow-sm p-2">
        <input
          type="text"
          id="title"
          className="focus:outline-none"
          maxLength={30}
          placeholder="Type something here.."
          required
          ref={title}
        />
      </div>

      <button
        type="submit"
        className="bg-gray-800  text-white px-3 py-2 rounded font-medium mt-4"
      >
        New Task
      </button>
    </form>
  );
};

export default NewTask;
