import axios from "axios";
import { BASE_API_URL } from "../../../utils/constant";

export function requestGetReminders() {
  return axios.request({
    method: "GET",
    url: `${BASE_API_URL}/api/reminders`,
    withCredentials: true,
  });
}
