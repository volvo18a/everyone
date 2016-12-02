/*!
 * Everyone v1.2.2 (https://yiiu.github.io/everyone)
 * Licensed under the MIT license
 */
webpackJsonp([16],{94:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o='<template>\n    <y-checkbox v-model="test1" true-label="可用" false-label="不可用"></y-checkbox>\n</template>\n',h='<template>\n    <y-checkbox v-model="test" label="523" :disabled="true">一个小小的checkbox</y-checkbox>\n    <y-checkbox v-model="test" label="1" :disabled="true">一个小小的checkbox</y-checkbox>\n</template>\n',l='<temlate>\n    <y-checkbox-group v-model="test3">\n        <y-checkbox label="523">asd</y-checkbox>\n        <y-checkbox label="2351" content>asd</y-checkbox>\n    </y-checkbox-group>\n</template>\n';t.default={data:function(){return{test:"523",test1:"可用",test2:"",test3:["523"],disabled:o,label:h,group:l}}}},376:function(e,t,o){var h,l;h=o(94);var d=o(429);l=h=h||{},"object"!=typeof h.default&&"function"!=typeof h.default||(l=h=h.default),"function"==typeof l&&(l=l.options),l.render=d.render,l.staticRenderFns=d.staticRenderFns,e.exports=h},429:function(e,t){e.exports={render:function(){var e=this;return e._h("section",[e._h("h1",["Checkbox"])," ",[e._h("coding",{attrs:{code:e.disabled,title:"禁止",content:"可以禁止checkbox的默认事件",lang:"html"}},[e._h("y-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.test,expression:"test"}],attrs:{label:"523",disabled:!0},domProps:{value:e.test},on:{input:function(t){e.test=t}}},["disabled"])," ",e._h("y-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.test,expression:"test"}],attrs:{label:"1",disabled:!0},domProps:{value:e.test},on:{input:function(t){e.test=t}}},["disabled"])])," ",e._h("coding",{attrs:{code:e.label,title:"label",content:"可以指定checkbox的label",lang:"html"}},[e._h("y-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.test1,expression:"test1"}],attrs:{"true-label":"可用","false-label":"不可用"},domProps:{value:e.test1},on:{input:function(t){e.test1=t}}})])," ",e._h("coding",{attrs:{code:e.group,title:"checkbox-group",content:"多个checkbox可以使用checkbox-group",lang:"html"}},[e._h("y-checkbox-group",{directives:[{name:"model",rawName:"v-model",value:e.test3,expression:"test3"}],domProps:{value:e.test3},on:{input:function(t){e.test3=t}}},[e._h("y-checkbox",{attrs:{label:"523"}},["asd"])," ",e._h("y-checkbox",{attrs:{label:"2351",content:""}},["asd"])]),"\n        "+e._s(e.test3)+"\n    "])]," ",e._h("h2",["参数设置"])," ",e._m(0)])},staticRenderFns:[function(){var e=this;return e._h("table",[e._h("thead",[e._h("tr",[e._h("th",["属性"])," ",e._h("th",["说明"])," ",e._h("th",["类型"])," ",e._h("th",["默认值"])," ",e._h("th",["可选值"])])])," ",e._h("tbody",[e._h("tr",[e._h("td",["slot"])," ",e._h("td",["文字"])," ",e._h("td",["slot"])," ",e._h("td",["-"])," ",e._h("td",["-"])])," ",e._h("tr",[e._h("td",["label"])," ",e._h("td",["value"])," ",e._h("td",[e._h("code",["String"]),",",e._h("code",["Number"]),",",e._h("code",["Boolean"])])," ",e._h("td",["Boolean"])," ",e._h("td",["-"])])," ",e._h("tr",[e._h("td",["trueLabel"])," ",e._h("td",["选中value"])," ",e._h("td",[e._h("code",["String"]),",",e._h("code",["Number"]),",",e._h("code",["Boolean"])])," ",e._h("td",["-"])," ",e._h("td",["-"])])," ",e._h("tr",[e._h("td",["falseLabel"])," ",e._h("td",["未选中value"])," ",e._h("td",[e._h("code",["String"]),",",e._h("code",["Number"]),",",e._h("code",["Boolean"])])," ",e._h("td",["-"])," ",e._h("td",["-"])])," ",e._h("tr",[e._h("td",["disable"])," ",e._h("td",["禁用状态"])," ",e._h("td",["-"])," ",e._h("td",["false"])," ",e._h("td",["-"])])," ",e._h("tr",[e._h("td",["content"])," ",e._h("td",["不显示value"])," ",e._h("td",[e._h("code",["Boolean"])])," ",e._h("td",["false"])," ",e._h("td",["-"])])])])}]}},451:function(e,t,o){e.exports=o(376)}});