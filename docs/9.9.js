/*!
 * Everyone v1.2.2 (https://yiiu.github.io/everyone)
 * Licensed under the MIT license
 */
webpackJsonp([9],{102:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{test:!1,datas:'<template>\n    <y-popconfirm\n        title="是否删除该文件？"\n        :ok-cbk="dels1"\n    >\n        <y-button slot="html">hello</y-button>\n    </y-popconfirm>\n</template>\n',data1:'<y-popconfirm\n    title="是否删除该文件？"\n    v-model="test"\n>\n    <y-button slot="html">hello</y-button>\n    <div class="footer" slot="btn">\n        <y-button slot="btn" type="ghost" @click.native="test = false">取消</y-button>\n        <y-button slot="btn" @click.native="test = false">确认</y-button>\n    </div>\n</y-popconfirm>'}},methods:{dels1:function(){this.$notify("删除成功")}}}},389:function(t,o,e){var h,n;h=e(102);var d=e(443);n=h=h||{},"object"!=typeof h.default&&"function"!=typeof h.default||(n=h=h.default),"function"==typeof n&&(n=n.options),n.render=d.render,n.staticRenderFns=d.staticRenderFns,t.exports=h},443:function(t,o){t.exports={render:function(){var t=this;return t._h("section",[t._h("h1",["popconfirm"])," ",[t._h("coding",{attrs:{code:t.datas,title:"popconfirm",content:"这样做相比modal会更简洁。"}},[t._h("y-popconfirm",{attrs:{title:"是否删除该文件？","ok-cbk":t.dels1}},[t._h("y-button",{slot:"html"},["hello"])])])," ",t._h("coding",{attrs:{code:t.data1,title:"popconfirm",content:"自定义按钮，可以应用更强的逻辑"}},[t._h("y-popconfirm",{directives:[{name:"model",rawName:"v-model",value:t.test,expression:"test"}],attrs:{title:"是否删除该文件？"},domProps:{value:t.test},on:{input:function(o){t.test=o}}},[t._h("y-button",{slot:"html"},["hello"])," ",t._h("div",{staticClass:"footer",slot:"btn"},[t._h("y-button",{attrs:{type:"ghost"},nativeOn:{click:function(o){t.test=!1}},slot:"btn"},["取消"])," ",t._h("y-button",{nativeOn:{click:function(o){t.test=!1}},slot:"btn"},["确认"])])])])]," ",t._m(0)])},staticRenderFns:[function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["属性"])," ",t._h("th",["说明"])," ",t._h("th",["类型"])," ",t._h("th",["默认值"])," ",t._h("th",["可选值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["slot::html"])," ",t._h("td",["触发目标（必须）"])," ",t._h("td",[t._h("code",["slot"])])," ",t._h("td",["-"])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["slot::btn"])," ",t._h("td",["底部按钮"])," ",t._h("td",[t._h("code",["slot"])])," ",t._h("td",["-"])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["title"])," ",t._h("td",["标题"])," ",t._h("td",[t._h("code",["String"])])," ",t._h("td",["-"])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["trigger"])," ",t._h("td",["触发事件"])," ",t._h("td",[t._h("code",["String"])])," ",t._h("td",[t._h("code",["click"])])," ",t._h("td",[t._h("code",["click"]),",",t._h("code",["hover"]),",",t._h("code",["focus"])])])," ",t._h("tr",[t._h("td",["placement"])," ",t._h("td",["气泡位置"])," ",t._h("td",[t._h("code",["String"])])," ",t._h("td",[t._h("code",["top"])])," ",t._h("td",[t._h("code",["top"]),",",t._h("code",["top-left"]),",",t._h("code",["top-right"]),",",t._h("code",["bottom-left"]),",",t._h("code",["bottom-right"]),",",t._h("code",["left-top"]),",",t._h("code",["left-bottom"]),",",t._h("code",["right-top"]),",",t._h("code",["right-bottom"])])])," ",t._h("tr",[t._h("td",["okBtn"])," ",t._h("td",["确认键按钮选项"])," ",t._h("td",[t._h("code",["Object"])])," ",t._h("td",[t._h("code",['{show:true,text:"确认"}'])])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["okBtn"])," ",t._h("td",["确认键按钮选项"])," ",t._h("td",[t._h("code",["Object"])])," ",t._h("td",[t._h("code",['{show:true,text:"确认"}'])])," ",t._h("td",["-"])])])])}]}},461:function(t,o,e){t.exports=e(389)}});