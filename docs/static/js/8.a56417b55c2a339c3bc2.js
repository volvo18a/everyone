webpackJsonp([8,18],{88:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{code:'this.$message.info("info", 2000)\nthis.$message.success("success", 2000)\nthis.$message.warning("warning", 2000)\nthis.$message.danger("danger", 2000)\n'}},methods:{test:function(){this.$message.info("info",2e3)},test1:function(){this.$message.success("success",2e3)},test2:function(){this.$message.warning("warning",2e3)},test3:function(){this.$message.danger("danger",2e3)}}}},359:function(t,e,n){var s,i;s=n(88);var h=n(396);i=s=s||{},"object"!=typeof s["default"]&&"function"!=typeof s["default"]||(i=s=s["default"]),"function"==typeof i&&(i=i.options),i.render=h.render,i.staticRenderFns=h.staticRenderFns,t.exports=s},396:function(module,exports){module.exports={render:function(){with(this)return _h("section",[_m(0)," ",[_h("coding",{attrs:{code:code,title:"基本",content:"只需要传入2个参数，一个是文本，一个是消失时间"}},[_h("y-button",{attrs:{type:"primary"},nativeOn:{click:function(t){test(t)}}},["info"])," ",_h("y-button",{attrs:{type:"primary"},nativeOn:{click:function(t){test1(t)}}},["success"])," ",_h("y-button",{attrs:{type:"primary"},nativeOn:{click:function(t){test2(t)}}},["warning"])," ",_h("y-button",{attrs:{type:"primary"},nativeOn:{click:function(t){test3(t)}}},["danger"])])]," ",_m(1)," ",_m(2)])},staticRenderFns:[function(){with(this)return _h("h1",["message"])},function(){with(this)return _h("h2",["参数设置"])},function(){with(this)return _h("table",[_h("thead",[_h("tr",[_h("th",["属性"])," ",_h("th",["说明"])," ",_h("th",["类型"])," ",_h("th",["默认值"])," ",_h("th",["可选值"])])])," ",_h("tbody",[_h("tr",[_h("td",["content"])," ",_h("td",["内容"])," ",_h("td",[_h("code",["String"])])," ",_h("td",["-"])," ",_h("td",["-"])])," ",_h("tr",[_h("td",["time"])," ",_h("td",["消失时间"])," ",_h("td",[_h("code",["Number"])])," ",_h("td",["1500"])," ",_h("td",["-"])])])])}]}},416:function(t,e,n){t.exports=n(359)}});
//# sourceMappingURL=8.a56417b55c2a339c3bc2.js.map