import React, { Component } from 'react';
import TodosList from './todos-list';
import CreateTodos from './create-todos';

const todos = [
  {
    task: 'Add Todo Item',
    isCompleted: true
  },
  {
    task: 'Delete Todo Item',
    isCompleted: true
  },
  {
    task: 'Edit Todo Item',
    isCompleted: true
  },
  {
    task: 'Mark Todo as Completed',
    isCompleted: true
  },
  {
    task: 'Add New Entry Validations',
    isCompleted: true
  },
  {
    task: 'Go to the Gym',
    isCompleted: false
  }
]


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    }
  }
  render() {
    return (
      <div>
        <h1>Noah has a React Todo List</h1>
        <CreateTodos todos={this.state.todos}
          createTask={this.createTask.bind(this)}
          />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
          />
      </div>
    )
  }

  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    })
    this.setState({ todos: this.state.todos })
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos })
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos })
  }
}
