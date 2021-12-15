---
group: 基础动画
level: 1
---

# flash 闪光

## 介绍
* 常用于元素双闪效果

# 代码演示

## 基础

```
<div class="tuia_animate_animated tuia_animate_flash"></div>
```

<br />

## less函数

<<< @/src/pages/flash/demo/index.vue#css1

<br />

## less函数自定义

<<< @/src/pages/flash/demo/index.vue#css2

<br />

## @keyframes

<<< @/src/pages/flash/demo/index.vue#css3

<br />

# API

## 参数
.flash(@duration)
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 0.2s  |
<br />

# Code

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="400" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/XWgXPRp?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>