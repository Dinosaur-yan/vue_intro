import router from "./index";
import { getToken } from "../utils/auth";

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || "Intro";

  const token = getToken();
  if (token) {
    if (to.path === "./login") {
      next({ path: "/" });
    } else {
      next();

      // 获取登录用户信息
      // true next()
      // false 获取用户信息，成功 => 跳转至下一页，失败 => 注销当前账户信息，并跳转至登录页
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
