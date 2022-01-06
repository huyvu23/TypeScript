// tạo file để định nghĩa các thông tin liên quan đến Call API

import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://localhost:8080/api/v1`, // Đường link API gốc
  timeout: 5000, // default is `0` (no timeout)
  responseType: "json", // kiểu dữ liệu trả về.
});

export default axiosClient;
