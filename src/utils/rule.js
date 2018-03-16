/**
 * Created by ${黄球安} on 2017/11/2 0002.
 */
const empty=require("is-empty");
/**
 * 正则表达式之密码效验（检验密码含有大写字母，小写字母，数字，特殊符号中的三种及以上）
 */
export function rulePassword(rule, value, callback) {
  if(!empty(value) && !/^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,16}$/.test(value)){
    rule.message='需含有大写字母，小写字母，数字，特殊符号中的三种及以上';
    callback(rule);
  }else{
    callback();
  }
}





