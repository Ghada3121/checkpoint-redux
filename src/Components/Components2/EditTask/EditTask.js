import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { update_task } from "../../Redux/Actions/action";

const EditTask = ({ show, handleClose, task }) => {
  const [newDescription, setNewDescription] = useState("");
  const handleChange = (e) => {
    setNewDescription(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(update_task({ id: task.id, description: newDescription }));
    handleClose();
  };
  return (
    <div>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="type your task.."
              // onChange={handleChange}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
