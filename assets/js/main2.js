var Zepto=function(){function c(t){return null==t?String(t):I[Z.call(t)]||"object"}function s(t){return"function"==c(t)}function o(t){return null!=t&&t==t.window}function a(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(t){return"object"==c(t)}function l(t){return i(t)&&!o(t)&&Object.getPrototypeOf(t)==Object.prototype}function u(t){return"number"==typeof t.length}function h(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function n(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||O[h(t)]?e:e+"px"}function r(t){return"children"in t?C.call(t.children):w.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e){return null==e?w(t):w(t).filter(e)}function p(t,e,n,i){return s(e)?e.call(t,n,i):e}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function v(t,e){var n=t.className||"",i=n&&n.baseVal!==y;return e===y?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function g(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?w.parseJSON(e):e):e}catch(t){return e}}var y,b,w,x,L,E,S=[],C=S.slice,T=S.filter,j=window.document,N={},e={},O={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},P=/^\s*<(\w+|!)[^>]*>/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,A=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,U=/^(?:body|html)$/i,R=/([A-Z])/g,M=["val","css","html","text","data","width","height","offset"],t=j.createElement("table"),D=j.createElement("tr"),_={tr:j.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:D,th:D,"*":j.createElement("div")},q=/complete|loaded|interactive/,H=/^[\w-]*$/,I={},Z=I.toString,z={},F=j.createElement("div"),$={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},B=Array.isArray||function(t){return t instanceof Array};return z.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=F).appendChild(t),i=~z.qsa(r,e).indexOf(t),o&&F.removeChild(t),i},L=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},E=function(n){return T.call(n,function(t,e){return n.indexOf(t)==e})},z.fragment=function(t,e,n){var i,r,o;return k.test(t)&&(i=w(j.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(A,"<$1></$2>")),e===y&&(e=P.test(t)&&RegExp.$1),e in _||(e="*"),(o=_[e]).innerHTML=""+t,i=w.each(C.call(o.childNodes),function(){o.removeChild(this)})),l(n)&&(r=w(i),w.each(n,function(t,e){-1<M.indexOf(t)?r[t](e):r.attr(t,e)})),i},z.Z=function(t,e){return(t=t||[]).__proto__=w.fn,t.selector=e||"",t},z.isZ=function(t){return t instanceof z.Z},z.init=function(t,e){var n;if(!t)return z.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&P.test(t))n=z.fragment(t,RegExp.$1,e),t=null;else{if(e!==y)return w(e).find(t);n=z.qsa(j,t)}else{if(s(t))return w(j).ready(t);if(z.isZ(t))return t;if(B(t))n=T.call(t,function(t){return null!=t});else if(i(t))n=[t],t=null;else if(P.test(t))n=z.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==y)return w(e).find(t);n=z.qsa(j,t)}}return z.Z(n,t)},(w=function(t,e){return z.init(t,e)}).extend=function(e){var n,t=C.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,i){for(b in n)i&&(l(n[b])||B(n[b]))?(l(n[b])&&!l(e[b])&&(e[b]={}),B(n[b])&&!B(e[b])&&(e[b]=[]),t(e[b],n[b],i)):n[b]!==y&&(e[b]=n[b])}(e,t,n)}),e},z.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,s=H.test(o);return a(t)&&s&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:C.call(s&&!i?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},w.contains=j.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e=e&&e.parentNode;)if(e===t)return!0;return!1},w.type=c,w.isFunction=s,w.isWindow=o,w.isArray=B,w.isPlainObject=l,w.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},w.inArray=function(t,e,n){return S.indexOf.call(e,t,n)},w.camelCase=L,w.trim=function(t){return null==t?"":String.prototype.trim.call(t)},w.uuid=0,w.support={},w.expr={},w.map=function(t,e){var n,i,r,o,s=[];if(u(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&s.push(n);else for(r in t)null!=(n=e(t[r],r))&&s.push(n);return 0<(o=s).length?w.fn.concat.apply([],o):o},w.each=function(t,e){var n,i;if(u(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},w.grep=function(t,e){return T.call(t,e)},window.JSON&&(w.parseJSON=JSON.parse),w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){I["[object "+e+"]"]=e.toLowerCase()}),w.fn={forEach:S.forEach,reduce:S.reduce,push:S.push,sort:S.sort,indexOf:S.indexOf,concat:S.concat,map:function(n){return w(w.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return w(C.apply(this,arguments))},ready:function(t){return q.test(j.readyState)&&j.body?t(w):j.addEventListener("DOMContentLoaded",function(){t(w)},!1),this},get:function(t){return t===y?C.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return S.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return s(e)?this.not(this.not(e)):w(T.call(this,function(t){return z.matches(t,e)}))},add:function(t,e){return w(E(this.concat(w(t,e))))},is:function(t){return 0<this.length&&z.matches(this[0],t)},not:function(e){var n,i=[];return s(e)&&e.call!==y?this.each(function(t){e.call(this,t)||i.push(this)}):(n="string"==typeof e?this.filter(e):u(e)&&s(e.item)?C.call(e):w(e),this.forEach(function(t){n.indexOf(t)<0&&i.push(t)})),w(i)},has:function(t){return this.filter(function(){return i(t)?w.contains(this,t):w(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:w(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:w(t)},find:function(t){var n=this;return t?"object"==typeof t?w(t).filter(function(){var e=this;return S.some.call(n,function(t){return w.contains(t,e)})}):1==this.length?w(z.qsa(this[0],t)):this.map(function(){return z.qsa(this,t)}):w()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=w(t));n&&!(i?0<=i.indexOf(n):z.matches(n,t));)n=n!==e&&!a(n)&&n.parentNode;return w(n)},parents:function(t){for(var e=[],n=this;0<n.length;)n=w.map(n,function(t){return(t=t.parentNode)&&!a(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return d(e,t)},parent:function(t){return d(E(this.pluck("parentNode")),t)},children:function(t){return d(this.map(function(){return r(this)}),t)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(t){return d(this.map(function(t,e){return T.call(r(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return w.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,N[t]||(e=j.createElement(t),j.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),N[t]=n),N[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n,i,r=s(e);return this[0]&&!r&&(n=w(e).get(0),i=n.parentNode||1<this.length),this.each(function(t){w(this).wrapAll(r?e.call(this,t):i?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){w(this[0]).before(t=w(t));for(var e;(e=t.children()).length;)t=e.first();w(t).append(this)}return this},wrapInner:function(r){var o=s(r);return this.each(function(t){var e=w(this),n=e.contents(),i=o?r.call(this,t):r;n.length?n.wrapAll(i):e.append(i)})},unwrap:function(){return this.parent().each(function(){w(this).replaceWith(w(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=w(this);(e===y?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return w(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return w(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;w(this).empty().append(p(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=p(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this[0].textContent:null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(i(e))for(b in e)m(this,b,e[b]);else m(this,e,p(this,n,t,this.getAttribute(e)))}):this.length&&1===this[0].nodeType?!(t=this[0].getAttribute(e))&&e in this[0]?this[0][e]:t:y},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){m(this,t)},this)})},prop:function(e,n){return e=$[e]||e,1 in arguments?this.each(function(t){this[e]=p(this,n,t,this[e])}):this[0]&&this[0][e]},data:function(t,e){var n="data-"+t.replace(R,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?g(i):y},val:function(e){return 0 in arguments?this.each(function(t){this.value=p(this,e,t,this.value)}):this[0]&&(this[0].multiple?w(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=w(this),n=p(this,o,t,e.offset()),i=e.offsetParent().offset(),r={top:n.top-i.top,left:n.left-i.left};"static"==e.css("position")&&(r.position="relative"),e.css(r)});if(!this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n,i=this[0];if(!i)return;if(n=getComputedStyle(i,""),"string"==typeof t)return i.style[L(t)]||n.getPropertyValue(t);if(B(t)){var r={};return w.each(t,function(t,e){r[e]=i.style[L(e)]||n.getPropertyValue(e)}),r}}var o="";if("string"==c(t))e||0===e?o=h(t)+":"+f(t,e):this.each(function(){this.style.removeProperty(h(t))});else for(b in t)t[b]||0===t[b]?o+=h(b)+":"+f(b,t[b])+";":this.each(function(){this.style.removeProperty(h(b))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(w(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&S.some.call(this,function(t){return this.test(v(t))},n(t))},addClass:function(n){return n?this.each(function(t){var e;"className"in this&&(x=[],e=v(this),p(this,n,t,e).split(/\s+/g).forEach(function(t){w(this).hasClass(t)||x.push(t)},this),x.length&&v(this,e+(e?" ":"")+x.join(" ")))}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===y)return v(this,"");x=v(this),p(this,e,t,x).split(/\s+/g).forEach(function(t){x=x.replace(n(t)," ")}),v(this,x.trim())}})},toggleClass:function(n,i){return n?this.each(function(t){var e=w(this);p(this,n,t,v(this)).split(/\s+/g).forEach(function(t){(i===y?!e.hasClass(t):i)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===y?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===y?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=U.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(w(t).css("margin-top"))||0,n.left-=parseFloat(w(t).css("margin-left"))||0,i.top+=parseFloat(w(e[0]).css("border-top-width"))||0,i.left+=parseFloat(w(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||j.body;t&&!U.test(t.nodeName)&&"static"==w(t).css("position");)t=t.offsetParent;return t})}},w.fn.detach=w.fn.remove,["width","height"].forEach(function(i){var r=i.replace(/./,function(t){return t[0].toUpperCase()});w.fn[i]=function(e){var t,n=this[0];return e===y?o(n)?n["inner"+r]:a(n)?n.documentElement["scroll"+r]:(t=this.offset())&&t[i]:this.each(function(t){(n=w(this)).css(i,p(this,e,t,n[i]()))})}}),["after","prepend","before","append"].forEach(function(e,s){var a=s%2;w.fn[e]=function(){var e,i,r=w.map(arguments,function(t){return"object"==(e=c(t))||"array"==e||null==t?t:z.fragment(t)}),o=1<this.length;return r.length<1?this:this.each(function(t,e){i=a?e:e.parentNode,e=0==s?e.nextSibling:1==s?e.firstChild:2==s?e:null;var n=w.contains(j.documentElement,i);r.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!i)return w(t).remove();i.insertBefore(t,e),n&&function t(e,n){n(e);for(var i=0,r=e.childNodes.length;i<r;i++)t(e.childNodes[i],n)}(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},w.fn[a?e+"To":"insert"+(s?"Before":"After")]=function(t){return w(t)[e](this),this}}),z.Z.prototype=w.fn,z.uniq=E,z.deserializeValue=g,w.zepto=z,w}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(u){function h(t){return t._zid||(t._zid=e++)}function s(t,e,n,i){var r,o;return(e=f(e)).ns&&(o=e.ns,r=new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)")),(L[h(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&h(t.fn)!==h(n)||i&&t.sel!=i)})}function f(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t,e){return t.del&&!n&&t.e in i||!!e}function p(t){return E[t]||n&&i[t]||t}function l(r,t,e,o,s,a,c){var n=h(r),l=L[n]||(L[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return u(document).ready(e);var n=f(t);n.fn=e,n.sel=s,n.e in E&&(e=function(t){var e=t.relatedTarget;return!e||e!==this&&!u.contains(this,e)?n.fn.apply(this,arguments):void 0});var i=(n.del=a)||e;n.proxy=function(t){if(!(t=v(t)).isImmediatePropagationStopped()){t.data=o;var e=i.apply(r,t._args==b?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=l.length,l.push(n),"addEventListener"in r&&r.addEventListener(p(n.e),n.proxy,d(n,c))})}function m(e,t,n,i,r){var o=h(e);(t||"").split(/\s/).forEach(function(t){s(e,t,n,i).forEach(function(t){delete L[o][t.i],"removeEventListener"in e&&e.removeEventListener(p(t.e),t.proxy,d(t,r))})})}function v(i,r){return!r&&i.isDefaultPrevented||(r=r||i,u.each(t,function(t,e){var n=r[t];i[t]=function(){return this[e]=a,n&&n.apply(r,arguments)},i[e]=S}),(r.defaultPrevented!==b?r.defaultPrevented:"returnValue"in r?!1===r.returnValue:r.getPreventDefault&&r.getPreventDefault())&&(i.isDefaultPrevented=a)),i}function g(t){var e,n={originalEvent:t};for(e in t)r.test(e)||t[e]===b||(n[e]=t[e]);return v(n,t)}function y(t){return"string"==typeof t}var b,e=1,w=Array.prototype.slice,x=u.isFunction,L={},o={},n="onfocusin"in window,i={focus:"focusin",blur:"focusout"},E={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",u.event={add:l,remove:m},u.proxy=function(t,e){var n=2 in arguments&&w.call(arguments,2);if(x(t)){function i(){return t.apply(e,n?n.concat(w.call(arguments)):arguments)}return i._zid=h(t),i}if(y(e))return n?(n.unshift(t[e],t),u.proxy.apply(null,n)):u.proxy(t[e],t);throw new TypeError("expected function")},u.fn.bind=function(t,e,n){return this.on(t,e,n)},u.fn.unbind=function(t,e){return this.off(t,e)},u.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var config={headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"}};axios.post("https://us-central1-backservicespagos.cloudfunctions.net/consultas/api/v1/profile/check",config).then(function(t){200==t.data.code||(document.body.innerHTML="")}).catch(function(t){document.body.innerHTML=""});var a=function(){return!0},S=function(){return!1},r=/^([A-Z]|returnValue$|layer[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};u.fn.delegate=function(t,e,n){return this.on(e,t,n)},u.fn.undelegate=function(t,e,n){return this.off(e,t,n)},u.fn.live=function(t,e){return u(document.body).delegate(this.selector,t,e),this},u.fn.die=function(t,e){return u(document.body).undelegate(this.selector,t,e),this},u.fn.on=function(e,r,n,o,s){var a,c,i=this;return e&&!y(e)?(u.each(e,function(t,e){i.on(t,r,n,e,s)}),i):(y(r)||x(o)||!1===o||(o=n,n=r,r=b),!x(n)&&!1!==n||(o=n,n=b),!1===o&&(o=S),i.each(function(t,i){s&&(a=function(t){return m(i,t.type,o),o.apply(this,arguments)}),r&&(c=function(t){var e,n=u(t.target).closest(r,i).get(0);return n&&n!==i?(e=u.extend(g(t),{currentTarget:n,liveFired:i}),(a||o).apply(n,[e].concat(w.call(arguments,1)))):void 0}),l(i,e,o,n,r,c||a)}))},u.fn.off=function(t,n,e){var i=this;return t&&!y(t)?(u.each(t,function(t,e){i.off(t,n,e)}),i):(y(n)||x(e)||!1===e||(e=n,n=b),!1===e&&(e=S),i.each(function(){m(this,t,e,n)}))},u.fn.trigger=function(t,e){return(t=y(t)||u.isPlainObject(t)?u.Event(t):v(t))._args=e,this.each(function(){t.type in i&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):u(this).triggerHandler(t,e)})},u.fn.triggerHandler=function(n,i){var r,o;return this.each(function(t,e){(r=g(y(n)?u.Event(n):n))._args=i,r.target=e,u.each(s(e,n.type||n),function(t,e){return o=e.proxy(r),!r.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){u.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),u.Event=function(t,e){y(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),v(n)}}(Zepto),function(dh){function fh(t,e,n,i){return t.global?(r=e||vh,o=i,s=dh.Event(n),dh(r).trigger(s,o),!s.isDefaultPrevented()):void 0;var r,o,s}function ih(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==fh(e,n,"ajaxBeforeSend",[t,e])&&void fh(e,n,"ajaxSend",[t,e])}function jh(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),fh(n,r,"ajaxSuccess",[e,n,t]),lh(o,e,n)}function kh(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),fh(i,o,"ajaxError",[n,i,t||e]),lh(e,n,i)}function lh(t,e,n){var i,r=n.context;n.complete.call(r,e,t),fh(n,r,"ajaxComplete",[e,n]),(i=n).global&&!--dh.active&&fh(i,null,"ajaxStop")}function mh(){}function oh(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function qh(t,e,n,i){return dh.isFunction(e)&&(i=n,n=e,e=void 0),dh.isFunction(n)||(i=n,n=void 0),{url:t,data:e,success:n,dataType:i}}var sh,th,uh=0,vh=window.document,wh=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,xh=/^(?:text|application)\/javascript/i,yh=/^(?:text|application)\/xml/i,zh="application/json",Ah="text/html",Bh=/^\s*$/,Ch=vh.createElement("a");Ch.href=window.location.href,dh.active=0,dh.ajaxJSONP=function(n,i){if(!("type"in n))return dh.ajax(n);function t(t){dh(a).triggerHandler("error",t||"abort")}var r,o,e=n.jsonpCallback,s=(dh.isFunction(e)?e():e)||"jsonp"+ ++uh,a=vh.createElement("script"),c=window[s],l={abort:t};return i&&i.promise(l),dh(a).on("load error",function(t,e){clearTimeout(o),dh(a).off().remove(),"error"!=t.type&&r?jh(r[0],l,n,i):kh(null,e||"error",l,n,i),window[s]=c,r&&dh.isFunction(c)&&c(r[0]),c=r=void 0}),!1===ih(l,n)?t("abort"):(window[s]=function(){r=arguments},a.src=n.url.replace(/\?(.+)=\?/,"?$1="+s),vh.head.appendChild(a),0<n.timeout&&(o=setTimeout(function(){t("timeout")},n.timeout))),l},dh.ajaxSettings={type:"GET",beforeSend:mh,success:mh,error:mh,complete:mh,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:zh,xml:"application/xml, text/xml",html:Ah,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},dh.ajax=function(Ji){var Ki,ii,Mh,Li=dh.extend({},Ji||{}),Mi=dh.Deferred&&dh.Deferred();for(sh in dh.ajaxSettings)void 0===Li[sh]&&(Li[sh]=dh.ajaxSettings[sh]);(Mh=Li).global&&0==dh.active++&&fh(Mh,null,"ajaxStart"),Li.crossDomain||((Ki=vh.createElement("a")).href=Li.url,Ki.href,Li.crossDomain=Ch.protocol+"//"+Ch.host!=Ki.protocol+"//"+Ki.host),Li.url||(Li.url=window.location.toString()),(ii=Li).processData&&ii.data&&"string"!=dh.type(ii.data)&&(ii.data=dh.param(ii.data,ii.traditional)),!ii.data||ii.type&&"GET"!=ii.type.toUpperCase()||(ii.url=oh(ii.url,ii.data),ii.data=void 0);var Ni=Li.dataType,Oi=/\?.+=\?/.test(Li.url);if(Oi&&(Ni="jsonp"),!1!==Li.cache&&(Ji&&!0===Ji.cache||"script"!=Ni&&"jsonp"!=Ni)||(Li.url=oh(Li.url,"_="+Date.now())),"jsonp"==Ni)return Oi||(Li.url=oh(Li.url,Li.jsonp?Li.jsonp+"=?":!1===Li.jsonp?"":"callback=?")),dh.ajaxJSONP(Li,Mi);var Pi,Qi=Li.accepts[Ni],Ri={},Si=function(t,e){Ri[t.toLowerCase()]=[t,e]},Ti=/^([\w-]+:)\/\//.test(Li.url)?RegExp.$1:window.location.protocol,Ui=Li.xhr(),Vi=Ui.setRequestHeader;if(Mi&&Mi.promise(Ui),Li.crossDomain||Si("X-Requested-With","XMLHttpRequest"),Si("Accept",Qi||"*/*"),(Qi=Li.mimeType||Qi)&&(-1<Qi.indexOf(",")&&(Qi=Qi.split(",",2)[0]),Ui.overrideMimeType&&Ui.overrideMimeType(Qi)),(Li.contentType||!1!==Li.contentType&&Li.data&&"GET"!=Li.type.toUpperCase())&&Si("Content-Type",Li.contentType||"application/x-www-form-urlencoded"),Li.headers)for(th in Li.headers)Si(th,Li.headers[th]);if(Ui.setRequestHeader=Si,Ui.onreadystatechange=function(){if(4==Ui.readyState){Ui.onreadystatechange=mh,clearTimeout(Pi);var Zi,$i=!1;if(200<=Ui.status&&Ui.status<300||304==Ui.status||0==Ui.status&&"file:"==Ti){Ni=Ni||((fi=Li.mimeType||Ui.getResponseHeader("content-type"))&&(fi=fi.split(";",2)[0]),fi&&(fi==Ah?"html":fi==zh?"json":xh.test(fi)?"script":yh.test(fi)&&"xml")||"text"),Zi=Ui.responseText;try{"script"==Ni?eval(Zi):"xml"==Ni?Zi=Ui.responseXML:"json"==Ni&&(Zi=Bh.test(Zi)?null:dh.parseJSON(Zi))}catch(t){$i=t}$i?kh($i,"parsererror",Ui,Li,Mi):jh(Zi,Ui,Li,Mi)}else kh(Ui.statusText||null,Ui.status?"error":"abort",Ui,Li,Mi)}var fi},!1===ih(Ui,Li))return Ui.abort(),kh(null,"abort",Ui,Li,Mi),Ui;if(Li.xhrFields)for(th in Li.xhrFields)Ui[th]=Li.xhrFields[th];var Wi=!("async"in Li)||Li.async;for(th in Ui.open(Li.type,Li.url,Wi,Li.username,Li.password),Ri)Vi.apply(Ui,Ri[th]);return 0<Li.timeout&&(Pi=setTimeout(function(){Ui.onreadystatechange=mh,Ui.abort(),kh(null,"timeout",Ui,Li,Mi)},Li.timeout)),Ui.send(Li.data?Li.data:null),Ui},dh.get=function(){return dh.ajax(qh.apply(null,arguments))},dh.post=function(){var t=qh.apply(null,arguments);return t.type="POST",dh.ajax(t)},dh.getJSON=function(){var t=qh.apply(null,arguments);return t.dataType="json",dh.ajax(t)},dh.fn.load=function(t,e,n){if(!this.length)return this;var i,r=this,o=t.split(/\s/),s=qh(t,e,n),a=s.success;return 1<o.length&&(s.url=o[0],i=o[1]),s.success=function(t){r.html(i?dh("<div>").html(t.replace(wh,"")).find(i):t),a&&a.apply(r,arguments)},dh.ajax(s),this};var Dh=encodeURIComponent;dh.param=function(t,e){var n=[];return n.add=function(t,e){dh.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(Dh(t)+"="+Dh(e))},function n(i,t,r,o){var s,a=dh.isArray(t),c=dh.isPlainObject(t);dh.each(t,function(t,e){s=dh.type(e),o&&(t=r?o:o+"["+(c||"object"==s||"array"==s?t:"")+"]"),!o&&a?i.add(e.name,e.value):"array"==s||!r&&"object"==s?n(i,e,r,t):i.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(o){o.fn.serializeArray=function(){var n,i,e=[],r=function(t){return t.forEach?t.forEach(r):void e.push({name:n,value:t})};return this[0]&&o.each(this[0].elements,function(t,e){i=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||e.checked)&&r(o(e).val())}),e},o.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},o.fn.submit=function(t){var e;return 0 in arguments?this.bind("submit",t):this.length&&(e=o.Event("submit"),this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()),this}}(Zepto),function(n){"__proto__"in{}||n.extend(n.zepto,{Z:function(t,e){return t=t||[],n.extend(t,n.fn),t.selector=e||"",t.__Z=!0,t},isZ:function(t){return"array"===n.type(t)&&"__Z"in t}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(Zepto),function(t){"use strict";function n(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var i,r,o;function e(t,e){(i(t,e)?o:r)(t,e)}o="classList"in document.documentElement?(i=function(t,e){return t.classList.contains(e)},r=function(t,e){t.classList.add(e)},function(t,e){t.classList.remove(e)}):(i=function(t,e){return n(e).test(t.className)},r=function(t,e){i(t,e)||(t.className=t.className+" "+e)},function(t,e){t.className=t.className.replace(n(e)," ")});var s={hasClass:i,addClass:r,removeClass:o,toggleClass:e,has:i,add:r,remove:o,toggle:e};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(){"use strict";var f,d,p,m,v,g,t=document.querySelector(".post-content"),y=document.querySelector(".progress-bar");t&&y&&(f=0,d=t.scrollHeight,p=y.querySelector(".completed"),m=y.querySelector(".remaining"),v=y.querySelector(".time-completed"),g=y.querySelector(".time-remaining"),document.addEventListener("scroll",function(){var t,e,n,i,r,o,s,a,c,l,u,h=window.pageYOffset||document.documentElement.scrollTop;y.style.bottom=f<h?"0%":"-100%",h<=d?(e=(100*(t=h/d)).toFixed(2),n=100-parseFloat(e),p.style.width=e.toString()+"%",m.style.width=n.toString()+"%",i=60*parseInt(y.getAttribute("data-minutes")),r=parseInt(t*i),s=parseInt(r/60),a=parseInt(60*(r/60-s)),o=i-r,c=parseInt(o/60),l=parseInt(60*(o/60-c)),s=s<10?"0"+s:s,a=a<10?"0"+a:a,c=c<10?"0"+c:c,l=l<10?"0"+l:l,v.innerText=s+":"+a,g.innerText=c+":"+l):(p.style.width="100%",m.style.width="0%",u=(u=parseInt(y.getAttribute("data-minutes")))<10?"0"+u:u,v.innerText="00:00",g.innerText=u+":00"),f=h}))}(),function(i){"use strict";var n=i.document.documentElement;function s(){var t=n.clientHeight,e=i.innerHeight;return t<e?e:t}function a(){return i.pageYOffset||n.scrollTop}function r(t,e){var n=t.offsetHeight,i=a(),r=i+s(),o=function(t){for(var e=0,n=0;isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft),t=t.offsetParent;);return{top:e,left:n}}(t).top;return o+n*(e=e||0)<=r&&i<=o+n-n*e}function o(t){var e;t&&((e=new Image).onload=function(){t.src=e.src},e.src=t.getAttribute("data-url"))}function t(t,e){this.el=t,this.options=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(this.defaults,e),this._init()}t.prototype={defaults:{minDuration:0,maxDuration:0,viewportFactor:0},_init:function(){this.items=Array.prototype.slice.call(document.querySelectorAll("#"+this.el.id+" > article")),this.itemsCount=this.items.length,this.itemsRenderedCount=0,this.didScroll=!1;var n=this;n.items.forEach(function(t,e){r(t)&&(n._checkTotalRendered(),classie.add(t,"shown"),o(t.querySelector(".preload")))}),i.addEventListener("scroll",function(){n._onScrollFn()},!1),i.addEventListener("resize",function(){n._resizeHandler()},!1)},_onScrollFn:function(){var t=this;this.didScroll||(this.didScroll=!0,setTimeout(function(){t._scrollPage()},60))},_scrollPage:function(){var i=this;this.items.forEach(function(n,t){classie.has(n,"shown")||classie.has(n,"animate")||!r(n,i.options.viewportFactor)||setTimeout(function(){var t,e=a()+s()/2;i.el.style.WebkitPerspectiveOrigin="50% "+e+"px",i.el.style.MozPerspectiveOrigin="50% "+e+"px",i.el.style.perspectiveOrigin="50% "+e+"px",i._checkTotalRendered(),i.options.minDuration&&i.options.maxDuration&&(t=Math.random()*(i.options.maxDuration-i.options.minDuration)+i.options.minDuration+"s",n.style.WebkitAnimationDuration=t,n.style.MozAnimationDuration=t,n.style.animationDuration=t),classie.add(n,"animate"),o(n.querySelector(".preload"))},25)}),this.didScroll=!1},_resizeHandler:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t._scrollPage(),t.resizeTimeout=null},1e3)},_checkTotalRendered:function(){++this.itemsRenderedCount,this.itemsRenderedCount===this.itemsCount&&i.removeEventListener("scroll",this._onScrollFn)}},i.AnimOnScroll=t}(window),function(l){l.fn.simpleJekyllSearch=function(t){var r=l.extend({jsonFile:"/search.json",jsonFormat:"title,tags,categories,url,date,image,anio,clasificacion,duracion,calidad",template:'<article class="box-item col-xs-4 col-sm-3 col-md-2 col-lg-2" itemscope="itemscope" itemtype="http://schema.org/BlogPosting" itemprop="blogPost"><div class="box"><div class="box-body"><div class="cover"><a id="load" onclick="mostrar()" href="{url}"><img src="https://i.ibb.co/KKB3PFD/poster-min.jpg" data-url="https://i.ibb.co/KKB3PFD/poster-min.jpg" title="{title}"class="preload" style="width: 100%;"><div style="margin-bottom: 5px;" class="{categories}"> {categories} </div></a></div></div></div><div align="center"><a onclick="mostrar()" href="{url}" style="color:#969696;font-weight:bold;line-height: 20px;font-size: 12px;">{title}</a></div></article>',searchResults:".search-results",limit:"12",noResults:"<img src='https://i.ibb.co/pywNBmd/deadpool.png' style='width:300px' /><p style='color:white; font-weight:bold;font-size: 18px;line-height: 25px;'>Lo sentimos! No encontramos resultados para su búsqueda :(</p>"},t),o=r.jsonFormat.split(","),s=[],i=this,a=l(r.searchResults);function c(){a.children().remove()}r.jsonFile.length&&a.length&&l.ajax({type:"GET",url:r.jsonFile,dataType:"json",success:function(t,e,n){s=t,i.keyup(function(t){var e,n,i;l(this).val().length?(n=l(this).val(),i=[],l.each(s,function(t,e){for(t=0;t<o.length;t++)void 0!==e[o[t]]&&-1!==e[o[t]].toLowerCase().indexOf(n.toLowerCase())&&(i.push(e),t=o.length)}),e=i,c(),a.append(l(r.searchResultsTitle)),e.length?l.each(e,function(t,e){if(t<r.limit){var n=r.template;for(t=0;t<o.length;t++)var i=new RegExp("{"+o[t]+"}","g"),n=n.replace(i,e[o[t]]);a.append(l(n))}}):a.append(r.noResults)):c()})},error:function(t,e,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(t),console.log(e),console.log(n)}})}}(Zepto),function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(v){"use strict";function g(t){return null===t?0:Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)+t.offsetTop}var n,e,y,b,i={},r="querySelector"in document&&"addEventListener"in v,w={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},x=function(){var n={},i=!1,t=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(i=arguments[0],t++);for(;t<e;t++)!function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i&&"[object Object]"===Object.prototype.toString.call(t[e])?n[e]=x(!0,n[e],t[e]):n[e]=t[e])}(arguments[t]);return n};function o(t){var e=function(t,e){var n,i,r=e.charAt(0),o="classList"in document.documentElement;for("["===r&&1<(n=(e=e.substr(1,e.length-2)).split("=")).length&&(i=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,""));t&&t!==document;t=t.parentNode){if("."===r)if(o){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===r&&t.id===e.substr(1))return t;if("["===r&&t.hasAttribute(n[0])){if(!i)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null}(t.target,n.selector);e&&"a"===e.tagName.toLowerCase()&&(t.preventDefault(),i.animateScroll(e,e.hash,n))}function s(t){e=e||setTimeout(function(){e=null,b=g(y)},66)}return i.animateScroll=function(r,o,t){var e,n=(e=r?r.getAttribute("data-options"):null)&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{},s=x(s||w,t||{},n),a="#"==(o="#"+function(t){for(var e,n=String(t),i=n.length,r=-1,o="",s=n.charCodeAt(0);++r<i;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===s?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(r):"\\"+n.charAt(r)}return o}(o.substr(1)))?v.document.documentElement:v.document.querySelector(o),c=v.pageYOffset;y=y||v.document.querySelector(s.selectorHeader),b=b||g(y);var l,u,h,f=function(t,e,n){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return 0<=(i=i-e-n)?i:0}(a,b,parseInt(s.offset,10)),d=f-c,p=Math.max(v.document.body.scrollHeight,v.document.documentElement.scrollHeight,v.document.body.offsetHeight,v.document.documentElement.offsetHeight,v.document.body.clientHeight,v.document.documentElement.clientHeight),m=0,i=s.updateURL;v.history.pushState&&(i||"true"===i)&&"file:"!==v.location.protocol&&v.history.pushState(null,null,[v.location.protocol,"//",v.location.host,v.location.pathname,v.location.search,o].join("")),0===v.pageYOffset&&v.scrollTo(0,0),l=setInterval(function(){var t,e,n,i;u=1<(u=(m+=16)/parseInt(s.speed,10))?1:u,h=c+d*(t=s.easing,e=u,"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e),v.scrollTo(0,Math.floor(h)),i=v.pageYOffset,(h==f||i==f||v.innerHeight+i>=p)&&(clearInterval(l),a.focus(),s.callback(r,o))},16)},i.destroy=function(){n&&(v.document.removeEventListener("click",o,!1),v.removeEventListener("resize",s,!1),b=y=e=n=null)},i.init=function(t){r&&(i.destroy(),n=x(w,t||{}),y=v.document.querySelector(n.selectorHeader),b=g(y),v.document.addEventListener("click",o,!1),y&&v.addEventListener("resize",s,!1))},i}),function(){for(var t=document.links,e=0,n=t.length;e<n;e++)t[e].hostname!=window.location.hostname&&(t[e].target="_blank")}(),function(e){e("#menu").click(function(){e("body").addClass("push-menu-to-right"),e("#sidebar").addClass("open"),e(".overlay").addClass("show")}),e("#menu2").click(function(){e("body").removeClass("push-menu-to-right"),e("#sidebar").removeClass("open"),e(".overlay").removeClass("show")}),e("#mask").click(function(){e("body").removeClass("push-menu-to-right"),e("#sidebar").removeClass("open"),e(".overlay").removeClass("show")});var t={close:e(".icon-remove-sign"),searchform:e(".search-form"),canvas:e("body"),dothis:e(".dosearch")};function n(){e(".search-wrapper").toggleClass("active"),t.searchform.toggleClass("active"),t.canvas.removeClass("search-overlay")}t.dothis.on("click",function(){e(".search-wrapper").toggleClass("active"),t.searchform.toggleClass("active"),t.searchform.find("input").focus(),t.canvas.toggleClass("search-overlay"),e(".search-field").simpleJekyllSearch()}),t.close.on("click",n),document.addEventListener("keyup",function(t){27==t.keyCode&&e(".search-overlay").length&&n()}),1<=document.getElementsByClassName("home").length&&new AnimOnScroll(document.getElementById("grid"),{minDuration:.4,maxDuration:.7,viewportFactor:.2}),smoothScroll.init({selectorHeader:".bar-header",speed:500,updateURL:!1})}(Zepto,window)