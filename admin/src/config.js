import axios from 'axios'


export const axiosInstance = axios.create({
    baseURL : 'http://31.170.165.23/api'
})