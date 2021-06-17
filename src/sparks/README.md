---
group: 业务动画
level: 2
---

# sparks 火花

## 介绍
* 常用于元素打开时，乍现火花

# 代码演示

## 默认

<<< @/src/sparks/demo/index.vue#css1

<br />

# API

## 参数
.breath(@scaleNum, @duration, @timing-function, @iteration-count)
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| scaleNum   | 呼吸缩放倍数                    | number | 0.95 |
| duration       | 动画完成所需时间                 | number           | 0.7s  |
| timing-function       | 动画速度曲线,可选值 `linear`、`ease`、`ease-in`、`ease-in-out`、`step-start`、`step-end`等 | string | `ease`     |
| iteration-count | 动画在结束前运行的次数,可选值 `infinite`或数值     | number | infinite |
<br />