import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    content: ""
  };

  handleChange = e => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onTodo(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todoForm">
        <input
          type="text"
          value={this.state.content}
          name="todo"
          className="todoField"
          placeholder="Add todo here..."
          onChange={this.handleChange}
        />
        <button className="add-btn">Add todo</button>
      </form>
    );
  }
}

export default TodoForm;
