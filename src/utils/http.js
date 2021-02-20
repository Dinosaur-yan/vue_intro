import request from "./request";

function get(url, params) {
  return request({
    url: url,
    method: "get",
    params: params,
  });
}

function post(url, data) {
  return request({
    url: url,
    method: "post",
    data: data,
  });
}

function put(url, data) {
  return request({
    url: url,
    method: "put",
    data: data,
  });
}

function patch(url, data) {
  return request({
    url: url,
    method: "patch",
    data: data,
  });
}

function remove(url, data) {
  return request({
    url: url,
    method: "delete",
    data: data,
  });
}

export default { get, post, put, patch, remove };
