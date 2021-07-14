import axios from 'axios';

const api = axios.create({
    baseURL: "https://capstone-class-app.herokuapp.com"
})
export default api;