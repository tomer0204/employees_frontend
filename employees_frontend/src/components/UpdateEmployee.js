// src/components/UpdateEmployee.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../services/EmployeeService';

const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [errors, setErrors] = useState({});


    useEffect(() => {
        async function fetchEmployee() {
            try {
                const response = await getEmployeeById(id);
                setEmployee(response.data);
            } catch (error) {
                console.error("Error fetching employee:", error);
            }
        }
        fetchEmployee();
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };


    const validateForm = () => {
        let valid = true;
        let validationErrors = {};

        if (!employee.firstName.trim()) {
            validationErrors.firstName = "First name is required";
            valid = false;
        }
        if (!employee.lastName.trim()) {
            validationErrors.lastName = "Last name is required";
            valid = false;
        }
        if (!employee.email.trim()) {
            validationErrors.email = "Email is required";
            valid = false;
        }

        setErrors(validationErrors);
        return valid;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const response = await updateEmployee(id, employee);
            console.log("Employee updated:", response.data);
            navigate('/employees');
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    return (
        <div className="container">
            <h2 className="text-center">Update Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label className="form-label">First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                        placeholder="Enter employee first name"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                        placeholder="Enter employee last name"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
                <div className="form-group mb-2">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={employee.email}
                        onChange={handleChange}
                        placeholder="Enter employee email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <button type="submit" className="btn btn-success mt-2" >
                    Update Employee
                </button>
            </form>
        </div>
    );
};

export default UpdateEmployee;
