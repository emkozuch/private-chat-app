import { AxiosPromise } from "axios";
import { axiosInstance } from "./axiosInstance";
import { UserProfileResponseDto } from "types";

class UsersClient {
  private singleUserRoute = "/user";
  getUserProfile(): AxiosPromise<UserProfileResponseDto> {
    return axiosInstance.get(`${this.singleUserRoute}/profile`);
  }
}

export default new UsersClient();
