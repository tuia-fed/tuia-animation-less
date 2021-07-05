---
group: 基础动画
level: 1
---

# move 位移

## 介绍
* 元素位移

# 代码演示

## 垂直移动

<<< @/src/move/demo/index.vue#css1

<br />

## 水平移动

<<< @/src/move/demo/index.vue#css2

<br />

<br />

# API

## 参数
.move_y(@from, @to, @duration, @timing-function, @delay, @iteration-count)
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| from       |  动画开始位置                  | 百分数或者带`px`的数字            | 100% |
| to       |  动画结束位置                  | 百分数或者带`px`的数字            | 0 |
| duration       | 动画完成所需时间                 | 带`s`的number           | 0.3s  |
| timing-function       | 动画速度曲线,可选值 `linear`、`ease`、`ease-in`、`ease-in-out`、`step-start`、`step-end`等 | string | `ease`     |
| delay     | 动画延迟时间  | number | 0.1s |
| iteration-count | 动画在结束前运行的次数,可选值 `infinite`或数值     | number | `forwards` |
<br />