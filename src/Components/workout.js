import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
    overlay:{
        backgroundColor:"none",
    },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: 400,
  },
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={setModalOpen}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div>Login/Signup</div>

        <button onClick={() => setModalOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default App;