import { axiosInstance } from "./axiosInstance";
import { AxiosPromise } from "axios";
import { LoginRequestDto } from "types/apiTypes";

class AuthClient {
  private baseRoute = "/auth";

  login(req: LoginRequestDto): AxiosPromise<void> {
    return axiosInstance.post(`${this.baseRoute}/login`, req);
  }
}

export default new AuthClient();
