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
  login(username: string, password: string) {
    fetch(`${this.host}${endpoints.LOGIN}`);
  }
}
export default Api;
