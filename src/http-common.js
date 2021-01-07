import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8342",
    heads:{
        "Content-type": "application/json"
    }
})