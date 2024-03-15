import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delete_task, done_task } from "../../Redux/Actions/action";
import EditTask from "../EditTask/EditTask";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const handleDone = (id) => {
    dispatch(done_task(id));
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleSave = () => {};
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>
            {show ? (
              <>
                <input type="text" placeholder="edit text" />
                {""}
                <button>Edit</button>
              </>
            ) : (
              <Card.Text>{task.description}</Card.Text>
            )}
          </Card.Text>
          <Button
            variant={task.done ? "success" : "warning"}
            onClick={() => handleDone(task.id)}
          >
            {task.done ? "Not Done" : "Done"}
          </Button>
          <Button variant="primary" onClick={() => setShow(!show)}>
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => dispatch(delete_task(task.id))}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
      <EditTask
        show={show}
        handleClose={handleClose}
        handleSave={handleSave}
        task={task}
      />
    </>
  );
};

export default TaskItem;
