---
group: 基础动画
level: 1
---

# shake 摇动

## 介绍
* 元素摇动。

* 例如在元素收到红包或者金币时需要shake一下，就可以用啦。

<br />

# 代码演示

## 基础
```
<div class="tuia_animate_animated tuia_animate_shake"></div>
```
<br />

## 基础急剧抖动
```
<div class="tuia_animate_animated tuia_animate_shakeHurried"></div>
```
<br />

## less函数

<<< @/src/pages/shake/demo/index.vue#css1

<br />

## less函数自定义

<<< @/src/pages/shake/demo/index.vue#css2

<br />

## less函数急剧抖动

<<< @/src/pages/shake/demo/index.vue#css3

<br />

## less函数急剧抖动自定义
<<< @/src/pages/shake/demo/index.vue#css4

<br />

## @keyframes
<<< @/src/pages/shake/demo/index.vue#css5

<br />

## @keyframes急剧抖动
<<< @/src/pages/shake/demo/index.vue#css6

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

# Code

## 抖动

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="400" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/jOwWNKZ?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>


## 急剧抖动

<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" frameborder="0" height="400" width="100%" scrolling="no" style="width: 100%; overflow:hidden; display:block;" loading="lazy" src="https://codepen.io/xieshiyi/embed/vYZLNGx?height=265&theme-id=dark&default-tab=css%2Cresult&user=eltonmesquita&slug-hash=oNjGGbw&pen-title=Prefers-reduce-motion%20media%20query&name=cp_embed_1"></iframe>