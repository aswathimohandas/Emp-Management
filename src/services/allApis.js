import axios from "axios"
const base_url='https://emp-server-1-5lud.onrender.com'

export const addEmployee=async(data)=>{
    return await axios.post(`${base_url}/addemployee`,data)
}
export const getEmployee=async()=>{
    return await axios.get(`${base_url}/getemployee`)
}
export const updateEmployee=async(data,id)=>{
    return await axios.put(`${base_url}/updateemp/${id}`,data)
}
export const deleteEmployees=async(id)=>{
    return await axios.delete(`${base_url}/deleteemp/${id}`)
}