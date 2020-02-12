import axios from "axios";
import localPort from "@/local-port.js";

export default axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? `https://localhost:${localPort}`
      : "/"
});
