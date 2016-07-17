import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  saveUserInput(e) {
    this.setState({currentInput: e.target.value});
  }

  addItem() {
    TodoActions.createTodo(this.state.currentInput);
    this.setState({currentInput: ''});
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <h1>Todos</h1>
        <input onChange={this.saveUserInput.bind(this)} type="text" value={this.state.currentInput} />
        <button onClick={this.addItem.bind(this)}>Add</button> <br/><br/>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
