!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.uppload=t():n.uppload=t()}(this,function(){return function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:o})},e.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=5)}([function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),s=function(n){var t={};return function(n){if("function"==typeof n)return n();if(void 0===t[n]){var e=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}}(),l=null,d=0,u=[],c=e(0);function p(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(y(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function f(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function b(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),u.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,r)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function v(n){var t=document.createElement("style");return n.attrs.type="text/css",h(t,n.attrs),b(n,t),t}function h(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function y(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var a=d++;e=l||(l=v(t)),o=w.bind(null,e,a,!1),r=w.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return n.attrs.type="text/css",n.attrs.rel="stylesheet",h(t,n.attrs),b(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=c(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),r=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){m(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return p(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var a=e[r];(s=i[a.id]).refs--,o.push(s)}n&&p(f(n,t),t);for(r=0;r<o.length;r++){var s;if(0===(s=o[r]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var g,x=(g=[],function(n,t){return g[n]=t,g.filter(Boolean).join("\n")});function w(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=x(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(i).concat([r]).join("\n")}var a;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,'.uppload-bg {\n  position: fixed;\n  z-index: 10000;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5); }\n\n.uppload-modal {\n  position: fixed;\n  background: #fff;\n  z-index: 11000;\n  box-sizing: border-box;\n  overflow: hidden;\n  border-radius: 0.25rem; }\n\n.uppload-modal, .uppload-bg {\n  display: none; }\n  .uppload-modal.visible, .uppload-bg.visible {\n    display: block; }\n  .uppload-modal.fadeIn, .uppload-bg.fadeIn {\n    animation: fadeIn 0.4s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards; }\n  .uppload-modal.fadeOut, .uppload-bg.fadeOut {\n    animation: fadeOut 0.4s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards; }\n  .uppload-modal.hidden, .uppload-bg.hidden {\n    display: none; }\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@media (min-width: 860px) {\n  .uppload-modal {\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 720px;\n    height: 500px; }\n  .uppload-bg::after {\n    z-index: 1;\n    cursor: pointer;\n    content: "\\D7";\n    font-family: sans-serif;\n    position: fixed;\n    font-size: 32px;\n    line-height: 0.5;\n    right: 2vw;\n    top: 2vw;\n    color: rgba(255, 255, 255, 0.5); } }\n\n@media (max-width: 860px) {\n  .uppload-modal {\n    left: 0;\n    right: 0;\n    top: 10vh;\n    bottom: 0; } }\n\n.uppload-modal aside {\n  background-color: #eee; }\n  .uppload-modal aside nav ul {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n\n@media (min-width: 860px) {\n  .uppload-modal aside {\n    width: 200px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    overflow-y: auto; }\n    .uppload-modal aside nav li button {\n      transition: 0.3s;\n      font: inherit;\n      background: none;\n      appearance: none;\n      border: none;\n      display: block;\n      width: 100%;\n      text-align: left;\n      padding: 1rem;\n      border-bottom: 1px solid #ddd; }\n      .uppload-modal aside nav li button:hover {\n        background-color: rgba(0, 0, 0, 0.05); }\n  .uppload-modal section {\n    position: absolute;\n    right: 0;\n    left: 200px;\n    top: 0;\n    bottom: 0;\n    overflow-y: auto; } }\n',""])},function(n,t,e){var o=e(3);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(1)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){"use strict";var o,r=e(4);(o=r)&&o.__esModule;var i=document.createElement("div");i.classList.add("uppload-bg"),document.body.appendChild(i);var a=document.createElement("div");a.classList.add("uppload-modal"),a.innerHTML='\n<div>\n    <aside>\n        <nav>\n            <ul>\n                <li class="active"><button>Upload file</button></li>\n                <li><button>Click photo</button></li>\n                <li><button>Import from URL</button></li>\n                <li><button>Facebook</button></li>\n                <li><button>Google Drive</button></li>\n                <li><button>Google Photos</button></li>\n                <li><button>Dropbox</button></li>\n                <li><button>Instagram</button></li>\n            </ul>\n        </nav>\n    </aside>\n    <section>\n\n    </section>\n</div>\n',document.body.appendChild(a),window.addEventListener("keyup",function(n){console.log(n),27!==n.keyCode&&27!==n.which&&"Escape"!==n.key&&"Escape"!==n.code||s()});var s=function(){0,a.classList.add("fadeOut"),i.classList.add("fadeOut"),setTimeout(function(){a.classList.remove("fadeOut"),a.classList.remove("visible"),i.classList.remove("fadeOut"),i.classList.remove("visible")},399)};i.addEventListener("click",s),a.classList.add("visible"),i.classList.add("visible"),setTimeout(function(){a.classList.add("fadeIn"),i.classList.add("fadeIn")},1)}])});