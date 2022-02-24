/*
 * @Author: Delavin.TnT
 * @LastEditors: Delavin.TnT
 * @Date: 2021-06-10 16:33:33
 * @LastEditTime: 2021-07-23 09:47:32
 */
import sha256 from 'js-sha256'
export const pCompile = (code) => {
  var hash = sha256.sha256(code);
  return hash;
}

export const compileStr = code => {
  let c = String.fromCharCode(code.charCodeAt(0) + code.length);
  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
  }
  return c;
}
