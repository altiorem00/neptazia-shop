(function(t){function e(e){for(var a,n,u=e[0],i=e[1],s=e[2],d=0,l=[];d<u.length;d++)n=u[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&l.push(o[n][0]),o[n]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);f&&f(e);while(l.length)l.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],a=!0,n=1;n<r.length;n++){var u=r[n];0!==o[u]&&(a=!1)}a&&(c.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o={app:0},c=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-01aab777":"2445908e","chunk-25288ba2":"d9e970d8"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r={"chunk-01aab777":1,"chunk-25288ba2":1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=new Promise((function(e,r){for(var a="css/"+({}[t]||t)+"."+{"chunk-01aab777":"213b8860","chunk-25288ba2":"708e9473"}[t]+".css",o=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===a||d===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete n[t],f.parentNode.removeChild(f),r(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,r[1](l)}o[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=d;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("260b"),o=r("3a60"),c=r.n(o),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"header"},[a("router-link",{attrs:{to:{name:"main"}}},[a("img",{staticClass:"header__logo",attrs:{src:r("752b"),alt:""}})])],1),a("router-link",{staticClass:"footer__cart",attrs:{to:{name:"cart"},"aria-label":"Корзина с товарами"}},[a("span",[t._v(t._s(t.cartQuantity))])]),a("keep-alive",[a("router-view")],1),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("a",{staticClass:"footer__vk",attrs:{target:"_blank",href:"https://vk.com/neptazia"}}),r("a",{staticClass:"footer__inst",attrs:{target:"_blank",href:"https://www.instagram.com/neptazia_wear/"}})])}],s=r("5530"),d=r("2f62"),l={name:"App",data:function(){return{}},computed:{cartQuantity:function(){return this.$store.state.userData.cart.length}},methods:Object(s["a"])({},Object(d["b"])(["loadAppData"])),created:function(){this.loadAppData()},mounted:function(){var t=document.getElementsByClassName("preloader")[0];setTimeout((function(){t.style.display="none"}),3500),setTimeout((function(){t.classList.add("hide"),document.body.style.overflow="auto"}),2500)}},f=l,p=(r("5c0b"),r("2877")),m=Object(p["a"])(f,u,i,!1,null,null,null),h=m.exports,b=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),g=function(){return r.e("chunk-25288ba2").then(r.bind(null,"6ccf"))},v=function(){return r.e("chunk-01aab777").then(r.bind(null,"f68e"))};a["a"].use(b["a"]);var y=[{name:"main",component:g,path:"/"},{name:"cart",component:v,path:"/cart"}],_=new b["a"]({routes:y,scrollBehavior:function(){return{x:0,y:0}}}),w=_;r("159b"),r("c740"),r("a434"),r("e71f");a["a"].use(d["a"]);var k=new d["a"].Store({state:{userData:{cart:[],userKey:null},products:[]},mutations:{updateCart:function(t,e){t.userData.cart=e},addItemToCart:function(t,e){t.userData.cart.unshift(e)},updateProducts:function(t,e){e.forEach((function(e){t.products.push(e.data())}))},updateUserKey:function(t,e){t.userData.userKey=e},removeCartItem:function(t,e){var r=t.userData.cart.findIndex((function(t){return t.id===e.id}));t.userData.cart.splice(r,1)}},getters:{cartTotalPrice:function(t){return t.userData.cart.reduce((function(t,e){return e.price+t}),0)}},actions:{loadAppData:function(t){var e=localStorage.getItem("userKey"),r=n["a"].firestore();e?r.collection("users").doc(e).get().then((function(r){t.commit("updateCart",r.data().cart),t.commit("updateUserKey",e)})):r.collection("users").add({cart:[]}).then((function(e){localStorage.setItem("userKey",e.id),t.commit("updateUserKey",e.id)})),r.collection("product").orderBy("order","asc").get().then((function(e){t.commit("updateProducts",e)}))},addToCart:function(t,e){t.commit("addItemToCart",e),n["a"].firestore().collection("users").doc(t.state.userData.userKey).update({cart:t.state.userData.cart})},deleteItemInCart:function(t,e){t.commit("removeCartItem",e),n["a"].firestore().collection("users").doc(t.state.userData.userKey).update({cart:t.state.userData.cart})}}});r("000b");a["a"].use(c.a);var C={apiKey:"AIzaSyCLLk4x-NxA7PgltuWwlERd1NCcT7XenFA",authDomain:"neptazia-dded6.firebaseapp.com",projectId:"neptazia-dded6",storageBucket:"neptazia-dded6.appspot.com",messagingSenderId:"1074216570408",appId:"1:1074216570408:web:bbffec436ce64f6b44ef1d",measurementId:"G-YV7HWRZPP9"};n["a"].initializeApp(C),n["a"].analytics(),a["a"].config.productionTip=!1,new a["a"]({router:w,store:k,render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"752b":function(t,e,r){t.exports=r.p+"img/Logo_dlya_Andryuxi.450dd03a.svg"},"9c0c":function(t,e,r){}});
//# sourceMappingURL=app.ce06fdd1.js.map