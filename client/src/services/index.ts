import axios from "axios";
const baseURL = 'http://localhost:9999';

export const login = async (email: string, password: string) => {
    const response = await axios.post(`${baseURL}/users/login`, {
        email,
        password
    });
    return response.data;
}

export const signUp = async (email: string, password: string, firstName: string, lastName: string, address: string) => {
    const response = await axios.post(`${baseURL}/users/register`, {
        email,
        password,
        firstName,
        lastName,
        address
    });
    return response.data;
}

export const bookAppointment = async (data : any) => {
    const response = await axios.post(`${baseURL}/appointments`, data);
    return response.data;
}

export const getAllDoctors = async () => {
    const response = await axios.get(`${baseURL}/doctors`);
    return response.data;
}

export const getUserAppointments = async (userId: string) => {
    const response = await axios.get(`${baseURL}/appointments/user/${userId}`);
    return response.data;
}