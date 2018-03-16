/**
 * Created by 黄球安 on 2017/6/11.
 */
import cookie from "js-cookie";
//删除重复对象
export const unqObj = (data) => {
  const unique = {};
  data.forEach(function (a) {
    unique[JSON.stringify(a)] = 1;
  });
  data = Object.keys(unique).map(function (u) {
    return JSON.parse(u);
  });
  return data;
};
//判断是否为空
export const empty=require('is-empty');
//用户当前信息
export let uu=cookie.getJSON("user");

