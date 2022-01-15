import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHanler() {
    setModalIsOpen(true);

    console.log("clicked");
   console.log(props.text);
   
  }
  function closeModalHandler(){
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHanler}>  Delete  </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel= {closeModalHandler}/>}
    </div>
  );
}

export default Todo;
