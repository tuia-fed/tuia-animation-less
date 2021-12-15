---
group: 基础动画
level: 1
---

# breathe 呼吸

## 介绍
* 给元素添加呼吸动效

# 代码演示

## 默认

```
<div class="tuia_animate_animated tuia_animate_breathe"></div>
```

<br />

## less函数

<<< @/src/pages/breathe/demo/index.vue#css1

<br />

## 自定义动画完成所需时间

<<< @/src/pages/breathe/demo/index.vue#css2

<br />

## 自定义动画呼吸幅度

<<< @/src/pages/breathe/demo/index.vue#css3

<br />

## 自定义动画速度曲线

<<< @/src/pages/breathe/demo/index.vue#css4

<br />

## @keyframes
<<< @/src/pages/breathe/demo/index.vue#css5
<br />

# API

## 参数
.breathe(@scaleNum, @duration, @timing-function, @iteration-count)
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| scaleNum   | 呼吸缩放倍数                    | number | 0.95 |
| duration       | 动画完成所需时间                 | number           | 0.7s  |
| timing-function       | 动画速度曲线,可选值 `linear`、`ease`、`ease-in`、`ease-in-out`、`step-start`、`step-end`等 | string | `ease`     |
| iteration-count | 动画在结束前运行的次数,可选值 `infinite`或数值     | number | infinite |
<br />

## Code
<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="400" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/GRmbeOq?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>