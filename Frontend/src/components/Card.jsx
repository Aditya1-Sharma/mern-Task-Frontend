import React, { useState } from "react";
import Task from "./Task";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../redux/user/userSlice.js";
const Card = ({
  id,
  title = "Selena Gomez",
  description = "Americal Singer",
  status = "To-Do",
  priority,
  deadline,
}) => {
  const taskdata = { title, description, status, priority };
  // console.log(id);

  const [isUpdate, setIsUpdate] = useState(false);
  // Function to get status color based on the status
  const getStatusColor = (status) => {
    switch (status) {
      case "To-Do":
        return "bg-blue-500";
      case "In Progress":
        return "bg-blue-600";
      case "Under Review":
        return "bg-green-500";
      case "Completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  // Function to get priority color based on the priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-500";
      case "Medium":
        return "text-yellow-500";
      case "Low":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const { tasks } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const UpdateTask = async (e) => {
    setIsUpdate(true);
  };

  const deleteTask1 = async (e) => {
    const res = dispatch(deleteTask(id));
    console.log();
  };

  const onClose = () => {
    setIsUpdate(false);
  };

  return (
    <>
      {isUpdate && (
        <Task
          title={title}
          description={description}
          status={status}
          priority={priority}
          onClose={onClose}
          isUpdate={true}
          id={id}
        />
      )}
      <div className="max-w-xs md:max-w-xs rounded overflow-hidden shadow-lg bg-white p-4">
        {/* Title */}
        <div className="mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base mb-4">{description}</p>

        {/* Status */}
        <div className="flex items-center mb-4">
          <span
            className={`inline-block w-3 h-3 mr-2 rounded-full ${getStatusColor(
              status
            )}`}></span>
          <p className="text-gray-600">Status: {status}</p>
        </div>

        {/* Priority */}
        <div className="flex items-center mb-4">
          <p className={`text-base font-bold ${getPriorityColor(priority)}`}>
            Priority: {priority}
          </p>
        </div>

        {/* Deadline */}
        <div>
          <p className="text-gray-600">
            Deadline: <span className="font-semibold">{deadline}</span>
          </p>
        </div>
        <div className="flex gap-2 justify-evenly">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={UpdateTask}>
            Update
          </button>
          <button
            className="px-2 py-2 bg-blue-500 text-white rounded-md"
            onClick={deleteTask1}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
