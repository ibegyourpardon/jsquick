/*
 * @Author: ibegyourpardon
 * @Date: 2021-10-27 18:31:48
 * @LastEditTime: 2021-10-27 18:42:22
 * @LastEditors: Please set LastEditors
 * @Description: some javascript snippets
 * @FilePath: \undefinedd:\ibegyourpardon\jsquick\quick.js
 */
const Quick = class {

  /* 通过 document.cookie 来查找cookie 的值
    * @param {string} name cookie的名字
    * @return {string} cookie的值
    * @example
    * Quick.getCookie('name');
    * // => 'value'
  */

  getCookie(param) {
    const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
    return cookie(param);
  }

  /* 颜色RGB转16进制
    * @param {string} color 颜色RGB
    * @return {string} 颜色16进制
    * @example
    * Quick.rgbToHex('rgb(255,255,255)');
    * // => '#ffffff'
  */
 rgbToHex(color) {
    if (color.substr(0, 1) === '#') {
      return color;
    }
    const digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    const red = parseInt(digits[2]);
    const green = parseInt(digits[3]);
    const blue = parseInt(digits[4]);
    const rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16);
  }

  /* 复制文本到剪贴板
    * @param {string} text 要复制的文本
    * @example
    * Quick.copyText('hello world');
    * // => 'hello world'
  */
  copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  /* 检查日期是否合法
    * @param {string} date 日期
    * @return {boolean} 是否合法
    * @example
    * Quick.checkDate('2020-10-27');
    * // => true
    * Quick.checkDate('2020-10-27T18:31:48.000Z');
    * // => true
    * Quick.checkDate('2020-10-27T18:31:48.000');
    * // => true
    * Quick.checkDate('2020-10-27T18:31:48');
    * // => true
    * Quick.checkDate('2020-10-27T18:31:48.000+08:00');
    * // => true
    * Quick.checkDate('2020-10-27T18:31:48.000+0800');
    * // => true
    * Quick.checkDate('2020-10-27T18:31:48.000+08');
    * // => true
  */
  checkDate(date) {
    const reg = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(\.\d+)?(Z|([+-])(\d{2}):(\d{2}))?$/;
    if (reg.test(date)) {
      return true;
    }
    return false;
  }
}