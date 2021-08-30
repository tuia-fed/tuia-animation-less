---
group: 基础动画
level: 1
---

# rotate 旋转

## 介绍
* 元素旋转

<br />

# 代码演示

## 基础
```
<div class="tuia_animate_animated tuia_animate_rotate"></div>
```
<br />

## less函数

<<< @/src/rotate/demo/index.vue#css1

<br />

## less函数自定义

<<< @/src/rotate/demo/index.vue#css2

<br />

## @keyframes

<<< @/src/rotate/demo/index.vue#css3

<br />

# API

## 参数

.rotate(@duration, @timing-function, @delay, @iteration-count, @direction, @fill-mode) 
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 9s  |
| timing-function       | 动画速度曲线,可选值 `linear`、`ease`、`ease-in`、`ease-in-out`、`step-start`、`step-end`等 | string | `linear`     |
| delay     | 动画延迟时间  | number | 0.1s |
| iteration-count | 动画在结束前运行的次数,可选值 `infinite`或数值     | number | infinite |
| direction | 指示动画是否反向播放  | string | normarl |
| fill-mode | 设置动画在执行之前和之后如何将样式应用于其目标,可选值 `none`、`forward`、`backwards`、`both`、`initial`、`inherit` | string | none |
<br />

# Code

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="400" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/ExXVqZv?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>