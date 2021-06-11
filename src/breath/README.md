---
group: 基础动画
level: 1
---

# breath 呼吸

## 介绍
* 给元素添加呼吸动效

# 代码演示

## 默认

<<< @/src/breath/demo/index.vue#css1

<br />

## 自定义动画完成所需时间

<<< @/src/breath/demo/index.vue#css2

<br />

## 自定义动画呼吸幅度

<<< @/src/breath/demo/index.vue#css3

<br />

## 自定义动画速度曲线

<<< @/src/breath/demo/index.vue#css4

<br />

# API

## 参数

| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| time       | 动画完成所需时间                 | number           | 0.7s  |
| scaleNum   | 呼吸缩放倍数                    | number | 0.95 |
| ease       | 动画速度曲线,可选值 `linear`、`ease`、`ease-in`、`ease-in-out`、`step-start`、`step-end`等 | string | `ease`     |
| iterationcount | 动画在结束前运行的次数,可选值 `infinite`或数值     | number | infinite |
<br />