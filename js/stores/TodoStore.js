import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 235684679,
        text: "Pay Water Bill",
        complete: false
      },
      {
        id: 235684671,
        text: "My new item",
        complete: false
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.unshift({
      id,
      text,
      complete: false,
    });

    // broadcast the 'change' of our Store to our controller-views
    // without this broadcast the store will be update, but the props in the view won't take any notice
    this.emit("change");
  }

  updateTodo(id) {
    var indexOfSelectedItem = this.todos.findIndex(item => item.id === id),
        oldStatus = this.todos[indexOfSelectedItem].complete;

    this.todos[indexOfSelectedItem].complete = !oldStatus;
    this.todos.sort((a,b) => {

      if(a.complete && !b.complete) {
        return 1;
      }

      if(b.complete && !a.complete) {
        return -1;
      }

      return 0;
    });

    this.emit("change");
  }

  deleteTodo(id) {
    var indexOfItemToDelete = this.todos.findIndex(item => item.id === id);
    this.todos.splice(indexOfItemToDelete, 1);
    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
      case "UPDATE_TODO": {
        this.updateTodo(action.id);
        break;
      }
      case "DELETE_TODO": {
        this.deleteTodo(action.id);
        break;
      }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
