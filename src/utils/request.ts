// 进行axios二次封装：使用请求与响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
// 第一步，利用axios对象的create方法，去创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
// 第二步，request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config配置对象，headers属性请求头，经常给服务器端携带公共参数
  // 返回配置对象
  return config;
});

// 第三步，添加响应拦截器，响应拦截器
request.interceptors.response.use(
  // 成功的回调，会将服务器返回的成功响应
  (response) => {
    return response.data;
  },
  // 失败的回调，
  (error) => {
    // 处理网络错误
    // msg用于存储错误的网络信息
    let msg = "";
    // http状态码
    const status = error.response.status;
    // 映射错误码
    switch (status) {
      case 401:
        msg = "token过期";
        break;
      case 403:
        msg = "无权访问";
        break;
      case 404:
        msg = "请求地址错误";
        break;
      case 500:
        msg = "服务器出现问题";
        break;
      default:
        msg = "无网络";
    }
    // 提示的错误信息
    ElMessage({
      type: "error",
      message: msg,
    });
    // 将Promise拒绝，并传递错误对象
    return Promise.reject(error);
  },
);

// 对外暴露请求
export default request;
