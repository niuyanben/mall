(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-739f4875"],{"11e9":function(t,e,n){var i=n("52a7"),a=n("4630"),r=n("6821"),c=n("6a99"),s=n("69a8"),o=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=r(t),e=c(e,!0),o)try{return l(t,e)}catch(n){}if(s(t,e))return a(!i.f.call(t,e),t[e])}},1858:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field_group"},[t._t("default")],2)},a=[],r={name:"md-field-group"},c=r,s=(n("3689"),n("2877")),o=Object(s["a"])(c,i,a,!1,null,"5d886c28",null);e["a"]=o.exports},3689:function(t,e,n){"use strict";var i=n("3fb8"),a=n.n(i);a.a},"3fb8":function(t,e,n){},"498e":function(t,e,n){},"4b3c":function(t,e,n){},"61f7":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var i=/^1[0-9]{10}$/,a=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/},"81d4":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md_field",class:{md_field_hasIcon:!!t.icon,md_field_isError:t.isError}},[t.icon?n("van-icon",{staticClass:"md_feld_icon",attrs:{name:t.icon}}):t._e(),n("div",{staticClass:"md_field_control"},[n("input",t._g(t._b({attrs:{type:t.type},domProps:{value:t.value}},"input",t.$attrs,!1),t.listeners))]),n("div",[t._t("rightIcon",[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],attrs:{name:t.rightIcon},on:{click:t.rightClick}})])],2)],1)},a=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var o={name:"md-field",props:{value:{},type:{type:String,default:"text"},rightIcon:String,icon:String,isError:Boolean},computed:{listeners:function(){return s(s({},this.$listeners),{},{input:this.onInput})}},methods:{onInput:function(t){this.$emit("input",t.target.value)},rightClick:function(t){this.$emit("right-click",t)}}},l=o,u=(n("a396"),n("2877")),f=Object(u["a"])(l,i,a,!1,null,"03a0e27d",null);e["a"]=f.exports},"8e6e":function(t,e,n){var i=n("5ca1"),a=n("990b"),r=n("6821"),c=n("11e9"),s=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=r(t),o=c.f,l=a(i),u={},f=0;while(l.length>f)n=o(i,e=l[f++]),void 0!==n&&s(u,e,n);return u}})},9093:function(t,e,n){var i=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},"990b":function(t,e,n){var i=n("9093"),a=n("2621"),r=n("cb7c"),c=n("7726").Reflect;t.exports=c&&c.ownKeys||function(t){var e=i.f(r(t)),n=a.f;return n?e.concat(n(t)):e}},"9c85":function(t,e,n){t.exports=n.p+"static/img/avatar_default.89845f4e.png"},a396:function(t,e,n){"use strict";var i=n("4b3c"),a=n.n(i);a.a},dc3f:function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[t._m(0),n("md-field-group",[n("md-field",{attrs:{icon:"username",placeholder:"请输入测试账号 user123","right-icon":"clear-full",name:"user","data-vv-as":"帐号"},on:{"right-click":t.clearText},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}}),n("md-field",{attrs:{icon:"lock",placeholder:"请输入测试密码 user123",type:t.visiblePass?"text":"password","right-icon":t.visiblePass?"eye-open":"eye-close","data-vv-as":"密码",name:"password"},on:{"right-click":function(e){t.visiblePass=!t.visiblePass}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("div",{staticClass:"clearfix"},[n("div",{staticClass:"float-l"},[n("router-link",{attrs:{to:"/login/registerGetCode"}},[t._v("免费注册")])],1),n("div",{staticClass:"float-r"},[n("router-link",{attrs:{to:"/login/forget"}},[t._v("忘记密码")])],1)]),n("van-button",{attrs:{size:"large",type:"danger",loading:t.isLogining},on:{click:t.loginSubmit}},[t._v("登录")])],1),n("div",{staticClass:"text-desc text-center bottom_positon"},[t._v("技术支持: litemall")])],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store_header"},[i("div",{staticClass:"store_avatar"},[i("img",{attrs:{src:n("9c85"),alt:"头像",width:"55",height:"55"}})]),i("div",{staticClass:"store_name"},[t._v("litemall-vue")])])}],c=n("bd86"),s=(n("e7e5"),n("d399")),o=(n("7f7f"),n("81d4")),l=n("1858"),u=n("4ec3"),f=n("3c96"),d=n("61f7"),v={name:"login-request",components:(i={},Object(c["a"])(i,o["a"].name,o["a"]),Object(c["a"])(i,l["a"].name,l["a"]),Object(c["a"])(i,"Toast",s["a"]),i),data:function(){return{account:"",password:"",visiblePass:!1,isLogining:!1,userInfo:{}}},methods:{clearText:function(){this.account=""},validate:function(){},login:function(){var t=this,e=this.getLoginData();Object(u["h"])(e).then((function(e){t.userInfo=e.data.data.userInfo,Object(f["c"])({Authorization:e.data.data.token,avatar:t.userInfo.avatarUrl,nickName:t.userInfo.nickName}),t.routerRedirect()})).catch((function(t){s["a"].fail(t.data.errmsg)}))},loginSubmit:function(){this.isLogining=!0;try{this.validate(),this.login(),this.isLogining=!1}catch(t){console.log(t.message),this.isLogining=!1}},routerRedirect:function(){window.location="#/user/"},getLoginData:function(){var t,e=this.password,n=this.getUserType(this.account);return t={},Object(c["a"])(t,n,this.account),Object(c["a"])(t,"password",e),t},getUserType:function(t){var e=d["b"].test(t)?"mobile":d["a"].test(t)?"email":"username";return e}}},p=v,g=(n("ee01"),n("2877")),h=Object(g["a"])(p,a,r,!1,null,"57cc87f1",null);e["default"]=h.exports},ee01:function(t,e,n){"use strict";var i=n("498e"),a=n.n(i);a.a},f1ae:function(t,e,n){"use strict";var i=n("86cc"),a=n("4630");t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}}}]);