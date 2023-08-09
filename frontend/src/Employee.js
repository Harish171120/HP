import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Employee() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8081/');
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (ID) => {
    try {
      await axios.delete(`http://localhost:8081/employee/${ID}`);
      fetchEmployees(); // Fetch updated list after deletion
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: 'blue' }}>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success mb-3'>Add+</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((data, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: 'blue', // Set background color to blue
                  color: 'white' // Set text color to white
                }}
              >
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>
                  <Link to={`update/${data.ID}`} className='btn btn-primary'>Update</Link>
                  <button className='btn btn-danger ms-2' onClick={() => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
