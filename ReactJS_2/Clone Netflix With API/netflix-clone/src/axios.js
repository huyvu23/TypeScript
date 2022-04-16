import axios from "axios";

// * TODO tạo ra đối tượng axios với các config của mình bằng hàm
const instance = axios.create({
  // ! Sẽ được đính vào trước bất cứ 1 url nào
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
