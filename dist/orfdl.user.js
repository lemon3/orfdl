// ==UserScript==
// @name         ORF DL
// @namespace    https://github.com/lemon3/
// @version      0.5.4
// @description  orf tvthek video download helper
// @author       lemon3
// @match        https://*.tvthek.orf.at/*
// @icon         https://raw.githubusercontent.com/lemon3/orfdl/main/_assets/dl.svg
// @grant        none
// @run-at       document-end
// @license      MIT
// @copyright    lemon3
// @homepage     https://github.com/lemon3/orfdl
// @updateURL    https://raw.githubusercontent.com/lemon3/orfdl/main/dist/orfdl.meta.js
// @downloadURL  https://raw.githubusercontent.com/lemon3/orfdl/main/dist/orfdl.user.js
// ==/UserScript==

!function(){"use strict";var n={424:function(n,e,t){var o=t(612),r=t.n(o),i=t(64),a=t.n(i),l=t(779),c=t.n(l),s=new URL(t(420),t.b),u=new URL(t(160),t.b),d=new URL(t(556),t.b),p=a()(r()),f=c()(s),g=c()(u),y=c()(d);p.push([n.id,"#l3-8845 {\n  --color-1: #000;\n  --color-2: #222;\n  --color-3: #90a8c2;\n  --color-4: #c9c9c9;\n  --color-5: #222222;\n  --font-small: 12px;\n  --font-tiny: 10px;\n}\n\n#l3-8845 {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 99999;\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  color: var(--color-4);\n}\n\n#l3-8845 .l3-8845-info {\n  font-size: var(--font-small);\n}\n\n#l3-8845-body .l3-8845-info {\n  padding: 15px;\n}\n\n#l3-8845-clear {\n  color: var(--color-1);\n  background-color: var(--color-3);\n  width: 32px;\n  height: 38px;\n  text-align: center;\n  box-sizing: border-box;\n  padding: 0;\n  flex: none;\n  text-align: center;\n  justify-content: center;\n  padding: 0.5em;\n  cursor: pointer;\n}\n\n#l3-8845-header {\n  width: 100%;\n  padding: 15px;\n}\n\n#l3-8845-filter {\n  display: flex;\n  align-items: stretch;\n  margin-top: 0.5em;\n}\n\n#l3-8845-content {\n  max-height: 260px;\n  overflow: scroll;\n}\n\n#l3-8845-close {\n  z-index: 999999;\n  position: absolute;\n  top: 19px;\n  left: 15px;\n  padding: 0;\n  background-image: url("+f+");\n  background-repeat: no-repeat;\n  width: 38px;\n  height: 38px;\n  background-size: 20px;\n  background-color: var(--color-1);\n  border-radius: 50%;\n  background-position: center center;\n  box-shadow: 0 2px 12px -3px rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n}\n\n#l3-8845-close.open {\n  background-image: url("+g+");\n}\n\n#l3-8845-field {\n  font-size: 16px;\n  touch-action: none;\n  padding: 8px;\n  height: 38px;\n  border: 0;\n  border-radius: 0;\n  color: var(--color-2);\n  width: 100%;\n}\n\n#l3-8845-field:focus {\n  outline: none;\n}\n\n#l3-8845-box {\n  z-index: 999999;\n  box-sizing: border-box;\n  margin: 0px;\n  top: 64px;\n  max-width: 280px;\n  width: 280px;\n  background-color: var(--color-1);\n  transform: translateX(-100%);\n  position: relative;\n  transition: transform 0.1s ease-out;\n  /* box-shadow: 0 8px 15px -6px rgba(255, 255, 255, 0.3); */\n  border: 1px solid var(--color-5);\n}\n\n#l3-8845-box.open {\n  transform: translateX(0);\n  transition: transform 0.2s ease-out;\n}\n\n#l3-8845 .l3-8845-shareBtn {\n  background-image: url("+y+");\n  width: 32px;\n  height: 32px;\n  background-color: var(--color-3);\n  display: flex;\n  background-size: 80%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  flex: none;\n  border: none;\n}\n\n#l3-8845 .l3-8845-result {\n  display: flex;\n  flex-flow: row wrap;\n  padding: 1em;\n}\n\n#l3-8845 .l3-8845-result:nth-child(odd) {\n  background-color: var(--color-5);\n}\n\n#l3-8845 .l3-8845-bar {\n  width: 100%;\n  flex: 1 1 100%;\n  font-size: var(--font-small);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5em;\n}\n\n#l3-8845 .l3-8845-title {\n  display: flex;\n  padding: 0.5em 0.5em 0.5em 0;\n  line-height: 1.4em;\n}\n\n/* textarea */\n/* #l3-8845 .l3-8845-ta {\n  border: none;\n  border-radius: 0;\n  padding: 0.5em;\n  font-size: 12px;\n  line-height: 1.1em;\n  box-sizing: border-box;\n  flex: 0 1 40% !important;\n  resize: none;\n  touch-action: none;\n} */\n\n#l3-8845 .l3-8845-copy {\n  font-size: 30px;\n}\n\n#l3-8845 .l3-8845-imgWrap {\n  width: 100%;\n  display: flex;\n  position: relative;\n}\n\n#l3-8845 .l3-8845-copy {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  left: 0;\n  top: 35%;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding: 10px;\n  opacity: 0;\n  transition: opacity ease-out 0.2s;\n}\n\n#l3-8845 .success .l3-8845-copy {\n  opacity: 1;\n}\n\n#l3-8845 .active {\n  box-shadow: 0 0 0 2px rgb(255, 255, 84);\n  filter: brightness(1.2);\n}\n\n#l3-8845-footer {\n  font-size: var(--font-tiny);\n  text-align: right;\n}\n",""]),e.c=p},64:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);o&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},779:function(n){n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},612:function(n){n.exports=function(n){return n[1]}},556:function(n){n.exports="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNTYgMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMWQxZDFiIj48cGF0aCBkPSJtMjA0LjMgMjQyLjdoLTE1Mi42Yy00LjEgMC03LjUtMy40LTcuNS03LjV2LTEyOC4xYzAtNC4xIDMuNC03LjUgNy41LTcuNWg1MC4xYzQuMSAwIDcuNSAzLjQgNy41IDcuNXMtMy40IDcuNS03LjUgNy41aC00Mi42djExMy4yaDEzNy42di0xMTMuMmgtNDIuNmMtNC4xIDAtNy41LTMuNC03LjUtNy41czMuNC03LjUgNy41LTcuNWg1MC4xYzQuMSAwIDcuNSAzLjQgNy41IDcuNXYxMjguMmMwIDQuMS0zLjQgNy40LTcuNSA3LjR6Ii8+PHBhdGggZD0ibTEyOCAxNzguM2MtNC4xIDAtNy41LTMuNC03LjUtNy41di0xMzIuN2wtMzUuMiAzNS4yYy0yLjkgMi45LTcuNyAyLjktMTAuNiAwcy0yLjktNy43IDAtMTAuNmw0Ny45LTQ3LjljLjEtLjEuMy0uMy40LS40IDEuMi0xIDIuNi0xLjYgNC0xLjguNS0uMSAxLS4xIDEuNCAwIDEuNy4xIDMuNS44IDQuOCAyLjJsNDggNDhjMS41IDEuNSAyLjIgMy40IDIuMiA1LjNzLS43IDMuOC0yLjIgNS4zYy0yLjkgMi45LTcuNyAyLjktMTAuNiAwbC0zNS4yLTM1LjJ2MTMyLjdjLjEgNC0zLjMgNy40LTcuNCA3LjR6Ii8+PC9nPjwvc3ZnPg=="},420:function(n){n.exports="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNTYgMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMjQzLjIgMTE5LjZ2MTYuOGgtMjMwLjR2LTE2Ljh6Ii8+PHBhdGggZD0ibTI0My4yIDE3NC42djE2LjhoLTIzMC40di0xNi44eiIvPjxwYXRoIGQ9Im0yNDMuMiA2NC42djE2LjhoLTIzMC40di0xNi44eiIvPjwvZz48L3N2Zz4="},160:function(n){n.exports="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNTYgMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjQ2LjUgMjM0LjctMTA2LjctMTA2LjcgMTA2LjctMTA2LjctMTEuOC0xMS45LTEwNi43IDEwNi43LTEwNi43LTEwNi42LTExLjggMTEuOSAxMDYuNiAxMDYuNi0xMDYuNiAxMDYuNiAxMS44IDExLjkgMTA2LjctMTA2LjYgMTA2LjcgMTA2Ljd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.b=document.baseURI||self.location.href,function(){var n=t(424);function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e,t){return(e=l(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,l(o.key),o)}}function l(n){var t=function(n,t){if("object"!=e(n)||!n)return n;var o=n[Symbol.toPrimitive];if(void 0!==o){var r=o.call(n,t||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"==e(t)?t:String(t)}var c,s,u,d,p,f,g,y,v,m,b,x,L=function(n,e,t){return function(n,e,t){if(e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.setAttribute(o,e[o]);if(t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n.style[r]=t[r]);return n}(document.createElement(n),e,t)},h=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,t,o;return e=n,(t=[{key:"get",value:function(n,e){var t=localStorage.getItem(n);if(!t)return!1;var o=JSON.parse(t);return e?o[e]:o}},{key:"set",value:function(n,e){var t=r(r({},this.get(n)||{}),e),o=JSON.stringify(t);localStorage.setItem(n,o)}}])&&a(e.prototype,t),o&&a(e,o),Object.defineProperty(e,"prototype",{writable:!1}),n}(),j="dl-app",M=!0,I="",N=n.c.toString(),w=[],T=function(n){var e=n.filter((function(n){return"Q8C"===n.quality&&"hls"===n.delivery}));return 0===e.length?null:e[0].src},A=function(){var n,e,t=[];window.jsb&&window.jsb.last_event_values&&window.jsb.last_event_values["VideoPlaylist::INITIALIZED"]?n=window.jsb.last_event_values["VideoPlaylist::INITIALIZED"]:document.querySelectorAll(".player_viewport [data-jsb]").forEach((function(e){if(e.dataset&&e.dataset.jsb){var t=JSON.parse(e.dataset.jsb);if(t.playlist)return void(n=t)}}));if(!n)return t;e=n.playlist;var o,r,i,a=n.drm;r=e.preview_image_url,i=e.title;var l=e.gapless_video;if(l){var c=T(l.sources);c&&(o=c)}else{for(var s=e.videos,u=[],d=0;d<s.length;d++){var p=s[d],f=T(p.sources);f&&(o=f,u.push(o))}o="",u.forEach((function(n,e){o+="yt-dlp "+n+' -o "'+i+"_"+(e+1)+'.mp4" && '})),o&&(o=o.slice(0,-4))}var g=function(n){if(!n)return new Date;var e=n.match(/(\d{4})[_-](\d\d)[_-](\d\d)[_-](\d{4})/);if(!e)return new Date;var t=e[1],o=e[2],r=e[3],i=e[4].slice(0,-2)+":"+e[4].slice(2);return new Date("".concat(t,"-").concat(o,"-").concat(r," ").concat(i))}(e.videos[0].sources[0].src);return t.push({type:"all",title:i,drm:a,date:g,link:o,img:r}),o="",e.videos.forEach((function(n){var e=T(n.sources);e&&(o=e),t.push({type:"single",title:n.title,drm:a,date:g,link:o,img:n.preview_image_url})})),t},D=function(n){return("0"+n).slice(-(arguments.length>1&&void 0!==arguments[1]?arguments[1]:2))},S=function(n){var e=n.target;if(x&&(x.classList.remove("active"),x.querySelector(".l3-8845-copy").style.display="none"),"img"===e.nodeName.toLocaleLowerCase()&&e.dataset.drm&&"false"===e.dataset.drm){if(E(n)){var t=e.parentElement,o=t.querySelector(".l3-8845-copy");clearTimeout(s),o.style.display="block",s=setTimeout((function(){t.classList.add("active"),t.classList.add("success"),s=setTimeout((function(){t.classList.remove("success"),s=setTimeout((function(){o.style.display="none"}),200)}),500)}),1),x=t}}else"button"===e.nodeName.toLocaleLowerCase()&&void 0!==e.dataset.share&&k(n)},E=function(n){var e=n.target.parentElement.nextElementSibling;if(e.select(),navigator.clipboard){var t=e.innerHTML;return navigator.clipboard.writeText(t).then((function(){return console.log("successful")}),(function(n){return console.log("error",n)}))}return document.execCommand("copy")},k=function(n){if(!navigator.share)return!1;var e=n.target,t=e.dataset.sharetitle,o=e.dataset.shareurl;navigator.share({title:t,url:o}).then((function(){return console.log("successful share")})).catch((function(n){return console.log("error sharing:",n)}))},z=function(n){if(!n.length)return null;for(var e=new DocumentFragment,t=n.length-1;t>=0;t--){var o=n[t],r=L("div",{class:"l3-8845-result"}),i=L("div",{class:"l3-8845-bar"}),a=L("div",{class:"l3-8845-title"});a.innerHTML=o.title,i.append(a);var l=L("textarea",{class:"l3-8845-ta",disabled:"true"},{position:"absolute",left:"-999em",opacity:0}),c=L("div",{class:"l3-8845-imgWrap"}),s=L("div",{class:"l3-8845-copy"},{display:"none"});s.innerHTML="copied";var u=L("img",{src:o.img,width:"150"},{flex:"auto"});u.dataset.drm=null!==o.drm&&o.drm,c.append(u),c.append(s);var d=void 0;if(!o.drm){var p=o.date.getFullYear(),f=D(+o.date.getMonth()+1),y=D(o.date.getDate()),v=D(o.date.getHours()),m=D(o.date.getMinutes()),b="".concat(p,"-").concat(f,"-").concat(y),x="".concat(v).concat(m),h=o.title.toLowerCase().replaceAll('"',"");h.replaceAll("'","");var j="".concat(b,"_").concat(x,"_").concat(h,".mp4");d="yt-dlp ".concat(o.link," -o '").concat(j,"'");var M=L("button",{class:"l3-8845-shareBtn"});M.dataset.share=!0,M.dataset.shareurl=o.link,i.append(M)}l.innerHTML=d,r.append(i),r.append(c),r.append(l),e.append(r)}g.append(e)},C=function(){M?(f.classList.remove("open"),m.classList.remove("open"),s=setTimeout((function(){f.style.display="none",M=!1,c.set(j,{open:M}),clearTimeout(s)}),100)):(f.style.display="block",s=setTimeout((function(){f.classList.add("open"),m.classList.add("open"),v&&v.focus(),M=!0,c.set(j,{open:M}),clearTimeout(s)}),1))},P=function(n){if(p!==n){var e,t,o=(t="*"===(e=n)?"all":"single",w.filter((function(n){return n.type===t&&("*"===e||n.title.toLowerCase().match(e.replaceAll("*",".*").toLowerCase()))})));g.innerHTML="",y.style.display=o.length?"block":"none",z(o),c.set(j,{search:n}),p=n}},O=function(){v.value="",v.dispatchEvent(new Event("input")),v.focus()},Z=function(n){if(n)return b.style.display="none",void(d=!1);d||(b.style.display="flex",d=!0)},_=function(n){var e=n.currentTarget.value;P(e),Z(""===e)};!function(){if(u)return!1;var n=(c=new h).get(j);if(n&&(void 0!==n.search&&(I=n.search),void 0!==n.open&&(M=n.open)),u=!0,(w=A()).length)if(function(){var n=w.length-1,e=1===n,t=L("div",{id:"l3-8845"}),o=L("div",{id:"l3-8845-body"});if(f=L("div",{id:"l3-8845-box"}),(y=L("div",{class:"l3-8845-info"})).innerHTML="Click on the image to copy the video-link to the clipboard",!e){y.style.display="none";var r=L("div",{id:"l3-8845-header"}),i=L("div",{class:"l3-8845-info"});i.innerHTML="Number of Videos: ".concat(n),r.append(i);var a=L("div",{id:"l3-8845-filter"});v=L("input",{type:"text",id:"l3-8845-field",name:"fake_user[name]",value:"",autocomplete:"new-password",spellcheck:"false","aria-autocomplete":"none",placeholder:"filter videos by name ..."});var l=L("div",{class:"l3-8845-info"});l.innerHTML="Type * to see the full episode/broadcast",(b=document.createElement("div")).id="l3-8845-clear",b.innerHTML="X",Z(!0),a.append(v),a.append(b),r.append(a),r.append(l),b.addEventListener("click",O,!1),v.addEventListener("input",_,!1),f.append(r)}(m=L("div",{id:"l3-8845-close"})).addEventListener("click",C),g=L("div",{id:"l3-8845-content"});var c=L("div",{id:"l3-8845-footer"});c.innerHTML="v-".concat("0.5.4"),o.append(y),o.append(g),f.append(o),f.append(c),t.append(f),t.append(m);var s=L("style");s.innerHTML=N,document.body.append(s),document.body.append(t),t.addEventListener("click",S)}(),M&&(f.classList.add("open"),f.style.display="block",m.classList.add("open")),w&&2===w.length){var e=w.filter((function(n){return"single"===n.type}));z(e)}else v.value=I,v.dispatchEvent(new Event("input")),P(I),v.focus()}()}()}();