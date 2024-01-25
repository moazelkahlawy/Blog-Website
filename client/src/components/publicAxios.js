import axios from "axios";

const publiceAxios = axios.create({
  baseURL: "http://localhost:5000",
});

export default publiceAxios