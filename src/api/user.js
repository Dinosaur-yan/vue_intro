import http from "../utils/http";

export function login(data) {
  http.post("api/token", data).then((res) => {
    return res.data.data;
  });
}
