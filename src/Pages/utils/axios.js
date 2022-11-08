const axios = require("axios").default;

export default axios.create(
    {
        // baseURL: "http://www.thvirtuallibrary.com:3500",
        // baseURL: "http://localhost:3500",
        baseURL: "https://nimble-crostata-422434.netlify.app",
        withCredentials: true
    });