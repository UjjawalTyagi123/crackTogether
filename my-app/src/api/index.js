import axios from "axios"

const URL="http://localhost:5000/user"

export const createUsr=(newUser)=>axios.post(URL,newUser)
export const getUrs=()=>axios.get(`${URL}/getall`)
export const getUsersByDomain=(id)=>axios.get(`${URL}/${id}`)