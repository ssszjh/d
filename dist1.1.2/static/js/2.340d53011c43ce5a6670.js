webpackJsonp([2],{"3SXl":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e={data:function(){return{allLoaded:!1,auto:!1,page:1,goods:[],allpage:""}},created:function(){var t=this;this.$axios.get("/goods_getListByPage?page="+this.page).then(function(a){t.goods=a.data.list,t.allpage=a.data.allPage}).catch(function(t){console.log(t)})},methods:{loadBottom:function(){var t=this;++this.page,this.page>this.allpage?(this.$toast({message:"没有更多商品了，别刷了",position:"middle",duration:3e3}),this.allLoaded=!0):this.$axios.get("/goods_getListByPage?page="+this.page).then(function(a){t.goods=t.goods.concat(a.data.list)}).catch(function(t){console.log(t)})}}},i={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tmpl",staticStyle:{height:"100vh",overflow:"scroll"}},[s("nav-bar",{attrs:{title:"商品列表"}}),t._v(" "),s("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,autoFill:t.auto}},[s("ul",{staticClass:"mui-table-view mui-grid-view"},t._l(t.goods,function(a){return s("li",{key:a.goods_id,staticClass:"mui-table-view-cell mui-media mui-col-xs-6"},[s("router-link",{attrs:{to:{name:"goodscontent",query:{id:a.goods_id}}}},[s("img",{staticClass:"mui-media-object",attrs:{src:a.image}}),t._v(" "),s("div",{staticClass:"mui-media-body"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"desc"},[s("div",{staticClass:"sell"},[s("span",[t._v("￥"+t._s(a.price_current))]),t._v(" "),s("s",[t._v("￥"+t._s(a.price_original))])]),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"hot"},[t._v("\n                                热卖中\n                            ")]),t._v(" "),s("div",{staticClass:"count"},[t._v("\n                                "+t._s(a.num)+"\n                            ")])])])])],1)}))])],1)},staticRenderFns:[]};var o=s("VU/8")(e,i,!1,function(t){s("DE0O")},"data-v-e278bac0",null);a.default=o.exports},DE0O:function(t,a){}});