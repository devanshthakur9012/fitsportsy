/*!
 * Stock Portfolio Tracker
 * ------------------------------
 * Version 2.1.0, built on Friday, August 11, 2023
 * Copyright (c) Financial Apps and Plugins <info@financialplugins.com>. All rights reserved.
 * Demo: https://financialplugins.com/products/stock-portfolio-tracker/
 * Purchase (WordPress plugin): https://1.envato.market/ZQN1Zk
 * Purchase (PHP plugin): https://1.envato.market/zN4376
 * 
 */
(window.webpackJsonpspt210=window.webpackJsonpspt210||[]).push([[108],{29:function(t,e,s){"use strict";var a=s(35),n=s(0),o=s(190);function r(t){return function(t){if(Array.isArray(t)){for(var e=0,s=new Array(t.length);e<t.length;e++)s[e]=t[e];return s}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable})))),a.forEach((function(e){l(t,e,s[e])}))}return t}function l(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var c={computed:i({},Object(o.c)(n.a.code,["user","portfolios","transactions","marketData","display","error"]),{code:function(){return n.a.code}}),methods:i({},Object(o.b)(n.a.code,["getAssets","getLiveMarketData","getHistoricalMarketData","getPortfolio","getPortfolios","createPortfolio","editPortfolio","deletePortfolio","sharePortfolio","unsharePortfolio","getTransactions","createTransaction","editTransaction","closeTransaction","deleteTransaction","loading","done","clearData","processError","clearError"]),{__:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=n.a.text[t]||t;return e?a.c.apply(void 0,[s].concat(r(e))):s},filterAssets:function(t,e){var s=e.toLowerCase();return t.filter((function(t){return 0===t.value.toLowerCase().lastIndexOf(s,0)})).concat(t.filter((function(t){return 0!==t.value.toLowerCase().lastIndexOf(s,0)&&t.name.toLowerCase().indexOf(s)>-1})))},combineAssets:function(t){return t.reduce((function(t,e){return i({},t,e)}),{})}})},u=s(20),p=Object(u.a)(c,void 0,void 0,!1,null,null,null);p.options.__file="assets/js/src/components/_mixins/helper.vue";e.a=p.exports},298:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(35),o=s(104),r=s(190),i=s(191),l=s.n(i),c=function(){function t(t){var e={url:a.a.ajaxUrl,method:a.a.ajaxMethod};if("post"==e.method){var s=new FormData;Object.keys(t).forEach((function(e){Object(n.e)(t[e])?t[e].forEach((function(t){s.append(e+"[]",t)})):s.append(e,t[e])})),e.data=s}else e.params=t;return e}function e(t){var e=(new Date).getTime()/1e3-t;return e<2592e3?"1mo":e<7776e3?"3mo":e<15552e3?"6mo":e<31536e3?"1y":e<63072e3?"2y":"5y"}return{getLiveQuotes:function(e){var s=e.symbols,n=(e.currency,{action:a.a.code+"GetMarketData",nonce:a.a.ajaxNonce,type:"quotes",assets:s});return new Promise((function(e,s){l()(t(n)).then((function(t){200==t.status&&t.data.success&&t.data.data.length?e(t.data.data):s()}))}))},getHistoricalQuotes:function(s){var n=s.symbol,o=s.startDate,r=(s.currency,{action:a.a.code+"GetMarketData",nonce:a.a.ajaxNonce,type:"history",assets:[n],range:e(o),interval:"1d"});return new Promise((function(e,s){l()(t(r)).then((function(t){if(200==t.status&&t.data.success&&t.data.data.length){var a=t.data.data[0],n={};a.date.forEach((function(t,e){n[t]=a.close[e]||0})),e(n)}else s()}))}))}}},u=s(44);s(198);function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function d(t){return function(t){if(Array.isArray(t))return t}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}o.a.use(r.a);var f={namespaced:!0,state:{user:null,portfolios:null,transactions:null,marketData:null,sources:null,promises:null,display:!1,error:null},mutations:{update:function(t,e){!function t(e,s,a){var n=d(s.split(".")),r=n[0],i=n.slice(1);null!==e[r]&&void 0!==e[r]||o.a.set(e,r,{}),i.length?t(e[r],i.join("."),a):e[r]=a}(t,e.name,e.value)}},actions:{init:function(t,e){var s=t.commit;e&&s("update",{name:"user",value:{uid:e.uid,email:e.email}}),s("update",{name:"sources",value:{rest:new c}})},getAssets:function(t){var e=t.state,s=t.commit,o=[];return a.a.markets.forEach((function(t){var r=Object(n.d)(e,"promises.assets.".concat(t));r||(r=l.a.get("".concat(a.a.pluginUrl,"/assets/dist/markets/").concat(t,".json")).then((function(t){return t.data})),s("update",{name:"promises.assets.".concat(t),value:r})),o.push(r)})),Promise.all(o)},getHistoricalMarketData:function(t,e){var s=t.state,a=t.commit,o=e.symbols,r=e.currency,i=[];return Object.keys(o).forEach((function(t){var e=new Promise((function(e,i){s.sources.rest.getHistoricalQuotes({symbol:t,startDate:o[t],currency:r}).then((function(s){a("update",{name:"marketData.history."+t,value:s}),e()})).catch((function(t){i(Object(n.d)(t,"message","Unknown error"))}))}));i.push(e)})),Promise.all(i)},getLiveMarketData:function(t,e){var s=t.state,a=t.commit,n=e.symbols,o=e.currency;return n.length?new Promise((function(t,e){s.sources.rest.getLiveQuotes({symbols:n,currency:o}).then((function(e){e.forEach((function(t){a("update",{name:"marketData.live."+t.symbol,value:t})})),t()})).catch((function(t){e(t.message)}))})):Promise.resolve()},getPortfolios:function(t){var e=t.state,s=t.commit,a=Object(n.d)(e,"promises.portfolios");return a||(a=new Promise((function(t,a){u.a.database().ref("users/"+e.user.uid+"/portfolios").on("value",(function(e){s("update",{name:"portfolios",value:e.val()}),t()}))})),s("update",{name:"promises.portfolios",value:a})),a},getPortfolio:function(t,e){var s=t.state,a=t.commit,o=e.pid,r=e.shared,i=void 0!==r&&r,l=Object(n.d)(s,"promises.portfolio."+o);return l||(l=new Promise((function(t,e){new Promise((function(t,e){i?u.a.database().ref("shared-portfolios/"+o).once("value",(function(s){var a=s.val();a?t(a):e(new Error("No such shared portfolio found."))})):t(s.user.uid)})).then((function(t){return new Promise((function(e,n){s.portfolios&&s.portfolios[o]?e():u.a.database().ref("users/"+t+"/portfolios/"+o).once("value",(function(s){var r=s.val();if(r){var l=i?function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable})))),a.forEach((function(e){p(t,e,s[e])}))}return t}({},r,{uid:t}):r;a("update",{name:"portfolios",value:p({},o,l)}),e()}else n(new Error("Portfolio not found."))}))}))})).catch((function(t){e(t)})).then((function(){t()}))})),a("update",{name:"promises.portfolio."+o,value:l})),l},createPortfolio:function(t,e){var s=t.state,a=e.title,n=e.description,o=e.currency;return u.a.database().ref("users/"+s.user.uid+"/portfolios").push({title:a,desc:n,ccy:o})},editPortfolio:function(t,e){var s=t.state,a=e.pid,n=e.title,o=e.description,r=e.currency;return u.a.database().ref("users/"+s.user.uid+"/portfolios/"+a).update({title:n,desc:o,ccy:r})},sharePortfolio:function(t,e){var s,a=t.state;return u.a.database().ref().update((p(s={},"users/"+a.user.uid+"/portfolios/"+e+"/shared",!0),p(s,"shared-portfolios/"+e,a.user.uid),s))},unsharePortfolio:function(t,e){var s,a=t.state;return u.a.database().ref().update((p(s={},"users/"+a.user.uid+"/portfolios/"+e+"/shared",null),p(s,"shared-portfolios/"+e,null),s))},deletePortfolio:function(t,e){var s,a=t.state,n=(p(s={},"users/"+a.user.uid+"/portfolios/"+e,null),p(s,"users/"+a.user.uid+"/transactions/"+e,null),s);return a.portfolios[e].shared&&(n["shared-portfolios/"+e]=null),u.a.database().ref().update(n)},getTransactions:function(t,e){var s=t.state,a=t.commit,o=Object(n.d)(s,"promises.transactions."+e);return o||(o=new Promise((function(t,o){var r=Object(n.d)(s,"portfolios."+e+".uid",s.user?s.user.uid:null);r?u.a.database().ref("users/"+r+"/transactions/"+e).on("value",(function(s){var n=s.val();a("update",{name:"transactions."+e,value:n}),t()})):o(new Error("No transactions found."))})),a("update",{name:"promises.transactions."+e,value:o})),o},createTransaction:function(t,e){var s=t.state,a=e.pid,n=e.symbol,o=e.quantity,r=e.purchasePrice,i=e.purchaseDate;return u.a.database().ref("users/"+s.user.uid+"/transactions/"+a).push({sym:n,qty:o,p_price:r,p_date:i})},editTransaction:function(t,e){var s=t.state,a=e.pid,n=e.tid,o=e.symbol,r=e.quantity,i=e.purchasePrice,l=e.sellPrice,c=e.purchaseDate,p=e.sellDate;return u.a.database().ref("users/"+s.user.uid+"/transactions/"+a+"/"+n).update({sym:o,qty:r,p_price:i,s_price:l,p_date:c,s_date:p})},closeTransaction:function(t,e){var s=t.state,a=e.pid,n=e.tid,o=e.quantity,r=e.sellPrice,i=e.sellDate,l=s.transactions[a][n],c=u.a.database().ref("users/"+s.user.uid+"/transactions/"+a),p=c.push().key,d={};return d[n]=l.qty==o?null:{sym:l.sym,qty:l.qty-o,p_price:l.p_price,p_date:l.p_date},d[p]={sym:l.sym,qty:o,p_price:l.p_price,s_price:r,p_date:l.p_date,s_date:i},c.update(d)},deleteTransaction:function(t,e){var s=t.state,a=e.pid,n=e.tid;return u.a.database().ref("users/"+s.user.uid+"/transactions/"+a+"/"+n).remove()},loading:function(t){(0,t.commit)("update",{name:"display",value:!1})},done:function(t){(0,t.commit)("update",{name:"display",value:!0})},clearData:function(t){var e=t.commit;e("update",{name:"user",value:null}),e("update",{name:"portfolios",value:null}),e("update",{name:"transactions",value:null}),e("update",{name:"marketData",value:null}),e("update",{name:"promises",value:null})},processError:function(t,e){(0,t.commit)("update",{name:"error",value:e})},clearError:function(t){var e=t.state,s=t.commit;e.error&&s("update",{name:"error",value:null})}}},m=new r.a.Store;m.registerModule(a.a.code,f);var v=m,h=(s(51),s(230)),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.user?s("div",[s("top-nav",[s("router-link",{staticClass:"spt-button spt-is-primary",attrs:{to:{name:"portfolio.create"}}},[t._v(t._s(t.__("Create portfolio")))])],1),t._v(" "),t.portfolios?s("div",[s("div",{staticClass:"spt-columns spt-is-multiline spt-is-centered"},t._l(t.portfolios,(function(e,a){return s("div",{staticClass:"spt-column spt-is-one-third"},[s("div",{staticClass:"spt-card"},[s("header",{staticClass:"spt-card-header"},[s("span",{staticClass:"spt-card-header-title"},[t._v("\n                                  "+t._s(e.title)+"\n                              ")]),t._v(" "),s("span",{staticClass:"spt-card-header-icon"},[s("span",{staticClass:"spt-tag spt-is-primary"},[t._v(t._s(e.ccy))])])]),t._v(" "),s("div",{staticClass:"spt-card-content"},[s("div",{staticClass:"spt-content"},[t._v("\n                "+t._s(e.desc)+"\n              ")])]),t._v(" "),s("footer",{staticClass:"spt-card-footer"},[s("router-link",{staticClass:"spt-card-footer-item",attrs:{to:{name:"portfolio.view",params:{pid:a}}}},[s("span",{attrs:{"data-balloon":t.__("View"),"data-balloon-pos":"down"}},[s("i",{staticClass:"spt-fas spt-fa-eye"})])]),t._v(" "),s("router-link",{staticClass:"spt-card-footer-item",attrs:{to:{name:"portfolio.edit",params:{pid:a}}}},[s("span",{attrs:{"data-balloon":t.__("Edit"),"data-balloon-pos":"down"}},[s("i",{staticClass:"spt-fas spt-fa-edit"})])]),t._v(" "),s("a",{staticClass:"spt-card-footer-item",on:{click:function(e){e.preventDefault(),t.activePortfolioShareModal=a}}},[s("span",{attrs:{"data-balloon":t.__("Share"),"data-balloon-pos":"down"}},[s("i",{staticClass:"spt-fas spt-fa-share-alt"})])]),t._v(" "),s("router-link",{staticClass:"spt-card-footer-item",attrs:{to:{name:"portfolio.delete",params:{pid:a}}}},[s("span",{attrs:{"data-balloon":t.__("Delete"),"data-balloon-pos":"down"}},[s("i",{staticClass:"spt-fas spt-fa-trash-alt"})])])],1)]),t._v(" "),s("div",{class:["spt-modal","spt-is-clipped",{"spt-is-active":t.activePortfolioShareModal==a}]},[s("div",{staticClass:"spt-modal-background"}),t._v(" "),s("div",{staticClass:"spt-modal-card"},[s("div",{staticClass:"spt-modal-card-head"},[s("div",{staticClass:"spt-modal-card-title"},[t._v(t._s(t.__("Portfolio sharing")))]),t._v(" "),s("button",{staticClass:"spt-delete",attrs:{"aria-label":"close"},on:{click:function(e){t.activePortfolioShareModal=null}}})]),t._v(" "),s("div",{staticClass:"spt-modal-card-body"},[s("div",{staticClass:"spt-columns"},[s("div",{staticClass:"spt-column spt-has-text-centered"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.shared,expression:"portfolio.shared"}]},[s("h6",{staticClass:"spt-subtitle spt-is-6"},[t._v(t._s(t.__("Other people will be able to view your portfolio using the link below.")))]),t._v(" "),s("div",{staticClass:"spt-field mb-4"},[s("div",{staticClass:"spt-field spt-has-addons"},[s("div",{staticClass:"spt-control spt-is-expanded"},[s("input",{ref:"link-"+a,refInFor:!0,staticClass:"spt-input spt-readonly-input",attrs:{type:"text",readonly:""},domProps:{value:t.getPortfolioShareableLink(a)}})]),t._v(" "),s("div",{staticClass:"spt-control"},[s("button",{staticClass:"spt-button spt-is-primary",on:{click:function(e){return t.copyPortfolioShareableLink(a)}}},[t._v("\n                              "+t._s(t.__("Copy"))+"\n                            ")])])])]),t._v(" "),s("button",{staticClass:"spt-button spt-is-primary",on:{click:function(e){return t.unsharePortfolio(a)}}},[t._v(t._s(t.__("Disable sharing")))])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.shared,expression:"!portfolio.shared"}]},[s("h6",{staticClass:"spt-subtitle spt-is-6"},[t._v(t._s(t.__("This portfolio is private.")))]),t._v(" "),s("button",{staticClass:"spt-button spt-is-primary",on:{click:function(e){return t.sharePortfolio(a)}}},[t._v(t._s(t.__("Get shareable link")))])])])])])])])])})),0)]):s("div",[s("div",{staticClass:"spt-columns spt-mh-100vh spt-is-vcentered"},[s("div",{staticClass:"spt-column spt-is-full spt-has-text-centered"},[s("h2",{staticClass:"spt-title spt-is-2"},[t._v(t._s(t.__("No portfolios")))]),t._v(" "),s("h3",{staticClass:"spt-subtitle spt-is-3"},[t._v(t._s(t.__("Start by creating one")))])])])])],1):s("div",[s("div",{staticClass:"spt-columns spt-is-centered spt-mh-100vh spt-is-vcentered spt-is-mobile"},[s("div",{staticClass:"spt-column spt-is-full spt-has-text-centered"},[s("h2",{staticClass:"spt-title spt-is-2"},[t._v(t._s(t.__("Stock Portfolio Tracker")))]),t._v(" "),s("h3",{staticClass:"spt-subtitle spt-is-3"},[t._v(t._s(t.__("Real-time valuation and analytics")))]),t._v(" "),s("div",{staticClass:"spt-m-bottom-1"},[s("router-link",{staticClass:"spt-button spt-is-primary spt-is-outlined",attrs:{to:{name:"auth.login"}}},[t._v(t._s(t.__("Log in")))])],1),t._v(" "),s("div",{staticClass:"spt-m-bottom-1"},[s("router-link",{staticClass:"spt-button spt-is-primary",attrs:{to:{name:"auth.register"}}},[t._v(t._s(t.__("Sign up")))])],1),t._v(" "),s("div",[s("router-link",{staticClass:"spt-button spt-is-light",attrs:{to:{name:"auth.incognito"}}},[t._v(t._s(t.__("Incognito")))])],1)])])])])};_._withStripped=!0;var b=s(29),y=s(33),g=s(50),w={mixins:[b.a,y.a],components:{TopNav:g.a},data:function(){return{activePortfolioShareModal:null}},methods:{getPortfolioShareableLink:function(t){var e=window.location.href;return e+("/"!=e.charAt(e.length-1)?"/":"")+"shared/"+t},copyPortfolioShareableLink:function(t){Object(n.a)(this.$refs["link-"+t][0])},whenCreated:function(){var t=this;this.user?this.getPortfolios().then((function(){return t.done()})):this.done()}}},C=s(20),P=Object(C.a)(w,_,[],!1,null,null,null);P.options.__file="assets/js/src/components/home.vue";var j=P.exports,O=function(){return Promise.all([s.e(125),s.e(113)]).then(s.bind(null,299))};o.a.use(h.a);var k=new h.a({routes:[{path:"/",name:"home",component:j},{path:"/login",name:"auth.login",component:function(){return s.e(43).then(s.bind(null,300))}},{path:"/register",name:"auth.register",component:function(){return s.e(44).then(s.bind(null,301))}},{path:"/incognito",name:"auth.incognito",component:function(){return s.e(42).then(s.bind(null,302))}},{path:"/reset-password",name:"auth.reset-password",component:function(){return s.e(45).then(s.bind(null,303))}},{path:"/portfolios/create",name:"portfolio.create",component:function(){return Promise.all([s.e(0),s.e(110)]).then(s.bind(null,305))}},{path:"/portfolios/:pid/view",name:"portfolio.view",component:O,props:!0},{path:"/shared/:pid",name:"portfolio.view-only",component:O,props:!0},{path:"/portfolios/:pid/edit",name:"portfolio.edit",component:function(){return Promise.all([s.e(0),s.e(112)]).then(s.bind(null,304))},props:!0},{path:"/portfolios/:pid/delete",name:"portfolio.delete",component:function(){return s.e(111).then(s.bind(null,306))},props:!0},{path:"/portfolios/:pid/transactions/create",name:"transaction.create",component:function(){return Promise.all([s.e(0),s.e(1),s.e(117)]).then(s.bind(null,307))},props:!0},{path:"/portfolios/:pid/transactions/:tid/edit",name:"transaction.edit",component:function(){return Promise.all([s.e(0),s.e(1),s.e(119)]).then(s.bind(null,308))},props:!0},{path:"/portfolios/:pid/transactions/:tid/close",name:"transaction.close",component:function(){return Promise.all([s.e(1),s.e(116)]).then(s.bind(null,309))},props:!0},{path:"/portfolios/:pid/transactions/:tid/delete",name:"transaction.delete",component:function(){return s.e(118).then(s.bind(null,310))},props:!0},{path:"*",name:"error.404",component:function(){return s.e(49).then(s.bind(null,311))}}],scrollBehavior:function(t,e,s){return s||{selector:"#"+a.a.code+"-container"}}});k.beforeEach((function(t,e,s){k.app.$store.dispatch(a.a.code+"/clearError"),u.a.auth().onAuthStateChanged((function(e){a.a.firebase.auth||e||-1!==["auth.incognito","portfolio.view-only"].indexOf(t.name)?e&&["auth.login","auth.register","auth.incognito","auth.reset-password"].indexOf(t.name)>-1?s({name:"home",replace:!0}):e||-1!==["auth.login","auth.register","auth.incognito","auth.reset-password","home","portfolio.view-only"].indexOf(t.name)?s():s({name:"home",replace:!0}):s({name:"auth.incognito",replace:!0})}))}));var S=k,x=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"spt-container"}},[e("error"),this._v(" "),e("router-view",{directives:[{name:"show",rawName:"v-show",value:this.display,expression:"display"}],class:this.classes}),this._v(" "),e("loader",{directives:[{name:"show",rawName:"v-show",value:!this.display&&!this.error,expression:"!display && !error"}]})],1)};x._withStripped=!0;var E=function(){var t=this.$createElement;this._self._c;return this._m(0)};E._withStripped=!0;var D=Object(C.a)({},E,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"spt-loader"}},[e("div",{staticClass:"spt-columns spt-is-centered"},[e("div",{staticClass:"spt-column spt-is-half"},[e("progress",{staticClass:"spt-progress spt-is-primary",attrs:{max:"100"}})])])])}],!1,null,null,null);D.options.__file="assets/js/src/components/elements/loader.vue";var A=D.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"spt-fade-transition"}},[t.error?s("div",{staticClass:"spt-columns spt-is-centered"},[s("div",{staticClass:"spt-column spt-is-half"},[s("div",{staticClass:"spt-message spt-is-danger"},[s("div",{staticClass:"spt-message-header"},[s("span",[t._v(t._s(t.__("Error")))]),t._v(" "),s("button",{staticClass:"spt-delete",on:{click:t.clearError}})]),t._v(" "),s("div",{staticClass:"spt-message-body"},[t._v("\n          "+t._s(t.error.message)+"\n        ")])])])]):t._e()])};T._withStripped=!0;var L={mixins:[b.a]},$=Object(C.a)(L,T,[],!1,null,null,null);$.options.__file="assets/js/src/components/elements/error.vue";var M=$.exports,q={mixins:[b.a],components:{Loader:A,Error:M},computed:{classes:function(){return this.$route.name?"view-"+this.$route.name.replace(".","-"):""}}},N=Object(C.a)(q,x,[],!1,null,null,null);N.options.__file="assets/js/src/components/app.vue";var I=N.exports;e.default=function(){u.a.initializeApp(Object(n.d)(a.a,"firebase.settings"));new o.a({beforeCreate:function(){var t=this;u.a.auth().onAuthStateChanged((function(e){t.$store.dispatch(a.a.code+"/init",e)}))},store:v,router:S,render:function(t){return t(I)}}).$mount("#"+a.a.id)}},33:function(t,e,s){"use strict";var a={data:function(){return{submitted:!1}},methods:{action:function(t){var e=this;"function"==typeof this[t]&&(this.submitted=!0,this[t]().catch((function(t){e.submitted=!1,e.processError(t)})))}},created:function(){"function"==typeof this.whenCreated?this.whenCreated():this.done()},beforeRouteLeave:function(t,e,s){this.loading(),s()}},n=s(20),o=Object(n.a)(a,void 0,void 0,!1,null,null,null);o.options.__file="assets/js/src/components/_mixins/view.vue";e.a=o.exports},35:function(t,e,s){"use strict";function a(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter((function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable})))),a.forEach((function(e){n(t,e,s[e])}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(){var t=arguments;return t[0].replace(/{(\d+)}/g,(function(e,s){var a=parseInt(s,10);return void 0!==t[a+1]?t[a+1]:e}))}function i(t){return"object"==o(t)&&(void 0!==Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t))}function l(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return e.split(".").reduce((function(t,e){return t&&t[e]?t[e]:s}),t)}function c(t,e){for(var s=[],a=t;a<=e;a.setUTCDate(a.getUTCDate()+1))s.push(new Date(a));return s}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_id";return t?Object.keys(t).map((function(s){return a({},t[s],n({},e,s))})):[]}function p(t){t.select();try{document.execCommand("copy")}catch(t){}document.getSelection().removeAllRanges(),document.activeElement.blur()}s.d(e,"c",(function(){return r})),s.d(e,"e",(function(){return i})),s.d(e,"d",(function(){return l})),s.d(e,"b",(function(){return c})),s.d(e,"f",(function(){return u})),s.d(e,"a",(function(){return p}))},50:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spt-level spt-is-mobile"},[s("div",{staticClass:"spt-level-left"},[s("div",{staticClass:"spt-dropdown spt-is-left spt-is-hoverable",attrs:{id:"spt-menu"}},[s("div",{staticClass:"spt-dropdown-trigger"},[s("button",{staticClass:"spt-button",attrs:{"aria-haspopup":"true","aria-controls":"dropdown-menu"}},[t._m(0),t._v(" "),s("span",[t._v(t._s(t.__("Menu")))])])]),t._v(" "),s("div",{staticClass:"spt-dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[s("div",{staticClass:"spt-dropdown-content"},[s("router-link",{class:["spt-dropdown-item",{"spt-is-active":"home"==t.$route.name}],attrs:{to:{name:"home"}}},[s("i",{staticClass:"spt-fas spt-fa-briefcase"}),t._v(" "+t._s(t.__("Portfolios"))+"\n          ")]),t._v(" "),t.authEnabled?s("a",{staticClass:"spt-dropdown-item",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[s("i",{staticClass:"spt-fas spt-fa-sign-out-alt"}),t._v(" "+t._s(t.__("Log out"))+" ")]):t._e()],1)])])]),t._v(" "),s("div",{staticClass:"spt-level-right"},[t._t("default")],2)])};a._withStripped=!0;var n=s(0),o=s(29),r=s(44),i=(s(51),{mixins:[o.a],computed:{authEnabled:function(){return n.a.firebase.auth}},methods:{logout:function(){var t=this;r.a.auth().signOut().then((function(){t.clearData(),t.$router.replace({name:"auth.login"})}))}}}),l=s(20),c=Object(l.a)(i,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"spt-icon spt-is-small"},[e("i",{staticClass:"spt-fas spt-fa-bars",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);c.options.__file="assets/js/src/components/elements/top-nav.vue";e.a=c.exports}}]);