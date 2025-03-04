// src/services/EmployeeService.js
import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(baseUrl);

export const createEmployee = (employee) => axios.post(baseUrl, employee);

export const deleteEmployee = (id) => axios.delete(`${baseUrl}/${id}`);


export const updateEmployee = (id, employeeData) => axios.put(`${baseUrl}/${id}`, employeeData);

export const getEmployeeById = (id) => axios.get(`${baseUrl}/${id}`);
