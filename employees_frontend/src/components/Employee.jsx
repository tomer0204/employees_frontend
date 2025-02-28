import React from 'react';
import { useForm } from 'react-hook-form';
import { createEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const Employee = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await createEmployee(data);
            console.log(response.data);
            navigate('/employees');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <br /><br />
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">Add Employee</h2>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter employee first name"
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    {...register('firstName', { required: 'First name is required' })}
                                />
                                {errors.firstName && (
                                    <div className="invalid-feedback">{errors.firstName.message}</div>
                                )}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter employee last name"
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    {...register('lastName', { required: 'Last name is required' })}
                                />
                                {errors.lastName && (
                                    <div className="invalid-feedback">{errors.lastName.message}</div>
                                )}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    placeholder="Enter employee email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                                    })}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email.message}</div>
                                )}
                            </div>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;
