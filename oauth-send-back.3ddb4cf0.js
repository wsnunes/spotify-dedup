parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({17:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){var e;return{clientId:"04dca0de1c4e4aca88cc615ac23581be",redirectUri:e="localhost:8005"===location.host?"http://localhost:8005/callback.html":"https://jmperezperez.com/spotify-dedup/callback.html",host:/http[s]?:\/\/[^\/]+/.exec(e)[0]}}();exports.default=e;
},{}],11:[function(require,module,exports) {
"use strict";var o=require("./oauth-config"),i=t(o);function t(o){return o&&o.__esModule?o:{default:o}}var e=window.self===window.top?window.opener:window.parent,n=window.location.hash;if(n){var a=window.location.hash.split("&")[0].split("=")[1];e.postMessage(a,i.default.host)}
},{"./oauth-config":17}]},{},[11], null)
//# sourceMappingURL=oauth-send-back.3ddb4cf0.map