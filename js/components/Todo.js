import React from "react";
import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  toggleCompleteStatus(completeToggle) {
    TodoActions.updateTodo(this.props.id);
  }

  render() {
    const { complete, text } = this.props;

    const trashCan = complete ? "\u2716" : "";

    var decoration = {
      textDecoration: complete ? 'line-through' : '',
        color: complete ? '#c1c1c1' : 'black',
    };

    return (
      <li>
        <span style={decoration}>{text}</span>&nbsp;
        <span>{complete}</span>&nbsp;
        <input type="checkbox" onClick={this.toggleCompleteStatus.bind(this)}/>&nbsp;
        <span>{trashCan}</span>
        <br/>
      </li>
    );
  }
}
