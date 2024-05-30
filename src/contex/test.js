import React, { useState } from "react";
import { Modal } from "react-responsive-modal";

export default function ModalExample() {
  let [openOne, setOpenOne] = useState(false);
  let [openTwo, setOpenTwo] = useState(false);
  return (
    <div>
      <button onClick={() => setOpenOne(!openOne)}>open</button>
      <Modal
        open={openOne}
        onClose={() => setOpenOne(!openOne)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <h1>salom</h1>
        <button onClick={() => setOpenTwo(!openTwo)}>och</button>
      </Modal>

      <Modal
        open={openTwo}
        onClose={() => setOpenTwo(!openTwo)}
        center
        classNames={{
          overlay: "customOverlay",
          modal: "customModal",
        }}
      >
        <h1>alek</h1>
      </Modal>
      
    </div>
  );
}
