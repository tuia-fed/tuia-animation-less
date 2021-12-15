---
group: 基础动画
level: 1
---

# fadeInRight 从右边淡入

## 介绍
* 常用于抽屉从右往左拉入，或连击内容入场等。

# 代码演示

## 基础

```
<div class="tuia_animate_animated tuia_animate_fadeInRight"></div>
```

<br />

## less函数

<<< @/src/pages/fadeInRight/demo/index.vue#css1

<br />

## less函数自定义

<<< @/src/pages/fadeInRight/demo/index.vue#css2

<br />

## @keyframes

<<< @/src/pages/fadeInRight/demo/index.vue#css3

<br />


# API

## 参数
.fadeInRight(@duration)
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 0.2s  |
<br />

# Code

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="400" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/PoJWWdV?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>