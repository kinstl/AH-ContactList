(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const u of f.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function a(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(l){if(l.ep)return;l.ep=!0;const f=a(l);fetch(l.href,f)}})();window.FontAwesomeKitConfig={id:121549711,version:"6.7.1",token:"1eaf04ef97",method:"css",baseUrl:"https://ka-f.fontawesome.com",license:"free",asyncLoading:{enabled:!1},autoA11y:{enabled:!0},baseUrlKit:"https://kit.fontawesome.com",detectConflictsUntil:null,iconUploads:{},minify:{enabled:!0},v4FontFaceShim:{enabled:!0},v4shim:{enabled:!0},v5FontFaceShim:{enabled:!0}};(function(r){typeof define=="function"&&define.amd?define("kit-loader",r):r()})(function(){function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),o.push.apply(o,c)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?r(Object(o),!0).forEach(function(c){i(e,c,o[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(o,c))})}return e}function a(e){return(a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function i(e,t,o){return(t=function(c){var s=function(d,h){if(typeof d!="object"||d===null)return d;var v=d[Symbol.toPrimitive];if(v!==void 0){var y=v.call(d,h||"default");if(typeof y!="object")return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return(h==="string"?String:Number)(d)}(c,"string");return typeof s=="symbol"?s:String(s)}(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){return function(o){if(Array.isArray(o))return o}(e)||function(o,c){var s=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(s!=null){var d,h,v,y,g=[],S=!0,D=!1;try{if(v=(s=s.call(o)).next,c!==0)for(;!(S=(d=v.call(s)).done)&&(g.push(d.value),g.length!==c);S=!0);}catch(R){D=!0,h=R}finally{try{if(!S&&s.return!=null&&(y=s.return(),Object(y)!==y))return}finally{if(D)throw h}}return g}}(e,t)||f(e,t)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(e,t){if(e){if(typeof e=="string")return u(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set"?Array.from(e):o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?u(e,t):void 0}}function u(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,c=new Array(t);o<t;o++)c[o]=e[o];return c}var p,m,b,L,E,A=(i(p={},"classic","Classic"),i(p,"duotone","Duotone"),i(p,"sharp","Sharp"),i(p,"sharp-duotone","Sharp Duotone"),["fak","fa-kit","fakd","fa-kit-duotone"]),x=(i(m={},"kit","Kit"),i(m,"kit-duotone","Kit Duotone"),"duotone-group"),C="swap-opacity",$="primary",P="secondary",q=(i(b={},"classic","Classic"),i(b,"duotone","Duotone"),i(b,"sharp","Sharp"),i(b,"sharp-duotone","Sharp Duotone"),i(L={},"kit","Kit"),i(L,"kit-duotone","Kit Duotone"),["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt"].concat(["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"])),G=[1,2,3,4,5,6,7,8,9,10],Le=G.concat([11,12,13,14,15,16,17,18,19,20]);[].concat((E=Object.keys({classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]}),function(e){if(Array.isArray(e))return u(e)}(E)||function(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}(E)||f(E)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()),["solid","regular","light","thin","duotone","brands"],["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",x,C,$,P]).concat(G.map(function(e){return"".concat(e,"x")})).concat(Le.map(function(e){return"w-".concat(e)}));function F(e,t){var o=t&&t.addOn||"",c=t&&t.baseFilename||e.license+o,s=t&&t.minify?".min":"",d=t&&t.fileSuffix||e.method,h=t&&t.subdir||e.method;return e.baseUrl+"/releases/"+(e.version==="latest"?"latest":"v".concat(e.version))+"/"+h+"/"+c+s+"."+d}function Z(e,t){var o=t||["fa"],c="."+Array.prototype.join.call(o,",."),s=e.querySelectorAll(c);Array.prototype.forEach.call(s,function(d){var h=d.getAttribute("title");d.setAttribute("aria-hidden","true");var v=!d.nextElementSibling||!d.nextElementSibling.classList.contains("sr-only");if(h&&v){var y=e.createElement("span");y.innerHTML=h,y.classList.add("sr-only"),d.parentNode.insertBefore(y,d.nextSibling)}})}var K,Ee=function(){},W=typeof global<"u"&&global.process!==void 0&&typeof global.process.emit=="function",Ae=typeof setImmediate>"u"?setTimeout:setImmediate,O=[];function _e(){for(var e=0;e<O.length;e++)O[e][0](O[e][1]);O=[],K=!1}function T(e,t){O.push([e,t]),K||(K=!0,Ae(_e,0))}function J(e){var t=e.owner,o=t._state,c=t._data,s=e[o],d=e.then;if(typeof s=="function"){o="fulfilled";try{c=s(c)}catch(h){I(d,h)}}Q(d,c)||(o==="fulfilled"&&X(d,c),o==="rejected"&&I(d,c))}function Q(e,t){var o;try{if(e===t)throw new TypeError("A promises callback cannot return that same promise.");if(t&&(typeof t=="function"||a(t)==="object")){var c=t.then;if(typeof c=="function")return c.call(t,function(s){o||(o=!0,t===s?ee(e,s):X(e,s))},function(s){o||(o=!0,I(e,s))}),!0}}catch(s){return o||I(e,s),!0}return!1}function X(e,t){e!==t&&Q(e,t)||ee(e,t)}function ee(e,t){e._state==="pending"&&(e._state="settled",e._data=t,T(Ce,e))}function I(e,t){e._state==="pending"&&(e._state="settled",e._data=t,T(je,e))}function te(e){e._then=e._then.forEach(J)}function Ce(e){e._state="fulfilled",te(e)}function je(e){e._state="rejected",te(e),!e._handled&&W&&global.process.emit("unhandledRejection",e._data,e)}function Ne(e){global.process.emit("rejectionHandled",e)}function w(e){if(typeof e!="function")throw new TypeError("Promise resolver "+e+" is not a function");if(!(this instanceof w))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,o){function c(s){I(o,s)}try{t(function(s){X(o,s)},c)}catch(s){c(s)}}(e,this)}w.prototype={constructor:w,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(e,t){var o={owner:this,then:new this.constructor(Ee),fulfilled:e,rejected:t};return!t&&!e||this._handled||(this._handled=!0,this._state==="rejected"&&W&&T(Ne,this)),this._state==="fulfilled"||this._state==="rejected"?T(J,o):this._then.push(o),o.then},catch:function(e){return this.then(null,e)}},w.all=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.all().");return new w(function(t,o){var c=[],s=0;function d(y){return s++,function(g){c[y]=g,--s||t(c)}}for(var h,v=0;v<e.length;v++)(h=e[v])&&typeof h.then=="function"?h.then(d(v),o):c[v]=h;s||t(c)})},w.race=function(e){if(!Array.isArray(e))throw new TypeError("You must pass an array to Promise.race().");return new w(function(t,o){for(var c,s=0;s<e.length;s++)(c=e[s])&&typeof c.then=="function"?c.then(t,o):t(c)})},w.resolve=function(e){return e&&a(e)==="object"&&e.constructor===w?e:new w(function(t){t(e)})},w.reject=function(e){return new w(function(t,o){o(e)})};var j=typeof Promise=="function"?Promise:w;function B(e,t){var o=t.fetch,c=t.XMLHttpRequest,s=t.token,d=e;return s&&!function(h){return h.indexOf("kit-upload.css")>-1}(e)&&("URLSearchParams"in window?(d=new URL(e)).searchParams.set("token",s):d=d+"?token="+encodeURIComponent(s)),d=d.toString(),new j(function(h,v){if(typeof o=="function")o(d,{mode:"cors",cache:"default"}).then(function(g){if(g.ok)return g.text();throw new Error("")}).then(function(g){h(g)}).catch(v);else if(typeof c=="function"){var y=new c;y.addEventListener("loadend",function(){this.responseText?h(this.responseText):v(new Error(""))}),["abort","error","timeout"].map(function(g){y.addEventListener(g,function(){v(new Error(""))})}),y.open("GET",d),y.send()}else v(new Error(""))})}function Oe(e,t,o){var c=e;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(s,d){return"".concat(d).concat(t)}],[/(url\("?)\.\.\/webfonts/g,function(s,d){return"".concat(d).concat(t,"/releases/v").concat(o,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(s,d){return"".concat(d).concat(t)}]].forEach(function(s){var d=l(s,2),h=d[0],v=d[1];c=c.replace(h,v)}),c}function Ie(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(){},c=t.document||c,s=Z.bind(Z,c,[].concat(q,A.map(function(S){return"fa-".concat(S)})));e.autoA11y.enabled&&o(s);var d=e.subsetPath&&e.baseUrl+"/"+e.subsetPath,h=[{id:"fa-main",addOn:void 0,url:d}];if(e.v4shim&&e.v4shim.enabled&&h.push({id:"fa-v4-shims",addOn:"-v4-shims"}),e.v5FontFaceShim&&e.v5FontFaceShim.enabled&&h.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),e.v4FontFaceShim&&e.v4FontFaceShim.enabled&&h.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),!d&&e.customIconsCssPath){var v=e.customIconsCssPath.indexOf("kit-upload.css")>-1?e.baseUrlKit:e.baseUrl,y=v+"/"+e.customIconsCssPath;h.push({id:"fa-kit-upload",url:y})}var g=h.map(function(S){return new j(function(D,R){var qe=S.url||F(e,{addOn:S.addOn,minify:e.minify.enabled}),ae={id:S.id},Fe=e.subset?ae:n(n(n({},t),ae),{},{baseUrl:e.baseUrl,version:e.version,id:S.id,contentFilter:function(z,ce){return Oe(z,ce.baseUrl,ce.version)}});B(qe,t).then(function(z){D(ke(z,Fe))}).catch(R)})});return j.all(g)}function ke(e,t){var o=t.contentFilter||function(d,h){return d},c=document.createElement("style"),s=document.createTextNode(o(e,t));return c.appendChild(s),c.media="all",t.id&&c.setAttribute("id",t.id),t&&t.detectingConflicts&&t.detectionIgnoreAttr&&c.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),c}function xe(e,t){t.autoA11y=e.autoA11y.enabled,e.license==="pro"&&(t.autoFetchSvg=!0,t.fetchSvgFrom=e.baseUrl+"/releases/"+(e.version==="latest"?"latest":"v".concat(e.version))+"/svgs",t.fetchUploadedSvgFrom=e.uploadsUrl);var o=[];return e.v4shim.enabled&&o.push(new j(function(c,s){B(F(e,{addOn:"-v4-shims",minify:e.minify.enabled}),t).then(function(d){c(ne(d,n(n({},t),{},{id:"fa-v4-shims"})))}).catch(s)})),o.push(new j(function(c,s){B(e.subsetPath&&e.baseUrl+"/"+e.subsetPath||F(e,{minify:e.minify.enabled}),t).then(function(d){var h=ne(d,n(n({},t),{},{id:"fa-main"}));c(function(v,y){var g=y&&y.autoFetchSvg!==void 0?y.autoFetchSvg:void 0,S=y&&y.autoA11y!==void 0?y.autoA11y:void 0;return S!==void 0&&v.setAttribute("data-auto-a11y",S?"true":"false"),g&&(v.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),v.setAttribute("data-fetch-svg-from",y.fetchSvgFrom),v.setAttribute("data-fetch-uploaded-svg-from",y.fetchUploadedSvgFrom)),v}(h,t))}).catch(s)})),j.all(o)}function ne(e,t){var o=document.createElement("SCRIPT"),c=document.createTextNode(e);return o.appendChild(c),o.referrerPolicy="strict-origin",t.id&&o.setAttribute("id",t.id),t&&t.detectingConflicts&&t.detectionIgnoreAttr&&o.setAttributeNode(document.createAttribute(t.detectionIgnoreAttr)),o}function oe(e){var t,o=[],c=document,s=c.documentElement.doScroll,d=(s?/^loaded|^c/:/^loaded|^i|^c/).test(c.readyState);d||c.addEventListener("DOMContentLoaded",t=function(){for(c.removeEventListener("DOMContentLoaded",t),d=1;t=o.shift();)t()}),d?setTimeout(e,0):o.push(e)}function Pe(e){typeof MutationObserver<"u"&&new MutationObserver(e).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var k=window.FontAwesomeKitConfig,M={detectingConflicts:k.detectConflictsUntil&&new Date<=new Date(k.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:k.token,XMLHttpRequest:window.XMLHttpRequest,document},N=document.currentScript,re=N?N.parentElement:document.head;(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return e.method==="js"?xe(e,t):e.method==="css"?Ie(e,t,function(o){oe(o),Pe(o)}):void 0})(k,M).then(function(e){e.map(function(t){try{re.insertBefore(t,N?N.nextSibling:null)}catch{re.appendChild(t)}}),M.detectingConflicts&&N&&oe(function(){N.setAttributeNode(document.createAttribute(M.detectionIgnoreAttr));var t=function(o,c){var s=document.createElement("script");return c&&c.detectionIgnoreAttr&&s.setAttributeNode(document.createAttribute(c.detectionIgnoreAttr)),s.src=F(o,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:o.minify.enabled}),s}(k,M);document.body.appendChild(t)})}).catch(function(e){console.error("".concat("Font Awesome Kit:"," ").concat(e))})}}catch(e){console.error("".concat("Font Awesome Kit:"," ").concat(e))}});function fe(r){r.addEventListener("input",n=>{const a=n.target,i=a.selectionStart;let l=a.value.replace(/\D/g,"");l.startsWith("7")||(l="7"+l);let f="+7";l.length>1&&(f+=` (${l.substring(1,4)}`),l.length>=5&&(f+=`) ${l.substring(4,7)}`),l.length>=8&&(f+=`-${l.substring(7,9)}`),l.length>=10&&(f+=`-${l.substring(9,11)}`);const u=a.value.length;a.value=f;const m=a.value.length-u;a.selectionStart=a.selectionEnd=i+m}),r.addEventListener("blur",n=>{n.target.value==="+7"&&(n.target.value="")})}function me(r){localStorage.setItem("contacts",JSON.stringify(r))}function _(){return JSON.parse(localStorage.getItem("contacts"))||{}}function Te(r){const n=_();for(const[a,i]of Object.entries(n))n[a]=i.filter(l=>l.id!==r),n[a].length===0&&delete n[a];me(n)}function Me(r,n,a,i,l=!1,f=""){const u={status:!0,message:""};if(!n||!a||!i)return u.status=!1,u.message="All fields are required!",u;const p=/\d/;if(p.test(n))return u.status=!1,u.message="Name must not contain numbers!",u;if(p.test(a))return u.status=!1,u.message="Vacancy must not contain numbers!",u;if(!r)return u.status=!1,u.message="No card for this letter!",u;if(!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(i))return u.status=!1,u.message="Invalid phone format! Use +7 (XXX) XXX-XX-XX",u;if(!l||i!==f){const b=_();for(const L of Object.values(b))if(L.some(E=>E.phone===i))return u.status=!1,u.message="A contact with this phone number already exists!",u}return u}function he(r,n,a,i){const{name:l,vacancy:f,phone:u}=n,p=Me(r,l,f,u,a,i);return p.status?!0:(alert(p.message),!1)}const pe=document.querySelector("body");function ve(r,n){const a=document.querySelector(r),i=a.querySelector(".modal__close"),l=a.querySelector(".modal__content");a.classList.add("opened"),pe.classList.add("no-scroll");const f=()=>{m()},u=b=>{l.contains(b.target)||m()},p=b=>{b.key==="Escape"&&m()},m=()=>{i.removeEventListener("click",f),a.removeEventListener("click",u),document.removeEventListener("keydown",p),n()};i.addEventListener("click",f),a.addEventListener("click",b=>u(b)),document.addEventListener("keydown",p)}function ye(r=null){r?document.querySelector(r).classList.remove("opened"):document.querySelectorAll(".modal.opened").forEach(a=>a.classList.remove("opened")),pe.classList.remove("no-scroll")}function De(r,n,a){const{name:i,vacancy:l,phone:f,id:u}=r,p=document.querySelector(".modal__overlay--edit"),m=document.querySelector(".modal--edit #js-edit-save"),b=document.querySelector(".modal--edit #js-edit-name"),L=document.querySelector(".modal--edit #js-edit-vacancy"),E=document.querySelector(".modal--edit #js-edit-phone");fe(E),b.value=i,L.value=l,E.value=f;const A=()=>{const C={id:u,name:b.value,vacancy:L.value,phone:E.value},$=i.charAt(0).toLowerCase(),P=C.name.charAt(0).toLowerCase(),q=document.getElementById(P);he(q,C,!0,f)&&($===P?Ke(n,C,a):(Se(n,a),we(q,C)),x())};m.addEventListener("click",A);const x=()=>{p.classList.remove("opened"),ye(".modal--edit"),m.removeEventListener("click",A)};p.classList.add("opened"),ve(".modal--edit",x)}function be(r){const n=document.createElement("div");return n.classList.add("card__info"),r.append(n),n}function Y(r,n,a=!1){const{name:i,vacancy:l,phone:f,id:u}=n,p=document.createElement("div");p.classList.add("contact"),p.dataset.id=u,p.innerHTML=`
        <p class="contact__text">
            Name: ${i}<br/>
            Vacancy: ${l}<br/>
            Phone: ${f}
        </p>
        <i class="fa-solid fa-pen js-contact-edit"></i>
        <i class="fa-solid fa-xmark js-contact-delete"></i>
    `,p.querySelector(".js-contact-delete").addEventListener("click",m=>{m.stopPropagation(),Se(p,a)}),p.querySelector(".js-contact-edit").addEventListener("click",m=>{m.stopPropagation(),Xe(p,a)}),r.append(p)}function se(r){const n=r.closest(".contacts__card"),a=n.querySelector(".card__num"),i=parseInt(a.innerText,10)||0;i<=1?(a.innerText="",n.classList.remove("filled","show")):a.innerText=i-1,r.remove()}function ie(r,n){const{name:a,vacancy:i,phone:l}=r,f=n.querySelector(".contact__text");f.innerHTML=`
        <p class="contact__text">
            Name: ${a}<br/>
            Vacancy: ${i}<br/>
            Phone: ${l}
        </p>
        `}function Ue(r){const n=r.querySelector(".card__num"),a=parseInt(n.innerText,10)||0;n.innerText=a+1}function ge(r){const{name:n,vacancy:a,phone:i,id:l}=r,f=n.charAt(0).toLowerCase(),u=_();for(const[p,m]of Object.entries(u)){const b=m.findIndex(L=>L.id===l);if(b!==-1){m.splice(b,1),m.length===0&&delete u[p];break}}u[f]||(u[f]=[]),u[f].push({id:l,name:n,vacancy:a,phone:i}),me(u)}function we(r,n){const a=r.querySelector(".card__info")||be(r);r.classList.add("filled"),Ue(r),n.id=Be(n.id),Y(a,n),ge(n)}function He(r){const n=_();for(const a of Object.values(n)){const i=a.find(l=>l.id===r);if(i)return i}return null}function $e(){const r=_();for(const[n,a]of Object.entries(r)){const i=document.getElementById(n);if(i){i.classList.add("filled");const l=i.querySelector(".card__info")||be(i);a.forEach(u=>{Y(l,u)});const f=i.querySelector(".card__num");a.length?f.innerText=a.length:f.innerText=""}}}function Ke(r,n,a){a&&document.querySelectorAll(".contacts .contact").forEach(l=>{l.dataset.id===n.id&&ie(n,l)}),ie(n,r),ge(n)}function Xe(r,n){const a=He(r.dataset.id);De(a,r,n)}function Se(r,n=!1){const a=r.dataset.id;if(n){const i=document.querySelector(".modal--search__contacts");document.querySelectorAll(".contacts .contact").forEach(f=>{f.dataset.id===a&&se(f)}),r.remove(),i&&i.childElementCount===0&&i.classList.remove("filled")}else se(r);Te(a)}function Be(r){return r||`contact_${Date.now()}_${Math.random().toString(36).slice(2,11)}`}function Re(...r){r.forEach(n=>n.value="")}function ze(r){r.forEach((n,a)=>{n.style.zIndex=r.length-a})}const Ve=r=>r.replace(/\D/g,""),U=r=>r.toLowerCase().replace(/\s+/g,""),le=document.querySelector(".modal__overlay--search");function Ye(){const r=document.querySelector(".modal--search #js-search-all"),n=document.querySelector(".modal--search .modal--search__contacts"),a=document.querySelector(".modal--search #js-search-input"),i=m=>!!n.querySelector(`.contact[data-id="${m.id}"]`),l=m=>{m.forEach(b=>{i(b)||Y(n,b,!0)}),n.classList.add("filled")},f=()=>{const m=U(a.value),b=_();if(!m){n.innerHTML="",n.classList.remove("filled");return}const L=Object.values(b).flatMap(E=>E.filter(A=>U(A.name).includes(m)||U(A.vacancy).includes(m)||U(A.phone).includes(m)||Ve(A.phone).includes(m)));if(n.innerHTML="",L.length===0){n.innerHTML="<p>No matching contacts found.</p>";return}l(L)},u=()=>{const m=_();if(!m||Object.keys(m).length===0){n.classList.add("filled"),n.innerHTML="<p>No contacts found.</p>";return}const b=Object.values(m).flat();l(b)},p=()=>{le.classList.remove("opened"),ye(".modal--search"),r.removeEventListener("click",u),a.removeEventListener("input",f),a.value="",n.classList.remove("filled"),n.innerHTML=""};r.addEventListener("click",u),a.addEventListener("input",f),le.classList.add("opened"),ve(".modal--search",p)}const Ge=document.getElementById("js-btn-add"),Ze=document.getElementById("js-btn-clear"),We=document.getElementById("js-btn-search"),de=document.getElementById("js-input-name"),ue=document.getElementById("js-input-vacancy"),V=document.getElementById("js-input-phone"),H=document.querySelectorAll(".contacts__card");$e();fe(V);ze(H);Ge.addEventListener("click",()=>{const r={name:de.value,vacancy:ue.value,phone:V.value},n=r.name.charAt(0).toLowerCase(),a=Array.from(H).find(i=>i.id===n);he(a,r)&&(we(a,r),Re(de,ue,V))});Ze.addEventListener("click",()=>{H.forEach(r=>{const n=r.querySelector(".card__info"),a=r.querySelector(".card__num");n&&a&&(n.remove(),a.innerText="",r.classList.remove("filled"))}),localStorage.removeItem("contacts")});We.addEventListener("click",()=>{Ye()});H.forEach(r=>{r.querySelector(".card__container").addEventListener("click",()=>{r.classList.toggle("show")})});