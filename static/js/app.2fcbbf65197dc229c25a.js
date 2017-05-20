webpackJsonp([0],[,,function(t,e,s){s(12);var i=s(0)(s(8),s(20),null,null);t.exports=i.exports},function(t,e,s){"use strict";var i=s(1),a=s(24),n=s(18),l=s.n(n),r=s(2),o=s.n(r),c=s(17),d=s.n(c);i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"StoryListFrame",component:l.a,redirect:"/story/xc",children:[{path:"/story/:type",name:"StoryList",component:o.a}]},{path:"/story_detail/:id",name:"StoryDetail",component:d.a}]})},function(t,e,s){s(13);var i=s(0)(s(5),s(21),null,null);t.exports=i.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Views",data:function(){return{animationName:"fade"}},watch:{$route:function(t,e){"StoryDetail"===t.name?this.animationName="slide-left":this.animationName="slide-right"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"homeHeader",data:function(){return{curIndex:-1,transitionName:"slide-left",interval:"",speed:4e3}},props:["stories"],watch:{stories:function(t){t.length>0&&this.startInterval()}},methods:{startInterval:function(){this.curIndex=++this.curIndex%this.stories.length,this.interval=setTimeout(this.startInterval,this.speed)},stopInterval:function(){clearTimeout(this.interval)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"story_detail",data:function(){return{title:"",story_body:"",id:""}},watch:{$route:function(t,e){"StoryDetail"===t.name&&(this.id=t.params.id)},id:function(t,e){this.getStory()}},created:function(){this.id=this.$route.params.id},methods:{getStory:function(){var t=this,e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e.readyState&&200==e.status){var s=JSON.parse(e.responseText);t.insertImage(s)}},e.open("GET","https://bird.ioliu.cn/v1?url=http://news-at.zhihu.com/api/4/news/"+this.id,!0),e.send()},insertImage:function(t){var e='<div class="img-place-holder">\t\t\t<img src='+t.image+' />\t\t\t<h1 class="headline-title">'+t.title+'</h1>\t\t\t<span class="img-source">图片：'+t.image_source+"</span>\t\t\t</div>",s=t.body.replace('<div class="img-place-holder"></div>',e);s=s.replace(/src=\"http:/g,'src="'),this.story_body=s,this.title=t.title},back:function(){history.go(-1)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(16),a=s.n(i);e.default={name:"app",data:function(){return{top_stories:["hello"],stories:[],urls:{latest:"http://news-at.zhihu.com/api/4/news/latest",xc:"http://news-at.zhihu.com/api/3/section/2"},type:"xc",viewType:"view_array"}},props:["colCount"],watch:{$route:function(t,e){"StoryList"===t.name&&(this.type=t.params.type),t.query&&(this.viewType=t.query.viewType)},type:function(t,e){this.getStoryList()}},components:{HomeHeader:a.a},created:function(){this.type=this.$route.params.type||"xc",this.viewType=this.$route.query.viewType||"view_array",this.getStoryList()},methods:{getStoryList:function(){var t=new XMLHttpRequest,e=this;t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){var s=JSON.parse(t.responseText);e.stories=s.stories,e.top_stories=s.top_stories}},t.open("GET","https://bird.ioliu.cn/v1?url="+this.urls[this.type]),t.send()}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),a=s.n(i);e.default={components:{StoryList:a.a},data:function(){return{viewType:"view_array"}},methods:{hideDrawer:function(t){if("a"===t.target.nodeName.toLowerCase()){var e=document.querySelector(".mdl-layout__obfuscator.is-visible");e&&e.click()}},toggleView:function(){this.viewType="view_array"===this.viewType?"view_list":"view_array",this.$router.replace(this.$route.path+"?viewType="+this.viewType)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),a=s(3),n=s(4),l=s.n(n);i.a.config.productionTip=!1,new i.a({el:"#app",router:a.a,components:{Views:l.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){s(11);var i=s(0)(s(6),s(19),null,null);t.exports=i.exports},function(t,e,s){s(15);var i=s(0)(s(7),s(23),null,null);t.exports=i.exports},function(t,e,s){s(14);var i=s(0)(s(9),s(22),null,null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-stories mdl-cell mdl-cell--12-col",on:{mouseover:t.stopInterval,mouseleave:t.startInterval}},[s("div",{staticClass:"container"},[s("div",{staticClass:"imgs"},t._l(t.stories,function(e,i){return s("div",{key:i,staticClass:"img",class:{"is-active":i===t.curIndex,"is-leaving":(i+1)%5===t.curIndex}},[s("router-link",{attrs:{to:{path:"/story_detail/"+e.id}}},[s("img",{attrs:{src:e.image,alt:e.title}}),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(e.title))])])],1)})),t._v(" "),s("nav",t._l(5,function(e){return s("label",{staticClass:"mdl-radio",attrs:{for:"option-"+(e-1)}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.curIndex,expression:"curIndex"}],staticClass:"mdl-radio__button",attrs:{type:"radio",id:"option-"+(e-1),name:"index"},domProps:{value:e-1,checked:t._q(t.curIndex,e-1)},on:{__c:function(s){t.curIndex=e-1}}})])}))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"stories"},["latest"===t.type?s("HomeHeader",{attrs:{stories:t.top_stories}}):t._e(),t._v(" "),s("ul",t._l(t.stories,function(e){return s("li",{staticClass:"mdl-cell mdl-cell--2-col mdl-card mdl-shadow--2dp",class:{"mdl-cell--2-col-phone":"view_array"===t.viewType,"mdl-cell--12-col-phone":"view_list"===t.viewType}},[s("div",{staticClass:"mdl-card__title",style:{backgroundImage:"url("+e.images[0]+")"}},[s("h2",{staticClass:"mdl-card__title-text"},[t._v(t._s(e.display_date))])]),t._v(" "),s("div",{staticClass:"mdl-card__supporting-text"},[t._v("\n        "+t._s(e.title)+"\n      ")]),t._v(" "),s("div",{staticClass:"mdl-card__actions mdl-card--border"},[s("router-link",{staticClass:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",attrs:{to:{path:"/story_detail/"+e.id}}},[t._v("阅读")])],1),t._v(" "),t._m(0,!0)])}))],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mdl-card__menu"},[s("button",{staticClass:"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"},[s("i",{staticClass:"material-icons"},[t._v("share")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:t.animationName}},[s("keep-alive",[s("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header"},[s("header",{staticClass:"mdl-layout__header"},[s("div",{staticClass:"mdl-layout__header-row"},[s("span",{staticClass:"mdl-layout-title"},[t._v("知乎日报")]),t._v(" "),s("div",{staticClass:"mdl-layout-spacer"}),t._v(" "),s("nav",{staticClass:"mdl-navigation"},[s("button",{staticClass:"mdl-button mdl-js-button mdl-button--icon",on:{click:t.toggleView}},[s("i",{staticClass:"material-icons"},[t._v(t._s(t.viewType))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]),t._v(" "),s("div",{staticClass:"mdl-layout__drawer"},[s("span",{staticClass:"mdl-layout-title"},[t._v("知乎日报")]),t._v(" "),s("nav",{staticClass:"mdl-navigation",on:{click:t.hideDrawer}},[s("router-link",{staticClass:"mdl-navigation__link is-active",attrs:{to:{path:"/story/xc",query:{viewType:t.viewType}}}},[t._v("瞎扯")]),t._v(" "),s("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/story/latest"}},[t._v("首页")])],1)]),t._v(" "),s("main",{staticClass:"mdl-layout__content"},[s("div",{staticClass:"page-content"},[s("keep-alive",[s("router-view")],1)],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"mdl-button mdl-js-button mdl-button--icon",attrs:{id:"demo-menu-lower-right"}},[s("i",{staticClass:"material-icons"},[t._v("more_vert")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect",attrs:{for:"demo-menu-lower-right"}},[s("li",{staticClass:"mdl-menu__item",attrs:{for:"switch-1"}},[s("label",{attrs:{for:"switch-model"}},[t._v("夜间模式")]),t._v(" "),s("label",{staticClass:"mdl-switch mdl-js-switch mdl-js-ripple-effect",attrs:{for:"switch-model"}},[s("span",{staticClass:"mdl-switch__label"}),t._v(" "),s("input",{staticClass:"mdl-switch__input",attrs:{type:"checkbox",id:"switch-model",checked:""}})])]),t._v(" "),s("li",{staticClass:"mdl-menu__item mdl-menu__item--full-bleed-divider"},[t._v("Another Action")]),t._v(" "),s("li",{staticClass:"mdl-menu__item",attrs:{disabled:""}},[t._v("Disabled Action")]),t._v(" "),s("li",{staticClass:"mdl-menu__item"},[t._v("Yet Another Action")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header"},[s("header",{staticClass:"mdl-layout__header"},[s("div",{staticClass:"mdl-layout-icon"},[s("button",{staticClass:"mdl-button mdl-button--icon",on:{click:t.back}},[s("i",{staticClass:"material-icons",staticStyle:{"font-size":"24px"}},[t._v("keyboard_arrow_left")])])]),t._v(" "),s("div",{staticClass:"mdl-layout__header-row"},[s("span",{staticClass:"mdl-layout__title"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"mdl-layout-spacer"}),t._v(" "),t._m(0)])]),t._v(" "),s("main",{staticClass:"mdl-layout__content"},[s("div",{staticClass:"page-content",domProps:{innerHTML:t._s(t.story_body)}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"mdl-navigation"},[s("button",{staticClass:"mdl-button mdl-button--icon"},[s("i",{staticClass:"material-icons",staticStyle:{"font-size":"24px"}},[t._v("share")])])])}]}}],[10]);
//# sourceMappingURL=app.2fcbbf65197dc229c25a.js.map