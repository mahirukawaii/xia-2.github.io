webpackJsonp([3],{"2gSA":function(t,e){},B2s2:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("mvHQ"),i=s.n(n),a={name:"GoodsDetail",components:{Card:s("aC/Y").a},data:function(){return{sku:this.$route.params.id,current:0,comments:"",num:1}},methods:{onChange:function(t){this.current=t},addToCart:function(){var t=this.getGoodsDetail;t.num=this.num;var e=JSON.parse(localStorage.getItem("users")),s=this.$store.state.userInfo;if(null===s)this.$message({showClose:!0,message:"尊敬的用户，请您先完成登录!",type:"info"}),this.$router.push("/MB/login?isLogin=true");else{var n=e.filter(function(t){return t.username===s.username})[0];console.log(n);var a=this.isHaveThisGoods(n,t);if(console.log(a),a){for(var o=n.carts,r=0;r<o.length;r++)o[r].sku===t.sku&&(o[r].num+=t.num);console.log(n.carts),n.carts=o}else n.carts.push(t);this.$store.state.userInfo=n;var c=e.find(function(t){return t.username==s.username});console.log("该用户对应的索引是"+e.indexOf(c)),e.splice(e.indexOf(c),1,n),localStorage.setItem("users",i()(e)),this.$store.commit("updateUsers",e)}},onClickBack:function(){this.$router.go(-1)},onClickRight:function(){this.toPage("/MB/cart")},isHaveThisGoods:function(t,e){var s=t.carts.filter(function(t){return t.sku===e.sku});return console.log(s),0!==s.length},toPage:function(t){this.$router.push({path:t})}},computed:{getCartsLength:function(){var t=this.$store.state.userInfo;return void 0===t||null===t?0:t.carts.length},getGoodsDetail:function(){return this.$route.params.goodsDetail},getCarousel:function(){if(void 0!==this.getGoodsDetail){var t=this.getGoodsDetail["轮播图"].split("/\r\n");return t[t.length-1]=t[t.length-1].slice(0,t[t.length-1].length-1),t}},getImg:function(t){return this.getCarousel[t]},getCarouselLength:function(){return void 0!==this.getCarousel?this.getCarousel.length:0},getPrice:function(){if(void 0!==this.getGoodsDetail)return this.getGoodsDetail["价格"]},getTitle:function(){if(void 0!==this.getGoodsDetail)return this.getGoodsDetail["标题"]},getDetail:function(){if(void 0!==this.getGoodsDetail)return this.getGoodsDetail["详情HTML"]}},created:function(){var t=this;this.$axios({type:"get",url:"http://localhost:8080/api/comments"}).then(function(e){console.log(e.data.comments),t.comments=e.data.comments.slice(0,3)}).catch(function(t){console.log(t)})}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","right-text":"购物车","left-arrow":""},on:{"click-left":t.onClickBack,"click-right":t.onClickRight}}),t._v(" "),s("div",{attrs:{"data-id":t.getCarousel}},[s("van-swipe",{on:{change:t.onChange},scopedSlots:t._u([{key:"indicator",fn:function(){return[s("div",{staticClass:"custom-indicator"},[t._v("\n          "+t._s(t.current+1)+"/"+t._s(t.getCarouselLength)+"\n        ")])]},proxy:!0}])},t._l(t.getCarousel,function(t,e){return s("van-swipe-item",{key:e},[s("van-image",{attrs:{src:t}})],1)}),1)],1),t._v(" "),s("div",{staticClass:"text"},[s("div",{staticClass:"value"},[s("span",{staticClass:"rmb"},[t._v(" ¥ ")]),t._v(" "),s("span",{staticClass:"value"},[t._v(" "+t._s(t.getPrice)+" ")])]),t._v(" "),s("div",{staticClass:"title van-multi-ellipsis--l2"},[t._v("\n      "+t._s(t.getTitle)+"\n    ")])]),t._v(" "),t._m(0),t._v(" "),s("Card",{attrs:{hasTitle:!0,title:"商品评论",rightText:"查看所有评论"},scopedSlots:t._u([{key:"content",fn:function(){return t._l(t.comments,function(e,n){return s("div",{key:n,staticClass:"content"},[s("div",{staticClass:"top"},[s("van-image",{attrs:{src:void 0===e?"":e.headImg,round:"",width:"3.2rem",height:"3.2rem"}}),t._v(" "),s("span",{staticClass:"name inline-block"},[t._v("\n            "+t._s(void 0===e?"":e.name)+"\n          ")]),t._v(" "),s("van-rate",{attrs:{value:e.star,size:25,color:"#ffd21e","void-icon":"star","void-color":"#eee"}})],1),t._v(" "),s("div",{staticClass:"txt van-multi-ellipsis--l2 comment"},[t._v("\n          "+t._s(void 0===e?"":e.content)+"\n        ")]),t._v(" "),s("div",{staticClass:"time"},[t._v("\n          评论时间：\n          "+t._s(void 0===e?"":e.datetime)+"\n        ")]),t._v(" "),n!==t.comments.length-1?s("van-divider"):t._e()],1)})},proxy:!0}])}),t._v(" "),s("van-divider",{style:{color:"#aaa",borderColor:"#bbb",padding:"0 16px"}},[t._v("\n    到底了\n  ")]),t._v(" "),s("van-goods-action",[s("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"}}),t._v(" "),s("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",badge:t.getCartsLength},on:{click:function(e){return t.toPage("/MB/cart")}}}),t._v(" "),s("van-goods-action-icon",{attrs:{icon:"shop-o",text:"店铺"}}),t._v(" "),s("van-goods-action-button",{attrs:{type:"info",text:"加入购物车"},on:{click:function(e){return t.addToCart()}}})],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text box space-between"},[e("div",{staticClass:"select"},[e("span",{staticClass:"label"},[this._v("选择")]),this._v(" "),e("span",{staticClass:"txt"},[this._v("请选择颜色分类")])]),this._v(" "),e("span",{staticClass:"icon"},[this._v(" > ")])])}]};var r=s("VU/8")(a,o,!1,function(t){s("2gSA")},"data-v-6aa02d69",null);e.default=r.exports},NTZE:function(t,e){},"aC/Y":function(t,e,s){"use strict";var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[(t.hasTitle,s("div",{staticClass:"title"},[s("span",{staticClass:"title"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),s("span",{staticClass:"rightText"},[t._v(" "+t._s(t.rightText)+" > ")])])),t._v(" "),s("van-divider"),t._v(" "),t._t("content")],2)},staticRenderFns:[]};var i=s("VU/8")({name:"MyCard",props:["title","rightText","hasTitle"]},n,!1,function(t){s("NTZE")},"data-v-fe5adbce",null);e.a=i.exports}});
//# sourceMappingURL=3.eff747c8ae2a224112d7.js.map