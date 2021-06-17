/*
 * @Description: postcss推荐以此配置文件配置
 * @Author: yufei
 * @Date: 2019-10-14 14:53:33
 * @LastEditors: yufei
 * @LastEditTime: 2019-10-14 15:00:31
 */
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px2rem-exclude": {
      remUnit: 37.5, // 兼容old
      exclude: /examples/
    }
  }
}
