(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-news"],{"0a68":function(e,t,r){"use strict";r.r(t);var n=r("28ff"),o=r("7944");for(var a in o)"default"!==a&&function(e){r.d(t,e,(function(){return o[e]}))}(a);r("3f2f");var i,u=r("f0c5"),l=Object(u["a"])(o["default"],n["b"],n["c"],!1,null,"2363ea8c",null,!1,n["a"],i);t["default"]=l.exports},"0a95":function(e,t,r){"use strict";var n=r("4ea4");r("99af"),r("a9e3"),r("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("b5f5")),a="http://120.76.102.16:9000";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.url="".concat(a).concat(e.url);var t=uni.getStorageSync("token");return""!=t&&(e.header={token:"".concat(t)}),new Promise((function(t,r){e.success=function(e){200==Number(e.data.code)?t(e.data):401==Number(e.data.code)?(o.default.error("token过期，请重新登录"),uni.removeStorageSync("token"),uni.reLaunch({url:"/pages/login/login"})):(o.default.error(e.data.msg),r(e.data.msg))},e.fail=function(e){r(e)},uni.request(e)}))}var u=i;t.default=u},"28ff":function(e,t,r){"use strict";var n;r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"news"},[r("v-uni-view",{staticClass:"title"},[e._v(e._s(e.data.title))]),r("v-uni-view",{staticClass:"content"},[e._v(e._s(e.data.content))])],1)},a=[]},"351b":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("3b89"),o={data:function(){return{data:{}}},onLoad:function(e){this.auto(e.id)},methods:{auto:function(e){var t=this;(0,n.getNewsContent)({id:e}).then((function(e){t.data=e.data}))}}};t.default=o},"3b89":function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.customerRegister=i,t.customerLoginByCode=u,t.customerLoginByPassword=l,t.changePassword=c,t.verificationCode=d,t.placeAnOrder=f,t.tashratePrice=s,t.orderlist=p,t.collectInfo=y,t.withdrawCoin=g,t.getWalletAddress=h,t.withdrawAddress=m,t.rechargeList=v,t.withdrawList=b,t.rechargeById=w,t.withdrawById=j,t.updateWithdrawAddress=O,t.changePayPasswordByCode=P,t.getCustomerPhone=A,t.getNews=L,t.getNewsContent=C,t.getCustomerCode=x,t.settleLogList=N,t.settleLogById=k,t.collectInfo2=B,t.orderProfitList=D,t.orderProfitById=I,t.lowerLevelPerformance=R;var o=n(r("0a95")),a=n(r("4328"));function i(e){return e=a.default.stringify(e),(0,o.default)({url:"/customerRegister?"+e,method:"post"})}function u(e){return e=a.default.stringify(e),(0,o.default)({url:"/customerLoginByCode?"+e,method:"post"})}function l(e){return e=a.default.stringify(e),(0,o.default)({url:"/customerLoginByPassword?"+e,method:"post"})}function c(e){return e=a.default.stringify(e),(0,o.default)({url:"/changePassword?"+e,method:"post"})}function d(e){return e=a.default.stringify(e),(0,o.default)({url:"/verificationCode?"+e,method:"post"})}function f(e){return e=a.default.stringify(e),(0,o.default)({url:"/yun/placeAnOrder?"+e,method:"post"})}function s(e){return(0,o.default)({url:"/yun/tashratePrice",method:"get",data:e})}function p(e){return(0,o.default)({url:"/yun/orderlist",method:"get",data:e})}function y(e){return(0,o.default)({url:"/yun/collectInfo1",method:"get",data:e})}function g(e){return e=a.default.stringify(e),(0,o.default)({url:"/yun/withdrawCoin?"+e,method:"post"})}function h(e){return(0,o.default)({url:"/yun/getWalletAddress",method:"get",data:e})}function m(e){return(0,o.default)({url:"/yun/withdrawAddress",method:"get",data:e})}function v(e){return(0,o.default)({url:"/yun/rechargeList",method:"get",data:e})}function b(e){return(0,o.default)({url:"/yun/withdrawList",method:"get",data:e})}function w(e){return(0,o.default)({url:"/yun/rechargeById",method:"get",data:e})}function j(e){return(0,o.default)({url:"/yun/withdrawById",method:"get",data:e})}function O(e){return e=a.default.stringify(e),(0,o.default)({url:"/yun/updateWithdrawAddress?"+e,method:"post"})}function P(e){return e=a.default.stringify(e),(0,o.default)({url:"/yun/changePayPasswordByCode?"+e,method:"post"})}function A(e){return(0,o.default)({url:"/yun/getCustomerPhone",method:"get",data:e})}function L(e){return(0,o.default)({url:"/getNews",method:"get",data:e})}function C(e){return(0,o.default)({url:"/getNewsContent",method:"get",data:e})}function x(e){return(0,o.default)({url:"/yun/getCustomerCode",method:"get",data:e})}function N(e){return(0,o.default)({url:"/yun/settleLogList",method:"get",data:e})}function k(e){return(0,o.default)({url:"/yun/settleLogById",method:"get",data:e})}function B(e){return(0,o.default)({url:"/yun/collectInfo2",method:"get",data:e})}function D(e){return(0,o.default)({url:"/yun/orderProfitList",method:"get",data:e})}function I(e){return(0,o.default)({url:"/yun/orderProfitById",method:"get",data:e})}function R(e){return(0,o.default)({url:"/yun/lowerLevelPerformance",method:"get",data:e})}},"3f2f":function(e,t,r){"use strict";var n=r("8104"),o=r.n(n);o.a},4127:function(e,t,r){"use strict";var n=r("d233"),o=r("b313"),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,u={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},l=function e(t,r,o,a,i,l,c,d,f,s,p,y){var g=t;if("function"===typeof c)g=c(r,g);else if(g instanceof Date)g=s(g);else if(null===g){if(a)return l&&!y?l(r,u.encoder):r;g=""}if("string"===typeof g||"number"===typeof g||"boolean"===typeof g||n.isBuffer(g)){if(l){var h=y?r:l(r,u.encoder);return[p(h)+"="+p(l(g,u.encoder))]}return[p(r)+"="+p(String(g))]}var m,v=[];if("undefined"===typeof g)return v;if(Array.isArray(c))m=c;else{var b=Object.keys(g);m=d?b.sort(d):b}for(var w=0;w<m.length;++w){var j=m[w];i&&null===g[j]||(v=Array.isArray(g)?v.concat(e(g[j],o(r,j),o,a,i,l,c,d,f,s,p,y)):v.concat(e(g[j],r+(f?"."+j:"["+j+"]"),o,a,i,l,c,d,f,s,p,y)))}return v};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!==typeof i.encoder)throw new TypeError("Encoder has to be a function.");var c="undefined"===typeof i.delimiter?u.delimiter:i.delimiter,d="boolean"===typeof i.strictNullHandling?i.strictNullHandling:u.strictNullHandling,f="boolean"===typeof i.skipNulls?i.skipNulls:u.skipNulls,s="boolean"===typeof i.encode?i.encode:u.encode,p="function"===typeof i.encoder?i.encoder:u.encoder,y="function"===typeof i.sort?i.sort:null,g="undefined"!==typeof i.allowDots&&i.allowDots,h="function"===typeof i.serializeDate?i.serializeDate:u.serializeDate,m="boolean"===typeof i.encodeValuesOnly?i.encodeValuesOnly:u.encodeValuesOnly;if("undefined"===typeof i.format)i.format=o["default"];else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var v,b,w=o.formatters[i.format];"function"===typeof i.filter?(b=i.filter,r=b("",r)):Array.isArray(i.filter)&&(b=i.filter,v=b);var j,O=[];if("object"!==typeof r||null===r)return"";j=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var P=a[j];v||(v=Object.keys(r)),y&&v.sort(y);for(var A=0;A<v.length;++A){var L=v[A];f&&null===r[L]||(O=O.concat(l(r[L],L,P,d,f,s?p:null,b,y,g,h,w,m)))}var C=O.join(c),x=!0===i.addQueryPrefix?"?":"";return C.length>0?x+C:""}},4328:function(e,t,r){"use strict";var n=r("4127"),o=r("9e6a"),a=r("b313");e.exports={formats:a,parse:o,stringify:n}},7944:function(e,t,r){"use strict";r.r(t);var n=r("351b"),o=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},8104:function(e,t,r){var n=r("f721");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=r("4f06").default;o("4db54cb6",n,!0,{sourceMap:!1,shadowMode:!1})},"9e6a":function(e,t,r){"use strict";var n=r("d233"),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,u=n.split(t.delimiter,i),l=0;l<u.length;++l){var c,d,f=u[l],s=f.indexOf("]="),p=-1===s?f.indexOf("="):s+1;-1===p?(c=t.decoder(f,a.decoder),d=t.strictNullHandling?null:""):(c=t.decoder(f.slice(0,p),a.decoder),d=t.decoder(f.slice(p+1),a.decoder)),o.call(r,c)?r[c]=[].concat(r[c]).concat(d):r[c]=d}return r},u=function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i)a=[],a=a.concat(n);else{a=r.plainObjects?Object.create(null):{};var u="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,l=parseInt(u,10);!isNaN(l)&&i!==u&&String(l)===u&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(a=[],a[l]=n):a[u]=n}n=a}return n},l=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,i=/(\[[^[\]]*])/g,l=a.exec(n),c=l?n.slice(0,l.index):n,d=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;d.push(c)}var f=0;while(null!==(l=i.exec(n))&&f<r.depth){if(f+=1,!r.plainObjects&&o.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(l[1])}return l&&d.push("["+n.slice(l.index)+"]"),u(d,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!==typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"===typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"===typeof r.depth?r.depth:a.depth,r.arrayLimit="number"===typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"===typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"===typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"===typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"===typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"===typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"===typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof e?i(e,r):e,u=r.plainObjects?Object.create(null):{},c=Object.keys(o),d=0;d<c.length;++d){var f=c[d],s=l(f,o[f],r);u=n.merge(u,s,r)}return n.compact(u)}},b313:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){var t;while(e.length){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)"undefined"!==typeof t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t},i=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},u=function e(t,r,o){if(!r)return t;if("object"!==typeof r){if(Array.isArray(t))t.push(r);else{if("object"!==typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!==typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=i(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach((function(r,a){n.call(t,a)?t[a]&&"object"===typeof t[a]?t[a]=e(t[a],r,o):t.push(r):t[a]=r})),t):Object.keys(r).reduce((function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t}),a)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},c=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},d=function(e){if(0===e.length)return e;for(var t="string"===typeof e?e:String(e),r="",n=0;n<t.length;++n){var a=t.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},f=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],u=Object.keys(i),l=0;l<u.length;++l){var c=u[l],d=i[c];"object"===typeof d&&null!==d&&-1===r.indexOf(d)&&(t.push({obj:i,prop:c}),r.push(d))}return a(t)},s=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},p=function(e){return null!==e&&"undefined"!==typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))};e.exports={arrayToObject:i,assign:l,compact:f,decode:c,encode:d,isBuffer:p,isRegExp:s,merge:u}},f721:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,".news[data-v-2363ea8c]{padding:30px}.title[data-v-2363ea8c]{text-align:center;font-size:20px;margin-bottom:20px}.content[data-v-2363ea8c]{font-size:15px;text-indent:2em;color:#666}",""]),e.exports=t}}]);