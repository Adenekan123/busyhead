import axios from "axios";
import { BASE_API_URL } from "../../../utils/constant";

export function requestGetProfile() {
  return axios.request({
    method: "GET",
    url: `${BASE_API_URL}/api/profile`,
    withCredentials: true,
  });
}
