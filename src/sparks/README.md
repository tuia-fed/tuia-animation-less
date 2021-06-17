---
group: 业务动画
level: 2
---

# sparks 火花

## 介绍
* 常用于元素打开时，乍现火花。

* 火花的动效包含火花样式（即背景图片），用户只需给元素另外绘制样式，如布局定位宽高等

# 代码演示

## 举例

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
  .sparks();
}
```
<br />

## 默认

<<< @/src/sparks/demo/index.vue#css1

<br />
