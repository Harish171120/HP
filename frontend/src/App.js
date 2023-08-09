import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateEmployee from './CreateEmployee';
import Employee from './Employee';
import UpdateEmployee from './updateEmployee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/create" element={<CreateEmployee />} />
          <Route path="/update/:id" element={<UpdateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
