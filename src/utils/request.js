import axios from "axios";

const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status === 200) {
      return Promise.resolve(response);
    } else {
      const err = getResponseMessage(res);
      let messInfo = res.message ? res.message : err.info;
      return Promise.reject(new Error(messInfo || "Error"));
    }
  },
  (error) => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

const getResponseMessage = (res) => {
  let err = {};
  switch (res.status) {
    case 204:
      err.info = "请求成功处理，没有实体的主体返回";
      break;

    case 400:
      err.info = "请求无效";
      break;

    case 401:
      err.info = "由于长时间未操作，登录已超时，请重新登录";
      break;

    case 403:
      err.info = "拒绝访问";
      break;

    case 404:
      err.info = `请求地址出错`;
      break;

    case 405:
      err.info = `未授权`;
      break;

    case 408:
      err.info = "请求超时";
      break;

    case 500:
      err.info = "服务器内部错误";
      break;

    case 501:
      err.info = "服务未实现";
      break;

    case 502:
      err.info = "网关错误";
      break;

    case 503:
      err.info = "服务不可用";
      break;

    case 504:
      err.info = "网关超时";
      break;

    case 505:
      err.info = "HTTP版本不受支持";
      break;

    default:
      err.info = "网络波动，请重试";
  }
  return err;
};

export default service;
