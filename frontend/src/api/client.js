import axios from "axios";

// Point to local backend during dev
export const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    timeout: 8000,
});