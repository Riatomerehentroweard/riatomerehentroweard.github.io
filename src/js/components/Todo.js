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
    const { complete, edit, text } = this.props;

    if (edit) {
      return (
        <li>
          <input value={text} focus="focused"/>
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>&nbsp;
        <input type="checkbox" onClick={this.toggleCompleteStatus.bind(this)}/>
        <br/>
      </li>
    );
  }
}
