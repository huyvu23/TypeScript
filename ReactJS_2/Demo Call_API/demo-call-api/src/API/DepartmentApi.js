import API from "./Api";

const getAllDepartments = () => {
  return API.get("/departments");
};

export default { getAllDepartments };
