!function(t){function n(n){for(var o,a,p=n[0],u=n[1],r=n[2],c=0,_=[];c<p.length;c++)a=p[c],Object.prototype.hasOwnProperty.call(e,a)&&e[a]&&_.push(e[a][0]),e[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);for(l&&l(n);_.length;)_.shift()();return s.push.apply(s,r||[]),i()}function i(){for(var t,n=0;n<s.length;n++){for(var i=s[n],o=!0,p=1;p<i.length;p++){var u=i[p];0!==e[u]&&(o=!1)}o&&(s.splice(n--,1),t=a(a.s=i[0]))}return t}var o={},e={0:0},s=[];function a(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=o,a.d=function(t,n,i){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(i,o,function(n){return t[n]}.bind(null,o));return i},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="./";var p=window.webpackJsonp=window.webpackJsonp||[],u=p.push.bind(p);p.push=n,p=p.slice();for(var r=0;r<p.length;r++)n(p[r]);var l=u;s.push([22,1]),i()}([,,,,function(t,n,i){},function(t,n,i){},function(t,n,i){},function(t,n,i){},function(t,n,i){},function(t,n,i){},function(t,n,i){},function(t,n,i){},function(t,n,i){},,function(t,n,i){"use strict";var o=i(1);var e=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=16*Math.random()|0;return("x"==t?n:3&n|8).toString(16)}))},s={name:"dynamic-link",render:function(t){return this.isLinkAction?t("div",{},this.$slots.default):this.isUsingVueRouter?t("router-link",{props:{to:{path:this.path}}},this.$slots.default):t("a",{attrs:{href:this.path}},this.$slots.default)},props:{isUsingVueRouter:{type:Boolean,required:!0},path:{type:String,required:!0},isLinkAction:{type:Boolean,required:!0}}},a=i(0),p=Object(a.a)(s,void 0,void 0,!1,null,null,null).exports,u={name:"brand-image",props:{options:{type:Object,required:!0}},data:function(){return{}},computed:{},methods:{},components:{DynamicLink:p}},r=(i(28),Object(a.a)(u,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"vnb__brand-image-wrapper"},[i("dynamic-link",{staticClass:"vnb__brand-image-wrapper__link",attrs:{path:t.options.brandImagePath,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":"Homepage",isLinkAction:!1},nativeOn:{click:function(n){return t.$emit("vnb-item-clicked","brand-image")}}},[t.options.brandImage?i("img",{staticClass:"vnb-image vnb__brand-image-wrapper__link__image",attrs:{src:t.options.brandImage,alt:t.options.brandImageAltText}}):t._e()])],1)}),[],!1,null,null,null).exports),l=i(19),c=i.n(l),_=(i(34),i(21)),m={name:"desktop-menu-item-link",props:{option:{type:Object,required:!0},options:{type:Object,required:!0}},data:function(){return{currentExpandedStatus:"closed"}},computed:{isExpanded:function(){return"open"===this.currentExpandedStatus}},methods:{subMenuItemSelected:function(t){this.closeAllTooltips()},subMenuItemTabbed:function(t){this.option.subMenuOptions[this.option.subMenuOptions.length-1].text===t&&this.closeAllTooltips()},menuShown:function(){this.currentExpandedStatus="open"},menuHidden:function(){this.currentExpandedStatus="closed"},closeAllTooltips:function(){var t=document.querySelectorAll(".tippy-popper");t.length>0&&t[0]._tippy.hide()},initTippy:function(){var t=this,n=document.getElementById("dropdown-menu-parent-"+this.option.id),i=document.getElementById("sub-menu-options-"+this.option.id);i.style.display="block",Object(_.a)(n,{theme:"light",content:i,interactive:!0,animation:this.options.tooltipAnimationType,plugins:[animateFill],role:"Menu",trigger:"click mouseenter focus",appendTo:"parent",arrow:!0,inertia:!1,onShow:function(){c()(document.querySelectorAll(".tippy-popper")).forEach((function(t){t&&t._tippy&&t._tippy.hide(0)})),t.menuShown()},onHide:function(){t.menuHidden()}})}},mounted:function(){this.option.subMenuOptions&&this.option.subMenuOptions.length&&this.initTippy()},components:{DynamicLink:p}},b=(i(35),Object(a.a)(m,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.option.subMenuOptions&&t.option.subMenuOptions.length?o("span",{staticClass:"vnb__menu-options__option__link",attrs:{id:"dropdown-menu-parent-"+t.option.id,"aria-haspopup":"true","aria-expanded":t.isExpanded?"true":"false","aria-label":t.option.text,tabindex:"0"}},[t.option.iconLeft?o("span",{staticClass:"vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left",domProps:{innerHTML:t._s(t.option.iconLeft)}}):t._e(),t._v("\n  "+t._s(t.option.text)+"\n  "),t.option.iconRight?o("span",{staticClass:"vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right",domProps:{innerHTML:t._s(t.option.iconRight)}}):t._e(),t._v(" "),o("img",{class:["vnb__menu-options__option__arrow",{"vnb__menu-options__option__arrow--hover":t.isExpanded}],attrs:{src:i(29),alt:"arrow"}}),t._v(" "),"link"===t.option.type?o("div",{staticClass:"vnb__sub-menu-options",attrs:{id:"sub-menu-options-"+t.option.id}},[o("div",{staticClass:"vnb__sub-menu-options__option",attrs:{tabindex:"-1"}},t._l(t.option.subMenuOptions,(function(n,i){return"link"===n.type?o("dynamic-link",{key:i,staticClass:"vnb__sub-menu-options__option__link",attrs:{path:n.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":n.text,tabindex:"0",isLinkAction:!!n.isLinkAction},nativeOn:{click:function(i){t.subMenuItemSelected(n.text),t.$emit("vnb-item-clicked",n.text)},keydown:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"tab",9,i.key,"Tab")?null:t.subMenuItemTabbed(n.text)}}},[n.iconLeft?o("span",{staticClass:"vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--left",domProps:{innerHTML:t._s(n.iconLeft)}}):t._e(),t._v(" "),o("span",{staticClass:"vnb__sub-menu-options__option__link__text-wrapper"},[o("span",{staticClass:"vnb__sub-menu-options__option__link__text-wrapper__text"},[t._v(t._s(n.text))]),t._v(" "),n.subText?o("span",{staticClass:"vnb__sub-menu-options__option__link__text-wrapper__sub-text"},[t._v(t._s(n.subText))]):t._e()]),t._v(" "),n.iconRight?o("span",{staticClass:"vnb__sub-menu-options__option__link__icon vnb__sub-menu-options__option__link__icon--right",domProps:{innerHTML:t._s(n.iconRight)}}):t._e()]):o("hr",{staticClass:"vnb__sub-menu-options__option__hr",attrs:{tabindex:"-1"}})})),1)]):t._e()]):o("dynamic-link",{staticClass:"vnb__menu-options__option__link",attrs:{path:t.option.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":t.option.text,tabindex:"0",isLinkAction:!!t.option.isLinkAction},nativeOn:{click:function(n){return t.$emit("vnb-item-clicked",t.option.text)}}},[t.option.iconLeft?o("span",{staticClass:"vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--left",domProps:{innerHTML:t._s(t.option.iconLeft)}}):t._e(),t._v("\n  "+t._s(t.option.text)+"\n  "),t.option.iconRight?o("span",{staticClass:"vnb__menu-options__option__link__icon vnb__menu-options__option__button__icon--right",domProps:{innerHTML:t._s(t.option.iconRight)}}):t._e()])}),[],!1,null,null,null).exports),d={name:"desktop-menu-item-button",props:{option:{type:Object,required:!0},options:{type:Object,required:!0}},data:function(){return{}},computed:{},methods:{},components:{DynamicLink:p}},v=(i(36),Object(a.a)(d,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("dynamic-link",{class:["vnb__menu-options__option__button","vnb-button",t.option.class],attrs:{path:t.option.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":t.option.text,isLinkAction:!!t.option.isLinkAction},nativeOn:{click:function(n){return t.$emit("vnb-item-clicked",t.option.text)}}},[t.option.iconLeft?i("span",{staticClass:"vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--left",domProps:{innerHTML:t._s(t.option.iconLeft)}}):t._e(),t._v("\n  "+t._s(t.option.text)+"\n  "),t.option.iconRight?i("span",{staticClass:"vnb__menu-options__option__button__icon vnb__menu-options__option__button__icon--right",domProps:{innerHTML:t._s(t.option.iconRight)}}):t._e()])}),[],!1,null,null,null).exports),h={name:"desktop-menu-item-spacer",props:{option:{type:Object,required:!0}},data:function(){return{}},computed:{},methods:{}},f=(i(37),Object(a.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vnb__menu-options__option__spacer"})}),[],!1,null,null,null).exports),g={name:"menu-options",mixins:[o.a.VueScreenSizeMixin],props:{options:{type:Object,required:!0},type:{type:String,required:!0}},data:function(){return{}},computed:{},methods:{vnbItemClicked:function(t){this.$emit("vnb-item-clicked",t)}},components:{DesktopMenuItemLink:b,DesktopMenuItemButton:v,DesktopMenuItemSpacer:f}},k=(i(38),Object(a.a)(g,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return t.$vssWidth>t.options.mobileBreakpoint?i("div",{class:["vnb__menu-options",{"vnb__menu-options--left":"left"===t.type},{"vnb__menu-options--right":"right"===t.type}]},t._l("left"===t.type?t.options.menuOptionsLeft:t.options.menuOptionsRight,(function(n,o){return i("div",{key:o,staticClass:"vnb__menu-options__option"},["link"===n.type?i("desktop-menu-item-link",{attrs:{option:n,options:t.options},on:{"vnb-item-clicked":t.vnbItemClicked}}):"button"===n.type?i("desktop-menu-item-button",{attrs:{option:n,options:t.options},on:{"vnb-item-clicked":t.vnbItemClicked}}):i("desktop-menu-item-spacer",{attrs:{option:n}})],1)})),0):t._e()}),[],!1,null,null,null).exports),x={name:"collapse-button",mixins:[o.a.VueScreenSizeMixin],props:{options:{type:Object,required:!0},menuIsVisible:{type:Boolean,required:!0}},data:function(){return{}},computed:{},methods:{collapseButtonClicked:function(){this.$emit("collapse-button-clicked")}}},y=(i(39),Object(a.a)(x,(function(){var t=this.$createElement,n=this._self._c||t;return this.$vssWidth<this.options.mobileBreakpoint?n("button",{staticClass:"vnb__collapse-button",attrs:{type:"button","aria-expanded":this.menuIsVisible?"true":"false"},on:{click:this.collapseButtonClicked}},[this.options.collapseButtonImageOpen?n("img",{staticClass:"vnb__collapse-button__image",attrs:{src:this.options.collapseButtonImageOpen,alt:"Menu"}}):n("img",{staticClass:"vnb__collapse-button__image",attrs:{src:i(15),alt:"Menu"}})]):this._e()}),[],!1,null,null,null).exports),C=i(20),O={name:"popup",props:{options:{type:Object,required:!0},menuIsVisible:{type:Boolean,required:!0}},data:function(){return{}},computed:{combinedMenuItems:function(){return this.options.menuOptionsLeft.concat(this.options.menuOptionsRight)}},methods:{closeButtonClicked:function(){this.$emit("close-button-clicked")},itemSelected:function(t){this.$emit("vnb-item-clicked",t.text),this.closeButtonClicked()}},components:{DynamicLink:p,SlideYDownTransition:C.a}},I=(i(40),Object(a.a)(O,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("slide-y-down-transition",[t.menuIsVisible?o("div",{staticClass:"vnb__popup"},[o("div",{staticClass:"vnb__popup__top"},[t.options.showBrandImageInMobilePopup&&t.options.brandImage?o("img",{staticClass:"vnb-image vnb__popup__top__image",attrs:{src:t.options.brandImage,alt:t.options.brandImageAltText}}):t._e(),t._v(" "),o("button",{staticClass:"vnb__popup__top__close-button",attrs:{"aria-label":"Close Button",title:"Close","aria-expanded":t.menuIsVisible?"true":"false"},on:{click:t.closeButtonClicked}},[t.options.collapseButtonImageClose?o("img",{staticClass:"vnb__popup__top__close-button__image",attrs:{src:t.options.collapseButtonImageClose,alt:"Close button"}}):o("img",{staticClass:"vnb__popup__top__close-button__image",attrs:{src:i(16),alt:"Close button"}})])]),t._v(" "),o("div",{staticClass:"vnb__popup__bottom"},[this.$slots["custom-section"]?o("div",{staticClass:"vnb__popup__bottom__custom-section"},[t._t("custom-section")],2):t._e(),t._v(" "),o("ul",{staticClass:"vnb__popup__bottom__menu-options"},t._l(t.combinedMenuItems,(function(n,i){return o("li",{key:i,staticClass:"vnb__popup__bottom__menu-options__option"},[n.subMenuOptions?o("span",{staticClass:"vnb__popup__bottom__menu-options__option__link vnb__popup__bottom__menu-options__option__link--no-highlight"},[t._v(t._s(n.text))]):o("dynamic-link",{staticClass:"vnb__popup__bottom__menu-options__option__link",attrs:{path:n.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":n.text,isLinkAction:!!n.isLinkAction},nativeOn:{click:function(i){return t.itemSelected(n)}}},[n.iconLeft?o("span",{staticClass:"vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--left",domProps:{innerHTML:t._s(n.iconLeft)}}):t._e(),t._v("\n            "+t._s(n.text)+"\n            "),n.iconRight?o("span",{staticClass:"vnb__popup__bottom__menu-options__option__link__icon vnb__popup__bottom__menu-options__option__link__icon--right",domProps:{innerHTML:t._s(n.iconRight)}}):t._e()]),t._v(" "),o("div",{staticClass:"vnb__popup__bottom__sub-menu-options"},t._l(n.subMenuOptions,(function(i,e){return o("div",{key:e,staticClass:"vnb__popup__bottom__sub-menu-options__option"},["link"===i.type?o("dynamic-link",{staticClass:"vnb__popup__bottom__sub-menu-options__option__link",attrs:{path:i.path,isUsingVueRouter:t.options.isUsingVueRouter,"aria-label":i.text,isLinkAction:!!n.isLinkAction},nativeOn:{click:function(n){return t.itemSelected(i)}}},[t._v("\n                "+t._s(i.text)+"\n                "),o("span",{staticClass:"vnb__popup__bottom__sub-menu-options__option__link__sub-text"},[t._v(t._s(i.subText))])]):t._e()],1)})),0)],1)})),0)])]):t._e()])}),[],!1,null,null,null).exports),w={name:"vue-navigation-bar",mixins:[o.a.VueScreenSizeMixin],props:{options:{type:Object,required:!0}},data:function(){return{menuIsVisible:!1}},computed:{finalOptions:function(){if(this.options.menuOptionsLeft)for(var t=0;t<this.options.menuOptionsLeft.length;t++)this.$set(this.options.menuOptionsLeft[t],"id",e());if(this.options.menuOptionsRight)for(var n=0;n<this.options.menuOptionsRight.length;n++)this.$set(this.options.menuOptionsRight[n],"id",e());return{elementId:this.options.elementId?this.options.elementId:e(),isUsingVueRouter:!!this.options.isUsingVueRouter,mobileBreakpoint:this.options.mobileBreakpoint?this.options.mobileBreakpoint:992,brandImagePath:this.options.brandImagePath?this.options.brandImagePath:"/",brandImage:this.options.brandImage?this.options.brandImage:null,brandImageAltText:this.options.brandImageAltText?this.options.brandImageAltText:"brand-image",collapseButtonImageOpen:this.options.collapseButtonImageOpen?this.options.collapseButtonImageOpen:null,collapseButtonImageClose:this.options.collapseButtonImageClose?this.options.collapseButtonImageClose:null,showBrandImageInMobilePopup:!!this.options.showBrandImageInMobilePopup,ariaLabelMainNav:this.options.ariaLabelMainNav?this.options.ariaLabelMainNav:"Main Navigation",tooltipAnimationType:this.options.tooltipAnimationType?this.options.tooltipAnimationType:"fade",menuOptionsLeft:this.options.menuOptionsLeft?this.options.menuOptionsLeft:[],menuOptionsRight:this.options.menuOptionsRight?this.options.menuOptionsRight:[]}}},methods:{closeMobilePopup:function(){this.menuIsVisible=!1,this.$emit("vnb-mobile-popup-hidden")},showMobilePopup:function(){this.menuIsVisible=!0,this.$emit("vnb-mobile-popup-shown")},vnbItemClicked:function(t){this.$emit("vnb-item-clicked",t)}},components:{BrandImage:r,MenuOptions:k,CollapseButton:y,Popup:I}},L=(i(41),Object(a.a)(w,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("nav",{staticClass:"vnb",attrs:{id:t.finalOptions.elementId,"aria-label":t.finalOptions.ariaLabelMainNav}},[i("brand-image",{attrs:{options:t.finalOptions},on:{"vnb-item-clicked":t.vnbItemClicked}}),t._v(" "),i("menu-options",{attrs:{options:t.finalOptions,type:"left"},on:{"vnb-item-clicked":t.vnbItemClicked}}),t._v(" "),t.$vssWidth>t.options.mobileBreakpoint?t._t("custom-section"):t._e(),t._v(" "),i("menu-options",{attrs:{options:t.finalOptions,type:"right"},on:{"vnb-item-clicked":t.vnbItemClicked}}),t._v(" "),t.finalOptions.menuOptionsLeft.length||t.finalOptions.menuOptionsRight.length?i("collapse-button",{attrs:{options:t.finalOptions,menuIsVisible:t.menuIsVisible},on:{"collapse-button-clicked":t.showMobilePopup}}):t._e(),t._v(" "),t.finalOptions.menuOptionsLeft.length||t.finalOptions.menuOptionsRight.length?i("popup",{attrs:{options:t.finalOptions,menuIsVisible:t.menuIsVisible},on:{"close-button-clicked":t.closeMobilePopup,"vnb-item-clicked":t.vnbItemClicked},scopedSlots:t._u([{key:"custom-section",fn:function(){return[t._t("custom-section")]},proxy:!0}],null,!0)}):t._e()],2)}),[],!1,null,null,null));n.a=L.exports},function(t,n,i){t.exports=i.p+"aa6aca9a24c2e28c898ef67cc85e334a.png"},function(t,n,i){t.exports=i.p+"ef08caa9986e386e75e2119ad6c93edd.png"},,function(t,n,i){"use strict";(function(t){var o=i(14);var e={install:function t(n){t.installed||(t.installed=!0,n.component("VueNavigationBar",o.a))}},s=null;"undefined"!=typeof window?s=window.Vue:void 0!==t&&(s=t.Vue),s&&s.use(e),n.a=o.a}).call(this,i(3))},,,,function(t,n,i){t.exports=i(42)},function(t,n,i){t.exports=i.p+"72595d92868b34b3939fb94daf7235cb.png"},function(t,n,i){"use strict";var o=i(4);i.n(o).a},,,,function(t,n,i){"use strict";var o=i(5);i.n(o).a},function(t,n,i){t.exports=i.p+"8dab95fbd5800aed0380b981cd7c4fcc.png"},,,,,,function(t,n,i){"use strict";var o=i(6);i.n(o).a},function(t,n,i){"use strict";var o=i(7);i.n(o).a},function(t,n,i){"use strict";var o=i(8);i.n(o).a},function(t,n,i){"use strict";var o=i(9);i.n(o).a},function(t,n,i){"use strict";var o=i(10);i.n(o).a},function(t,n,i){"use strict";var o=i(11);i.n(o).a},function(t,n,i){"use strict";var o=i(12);i.n(o).a},function(t,n,i){"use strict";i.r(n);var o=i(2),e={name:"app",data:function(){return{navbarOptions:{elementId:"main-navbar",isUsingVueRouter:!0,mobileBreakpoint:992,brandImagePath:"./",brandImage:i(23),brandImageAltText:"brand-image",collapseButtonImageOpen:i(15),collapseButtonImageClose:i(16),showBrandImageInMobilePopup:!0,ariaLabelMainNav:"Main Navigation",tooltipAnimationType:"shift-away",menuOptionsLeft:[{type:"link",text:"Why Dunder Mifflin",subMenuOptions:[{isLinkAction:!0,type:"link",text:"About",subText:"Stupid corporate wet blankets. Like booze ever killed anyone.",path:"./about"},{type:"hr"},{type:"link",text:"Locations",subText:"You're a presentation tool!",path:"./locations"},{type:"hr"},{type:"link",text:"Blog",subText:"I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.",path:"./blog"}]},{type:"link",text:"Contact",subMenuOptions:[{type:"link",text:"Customer Service",path:"./customer-service",iconLeft:'<i class="fa fa-user fa-fw"></i>'},{type:"link",text:"Accounting",path:"./accounting",iconLeft:'<i class="fa fa-star fa-fw"></i>'},{type:"hr"},{type:"link",text:"Reception",path:"./reception",iconLeft:'<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>'}]}],menuOptionsRight:[{type:"button",text:"Signup",path:"./signup",class:"button-red"},{type:"button",text:"Login",path:"./login",iconRight:'<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'}]}}},methods:{vnbItemClicked:function(t){"About"===t&&alert("'About' was selected.")}}},s=(i(24),i(0)),a=Object(s.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"main-navbar-section"},[n("div",{staticClass:"container"},[n("vue-navigation-bar",{attrs:{options:this.navbarOptions},on:{"vnb-item-clicked":this.vnbItemClicked}})],1)]),this._v(" "),this._m(0)])}),[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("section",{staticClass:"main-content-section"},[i("div",{staticClass:"container py-4"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-12 text-center"},[i("h3",[i("strong",[t._v("vue-navigation-bar")])])])])]),t._v(" "),i("div",{staticClass:"container pt-3 pb-4"},[i("div",{staticClass:"row justify-content-center mb-4"},[i("div",{staticClass:"col-lg-6"},[i("span",{staticClass:"badge badge-primary mb-1"},[t._v("install")]),t._v(" "),i("div",{staticClass:"code-text"},[t._v("npm i vue-navigation-bar")])])]),t._v(" "),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-6"},[i("div",{staticClass:"list-group"},[i("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://github.com/johndatserakis/vue-navigation-bar",target:"_blank"}},[t._v("View on GitHub")]),t._v(" "),i("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:"https://www.npmjs.com/package/vue-navigation-bar",target:"_blank"}},[t._v("View on NPM")])])])])]),t._v(" "),i("div",{staticClass:"container py-2"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-10"},[i("hr")])])]),t._v(" "),i("div",{staticClass:"container py-3"},[i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-lg-10"},[i("p",[i("code",[t._v("vue-navigation-bar")]),t._v(" is a simple, pretty navbar for\n            your Vue projects. And wouldn't you know it - this page is using\n            it right now!\n          ")]),t._v(" "),i("p",[t._v("\n            Check out\n            "),i("a",{attrs:{href:"https://github.com/johndatserakis/vue-navigation-bar"}},[t._v("the GitHub")]),t._v("\n            page to see how you can use "),i("code",[t._v("vue-navigation-bar")]),t._v(" in\n            your Vue projects.\n          ")])])])])])}],!1,null,null,null).exports,p=i(13),u=i(18);o.a.use(p.a);var r=new p.a({mode:"history",routes:[{path:"/"},{path:"/about"},{path:"/locations"},{path:"/blog"},{path:"/pricing"},{path:"/pricing/pro"},{path:"/pricing/starter"},{path:"/contact"},{path:"/customer-service"},{path:"/accounting"},{path:"/reception"},{path:"/signup"},{path:"/login"}]});o.a.component("vue-navigation-bar",u.a),new o.a({el:"#app",router:r,render:function(t){return t(a)}})}]);