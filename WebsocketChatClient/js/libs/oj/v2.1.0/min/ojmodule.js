/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(a,g){a.nx={};a.nx.Zc={viewPath:"text!views/",viewSuffix:".html",modelPath:"viewModels/",initializeMethod:"initialize",disposeMethod:"dispose",activatedHandler:"handleActivated",attachedHandler:"handleAttached",detachedHandler:"handleDetached",bindingsAppliedHandler:"handleBindingsApplied",deactivatedHandler:"handleDeactivated",transitionCompletedHandler:"handleTransitionCompleted"};o_("ModuleBinding.defaults",a.nx.Zc,a);(function(){function c(b,
c,e,f,h,k,l){var n=c.canAnimate;if(null==n||n.call(c,b)){var r,s;if(n=c.prepareAnimation.call(c,b))r=n.newViewParent,s=n.oldViewParent;var t=r||e;s&&s!==e?d(f,s):t===e&&k(null);t!==e&&g.virtualElements.setDomNodeChildren(t,[]);h(t);var I=Array.prototype.slice.call(t.childNodes),E=!1,G=function(){E||(E=!0,e!==t&&m(e,I))},A=k.bind(null,s);b.newViewParent=r;b.oldViewParent=s;b.oldViewNodes=f;b.removeOldView=A;b.insertNewView=G;var B=function(){A();G();l()};return c.animate.call(c,b).then(B,function(){B();
a.r.error("ojModule animation promise was rejected")})}}function b(a,b,c){b=b||a;var d=[];c&&a===b&&(c.parentNode.removeChild(c),d.push(c));g.virtualElements.setDomNodeChildren(b,d)}function d(a,b){a.forEach(function(a){b.appendChild(a)})}function e(a,b,c){if(a&&a[b]){var d={element:c[0],valueAccessor:c[1]};2<c.length&&(d.viewModel=c[2],3<c.length&&(d["boolean"===typeof c[3]?"fromCache":"cachedNodes"]=c[3]));return g.ignoreDependencies(a[b],a,[d])}}function f(b,c,d){if(null!=b&&(c=a.nx.Zc[c],null!=
c&&b&&(c=b[c],"function"===typeof c))){var e=void 0;d&&(e={element:d[0],valueAccessor:d[1]},2<d.length&&(e["boolean"===typeof d[2]?"fromCache":"cachedNodes"]=d[2]));return g.ignoreDependencies(c,b,[e])}}function h(a,b,c){var d=[];for(a=g.virtualElements.firstChild(a);null!=a&&a!=c;a=a.nextSibling)a!=b&&d.push(a);return d}function k(a,b){var c=[],d=g.virtualElements.firstChild(a);l(d,b,function(a){c.push(a)});return c}function l(a,b,c){for(;null!=a;){var d=g.virtualElements.nextSibling(a),e=a.nodeType;
a===b||1!==e&&8!==e||c(a);a=d}}function m(a,b){for(var c=b.length-1;0<=c;c--)g.virtualElements.prepend(a,b[c])}function r(b,c){if(null!=a.Components)for(var d=0;d<b.length;d++)c?a.Components.wr(b[d]):a.Components.Xt(b[d])}function t(a){if("string"===typeof a)a=g.utils.parseHtmlFragment(a);else if(window.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType)a=g.utils.arrayPushAll([],a.childNodes);else if(Array.isArray(a))a=g.utils.arrayPushAll([],a);else throw"The View ("+a+") has an unsupported type";
return a}function s(b){return new Promise(function(c,d){require([b],function(a){c(a)},function(c){a.r.error("ojModule failed to load "+b);d(c)})})}function n(a){return a?new Promise(function(b){a.then(b,b)}):a}g.bindingHandlers.ojModule={init:function(p,q,u,w,v){function y(a){if(a!=I)throw A;}function x(a){f(a,"disposeMethod",[p,q])}var z,C,H={},K,I=-1,E,G;g.utils.domNodeDisposal.addDisposeCallback(p,function(){x(z);for(var a=Object.keys(H),b=0;b<a.length;b++)x(H[a[b]].Nt)});var A=Error("Promise cancelled because ojModule is fetching new View and ViewModel");
8===p.nodeType&&(g.virtualElements.setDomNodeChildren(p,[]),G=p.nextSibling);g.computed(function(){I++;var u=0===I,w=g.utils.unwrapObservable,J=w(q()),D,L,N,M,Q,O,S,W;"string"===typeof J?D=J:(D=w(J.name),L=w(J.viewName),N=w(J.params),M=w(J.viewModelFactory),Q=w(J.createViewFunction),O=w(J.cacheKey),S=w(J.lifecycleListener),W=w(J.animation));var w=e(S,"activated",[p,q]),U,X,Y=null==O?null:H[O];if(null!=Y)delete H[O],U=Promise.resolve(Y.view),X=Promise.resolve(Y.Nt);else if(null!=M&&(X=g.ignoreDependencies(M.createViewModel,
M,[N,q])),null==X&&null!=D&&(X=s(a.nx.Zc.modelPath+D)),null!=X&&(X=X.then(function(a,b){y(a);return b="function"===typeof b?new b(N):f(b,"initializeMethod",[p,q])||b}.bind(null,I)),null!=Q&&(U=X.then(function(a,b){y(a);if(null==b)throw"createViewFunction option cannot be used when the ViewModel is null";var c=b[Q];if(null==c)throw"function specified by the createViewFunction option was not found on the ViewModel";return c.call(b)}.bind(null,I)))),null==U)if(L=null==L?D:L,null!=L)U=s(a.nx.Zc.viewPath+
L+a.nx.Zc.viewSuffix);else throw Error("View name must be specified");if(null==U)throw Error("ojModule is missing a View");var R;null!=X&&(R=X.then(function(a,b){y(a);return f(b,"activatedHandler",[p,q])}.bind(null,I)));Promise.all([U,X,w,R,C]).then(function(a,w){if(a==I){var s=w[0];if(null==s)throw"The module's View was resolved to null";var y=t(s),A=w[1],D=!1,F,J=h(p,E,G),L=k(p,E);null!=K&&(D=!0,F=J,E||(E=document.createElement("div"),E.className="oj-helper-module-cache",g.virtualElements.prepend(p,
E)));var M=!1,s=function(a){M||(M=!0,D?d(J,E):L.forEach(function(a){g.cleanNode(a)}),b(p,a||p,E),u||(e(S,"detached",[p,q,z,F]),f(z,"detachedHandler",[p,q,F]),e(S,"deactivated",[p,q,z]),f(z,"deactivatedHandler",[p,q])),D?(r(F,!1),H[K]={Nt:z,view:F}):x(z),z=A,K=O)},Q=function(a){a=a||p;m(a,y);var b=null!=Y;b&&r(y,!0);e(S,"attached",[a,q,A,b]);f(A,"attachedHandler",[a,q,b]);if(!b){var c=v.createChildContext(A,void 0,function(a){a.$module=A;a.$params=N});l(y[0],E,function(a){g.applyBindings(c,a)});e(S,
"bindingsApplied",[a,q,A]);f(A,"bindingsAppliedHandler",[a,q])}},R=function(){e(S,"transitionCompleted",[p,q,A]);f(A,"transitionCompletedHandler",[p,q])};if(null!=W){var U=c({node:p,valueAccessor:q,isInitial:u,oldViewModel:z,newViewModel:A},W,p,J,Q,s,R);C=n(U)}else C=void 0;C||(s(null),Q(null),R())}}.bind(null,I),function(b,c){c!==A&&null!=c&&a.r.error(c)}.bind(null,I))},null,{disposeWhenNodeIsRemoved:p});return{controlsDescendantBindings:!0}}};g.virtualElements.allowedBindings.ojModule=!0})()});