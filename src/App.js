import React, { Component } from "react";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodo(localStorage.getItem("todos"));
  }

  getTodo = todosItem => {
    const todos = JSON.parse(todosItem);

    this.setState({ todos });
  };

  handleTodoDelete = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos });

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  handleTodo = todo => {
    const todos = [...this.state.todos, todo];
    todo.id = Math.random();

    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  render() {
    return (
      <div className="wrapper">
        <TodoForm onTodo={this.handleTodo} />
        <Todos todos={this.state.todos} onTodoDelete={this.handleTodoDelete} />
      </div>
    );
  }
}

export default App;
