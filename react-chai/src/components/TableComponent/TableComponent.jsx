// TableComponent.js
import React, { useState } from 'react';
import TableModal from './TableModal';

const TableComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);

  const openModal = (rowData) => {
    setSelectedRowData(rowData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRowData(null);
    setIsModalOpen(false);
  };

  // Sample table data
  const tableData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    // Add more rows as needed
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <React.Fragment key={row.id}>
              <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
                
              </tr>
              {index !== tableData.length - 1 && <tr className="line-separator" />}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <TableModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        rowData={selectedRowData}
      />
    </div>
  );
};

export default TableComponent;
