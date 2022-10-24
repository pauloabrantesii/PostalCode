import axios from "axios"

 

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/teste"
})


export default api;