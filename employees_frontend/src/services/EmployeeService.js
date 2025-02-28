import axios from 'axios';
const baseUrl = 'http://localhost:8080/api/employees';
    export const listEmployees = () => axios.get(baseUrl);
export const createEmployee = (employee) => axios.post(baseUrl, employee);