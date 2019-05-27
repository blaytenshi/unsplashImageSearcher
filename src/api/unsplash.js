import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 565bbba976119f33ed023d94e2b8d228ae15c090c407284618ee917590150331"
  }
});
