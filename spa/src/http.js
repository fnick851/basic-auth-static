import axios from "axios";

export default axios.create({
  auth: {
    username: "validuser",
    password: "password"
  },
  baseURL:
    process.env.NODE_ENV === "development"
      ? `https://localhost:${process.env.VUE_APP_PORT}`
      : "/"
});
