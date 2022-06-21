import Api from "../services/utils/Api";
let host = process.env.REACT_APP_MODE === "DEVELOPMENT" ? process.env.REACT_APP_API_DEVELOPMENT: "production";
if(!host){
  host = "http://localhost:3000" 
}
const service = new Api(host);
export default service;
