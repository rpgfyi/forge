(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],p=0,f=[];p<s.length;p++)o=s[p],r[o]&&f.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={1:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([2,0]),a()})({2:function(t,e,a){t.exports=a("Vtdi")},"Ci/6":function(t,e,a){},Vtdi:function(t,e,a){"use strict";a.r(e);a("VRzm");var n=a("Kw5r"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"hero is-fullheight"},[a("div",{staticClass:"hero-body"},[a("ForgeGenerator")],1),a("footer",{staticClass:"footer"},[a("SiteFooter")],1)])])},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container has-text-centered"},[a("img",{staticClass:"logo",attrs:{src:"logo.svg",width:"200",height:"200"}}),a("div",{staticClass:"item-area"},[t._v("\n\n        "+t._s(t.output)+"\n\n    ")]),a("b-field",{attrs:{position:"is-centered"}},[a("b-taglist",t._l(t.tagList,function(e){return a("b-tag",{attrs:{type:"is-info",icon:"tag"}},[a("b-tooltip",{attrs:{label:e[1],type:"is-light"}},[a("span",{staticClass:"icon icon-price-tag is-small"}),a("span",[t._v(t._s(t._f("capitalize")(e[0])))])])],1)}))],1),a("div",{staticClass:"field has-addons-center item-selector"},[a("b-field",{staticClass:"has-addons-centered"},[a("b-radio-button",{attrs:{"native-value":"weapon"},model:{value:t.itemType,callback:function(e){t.itemType=e},expression:"itemType"}},[t._v("\n                Weapon\n            ")]),a("b-radio-button",{attrs:{"native-value":"armor"},model:{value:t.itemType,callback:function(e){t.itemType=e},expression:"itemType"}},[t._v("\n                Armor\n            ")]),a("b-radio-button",{attrs:{"native-value":"trinket"},model:{value:t.itemType,callback:function(e){t.itemType=e},expression:"itemType"}},[t._v("\n                Trinket\n            ")]),a("div",{staticClass:"control"},[a("span",{staticClass:"button is-link",on:{click:function(e){t.generate(t.itemType,t.rarity),t.gaTrack(t.itemType)}}},[t._v("Generate "+t._s(t.itemType))])])],1)],1),a("div",{staticClass:"field has-addons-center item-selector"},[a("b-field",{staticClass:"has-addons-centered"},[a("b-radio-button",{attrs:{"native-value":"0"},model:{value:t.rarity,callback:function(e){t.rarity=e},expression:"rarity"}},[t._v("\n                Common\n            ")]),a("b-radio-button",{attrs:{"native-value":"1"},model:{value:t.rarity,callback:function(e){t.rarity=e},expression:"rarity"}},[t._v("\n                Uncommon\n            ")]),a("b-radio-button",{attrs:{"native-value":"2"},model:{value:t.rarity,callback:function(e){t.rarity=e},expression:"rarity"}},[t._v("\n                Rare\n            ")]),a("b-radio-button",{attrs:{"native-value":"3"},model:{value:t.rarity,callback:function(e){t.rarity=e},expression:"rarity"}},[t._v("\n                Legendary\n            ")])],1)],1)],1)},s=[],l=(a("rGqo"),a("yt8O"),a("RW0V"),a("Z2Ku"),a("L9s1"),a("f3/d"),a("a1Th"),{name:"ForgeGenerator",data:function(){return{items:[],tags:[],descriptors:[],tagList:[],output:"Generate an item!",itemType:"weapon",rarity:"2",selected:1}},mounted:function(){var t=this;fetch("forge-final.json").then(function(t){return t.json()}).then(function(e){t.descriptors=t.populateObject(e.forge.descriptors),t.items["armor"]=t.populateObject(e.forge.items.armor),t.items["trinket"]=t.populateObject(e.forge.items.trinket),t.items["weapon"]=t.populateObject(e.forge.items.weapon),t.tags=t.populateObject(e.forge.tags)})},filters:{capitalize:function(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}},methods:{containsAll:function(t,e){var a=[];for(var n in e)t.indexOf(e[n].name)>-1&&a.push([e[n].name,e[n].desc]);return a},populateObject:function(t){var e=[];for(var a in t)e.push(t[a]);return e},generate:function(t,e){var a=this.descriptors.filter(function(a){return a.type.includes(t)&&a.rare<=parseInt(e)});a=new Array(a[Math.floor(Math.random()*a.length)],a[Math.floor(Math.random()*a.length)],a[Math.floor(Math.random()*a.length)],a[Math.floor(Math.random()*a.length)]);var n=this.items[t];n=n[Math.floor(Math.random()*n.length)];for(var r={pre:a[1].pre,item:n.name,post:a[1].post},i=[],o=0;o<=e;o++){var s=a[o].tags;i.push(s[Math.floor(Math.random()*s.length)])}if(this.tagList=this.containsAll(i,this.tags),e<="1"){var l=this.remove(r,"item");delete r[l],a.splice(a.indexOf(a[Math.floor(Math.random()*a.length)]),1)}var c="";for(var u in r)c+=r[u]+" ";this.output=c.trim()},remove:function(t,e){var a=null,n=Object.keys(t);while(null===a||a===e)a=n[Math.floor(n.length*Math.random())];return a},gaTrack:function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);this.$ga.event({eventCategory:"Generate",eventAction:e,eventLabel:this.output,eventValue:1})}}}),c=l,u=a("KHd+"),p=Object(u["a"])(c,o,s,!1,null,null,null),f=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container has-text-left"},[a("div",{staticClass:"content"},[t._m(0),a("b-field",{staticClass:"has-addons-left"},[a("div",{staticClass:"control"},[a("a",{staticClass:"button",attrs:{href:"https://github.com/rpgfyi/forge"}},[a("span",{staticClass:"icon"},[a("svg",{staticStyle:{width:"18px",height:"18px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#363636",d:"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"}})])]),a("span",[t._v("Github")])])]),a("div",{staticClass:"control"},[a("a",{staticClass:"button is-info",attrs:{href:"https://www.twitter.com/rpgfyi"}},[a("span",{staticClass:"icon"},[a("svg",{staticStyle:{width:"18px",height:"18px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#fff",d:"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"}})])]),a("span",[t._v("Twitter")])])])])],1)])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("small",[t._v("\n                An "),a("a",{attrs:{href:"https://rpg.fyi"}},[t._v("rpg.fyi")]),t._v(" project."),a("br"),t._v("\n                Made by "),a("a",{attrs:{href:"https://www.twitter.com/matt_buresh"}},[t._v("Matt Buresh")]),t._v("."),a("br"),t._v("\n                Checkout the "),a("a",{attrs:{href:"https://github.com/rpgfyi/forge/releases"}},[t._v("Changelog")]),t._v(".\n            ")])])}],v={},m=Object(u["a"])(v,h,d,!1,null,null,null),C=m.exports,g={name:"app",components:{ForgeGenerator:f,SiteFooter:C}},b=g,y=(a("ZL7j"),Object(u["a"])(b,r,i,!1,null,null,null)),_=y.exports,w=a("P6ep"),x=a.n(w),M=a("AoTc"),j=a.n(M);a("fn1X");n["a"].use(x.a),n["a"].use(j.a,{id:"UA-109246807-2",debug:{}}),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(_)}}).$mount("#app")},ZL7j:function(t,e,a){"use strict";var n=a("Ci/6"),r=a.n(n);r.a},fn1X:function(t,e,a){}});
//# sourceMappingURL=app.18be7a87.js.map