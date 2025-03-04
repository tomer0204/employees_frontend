// src/components/DeleteEmployee.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteEmployee } from '../services/EmployeeService';

const DeleteEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function deleteEmp() {
            try {
                await deleteEmployee(id);
                navigate('/employees');
            } catch (error) {
                console.error("Error deleting employee:", error);
            }
        }
        deleteEmp();
    }, [id, navigate]);

    return (
        <div className="container">
            <h2 className="text-center">Deleting Employee...</h2>
        </div>
    );
};

export default DeleteEmployee;
