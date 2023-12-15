import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const Forms = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  const uptadeTodo = (title, id, finished) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, finished } : todo
    );
    setTodos(newTodo);
    setEdit("");
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodos([...todos, { id: uuidv4(), title: input, finished: false }]);
      setInput("");
    } else {
      uptadeTodo(input, edit.id, edit.finished);
    }
  };

  return (
    <>
      <Form onSubmit={formSubmit}>
        <Form.Group
          className="mb-3 d-flex gap-2 justify-content-center "
          controlId="formBasicText"
        >
          <Form.Control
            className="w-75"
            type="text"
            placeholder="Enter a Todo..."
            required
            value={input}
            onChange={inputChange}
          />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
      <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
    </>
  );
};

export default Forms;
