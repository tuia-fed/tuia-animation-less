(function(t){function e(e){for(var n,i,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={index:0},s={index:0},o=[];function c(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-d6497796":"c679f846"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a={"chunk-d6497796":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-d6497796":"2b1df467"}[t]+".css",s=r.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[t],f.parentNode.removeChild(f),a(o)},f.href=s,0!==f.href.indexOf(window.location.origin+"/")&&(f.crossOrigin="anonymous");var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=c(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",d.name="ChunkLoadError",d.type=n,d.request=i,a[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/tuia-animation-less/demo/",r.oe=function(t){throw console.error(t),t};var l=window["webpack4JsonpIsArray"]=window["webpack4JsonpIsArray"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("c31f")},"03a3":function(t,e,a){},"0cfc":function(t,e){},"0d1f":function(t,e,a){"use strict";a("38bf")},"14a8":function(t,e,a){"use strict";a("03a3")},1678:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-fadeIn"},[a("demo-tip",{staticClass:"flex",attrs:{card:"",text:"想看效果，请点击"}},[a("div",{staticClass:"tip ele1"})]),a("demo-block",{attrs:{card:"",title:"基础用法-水平移动"}},[a("div",{class:{tuia_animate_animated:!0,tuia_animate_moveX:t.activeX,ele1:!0},on:{click:function(e){return t.handleShow("activeX")}}})]),a("demo-block",{attrs:{card:"",title:"基础用法-垂直移动"}},[a("div",{class:{tuia_animate_animated:!0,tuia_animate_moveY:t.activeY,ele1:!0},on:{click:function(e){return t.handleShow("activeY")}}})]),a("demo-block",{attrs:{card:"",title:"less函数-水平移动"}},[a("div",{class:["ele1","box2",t.action2?"action":""],on:{click:function(e){return t.handleShow("action2")}}})]),a("demo-block",{attrs:{card:"",title:"less函数-垂直移动"}},[a("div",{class:["ele1","box1",t.action1?"action":""],on:{click:function(e){return t.handleShow("action1")}}})]),a("demo-block",{attrs:{card:"",title:"@keyframes-水平移动"}},[a("div",{class:{ele1:!0,tuia_animate_animated:!0,box3:t.isActiveKeyframesX},on:{click:function(e){return t.handleShow("isActiveKeyframesX")}}})]),a("demo-block",{attrs:{card:"",title:"@keyframes-垂直移动"}},[a("div",{class:{ele1:!0,tuia_animate_animated:!0,box4:t.isActiveKeyframesY},on:{click:function(e){return t.handleShow("isActiveKeyframesY")}}})])],1)},i=[],s={name:"move",data:function(){return{activeX:!1,activeY:!1,action1:!1,action2:!1,isActiveKeyframesX:!1,isActiveKeyframesY:!1}},methods:{handleShow:function(t){var e=this;this[t]=!this[t],setTimeout((function(){e[t]=!0}),0),setTimeout((function(){e[t]=!1}),1e3)}}},o=s,c=(a("14a8"),a("0c7c")),r=Object(c["a"])(o,n,i,!1,null,"70494c94",null);e["default"]=r.exports},"17d9":function(t,e,a){},"21ef":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-shake"},[a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{staticClass:"btn-box"},[a("div",{staticClass:"tuia_animate_animated tuia_animate_shake ele2"})])]),a("demo-block",{attrs:{card:"",title:"基础用法急剧抖动"}},[a("div",{staticClass:"btn-box"},[a("div",{staticClass:"tuia_animate_animated tuia_animate_shakeHurried ele2"})])]),a("demo-block",{attrs:{card:"",title:"less函数"}},[a("div",{staticClass:"btn-box box1"},[a("div",{staticClass:"ele2"})])]),a("demo-block",{attrs:{card:"",title:"less函数自定义用法"}},[a("div",{staticClass:"btn-box box2"},[a("div",{staticClass:"ele2"})])]),a("demo-block",{attrs:{card:"",title:"less函数急促抖动新用法"}},[a("div",{staticClass:"btn-box box3"},[a("div",{staticClass:"ele2"})])]),a("demo-block",{attrs:{card:"",title:"less函数急促抖动自定义"}},[a("div",{staticClass:"btn-box box4"},[a("div",{staticClass:"ele2"})])]),a("demo-block",{attrs:{card:"",title:"@keyframes"}},[a("div",{staticClass:"btn-box box5"},[a("div",{staticClass:"ele2"})])]),a("demo-block",{attrs:{card:"",title:"@keyframes急剧抖的"}},[a("div",{staticClass:"btn-box box6"},[a("div",{staticClass:"ele2"})])])],1)},i=[]},"242e":function(t,e,a){"use strict";a("e477")},2576:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-fadeIn"},[a("demo-tip",{staticClass:"flex",attrs:{card:"",text:"想看效果，请点击"}},[a("div",{staticClass:"tip ele1"})]),a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{class:{tuia_animate_animated:!0,tuia_animate_fadeIn:t.active,ele1:!0},on:{click:t.handleEvent}})]),a("demo-block",{attrs:{card:"",title:"less函数"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMask1,expression:"showMask1"}],staticClass:"btn-box box1",on:{click:function(e){t.showMask1=!1}}}),a("div",{staticClass:"ele1",on:{click:function(e){t.showMask1=!t.showMask1}}})]),a("demo-block",{attrs:{card:"",title:"less函数自定义"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showMask2,expression:"showMask2"}],staticClass:"btn-box box2",on:{click:function(e){t.showMask2=!1}}}),a("div",{staticClass:"ele1",on:{click:function(e){t.showMask2=!t.showMask2}}})]),a("demo-block",{attrs:{card:"",title:"@keyframes"}},[a("div",{class:{ele1:!0,tuia_animate_animated:!0,box3:t.isActiveKeyframes},on:{click:t.handleKeyframseEvent}})])],1)},i=[],s={name:"fadeIn",data:function(){return{showMask1:!1,showMask2:!1,active:!1,isActiveKeyframes:!1}},methods:{handleEvent:function(){var t=this;this.active=!1,setTimeout((function(){t.active=!0}),0)},handleKeyframseEvent:function(){var t=this;this.isActiveKeyframes=!1,setTimeout((function(){t.isActiveKeyframes=!0}),0)}}},o=s,c=(a("a850"),a("0c7c")),r=Object(c["a"])(o,n,i,!1,null,"17440e4d",null);e["default"]=r.exports},"2a9b":function(t,e,a){"use strict";a.r(e);var n=a("21ef"),i=a("bd04");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("0d1f");var o=a("0c7c"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"74fd2e76",null);e["default"]=c.exports},"38bf":function(t,e,a){},"39fd":function(t,e,a){},"3f41":function(t,e,a){},"3f6a":function(t,e,a){},"4dff":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-rotate"},[a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{staticClass:"tuia_animate_animated tuia_animate_rotate ele1"})]),a("demo-block",{attrs:{card:"",title:"less函数"}},[a("div",{staticClass:"btn-box ele1 box1"})]),a("demo-block",{attrs:{card:"",title:"less函数自定义用法"}},[a("div",{staticClass:"btn-box ele1 box2"})]),a("demo-block",{attrs:{card:"",title:"@keyframes"}},[a("div",{staticClass:"btn-box ele1 box3"})])],1)},i=[]},"556a":function(t,e,a){var n={"./bounce/demo/index.vue":"790c","./breathe/demo/index.vue":"90f2","./coin/demo/index.vue":"6703","./fadeIn/demo/index.vue":"2576","./fadeOut/demo/index.vue":"a69b","./move/demo/index.vue":"1678","./rotate/demo/index.vue":"760f","./shake/demo/index.vue":"2a9b","./sparks/demo/index.vue":"875f","./wave/demo/index.vue":"6905"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="556a"},"5b88":function(t,e,a){"use strict";a("17d9")},6100:function(t,e,a){},6703:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-sparks"},[a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"tuia_animate_animated tuia_animate_coin"}),a("div",{staticClass:"button",on:{click:function(e){return t.handleBtnClick("active")}}},[t._v("点击出现")])]),a("demo-block",{attrs:{card:"",title:"倒置金币方向"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}],staticClass:"box box2"}),a("div",{staticClass:"button",on:{click:function(e){return t.handleBtnClick("show2")}}},[t._v("点击出现")])]),a("demo-block",{attrs:{card:"",title:"第二种金币"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show3,expression:"show3"}],staticClass:"box box3"}),a("div",{staticClass:"button",on:{click:function(e){return t.handleBtnClick("show3")}}},[t._v("点击出现")])])],1)},i=[],s={name:"sparks",data:function(){return{active:!1,show1:!1,show2:!1,show3:!1}},methods:{handleBtnClick:function(t){var e=this;this[t]=!0,setTimeout((function(){e[t]=!1}),1e3)}}},o=s,c=(a("a6f6"),a("0c7c")),r=Object(c["a"])(o,n,i,!1,null,"0a0360aa",null);e["default"]=r.exports},6905:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-wave"},[a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{staticClass:"tuia_animate_animated tuia_animate_wave box ele"})]),a("demo-block",{attrs:{card:"",title:"less函数"}},[a("div",{staticClass:"box box1"})]),a("demo-block",{attrs:{card:"",title:"less函数自定义动画完成所需时间"}},[a("div",{staticClass:"box box2"})]),a("demo-block",{attrs:{card:"",title:"less函数自定义手势幅度"}},[a("div",{staticClass:"box box3"})]),a("demo-block",{attrs:{card:"",title:"@keyframes"}},[a("div",{staticClass:"box box4 ele"})])],1)},i=[],s={name:"wave"},o=s,c=(a("86d2"),a("0c7c")),r=Object(c["a"])(o,n,i,!1,null,"1e114f46",null);e["default"]=r.exports},"6ca9":function(t,e){},"6ed8":function(t,e,a){"use strict";a.r(e);var n=a("6ca9"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"6f9c":function(t,e,a){},"760f":function(t,e,a){"use strict";a.r(e);var n=a("4dff"),i=a("b4f0");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("a3d0");var o=a("0c7c"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"c8da1514",null);e["default"]=c.exports},"790c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-shake"},[a("demo-tip",{staticClass:"flex",attrs:{card:"",text:"想看效果，请点击"}},[a("div",{staticClass:"tip ele1"})]),a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{ref:"demo1",class:{tuia_animate_animated:!0,tuia_animate_bounce:t.isBounce,ele1:!0,box1:!0},on:{click:function(e){return t.bounce("isBounce")}}})]),a("demo-block",{attrs:{card:"",title:"less 函数"}},[a("div",{ref:"demo1",class:{ele1:!0,box2:t.isBounce2},on:{click:function(e){return t.bounce("isBounce2")}}})]),a("demo-block",{attrs:{card:"",title:"@keyframes"}},[a("div",{ref:"demo1",class:{ele1:!0,tuia_animate_animated:!0,box3:t.isBounce3},on:{click:function(e){return t.bounce("isBounce3")}}})])],1)},i=[],s={name:"bounce",data:function(){return{isBounce:!1,isBounce2:!1,isBounce3:!1}},mounted:function(){var t=this;this.$nextTick((function(){setTimeout((function(){t.isBounce=!0,t.isBounce2=!0,t.isBounce3=!0}),0)}))},methods:{bounce:function(t){var e=this;this[t]=!1,setTimeout((function(){e[t]=!0}),0)}}},o=s,c=(a("bd99"),a("0c7c")),r=Object(c["a"])(o,n,i,!1,null,"133f9f16",null);e["default"]=r.exports},"81e5":function(t,e){},"86d2":function(t,e,a){"use strict";a("6f9c")},"875f":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-sparks"},[a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"box tuia_animate_animated tuia_animate_sparks"}),a("div",{staticClass:"button",on:{click:function(e){return t.handleBtnClick("active")}}},[t._v("点击出现")])]),a("demo-block",{attrs:{card:"",title:"基础用法光火花"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.active2,expression:"active2"}],staticClass:"box tuia_animate_animated tuia_animate_sparksLight"}),a("div",{staticClass:"button",on:{click:function(e){return t.handleBtnClick("active2")}}},[t._v("点击出现")])]),a("demo-block",{attrs:{card:"",title:"less函数"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show1,expression:"show1"}],staticClass:"box box1"}),a("div",{staticClass:"button",on:{click:function(e){return t.handleBtnClick("show1")}}},[t._v("点击出现")])]),a("demo-block",{attrs:{card:"",title:"less函数光火花"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show2,expression:"show2"}],staticClass:"box box2"}),a("div",{staticClass:"button",on:{click:function(e){return t.handleBtnClick("show2")}}},[t._v("点击出现")])])],1)},i=[],s={name:"sparks",data:function(){return{active:!1,active2:!1,show1:!1,show2:!1,show3:!1}},methods:{handleBtnClick:function(t){var e=this;this[t]=!0,setTimeout((function(){e[t]=!1}),600)}}},o=s,c=(a("242e"),a("0c7c")),r=Object(c["a"])(o,n,i,!1,null,"388eb66e",null);e["default"]=r.exports},"8bb9":function(t,e,a){var n={"./bounce/demo":"790c","./breathe/demo":"90f2","./coin/demo":"6703","./fadeIn/demo":"2576","./fadeOut/demo":"a69b","./move/demo":"1678","./rotate/demo":"760f","./shake/demo":"2a9b","./sparks/demo":"875f","./wave/demo":"6905"};function i(t){return Promise.resolve().then((function(){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}var i=n[t];return a(i)}))}i.keys=function(){return Object.keys(n)},i.id="8bb9",t.exports=i},"8fde":function(t,e,a){},"90f2":function(t,e,a){"use strict";a.r(e);var n=a("d080"),i=a("6ed8");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("dbeb");var o=a("0c7c"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"085032db",null);e["default"]=c.exports},9180:function(t,e,a){},9508:function(t,e,a){"use strict";a("ccca")},a3d0:function(t,e,a){"use strict";a("9180")},a69b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-fadeOut"},[a("demo-tip",{staticClass:"flex",attrs:{card:"",text:"想看效果，请点击"}},[a("div",{staticClass:"tip ele1"})]),a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{class:{tuia_animate_animated:!0,tuia_animate_fadeOut:t.active,ele1:!0},on:{click:t.handleEvent}})]),a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{class:["btn-box","ele1","box1",t.box1Active?"active":""],on:{click:function(e){return t.handleReset(0)}}})]),a("demo-block",{attrs:{card:"",title:"自定义用法"}},[a("div",{class:["btn-box","ele1","box2",t.box2Actice?"active":""],on:{click:function(e){return t.handleReset(2)}}})]),a("demo-block",{attrs:{card:"",title:"@keyframes"}},[a("div",{class:{ele1:!0,tuia_animate_animated:!0,box3:t.isActiveKeyframes},on:{click:t.handleKeyframseEvent}})])],1)},i=[],s={name:"fadeOut",data:function(){return{active:!1,showMask1:!0,showMask2:!1,box1Active:!1,box2Actice:!1,isActiveKeyframes:!1}},methods:{handleReset:function(t){var e=this;0===t?(this.box1Active=!0,setTimeout((function(){e.box1Active=!1}),800)):(this.box2Actice=!0,setTimeout((function(){e.box2Actice=!1}),800))},handleEvent:function(){var t=this;this.active=!0,setTimeout((function(){t.active=!1}),800)},handleKeyframseEvent:function(){var t=this;this.isActiveKeyframes=!0,setTimeout((function(){t.isActiveKeyframes=!1}),800)}}},o=s,c=(a("e3a9"),a("0c7c")),r=Object(c["a"])(o,n,i,!1,null,"4021904c",null);e["default"]=r.exports},a6d1:function(t,e,a){},a6f6:function(t,e,a){"use strict";a("6100")},a850:function(t,e,a){"use strict";a("f8c1")},b4f0:function(t,e,a){"use strict";a.r(e);var n=a("0cfc"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},bd04:function(t,e,a){"use strict";a.r(e);var n=a("81e5"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},bd99:function(t,e,a){"use strict";a("bed9")},bed9:function(t,e,a){},c31f:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("b0c0");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"demo-box"},[a("DemoNav"),a("keep-alive",[a("router-view")],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.title?a("div",{staticClass:"demo-nav"},[a("div",{staticClass:"demo-nav__title"},[t._v(t._s(t.title))]),a("svg",{staticClass:"demo-nav__back",attrs:{viewBox:"0 0 1000 1000"},on:{click:t.onBack}},[a("path",{attrs:{fill:"#969799","fill-rule":"evenodd",d:t.path}})])]):t._e()},c=[],r=(a("ac1f"),a("5319"),{data:function(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title:function(){var t=this.$route.meta||{},e=t.name;return e?e.replace(/-/g,""):""}},methods:{onBack:function(){this.$router.replace("/")}}}),l=r,u=(a("c8c3"),a("0c7c")),d=Object(u["a"])(l,o,c,!1,null,"60b22e23",null),f=d.exports,m={components:{DemoNav:f}},v=m,b=(a("e780"),Object(u["a"])(v,i,s,!1,null,null,null)),h=b.exports,k=a("2909"),x=(a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("466d"),a("99af"),a("8c4f")),_=a("556a"),p=/\.\/(\w+)\/demo\/index.vue/,w=[{path:"/",name:"Home",component:function(){return a.e("chunk-d6497796").then(a.bind(null,"6752"))}}],C=_.keys().map((function(t){var e=t.match(p);return e&&(t=e[1]),{path:"/".concat(t),name:t,component:function(){return a("8bb9")("./".concat(t,"/demo"))},meta:{name:t}}})),y=[].concat(Object(k["a"])(C),w);n["a"].use(x["a"]);var O=new x["a"]({mode:"hash",routes:y,scrollBehavior:function(t,e,a){return a||{x:0,y:0}}}),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"doc-demo-block"},[t.title?a("h2",{staticClass:"doc-demo-block__title"},[t._v(t._s(t.title))]):t._e(),t.card?a("div",{staticClass:"doc-demo-block__card"},[t._t("default")],2):t._t("default")],2)},E=[],B={name:"DemoBlock",props:{card:Boolean,title:String}},A=B,j=(a("9508"),Object(u["a"])(A,g,E,!1,null,"c45e388e",null)),T=j.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"doc-demo-section"},[t._t("default")],2)},N=[],K={name:"DemoSection"},S=K,$=(a("5b88"),Object(u["a"])(S,M,N,!1,null,"609719f4",null)),D=$.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"doc-demo-tip"},[t.text?a("h2",{staticClass:"doc-demo-tip__text"},[t._v(t._s(t.text))]):t._e(),t.card?a("div",{staticClass:"doc-demo-tip__card"},[t._t("default")],2):t._t("default")],2)},L=[],I={name:"DemoTip",props:{card:Boolean,text:String}},X=I,Y=(a("dfa7"),Object(u["a"])(X,P,L,!1,null,"781e213a",null)),U=Y.exports;n["a"].component(T.name,T),n["a"].component(D.name,D),n["a"].component(U.name,U),new n["a"]({render:function(t){return t(h)},router:O}).$mount("#app")},c8c3:function(t,e,a){"use strict";a("8fde")},ccca:function(t,e,a){},d080:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("demo-section",{staticClass:"demo-shake"},[a("demo-block",{attrs:{card:"",title:"基础用法"}},[a("div",{staticClass:"tuia_animate_animated tuia_animate_breathe ele1 box1"})]),a("demo-block",{attrs:{card:"",title:"less函数"}},[a("div",{staticClass:"btn-box ele1 box1"})]),a("demo-block",{attrs:{card:"",title:"自定义动画完成所需时间"}},[a("div",{staticClass:"btn-box ele1 box2"})]),a("demo-block",{attrs:{card:"",title:"自定义动画呼吸幅度"}},[a("div",{staticClass:"btn-box ele1 box3"})]),a("demo-block",{attrs:{card:"",title:"自定义动画速度曲线"}},[a("div",{staticClass:"btn-box ele1 box4"})]),a("demo-block",{attrs:{card:"",title:"@keyframes"}},[a("div",{staticClass:"tuia_animate_animated ele1 box5"})])],1)},i=[]},dbeb:function(t,e,a){"use strict";a("3f41")},dfa7:function(t,e,a){"use strict";a("a6d1")},e3a9:function(t,e,a){"use strict";a("39fd")},e477:function(t,e,a){},e780:function(t,e,a){"use strict";a("3f6a")},f8c1:function(t,e,a){}});