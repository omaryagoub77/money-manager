import{n as e,v as t,y as n}from"./index-6XTB6nXq.js";var r=n(t());
/*!
* Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2025 Fonticons, Inc.
*/
function i(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return e}function o(e){if(Array.isArray(e))return i(e)}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,`prototype`,{writable:!1}),e}function u(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=te(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function d(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function p(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function m(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?g(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e,t){return a(e)||p(e,t)||te(e,t)||m()}function y(e){return o(e)||f(e)||te(e)||h()}function b(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function x(e){var t=b(e,`string`);return typeof t==`symbol`?t:t+``}function ee(e){"@babel/helpers - typeof";return ee=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ee(e)}function te(e,t){if(e){if(typeof e==`string`)return i(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}var ne=function(){},re={},ie={},ae=null,oe={mark:ne,measure:ne};try{typeof window<`u`&&(re=window),typeof document<`u`&&(ie=document),typeof MutationObserver<`u`&&(ae=MutationObserver),typeof performance<`u`&&(oe=performance)}catch{}var se=(re.navigator||{}).userAgent,ce=se===void 0?``:se,S=re,C=ie,le=ae,ue=oe;S.document;var w=!!C.documentElement&&!!C.head&&typeof C.addEventListener==`function`&&typeof C.createElement==`function`,de=~ce.indexOf(`MSIE`)||~ce.indexOf(`Trident/`),fe,pe=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,me=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,he={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},ge={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},_e=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],T=`classic`,E=`duotone`,ve=`sharp`,ye=`sharp-duotone`,be=`chisel`,xe=`etch`,Se=`jelly`,Ce=`jelly-duo`,we=`jelly-fill`,Te=`notdog`,Ee=`notdog-duo`,De=`slab`,Oe=`slab-press`,ke=`thumbprint`,Ae=`utility`,je=`utility-duo`,Me=`utility-fill`,Ne=`whiteboard`,Pe=`Classic`,Fe=`Duotone`,Ie=`Sharp`,Le=`Sharp Duotone`,Re=`Chisel`,ze=`Etch`,Be=`Jelly`,Ve=`Jelly Duo`,He=`Jelly Fill`,Ue=`Notdog`,We=`Notdog Duo`,Ge=`Slab`,Ke=`Slab Press`,qe=`Thumbprint`,Je=`Utility`,Ye=`Utility Duo`,Xe=`Utility Fill`,Ze=`Whiteboard`,Qe=[T,E,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne];fe={},d(d(d(d(d(d(d(d(d(d(fe,T,Pe),E,Fe),ve,Ie),ye,Le),be,Re),xe,ze),Se,Be),Ce,Ve),we,He),Te,Ue),d(d(d(d(d(d(d(d(fe,Ee,We),De,Ge),Oe,Ke),ke,qe),Ae,Je),je,Ye),Me,Xe),Ne,Ze);var $e={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},et={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},tt=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),nt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-press":{regular:`faslpr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},whiteboard:{semibold:`fawsb`}},rt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],it={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},at=[`kit`];d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var ot={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},st={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ct={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},lt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},ut,dt={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ft=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];ut={},d(d(d(d(d(d(d(d(d(d(ut,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),`notdog`,`Notdog`),d(d(d(d(d(d(d(d(ut,`notdog-duo`,`Notdog Duo`),`slab`,`Slab`),`slab-press`,`Slab Press`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`whiteboard`,`Whiteboard`),d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var pt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},mt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},ht={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},gt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fawsb.fatl.fans.fands.faes.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(ft,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),_t=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],vt=[1,2,3,4,5,6,7,8,9,10],yt=vt.concat([11,12,13,14,15,16,17,18,19,20]),bt=[].concat(y(Object.keys(mt)),_t,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`inverse`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,`width-auto`,`width-fixed`,dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY],vt.map(function(e){return`${e}x`}),yt.map(function(e){return`w-${e}`})),xt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},D=`___FONT_AWESOME___`,St=16,Ct=`fa`,wt=`svg-inline--fa`,O=`data-fa-i2svg`,Tt=`data-fa-pseudo-element`,Et=`data-fa-pseudo-element-pending`,Dt=`data-prefix`,Ot=`data-icon`,kt=`fontawesome-i2svg`,At=`async`,jt=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Mt=[`::before`,`::after`,`:before`,`:after`],Nt=function(){try{return!0}catch{return!1}}();function k(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[T]}})}var Pt=_({},he);Pt[T]=_(_(_(_({},{"fa-duotone":`duotone`}),he[T]),it.kit),it[`kit-duotone`]);var Ft=k(Pt),It=_({},nt);It[T]=_(_(_(_({},{duotone:`fad`}),It[T]),lt.kit),lt[`kit-duotone`]);var Lt=k(It),Rt=_({},ht);Rt[T]=_(_({},Rt[T]),ct.kit);var zt=k(Rt),Bt=_({},pt);Bt[T]=_(_({},Bt[T]),ot.kit),k(Bt);var Vt=pe,Ht=`fa-layers-text`,Ut=me,Wt=_({},$e);k(Wt);var Gt=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Kt=ge,qt=[].concat(y(at),y(bt)),A=S.FontAwesomeConfig||{};function Jt(e){var t=C.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Yt(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}C&&typeof C.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=v(e,2),n=t[0],r=t[1],i=Yt(Jt(n));i!=null&&(A[r]=i)});var Xt={styleDefault:`solid`,familyDefault:T,cssPrefix:Ct,replacementClass:wt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};A.familyPrefix&&(A.cssPrefix=A.familyPrefix);var j=_(_({},Xt),A);j.autoReplaceSvg||(j.observeMutations=!1);var M={};Object.keys(Xt).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(t){j[e]=t,N.forEach(function(e){return e(M)})},get:function(){return j[e]}})}),Object.defineProperty(M,`familyPrefix`,{enumerable:!0,set:function(e){j.cssPrefix=e,N.forEach(function(e){return e(M)})},get:function(){return j.cssPrefix}}),S.FontAwesomeConfig=M;var N=[];function Zt(e){return N.push(e),function(){N.splice(N.indexOf(e),1)}}var P=St,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qt(e){if(!(!e||!w)){var t=C.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=C.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return C.head.insertBefore(t,r),e}}var $t=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function en(){for(var e=12,t=``;e-- >0;)t+=$t[Math.random()*62|0];return t}function I(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function tn(e){return e.classList?I(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function nn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function rn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${nn(e[n])}" `},``).trim()}function an(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function on(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function sn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:`translate(${n/2} 256)`},a=`translate(${t.x*32}, ${t.y*32}) `,o=`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `,s=`rotate(${t.rotate} 0 0)`,c={transform:`${a} ${o} ${s}`},l={transform:`translate(${r/2*-1} -256)`};return{outer:i,inner:c,path:l}}function cn(e){var t=e.transform,n=e.width,r=n===void 0?St:n,i=e.height,a=i===void 0?St:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&de?c+=`translate(${t.x/P-r/2}em, ${t.y/P-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/P}em), calc(-50% + ${t.y/P}em)) `:c+=`translate(${t.x/P}em, ${t.y/P}em) `,c+=`scale(${t.size/P*(t.flipX?-1:1)}, ${t.size/P*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var ln=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function un(){var e=Ct,t=wt,n=M.cssPrefix,r=M.replacementClass,i=ln;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var dn=!1;function fn(){M.autoAddCss&&!dn&&(Qt(un()),dn=!0)}var pn={mixout:function(){return{dom:{css:un,insertCss:fn}}},hooks:function(){return{beforeDOMElementCreation:function(){fn()},beforeI2svg:function(){fn()}}}},L=S||{};L[D]||(L[D]={}),L[D].styles||(L[D].styles={}),L[D].hooks||(L[D].hooks={}),L[D].shims||(L[D].shims=[]);var R=L[D],mn=[],hn=function(){C.removeEventListener(`DOMContentLoaded`,hn),gn=1,mn.map(function(e){return e()})},gn=!1;w&&(gn=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),gn||C.addEventListener(`DOMContentLoaded`,hn));function _n(e){w&&(gn?setTimeout(e,0):mn.push(e))}function z(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?nn(e):`<${t} ${rn(r)}>${a.map(z).join(``)}</${t}>`}function vn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var yn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},bn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:yn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function xn(e){return y(e).length===1?e.codePointAt(0).toString(16):null}function Sn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Cn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Sn(t);typeof R.hooks.addPack==`function`&&!r?R.hooks.addPack(e,Sn(t)):R.styles[e]=_(_({},R.styles[e]||{}),i),e===`fas`&&Cn(`fa`,t)}var B=R.styles,wn=R.shims,Tn=Object.keys(zt),En=Tn.reduce(function(e,t){return e[t]=Object.keys(zt[t]),e},{}),Dn=null,On={},kn={},An={},jn={},Mn={};function Nn(e){return~qt.indexOf(e)}function Pn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Nn(i)?i:null}var Fn=function(){var e=function(e){return bn(B,function(t,n,r){return t[r]=bn(n,e,{}),t},{})};On=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),kn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Mn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in B||M.autoFetchSvg,n=bn(wn,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});An=n.names,jn=n.unicodes,Dn=Hn(M.styleDefault,{family:M.familyDefault})};Zt(function(e){Dn=Hn(e.styleDefault,{family:M.familyDefault})}),Fn();function In(e,t){return(On[e]||{})[t]}function Ln(e,t){return(kn[e]||{})[t]}function V(e,t){return(Mn[e]||{})[t]}function Rn(e){return An[e]||{prefix:null,iconName:null}}function zn(e){var t=jn[e],n=In(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function H(){return Dn}var Bn=function(){return{prefix:null,iconName:null,rest:[]}};function Vn(e){var t=T,n=Tn.reduce(function(e,t){return e[t]=`${M.cssPrefix}-${t}`,e},{});return Qe.forEach(function(r){(e.includes(n[r])||e.some(function(e){return En[r].includes(e)}))&&(t=r)}),t}function Hn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?T:t,r=Ft[n][e];if(n===E&&!e)return`fad`;var i=Lt[n][e]||Lt[n][r],a=e in R.styles?e:null;return i||a||null}function Un(e){var t=[],n=null;return e.forEach(function(e){var r=Pn(M.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function Wn(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var Gn=gt.concat(rt);function Kn(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=Wn(e.filter(function(e){return Gn.includes(e)})),a=Wn(e.filter(function(e){return!Gn.includes(e)})),o=i.filter(function(e){return r=e,!_e.includes(e)}),s=v(o,1)[0],c=s===void 0?null:s,l=Vn(i),u=_(_({},Un(a)),{},{prefix:Hn(c,{family:l})});return _(_(_({},u),Xn({values:e,family:l,styles:B,config:M,canonical:u,givenPrefix:r})),qn(n,r,u))}function qn(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Rn(i):{},o=V(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!B.far&&B.fas&&!M.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var Jn=Qe.filter(function(e){return e!==T||e!==E}),Yn=Object.keys(ht).filter(function(e){return e!==T}).map(function(e){return Object.keys(ht[e])}).flat();function Xn(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===E,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&Jn.includes(n)&&(Object.keys(s).find(function(e){return Yn.includes(e)})||l.autoFetchSvg)&&(r.prefix=tt.get(n).defaultShortPrefixId,r.iconName=V(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=H()||`fas`),r}var Zn=function(){function e(){s(this,e),this.definitions={}}return l(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=_(_({},e.definitions[n]||{}),t[n]),Cn(n,t[n]);var r=zt[T][n];r&&Cn(r,t[n]),Fn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),Qn=[],U={},W={},$n=Object.keys(W);function er(e,t){var n=t.mixoutsTo;return Qn=e,U={},Object.keys(W).forEach(function(e){$n.indexOf(e)===-1&&delete W[e]}),Qn.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),ee(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){U[e]||(U[e]=[]),U[e].push(r[e])})}e.provides&&e.provides(W)}),n}function tr(e,t){var n=[...arguments].slice(2);return(U[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function G(e){var t=[...arguments].slice(1);(U[e]||[]).forEach(function(e){e.apply(null,t)})}function K(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return W[e]?W[e].apply(null,t):void 0}function nr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||H();if(t)return t=V(n,t)||t,vn(rr.definitions,n,t)||vn(R.styles,n,t)}var rr=new Zn,q={noAuto:function(){M.autoReplaceSvg=!1,M.observeMutations=!1,G(`noAuto`)},config:M,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return w?(G(`beforeI2svg`,e),K(`pseudoElements2svg`,e),K(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,_n(function(){ir({autoReplaceSvgRoot:t}),G(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(ee(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:V(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Hn(e[0]);return{prefix:n,iconName:V(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${M.cssPrefix}-`)>-1||e.match(Vt))){var r=Kn(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:V(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=H();return{prefix:i,iconName:V(i,e)||e}}}},library:rr,findIconDefinition:nr,toHtml:z},ir=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?C:e;(Object.keys(R.styles).length>0||M.autoFetchSvg)&&w&&M.autoReplaceSvg&&q.dom.i2svg({node:t})};function ar(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(function(e){return z(e)})}}),Object.defineProperty(e,`node`,{get:function(){if(w){var t=C.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function or(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(on(o)&&n.found&&!r.found){var s=n.width,c=n.height,l={x:s/c/2,y:.5};i.style=an(_(_({},a),{},{"transform-origin":`${l.x+o.x/16}em ${l.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function sr(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${M.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:_(_({},i),{},{id:o}),children:r}]}]}function cr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function lr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[M.replacementClass,a?`${M.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:_(_({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!cr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[O]=``);var v=_(_({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:_({},l.styles)}),y=r.found&&n.found?K(`generateAbstractMask`,v)||{children:[],attributes:{}}:K(`generateAbstractIcon`,v)||{children:[],attributes:{}},b=y.children,x=y.attributes;return v.children=b,v.attributes=x,s?sr(v):or(v)}function ur(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=_(_({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[O]=``);var l=_({},a.styles);on(i)&&(l.transform=cn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=an(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function dr(e){var t=e.content,n=e.extra,r=_(_({},n.attributes),{},{class:n.classes.join(` `)}),i=an(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var fr=R.styles;function pr(e){var t=e[0],n=e[1],r=e.slice(4),i=v(r,1)[0],a=null;return a=Array.isArray(i)?{tag:`g`,attributes:{class:`${M.cssPrefix}-${Kt.GROUP}`},children:[{tag:`path`,attributes:{class:`${M.cssPrefix}-${Kt.SECONDARY}`,fill:`currentColor`,d:i[0]}},{tag:`path`,attributes:{class:`${M.cssPrefix}-${Kt.PRIMARY}`,fill:`currentColor`,d:i[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:i}},{found:!0,width:t,height:n,icon:a}}var mr={found:!1,width:512,height:512};function hr(e,t){!Nt&&!M.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function gr(e,t){var n=t;return t===`fa`&&M.styleDefault!==null&&(t=H()),new Promise(function(r,i){if(n===`fa`){var a=Rn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&fr[t]&&fr[t][e]){var o=fr[t][e];return r(pr(o))}hr(e,t),r(_(_({},mr),{},{icon:M.showMissingIcons&&e&&K(`missingIconAbstract`)||{}}))})}var _r=function(){},vr=M.measurePerformance&&ue&&ue.mark&&ue.measure?ue:{mark:_r,measure:_r},J=`FA "7.1.0"`,yr=function(e){return vr.mark(`${J} ${e} begins`),function(){return br(e)}},br=function(e){vr.mark(`${J} ${e} ends`),vr.measure(`${J} ${e}`,`${J} ${e} begins`,`${J} ${e} ends`)},xr={begin:yr,end:br},Sr=function(){};function Cr(e){return typeof(e.getAttribute?e.getAttribute(O):null)==`string`}function wr(e){var t=e.getAttribute?e.getAttribute(Dt):null,n=e.getAttribute?e.getAttribute(Ot):null;return t&&n}function Tr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function Er(){return M.autoReplaceSvg===!0?jr.replace:jr[M.autoReplaceSvg]||jr.replace}function Dr(e){return C.createElementNS(`http://www.w3.org/2000/svg`,e)}function Or(e){return C.createElement(e)}function kr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Dr:Or:t;if(typeof e==`string`)return C.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(kr(e,{ceFn:n}))}),r}function Ar(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var jr={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(kr(e),t)}),t.getAttribute(O)===null&&M.keepOriginalSource){var n=C.createComment(Ar(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~tn(t).indexOf(M.replacementClass))return jr.replace(e);var r=RegExp(`${M.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===M.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return z(e)}).join(`
`);t.setAttribute(O,``),t.innerHTML=a}};function Mr(e){e()}function Nr(e,t){var n=typeof t==`function`?t:Sr;if(e.length===0)n();else{var r=Mr;M.mutateApproach===At&&(r=S.requestAnimationFrame||Mr),r(function(){var t=Er(),r=xr.begin(`mutate`);e.map(t),r(),n()})}}var Pr=!1;function Fr(){Pr=!0}function Ir(){Pr=!1}var Lr=null;function Rr(e){if(le&&M.observeMutations){var t=e.treeCallback,n=t===void 0?Sr:t,r=e.nodeCallback,i=r===void 0?Sr:r,a=e.pseudoElementsCallback,o=a===void 0?Sr:a,s=e.observeMutationsRoot,c=s===void 0?C:s;Lr=new le(function(e){if(!Pr){var t=H();I(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Cr(e.addedNodes[0])&&(M.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&M.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Cr(e.target)&&~Gt.indexOf(e.attributeName))if(e.attributeName===`class`&&wr(e.target)){var r=Kn(tn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Dt,a||t),s&&e.target.setAttribute(Ot,s)}else Tr(e.target)&&i(e.target)})}}),w&&Lr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zr(){Lr&&Lr.disconnect()}function Br(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function Vr(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=Kn(tn(e));return i.prefix||=H(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Ln(i.prefix,e.innerText)||In(i.prefix,xn(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function Hr(e){return I(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function Ur(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Wr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Vr(e),r=n.iconName,i=n.prefix,a=n.rest,o=Hr(e),s=tr(`parseNodeAttributes`,{},e),c=t.styleParser?Br(e):[];return _({iconName:r,prefix:i,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:c,attributes:o}},s)}var Gr=R.styles;function Kr(e){var t=M.autoReplaceSvg===`nest`?Wr(e,{styleParser:!1}):Wr(e);return~t.extra.classes.indexOf(Ht)?K(`generateLayersText`,e,t):K(`generateSvgReplacementMutation`,e,t)}function qr(){return[].concat(y(rt),y(gt))}function Jr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!w)return Promise.resolve();var n=C.documentElement.classList,r=function(e){return n.add(`${kt}-${e}`)},i=function(e){return n.remove(`${kt}-${e}`)},a=M.autoFetchSvg?qr():_e.concat(Object.keys(Gr));a.includes(`fa`)||a.push(`fa`);var o=[`.${Ht}:not([${O}])`].concat(a.map(function(e){return`.${e}:not([${O}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=I(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=xr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=Kr(t);n&&e.push(n)}catch(e){Nt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Nr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function Yr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kr(e).then(function(e){e&&Nr([e],t)})}function Xr(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:nr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:nr(i||{}),e(r,_(_({},n),{},{mask:i}))}}var Zr=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?F:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,v=e.iconName,y=e.icon;return ar(_({type:`icon`},e),function(){return G(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),lr({icons:{main:pr(y),mask:s?pr(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:_(_({},F),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},Qr={mixout:function(){return{icon:Xr(Zr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=Jr,e.nodeCallback=Yr,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?C:t,r=e.callback;return Jr(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([gr(n,r),o.iconName?gr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=v(o,2),u=l[0],d=l[1];t([e,lr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=an(a);o.length>0&&(n.style=o);var s;return on(i)&&(s=K(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},$r={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return ar({type:`layer`},function(){G(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${M.cssPrefix}-layers`].concat(y(r)).join(` `)},children:n}]})}}}},ei={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ar({type:`counter`,content:e},function(){return G(`beforeDOMElementCreation`,{content:e,params:t}),dr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${M.cssPrefix}-layers-counter`].concat(y(a))}})})}}}},ti={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?F:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return ar({type:`text`,content:e},function(){return G(`beforeDOMElementCreation`,{content:e,params:t}),ur({content:e,transform:_(_({},F),r),extra:{attributes:s,styles:l,classes:[`${M.cssPrefix}-layers-text`].concat(y(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(de){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,ur({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},ni=RegExp(`"`,`ug`),ri=[1105920,1112319],ii=_(_(_(_({},{FontAwesome:{normal:`fas`,400:`fas`}}),et),xt),st),ai=Object.keys(ii).reduce(function(e,t){return e[t.toLowerCase()]=ii[t],e},{}),oi=Object.keys(ai).reduce(function(e,t){var n=ai[t];return e[t]=n[900]||y(Object.entries(n))[0][1],e},{});function si(e){var t=e.replace(ni,``);return xn(y(t)[0]||``)}function ci(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(ni,``),r=n.codePointAt(0),i=r>=ri[0]&&r<=ri[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function li(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(ai[n]||{})[i]||oi[n]}function ui(e,t){var n=`${Et}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=I(e.children).filter(function(e){return e.getAttribute(Tt)===t})[0],o=S.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Ut),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=li(s,l),p=si(d),m=c[0].startsWith(`FontAwesome`),h=ci(o),g=In(f,p),v=g;if(m){var y=zn(p);y.iconName&&y.prefix&&(g=y.iconName,f=y.prefix)}if(g&&!h&&(!a||a.getAttribute(Dt)!==f||a.getAttribute(Ot)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var b=Ur(),x=b.extra;x.attributes[Tt]=t,gr(g,f).then(function(i){var a=lr(_(_({},b),{},{icons:{main:i,mask:Bn()},prefix:f,iconName:v,extra:x,watchable:!0})),o=C.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return z(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function di(e){return Promise.all([ui(e,`::before`),ui(e,`::after`)])}function fi(e){return e.parentNode!==document.head&&!~jt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tt)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var pi=function(e){return!!e&&Mt.some(function(t){return e.includes(t)})},mi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=u(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(pi(a)){var o=Mt.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(w){var n;if(t)n=e;else if(M.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=u(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=u(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,d=mi(l.selectorText),f=u(d),p;try{for(f.s();!(p=f.n()).done;){var m=p.value;r.add(m)}}catch(e){f.e(e)}finally{f.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){M.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var h=Array.from(r).join(`, `);try{n=e.querySelectorAll(h)}catch{}}return new Promise(function(e,t){var r=I(n).filter(fi).map(di),i=xr.begin(`searchPseudoElements`);Fr(),Promise.all(r).then(function(){i(),Ir(),e()}).catch(function(){i(),Ir(),t()})})}}var gi={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=hi,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?C:t;M.searchPseudoElements&&hi(n)}}},_i=!1,vi={mixout:function(){return{dom:{unwatch:function(){Fr(),_i=!0}}}},hooks:function(){return{bootstrap:function(){Rr(tr(`mutationObserverCallbacks`,{}))},noAuto:function(){zr()},watch:function(e){var t=e.observeMutationsRoot;_i?Ir():Rr(tr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},yi=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},bi={mixout:function(){return{parse:{transform:function(e){return yi(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=yi(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={transform:`translate(${r/2} 256)`},o=`translate(${n.x*32}, ${n.y*32}) `,s=`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `,c=`rotate(${n.rotate} 0 0)`,l={transform:`${o} ${s} ${c}`},u={transform:`translate(${i/2*-1} -256)`},d={outer:a,inner:l,path:u};return{tag:`g`,attributes:_({},d.outer),children:[{tag:`g`,attributes:_({},d.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:_(_({},t.icon.attributes),d.path)}]}]}}}},xi={x:0,y:0,width:`100%`,height:`100%`};function Si(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ci(e){return e.tag===`g`?e.children:[e]}er([pn,Qr,$r,ei,ti,gi,vi,bi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?Kn(n.split(` `).map(function(e){return e.trim()})):Bn();return r.prefix||=H(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=sn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:_(_({},xi),{},{fill:`white`})},p=c.children?{children:c.children.map(Si)}:{},m={tag:`g`,attributes:_({},d.inner),children:[Si(_({tag:c.tag,attributes:_(_({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:_({},d.outer),children:[m]},g=`mask-${a||en()}`,v=`clip-${a||en()}`,y={tag:`mask`,attributes:_(_({},xi),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:Ci(u)},y]};return t.push(b,{tag:`rect`,attributes:_({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${g})`},xi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;S.matchMedia&&(t=S.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:_(_({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=_(_({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:_(_({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:_(_({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:_(_({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:q}),q.noAuto;var wi=q.config;q.library,q.dom;var Ti=q.parse;q.findIconDefinition,q.toHtml;var Ei=q.icon;q.layer,q.text,q.counter;var Y=n(e());function Di(e){return e-=0,e===e}function Oi(e){return Di(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}function ki(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=new Map,Ai=1e3;function ji(e){if(X.has(e))return X.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Oi(n);t[e.startsWith(`webkit`)?ki(e):e]=r}}}n=a+1}if(X.size===Ai){let e=X.keys().next().value;e&&X.delete(e)}return X.set(e,t),t}function Mi(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>Mi(e,t)),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=ji(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Oi(e)]=t}let{style:o,"aria-label":s,...c}=n;return o&&(a.style=a.style?{...a.style,...o}:o),s&&(a[`aria-label`]=s,a[`aria-hidden`]=`false`),e(t.tag,{...c,...a},...r)}var Ni=Mi.bind(null,r.createElement),Pi=(e,t)=>{let n=(0,r.useId)();return e||(t?n:void 0)},Fi=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Ii=`searchPseudoElementsFullScan`in wi?`7.0.0`:`6.0.0`,Li=Number.parseInt(Ii)>=7,Ri=`fa`,Z={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`},zi={left:`fa-pull-left`,right:`fa-pull-right`},Bi={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},Vi={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},Q={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`},Hi={default:`fa-layers`};function Ui(e){let t=wi.cssPrefix||wi.familyPrefix||Ri;return t===Ri?e:e.replace(RegExp(`(?<=^|\\s)${Ri}-`,`g`),`${t}-`)}function Wi(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,className:b}=e,x=[];return b&&x.push(...b.split(` `)),t&&x.push(Z.beat),n&&x.push(Z.fade),r&&x.push(Z.beatFade),i&&x.push(Z.bounce),a&&x.push(Z.shake),o&&x.push(Z.spin),c&&x.push(Z.spinReverse),s&&x.push(Z.spinPulse),l&&x.push(Z.pulse),u&&x.push(Q.fixedWidth),d&&x.push(Q.inverse),f&&x.push(Q.border),p===!0&&x.push(Q.flip),(p===`horizontal`||p===`both`)&&x.push(Q.flipHorizontal),(p===`vertical`||p===`both`)&&x.push(Q.flipVertical),m!=null&&x.push(Vi[m]),h!=null&&h!==0&&x.push(Bi[h]),g!=null&&x.push(zi[g]),_&&x.push(Q.swapOpacity),Li?(v&&x.push(Q.rotateBy),y&&x.push(Q.widthAuto),(wi.cssPrefix||wi.familyPrefix||Ri)===Ri?x:x.map(Ui)):x}var Gi=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function Ki(e){if(e)return Gi(e)?e:Ti.icon(e)}function qi(e){return Object.keys(e)}var Ji=new Fi(`FontAwesomeIcon`),Yi={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Xi=new Set(Object.keys(Yi)),$=r.forwardRef((e,t)=>{let n={...Yi,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Pi(c,!!i),d=Pi(s,!!o),f=Ki(r);if(!f)return Ji.error(`Icon lookup is undefined`,r),null;let p=Wi(n),m=typeof l==`string`?Ti.transform(l):l,h=Ki(i),g=Ei(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return Ji.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of qi(n))Xi.has(e)||(v[e]=n[e]);return Ni(_[0],v)});$.displayName=`FontAwesomeIcon`,`${Hi.default}${Q.fixedWidth}`;var Zi={prefix:`fas`,iconName:`envelope`,icon:[512,512,[128386,9993,61443],`f0e0`,`M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z`]},Qi={prefix:`fas`,iconName:`wallet`,icon:[512,512,[],`f555`,`M64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L72 128c-13.3 0-24-10.7-24-24S58.7 80 72 80l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L64 32zM416 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z`]},$i={prefix:`fas`,iconName:`headset`,icon:[448,512,[],`f590`,`M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z`]},ea={prefix:`fas`,iconName:`user-shield`,icon:[576,512,[],`f505`,`M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l251.5 0C261 469.4 240 414.5 240 356.4l0-31.1c0-7.3 1-14.5 2.9-21.3l-48.6 0zm251 184.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z`]},ta={prefix:`fas`,iconName:`chart-line`,icon:[512,512,[`line-chart`],`f201`,`M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z`]},na={prefix:`fas`,iconName:`comments`,icon:[576,512,[128490,61670],`f086`,`M384 144c0 97.2-86 176-192 176-26.7 0-52.1-5-75.2-14L35.2 349.2c-9.3 4.9-20.7 3.2-28.2-4.2s-9.2-18.9-4.2-28.2l35.6-67.2C14.3 220.2 0 183.6 0 144 0 46.8 86-32 192-32S384 46.8 384 144zm0 368c-94.1 0-172.4-62.1-188.8-144 120-1.5 224.3-86.9 235.8-202.7 83.3 19.2 145 88.3 145 170.7 0 39.6-14.3 76.2-38.4 105.6l35.6 67.2c4.9 9.3 3.2 20.7-4.2 28.2s-18.9 9.2-28.2 4.2L459.2 498c-23.1 9-48.5 14-75.2 14z`]},ra={prefix:`fas`,iconName:`phone`,icon:[512,512,[128222,128379],`f095`,`M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z`]},ia={prefix:`fas`,iconName:`star`,icon:[576,512,[11088,61446],`f005`,`M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z`]},aa={prefix:`fas`,iconName:`location-dot`,icon:[384,512,[`map-marker-alt`],`f3c5`,`M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z`]},oa={prefix:`fas`,iconName:`hand-holding-dollar`,icon:[576,512,[`hand-holding-usd`],`f4c0`,`M288-16c-13.3 0-24 10.7-24 24l0 12-1.8 0c-36.6 0-66.2 29.7-66.2 66.2 0 33.4 24.9 61.6 58 65.7l61 7.6c5.1 .6 9 5 9 10.2 0 5.7-4.6 10.2-10.2 10.2L240 180c-15.5 0-28 12.5-28 28s12.5 28 28 28l24 0 0 12c0 13.3 10.7 24 24 24s24-10.7 24-24l0-12 1.8 0c36.6 0 66.2-29.7 66.2-66.2 0-33.4-24.9-61.6-58-65.7l-61-7.6c-5.1-.6-9-5-9-10.2 0-5.7 4.6-10.2 10.2-10.2L328 76c15.5 0 28-12.5 28-28s-12.5-28-28-28l-16 0 0-12c0-13.3-10.7-24-24-24zM109.3 341.5L66.7 384 32 384c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l320.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416 280 416c-13.3 0-24-10.7-24-24s10.7-24 24-24l72 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-152.2 0c-33.9 0-66.5 13.5-90.5 37.5z`]},sa={prefix:`fab`,iconName:`facebook-f`,icon:[320,512,[],`f39e`,`M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z`]},ca={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},la={prefix:`fab`,iconName:`linkedin-in`,icon:[448,512,[],`f0e1`,`M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z`]},ua={prefix:`fab`,iconName:`twitter`,icon:[512,512,[],`f099`,`M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z`]},da=()=>(0,Y.jsx)(`section`,{id:`home`,className:`hero`,children:(0,Y.jsxs)(`div`,{className:`heroContent`,children:[(0,Y.jsx)(`h1`,{children:`Money Box — Fast, Secure & Effortless`}),(0,Y.jsx)(`p`,{children:`Handle deposits, manage cashouts, and stay connected with your community — all in one intuitive dashboard.`}),(0,Y.jsx)(`button`,{className:`ctaButton`,onClick:()=>{let e=document.getElementById(`services`);if(e){let t=e.offsetTop;window.scrollTo({top:t,behavior:`smooth`})}},children:`Try Now`})]})}),fa=()=>{let e=(0,r.useRef)([]);return(0,r.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`revealed`)})},{threshold:.1});return e.current.forEach(e=>{e&&t.observe(e)}),()=>{e.current.forEach(e=>{e&&t.unobserve(e)})}},[]),(0,Y.jsx)(`section`,{id:`services`,className:`services`,children:(0,Y.jsxs)(`div`,{className:`container`,children:[(0,Y.jsxs)(`div`,{className:`sectionTitle`,children:[(0,Y.jsx)(`h2`,{children:`Our Services`}),(0,Y.jsx)(`p`,{children:`Discover powerful features that make Money Box perfect financial platform for you`})]}),(0,Y.jsx)(`div`,{className:`servicesGrid`,children:[{icon:Qi,title:`Secure Deposits`,description:`Submit and track your deposits with our secure, encrypted system. Get instant confirmations and detailed transaction history.`},{icon:oa,title:`Quick Cashouts`,description:`Request and receive cashouts quickly with our streamlined process. Track your requests in real-time and get notified on approval.`},{icon:na,title:`Community Chat`,description:`Stay connected with your community through our modern chat interface. Share updates, ask questions, and get support instantly.`},{icon:ta,title:`Analytics Dashboard`,description:`Visualize your financial data with our intuitive analytics dashboard. Track trends, monitor performance, and make informed decisions.`},{icon:ea,title:`Advanced Security`,description:`Your data is protected with industry-leading security measures. We use encryption, multi-factor authentication, and regular security audits.`},{icon:$i,title:`24/7 Support`,description:`Get help whenever you need it with our round-the-clock customer support. Our team is always ready to assist you with any questions.`}].map((t,n)=>(0,Y.jsxs)(`div`,{className:`serviceCard`,ref:t=>e.current[n]=t,children:[(0,Y.jsx)(`div`,{className:`serviceIcon`,children:(0,Y.jsx)($,{icon:t.icon})}),(0,Y.jsx)(`h3`,{children:t.title}),(0,Y.jsx)(`p`,{children:t.description})]},n))})]})})},pa=()=>{let e=(0,r.useRef)([]);return(0,r.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`revealed`)})},{threshold:.1});return e.current.forEach(e=>{e&&t.observe(e)}),()=>{e.current.forEach(e=>{e&&t.unobserve(e)})}},[]),(0,Y.jsx)(`section`,{id:`how-it-works`,className:`howItWorks`,children:(0,Y.jsxs)(`div`,{className:`container`,children:[(0,Y.jsxs)(`div`,{className:`sectionTitle`,children:[(0,Y.jsx)(`h2`,{children:`How It Works`}),(0,Y.jsx)(`p`,{children:`Get started with Money Box in just a few simple steps`})]}),(0,Y.jsx)(`div`,{className:`stepsContainer`,children:[{title:`Create Account`,description:`Sign up for a free account in minutes. Just provide your basic information and verify your email to get started.`},{title:`Set Up Profile`,description:`Complete your profile with additional details to unlock all features. Customize your dashboard and notification preferences.`},{title:`Make Transactions`,description:`Start making deposits, requesting cashouts, and interacting with community. All transactions are secure and instant.`},{title:`Track & Manage`,description:`Monitor your financial activity with our analytics dashboard. Get insights, track trends, and make informed decisions.`}].map((t,n)=>(0,Y.jsxs)(`div`,{className:`step`,ref:t=>e.current[n]=t,children:[(0,Y.jsx)(`div`,{className:`stepNumber`,children:n+1}),(0,Y.jsx)(`h3`,{children:t.title}),(0,Y.jsx)(`p`,{children:t.description})]},n))})]})})},ma=()=>{let e=(0,r.useRef)([]);return(0,r.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`revealed`)})},{threshold:.1});return e.current.forEach(e=>{e&&t.observe(e)}),()=>{e.current.forEach(e=>{e&&t.unobserve(e)})}},[]),(0,Y.jsx)(`section`,{id:`testimonials`,className:`testimonials`,children:(0,Y.jsxs)(`div`,{className:`container`,children:[(0,Y.jsxs)(`div`,{className:`sectionTitle`,children:[(0,Y.jsx)(`h2`,{children:`What Our Users Say`}),(0,Y.jsx)(`p`,{children:`Join thousands of satisfied users who trust Money Box with their financial needs`})]}),(0,Y.jsx)(`div`,{className:`testimonialsContainer`,children:[{name:`Sarah Johnson`,role:`Small Business Owner`,avatar:`https://picsum.photos/seed/person1/100/100.jpg`,content:`Money Box has completely transformed how I manage my finances. The interface is intuitive, and the cashout process is incredibly fast. I couldn't be happier with this platform!`},{name:`Michael Chen`,role:`Freelance Developer`,avatar:`https://picsum.photos/seed/person2/100/100.jpg`,content:`I've tried several financial platforms, but Money Box stands out with its security features and excellent customer support. It's become an essential tool for my daily transactions.`},{name:`Emily Rodriguez`,role:`Digital Marketer`,avatar:`https://picsum.photos/seed/person3/100/100.jpg`,content:`The community feature is what sets Money Box apart. I love being able to connect with others, share insights, and get advice. It's more than just a financial platform; it's a community.`}].map((t,n)=>(0,Y.jsxs)(`div`,{className:`testimonial`,ref:t=>e.current[n]=t,children:[(0,Y.jsx)(`div`,{className:`testimonialContent`,children:(0,Y.jsx)(`p`,{children:t.content})}),(0,Y.jsxs)(`div`,{className:`testimonialAuthor`,children:[(0,Y.jsx)(`img`,{src:t.avatar,alt:t.name,className:`authorAvatar`}),(0,Y.jsxs)(`div`,{className:`authorInfo`,children:[(0,Y.jsx)(`h4`,{children:t.name}),(0,Y.jsx)(`p`,{children:t.role})]})]}),(0,Y.jsx)(`div`,{className:`testimonialRating`,children:[...[,,,,,]].map((e,t)=>(0,Y.jsx)($,{icon:ia},t))})]},n))})]})})},ha=()=>(0,Y.jsx)(`footer`,{id:`contact`,className:`footer`,children:(0,Y.jsxs)(`div`,{className:`container`,children:[(0,Y.jsxs)(`div`,{className:`footerContent`,children:[(0,Y.jsxs)(`div`,{className:`footerSection`,children:[(0,Y.jsx)(`h3`,{children:`About Money Box`}),(0,Y.jsx)(`p`,{children:`Money Box is a modern financial platform designed to make managing your money simple, secure, and efficient. Join thousands of users who trust us with their financial needs.`}),(0,Y.jsxs)(`div`,{className:`socialLinks`,children:[(0,Y.jsx)(`a`,{href:`#`,children:(0,Y.jsx)($,{icon:sa})}),(0,Y.jsx)(`a`,{href:`#`,children:(0,Y.jsx)($,{icon:ua})}),(0,Y.jsx)(`a`,{href:`#`,children:(0,Y.jsx)($,{icon:ca})}),(0,Y.jsx)(`a`,{href:`#`,children:(0,Y.jsx)($,{icon:la})})]})]}),(0,Y.jsxs)(`div`,{className:`footerSection`,children:[(0,Y.jsx)(`h3`,{children:`Quick Links`}),(0,Y.jsxs)(`ul`,{className:`footerLinks`,children:[(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#home`,children:`Home`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#services`,children:`Services`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#how-it-works`,children:`How It Works`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#testimonials`,children:`Testimonials`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#`,children:`Privacy Policy`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#`,children:`Terms of Service`})})]})]}),(0,Y.jsxs)(`div`,{className:`footerSection`,children:[(0,Y.jsx)(`h3`,{children:`Services`}),(0,Y.jsxs)(`ul`,{className:`footerLinks`,children:[(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#`,children:`Secure Deposits`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#`,children:`Quick Cashouts`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#`,children:`Community Chat`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#`,children:`Analytics Dashboard`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#`,children:`Advanced Security`})}),(0,Y.jsx)(`li`,{children:(0,Y.jsx)(`a`,{href:`#`,children:`24/7 Support`})})]})]}),(0,Y.jsxs)(`div`,{className:`footerSection`,children:[(0,Y.jsx)(`h3`,{children:`Contact Us`}),(0,Y.jsxs)(`ul`,{className:`footerLinks`,children:[(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)($,{icon:aa}),` rwanda kirihe mahama V13 - C15`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)($,{icon:ra}),` +250795774877`]}),(0,Y.jsxs)(`li`,{children:[(0,Y.jsx)($,{icon:Zi}),` omaryagoub77@gmail.com`]})]})]})]}),(0,Y.jsx)(`div`,{className:`copyright`,children:(0,Y.jsx)(`p`,{children:`© 2023 Money Box. All rights reserved.`})})]})}),ga=()=>(0,Y.jsxs)(`div`,{className:`home`,children:[(0,Y.jsx)(da,{}),(0,Y.jsx)(fa,{}),(0,Y.jsx)(pa,{}),(0,Y.jsx)(ma,{}),(0,Y.jsx)(ha,{})]});export{ga as default};