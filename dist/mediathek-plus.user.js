// ==UserScript==
// @name         mediathek plus
// @namespace    https://github.com/lemon3/
// @version      0.8.3
// @description  mediathek plus is a userscript extension
// @author       lemon3
// @match        https://on.orf.at/*
// @icon         https://raw.githubusercontent.com/lemon3/mediathek-plus/main/_assets/dl.svg
// @grant        none
// @run-at       document-idle
// @noframes
// @license      MIT
// @copyright    lemon3
// @homepage     https://github.com/lemon3/mediathek-plus
// @updateURL    https://raw.githubusercontent.com/lemon3/mediathek-plus/main/dist/mediathek-plus.meta.js
// @downloadURL  https://raw.githubusercontent.com/lemon3/mediathek-plus/main/dist/mediathek-plus.user.js
// ==/UserScript==

var ne=Object.defineProperty;var q=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var M=(d,l,o)=>l in d?ne(d,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[l]=o,A=(d,l)=>{for(var o in l||(l={}))ae.call(l,o)&&M(d,o,l[o]);if(q)for(var o of q(l))oe.call(l,o)&&M(d,o,l[o]);return d};var c=(d,l,o)=>M(d,typeof l!="symbol"?l+"":l,o);var _=(d,l,o)=>new Promise((D,T)=>{var O=f=>{try{b(o.next(f))}catch(S){T(S)}},s=f=>{try{b(o.throw(f))}catch(S){T(S)}},b=f=>f.done?D(f.value):Promise.resolve(f.value).then(O,s);b((o=o.apply(d,l)).next())});(function(){"use strict";const d="#l3-9048{--color-1: #000;--color-2: #222;--color-3: #72bbe9;--color-4: #c9c9c9;--color-5: #222222;--color-6: #555555;--color-7: #aedaf5;--font-small: 12px;--font-tiny: 10px}#l3-9048{position:fixed;top:56px;left:0;z-index:99999;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;color:var(--color-4);width:100%;max-width:400px}.l3-9048-info{font-size:var(--font-small)}#l3-9048-body .l3-9048-info{padding:15px}#l3-9048-clear{background-color:var(--color-3);width:32px;height:32px;cursor:pointer;right:3px;top:3px;border-radius:50%;position:absolute;display:flex;padding:5px}#l3-9048-clear svg{fill:var(--color-2)}#l3-9048-header{width:100%;padding:15px}#l3-9048-header.hidden{display:none}.l3-9048-buttons{display:flex;font-size:14px;gap:.5em}.l3-9048-button{font-size:var(--font-small);color:var(--color-4);background-color:var(--color-5);cursor:pointer;display:flex;min-height:38px;flex:1 1 auto;justify-content:center;text-align:center;align-items:center;width:50%;padding:.5em;border-radius:6px}.l3-9048-button.active{color:var(--color-2);background-color:var(--color-3)}.l3-9048-button.active:hover{background-color:var(--color-7)}#l3-9048-filter{display:flex;align-items:stretch;margin-top:1em;position:relative}#l3-9048-filter.hidden{display:none}#l3-9048-content{max-height:260px;overflow:scroll}#l3-9048-menu{z-index:999999;position:fixed;top:8px;right:110px;padding:8px;width:40px;height:40px;background-color:var(--color-1);border-radius:50%;cursor:pointer;user-select:none}#l3-9048-menu:hover{background-color:#ffffff14}@media screen and (min-width: 744px){#l3-9048-menu{right:170px}}#l3-9048-menu .open{display:none}#l3-9048-menu .close,#l3-9048-menu.open .open{display:block}#l3-9048-menu.open .close{display:none}#l3-9048-field{font-size:16px;touch-action:none;padding:8px 40px 8px 8px;height:38px;border:0;color:var(--color-2);width:100%;border-radius:6px;appearance:textfield}#l3-9048-field::-webkit-search-cancel-button,#l3-9048-field::-webkit-search-decoration,#l3-9048-field::-webkit-search-results-decoration{display:none}#l3-9048-field:focus{outline:none;box-shadow:0 0 0 3px var(--color-3)}#l3-9048-box{z-index:999999;box-sizing:border-box;margin:0;top:0;max-width:400px;background-color:var(--color-1);transform:translate(-100%);position:relative;transition:transform .1s ease-out;border:1px solid var(--color-5);box-shadow:0 2px 12px -3px #fffc;border-radius:6px}#l3-9048-box.open{transform:translate(0);transition:transform .2s ease-out}.l3-9048-actions{display:flex;flex-direction:column;gap:.5em}.l3-9048-icon{width:28px;height:28px}.l3-9048-button-text{display:none}@media screen and (min-width: 330px){.l3-9048-button-text{display:block;max-width:100px;width:100%;text-align:center}}.l3-9048-action{background-color:var(--color-3);display:flex;flex:1 1 auto;border:none;border-radius:6px;padding:5px;font-size:var(--font-small);text-decoration:none!important;color:var(--color-2)!important;align-items:center;gap:.5em}.l3-9048-action div{user-select:none;pointer-events:none}.l3-9048-action:hover{background-color:var(--color-7);cursor:pointer}.l3-9048-result{padding:1em}.l3-9048-result:nth-child(odd){background-color:var(--color-5)}.l3-9048-main{display:flex;flex-flow:row nowrap;gap:.5em}.l3-9048-bar{display:flex;align-items:center}.l3-9048-title{font-size:var(--font-small);display:flex;width:100%;flex:1 0 100%;padding:.5em .5em .5em 0;line-height:1.4em}.l3-9048-imgWrap{display:flex;flex:1 1 auto;position:relative;cursor:pointer}.l3-9048-imgWrap img{max-width:100%;object-fit:cover}.l3-9048-copy{font-size:25px;position:absolute;text-align:center;width:100%;background-color:#0006;padding:6px;transition:opacity ease-out .2s;display:flex;justify-content:center;align-self:center}#l3-9048 .success .l3-9048-copy{opacity:1}.l3-9048-imgWrap.active{box-shadow:0 0 0 2px #ffff54;filter:brightness(1.2)}#l3-9048-footer{font-size:var(--font-tiny);text-align:right;padding:.5em}",l='<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M128 235.3c-59.2 0-107.3-48.2-107.3-107.3C20.7 68.8 68.8 20.7 128 20.7S235.3 68.9 235.3 128c0 59.2-48.1 107.3-107.3 107.3zm0-202.6c-52.6 0-95.3 42.8-95.3 95.3s42.8 95.3 95.3 95.3 95.3-42.8 95.3-95.3-42.7-95.3-95.3-95.3z"/><ellipse cx="96.2" cy="96.1" rx="18.3" ry="27"/><ellipse cx="159.8" cy="96.1" rx="18.3" ry="27"/><path d="M128.5 188.8c-38.6 0-55.2-28.9-55.9-30.2-1.6-2.9-.6-6.5 2.3-8.2 2.9-1.6 6.5-.6 8.2 2.3.6 1 14.1 24.1 45.4 24.1 31.2 0 43.8-22.9 44.3-23.9 1.6-2.9 5.2-4 8.1-2.5s4.1 5.1 2.5 8.1c-.6 1.2-16.2 30.3-54.9 30.3z"/></svg>',o='<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M223.2 213.7L137.5 128l85.7-85.7-9.5-9.6-85.7 85.7-85.7-85.6-9.5 9.6 85.7 85.7-85.7 85.7 9.5 9.6 85.7-85.7 85.7 85.7z"/></svg>',D=`<svg enable-background="new 0 0 256 256" viewBox="0 0 256 256"
  xmlns="http://www.w3.org/2000/svg">
  <g fill="#1d1d1b">
    <path d="m233.6 26.4h-167.2c-4.1 0-7.5 3.4-7.5 7.5v38.3h-36.5c-4.1 0-7.5 3.4-7.5 7.5v140.5c0 4.1 3.4 7.5 7.5 7.5h167.2c4.1 0 7.5-3.4 7.5-7.5v-38.2h36.6c4.1 0 7.5-3.4 7.5-7.5v-140.6c-.1-4.1-3.4-7.5-7.6-7.5zm-51.5 186.4h-152.2v-125.5h29.1v87.2c0 4.1 3.4 7.5 7.5 7.5h115.7v30.8zm44-45.8h-29.1-15-108.1v-79.7-15-30.9h152.2z"/>
    <path d="m195.2 96.7h-37.7v-34c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v34h-37.7c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5h37.7v34c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-34h37.7c4.1 0 7.5-3.4 7.5-7.5s-3.3-7.5-7.5-7.5z"/>
  </g>
</svg>
`,T='<svg enable-background="new 0 0 256 256" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g fill="#1d1d1b"><path d="m204.3 242.7h-152.6c-4.1 0-7.5-3.4-7.5-7.5v-128.1c0-4.1 3.4-7.5 7.5-7.5h50.1c4.1 0 7.5 3.4 7.5 7.5s-3.4 7.5-7.5 7.5h-42.6v113.2h137.6v-113.2h-42.6c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5h50.1c4.1 0 7.5 3.4 7.5 7.5v128.2c0 4.1-3.4 7.4-7.5 7.4z"/><path d="m128 178.3c-4.1 0-7.5-3.4-7.5-7.5v-132.7l-35.2 35.2c-2.9 2.9-7.7 2.9-10.6 0s-2.9-7.7 0-10.6l47.9-47.9c.1-.1.3-.3.4-.4 1.2-1 2.6-1.6 4-1.8.5-.1 1-.1 1.4 0 1.7.1 3.5.8 4.8 2.2l48 48c1.5 1.5 2.2 3.4 2.2 5.3s-.7 3.8-2.2 5.3c-2.9 2.9-7.7 2.9-10.6 0l-35.2-35.2v132.7c.1 4-3.3 7.4-7.4 7.4z"/></g></svg>',O=(h,e,t)=>{if(e)for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&h.setAttribute(n,e[n]);if(t)for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&(h.style[n]=t[n]);return h},s=(h,e,t)=>O(document.createElement(h),e,t);class b{constructor(){}get(e,t){let n=localStorage.getItem(e);if(!n)return!1;let a=JSON.parse(n);return t?a[t]:a}set(e,t){const n=this.get(e)||{},a=A(A({},n),t);let i=JSON.stringify(a);localStorage.setItem(e,i)}}let f=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return f={passive:!1},!1}}))}catch(h){f=!1}const U={name:"mediathek-plus",displayName:"mediathek plus",version:"0.8.3",type:"module",description:"mediathek plus is a userscript extension",main:"index.js",author:"lemon3",license:"MIT",scripts:{dev:"vite",build:"vite build",preview:"vite preview",lint:"eslint 'src/**/*.js'",prettify:"prettier --write 'src/**/*.*'",browserslistupdate:"npx update-browserslist-db@latest"},devDependencies:{eslint:"^9.5.0",globals:"^15.4.0",prettier:"^3.3.2",vite:"^5.3.1","vite-plugin-banner":"^0.7.1","vite-plugin-create-file":"^0.1.0","vite-plugin-string-replace":"^1.1.3"}},m={btn:"Auf das Bild klicken um den video-link in die Zwischenablage zu kopieren",nothingFound:`Kein Video gefunden!
<br> Gehen Sie auf eine Video-Seite!`,filterVideos:"Beiträge filtern ...",shareVideo:"Video teilen",openTab:"Video in neuem Tab öffnen",completeBroadcast:"Ganze Sendung anzeigen",individualPosts:"Einzelne Beiträge anzeigen"},W=U.version;let G="Q8C",R="hls";const K=d.toString();let v;const k=(h,e=2)=>("0"+h).slice(-e),X=h=>{let e=h.target.nextElementSibling;if(e.select(),navigator.clipboard){let t=e.innerHTML;return navigator.clipboard.writeText(t).then(()=>console.log("successful"),n=>console.log("error",n))}return document.execCommand("copy")},J=h=>{if(!navigator.share)return!1;const e=h.target,t=e.dataset.shareTitle,n=e.dataset.shareUrl;navigator.share({title:t,url:n}).then(()=>console.log("successful share")).catch(a=>console.log("error sharing:",a))};class B{constructor(e){c(this,"renderSearchResults",e=>{if(this.contentDiv.innerHTML="",!e.length)return null;const t="div",n=new DocumentFragment;for(let a=e.length-1;a>=0;a--){const i=e[a],r=s(t,{class:"l3-9048-result"}),p=s(t,{class:"l3-9048-bar"}),u=s(t,{class:"l3-9048-title"});u.innerHTML=i.title;const w=s("textarea",{class:"l3-9048-ta",disabled:"true"},{position:"absolute",left:"-999em",opacity:0}),x=s(t,{class:"l3-9048-imgWrap",title:m.btn}),g=s(t,{class:"l3-9048-copy"},{display:"none"});g.innerHTML="copied";const E=s("img",{src:i.img,width:"150"},{flex:"auto"});E.dataset.drm=i.drm===null?!1:i.drm;let H="";if(!i.drm){const Q=i.date.getFullYear(),Z=k(+i.date.getMonth()+1),j=k(i.date.getDate()),Y=k(i.date.getHours()),ee=k(i.date.getMinutes()),te=`${Q}-${Z}-${j}`,ie=`${Y}${ee}`;let I=i.title.toLowerCase().replaceAll('"',"");I.replaceAll("'","");const se=`${te}_${ie}_${I}.mp4`;H=`yt-dlp ${i.link} -o '${se}'`;const F=s("div",{class:"l3-9048-actions"}),y=s("button",{class:"l3-9048-action l3-9048-shareBtn"});y.dataset.share=!0,y.dataset.shareUrl=i.link,y.title=m.shareVideo;const V=s(t,{class:"l3-9048-button-text"});V.innerHTML=m.shareVideo;const $=s(t,{class:"l3-9048-icon"});$.innerHTML=T,y.append(V,$);const L=s("a",{class:"l3-9048-action l3-9048-newTab"});L.target="_blank",L.href=i.link,L.title=m.openTab;const N=s(t,{class:"l3-9048-button-text"});N.innerHTML=m.openTab;const P=s(t,{class:"l3-9048-icon"});P.innerHTML=D,L.append(N,P),F.append(L,y),p.append(F)}w.innerHTML=H,x.append(E,w,g);const C=s("div",{class:"l3-9048-main"});C.append(x,p),r.append(u,C),n.append(r)}this.contentDiv.append(n)});c(this,"contentClicked",e=>{const t=e.target;if(this.currentActive&&(this.currentActive.classList.remove("active"),this.currentActive.querySelector(".l3-9048-copy").style.display="none"),t.nodeName.toLocaleLowerCase()==="img"&&t.dataset.drm&&t.dataset.drm==="false"){if(X(e)){const a=t.parentElement,i=a.querySelector(".l3-9048-copy");clearTimeout(v),i.style.display="block",v=setTimeout(()=>{a.classList.add("active"),a.classList.add("success"),v=setTimeout(()=>{a.classList.remove("success"),v=setTimeout(()=>{i.style.display="none"},200)},500)},1),this.currentActive=a}}else t.nodeName.toLocaleLowerCase()==="button"&&typeof t.dataset.share!="undefined"&&J(e)});c(this,"cleanUp",e=>{e.advertising_mapping={},e.advertising_query_string="",e.adition_advertising_query_string="",e.show_display_ads=!1,e.has_youth_protection=!1,e.has_active_youth_protection=!1,e.youth_protection=void 0,e.show_instream_ads=!1,e.youth_protection_type=!1,e.age_classification=void 0,e.disable_display_ads_orf_platforms=!0,e.disable_instream_ads_orf_platforms=!0});c(this,"open",()=>{this.mainDiv.style.display="block",v=setTimeout(()=>{this.mainDiv.classList.add("open"),this.menuBtn.classList.add("open"),this.searchField&&this.searchField.focus(),this.isOpen=!0,this.store.set(this.name,{open:this.isOpen}),clearTimeout(v)},1)});c(this,"close",()=>{this.mainDiv.classList.remove("open"),this.menuBtn.classList.remove("open"),v=setTimeout(()=>{this.mainDiv.style.display="none",this.isOpen=!1,this.store.set(this.name,{open:this.isOpen}),clearTimeout(v)},100)});c(this,"toggle",()=>{if(this.moved)return!1;this.isOpen?this.close():this.open()});c(this,"clear",()=>{this.searchField.value="",this.searchField.dispatchEvent(new Event("input")),this.searchField.focus()});c(this,"onInput",e=>{const t=e.currentTarget.value;this.searchNow(t),this.toggleClearBtn(t==="")});c(this,"fetchData",()=>_(this,null,function*(){let e=0,t;return new Promise((n,a)=>{const i=()=>{window.__NUXT__||a(),e++;let r=[];const p=window.__NUXT__.data;if(p&&Object.entries(p).forEach(w=>{const[x,g]=w;if(g.sources){r.push(g),this.cleanUp(g),this.currentKey=x;return}}),r.length){const u=r.filter(w=>document.location.pathname.match(w.id));return e=0,n(u[0])}else{if(e>20)return clearTimeout(t),t=null,a();t=setTimeout(()=>i(),150)}};i()})}));c(this,"createDataObject",()=>_(this,null,function*(){let e;try{return e=yield this.fetchData(),e&&(e=this.construct(e)),e}catch(t){return console.log(t),!1}}));c(this,"showAll",e=>{if(e&&this.activeTab===1)return!1;this.showAllButton.classList.add("active"),this.showSegmentsButton.classList.remove("active");const t=this.findData("*");this.filterElement.classList.add("hidden"),this.renderSearchResults(t),this.setActiveTab(1)});c(this,"showSegments",e=>{if(e&&this.activeTab===2)return!1;this.showAllButton.classList.remove("active"),this.showSegmentsButton.classList.add("active"),this.filterElement.classList.remove("hidden");let t=this.oldSearchString||this.searchField.value;this.toggleClearBtn(!t),this.searchField.focus(),this.oldSearchString=null,this.searchNow(t),this.setActiveTab(2)});c(this,"reInit",()=>{this.currentKey=null,this.autoSearch=this.oldSearchString,this.oldSearchString=null,this.contentDiv.innerHTML="",this.start()});c(this,"start",()=>_(this,null,function*(){if(this.dataObject=[],window.location.pathname.match(/video/)&&(this.dataObject=yield this.createDataObject()),!this.dataObject||!this.dataObject.length){this.header.classList.add("hidden"),this.contentDiv.innerHTML=`<div class="l3-9048-result" style="text-align:center;">${m.nothingFound}</div>`;return}if(this.dataObject&&this.dataObject.length===2){this.header.classList.add("hidden");const t=this.dataObject.filter(n=>n.type==="single");this.renderSearchResults(t);return}this.header.classList.remove("hidden"),this.searchField.value=this.autoSearch,this.activeTab===1?this.showAll():this.showSegments()}));this.settings=Object.assign({},B.defaults,e),this.name="dl-app",this.autoSearch="",this.oldSearchString=null,this.dataObject=[],this.currentSite=window.location.href,this.createWatcher(),this.settings.createGui&&this.createApp(),this.store=new b,this.init()}createWatcher(){const e=document.querySelector('[property="og:url"]'),t={attributes:!0},n=i=>{for(const r of i)r.type==="attributes"&&window.location.href!==this.currentSite&&(this.reInit(),this.currentSite=window.location.href)};return new MutationObserver(n).observe(e,t),!0}findData(e){if(!this.dataObject)return null;const t=e==="*"?"all":"single";return this.dataObject.filter(a=>a.type===t&&(e==="*"||a.title.toLowerCase().match(e.replaceAll("*",".*").toLowerCase())))}searchNow(e){if(this.oldSearchString===e)return;const t=this.findData(e);this.renderSearchResults(t),this.store.set(this.name,{search:e}),this.oldSearchString=e}toggleClearBtn(e){if(e){this.clearBtn.style.display="none",this.clearBtnVisible=!1;return}this.clearBtnVisible||(this.clearBtn.style.display="flex",this.clearBtnVisible=!0)}construct(e){window.playerObject=e;const t=[],n=(i,r="single")=>{this.cleanUp(i);let p=null,u=i.date||i.episode_date;if(u=new Date(u),i.sources[R].forEach(g=>{g.quality_key.toLocaleLowerCase()==="qxa"&&(p=g.src.replace("QXA",G))}),!p)return!1;const w=typeof i.is_drm_protected!="undefined"?i.is_drm_protected:null;return{type:r,title:i.headline||i.title,drm:w,date:u,link:p,img:i.image&&i.image.image&&i.image.image.player&&i.image.image.player.url||null}},a=n(e,"all");return a&&t.push(a),e.segments&&e.segments.forEach(i=>{const r=n(i);r&&t.push(r)}),t}createApp(){const e="div",t=s(e,{id:"l3-9048"}),n=s(e,{id:"l3-9048-body"});this.mainDiv=s(e,{id:"l3-9048-box"},{display:"none"}),this.header=s(e,{id:"l3-9048-header"}),this.showAllButton=s(e,{class:"l3-9048-button"}),this.showAllButton.innerHTML=m.completeBroadcast,this.showSegmentsButton=s(e,{class:"l3-9048-button"}),this.showSegmentsButton.innerHTML=m.individualPosts,this.buttons=s(e,{class:"l3-9048-buttons"}),this.buttons.append(this.showAllButton,this.showSegmentsButton),this.header.append(this.buttons),this.filterElement=s(e,{id:"l3-9048-filter"}),this.searchField=s("input",{type:"search",id:"l3-9048-field",name:"query",value:"",autocomplete:"off",spellcheck:"false","aria-autocomplete":"none",placeholder:m.filterVideos}),this.clearBtn=s(e,{id:"l3-9048-clear"});const a=s(e,{class:"l3-9048-icon"});a.innerHTML=o,this.clearBtn.append(a),this.toggleClearBtn(!0),this.filterElement.append(this.searchField,this.clearBtn),this.header.append(this.filterElement),this.clearBtn.addEventListener("click",this.clear,!1),this.searchField.addEventListener("input",this.onInput,!1),this.mainDiv.append(this.header),this.menuBtn=s(e,{id:"l3-9048-menu"});const i=s(e,{class:"open"});i.innerHTML=o;const r=s(e,{class:"close"});r.innerHTML=l,this.menuBtn.append(i,r),this.menuBtn.addEventListener("click",this.toggle),this.contentDiv=s(e,{id:"l3-9048-content"});const p=s(e,{id:"l3-9048-footer"});p.innerHTML=`v-${W}`,n.append(this.contentDiv),this.mainDiv.append(n,p),t.append(this.mainDiv);const u=s("style");u.innerHTML=K,document.body.append(u,t,this.menuBtn),t.addEventListener("click",this.contentClicked),document.querySelector(".left-content").addEventListener("click",this.close),this.showAllButton.addEventListener("click",this.showAll),this.showSegmentsButton.addEventListener("click",this.showSegments),this.app=t}setActiveTab(e){this.store.set(this.name,{activeTab:e}),this.activeTab=e}init(){if(this.appInitialized)return!1;this.appInitialized=!0;let e=this.store.get(this.name);this.activeTab=1,e&&(typeof e.search!="undefined"&&(this.autoSearch=e.search),typeof e.open!="undefined"&&(this.isOpen=e.open),typeof e.activeTab!="undefined"&&(this.activeTab=+e.activeTab)),this.start(),this.isOpen&&(this.mainDiv.classList.add("open"),this.mainDiv.style.display="block",this.menuBtn.classList.add("open"))}}B.defaults={createGui:!0};const z=()=>{if(window.mediathekPlus_initialized)return!1;window.mediathekPlus_initialized=!0,new B};window.top===window.self&&(document.readyState==="complete"||document.readyState==="interactive"?(z(),document.removeEventListener("DOMContentLoaded",z)):document.addEventListener("DOMContentLoaded",z,!1))})();
