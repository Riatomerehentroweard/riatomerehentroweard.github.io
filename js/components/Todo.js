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

    var decorationStyle = {
      textDecoration: complete ? 'line-through' : '',
        color: complete ? '#c1c1c1' : 'black',
        paddingRight: '1em'
    };

    var clickableStyle = {
      cursor: 'pointer',
        position: 'absolute',
      right: '-20px',
      top: '5px',
      color: 'red',
      fontSize: '1.5em'
    };

    var completeStyle = {
      position: 'absolute',
      right: '10px'
    };

    return (
      <li class="list-group-item">
        <span style={decorationStyle}>{text}</span>&nbsp;
        <span>{complete}</span>&nbsp;
        <input style={completeStyle} type="checkbox" onClick={this.toggleCompleteStatus.bind(this)}/>&nbsp;
        <span style={clickableStyle} onClick={this.removeItem.bind(this)}>{deleteIcon}</span>
        <br/>
      </li>
    );
  }
}
