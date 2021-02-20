import { RegExp } from "core-js";

/**
 *   获取年月日
 *   @returns {string}  yyyy-mm-dd
 */
function getDate() {
  const date = new Date();
  return (
    date.getFullYear() +
    "-" +
    addZero(date.getMonth() + 1) +
    "-" +
    addZero(date.getDate())
  );
}

/**
 *   获取时分秒
 *   @returns {string}  hh:mm:ss
 */
function getTime() {
  const date = new Date();
  return (
    addZero(date.getHours()) +
    ":" +
    addZero(date.getMinutes()) +
    ":" +
    addZero(date.getSeconds())
  );
}

/**
 *   如果小于10 ，就补0
 *   @param {string} date
 *   @returns {string}  date
 */
function addZero(item) {
  return item > 9 ? item : "0" + item;
}

/**
 *   转换时间格式
 *   @param {string} date
 *   @param {string} format
 *   @returns {string}  date
 */
function formatDate(_date, format) {
  let date = new Date(_date);
  let time = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    "S+": date.getMilliseconds(),
  };

  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  for (let key in time) {
    if (new RegExp("(" + key + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? time[key]
          : ("00" + time[key]).substr(("" + time[key]).length)
      );
    }
  }

  return format;
}

export default { getDate, getTime, formatDate };
