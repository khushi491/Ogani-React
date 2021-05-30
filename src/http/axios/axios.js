import axios from "axios";

const axiosMain = axios.create({
  baseURL: "https://ogani-a64db-default-rtdb.firebaseio.com/",
});

export default axiosMain;
