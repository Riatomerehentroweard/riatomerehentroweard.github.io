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
    event.preventDefault();
  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    var todolist = {
      display: 'inline-block',
      paddingLeft: '25%'
    };

    var title = {
      textAlign: 'center'
    };

    var addInput = {
      float: 'right'
    };

    return (
      <form onSubmit={this.addItem.bind(this)}>
        <h1 style={title}>Todos</h1>
        <div style={addInput}>
          <input onChange={this.saveUserInput.bind(this)} type="text" value={this.state.currentInput} />
          <button type="submit">Add</button> <br/><br/>
        </div>
        <ul style={todolist}>{TodoComponents}</ul>
      </form>
    );
  }
}
