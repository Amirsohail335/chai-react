import React, { useState } from 'react';
import Modal from 'react-modal';

const InputModal = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          type="text"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="User Details Modal"
      >
        <h2>User Details</h2>
        <p>Name: {name}</p>
        <p>Mobile Number: {mobile}</p>
        <button onClick={handleModalClose}>Close</button>
        <button onClick={() => alert('Breadcrumb Message')}>
          Confirm and Show Breadcrumb
        </button>
      </Modal>
    </div>
  );
};

export default InputModal;
