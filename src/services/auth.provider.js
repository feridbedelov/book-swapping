import { setToken, clearToken } from "../utils/token";
import { post } from "../server/utils";
import { apiUrls } from "../server/urlConfig";

function handleRes(data) {
  setToken(data.jwt);
  return data;
}

async function login(formValues) {
  return await post(apiUrls.login, formValues).then(handleRes);
}

async function register(formValues) {
  return await post(apiUrls.user, formValues).then(handleRes);
}

async function logout() {
  clearToken();
}

export { login, register, logout };
