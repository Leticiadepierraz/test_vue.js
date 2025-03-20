import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://my-json-server.typicode.com/leticiadepierraz/test_vue.js",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
};
