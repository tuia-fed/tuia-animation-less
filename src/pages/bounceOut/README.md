---
group: 基础动画
level: 1
---

# bounceOut 弹跳出场

## 介绍
* 给元素添加弹跳入场动效。可用于弹窗等

# 代码演示

## 基础

```
<div class="tuia_animate_animated tuia_animate_bounceOut"></div>
```

<br />

## less 动画

<<< @/src/pages/bounceOut/demo/index.vue#css1

<br />

## @keyframes

<<< @/src/pages/bounceOut/demo/index.vue#css2

<br />


# API

## 参数
### .bounceOut(@duration)
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 1s  |
<br />

# Code

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="400" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/MWEbXQR?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>