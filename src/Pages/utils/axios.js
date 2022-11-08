const axios = require("axios").default;

export default axios.create(
    {
        // baseURL: "http://www.thvirtuallibrary.com:3500",
        // baseURL: "http://localhost:3500",
        baseURL: "https://main.d39mrkdlb1glu4.amplifyapp.com",
        withCredentials: true
    });