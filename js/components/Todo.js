import React from "react";
import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  toggleCompleteStatus() {
    TodoActions.updateTodo(this.props.id);
  }

    removeItem() {
        TodoActions.deleteTodo(this.props.id);
    }

  render() {
    const { complete, text } = this.props;

    const deleteIcon = complete ? "\u2716" : "";

    var decoration = {
      textDecoration: complete ? 'line-through' : '',
        color: complete ? '#c1c1c1' : 'black',
    };

    var clickable = {
      cursor: 'pointer'
    };

    return (
      <li>
        <span style={decoration}>{text}</span>&nbsp;
        <span>{complete}</span>&nbsp;
        <input type="checkbox" onClick={this.toggleCompleteStatus.bind(this)}/>&nbsp;
        <span style={clickable} onClick={this.removeItem.bind(this)}>{deleteIcon}</span>
        <br/>
      </li>
    );
  }
}
