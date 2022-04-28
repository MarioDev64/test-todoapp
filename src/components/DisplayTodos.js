import React from "react";
import TodoItem from "./TodoItem";

const DisplayTodos = () => {
  const sampleItems = [
    { id: 1, item: "Hola Mundo 1" },
    { id: 2, item: "Hola Mundo 2" },
    { id: 3, item: "Hola Mundo 3" },
  ];

  return (
    <div className="displaytodos">
      <div className="buttons">
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <ul>
        {sampleItems.length > 0
          ? sampleItems.map((item) => {
              return <TodoItem key={item.id} item={item} />;
            })
          : "NO TODO LIST"}
      </ul>
    </div>
  );
};

export default DisplayTodos;
