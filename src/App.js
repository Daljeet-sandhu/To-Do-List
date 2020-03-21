import React from 'react';
import './App.css';
import todosData from "./todosData";
import Todoitem from "./Todoitem";


class App extends React.Component {
 
  constructor(){
    super()
    this.state = {
      todos :todosData
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    this.setState(prevState =>{
      const updList = prevState.todos.map(todo => {
          if(todo.id == id)
               todo.completed = !todo.completed;
          return todo
       })
      return{
         todos: updList
      }
  })
  }

  render(){
  const todoData  = this.state.todos.map(item => <Todoitem item={item} key={item.id} handleClick={this.handleClick}/>);
  return (
    <div>
      <h1 className = "heading">Todo List</h1>
      <div className = "todo-list">
         {todoData}
      </div>
    </div>
  );
}
}

export default App;
