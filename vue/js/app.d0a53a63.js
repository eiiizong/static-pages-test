(function(t){function a(a){for(var s,c,o=a[0],r=a[1],l=a[2],u=0,h=[];u<o.length;u++)c=o[u],i[c]&&h.push(i[c][0]),i[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(a);while(h.length)h.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var r=e[o];0!==i[r]&&(s=!1)}s&&(n.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},i={app:0},n=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=r;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0b87":function(t,a,e){},"15cc":function(t,a,e){"use strict";var s=e("941c"),i=e.n(s);i.a},"2d02":function(t,a,e){t.exports=e.p+"img/detail-bg.fd98c459.jpg"},"2d27":function(t,a,e){},"364a":function(t,a,e){"use strict";var s=e("0b87"),i=e.n(s);i.a},3774:function(t,a,e){"use strict";var s=e("9236"),i=e.n(s);i.a},3949:function(t,a,e){"use strict";var s=e("417e"),i=e.n(s);i.a},"3afe":function(t,a,e){t.exports=e.p+"img/logo-big@2x.abdc7ba0.png"},"417e":function(t,a,e){},"47de":function(t,a,e){},"48d7":function(t,a,e){"use strict";var s=e("47de"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.showAudio?e("transition",{attrs:{"enter-active-class":"animated tada","leave-active-class":"animated bounceOutRight"}},[e("div",{staticClass:"audio"},[e("audio",{ref:"audio",attrs:{controls:"controls",loop:"loop",src:"http://m10.music.126.net/20190610171418/3d8b5ae7b75febcf5d7209e2839b4dfb/ymusic/0058/040b/545d/72286584453a50dd83d7c71b769c6f59.mp3"}},[t._v("您的浏览器不支持 audio 标签。")]),e("i",{staticClass:"icon icon-audio",class:t.musicIsPlay?"animation":"",on:{click:t.handleMusic}})])]):t._e(),e("transition",{attrs:{name:t.transitionName}},[e("router-view")],1)],1)},n=[],c={name:"app",data:function(){return{musicIsPlay:!0,showAudio:!1,transitionName:""}},created:function(){var t=this;setTimeout(function(){t.showAudio=!0},500)},mounted:function(){},methods:{handleMusic:function(){console.log(1111),this.musicIsPlay?(this.$refs.audio.pause(),this.musicIsPlay=!this.musicIsPlay):(this.$refs.audio.play(),this.musicIsPlay=!this.musicIsPlay)}},watch:{$route:function(t,a){t.meta.index>a.meta.index?this.transitionName="slide-left":this.transitionName="slide-right"}}},o=c,r=(e("5c0b"),e("2877")),l=Object(r["a"])(o,i,n,!1,null,null,null),d=l.exports,u=e("8c4f"),h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index"},[s("router-link",{attrs:{to:"/home",tag:"li"}},[t.titleShow?s("transition",{attrs:{duration:500}},[s("div",{staticClass:"title"},[s("div",{staticClass:"left animated fadeInLeft",attrs:{"animate-delay":"0s","animate-duration":"10s"}},[s("i",{staticClass:"icon"}),s("span",[t._v("城市机会")])]),s("div",{staticClass:"right animated fadeInRight",attrs:{"animate-delay":"2s","animate-duration":"2s"}},[s("img",{attrs:{src:e("3afe"),alt:""}})])])]):t._e(),s("div",{staticClass:"content"},[t.textShow?s("transition",[s("div",[s("p",[t._v(t._s(t.textOne))]),s("p",[t._v(t._s(t.textTwo))])])]):t._e(),t.imgShow?s("transition",[s("img",{staticClass:"animated rollIn fadeIn",attrs:{src:e("96ba"),alt:""}})]):t._e()],1)],1)],1)},p=[],m={name:"index",data:function(){return{titleShow:!1,textShow:!1,imgShow:!1,textOne:"",textTwo:""}},components:{},created:function(){var t=this;setTimeout(function(){t.titleShow=!0,setTimeout(function(){t.textShow=!0,t.textAuto(),setTimeout(function(){t.imgShow=!0},1e4)},500)},500)},destoryed:function(){console.log("destoryed")},methods:{textAuto:function(){var t=this,a="本次发布的城市机会清单运用场景逻辑梳理整合成都以及国际友城、兄弟城市的发展机遇，激励引导优秀企业在经济全球化进程中实现价值、赢得发展。本批次城市机会清单注重打造应用场景，促进示范推广；注重完善对接机制，强化精准服务；注重链接全球发展，服务对外开放；注重突出“主干”作用，推动区域协同。与第一批机会清单相比，本批次城市机会清单实现了“两个扩容”，一是题材范围扩容，不仅新增了成都特色的东部新城专题，还聚合展示了国际城市（地区）、省内兄弟城市的城市发展机会；二是供需信息扩容，本次共发布764条供需信息、较第一批增加314条，新增企业协作、市场推广等5方面内容。其中，成都城市机会清单涉及服务实体经济、乡村振兴、智慧城市、东部新城等11个应用场景共651条供需信息；德阳、眉山、资阳3个省内兄弟城市共发布74条供需信息；20个国际城市（地区）共发布39条供需信息。",e="成都将以更加开放包容的姿态走向时代前沿，致力于把城市机会清单塑造成为国际化、多元化、平台化的城市品牌，链接全球发展机遇、深化城市交流合作、促进企业创新发展，奋力建设面向世界的城市机会集散地和新经济创新策源地，打造共建人类命运共同体的合作交流高地。",s=a.split(""),i=e.split(""),n=a.length,c=e.length,o=0,r=0,l=null;l=setInterval(function(){o>=n?r>=c?(clearInterval(l),console.log((new Date).getTime())):t.textTwo+=i[r++]:t.textOne+=s[o++]},20)}}},v=m,f=(e("60ac"),Object(r["a"])(v,h,p,!1,null,"18732f24",null)),w=f.exports,b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[t.showLogo?s("transition",[s("div",{staticClass:"img-wrapper animated wobble rollIn"},[s("img",{attrs:{src:e("3afe"),alt:"logo"}})])]):t._e(),t.showNav?s("transition",[s("div",{staticClass:"content"},[s("ul",[s("li",{staticClass:"common animated wobble rollIn"},[s("div",{staticClass:"img-wrapper animated wobble rollIn"},[s("img",{attrs:{src:e("9862"),alt:""}})]),s("div",{staticClass:"info"},[s("p",[s("span",[t._v("成都")]),s("span",[t._v("Chengdu")])]),s("div",{staticClass:"btn-wrapper"},[s("router-link",{attrs:{to:"/demandsList"}},[s("span",{staticClass:"bg"}),s("span",[t._v("点击进入")])])],1)])]),s("li",{staticClass:"reverse animated wobble rollIn"},[s("div",{staticClass:"img-wrapper animated wobble rollIn"},[s("img",{attrs:{src:e("9172"),alt:""}})]),s("div",{staticClass:"info"},[s("p",[s("span",[t._v("德阳")]),s("span",[t._v("Deyang")])]),s("div",{staticClass:"btn-wrapper"},[s("router-link",{attrs:{to:"/demandsList"}},[s("span",{staticClass:"bg"}),s("span",[t._v("点击进入")])])],1)])]),s("li",{staticClass:"common animated wobble rollIn"},[s("div",{staticClass:"img-wrapper animated wobble rollIn"},[s("img",{attrs:{src:e("9172"),alt:""}})]),s("div",{staticClass:"info"},[s("p",[s("span",[t._v("德阳")]),s("span",[t._v("Deyang")])]),s("div",{staticClass:"btn-wrapper"},[s("router-link",{attrs:{to:"/demandsList"}},[s("span",{staticClass:"bg"}),s("span",[t._v("点击进入")])])],1)])]),s("li",{staticClass:"reverse animated wobble rollIn"},[s("div",{staticClass:"img-wrapper animated wobble rollIn"},[s("img",{attrs:{src:e("9172"),alt:""}})]),s("div",{staticClass:"info"},[s("p",[s("span",[t._v("德阳")]),s("span",[t._v("Deyang")])]),s("div",{staticClass:"btn-wrapper"},[s("router-link",{attrs:{to:"/demandsList"}},[s("span",{staticClass:"bg"}),s("span",[t._v("点击进入")])])],1)])])])])]):t._e()],1)},g=[],C={name:"home",data:function(){return{showLogo:!1,showNav:!1}},created:function(){var t=this;setTimeout(function(){t.showLogo=!0},500),setTimeout(function(){t.showNav=!0},1e3),this.$http.post("http://www.kbftech.cn/city/api/list/system").then(function(t){console.log(t)})},components:{}},_=C,S=(e("7e8d"),Object(r["a"])(_,b,g,!1,null,"0e8e1df7",null)),x=S.exports,k=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"demands-list"},[s("TopNav",{attrs:{iconClassName:t.isShowSearch?"":"icon-filtrate",rightText:t.isShowSearch?"关闭":"筛选"},on:{click:t.handleShowSearch}}),s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowSearch,expression:"!isShowSearch"}]},[t.showLogo?s("transition",[s("div",{staticClass:"img-wrapper animated wobble rollIn"},[s("img",{attrs:{src:e("3afe"),alt:"logo"}})])]):t._e(),t.showNav?s("transition",[s("div",{staticClass:"nav"},[s("ul",[s("li",{class:0===t.navIndex?"active":""},[s("div",{staticClass:"link",on:{click:function(a){return a.stopPropagation(),t.clickNavDemandsList(a)}}},[s("span",{staticClass:"bg"}),s("span",[t._v("需求清单(10)")])])]),s("li",{class:1===t.navIndex?"active":""},[s("div",{staticClass:"link",on:{click:function(a){return a.stopPropagation(),t.clickNavGetsList(a)}}},[s("span",{staticClass:"bg"}),s("span",[t._v("供给清单(5)")])])])])])]):t._e(),t.showList?s("transition",[s("div",{staticClass:"list"},[s("ul",t._l(t.cardData,function(a,e){return s("li",{key:a.id,staticClass:"animated rollIn rollout"},[s("Card",{attrs:{data:a},on:{click:function(a){return t.linkNav(e)}}})],1)}),0)])]):t._e()],1)]),t.showSearch?s("transition",[t.isShowSearch?s("div",[s("Search",{attrs:{isHasInputSearch:!1},on:{clickSearch:t.clickSearch}})],1):t._e()]):t._e()],1)},y=[],N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top-nav"},[e("div",{staticClass:"left",on:{click:t.goBack}},[e("i",{staticClass:"icon icon-back"})]),e("div",{staticClass:"right",on:{click:function(a){return t.$emit("click")}}},[t.iconClassName?e("i",{staticClass:"icon",class:t.iconClassName}):t._e(),t.rightText?e("span",[t._v(t._s(t.rightText))]):t._e()])])},T=[],I={name:"top-nav",props:{iconClassName:{type:String},rightText:{type:String}},methods:{goBack:function(){this.$router.go(-1)}}},L=I,j=(e("cfc0"),Object(r["a"])(L,N,T,!1,null,"5a44de17",null)),O=j.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("div",{staticClass:"card",class:t.className?t.className:"",on:{click:function(a){return t.$emit("click")}}},[e("div",{staticClass:"border-bg"}),e("div",{staticClass:"content"},[e("div",{staticClass:"left"},[e("i",{staticClass:"icon",class:t.data.iconClassName})]),e("div",{staticClass:"right"},[e("p",[t._v(t._s(t.data.title))]),e("span",[t._v(t._s(t.data.desc))])])])]):t._e()},$=[],P={name:"card",props:{className:{type:String,default:""},data:{type:Object}}},E=P,M=(e("613b5"),Object(r["a"])(E,D,$,!1,null,"9a473166",null)),A=M.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search animated slideInDown"},[t.isHasInputSearch?e("div",{staticClass:"input-wrapper"},[e("input",{attrs:{type:"text",placeholder:"产品需求"}}),e("button",[t._v("搜索")])]):t._e(),e("div",{staticClass:"item"},[e("h3",[t._v("需求名目")]),e("div",{staticClass:"checkbox-group"},t._l(6,function(a,s){return e("label",{key:s,attrs:{for:"xqml"+s}},[e("input",{attrs:{type:"checkbox",id:"xqml"+s}}),e("span",[t._v("基础设施建设")])])}),0)]),e("div",{staticClass:"item"},[e("h3",[t._v("类别")]),e("div",{staticClass:"checkbox-group"},t._l(6,function(a,s){return e("label",{key:s,attrs:{for:"type"+s}},[e("input",{attrs:{type:"checkbox",id:"type"+s}}),e("span",[t._v("建设")])])}),0)]),e("div",{staticClass:"btn-wrapper"},[e("button",{on:{click:function(a){return t.$emit("clickSearch")}}},[t._v("搜索")])])])},H=[],B={name:"search",props:{isHasInputSearch:{type:Boolean,default:!1}}},q=B,J=(e("3949"),Object(r["a"])(q,G,H,!1,null,"0fcb810e",null)),R=J.exports,z={name:"demands-list",data:function(){return{showSearch:!1,showNav:!1,showLogo:!1,showList:!1,isShowSearch:!1,navIndex:0,cardData:[{id:0,title:"服务实体经济",desc:"共35项"},{id:1,title:"服务实体经济",desc:"共35项"},{id:2,title:"服务实体经济",desc:"共35项"},{id:3,title:"服务实体经济",desc:"共35项"},{id:4,title:"服务实体经济",desc:"共35项"},{id:5,title:"服务实体经济",desc:"共35项"},{id:6,title:"服务实体经济",desc:"共35项"},{id:7,title:"服务实体经济",desc:"共35项"}]}},components:{TopNav:O,Card:A,Search:R},created:function(){var t=this;setTimeout(function(){t.showLogo=!0,t.showSearch=!0},0),setTimeout(function(){t.showNav=!0},1e3),setTimeout(function(){t.showList=!0},1500)},methods:{handleShowSearch:function(){this.isShowSearch=!this.isShowSearch},linkNav:function(t){console.log(t),this.$router.push({path:"/choice"})},clickNavDemandsList:function(){this.navIndex=0,this.cardData=[{id:0,title:"服务实体经济",desc:"共35项"},{id:1,title:"服务实体经济",desc:"共35项"}]},clickNavGetsList:function(){this.navIndex=1,this.cardData=[{id:5,title:"服务实体经济",desc:"共30项"},{id:6,title:"服务实体经济",desc:"共30项"},{id:7,title:"服务实体经济",desc:"共30项"}]},clickSearch:function(){console.log("clickSearch")}}},F=z,K=(e("15cc"),Object(r["a"])(F,k,y,!1,null,"6715c7e2",null)),Q=K.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"choice"},[e("TopNav"),e("div",{staticClass:"content"},[t.showNav?e("transition",[e("div",{staticClass:"list"},[e("ul",t._l(t.cardData,function(a,s){return e("li",{key:a.id,staticClass:"animated rollIn rollout"},[e("Card",{attrs:{className:"big",data:a},on:{click:function(a){return t.clickNav(s)}}})],1)}),0)])]):t._e()],1)],1)},V=[],W={name:"chioce",data:function(){return{showNav:!1,cardData:[{id:1,iconClassName:"icon-enterprise",title:"企业",desc:"Translate"},{id:2,iconClassName:"icon-government",title:"政府",desc:"Government"}]}},components:{TopNav:O,Card:A},created:function(){var t=this;setTimeout(function(){t.showNav=!0},0)},methods:{clickNav:function(t){this.$router.push({path:"/demandsTypeList"})}}},X=W,Y=(e("48d7"),Object(r["a"])(X,U,V,!1,null,"40e07607",null)),Z=Y.exports,tt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"demands-detail"},[s("TopNav",{attrs:{iconClassName:"icon-backMenu",rightText:"回到目录"},on:{click:t.backToMenu}}),s("div",{staticClass:"content"},[s("transition",[s("div",{staticClass:"top"},[s("img",{attrs:{src:e("2d02"),alt:"logo"}}),s("div",{staticClass:"info"},[s("div",{staticClass:"title"},[t._v("郫都区万云汇互联网娱乐云计算产业基地项目")]),s("div",{staticClass:"name"},[s("span",{staticClass:"tag"},[t._v("融资需求")]),s("span",[t._v("成都国民沃成半导体有限公司")])])])])]),s("transition",[s("div",{staticClass:"main"},[s("ul",t._l(t.detailData,function(a){return s("li",{key:a.id},[s("div",{staticClass:"left"},[t._v("【"+t._s(a.title)+"】")]),s("div",{staticClass:"right"},[s("span",[t._v(t._s(a.desc))]),a.contact?s("span",[t._v(t._s(a.contact))]):t._e()])])}),0)])])],1)],1)},at=[],et={name:"demands-list",data:function(){return{detailData:[{id:0,title:"需求需要",desc:"利用现有厂房62333.49平米，项目总投资1亿元，将建成3条产线1.6吋单晶碳化硅单晶衬底研发线年产6吋碳化硅衬底2000 片2.6外延片生产线：6寸氮化镓外延片 2万片/年8英寸Si-GaN（功率电子+LED）1万片/年；6 英寸 GaAS+GaN1 万片/年 150000"},{id:1,title:"总投资额",desc:"150000万元 "},{id:2,title:"融资需求",desc:"5000万元 "},{id:3,title:"联系方式",desc:"成都国民天成半导体有限公司",contact:"张站峰  13880813191"},{id:4,title:"建设模式",desc:"政府和企业出资共建"}]}},components:{TopNav:O},methods:{backToMenu:function(){this.$router.push({path:"/"})}}},st=et,it=(e("364a"),Object(r["a"])(st,tt,at,!1,null,"48942858",null)),nt=it.exports,ct=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"demands-type-list"},[e("TopNav",{attrs:{iconClassName:t.isShowSearch?"":"icon-search"},on:{click:t.handShowSearch}}),t.showList?e("transition",[e("div",{staticClass:"content"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:!t.isShowSearch,expression:"!isShowSearch"}]},t._l(6,function(a,s){return e("li",{key:s,staticClass:"animated bounceInLeft",on:{click:function(a){return t.linkNav(s)}}},[e("div",{staticClass:"title"},[t._v("郫都区万云汇互联网娱乐云计算产业基地项目")]),e("div",{staticClass:"name"},[e("span",{staticClass:"tag"},[t._v("融资需求")]),e("span",[t._v("成都国民沃成半导体有限公司")])])])}),0)])]):t._e(),t.showSearch?e("transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowSearch,expression:"isShowSearch"}]},[e("Search",{attrs:{isHasInputSearch:!0},on:{clickSearch:t.clickSearch}})],1)]):t._e()],1)},ot=[],rt={name:"demands-list",data:function(){return{showSearch:!1,showList:!1,isShowSearch:!1}},components:{TopNav:O,Search:R},created:function(){var t=this;setTimeout(function(){t.showSearch=!0},0),setTimeout(function(){t.showList=!0},0)},methods:{linkNav:function(t){this.$router.push({path:"/demandsDetail"})},handShowSearch:function(){this.isShowSearch=!this.isShowSearch},clickSearch:function(){console.log("clickSearch")}}},lt=rt,dt=(e("3774"),Object(r["a"])(lt,ct,ot,!1,null,"80476dca",null)),ut=dt.exports;u["a"].prototype.goBack=function(){this.isback=!0,window.history.go(-1)},s["a"].use(u["a"]);var ht=new u["a"]({routes:[{path:"/",name:"index",component:w,meta:{title:"Index",index:0}},{path:"/home",name:"home",component:x,meta:{title:"Home",index:1}},{path:"/demandsList",name:"demandsList",component:Q,meta:{title:"DemandsList",index:2}},{path:"/demandsTypeList",name:"demandsTypeList",component:ut,meta:{title:"DemandsTypeList",index:4}},{path:"/demandsDetail",name:"demandsDetail",component:nt,meta:{title:"DemandsDetail",index:5}},{path:"/choice",name:"choice",component:Z,meta:{title:"Choice",index:3}}]}),pt=e("bc3a"),mt=e.n(pt),vt=e("a7fe"),ft=e.n(vt);e("77ed");mt.a.defaults.headers.post["Content-Type"]="application/json",mt.a.defaults.withCredentials=!1,s["a"].use(ft.a,mt.a),s["a"].config.productionTip=!1,ht.beforeEach(function(t,a,e){t.meta.title&&(document.title=t.meta.title),e()}),new s["a"]({router:ht,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("5e27"),i=e.n(s);i.a},"5e27":function(t,a,e){},"60ac":function(t,a,e){"use strict";var s=e("6e16"),i=e.n(s);i.a},"613b5":function(t,a,e){"use strict";var s=e("974c"),i=e.n(s);i.a},"6e16":function(t,a,e){},"7e8d":function(t,a,e){"use strict";var s=e("d502"),i=e.n(s);i.a},9172:function(t,a,e){t.exports=e.p+"img/deyang.9120b278.jpg"},9236:function(t,a,e){},"941c":function(t,a,e){},"96ba":function(t,a,e){t.exports=e.p+"img/index-01.fb9a886b.jpg"},"974c":function(t,a,e){},9862:function(t,a,e){t.exports=e.p+"img/chengdu.7ead531f.jpg"},cfc0:function(t,a,e){"use strict";var s=e("2d27"),i=e.n(s);i.a},d502:function(t,a,e){}});
//# sourceMappingURL=app.d0a53a63.js.map