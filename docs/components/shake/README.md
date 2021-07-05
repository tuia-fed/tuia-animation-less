---
group: 基础动画
level: 1
---

# shake 摇动

## 介绍
* 元素摇动。

* 例如在元素收到红包或者金币时需要shake一下，就可以用啦。

# 代码演示

## 默认

<<< @/src/shake/demo/index.vue#css1

<br />

## 自定义

<<< @/src/shake/demo/index.vue#css2

<br />

## 急剧抖动

<<< @/src/shake/demo/index.vue#css3

<br />

## 急剧抖动自定义
<<< @/src/shake/demo/index.vue#css3

<br />


# 参数
### .shake(@duration, @timing-function, @delay, @iteration-count, @direction, @fill-mode)

| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 0.8s  |
| timing-function       | 动画速度曲线,可选值 `linear`、`ease`、`ease-in`、`ease-in-out`、`step-start`、`step-end`等 | string | `ease-out`     |
| delay     | 动画延迟时间  | number | 0.3s |
| iteration-count | 动画在结束前运行的次数,可选值 `infinite`或数值     | number | infinite |
| direction | 指示动画是否反向播放  | string | normal |
| fill-mode | 设置动画在执行之前和之后如何将样式应用于其目标,可选值 `none`、`forward`、`backwards`、`both`、`initial`、`inherit` | string | none |

<br />

### 急剧抖动
### .shakeHurried(@duration, @timing-function, @delay, @iteration-count, @direction, @fill-mode)
| 参数       | 说明                          | 类型               | 默认值     |
| ---------- | ----------------------------- | ------------------ | ---------- |
| duration       | 动画完成所需时间                 | number           | 0.6s  |
| timing-function       | 动画速度曲线,可选值 `linear`、`ease`、`ease-in`、`ease-in-out`、`step-start`、`step-end`等 | string | `linear`     |
| delay     | 动画延迟时间  | number | 0s |
| iteration-count | 动画在结束前运行的次数,可选值 `infinite`或数值     | number | infinite |
| direction | 指示动画是否反向播放  | string | alternate |
| fill-mode | 设置动画在执行之前和之后如何将样式应用于其目标,可选值 `none`、`forward`、`backwards`、`both`、`initial`、`inherit` | string | none |
<br />