import React, { useState } from "react";

const TableComponent = () => {
  const [previousData, setPreviousData] = useState({});
  const [currentData, setCurrentData] = useState({});

  const handleInputChange = (field, value) => {
    setPreviousData(currentData);
    setCurrentData({ ...currentData, [field]: value });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleInputChange("name", e.target.value)}
        placeholder="Enter name"
      />

      <input
        type="text"
        onChange={(e) => handleInputChange("email", e.target.value)}
        placeholder="Enter email"
      />

      <input
        type="number"
        onChange={(e) => handleInputChange("age", e.target.value)}
        placeholder="Enter age"
      />

      <input
        type="text"
        onChange={(e) => handleInputChange("fatherName", e.target.value)}
        placeholder="Enter father's name"
      />

      {Object.keys(previousData).length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Father's Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{previousData.name}</td>
              <td>{previousData.email}</td>
              <td>{previousData.age}</td>
              <td>{previousData.fatherName}</td>
            </tr>
          </tbody>
        </table>
      )}

      {Object.keys(currentData).length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Father's Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{currentData.name}</td>
              <td>{currentData.email}</td>
              <td>{currentData.age}</td>
              <td>{currentData.fatherName}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;
