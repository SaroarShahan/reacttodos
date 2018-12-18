import React from "react";

const Todos = ({ todos, onTodoDelete }) => {
  return (
    <div>
      <div className="todosWrap">
        <ul className="todosList">
          {todos.length ? (
            todos.map(todo => (
              <li key={todo.id} className="todosList__item">
                {todo.content}
                <span
                  className="close-btn"
                  onClick={() => onTodoDelete(todo.id)}
                />
              </li>
            ))
          ) : (
            <p>There is no todo's left for you!</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
