(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ed9e01f4"],{"09fe":function(t,n,e){},"11e9":function(t,n,e){var i=e("52a7"),r=e("4630"),o=e("6821"),a=e("6a99"),c=e("69a8"),s=e("c69a"),u=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?u:function(t,n){if(t=o(t),n=a(n,!0),s)try{return u(t,n)}catch(e){}if(c(t,n))return r(!i.f.call(t,n),t[n])}},"44bf":function(t,n,e){"use strict";var i=e("2638"),r=e.n(i),o=e("d282"),a=e("a142"),c=e("ea8e"),s=e("ad06"),u=Object(o["a"])("image"),l=u[0],d=u[1];n["a"]=l({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"warning-o"},loadingIcon:{type:String,default:"photo-o"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return Object(a["b"])(this.width)&&(t.width=Object(c["a"])(this.width)),Object(a["b"])(this.height)&&(t.height=Object(c["a"])(this.height)),Object(a["b"])(this.radius)&&(t.overflow="hidden",t.borderRadius=Object(c["a"])(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var n=t.el;n===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var n=t.el;n!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:d("loading")},[this.slots("loading")||t(s["a"],{attrs:{name:this.loadingIcon},class:d("loading-icon")})]):this.error&&this.showError?t("div",{class:d("error")},[this.slots("error")||t(s["a"],{attrs:{name:this.errorIcon},class:d("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,n={class:d("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",r()([{ref:"image",directives:[{name:"lazy",value:this.src}]},n])):t("img",r()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},n]))}},render:function(){var t=arguments[0];return t("div",{class:d({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder()])}})},"4d48":function(t,n,e){"use strict";e("68ef"),e("bf60")},"5dbc":function(t,n,e){var i=e("d3f4"),r=e("8b97").set;t.exports=function(t,n,e){var o,a=n.constructor;return a!==e&&"function"==typeof a&&(o=a.prototype)!==e.prototype&&i(o)&&r&&r(t,o),t}},"666c":function(t,n,e){"use strict";e.r(n);var i,r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"goods_topic"},[e("div",{staticClass:"topic-detail",domProps:{innerHTML:t._s(t.topic.content)}}),e("van-row",{attrs:{gutter:""}},t._l(t.topicGoods,(function(n,i){return e("van-col",{key:i,attrs:{span:"12"}},[e("router-link",{attrs:{to:{path:"/items/detail/"+n.id}}},[e("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:n.picUrl}})]),e("div",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(n.name))]),e("div",{staticStyle:{"margin-left":"20px",color:"#ab956d"}},[t._v("￥ "+t._s(n.retailPrice))])],1)})),1)],1)},o=[],a=e("bd86"),c=(e("81e6"),e("9ffb")),s=(e("4d48"),e("d1e1")),u=(e("7f7f"),e("9cb7"),e("66fd")),l=(e("c5f6"),e("4ec3")),d={props:{topicId:[String,Number]},data:function(){return{topic:{},topicGoods:[],topicRelated:[]}},created:function(){this.init()},methods:{init:function(){var t=this;Object(l["U"])({id:this.topicId}).then((function(n){t.topic=n.data.data.topic,t.topicGoods=n.data.data.goods})),Object(l["W"])({id:this.topicId}).then((function(n){t.topicRelated=n.data.data}))},itemClick:function(t){this.$router.push("/items/detail/".concat(t))}},components:(i={},Object(a["a"])(i,u["a"].name,u["a"]),Object(a["a"])(i,s["a"].name,s["a"]),Object(a["a"])(i,c["a"].name,c["a"]),i)},f=d,h=(e("91a0"),e("2877")),p=Object(h["a"])(f,r,o,!1,null,"37c1fd8e",null);n["default"]=p.exports},"66fd":function(t,n,e){"use strict";var i=e("2638"),r=e.n(i),o=e("d282"),a=e("a142"),c=e("ba31"),s=e("a3e2"),u=e("44bf"),l=Object(o["a"])("card"),d=l[0],f=l[1];function h(t,n,e,i){var o,l=n.thumb,d=e.num||Object(a["b"])(n.num),h=e.price||Object(a["b"])(n.price),p=e["origin-price"]||Object(a["b"])(n.originPrice),g=d||h||p||e.bottom;function b(t){Object(c["a"])(i,"click-thumb",t)}function v(){if(e.tag||n.tag)return t("div",{class:f("tag")},[e.tag?e.tag():t(s["a"],{attrs:{mark:!0,type:"danger"}},[n.tag])])}function m(){if(e.thumb||l)return t("a",{attrs:{href:n.thumbLink},class:f("thumb"),on:{click:b}},[e.thumb?e.thumb():t(u["a"],{attrs:{src:l,width:"100%",height:"100%",fit:"cover","lazy-load":n.lazyLoad}}),v()])}function y(){return e.title?e.title():n.title?t("div",{class:[f("title"),"van-multi-ellipsis--l2"]},[n.title]):void 0}function S(){return e.desc?e.desc():n.desc?t("div",{class:[f("desc"),"van-ellipsis"]},[n.desc]):void 0}function O(){var e=n.price.toString().split(".");return t("div",[t("span",{class:f("price-currency")},[n.currency]),t("span",{class:f("price-integer")},[e[0]]),".",t("span",{class:f("price-decimal")},[e[1]])])}function j(){if(h)return t("div",{class:f("price")},[e.price?e.price():O()])}function k(){if(p){var i=e["origin-price"];return t("div",{class:f("origin-price")},[i?i():n.currency+" "+n.originPrice])}}function N(){if(d)return t("div",{class:f("num")},[e.num?e.num():"x"+n.num])}function _(){if(e.footer)return t("div",{class:f("footer")},[e.footer()])}return t("div",r()([{class:f()},Object(c["b"])(i,!0)]),[t("div",{class:f("header")},[m(),t("div",{class:f("content",{centered:n.centered})},[t("div",[y(),S(),null==e.tags?void 0:e.tags()]),g&&t("div",{class:"van-card__bottom"},[null==(o=e["price-top"])?void 0:o.call(e),j(),k(),N(),null==e.bottom?void 0:e.bottom()])])]),_()])}h.props={tag:String,desc:String,thumb:String,title:String,centered:Boolean,lazyLoad:Boolean,thumbLink:String,num:[Number,String],price:[Number,String],originPrice:[Number,String],currency:{type:String,default:"¥"}},n["a"]=d(h)},"7b0a":function(t,n,e){},"81e6":function(t,n,e){"use strict";e("68ef"),e("7b0a")},8647:function(t,n,e){},"8b97":function(t,n,e){var i=e("d3f4"),r=e("cb7c"),o=function(t,n){if(r(t),!i(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,i){try{i=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),n=!(t instanceof Array)}catch(r){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:i(t,e),t}}({},!1):void 0),check:o}},9093:function(t,n,e){var i=e("ce10"),r=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},"91a0":function(t,n,e){"use strict";var i=e("8647"),r=e.n(i);r.a},9884:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return c}));var i=e("2b0e");function r(t){var n=[];function e(t){t.forEach((function(t){n.push(t),t.componentInstance&&e(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&e(t.children)}))}return e(t),n}function o(t,n){var e=n.$vnode.componentOptions;if(e&&e.children){var i=r(e.children);t.sort((function(t,n){return i.indexOf(t.$vnode)-i.indexOf(n.$vnode)}))}}function a(t,n){var e,r;void 0===n&&(n={});var a=n.indexKey||"index";return i["a"].extend({inject:(e={},e[t]={default:null},e),computed:(r={parent:function(){return this.disableBindRelation?null:this[t]}},r[a]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},r),mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(n){return n!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);o(t,this.parent),this.parent.children=t}}}})}function c(t){return{provide:function(){var n;return n={},n[t]=this,n},data:function(){return{children:[]}}}}},"9b7e":function(t,n,e){},"9cb7":function(t,n,e){"use strict";e("68ef"),e("9d70"),e("3743"),e("09fe"),e("9b7e"),e("ea82")},"9ffb":function(t,n,e){"use strict";var i=e("d282"),r=e("9884"),o=Object(i["a"])("col"),a=o[0],c=o[1];n["a"]=a({mixins:[Object(r["a"])("vanRow")],props:{span:[Number,String],offset:[Number,String],tag:{type:String,default:"div"}},computed:{style:function(){var t=this.index,n=this.parent||{},e=n.spaces;if(e&&e[t]){var i=e[t],r=i.left,o=i.right;return{paddingLeft:r?r+"px":null,paddingRight:o?o+"px":null}}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,n=arguments[0],e=this.span,i=this.offset;return n(this.tag,{style:this.style,class:c((t={},t[e]=e,t["offset-"+i]=i,t)),on:{click:this.onClick}},[this.slots()])}})},a3e2:function(t,n,e){"use strict";var i=e("2638"),r=e.n(i),o=e("d282"),a=e("ba31"),c=e("b1d2"),s=e("ad06"),u=Object(o["a"])("tag"),l=u[0],d=u[1];function f(t,n,e,i){var o,u,l=n.type,f=n.mark,h=n.plain,p=n.color,g=n.round,b=n.size,v=h?"color":"backgroundColor",m=(o={},o[v]=p,o);n.textColor&&(m.color=n.textColor);var y={mark:f,plain:h,round:g};b&&(y[b]=b);var S=n.closeable&&t(s["a"],{attrs:{name:"cross"},class:d("close"),on:{click:function(t){t.stopPropagation(),Object(a["a"])(i,"close")}}});return t("transition",{attrs:{name:n.closeable?"van-fade":null}},[t("span",r()([{key:"content",style:m,class:[d([y,l]),(u={},u[c["d"]]=h,u)]},Object(a["b"])(i,!0)]),[null==e.default?void 0:e.default(),S])])}f.props={size:String,mark:Boolean,color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean,type:{type:String,default:"default"}},n["a"]=l(f)},aa77:function(t,n,e){var i=e("5ca1"),r=e("be13"),o=e("79e5"),a=e("fdef"),c="["+a+"]",s="​",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),d=function(t,n,e){var r={},c=o((function(){return!!a[t]()||s[t]()!=s})),u=r[t]=c?n(f):a[t];e&&(r[e]=u),i(i.P+i.F*c,"String",r)},f=d.trim=function(t,n){return t=String(r(t)),1&n&&(t=t.replace(u,"")),2&n&&(t=t.replace(l,"")),t};t.exports=d},bf60:function(t,n,e){},c5f6:function(t,n,e){"use strict";var i=e("7726"),r=e("69a8"),o=e("2d95"),a=e("5dbc"),c=e("6a99"),s=e("79e5"),u=e("9093").f,l=e("11e9").f,d=e("86cc").f,f=e("aa77").trim,h="Number",p=i[h],g=p,b=p.prototype,v=o(e("2aeb")(b))==h,m="trim"in String.prototype,y=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=m?n.trim():f(n,3);var e,i,r,o=n.charCodeAt(0);if(43===o||45===o){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+n}for(var a,s=n.slice(2),u=0,l=s.length;u<l;u++)if(a=s.charCodeAt(u),a<48||a>r)return NaN;return parseInt(s,i)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof p&&(v?s((function(){b.valueOf.call(e)})):o(e)!=h)?a(new g(y(n)),e,p):y(n)};for(var S,O=e("9e1e")?u(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;O.length>j;j++)r(g,S=O[j])&&!r(p,S)&&d(p,S,l(g,S));p.prototype=b,b.constructor=p,e("2aba")(i,h,p)}},d1e1:function(t,n,e){"use strict";var i=e("d282"),r=e("9884"),o=Object(i["a"])("row"),a=o[0],c=o[1];n["a"]=a({mixins:[Object(r["b"])("vanRow")],props:{type:String,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},computed:{spaces:function(){var t=Number(this.gutter);if(t){var n=[],e=[[]],i=0;return this.children.forEach((function(t,n){i+=Number(t.span),i>24?(e.push([n]),i-=24):e[e.length-1].push(n)})),e.forEach((function(e){var i=t*(e.length-1)/e.length;e.forEach((function(e,r){if(0===r)n.push({right:i});else{var o=t-n[e-1].right,a=i-o;n.push({left:o,right:a})}}))})),n}}},methods:{onClick:function(t){this.$emit("click",t)}},render:function(){var t,n=arguments[0],e=this.align,i=this.justify,r="flex"===this.type;return n(this.tag,{class:c((t={flex:r},t["align-"+e]=r&&e,t["justify-"+i]=r&&i,t)),on:{click:this.onClick}},[this.slots()])}})},ea82:function(t,n,e){},fdef:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);