# 快速开始
>tuia-animation-less致力于提供给程序员愉悦的动画开发体验。

<br />

## 1. 创建一个项目
可以是已有项目

## 2. 安装

```
npm install tuia-animation-less --save
```
或者
```
yarn add tuia-animation-less
```
或者直接在网页中使用cdn
```
<head>
  <link
    rel="stylesheet"
    href=""
  />
</head>
```
<br />

## 3.使用

<br />

## 基础使用
<br />

在安装好`tuia-animate-less`后，给元素添加class `tuia_animate_animated` 以及所需的动画名称（不要忘记`animate_`前缀！）
### 引用
```
import 'tuia-animation-less';
```
举个栗子：
```
<div class="tuia_animate_animated tuia_animate_bounce">一个动画元素</div>
```
<br />
<br />

## 使用 less 函数
需要支持less函数，在 `webpack.config.js` 或者 `vue.config.js` 中设置 `javascriptEnabled: true`。

即使该库为您提供了一些帮助类，例如`tuia_animated`让您快速运行的类，您也可以直接使用提供的动画`less函数`。这提供了一种灵活的方式将`tuia_animate_animated`用于您当前的项目，而无需重构您的HTML代码。

### 引用
```
@import '~/node_modules/tuia-animation-less/index';
```

举个栗子：
```
.my-element {
  display: inline-block;
  margin: 0 0.5rem;
  bounce(); /* 直接用 less 函数 */
}
```

<br />
<br />

## 使用 @keyframes
还有一种比较更加灵活的使用方式，比起 less 函数要更加灵活，可以直接使用提供的动画`keyframes`。您可以根据实际需要进行选择。
### 引用
```
import 'tuia-animation-less';
```
举个栗子：
```
.my-element {
  display: inline-block;
  margin: 0 0.5rem;
  animation: bounce; /* 直接引用 animation 的 @keyframe 声明 */
  animation-duration: 2s; /* 不要忘记设置 duration! */
}
```

<br />
<br />

## 写在最后
欢迎大家有问题提`issues`