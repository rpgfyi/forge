(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],p=0,f=[];p<o.length;p++)i=o[p],s[i]&&f.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={1:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([2,0]),a()})({2:function(t,e,a){t.exports=a("Vtdi")},Vtdi:function(t,e,a){"use strict";a.r(e);a("VRzm");var n=a("Kw5r"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"hero is-fullheight"},[a("div",{staticClass:"hero-body"},[a("ForgeGenerator",{attrs:{msg:"Generate an item!"}})],1),a("footer",{staticClass:"footer"},[a("SiteFooter")],1)])])},r=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item"},[a("img",{attrs:{src:"logo.svg",width:"75",height:"75",alt:"Logo"}})])]),a("div",{staticClass:"navbar-menu",attrs:{id:"navbarMenuHeroC"}},[a("div",{staticClass:"navbar-end"},[a("a",{staticClass:"navbar-item"},[t._v("test")])])])])}],l=a("KHd+"),c={},u=Object(l["a"])(c,i,o,!1,null,null,null),p=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container has-text-centered"},[a("img",{staticClass:"logo",attrs:{src:"logo.svg",width:"200",height:"200"}}),a("div",{staticClass:"item-area"},[t._v("\n\n        "+t._s(t.msg)+"\n        "),a("b-tooltip",{attrs:{label:t.tagPreTooltip,type:"is-light",dashed:"",square:""}},[t._v(t._s(t.tagPre))]),t._v(" \n        "),a("b-tooltip",{attrs:{label:t.itemTooltip,type:"is-light",dashed:"",square:""}},[t._v(t._s(t.item))]),t._v(" \n        "),a("b-tooltip",{attrs:{label:t.tagPostTooltip,type:"is-light",dashed:"",square:""}},[t._v(t._s(t.tagPost))])],1),a("div",{staticClass:"item-selector"},[a("b-field",{staticClass:"has-addons-centered"},[a("b-radio-button",{attrs:{"native-value":"Weapon"},model:{value:t.itemType,callback:function(e){t.itemType=e},expression:"itemType"}},[a("i",{staticClass:"ra ra-sword ra-fw"}),t._v("\n                Weapon\n            ")]),a("b-radio-button",{attrs:{"native-value":"Armor",disabled:""},model:{value:t.itemType,callback:function(e){t.itemType=e},expression:"itemType"}},[t._v("\n                Armor\n            ")]),a("b-radio-button",{attrs:{"native-value":"Trinket",disabled:""},model:{value:t.itemType,callback:function(e){t.itemType=e},expression:"itemType"}},[t._v("\n                Trinket\n            ")]),a("div",{staticClass:"control"},[a("span",{staticClass:"button is-link",on:{click:function(e){t.generate(t.itemType),t.gaTrack(t.itemType)}}},[t._v("Generate "+t._s(t.itemType))])])],1)],1)])},h=[],v={name:"ForgeGenerator",props:{msg:String},data:function(){return{counter:0,info:null,isActive:!1,tagPre:null,tagPost:null,tagPreToolTip:"",tagPostToolTip:"",item:null,itemToolTip:"",weapons:null,weapontags:null,itemType:"Weapon",selected:1}},mounted:function(){var t=this;fetch("forge.json").then(function(t){return t.json()}).then(function(e){var a=[];for(var n in e.forge.weapons[0]["items"])a.push([e.forge.weapons[0]["items"][n].pre,e.forge.weapons[0]["items"][n].desc]);t.weapons=a;var s=[];for(var r in e.forge.weapons[0]["tags"])s.push([e.forge.weapons[0]["tags"][r].pre,e.forge.weapons[0]["tags"][r].desc,e.forge.weapons[0]["tags"][r].post]);t.weapontags=s})},methods:{generate:function(t){if("Weapon"===t){var e=this.weapontags[Math.floor(Math.random()*this.weapontags.length)],a=this.weapontags[Math.floor(Math.random()*this.weapontags.length)],n=this.weapons[Math.floor(Math.random()*this.weapons.length)];this.tagPre=e[0]+" ",this.tagPreTooltip=e[1],this.tagPost=a[2],this.tagPostTooltip=a[1],this.item=n[0],this.itemTooltip=n[1],this.msg=""}},gaTrack:function(t){this.counter=this.counter+1,this.$ga.event({eventCategory:"Generate",eventAction:t,eventLabel:this.tagPre+" "+this.item+" "+this.tagPost,eventValue:this.counter})}}},d=v,g=Object(l["a"])(d,f,h,!1,null,null,null),m=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container has-text-left"},[a("div",{staticClass:"content"},[t._m(0),a("b-field",{staticClass:"has-addons-left"},[a("div",{staticClass:"control"},[a("a",{staticClass:"button",attrs:{href:"https://github.com/rpgfyi/forge"}},[a("b-icon",{attrs:{icon:"github-circle",size:"is-small"}}),a("span",[t._v("Github")])],1)]),a("div",{staticClass:"control"},[a("a",{staticClass:"button is-info",attrs:{href:"https://www.twitter.com/rpgfyi"}},[a("b-icon",{attrs:{icon:"twitter",size:"is-small"}}),a("span",[t._v("Twitter")])],1)])])],1)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("small",[t._v("\n                An "),a("a",{attrs:{href:"https://rpg.fyi"}},[t._v("rpg.fyi")]),t._v(" project."),a("br"),t._v("\n                Made by "),a("a",{attrs:{href:"https://www.twitter.com/matt_buresh"}},[t._v("Matt Buresh")]),t._v(".\n            ")])])}],w={},y=Object(l["a"])(w,b,_,!1,null,null,null),T=y.exports,C={name:"app",components:{SiteHeader:p,ForgeGenerator:m,SiteFooter:T}},P=C,j=(a("ZL7j"),Object(l["a"])(P,s,r,!1,null,null,null)),x=j.exports,M=a("P6ep"),O=a.n(M),k=a("AoTc"),S=a.n(k);a("fn1X");n["a"].use(O.a),n["a"].use(S.a,{id:"UA-109246807-2"}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(x)}}).$mount("#app")},ZL7j:function(t,e,a){"use strict";var n=a("slcd"),s=a.n(n);s.a},fn1X:function(t,e,a){},slcd:function(t,e,a){}});
//# sourceMappingURL=app.ee7e7e0c.js.map