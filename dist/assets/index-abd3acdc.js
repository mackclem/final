(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const T=window,A=T.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:l=>l}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,D="?"+m,z=`<${D}>`,g=document,b=(l="")=>g.createComment(l),H=l=>l===null||typeof l!="object"&&typeof l!="function",X=Array.isArray,G=l=>X(l)||typeof(l==null?void 0:l[Symbol.iterator])=="function",y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,S=/>/g,v=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,O=/"/g,W=/^(?:script|style|textarea|title)$/i,K=l=>(e,...t)=>({_$litType$:l,strings:e,values:t}),x=K(1),I=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),j=new WeakMap,f=g.createTreeWalker(g,129,null,!1),V=(l,e)=>{const t=l.length-1,s=[];let i,n=e===2?"<svg>":"",o=y;for(let r=0;r<t;r++){const h=l[r];let p,c,a=-1,$=0;for(;$<h.length&&(o.lastIndex=$,c=o.exec(h),c!==null);)$=o.lastIndex,o===y?c[1]==="!--"?o=P:c[1]!==void 0?o=S:c[2]!==void 0?(W.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=v):c[3]!==void 0&&(o=v):o===v?c[0]===">"?(o=i??y,a=-1):c[1]===void 0?a=-2:(a=o.lastIndex-c[2].length,p=c[1],o=c[3]===void 0?v:c[3]==='"'?O:L):o===O||o===L?o=v:o===P||o===S?o=y:(o=v,i=void 0);const E=o===v&&l[r+1].startsWith("/>")?" ":"";n+=o===y?h+z:a>=0?(s.push(p),h.slice(0,a)+"$lit$"+h.slice(a)+m+E):h+m+(a===-2?(s.push(void 0),r):E)}const d=n+(l[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(l)||!l.hasOwnProperty("raw"))throw Error("invalid template strings array");return[C!==void 0?C.createHTML(d):d,s]};class k{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,o=0;const d=e.length-1,r=this.parts,[h,p]=V(e,t);if(this.el=k.createElement(h,s),f.currentNode=this.el.content,t===2){const c=this.el.content,a=c.firstChild;a.remove(),c.append(...a.childNodes)}for(;(i=f.nextNode())!==null&&r.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const c=[];for(const a of i.getAttributeNames())if(a.endsWith("$lit$")||a.startsWith(m)){const $=p[o++];if(c.push(a),$!==void 0){const E=i.getAttribute($.toLowerCase()+"$lit$").split(m),M=/([.?@])?(.*)/.exec($);r.push({type:1,index:n,name:M[2],strings:E,ctor:M[1]==="."?q:M[1]==="?"?J:M[1]==="@"?Q:B})}else r.push({type:6,index:n})}for(const a of c)i.removeAttribute(a)}if(W.test(i.tagName)){const c=i.textContent.split(m),a=c.length-1;if(a>0){i.textContent=A?A.emptyScript:"";for(let $=0;$<a;$++)i.append(c[$],b()),f.nextNode(),r.push({type:2,index:++n});i.append(c[a],b())}}}else if(i.nodeType===8)if(i.data===D)r.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(m,c+1))!==-1;)r.push({type:7,index:n}),c+=m.length-1}n++}}static createElement(e,t){const s=g.createElement("template");return s.innerHTML=e,s}}function _(l,e,t=l,s){var i,n,o,d;if(e===I)return e;let r=s!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[s]:t._$Cl;const h=H(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==h&&((n=r==null?void 0:r._$AO)===null||n===void 0||n.call(r,!1),h===void 0?r=void 0:(r=new h(l),r._$AT(l,t,s)),s!==void 0?((o=(d=t)._$Co)!==null&&o!==void 0?o:d._$Co=[])[s]=r:t._$Cl=r),r!==void 0&&(e=_(l,r._$AS(l,e.values),r,s)),e}class Z{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:s},parts:i}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:g).importNode(s,!0);f.currentNode=n;let o=f.nextNode(),d=0,r=0,h=i[0];for(;h!==void 0;){if(d===h.index){let p;h.type===2?p=new w(o,o.nextSibling,this,e):h.type===1?p=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(p=new Y(o,this,e)),this.u.push(p),h=i[++r]}d!==(h==null?void 0:h.index)&&(o=f.nextNode(),d++)}return n}p(e){let t=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class w{constructor(e,t,s,i){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cm=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_(this,e,t),H(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==I&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):G(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(g.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,n=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=k.createElement(i.h,this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.p(s);else{const o=new Z(n,this),d=o.v(this.options);o.p(s),this.T(d),this._$AH=o}}_$AC(e){let t=j.get(e.strings);return t===void 0&&j.set(e.strings,t=new k(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new w(this.O(b()),this.O(b()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class B{constructor(e,t,s,i,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const n=this.strings;let o=!1;if(n===void 0)e=_(this,e,t,0),o=!H(e)||e!==this._$AH&&e!==I,o&&(this._$AH=e);else{const d=e;let r,h;for(e=n[0],r=0;r<n.length-1;r++)h=_(this,d[s+r],t,r),h===I&&(h=this._$AH[r]),o||(o=!H(h)||h!==this._$AH[r]),h===u?e=u:e!==u&&(e+=(h??"")+n[r+1]),this._$AH[r]=h}o&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class q extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}const F=A?A.emptyScript:"";class J extends B{constructor(){super(...arguments),this.type=4}j(e){e&&e!==u?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class Q extends B{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){var s;if((e=(s=_(this,e,t,0))!==null&&s!==void 0?s:u)===I)return;const i=this._$AH,n=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==u&&(i===u||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;typeof this._$AH=="function"?this._$AH.call((s=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&s!==void 0?s:this.element,e):this._$AH.handleEvent(e)}}class Y{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){_(this,e)}}const U=T.litHtmlPolyfillSupport;U==null||U(k,w),((R=T.litHtmlVersions)!==null&&R!==void 0?R:T.litHtmlVersions=[]).push("2.6.1");const N=(l,e,t)=>{var s,i;const n=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:e;let o=n._$litPart$;if(o===void 0){const d=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=o=new w(e.insertBefore(b(),d),d,void 0,t??{})}return o._$AI(l),o};function ee(l){let e=document.getElementById("food").value,t=document.getElementById("alc").value,s=document.getElementById("movie").value;console.log(e,t,s),te(e),ie(t),se(s)}document.getElementById("generate").addEventListener("click",ee);function te(l){const e={method:"GET",headers:{"X-RapidAPI-Key":"5f1bcea3b6mshae9e99957d58d19p1c4151jsn67493961f466","X-RapidAPI-Host":"tasty.p.rapidapi.com"}};fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q="+l,e).then(t=>t.json()).then(t=>{console.log(t);let s=Math.floor(Math.random()*11),i=t.results[s];if(console.log(i),i==null){let n;n=x`<div class="recipe">
            <h2>Try a different ingredient, no recipes found</h2>
        </div>`,N(n,document.getElementById("foodResult"))}else{let n=t.results[s].slug,o=t.results[s].name;console.log(o),console.log(n);let d,r="https://tasty.co/recipe/"+n;d=x`<div class="recipe">
        <h2>${i.name}</h2>
        <a href=${r} target="_blank" rel="noopener noreferrer">Link to recipe!</a>
      </div>`,N(d,document.getElementById("foodResult"))}})}function ie(l){const e={method:"GET",headers:{"X-RapidAPI-Key":"5f1bcea3b6mshae9e99957d58d19p1c4151jsn67493961f466","X-RapidAPI-Host":"the-cocktail-db.p.rapidapi.com"}};if(l=="mocktail"){let t;t=x`<div class="recipe2">
            <h2>Best Mocktails</h2>
            <a href=${"https://www.townandcountrymag.com/leisure/drinks/how-to/g785/best-mocktail-recipes/"} target="_blank" rel="noopener noreferrer">Link to drink recipes!</a>
            </div>`,N(t,document.getElementById("drinkResult"))}else fetch("https://the-cocktail-db.p.rapidapi.com/search.php?s="+l,e).then(t=>t.json()).then(t=>{console.log(t);let s=Math.floor(Math.random()*5),i=t.drinks[s];console.log(i);let n=t.drinks[s].idDrink;console.log(n);let o=t.drinks[s].strDrink;console.log(o);let d,r="https://www.thecocktaildb.com/drink/"+n;d=x`<div class="recipe2">
                    <h2>${i.strDrink}</h2>
                    <a href=${r} target="_blank" rel="noopener noreferrer">Link to drink recipe!</a>
                    </div>`,N(d,document.getElementById("drinkResult"))})}function se(l){const e={method:"GET",headers:{"X-RapidAPI-Key":"5f1bcea3b6mshae9e99957d58d19p1c4151jsn67493961f466","X-RapidAPI-Host":"online-movie-database.p.rapidapi.com"}};fetch("https://online-movie-database.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre="+l+"&limit=10",e).then(t=>t.json()).then(t=>{console.log(t);let s=Math.floor(Math.random()*5),i=t[s];console.log(i);let n=i.substr(7,10);console.log(n);let o="https://online-movie-database.p.rapidapi.com/title/get-details?tconst="+n;fetch(o,e).then(d=>d.json()).then(d=>{let r=d.title,h=d.year,p=x`<div class="movie">
                        <h2>${r}</h2>
                        <a>${h}</a>
                        </div>`;N(p,document.getElementById("movieResult"))})})}