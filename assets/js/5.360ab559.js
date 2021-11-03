(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{333:function(a,t,s){"use strict";s.r(t);var e=s(37),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速开始"}},[a._v("#")]),a._v(" 快速开始")]),a._v(" "),s("blockquote",[s("p",[a._v("tuia-animation-less致力于提供给程序员愉悦的动画开发体验。")])]),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"_1-创建一个项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建一个项目"}},[a._v("#")]),a._v(" 1. 创建一个项目")]),a._v(" "),s("p",[a._v("可以是已有项目")]),a._v(" "),s("h2",{attrs:{id:"_2-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装"}},[a._v("#")]),a._v(" 2. 安装")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npm install tuia-animation-less --save\n")])])]),s("p",[a._v("或者")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("yarn add tuia-animation-less\n")])])]),s("p",[a._v("或者直接在网页中使用cdn")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<head>\n  <link\n    rel="stylesheet"\n    href=""\n  />\n</head>\n')])])]),s("br"),a._v(" "),s("h2",{attrs:{id:"_3-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用"}},[a._v("#")]),a._v(" 3.使用")]),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"基础使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[a._v("#")]),a._v(" 基础使用")]),a._v(" "),s("br"),a._v(" "),s("p",[a._v("在安装好"),s("code",[a._v("tuia-animate-less")]),a._v("后，给元素添加class "),s("code",[a._v("tuia_animate_animated")]),a._v(" 以及所需的动画名称（不要忘记"),s("code",[a._v("animate_")]),a._v("前缀！）")]),a._v(" "),s("h3",{attrs:{id:"引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用"}},[a._v("#")]),a._v(" 引用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("import 'tuia-animation-less';\n")])])]),s("p",[a._v("举个栗子：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<div class="tuia_animate_animated tuia_animate_bounce">一个动画元素</div>\n')])])]),s("br"),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"使用-less-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-less-函数"}},[a._v("#")]),a._v(" 使用 less 函数")]),a._v(" "),s("p",[a._v("需要支持less函数，在 "),s("code",[a._v("webpack.config.js")]),a._v(" 或者 "),s("code",[a._v("vue.config.js")]),a._v(" 中设置 "),s("code",[a._v("javascriptEnabled: true")]),a._v("。")]),a._v(" "),s("p",[a._v("即使该库为您提供了一些帮助类，例如"),s("code",[a._v("tuia_animated")]),a._v("让您快速运行的类，您也可以直接使用提供的动画"),s("code",[a._v("less函数")]),a._v("。这提供了一种灵活的方式将"),s("code",[a._v("tuia_animate_animated")]),a._v("用于您当前的项目，而无需重构您的HTML代码。")]),a._v(" "),s("h3",{attrs:{id:"引用-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用-2"}},[a._v("#")]),a._v(" 引用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@import '~/node_modules/tuia-animation-less/index';\n")])])]),s("p",[a._v("举个栗子：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".my-element {\n  display: inline-block;\n  margin: 0 0.5rem;\n  bounce(); /* 直接用 less 函数 */\n}\n")])])]),s("br"),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"使用-keyframes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-keyframes"}},[a._v("#")]),a._v(" 使用 @keyframes")]),a._v(" "),s("p",[a._v("还有一种比较更加灵活的使用方式，比起 less 函数要更加灵活，可以直接使用提供的动画"),s("code",[a._v("keyframes")]),a._v("。您可以根据实际需要进行选择。")]),a._v(" "),s("h3",{attrs:{id:"引用-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用-3"}},[a._v("#")]),a._v(" 引用")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("import 'tuia-animation-less';\n")])])]),s("p",[a._v("举个栗子：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(".my-element {\n  display: inline-block;\n  margin: 0 0.5rem;\n  animation: bounce; /* 直接引用 animation 的 @keyframe 声明 */\n  animation-duration: 2s; /* 不要忘记设置 duration! */\n}\n")])])]),s("br"),a._v(" "),s("br"),a._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),s("p",[a._v("欢迎大家有问题提"),s("code",[a._v("issues")])])])}),[],!1,null,null,null);t.default=r.exports}}]);