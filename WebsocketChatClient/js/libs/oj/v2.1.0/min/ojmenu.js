/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","hammerjs","ojs/ojjquery-hammer","ojs/ojcomponentcore","ojs/ojpopupcore"],function(a,g,c){(function(){a.Na("oj.ojMenu",g.oj.baseComponent,{defaultElement:"\x3cul\x3e",delay:300,role:"menu",widgetEventPrefix:"oj",options:{menuSelector:"ul",openOptions:{display:"auto",initialFocus:"menu",launcher:null,position:{my:"start top",at:"start bottom",collision:"flipfit"}},submenuOpenOptions:{position:{my:"start top",at:"end top",collision:"flipfit"}},beforeOpen:null,close:null,
open:null,select:null},_ComponentCreate:function(){this._super();var a=this;this._focusForTesting=this.Pi;this._nextForTesting=this.G$;this._selectForTesting=this.nn;this.hw=this.element;this.jZ=!1;if(h&&"ul"!==this.element[0].tagName.toLowerCase())throw Error("Cancel item supported for \x3cul\x3e menus only.");this.GCa();this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role,tabIndex:"0"});this._on(!0,{"mousedown .oj-menu-item":function(a){this.options.disabled&&a.preventDefault()},
click:function(a){this.options.disabled&&a.preventDefault()},keydown:function(a){!this.options.disabled||a.keyCode!==g.ui.keyCode.ESCAPE&&a.keyCode!==g.ui.keyCode.TAB||(a.keyCode===g.ui.keyCode.TAB&&a.preventDefault(),this.Id&&this.HC(a))}});this.options.disabled&&this.element.addClass("oj-disabled").attr("aria-disabled","true");var b=function(a){if(!this.OX){this.OX=!0;var b=g(a.currentTarget);try{this.q6=!0,this.Pi(a,b)}finally{this.q6=!1}}}.bind(this);this._on({"mousedown .oj-menu-item \x3e a":function(a){a.preventDefault()},
"click .oj-disabled \x3e a":function(a){a.preventDefault()},click:function(){this.jZ=!1},touchstart:function(){this.OX=!1},mouseover:function(){this.OX=!1},"click .oj-menu-item:has(a)":function(a){var b=g(a.target).closest(".oj-menu-item");!this.jZ&&b.not(".oj-disabled").length&&(this.jZ=!0,a.preventDefault(),this.ab&&this.ab.closest(b).length&&this.ab.get(0)!=b.get(0)||(b.has(".oj-menu").length?this.ag(a):(this.nn(a),this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.ab&&1===this.ab.parents(".oj-menu").length&&
clearTimeout(this.Le)))))},"mouseenter .oj-menu-item":b,"touchstart .oj-menu-item":b,mouseleave:function(a){this.qo(a,"eventSubtree")},"mouseleave .oj-menu":function(a){this.qo(a,"eventSubtree")},focus:function(a,b){if(!b){var c=this.ab||this.element.children(".oj-menu-item").eq(0);this.Pi(a,c)}},keydown:this.Fv,keyup:function(a){if(a.keyCode==g.ui.keyCode.ENTER||a.keyCode==g.ui.keyCode.SPACE)this.zH=!1}});this._focusable({applyHighlight:!e,recentPointer:function(){return a.q6},setupHandlers:function(b,
c){a.vy=b;a.fv=c}});this.GE=g.proxy(this.HE,this);this.$a()},Ux:function(a){if(arguments.length)d=a;else return d},lR:function(a){if(("focus"===a.type||"mousedown"===a.type||"touchstart"===a.type||93==a.which||121==a.which&&a.shiftKey||93==a.keyCode)&&("mousedown"!==a.type||!d)){var c=b.slice(0,b.length);g.each(c,function(b,c){!g(a.target).closest(c.element).length&&("keydown"===a.type||"mousedown"===a.type&&3===a.which||!g(a.target).closest(c.Id).length||c.hya&&("mousedown"===a.type&&3!==a.which||
"touchstart"===a.type))&&(c.qo(a,"eventSubtree"),c.Id&&c.Pu(a))})}},_setOption:function(a,b){this._superApply(arguments);switch(a){case "translations.labelCancel":case "translations":this.m4&&this.m4.text(this.options.translations.labelCancel)}},_destroy:function(){this.element.is(":visible")&&this.Pu();clearTimeout(this.Le);delete this.Le;this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=g(this);a.data("oj-ojMenu-submenu-icon")&&a.remove()});this.element.find("a").removeAttr("aria-expanded");this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");0<=b.indexOf(this)&&b.splice(b.indexOf(this),
1);delete this.ln;delete this.GE;var a=this.as;isNaN(a)||(delete this.as,window.clearTimeout(a));this.TH&&this.TH.remove();this.element.hj("destroy");this._super()},Fv:function(a){function b(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$\x26")}var c,d,e,f,h=!0;switch(a.keyCode){case g.ui.keyCode.HOME:this.dK("first","first",a);break;case g.ui.keyCode.END:this.dK("last","last",a);break;case g.ui.keyCode.UP:this.Jza(a);break;case g.ui.keyCode.DOWN:this.G$(a);break;case g.ui.keyCode.LEFT:case g.ui.keyCode.RIGHT:a.keyCode===
g.ui.keyCode.RIGHT^this.$k?this.ab&&!this.ab.is(".oj-disabled")&&this.ag(a):this.qo(a,"active");break;case g.ui.keyCode.ENTER:case g.ui.keyCode.SPACE:this.ava(a);this.zH=!0;var k=this;setTimeout(function(){k.zH=!1},100);break;case g.ui.keyCode.TAB:a.preventDefault();this.Id&&this.HC(a);break;case g.ui.keyCode.ESCAPE:this.Id?(d=this.element.attr("aria-activedescendant"),e="#"+this.element.attr("id")+"\x3e*\x3ea",d&&!g("#"+d).is(e)?this.qo(a,"active"):this.HC(a)):this.qo(a,"active");break;default:h=
!1,c=this.uN||"",d=String.fromCharCode(a.keyCode),e=!1,clearTimeout(this.NFa),d===c?e=!0:d=c+d,f=new RegExp("^"+b(d),"i"),c=this.hw.children(".oj-menu-item").filter(function(){return f.test(g(this).children("a").text())}),c=e&&-1!==c.index(this.ab.next())?this.ab.nextAll(".oj-menu-item"):c,c.length||(d=String.fromCharCode(a.keyCode),f=new RegExp("^"+b(d),"i"),c=this.hw.children(".oj-menu-item").filter(function(){return f.test(g(this).children("a").text())})),c.length?(this.Pi(a,c),1<c.length?(this.uN=
d,this.NFa=this._delay(function(){delete this.uN},1E3)):delete this.uN):delete this.uN}h&&a.preventDefault()},ava:function(a){this.ab&&!this.ab.is(".oj-disabled")&&(this.ab.children("a[aria-haspopup\x3d'true']").length?this.ag(a):this.nn(a))},refresh:function(){this._super();this.$a();var a=this.element;if(a.is(":visible")){var b=a.data("oj-menu-position");b&&a.position(b);a.find(".oj-menu").each(function(){var a=g(this);a.is(":visible")&&(b=a.data("oj-menu-position"))&&a.position(b)})}},$a:function(){this.$k=
"rtl"===this.jd();var a=this,b=this.element.find(this.options.menuSelector),c=b.add(this.element),d=c.children();this.Iwa=!!b.length;d.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");var e=d.filter(":not(.oj-menu-item):has(a)"),f=e.children("a");this.p9(e);this.e9(f);e=d.filter(function(a,b){var c=g(b);return c.is(":not(.oj-menu-item)")&&!/[^\-\u2014\u2013\s]/.test(c.text())});this.l9(e);this.$wa(d,e);d.filter(".oj-disabled").children("a").attr("aria-disabled",
"true");d.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");b.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu oj-menu-dropdown").hide().attr({role:this.role,"aria-hidden":"true"}).each(function(){var b=g(this),c=a.lT(b),d=g("\x3cspan\x3e");d.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon",!0);c.attr("aria-haspopup","true").attr("aria-expanded","false").append(d);c=c.attr("id");b.attr("aria-labelledby",c)});c.each(function(){var a=g(this),
b=a.children().children().children(".oj-menu-item-icon:not(.oj-menu-cancel-icon)").length;a.toggleClass("oj-menu-icons",!!b).toggleClass("oj-menu-text-only",!b)});this.ab&&!g.contains(this.element[0],this.ab[0])&&this.GQ()},p9:function(a){a.addClass("oj-menu-item").attr("role","presentation")},e9:function(a){a.uniqueId().attr({tabIndex:"-1",role:"menuitem"})},l9:function(a){a.addClass("oj-menu-divider").attr("role","separator")},$wa:function(a,b){a.removeClass("oj-menu-item-before-divider oj-menu-item-after-divider");
b.prev().addClass("oj-menu-item-before-divider");b.next().addClass("oj-menu-item-after-divider")},lT:function(a){return a.prev("a")},kLa:function(){return"menuitem"},HI:function(a,b){var c=a.prev(".oj-menu-divider").add(a.next(".oj-menu-divider"));b&&(c=c.add(a));return c},Pi:function(a,b){a&&"focus"===a.type||clearTimeout(this.Le);b=b.first();this.p$(b,a);var c=b.parent(),d=c.closest(".oj-menu-item");c.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor");this.HI(d,!0).addClass("oj-focus-ancestor");
a&&"keydown"===a.type?this.$p():this.Le=this._delay(function(){delete this.Le;this.$p()},this.delay);c=b.children(".oj-menu");c.length&&a&&/^mouse/.test(a.type)&&!this.ab.hasClass("oj-disabled")&&this.VCa(c);this.hw=b.parent()},p$:function(a,b){if(!a.is(this.ab)){var c=this.ab?this.ab:g(),d=a.children("a");this.ab=a;this.element.attr("aria-activedescendant",d.attr("id"));this.fv(c);this.vy(a);this.HI(c).removeClass("oj-focus");this.HI(a).addClass("oj-focus");this._trigger("_activeItem",b,{previousItem:c,
item:a,privateNotice:"The _activeItem event is private.  Do not use."})}},uAa:function(a){if(this.ab){var b=this.ab;this.ab=null;this.element.removeAttr("aria-activedescendant");this.fv(b);this.HI(b).removeClass("oj-focus");this._trigger("_activeItem",a,{previousItem:b,item:g(),privateNotice:"The _activeItem event is private.  Do not use."})}},GQ:function(a){clearTimeout(this.Le);this.uAa(a)},HC:function(a,b){this.Id.focus();this.Pu(a,b)},Pu:function(c,d){var e=this.element.is(":visible"),f={};f[a.U.sb.Fh]=
this.element;a.U.Ie().close(f);this.element.removeData("oj-menu-position");this.Id=void 0;this.nca=!1;d&&(c=this.IW("select",c,d).event);e&&this._trigger("close",c,{});this.hs=null;0<=b.indexOf(this)&&b.splice(b.indexOf(this),1)},getCurrentOpenOptions:function(){return g.extend(!0,{},this.hs||this.options.openOptions)},open:function(c,d,e){d=g.extend({},this.options.openOptions,d);d.position=g.extend({},d.position);e=g.extend({},this.options.submenuOpenOptions,e);var f=this.hs;this.hs=d;a.Rd.bza(c);
this.hya=this.yH;var h=this.IW("beforeOpen",c,{openOptions:d});if(h.proceed)if(this.element.is(":visible")&&(this.hs=f,this.Pu(h.event),this.hs=d),f=d.launcher,(f="string"===g.type(f)?g(f):f)&&f.length){h=this.Hxa(d.display);this.sDa(h);var k,n;if(h){if(this.element.addClass("oj-menu-dropdown").removeClass("oj-menu-sheet"),n=l,k=a.Rd.nm(d.position,this.$k),k.of=a.Rd.AIa(k.of,f,c),null==k.of){a.r.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call.");this.hs=
null;return}}else this.element.addClass("oj-menu-sheet").removeClass("oj-menu-dropdown"),n=m,k={my:"bottom",at:r,of:window,collision:"flipfit"};var s=this.element[0],t=b.slice(0,b.length);g.each(t,function(a,b){b.element[0]!==s&&(b.qo(c,"eventSubtree"),b.Id&&b.Pu(c))});this.ZCa=a.Rd.nm(e.position,this.$k);e=this.GE;g.isFunction(k.using)&&k.using!==e&&(k.origUsing=k.using);k.using=e;e={};e[a.U.sb.Fh]=this.element;e[a.U.sb.eB]=f;e[a.U.sb.iB]=k;e[a.U.sb.gu]=this.Cy();e[a.U.sb.Er]="oj-menu-layer";e[a.U.sb.jk]=
n;a.U.Ie().open(e);this.element.data("oj-menu-position",k);d=d.initialFocus;((e="firstItem"===d)||"menu"===d)&&this.element.focus();e?this.Pi(c,this.element.children().first()):this.GQ(c);this.Id=f;this.nca=!h;b.push(this);this._trigger("open",c,{})}else a.r.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."),this.hs=null;else this.hs=f},VCa:function(a){clearTimeout(this.Le);"true"===a.attr("aria-hidden")&&
(this.Le&&clearTimeout(this.Le),this.Le=this._delay(function(){delete this.Le;this.$p();this.O$(a)},this.delay))},O$:function(a){var c=g.extend({of:this.ab},this.ZCa);clearTimeout(this.Le);this.element.find(".oj-menu").not(a.parents(".oj-menu")).hide().attr("aria-hidden","true").removeData("oj-menu-position");a.show().removeAttr("aria-hidden").position(c).data("oj-menu-position",c);this.lT(a).attr("aria-expanded","true");!this.Id&&0>b.indexOf(this)&&b.push(this)},xH:function(a,b,c){function d(){delete e.Le;
var c=b?e.element:g(a&&a.target).closest(e.element.find(".oj-menu"));c.length||(c=e.element);e.$p(c);e.GQ(a);e.hw=c}clearTimeout(this.Le);var e=this;c?this.Le=this._delay(d,c):d()},$p:function(a){a||(a=this.ab?this.ab.parent():this.element);var c=a.find(".oj-menu");c.hide().attr("aria-hidden","true").removeData("oj-menu-position");this.lT(c).attr("aria-expanded","false");a.find(".oj-focus-ancestor").removeClass("oj-focus-ancestor");this.Id||0<=b.indexOf(this)&&a===this.element&&b.splice(b.indexOf(this),
1)},qo:function(b,c){if(null==c||"active"===c){var d=this.hw&&this.hw.closest(".oj-menu-item",this.element);d&&d.length&&(this.$p(),this.Pi(b,d))}else"all"===c||"eventSubtree"===c?this.xH(b,"all"===c,this.delay):a.r.warn("Invalid param "+c+" passed to Menu._collapse().  Ignoring the call.")},ag:function(a){var b=this.ab&&this.ab.children(".oj-menu ").children(".oj-menu-item").first();b&&b.length&&(this.O$(b.parent()),this.Le&&clearTimeout(this.Le),this.Le=this._delay(function(){delete this.Le;this.Pi(a,
b)}))},G$:function(a){this.dK("next","first",a)},Jza:function(a){this.dK("prev","last",a)},gLa:function(){return this.ab&&!this.ab.prevAll(".oj-menu-item").length},hLa:function(){return this.ab&&!this.ab.nextAll(".oj-menu-item").length},dK:function(a,b,c){var d;this.ab&&(d="first"===a||"last"===a?this.ab["first"===a?"prevAll":"nextAll"](".oj-menu-item").eq(-1):this.ab[a+"All"](".oj-menu-item").eq(0));d&&d.length&&this.ab||(d=this.hw.children(".oj-menu-item")[b]());this.Pi(c,d)},nn:function(b){if(!this.ab&&
b&&b.target){var c=g(b.target).closest(".oj-menu-item");c.closest(this.element).length&&this.p$(c,b)}this.ab?this.ab.has(".oj-menu").length||this.ab.is(".oj-disabled")?a.r.warn("Selecting a disabled menu item or parent menu item is not allowed."):(c=this.ab.is(this.UH)?void 0:{item:this.ab},this.xH(b,!0),this.Id&&this.HC(b,c)):a.r.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.")},cw:function(){this.element.remove()},Cy:function(){if(!this.ln){var b=
this.ln={};b[a.U.Fd.px]=g.proxy(this.C4,this);b[a.U.Fd.qx]=g.proxy(this.cw,this);b[a.U.Fd.Mp]=g.proxy(this.refresh,this);b[a.U.Fd.ox]=g.proxy(this.lR,this)}return this.ln},C4:function(){this.$p(this.element);this.Pu(null)},HE:function(b,c){var d=c.element.element;d.css(b);(d=d.data("oj-menu-position"))&&(d=d.origUsing)&&d(b,c);a.Rd.zY(c)&&(this.as=this._delay(g.proxy(this.C4,this),1))},getNodeBySubId:function(a){switch(a&&a.subId){case n:return this.ZQ?this.UH[0]:null;default:return this._super(a)}},
getSubIdByNode:function(a){return this.UH&&this.UH.is(a)?n:this._super(a)},Hxa:function(a){if(this.Iwa)return!0;switch(a){case "dropDown":return!0;case "sheet":return!1;case "auto":return s.matches;default:throw Error("Invalid value for Menu openOptions.display: "+a);}},sDa:function(a){h&&(a?this.ZQ&&(this.B6().detach().eq(0).prev().removeClass("oj-menu-item-before-divider"),this.ZQ=!1):(this.B6().appendTo(this.element).eq(0).prev().addClass("oj-menu-item-before-divider"),this.ZQ=!0))},B6:function(){if(!this.TH){var a=
g("\x3cli\x3e\x3c/li\x3e",this.document[0]),b=g("\x3ca href\x3d'#'\x3e\x3c/a\x3e",this.document[0]).text(this.options.translations.labelCancel);g("\x3cspan class\x3d'oj-menu-item-icon oj-component-icon oj-menu-cancel-icon'\x3e\x3c/span\x3e",this.document[0]).prependTo(b);var c=g("\x3cli\x3e\x3c/li\x3e",this.document[0]).addClass("oj-menu-item-cancel oj-menu-item-after-divider").append(b);this.l9(a);this.e9(b);this.p9(c);this.m4=b;this.UH=c;this.TH=g([a[0],c[0]])}return this.TH},GCa:function(){k&&
(this.element.hj(t),this._on({swipedown:function(a){this.nca&&"touch"===a.gesture.pointerType&&(this.xH(a,!0),this.HC(a))}}))}});var b=[],d=!1,e=-1<navigator.userAgent.indexOf("Macintosh")&&-1<navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome"),f=a.td.Of("oj-menu-config")||{},h="menuItem"===f.sheetCancelAffordance,k="dismiss"===f.sheetSwipeDownBehavior,l=f.dropDownModality||"modeless",m=f.sheetModality||"modal",r="bottom-"+(f.sheetMarginBottom||0),t=k&&{recognizers:[[c.Swipe,
{direction:c.DIRECTION_DOWN}]]},s=function(){var a=f.dropDownThresholdWidth;null==a&&(a="768px");return window.matchMedia("(min-width: "+a+")")}(),n="oj-menu-cancel-command"})();a.Components.Ua("ojMenu","baseComponent",{properties:{disabled:{type:"boolean"},menuSelector:{type:"string"},openOptions:{type:"Object"},submenuOpenOptions:{type:"Object"}},methods:{destroy:{},getCurrentOpenOptions:{},getSubIdByNode:{},open:{},refresh:{},widget:{}},extension:{_hasWrapper:!0,_innerElement:"ul",_widgetName:"ojMenu"}});
a.Components.register("oj-menu",a.Components.getMetadata("ojMenu"))});