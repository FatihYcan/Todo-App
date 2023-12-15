import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { GoCheck } from "react-icons/go";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const TodoList = ({ todos, setTodos, setEdit }) => {
  const handleOkey = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, finished: !item.finished };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const tod = todos.find((todo) => todo.id === id);
    setEdit(tod);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <ListGroup key={todo.id}>
          <Form.Group
            className="mb-3 d-flex gap-2 justify-content-between rounded m-auto form-group "
            controlId="formBasicText"
          >
            <ListGroup.Item
              className={`list ${todo.finished ? "finish" : ""}`}
              type="text"
              onChange={(e) => e.preventDefault()}
            >
              {todo.title}
            </ListGroup.Item>
            <div className="d-flex justify-content-center align-items-center fs-2 icons">
              <GoCheck
                className="text-success"
                onClick={() => handleOkey(todo)}
              />
              <MdEdit
                className="text-warning"
                onClick={() => handleEdit(todo)}
              />
              <MdDelete
                className="text-danger"
                onClick={() => handleDelete(todo)}
              />
            </div>
          </Form.Group>
        </ListGroup>
      ))}
    </>
  );
};

export default TodoList;
