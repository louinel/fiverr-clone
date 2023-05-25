import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://fiverr-clone.mybarjpa.com/",
  withCredentials: true,
});

export default newRequest;