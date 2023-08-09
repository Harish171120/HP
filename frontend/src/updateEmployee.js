import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateEmployee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the employee data using the provided ID
        axios.get(`http://localhost:8081/${id}`)
            .then(res => { 
                
                const { Name, Email } = res.data[0];
                setName(Name);
                setEmail(Email);
            })
            .catch(err => console.log(err));
    }, [id]);

    function handleSubmit(event) {
        event.preventDefault();
        axios.put(`http://localhost:8081/update/${id}`, { name, email })
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Employee</h2>
                    <div className='mb-2'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            className='form-control'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            placeholder='Enter Email'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateEmployee;
