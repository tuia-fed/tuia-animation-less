---
group: 基础动画
level: 1
---

# fadeIn 淡入

## 介绍
* 常用于mask遮盖层淡入动效

# 代码演示

## 默认

<<< @/src/fadeIn/demo/index.vue#css1

<br />

## 自定义

<<< @/src/fadeIn/demo/index.vue#css2

<br />

# API

## 参数
.fadeIn(@duration, @timing-function, @delay)
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 0.2s  |
| timing-function       | 动画速度曲线,可选值 `linear`、`ease`、`ease-in`、`ease-in-out`、`step-start`、`step-end`等 | string | `both`     |
| delay     | 动画延迟时间  | number | 0s |
<br />