webpackJsonp([1],{129:function(t,e,n){n(130);var r=n(6)(n(131),n(136),"data-v-51498935",null);t.exports=r.exports},130:function(t,e){},131:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(132),a=n.n(r);e.default={components:{ListItem:a.a},data:function(){return{loadingStatus:"点击加载更多"}},props:{list:{type:Array,default:function(){return[]}},getMore:{type:Function,default:null}},methods:{changeLoadingStatus:function(t){"loading"===t?(this.loadingStatus="正在加载···",this.getMore(this.changeLoadingStatus)):"success"===t?this.loadingStatus="点击加载更多":"fail"===t&&(this.loadingStatus="加载失败")}}}},132:function(t,e,n){n(133);var r=n(6)(n(134),n(135),null,null);t.exports=r.exports},133:function(t,e){},134:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{item:{type:Object,default:function(){return{}}}}}},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["list-item",t.item.visited?"visited":""],on:{click:function(e){t.$emit("click")}}},[n("img",{staticClass:"picture",attrs:{src:t.item.images[0],alt:t.item.title}}),t._v(" "),n("div",{staticClass:"title-block"},[n("h3",{staticClass:"main-title"},[t._v(t._s(t.item.display_date))]),t._v(" "),n("p",{staticClass:"sub-title"},[t._v(t._s(t.item.title))])])])},staticRenderFns:[]}},136:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[t._l(t.list,function(e,r){return n("ListItem",{key:e.id,attrs:{item:e},on:{click:function(n){t.$emit("click",e,r)}}})}),t._v(" "),t.getMore&&t.list.length>0?n("p",{staticClass:"more",on:{click:function(e){t.changeLoadingStatus("loading")}}},[t._v(t._s(t.loadingStatus))]):t._e()],2)},staticRenderFns:[]}},137:function(t,e){},138:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Error",props:{action:{type:Function,default:function(){}}}}},139:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error"},[n("i",{staticClass:"el-icon-refresh"}),t._v(" "),n("p",{staticClass:"text"},[t._v("似乎出了点问题")]),t._v(" "),n("h3",{staticClass:"action",on:{click:t.action}},[t._v("重新加载")])])},staticRenderFns:[]}},158:function(t,e,n){"use strict";function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return s("http://news-at.zhihu.com/api/3/section/"+e+"/before/"+t)}e.a=r;var a=n(25),i=n.n(a),s=function(t){return i.a.get("https://bird.ioliu.cn/v1?url="+t).then(function(t){return t.data})}},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.error?n("Error",{attrs:{action:t.refresh}}):t._e(),t._v(" "),n("el-tabs",{on:{"tab-click":t.tabClicked},model:{value:t.activatedTab,callback:function(e){t.activatedTab=e},expression:"activatedTab"}},[n("el-tab-pane",{attrs:{label:"瞎扯",name:"xc"}},[n("List",{staticClass:"list-com",attrs:{list:t.xcList,"get-more":t.getMore},on:{click:t.routeToDetail}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"大误",name:"dw"}},[n("List",{staticClass:"list-com",attrs:{list:t.dwList,"get-more":t.getMore},on:{click:t.routeToDetail}})],1)],1)],1)},staticRenderFns:[]}},160:function(t,e,n){n(161);var r=n(6)(n(162),n(163),null,null);t.exports=r.exports},161:function(t,e){},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(33),a=n.n(r),i=n(49),s=n.n(i),o=n(25),c=n.n(o),u=n(50),l=n.n(u),d=n(56),f=n.n(d);e.default={name:"story_detail",components:{Error:l.a},data:function(){return{content:"",error:!1}},props:{id:{type:String,default:0}},watch:{id:function(t){var e=this;return s()(a.a.mark(function n(){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!(Number(t)<0)){n.next=2;break}return n.abrupt("return");case 2:f.a.pgv(),e.getStory(t),window.scrollTo(0,0);case 5:case"end":return n.stop()}},n,e)}))()}},methods:{refresh:function(){this.getStory(this.id)},getStory:function(t){var e=this;return s()(a.a.mark(function n(){var r,i,s,o,u,l;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.error=!1,r=e.$loading({target:".main-content",body:!1,fullscreen:!1,lock:!0,text:"拼命加载中",customClass:"loading"}),n.prev=2,n.next=5,c.a.get("https://bird.ioliu.cn/v1?url=http://news-at.zhihu.com/api/4/news/"+t);case 5:i=n.sent,s=i.data,o='<div class="img-place-holder"></div>',u='<div class="img-place-holder">        <img src='+s.image+' />        <h1 class="headline-title">'+s.title+'</h1>        <span class="img-source">图片：'+s.image_source+"</span>        </div>",l=s.body.replace(o,u),l=l.replace(/src=\"http:/g,'src="'),e.content=l,r.close(),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(2),r.close(),e.error=!0;case 19:case"end":return n.stop()}},n,e,[[2,15]])}))()}},created:function(){f.a.init({sid:"500575360",autoReport:1,senseHash:1}),this.getStory(this.id)},mounted:function(){window.scrollTo(0,0)}}},163:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.error?n("Error",{attrs:{action:t.refresh}}):n("main",{staticClass:"detail-container",attrs:{id:"detail"},domProps:{innerHTML:t._s(t.content)}})},staticRenderFns:[]}},164:function(t,e,n){n(165);var r=n(6)(n(166),n(167),null,null);t.exports=r.exports},165:function(t,e){},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Views",data:function(){return{activeName:"xc"}}}},167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"main-content"},[n("transition",{attrs:{name:"detail"===t.$route.name?"slide-left":"slide-right"}},[n("keep-alive",[n("router-view")],1)],1)],1)])},staticRenderFns:[]}},50:function(t,e,n){n(137);var r=n(6)(n(138),n(139),null,null);t.exports=r.exports},57:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(58),a=(n.n(r),n(60)),i=n.n(a),s=n(66),o=(n.n(s),n(67)),c=n.n(o),u=n(68),l=(n.n(u),n(69)),d=n.n(l),f=n(71),p=(n.n(f),n(72)),v=n.n(p),m=n(73),h=(n.n(m),n(74)),g=n.n(h),b=n(75),_=(n.n(b),n(76)),x=n.n(_),y=n(82),w=(n.n(y),n(83)),k=(n.n(w),n(84)),S=n.n(k),T=n(3),C=n(86),L=n(164),$=n.n(L);n(168).install(),T.default.config.productionTip=!1,T.default.use(S.a),T.default.use(x.a),T.default.use(g.a),T.default.use(v.a),T.default.use(d.a),T.default.use(c.a),T.default.prototype.$notify=i.a,T.default.prototype.$loading=g.a.service,new T.default({el:"#app",router:C.a,components:{Views:$.a}})},58:function(t,e){},66:function(t,e){},68:function(t,e){},71:function(t,e){},73:function(t,e){},75:function(t,e){},82:function(t,e){},83:function(t,e){},86:function(t,e,n){"use strict";var r=n(3),a=n(87),i=n(88),s=n.n(i),o=n(160),c=n.n(o);r.default.use(a.a),e.a=new a.a({routes:[{path:"/",name:"index",component:s.a},{path:"/:id",name:"detail",component:c.a,props:!0}]})},88:function(t,e,n){n(89);var r=n(6)(n(90),n(159),null,null);t.exports=r.exports},89:function(t,e){},90:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(91),a=n.n(r),i=n(33),s=n.n(i),o=n(34),c=n.n(o),u=n(49),l=n.n(u),d=n(129),f=n.n(d),p=n(50),v=n.n(p),m=n(25),h=(n.n(m),n(56)),g=n.n(h),b=n(158),_={XC:2,DW:29};e.default={components:{List:f.a,Error:v.a},data:function(){return{xcList:[],xcTimestamp:0,error:!1,activatedTab:"xc",dwList:[],dwTimestamp:0}},computed:{sectionType:function(){return _[this.activatedTab.toUpperCase()]}},methods:{tabClicked:function(t){this[t.name+"List"].length||this.getStoryList(this.sectionType)},refresh:function(){this.getStoryList()},getStoryList:function(t){var e=this;return l()(s.a.mark(function n(){var r;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=t||_.XC,r=e[e.activatedTab+"List"],n.abrupt("return",new c.a(function(){var n=l()(s.a.mark(function n(a,i){var o,c,u,l;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.error=!1,o=r.length>0?{}:e.$loading({target:".main-content",body:!1,fullscreen:!1,lock:!0,text:"拼命加载中",customClass:"loading"}),n.prev=2,n.next=5,Object(b.a)(e[e.activatedTab+"Timestamp"],t);case 5:c=n.sent,u=c.stories,l=JSON.parse(localStorage.visited||"[]"),u.forEach(function(t){t.visited=-1!==l.indexOf(t.id)}),r=r.concat(u),e[e.activatedTab+"List"]=r,e[e.activatedTab+"Timestamp"]=c.timestamp,o.close&&o.close(),a(!0),n.next=21;break;case 16:n.prev=16,n.t0=n.catch(2),e.error=r.length<=0,o.close&&o.close(),i(n.t0);case 21:case"end":return n.stop()}},n,e,[[2,16]])}));return function(t,e){return n.apply(this,arguments)}}()));case 3:case"end":return n.stop()}},n,e)}))()},getMore:function(t){var e=this;return l()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.getStoryList(e.sectionType);case 3:t&&t("success"),n.next=10;break;case 6:n.prev=6,n.t0=n.catch(0),e.$notify.error({title:"错误",message:"获取信息错误"}),t&&t("fail");case 10:case"end":return n.stop()}},n,e,[[0,6]])}))()},routeToDetail:function(t){t.visited=!0;var e=JSON.parse(localStorage.visited||"[]");~e.indexOf(t.id)||(e.push(t.id),localStorage.visited=a()(e)),sessionStorage.scroll=Number(window.scrollY),sessionStorage.height=Number(document.body.offsetHeight),this.$router.push({path:"/"+t.id})}},activated:function(){var t=Number(sessionStorage.height||0),e=Number(sessionStorage.scroll||0),n=0,r=setInterval(function(){if(window.scrollY===e||n>10)return void clearInterval(r);n++,document.body.offsetHeight===t&&window.scrollTo(0,e)},500)},created:function(){g.a.init({sid:"500575360",autoReport:0,senseHash:1,senseQuery:1}),g.a.pgv()},mounted:function(){this.getStoryList()}}}},[57]);
//# sourceMappingURL=app.bfe6ac737ab85e1a1071.js.map