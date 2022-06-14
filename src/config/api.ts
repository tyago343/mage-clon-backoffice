import Api from "../services/utils/Api";
const host = process.env.REACT_APP_MODE === "DEVELOPMENT" ? "http://localhost:3000" : "production";

const service = new Api(host);
export default service;
