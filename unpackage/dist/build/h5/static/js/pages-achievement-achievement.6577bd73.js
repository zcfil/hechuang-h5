(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-achievement-achievement"],{"106f":function(a,t,e){var n=e("f14e");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var o=e("4f06").default;o("0170fcea",n,!0,{sourceMap:!1,shadowMode:!1})},"2a27":function(a,t,e){"use strict";e.r(t);var n=e("7fac"),o=e("a50d");for(var i in o)"default"!==i&&function(a){e.d(t,a,(function(){return o[a]}))}(i);e("ed66");var r,s=e("f0c5"),u=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"42a4576a",null,!1,n["a"],r);t["default"]=u.exports},"36e6":function(a,t,e){"use strict";e("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e("3b89"),o={data:function(){return{data:[],queryParams:{pageIndex:1,pageSize:10},loadStatus:"loading",isLoadMore:!1}},onShow:function(){this.data=[],this.auto()},onReachBottom:function(){this.isLoadMore||(this.isLoadMore=!0,this.queryParams.pageIndex+=1,this.auto())},onPullDownRefresh:function(){this.data=[],this.queryParams.pageIndex=1,this.auto(),uni.stopPullDownRefresh()},methods:{auto:function(){var a=this;(0,n.lowerLevelPerformance)(this.queryParams).then((function(t){t.data?(a.data=a.data.concat(t.data),t.data.length<a.queryParams.pageSize?(a.isLoadMore=!0,a.loadStatus="nomore"):a.isLoadMore=!1):(a.isLoadMore=!0,a.loadStatus="nomore")}))}}};t.default=o},"7fac":function(a,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return n}));var n={uniLoadMore:e("6681").default},o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"achievement"},[a._l(a.data,(function(t,n){return e("v-uni-view",{key:n,staticClass:"tab"},[e("v-uni-view",[a._v("手机号："+a._s(t.phone))]),e("v-uni-view",[a._v("业绩："+a._s(t.performance))])],1)})),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:a.isLoadMore,expression:"isLoadMore"}]},[e("uni-load-more",{attrs:{status:a.loadStatus}})],1)],2)},i=[]},a50d:function(a,t,e){"use strict";e.r(t);var n=e("36e6"),o=e.n(n);for(var i in n)"default"!==i&&function(a){e.d(t,a,(function(){return n[a]}))}(i);t["default"]=o.a},ed66:function(a,t,e){"use strict";var n=e("106f"),o=e.n(n);o.a},f14e:function(a,t,e){var n=e("24fb");t=n(!1),t.push([a.i,".tab[data-v-42a4576a]{font-size:14px;color:#444;border-top:1px solid #ddd;padding:11px 20px 15px;position:relative}.tab uni-view[data-v-42a4576a]{margin-top:4px}",""]),a.exports=t}}]);