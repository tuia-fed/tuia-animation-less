---
group: 业务动画
level: 2
---

# hand 手势

## 介绍
* 常用于大转盘或者刮刮卡手势动画

# 代码演示

## 默认

<<< @/src/hand/demo/index.vue#css1

<br />

## 自定义动画完成所需时间

<<< @/src/hand/demo/index.vue#css2

<br />

## 自定义手势幅度

<<< @/src/hand/demo/index.vue#css3

<br />

# API

## 参数
.handAni(@duration, @fromRotate: 0, @toRotate )
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 0.6s  |
| fromRotate     | 手势开始的角度                   | number           | 0       |
| toRotate        |手势结束的角度                   | number          | 30deg |
<br />