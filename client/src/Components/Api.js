import axios from "axios";

const baseURL = "https://jeevandaanbackend.onrender.com";

export default axios.create({ baseURL: baseURL });
