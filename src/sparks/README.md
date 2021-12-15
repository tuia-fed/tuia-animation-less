---
group: 业务动画
level: 2
---

# sparks 火花

## 介绍
* 常用于元素打开时，乍现火花。

* 火花的动效包含火花样式（即背景图片），用户只需给元素另外绘制样式，如布局定位宽高等
<br />

# 代码演示

## less函数举例

```
<div class="box"></div>

.box {
  position: fixed;
  top: 400px;
  right: 0;
  left: 0;
  z-index: 10;
  margin: 0 auto;
  .WH(500, 500);
  // 引用爆炸效果less函数
  .sparks();
}
```
<br />

## 基础
注意： 要给火花容器设置宽高！
```
// 爆炸效果1
<div class="tuia_animate_animated tuia_animate_sparks"></div>
// 爆炸效果2
<div class="tuia_animate_animated tuia_animate_sparksLight"></div>
// 爆炸效果3
<div class="tuia_animate_animated tuia_animate_sparks1"></div>
```
<br />

## 爆炸效果1

<<< @/src/sparks/demo/index.vue#css1

<br />

## 爆炸效果2

<<< @/src/sparks/demo/index.vue#css2

<br />

## 爆炸效果3

<<< @/src/sparks/demo/index.vue#css3

<br />

# Code

## 爆炸效果1

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="600" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/XWgXbqo?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>

<br />

## 爆炸效果2

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="600" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/JjJGdmg?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>

## 爆炸效果3

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="600" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/XWepLJW?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>