webpackJsonp([11,24],{98:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{data1:'<y-Pagination :total="5"></y-Pagination>',data2:'<y-Pagination :total="15"></y-Pagination>',data3:'<y-Pagination :total="15" show-quick-jumper></y-Pagination>',data4:'<y-Pagination :total="5" @currentChange="test"></y-Pagination>',data5:'<y-Pagination :total="5" @current-change="test" simple></y-Pagination>'}},methods:{test:function(t){console.log(t)}}}},387:function(t,a,n){var e,h;e=n(98);var o=n(414);h=e=e||{},"object"!=typeof e.default&&"function"!=typeof e.default||(h=e=e.default),"function"==typeof h&&(h=h.options),h.render=o.render,h.staticRenderFns=o.staticRenderFns,t.exports=e},414:function(t,a){t.exports={render:function(){var t=this;return t._h("section",[t._h("h1",["Pagination"])," ",[t._h("coding",{attrs:{title:"基本",content:"基础的分页",code:t.data1,lang:"html"}},[t._h("y-pagination",{attrs:{total:5}})])," ",t._h("coding",{attrs:{title:"超出",content:"页数多于page-size",code:t.data2,lang:"html"}},[t._h("y-pagination",{attrs:{total:15}})])," ",t._h("coding",{attrs:{title:"跳转",content:"添加showQuickJumper",code:t.data3,lang:"html"}},[t._h("y-pagination",{attrs:{total:15,"show-quick-jumper":""}})])," ",t._h("coding",{attrs:{title:"change",content:"@currentChange在页数发生改变时执行，第一个参数是改变的页数(观察console)",code:t.data4,lang:"html"}},[t._h("y-pagination",{attrs:{total:5},on:{"current-change":t.test}})])," ",t._h("coding",{attrs:{title:"simple",content:"simple模式",code:t.data5,lang:"html"}},[t._h("y-pagination",{attrs:{total:5,simple:""},on:{"current-change":t.test}})])]," ",t._h("h2",["参数设置"])," ",t._m(0)," ",t._h("h2",["Events"])," ",t._m(1)])},staticRenderFns:[function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["属性"])," ",t._h("th",["说明"])," ",t._h("th",["类型"])," ",t._h("th",["默认值"])," ",t._h("th",["可选值"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["total"])," ",t._h("td",["总页数"])," ",t._h("td",[t._h("code",["Number"])])," ",t._h("td",["1"])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["defaultCurrent"])," ",t._h("td",["默认显示页数"])," ",t._h("td",[t._h("code",["Number"])])," ",t._h("td",["-"])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["pageSize"])," ",t._h("td",["分页数量"])," ",t._h("td",[t._h("code",["Number"])])," ",t._h("td",["5"])," ",t._h("td",["-"])])," ",t._h("tr",[t._h("td",["showQuickJumper"])," ",t._h("td",["是否显示跳转栏"])," ",t._h("td",[t._h("code",["Boolean"])])," ",t._h("td",["false"])," ",t._h("td")])," ",t._h("tr",[t._h("td",["simple"])," ",t._h("td",["simple模式"])," ",t._h("td",[t._h("code",["Boolean"])])," ",t._h("td",["false"])," ",t._h("td",["-"])])])])},function(){var t=this;return t._h("table",[t._h("thead",[t._h("tr",[t._h("th",["事件名称"])," ",t._h("th",["说明"])," ",t._h("th",["回调参数"])])])," ",t._h("tbody",[t._h("tr",[t._h("td",["current-change"])," ",t._h("td",["页数改变时触发"])," ",t._h("td",["当前页"])])])])}]}},462:function(t,a,n){t.exports=n(387)}});
//# sourceMappingURL=11.a1752a55a72f53191c10.js.map