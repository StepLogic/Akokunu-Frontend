import style from "./index.module.css";
import {Button, Modal} from "react-bootstrap";
import axios from "axios"
export default function RoomModal(props) {
    
    let roomName="";
    const handleRoomNameChange=(event)=>{roomName=event.target.value}
    const handleSubmit=(event)=>{
      if(roomName===""){
      }else{
       props.onHide();
      }

    }
    return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Create Room
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <input type="text" placeholder={"Room Name"} onChange={handleRoomNameChange}/> 
      </Modal.Body>
      <Modal.Footer>
          <button className={"btn btn-primary"} onClick={handleSubmit}>Create</button>
          <button className={"btn btn-primary"} onClick={props.onHide}>Close</button>
      </Modal.Footer>
  </Modal>
    );
}