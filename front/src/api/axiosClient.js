import axios from "axios"
import queryString from 'query-string'

export const baseUrl = 'http://127.0.0.1:5000/api/'


const axiosClient = axios.create({
    baseURL: baseUrl,
    paramsSerializer: params => queryString.stringify({params})
})
export default axiosClient