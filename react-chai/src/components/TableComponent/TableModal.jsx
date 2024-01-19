// TableModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const TableModal = ({ isOpen, closeModal, rowData }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Row Details"
    >
      <h2>Row Details</h2>
      <p>{rowData}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default TableModal;
