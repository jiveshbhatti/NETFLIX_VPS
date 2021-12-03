import axios from 'axios'


export const axiosInstance = axios.create({
    baseURL : 'https://netflix-api-jiv.herokuapp.com/api'
})