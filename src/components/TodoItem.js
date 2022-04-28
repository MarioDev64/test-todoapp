import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  const { item } = props;

  return (
    <li key={item.id} className="card">
      <p>{item.item}</p>
      <div className="btns">
        <button>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button style={{ color: "green" }}>
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button style={{ color: "red" }}>
          <IoClose />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
