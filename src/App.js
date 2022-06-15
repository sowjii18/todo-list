// import logo from './logo.svg';
// import './App.css';
// import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
// import { Nav } from 'react-bootstrap'
// import { NavDropdown } from 'react-bootstrap'
// import { InputGroup } from 'react-bootstrap'
// import { FormControl } from 'react-bootstrap'
// import { ListGroup } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";



// function App() {
//   return (
//     <div className="App">
//       <Navbar bg="info" expand="lg">
//   <Container>
//     <Navbar.Brand href="#home">Todo-List</Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ms-auto">
//         <Nav.Link href="#home">Home</Nav.Link>
//         <Nav.Link href="#link">Link</Nav.Link>
//         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//           <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/3">Something</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action/4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>
// <Container className="mt-3">
// <h1 className="text-center">ToDo-List</h1>
// <InputGroup className="mb-3">
//     <FormControl
//       placeholder="Enter Your Task"
//       aria-label="Recipient's username"
//       aria-describedby="addon2"
//     />
//     <InputGroup.Text id="addon2" className="btn btn-info">Add</InputGroup.Text>
//   </InputGroup>
//   <ListGroup>
//         <ListGroup.Item>asdfghjkl</ListGroup.Item>
//   </ListGroup>
//   </Container>
import React, { useState} from "react";
import "./App.css";
// import { InputGroup } from 'react-bootstrap'
// import { FormControl } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'


const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  const handleClick = e => {
    if (e.target.style.textDecoration) {
      e.target.style.removeProperty('text-decoration');
    } else {
      e.target.style.setProperty('text-decoration', 'line-through');
    }
  };

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing();
  }

  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
  
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
            type="checkbox"
            id="completed"
            handeleClick={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            />
            <label class="strikethrough">{todo.completed}</label> 
             
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <span onClick={() => submitEdits(todo.id)}><i class="bi bi-pencil"></i></span>
            ) : (
              <span onClick={() => setTodoEditing(todo.id)}><i class="bi bi-pencil-square"></i></span>
            )}

            <span onClick={() => deleteTodo(todo.id)}><i class="bi bi-trash3-fill"></i></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;



     // 
//     </div>
//   );
// }
//  export default App;