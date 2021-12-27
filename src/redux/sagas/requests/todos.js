import axios from "axios";
import useSelect from "../../../hooks/useSelect";
import { BASE_API_URL } from "../../../utils/constant";

export function requestGetTodos() {
  return axios.request({
    method: "GET",
    url: `${BASE_API_URL}/api/todos`,
    withCredentials: true,
  });
}
export function requestArchiveTodos() {
  return axios.request({
    method: "GET",
    url: `${BASE_API_URL}/api/todos`,
  });
}
