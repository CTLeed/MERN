import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  // Below array destructure syntax is equivilant to:
  // const newTodoStateArr = useState("");
  // const newTodo = newTodoStateArr[0];
  // const setNewTodo = newTodoStateArr[1];
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, index) => {
      if (idx === index) {
        todo.complete = !todo.complete;
        // To avoid mutating the todo directly, do this:
        // const updatedTodo ={...todo, complete: !todo.complete};
        // return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className="login-box">
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
        <div className="user-box">
          <input onChange={(event) => {
            setNewTodo(event.target.value);
          }} type="text"
            value={newTodo} />
          <label>To Do</label>
        </div>
        <button href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add New
        </button>
      </form >


      {
        todos.map((todo, index) => {
          const todoClasses = [];
          if (todo.complete) {
            todoClasses.push("strike-through");
          }

          return (<div style={{ color: "white" }} key={index}>
            <input onChange={(event) => {
              handleToggleComplete(index);
            }} checked={todo.complete} type="checkbox" />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button style={{ marginLeft: "10px" }} onClick={(event) => {
              handleTodoDelete(index);
            }}>Delete</button>
          </div>
          );
        })
      }
    </div >
  );
}

export default App;
