import hmgRequest from "./request";
import { BASE_URL,TIME_OUT } from "./config";
const hmgReq = new hmgRequest({
  baseURL:BASE_URL,
  timeout:TIME_OUT
})
export default hmgReq