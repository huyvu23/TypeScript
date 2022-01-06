import API from "./Api";

const getAllPosition = () => {
  return API.get("/possitions");
};

export default { getAllPosition };
