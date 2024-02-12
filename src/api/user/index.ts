// 统一管理咱们项目用户相关的接口
import request from "@/utils/request";
import type {
  loginFormData,
  loginResponseData,
  userInfoReponseData,
} from "./type";
// 统一管理接口
//项目用户相关的请求地址
enum API {
  LOGIN_URL = "/admin/acl/index/login",
  USERINFO_URL = "/admin/acl/index/info",
  LOGOUT_URL = "/admin/acl/index/logout",
}
// 暴露请求函数
// 登录接口方法
// <请求类型，响应类型>
export const reqLogin = (data: loginFormData) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data);

// 获取用户信息
export const reqUserInfo = () =>
  request.get<any, userInfoReponseData>(API.USERINFO_URL);

// 退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);
