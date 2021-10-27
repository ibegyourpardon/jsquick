/*
 * @Author: ibegyourpardon
 * @Date: 2021-10-27 18:31:48
 * @LastEditTime: 2021-10-27 18:48:18
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

  /* 查找日期位于一年中的第几天
    * @param {string} date 日期
    * @return {number} 第几天
    * @example
    * Quick.getDayOfYear('2020-10-27');
    * // => 274
    * Quick.getDayOfYear('2020-10-27T18:31:48.000Z');
    * // => 274
  */
  getDayOfYear(date) {
    const d = new Date(date);
    const n = d.getFullYear();
    const d1 = new Date(n, 0, 1);
    const d2 = new Date(d);
    const diff = (d2 - d1) / 86400000;
    return Math.ceil(diff);
  }

  /* 查找日期是星期几
    * @param {string} date 日期
    * @return {number} 星期几
    * @example
    * Quick.getDayOfWeek('2020-10-27');
    * // => 5
    * Quick.getDayOfWeek('2020-10-27T18:31:48.000Z');
    * // => 5
  */
  getDayOfWeek(date) {
    const d = new Date(date);
    const n = d.getDay();
    return n;
  }

  /* 计算2个日期之间的天数
    * @param {string} startDate 开始日期
    * @param {string} endDate 结束日期
    * @return {number} 天数
    * @example
    * Quick.getDays('2020-10-27', '2020-10-28');
    * // => 1
  */
  getDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = (end - start) / 86400000;
    return Math.ceil(diff);
  }

  /* 清除全部cookie
    * @example
    * Quick.clearAllCookie();
    * // => undefined
  */
  clearAllCookie() {
    const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
      for (let i = keys.length; i--;) {
        document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
      }
    }
  }

  /* 生成随机十六进制颜色
    * @return {string} 颜色
    * @example
    * Quick.randomColor();
    * // => '#ffffff'
  */
  randomColor() {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

  /* 数组去重
    * @param {array} arr 数组
    * @return {array} 数组
    * @example
    * Quick.unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    * // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
    * Quick.unique([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9], true);
    * // => [1, 2, 3, 4, 5, 6, 7, 8, 9]
  */
  unique(arr, isSorted) {
    if (isSorted === undefined) {
      isSorted = false;
    }
    if (isSorted) {
      return arr.filter((item, index, array) => {
        return array.indexOf(item) === index;
      });
    }
    return arr.filter((item, index, array) => {
      return array.indexOf(item) === index && array.lastIndexOf(item) === index;
    });
  }

  /* 回到顶部
    * @example
    * Quick.scrollTop();
    * // => undefined
    * Quick.scrollTop(100);
    * // => undefined
  */
  scrollTop(top) {
    if (top === undefined) {
      top = 0;
    }
    window.scrollTo(0, top);
  }

  /* 滚动到指定元素
    * @param {string} selector 选择器
    * @param {number} time 时间
    * @param {number} offset 偏移量
    * @example
    * Quick.scrollTo('#id', 1000);
    * // => undefined
    * Quick.scrollTo('#id', 1000, 100);
    * // => undefined
  */
  scrollTo(selector, time, offset) {
    if (time === undefined) {
      time = 500;
    }
    if (offset === undefined) {
      offset = 0;
    }
    const target = document.querySelector(selector);
    if (target) {
      const targetOffset = target.offsetTop;
      const targetOffsetTop = targetOffset + offset;
      const targetOffsetBottom = targetOffset - offset;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollTop > targetOffsetTop) {
        this.scrollTop(targetOffsetTop);
      } else if (scrollTop < targetOffsetBottom) {
        this.scrollTop(targetOffsetBottom);
      }
    }
  }

  /* 反转字符串
    * @param {string} str 字符串
    * @return {string} 反转后的字符串
    * @example
    * Quick.reverse('abc');
    * // => 'cba'
    * Quick.reverse('abcdefg');
    * // => 'gfedcba'
  */
  reverse(str) {
    return str.split('').reverse().join('');
  }

  /* 获取用户选择的文本
    * @param {string} selector 选择器
    * @return {string} 文本
    * @example
    * Quick.getSelectionText('#id');
    * // => 'abc'
  */
  getSelectionText(selector) {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(document.querySelector(selector));
    preCaretRange.setEnd(range.startContainer, range.startOffset);
    const start = preCaretRange.toString().length;
    const end = start + range.toString().length;
    return selection.toString();
  }


}