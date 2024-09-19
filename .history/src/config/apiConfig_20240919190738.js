import axios  from "axios"
export const API_BASE_URL = "https://blog-frontend-six-lac.vercel.app/"
export const API_BASE_URL_LOCAL = "http://localhost:8080/"

const jwt = localStorage.getItem("jwt")

export const api = axios.create({
    baseURL:API_BASE_URL_LOCAL,
    headers:{
        // "Authorizations":`Bearer ${jwt}`,
        'Content-Type': "application/json"
    }
})