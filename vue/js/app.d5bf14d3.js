(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],s=0,p=[];s<i.length;s++)a=i[s],o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},u=[];function a(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"259494ab"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(t),u=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+r+": "+u+")");a.type=r,a.request=u,n[1](a)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var f=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},u=[],a=n("2877"),i={},c=Object(a["a"])(i,o,u,!1,null,null,null),l=c.exports,s=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._v("\n  HOME\n")])},p=[],d=n("d225"),b=n("308d"),v=n("6bb5"),h=n("4e2b"),m=n("9ab4"),y=n("60a3"),g=function(t){function e(){return Object(d["a"])(this,e),Object(b["a"])(this,Object(v["a"])(e).apply(this,arguments))}return Object(h["a"])(e,t),e}(y["b"]);g=m["a"]([Object(y["a"])({components:{}})],g);var j=g,O=j,w=Object(a["a"])(O,f,p,!1,null,null,null),_=w.exports;r["default"].use(s["a"]);var x=new s["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),P=n("2f62");r["default"].use(P["a"]);var k=new P["a"].Store({state:{},mutations:{},actions:{}});r["default"].config.productionTip=!1,new r["default"]({router:x,store:k,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.d5bf14d3.js.map