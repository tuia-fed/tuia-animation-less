---
group: 基础动画
level: 1
---

# wave 挥动

## 介绍
* 常用于大转盘或者刮刮卡手势动画

<br />


# 代码演示

## 基础
```
<div class="tuia_animate_animated tuia_animate_wave"></div>
```
<br />

## less函数

<<< @/src/wave/demo/index.vue#css1

<br />

## less函数自定义动画完成所需时间

<<< @/src/wave/demo/index.vue#css2

<br />

## less函数自定义手势幅度

<<< @/src/wave/demo/index.vue#css3

<br />

## @keyframes

<<< @/src/wave/demo/index.vue#css4

<br />

# API

## 参数
.wave(@duration, @fromRotate, @toRotate )
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 0.6s  |
| fromRotate     | 元素挥动开始的角度                   | number           | 0       |
| toRotate        |元素挥动结束的角度                   | number          | 30deg |
<br />

# Code

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="400" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/powgzra?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>