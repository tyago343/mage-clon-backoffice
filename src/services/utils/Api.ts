import axios from "axios";
import endpoints from "./endpoints";

class Api {
  private readonly host: string;
  private readonly methods = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE",
  };
  private readonly endpoints = endpoints;
  constructor(host: string) {
    this.host = host;
  }
  async login(username: string, password: string) {
    try {
      const result = await axios.post(`${this.host}${endpoints.LOGIN}`, { password, username });
      if (result) {
        return await result.data;
      }
    } catch (e: any) {
      return e.response.data;
    }
  }
  async logout() {
    try {
      const result = await axios.get(`${this.host}${endpoints.LOGOUT}`, {
        withCredentials: true,
      });
      if (result) {
        return await result.data;
      }
    } catch (e: any) {
      return e.response.data;
    }
  }
}
export default Api;
