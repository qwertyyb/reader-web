webpackJsonp([1],Array(64).concat([function(t,e,i){i(139);var n=i(3)(i(140),i(141),null,null);t.exports=n.exports},function(t,e,i){i(142);var n=i(3)(i(143),i(144),null,null);t.exports=n.exports},,,,,function(t,e,i){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return o("/api/3/section/"+e+"/before/"+t)}function s(t){return o("/api/4/news/"+t)}e.b=n,e.a=s;var r=i(168),a=i.n(r),o=function(t){return a.a.get("https://proxy.qwertyyb.cn/news-at.zhihu.com"+t).then(function(t){return t.data})}},,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(44),s=i(82),r=i.n(s),a=i(83),o=i(110),c=i(209),l=i.n(c);i(217).install(),n.a.config.productionTip=!1,n.a.use(r.a),n.a.use(a.a),new n.a({el:"#app",router:o.a,components:{Views:l.a}})},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){i(105);var n=i(3)(i(107),i(108),null,null);t.exports=n.exports},function(t,e){},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"loading",model:{prop:"show",event:"change"},props:{show:Boolean,text:String,position:String,transition:{type:String,default:"vux-mask"}},watch:{show:function(t){this.$emit("update:show",t)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast vux-loading",class:t.text?"":"vux-loading-no-text"},[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast",style:{position:t.position}},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2):t._e()])])])},staticRenderFns:[]}},,function(t,e,i){"use strict";var n=i(44),s=i(111),r=i(112),a=i.n(r),o=i(188),c=i.n(o);n.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"index",component:a.a},{path:"/detail/:id",name:"detail",component:c.a,props:!0}]})},,function(t,e,i){i(113);var n=i(3)(i(114),i(187),null,null);t.exports=n.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(57),s=i.n(n),r=i(117),a=i.n(r),o=i(59),c=i.n(o),l=i(64),u=i.n(l),d=i(65),h=i.n(d),f=i(145),p=i.n(f),v=i(149),m=i.n(v),_=i(152),b=i.n(_),w=i(161),x=i.n(w),g=i(164),y=i.n(g),k=i(70),C=i(76),T=i.n(C),$=[{name:"瞎扯",id:2},{name:"大误",id:29},{name:"小事",id:35},{name:"放映机",id:28},{name:"每周一吸",id:78},{name:"本周热门",id:90},{name:"节日特辑",id:79}];e.default={name:"IndexPage",components:{ViewBox:u.a,XHeader:h.a,Tab:p.a,TabItem:m.a,Swiper:b.a,SwiperItem:x.a,Panel:y.a},data:function(){return{contentTypes:$,timestamp:$.map(function(){return 0}),list:$.map(function(t){return[]}),activedTab:+this.$route.query.tabIndex||0}},computed:{tabItems:function(){return $.map(function(t){return t.name})},activedTabId:function(){return $[this.activedTab].id},curTabList:function(){return this.list[this.activedTab]}},watch:{activedTab:function(t,e){this.list[t].length||this.getList()}},created:function(){T.a.init({sid:"500575360",cid:"500645799",autoReport:0,senseHash:1,senseQuery:1,performanceMonitor:1}),T.a.pgv()},activated:function(){var t=this;setTimeout(function(){var e=sessionStorage.getItem("scroller-"+t.activedTab+"-top");e&&t.$refs["scroller-"+t.activedTab][0].scrollTo(0,e)},50)},methods:{getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return c()(s.a.mark(function i(){var n,r,o,c,l,u;return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=$[t.activedTab].id,void 0!==(r=t.timestamp[t.activedTab])){i.next=4;break}return i.abrupt("return");case 4:return i.next=6,Object(k.b)(r,n);case 6:o=i.sent,c=o.timestamp,l=o.stories,t.timestamp[t.activedTab]=c,u=l.map(function(t){var e=a()(t.images,1),i=e[0];return{title:t.title,desc:t.display_date,src:i,url:"/detail/"+t.id}}),e?t.$set(t.list,t.activedTab,t.list[t.activedTab].concat(u)):t.$set(t.list,t.activedTab,u);case 12:case"end":return i.stop()}},i,t)}))()},onRefresh:function(t,e){var i=this;return c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(i.activedTab===t){n.next=2;break}return n.abrupt("return");case 2:return i.timestamp[i.activedTab]=0,n.next=5,i.getList();case 5:e();case 6:case"end":return n.stop()}},n,i)}))()},onInfinite:function(t,e){var i=this;return c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(i.activedTab===t){n.next=2;break}return n.abrupt("return",e());case 2:return n.next=4,i.getList(!0);case 4:e();case 5:case"end":return n.stop()}},n,i)}))()},onItemClick:function(t){var e=this.$refs["scroller-"+this.activedTab][0].getPosition(),i=e.top;sessionStorage.setItem("scroller-"+this.activedTab+"-top",i)},onSwiperIndexChange:function(t){this.$router.push({path:"/",query:{tabIndex:t}})},toggleDrawerVisible:function(){this.$emit("toggleDrawerVisible")}}}},,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"view-box",props:["bodyPaddingTop","bodyPaddingBottom"],methods:{scrollTo:function(t){this.$refs.viewBoxBody.scrollTop=t},getScrollTop:function(){return this.$refs.viewBoxBody.scrollTop},getScrollBody:function(){return this.$refs.viewBoxBody}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-tab"},[t._t("header"),t._v(" "),i("div",{ref:"viewBoxBody",staticClass:"weui-tab__panel vux-fix-safari-overflow-scrolling",style:{paddingTop:t.bodyPaddingTop,paddingBottom:t.bodyPaddingBottom},attrs:{id:"vux_view_box_body"}},[t._t("default")],2),t._v(" "),t._t("bottom")],2)},staticRenderFns:[]}},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(39),s=i.n(n);e.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return s()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault",void 0,e.key,void 0))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},function(t,e,i){i(146);var n=i(3)(i(147),i(148),null,null);t.exports=n.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(66);e.default={name:"tab",mixins:[n.b],mounted:function(){var t=this;this.$nextTick(function(){setTimeout(function(){t.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String],preventDefault:Boolean,scrollThreshold:{type:Number,default:4},barPosition:{type:String,default:"bottom",validator:function(t){return-1!==["bottom","top"].indexOf(t)}}},computed:{barLeft:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return this.currentIndex*(100/t)+"%"}},barRight:function(){if(this.hasReady){var t=this.scrollable?window.innerWidth/this.$children[this.currentIndex||0].$el.getBoundingClientRect().width:this.number;return(t-this.currentIndex-1)*(100/t)+"%"}},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var t={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?t.backgroundColor="transparent":t.backgroundColor=this.barActiveColor||this.activeColor,t},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}},scrollable:function(){return this.number>this.scrollThreshold}},watch:{currentIndex:function(t,e){this.direction=t>e?"forward":"backward",this.$emit("on-index-change",t,e),this.hasReady&&this.scrollToActiveTab()}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}},methods:{scrollToActiveTab:function(){var t=this;if(this.scrollable&&this.$children&&this.$children.length){var e=this.$children[this.currentIndex].$el,i=0,n=function n(){var s=t.$refs.nav;s.scrollLeft+=(e.offsetLeft-(s.offsetWidth-e.offsetWidth)/2-s.scrollLeft)/15,++i<15&&window.requestAnimationFrame(n)};window.requestAnimationFrame(n)}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-wrap",class:"top"===t.barPosition?"vux-tab-bar-top":""},[i("div",{staticClass:"vux-tab-container"},[i("div",{ref:"nav",staticClass:"vux-tab",class:[{"vux-tab-no-animate":!t.animate},{scrollable:t.scrollable}]},[t._t("default"),t._v(" "),t.animate?i("div",{staticClass:"vux-tab-ink-bar",class:t.barClass,style:t.barStyle},[t.customBarWidth?i("span",{staticClass:"vux-tab-bar-inner",style:t.innerBarStyle}):t._e()]):t._e()],2)])])},staticRenderFns:[]}},function(t,e,i){var n=i(3)(i(150),i(151),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(66);e.default={name:"tab-item",mixins:[n.a],props:{activeClass:String,disabled:Boolean,badgeBackground:{type:String,default:"#f74c31"},badgeColor:{type:String,default:"#fff"},badgeLabel:String},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-tab-item",class:[t.currentSelected?t.activeClass:"",{"vux-tab-selected":t.currentSelected,"vux-tab-disabled":t.disabled}],style:t.style,on:{click:t.onItemClick}},[t._t("default"),t._v(" "),void 0!==t.badgeLabel&&""!==t.badgeLabel?i("span",{staticClass:"vux-tab-item-badge",style:{background:t.badgeBackground,color:t.badgeColor}},[t._v("\n  "+t._s(t.badgeLabel))]):t._e()],2)},staticRenderFns:[]}},function(t,e,i){i(153);var n=i(3)(i(154),i(160),null,null);t.exports=n.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(67),s=i.n(n),r=i(156),a=i(42);e.default={name:"swiper",created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var t=this;this.hasTwoLoopItem(),this.$nextTick(function(){t.list&&0===t.list.length||t.render(t.index),t.xheight=t.getHeight(),t.$emit("on-get-height",t.xheight)})},methods:{hasTwoLoopItem:function(){2===this.list.length&&this.loop?this.listTwoLoopItem=this.list:this.listTwoLoopItem=[]},clickListItem:function(t){Object(a.b)(t.url,this.$router),this.$emit("on-click-list-item",JSON.parse(s()(t)))},buildBackgroundUrl:function(t){return t.fallbackImg?"url("+t.img+"), url("+t.fallbackImg+")":"url("+t.img+")"},render:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new r.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(e,i){console.log("on-swiped:",i),t.current=i%t.length,t.index=i%t.length}),e>0&&this.swiper.go(e)},rerender:function(){var t=this;this.$el&&!this.hasRender&&(this.hasRender=!0,this.hasTwoLoopItem(),this.$nextTick(function(){t.index=t.value||0,t.current=t.value||0,t.length=t.list.length||t.$children.length,t.destroy(),t.render(t.value)}))},destroy:function(){this.hasRender=!1,this.swiper&&this.swiper.destroy()},getHeight:function(){var t=parseInt(this.height,10);return t?this.height:t?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:Boolean,loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{hasRender:!1,current:this.index||0,xheight:"auto",length:this.list.length,index:0,listTwoLoopItem:[]}},watch:{auto:function(t){t?this.swiper&&this.swiper._auto():this.swiper&&this.swiper.stop()},list:function(t,e){s()(t)!==s()(e)&&this.rerender()},current:function(t){console.log("current: ",t),this.index=t,this.$emit("on-index-change",t)},index:function(t){var e=this;t!==this.current&&this.$nextTick(function(){console.log("swpier:",t),e.swiper&&e.swiper.go(t)}),this.$emit("input",t)},value:function(t){this.index=t}},beforeDestroy:function(){this.destroy()}}},,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-slider"},[i("div",{staticClass:"vux-swiper",style:{height:t.xheight}},[t._t("default"),t._v(" "),t._l(t.list,function(e,n){return i("div",{staticClass:"vux-swiper-item",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])])}),t._v(" "),t._l(t.listTwoLoopItem,function(e,n){return t.listTwoLoopItem.length>0?i("div",{staticClass:"vux-swiper-item vux-swiper-item-clone",attrs:{"data-index":n},on:{click:function(i){t.clickListItem(e)}}},[i("a",{attrs:{href:"javascript:"}},[i("div",{staticClass:"vux-img",style:{backgroundImage:t.buildBackgroundUrl(e)}}),t._v(" "),t.showDescMask?i("p",{staticClass:"vux-swiper-desc"},[t._v(t._s(e.title))]):t._e()])]):t._e()})],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showDots,expression:"showDots"}],class:[t.dotsClass,"vux-indicator","vux-indicator-"+t.dotsPosition]},t._l(t.length,function(e){return i("a",{attrs:{href:"javascript:"}},[i("i",{staticClass:"vux-icon-dot",class:{active:e-1===t.current}})])}))])},staticRenderFns:[]}},function(t,e,i){var n=i(3)(i(162),i(163),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.rerender()})},beforeDestroy:function(){var t=this.$parent;this.$nextTick(function(){t.rerender()})}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swiper-item"},[t._t("default")],2)},staticRenderFns:[]}},function(t,e,i){i(165);var n=i(3)(i(166),i(167),null,null);t.exports=n.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(67),s=i.n(n),r=i(42);e.default={name:"panel",props:{header:String,footer:Object,list:Array,type:{type:String,default:"1"}},methods:{onImgError:function(t,e){this.$emit("on-img-error",JSON.parse(s()(t)),e),t.fallbackSrc&&(e.target.src=t.fallbackSrc)},getUrl:function(t){return Object(r.a)(t,this.$router)},onClickFooter:function(){this.$emit("on-click-footer"),Object(r.b)(this.footer.url,this.$router)},onClickHeader:function(){this.$emit("on-click-header")},onItemClick:function(t){this.$emit("on-click-item",t),Object(r.b)(t.url,this.$router)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-panel weui-panel_access"},[t.header?i("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:t._s(t.header)},on:{click:t.onClickHeader}},[t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"weui-panel__bd"},[t._t("body",["1"===t.type?t._l(t.list,function(e){return i("a",{staticClass:"weui-media-box weui-media-box_appmsg",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])])}):t._e(),t._v(" "),"2"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])}):t._e(),t._v(" "),"3"===t.type?[i("div",{staticClass:"weui-media-box weui-media-box_small-appmsg"},[i("div",{staticClass:"weui-cells"},t._l(t.list,function(e){return i("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:t.getUrl(e.url)},on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-cell__hd"},[i("img",{staticStyle:{width:"20px","margin-right":"5px",display:"block"},attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",{domProps:{innerHTML:t._s(e.title)}})]),t._v(" "),i("span",{staticClass:"weui-cell__ft"})])}))])]:t._e(),t._v(" "),"4"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}}),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e(),t._v(" "),"5"===t.type?t._l(t.list,function(e){return i("div",{staticClass:"weui-media-box weui-media-box_text",on:{click:function(i){i.preventDefault(),t.onItemClick(e)}}},[i("div",{staticClass:"weui-media-box_appmsg"},[e.src?i("div",{staticClass:"weui-media-box__hd"},[i("img",{staticClass:"weui-media-box__thumb",attrs:{src:e.src,alt:""},on:{error:function(i){t.onImgError(e,i)}}})]):t._e(),t._v(" "),i("div",{staticClass:"weui-media-box__bd"},[i("h4",{staticClass:"weui-media-box__title",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("p",{staticClass:"weui-media-box__desc",domProps:{innerHTML:t._s(e.desc)}})])]),t._v(" "),e.meta?i("ul",{staticClass:"weui-media-box__info"},[i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.source)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta",domProps:{innerHTML:t._s(e.meta.date)}}),t._v(" "),i("li",{staticClass:"weui-media-box__info__meta weui-media-box__info__meta_extra",domProps:{innerHTML:t._s(e.meta.other)}})]):t._e()])}):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-panel__ft"},[t.footer&&t.footer.title&&"3"!==t.type?i("a",{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{href:t.getUrl(t.footer.url)},on:{click:function(e){return e.preventDefault(),t.onClickFooter(e)}}},[i("div",{staticClass:"weui-cell__bd",domProps:{innerHTML:t._s(t.footer.title)}})]):t._e()])])},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-box",{attrs:{"body-padding-top":"46px","body-padding-bottom":"0"}},[i("x-header",{staticStyle:{width:"100%",position:"absolute",left:"0",top:"0","z-index":"100"},attrs:{slot:"header"},nativeOn:{click:function(e){return t.toggleDrawerVisible(e)}},slot:"header"},[i("template",{slot:"overwrite-left"},[i("svg",{staticClass:"vux-x-icon vux-x-icon-menu icon-menu",attrs:{type:"menu",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[i("path",{attrs:{d:"M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"}})])]),t._v("\n  知乎日报")],2),t._v(" "),i("tab",{on:{"on-index-change":t.onSwiperIndexChange},model:{value:t.activedTab,callback:function(e){t.activedTab=e},expression:"activedTab"}},t._l(t.tabItems,function(e){return i("tab-item",{key:e},[t._v(t._s(e))])})),t._v(" "),i("swiper",{ref:"swiper",staticStyle:{height:"calc(100% - 50px)"},attrs:{height:"100%","show-dots":!1,threshold:125},model:{value:t.activedTab,callback:function(e){t.activedTab=e},expression:"activedTab"}},t._l(t.contentTypes,function(e,n){return i("swiper-item",{key:e.name},[i("scroller",{ref:"scroller-"+n,refInFor:!0,attrs:{"on-refresh":function(e){return t.onRefresh(n,e)},"on-infinite":function(e){return t.onInfinite(n,e)},height:"100%"}},[i("panel",{attrs:{list:t.curTabList,type:"1"},on:{"on-click-item":t.onItemClick}})],1)],1)}))],1)},staticRenderFns:[]}},function(t,e,i){i(189);var n=i(3)(i(190),i(208),null,null);t.exports=n.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(57),s=i.n(n),r=i(59),a=i.n(r),o=i(65),c=i.n(o),l=i(64),u=i.n(l),d=i(76),h=i.n(d),f=i(70),p=i(191);e.default={name:"story_detail",components:{XHeader:c.a,ViewBox:u.a},data:function(){return{content:"",title:"正在加载"}},props:{id:{type:String,default:0}},watch:{id:function(t){var e=this;return a()(s.a.mark(function i(){return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(!(Number(t)<0)){i.next=2;break}return i.abrupt("return");case 2:e.getStory(t),window.scrollTo(0,0);case 4:case"end":return i.stop()}},i,e)}))()}},methods:{getStory:function(t){var e=this;return a()(s.a.mark(function i(){var n,r,a,o,c;return s.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return h.a.pgv(),n=e.$vux.loading,n.show("拼命加载中"),i.prev=3,i.next=6,Object(f.a)(t);case 6:r=i.sent,e.title=r.title,a='<div class="img-place-holder"></div>',o='<div class="img-place-holder"><img src='+r.image+' /><h1 class="headline-title">'+r.title+'</h1><span class="img-source">图片：'+r.image_source+"</span></div>",c=r.body.replace(a,o),c=c.replace(/src=\"http:/g,'src="'),e.content=c,n.hide(),i.next=19;break;case 16:i.prev=16,i.t0=i.catch(3),n.hide();case 19:case"end":return i.stop()}},i,e,[[3,16]])}))()},sharePage:function(){new p.a({title:this.title,desc:"来自知乎日报",link:location.href}).call("qqFriend")}},created:function(){h.a.init({sid:"500575360",cid:"500645799",autoReport:0,senseHash:1,senseQuery:1,performanceMonitor:1}),this.getStory(this.id)}}},function(t,e,i){"use strict";var n=i(77),s=i.n(n),r=i(68),a=i.n(r),o=i(69),c=i.n(o),l=i(194),u=i.n(l),d=i(195),h=i.n(d),f=i(199),p=i.n(f),v=i(207),m=i.n(v),_=function(t){function e(){return a()(this,e),u()(this,(e.__proto__||s()(e)).apply(this,arguments))}return p()(e,t),c()(e,[{key:"call",value:function(t,i){console.log(this);try{h()(e.prototype.__proto__||s()(e.prototype),"call",this).call(this,t,i)}catch(t){if(navigator.share)throw i=i||this._config,navigator.share({title:i.title,text:i.desc,url:i.link}),t}}}]),e}(m.a);e.a=_},,,,,,,,,,,,,,,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view-box",[i("x-header",{attrs:{slot:"header","left-options":{backText:""}},slot:"header"},[t._v(t._s(t.title))]),t._v(" "),i("main",{staticClass:"detail-container",attrs:{id:"detail"},domProps:{innerHTML:t._s(t.content)}})],1)},staticRenderFns:[]}},function(t,e,i){i(210);var n=i(3)(i(211),i(216),null,null);t.exports=n.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(212),s=i.n(n);e.default={name:"App",components:{Drawer:s.a},data:function(){return{drawerVisible:!1}},methods:{toggleDrawerVisible:function(){this.drawerVisible=!this.drawerVisible}}}},function(t,e,i){i(213);var n=i(3)(i(214),i(215),null,null);t.exports=n.exports},function(t,e){},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"drawer",props:{show:{type:Boolean,default:!1},placement:{type:String,default:"left"},showMode:{type:String,default:"overlay"},drawerStyle:Object},data:function(){return{drawerWidth:0,translateX:0}},watch:{show:function(){this.show?this.$emit("on-show"):this.$emit("on-hide"),"overlay"!==this.showMode&&(this.show?this.translateX="left"===this.placement?this.drawerWidth:-this.drawerWidth:this.translateX=0)}},methods:{hideMask:function(){this.$emit("update:show",!1)}},mounted:function(){this.$nextTick(function(){this.drawerWidth=this.$refs.drawer.clientWidth})}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-drawer"},[i("div",{staticClass:"vux-drawer-body",style:{transform:"translate3d("+t.translateX+"px, 0, 0)"}},[t._t("default"),t._v(" "),i("div",{staticClass:"drawer-mask",class:t.show?"vux-drawer-active":"",on:{click:t.hideMask}})],2),t._v(" "),i("div",{ref:"drawer",staticClass:"vux-drawer-content",class:["left"!==t.placement?"drawer-right":"drawer-left",t.show?"vux-drawer-active":""],style:t.drawerStyle},[t._t("drawer")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Drawer",{attrs:{show:t.drawerVisible,"show-mode":"push"},on:{"update:show":function(e){t.drawerVisible=e}}},[i("template",{slot:"drawer"},[i("div",{staticClass:"drawer-menu"},[t._v("页面建设中")])]),t._v(" "),i("keep-alive",[i("router-view",{on:{toggleDrawerVisible:t.toggleDrawerVisible}})],1)],2)},staticRenderFns:[]}}]),[79]);
//# sourceMappingURL=app.bacfa0aaca267dabed90.js.map