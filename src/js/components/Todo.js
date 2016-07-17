import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  toggleCompleteStatus(completeToggle) {
    console.log('completeToggle.target.checked', completeToggle.target.checked);
    console.log('this.props.id', this.props.id)
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
        <span>{complete}</span>
      </li>
    );
  }
}
