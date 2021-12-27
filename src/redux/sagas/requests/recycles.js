import axios from "axios";
import { BASE_API_URL } from "../../../utils/constant";

export function requestGetRecycles() {
  return axios.request({
    method: "GET",
    url: `${BASE_API_URL}/api/recycles`,
    withCredentials: true,
  });
}
