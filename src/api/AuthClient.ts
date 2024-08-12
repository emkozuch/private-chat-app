import { axiosInstance } from "./axiosInstance";
import { AxiosPromise } from "axios";
import { LoginRequestDto, RequestAccessRequestDto } from "types/apiTypes";

class AuthClient {
  private baseRoute = "/auth";

  login(req: LoginRequestDto): AxiosPromise<void> {
    return axiosInstance.post(`${this.baseRoute}/login`, req, {
      withCredentials: false,
    });
  }

  requestAccess(req: RequestAccessRequestDto): AxiosPromise<void> {
    return axiosInstance.post(`${this.baseRoute}/request-access`, req, {
      withCredentials: false,
    });
  }
}

export default new AuthClient();
