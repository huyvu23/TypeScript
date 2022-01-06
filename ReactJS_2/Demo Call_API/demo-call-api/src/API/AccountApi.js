import API from "./Api";

const getAllAccount = () => {
  return API.get("/accounts");
};

export default { getAllAccount };
