/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return s=t.done,t},e:function(t){l=!0,o=t},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw o}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var n=function(t){var e=[];if(t.forEach((function(t){if(Number.isNaN(Number(t)))if(t in r){if(e.length<2)throw new Error("Insufficient operands for binary operation: ".concat(t));var n=e.pop(),i=e.pop(),o=r[t](i,n);e.push(o)}else{if(!(t in a))throw new Error("Unknown operator: ".concat(t));if(e.length<1)throw new Error("Insufficient operands for unary operation: ".concat(t));var s=e.pop(),l=a[t](s);e.push(l)}else e.push(parseFloat(t))})),1!==e.length||Number.isNaN(Number(e[0])))throw new Error("Invalid expression length".concat(e));return e[0]},r={"+":function(t,e){return t+e},"-":function(t,e){return t-e},"*":function(t,e){return t*e},"/":function(t,e){return t/e},"%":function(t,e){return t%e},"^":function(t,e){return Math.pow(t,e)}},a={sqrt:function(t){return Math.sqrt(t)},lg:function(t){return Math.log10(t)},ln:function(t){return Math.log(t)},n:function(t){return-t},"!":function(t){return i(t)}};function i(t){return 0===t?1:t*i(t-1)}var o=function(e){var n={"+":1,"-":1,"*":2,"/":2,"%":2,sqrt:4,lg:4,ln:4,"^":4,"!":4,n:4},r=function(t){return t in n};var a=e.replace(/(^|[-+*/%^(]|\([-+*/%^(]*\))(-)(\(?\d+(\.\d*)?|\.\d+)/g,(function(t,e,n,r){return"-"==n?"".concat(e,"n").concat(r):e+n+r})).replace(/(π)/g,(function(){return Math.PI.toFixed(5)})).match(/(\d+(\.\d*)?|\.\d+|[+\-*/%^()!]|sqrt|PI|lg|ln|\^|n)/g);if(!a)throw new Error("Invalid expression ".concat(a));return function(e){var a,i=[],o=[],s=t(e);try{for(s.s();!(a=s.n()).done;){var l=a.value;if(Number.isNaN(Number(l)))if(r(l)){for(;o.length&&n[o[o.length-1]]>=n[l];)i.push(o.pop());o.push(l)}else if("("===l)o.push(l);else if(")"===l){for(;o.length&&"("!==o[o.length-1];)i.push(o.pop());"("===o[o.length-1]&&o.pop()}else{if("!"!==l)throw new Error("Invalid character in expression: ".concat(l));o.push(l)}else i.push(parseFloat(l).toFixed(5))}}catch(t){s.e(t)}finally{s.f()}for(;o.length;)i.push(o.pop());return i}(a)},s=n;function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(a=r.key,i=void 0,i=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(a,"string"),"symbol"===l(i)?i:String(i)),r)}var a,i}var u=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.display=document.querySelector(".calculator__screen"),this.operator="",this.hasResult=!1}var e,n,r;return e=t,(n=[{key:"scrollInputToEnd",value:function(){var t=this.display;t.scrollLeft=t.scrollWidth}},{key:"appendDigit",value:function(t){this.hasResult&&(this.clear(),this.hasResult=!1),this.display.value=""==this.display.value?t:this.display.value+t,this.scrollInputToEnd(),this.checkValidity(this)}},{key:"setOperator",value:function(t){["xy","x3","x2","10x","x!","+-"].indexOf(t)+1?("xy"==t&&(this.display.value+="^("),"x2"==t&&(this.display.value+="^2"),"x3"==t&&(this.display.value+="^3"),"10x"==t&&(this.hasResult?this.display.value="10^(".concat(this.display.value,")"):this.display.value+="10^("),"x!"==t&&(this.display.value+="!"),"+-"==t&&this.display.value&&("-"==this.display.value[0]?(this.display.value=this.display.value.slice(1,this.display.value.length),"("==this.display.value[0]&&")"==this.display.value[this.display.value.length-1]&&(this.display.value=this.display.value.slice(1,this.display.value.length-1))):"("!=this.display.value[0]||")"!=this.display.value[this.display.value.length-1]?this.display.value="-(".concat(this.display.value,")"):this.display.value="-".concat(this.display.value))):this.display.value+=t,this.hasResult&&(this.hasResult=!1),this.scrollInputToEnd(),this.checkValidity(this)}},{key:"setFunction",value:function(t){this.hasResult?(this.display.value="".concat(t,"(").concat(this.display.value,")"),this.hasResult=!1):this.display.value+="".concat(t,"("),this.scrollInputToEnd(),this.checkValidity(this)}},{key:"calculate",value:function(){if(""==this.display.value)return 0;try{var t=o(this.display.value),e=s(t);return this.display.value=e,e.toString().indexOf("e")+1?(this.display.value="Too big value",this.hasResult=!0,this.checkValidity(),e):(this.display.value=parseFloat(e).toFixed(5).replace(/(\.0+|0+)$/,""),m(),this.hasResult=!0,this.checkValidity(),e)}catch(t){m()}}},{key:"openParenthesis",value:function(){this.hasResult&&(this.clear(),this.hasResult=!1),this.display.value+="(",this.scrollInputToEnd(),this.checkValidity(this)}},{key:"closeParenthesis",value:function(){this.hasResult&&(this.clear(),this.hasResult=!1),this.display.value+=")",this.scrollInputToEnd(),this.checkValidity(this)}},{key:"clear",value:function(){this.hasResult=!1,this.display.value="",this.operator="",this.display.classList.remove("calculator__screen_right-expr"),this.display.classList.remove("calculator__screen_wrong-expr")}},{key:"leftBackspace",value:function(){console.log(this.display.value.length),1==this.display.value.length?this.clear():this.display.value.length>1&&(this.display.value=this.display.value.slice(0,this.display.value.length-1),this.operator="")}},{key:"checkValidity",value:function(){try{var t=o(this.display.value);s(t),this.display.classList.add("calculator__screen_right-expr"),this.display.classList.remove("calculator__screen_wrong-expr")}catch(t){this.display.classList.add("calculator__screen_wrong-expr"),this.display.classList.remove("calculator__screen_right-expr")}}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}()),h=document.querySelector(".calculator__screen"),d=document.querySelector(".calculator__hidden-screen"),f=parseFloat(window.getComputedStyle(h).fontSize),p=f,y=0,v="";function m(){var t=h.scrollWidth,e=h.clientWidth;if(t-1>e&&y<2)p*=.8,y++;else if(t-1<=e&&y>0){var n=p/.8,r=document.createElement("div");r.style.fontSize="".concat(n,"px"),r.style.visibility="hidden",r.style.position="absolute",r.style.top="-9999px",r.style.left="-9999px",r.style.whiteSpace="nowrap",r.textContent=h.value,document.body.appendChild(r),r.scrollWidth-1<=e&&(p=n,y--),document.body.removeChild(r)}else h.value===v&&(p=f,y=0);h.style.fontSize="".concat(p,"px"),d.style.fontSize="".concat(p,"px"),d.value=h.value,v=h.value}var g={aar:"aa",abk:"ab",afr:"af",aka:"ak",alb:"sq",amh:"am",ara:"ar",arg:"an",arm:"hy",asm:"as",ava:"av",ave:"ae",aym:"ay",aze:"az",bak:"ba",bam:"bm",baq:"eu",bel:"be",ben:"bn",bih:"bh",bis:"bi",bos:"bs",bre:"br",bul:"bg",bur:"my",cat:"ca",cha:"ch",che:"ce",chi:"zh",chu:"cu",chv:"cv",cor:"kw",cos:"co",cre:"cr",cze:"cs",dan:"da",div:"dv",dut:"nl",dzo:"dz",eng:"en",epo:"eo",est:"et",ewe:"ee",fao:"fo",fij:"fj",fin:"fi",fre:"fr",fry:"fy",ful:"ff",geo:"ka",ger:"de",gla:"gd",gle:"ga",glg:"gl",glv:"gv",gre:"el",grn:"gn",guj:"gu",hat:"ht",hau:"ha",heb:"he",her:"hz",hin:"hi",hmo:"ho",hrv:"hr",hun:"hu",ibo:"ig",ice:"is",ido:"io",iii:"ii",iku:"iu",ile:"ie",ina:"ia",ind:"id",ipk:"ik",ita:"it",jav:"jv",jpn:"ja",kal:"kl",kan:"kn",kas:"ks",kau:"kr",kaz:"kk",khm:"km",kik:"ki",kin:"rw",kir:"ky",kom:"kv",kon:"kg",kor:"ko",kua:"kj",kur:"ku",lao:"lo",lat:"la",lav:"lv",lim:"li",lin:"ln",lit:"lt",ltz:"lb",lub:"lu",lug:"lg",mac:"mk",mah:"mh",mal:"ml",mao:"mi",mar:"mr",may:"ms",mlg:"mg",mlt:"mt",mon:"mn",nau:"na",nav:"nv",nbl:"nr",nde:"nd",ndo:"ng",nep:"ne",nno:"nn",nob:"nb",nor:"no",nya:"ny",oci:"oc",oji:"oj",ori:"or",orm:"om",oss:"os",pan:"pa",per:"fa",pli:"pi",pol:"pl",por:"pt",pus:"ps",que:"qu",roh:"rm",rum:"ro",run:"rn",rus:"ru",sag:"sg",san:"sa",sin:"si",slo:"sk",slv:"sl",sme:"se",smo:"sm",sna:"sn",snd:"sd",som:"so",sot:"st",spa:"es",srd:"sc",srp:"sr",ssw:"ss",sun:"su",swa:"sw",swe:"sv",tah:"ty",tam:"ta",tat:"tt",tel:"te",tgk:"tg",tgl:"tl",tha:"th",tib:"bo",tir:"ti",ton:"to",tsn:"tn",tso:"ts",tuk:"tk",tur:"tr",twi:"tw",uig:"ug",ukr:"uk",urd:"ur",uzb:"uz",ven:"ve",vie:"vi",vol:"vo",wel:"cy",wln:"wa",wol:"wo",xho:"xh",yid:"yi",yor:"yo",zha:"za",zul:"zu"},k={afar:"aa",abkhazian:"ab",afrikaans:"af",akan:"ak",albanian:"sq",amharic:"am",arabic:"ar",aragonese:"an",armenian:"hy",assamese:"as",avaric:"av",avestan:"ae",aymara:"ay",azerbaijani:"az",bashkir:"ba",bambara:"bm",basque:"eu",belarusian:"be",bengali:"bn","bihari languages":"bh",bislama:"bi",tibetan:"bo",bosnian:"bs",breton:"br",bulgarian:"bg",burmese:"my",catalan:"ca",valencian:"ca",czech:"cs",chamorro:"ch",chechen:"ce",chinese:"zh","church slavic":"cu","old slavonic":"cu","church slavonic":"cu","old bulgarian":"cu","old church slavonic":"cu",chuvash:"cv",cornish:"kw",corsican:"co",cree:"cr",welsh:"cy",danish:"da",german:"de",divehi:"dv",dhivehi:"dv",maldivian:"dv",dutch:"nl",flemish:"nl",dzongkha:"dz",greek:"el",english:"en",esperanto:"eo",estonian:"et",ewe:"ee",faroese:"fo",persian:"fa",fijian:"fj",finnish:"fi",french:"fr","western frisian":"fy",fulah:"ff",georgian:"ka",gaelic:"gd","scottish gaelic":"gd",irish:"ga",galician:"gl",manx:"gv",guarani:"gn",gujarati:"gu",haitian:"ht","haitian creole":"ht",hausa:"ha",hebrew:"he",herero:"hz",hindi:"hi","hiri motu":"ho",croatian:"hr",hungarian:"hu",igbo:"ig",icelandic:"is",ido:"io","sichuan yi":"ii",nuosu:"ii",inuktitut:"iu",interlingue:"ie",occidental:"ie",interlingua:"ia",indonesian:"id",inupiaq:"ik",italian:"it",javanese:"jv",japanese:"ja",kalaallisut:"kl",greenlandic:"kl",kannada:"kn",kashmiri:"ks",kanuri:"kr",kazakh:"kk","central khmer":"km",kikuyu:"ki",gikuyu:"ki",kinyarwanda:"rw",kirghiz:"ky",kyrgyz:"ky",komi:"kv",kongo:"kg",korean:"ko",kuanyama:"kj",kwanyama:"kj",kurdish:"ku",lao:"lo",latin:"la",latvian:"lv",limburgan:"li",limburger:"li",limburgish:"li",lingala:"ln",lithuanian:"lt",luxembourgish:"lb",letzeburgesch:"lb","luba-katanga":"lu",ganda:"lg",macedonian:"mk",marshallese:"mh",malayalam:"ml",maori:"mi",marathi:"mr",malay:"ms",malagasy:"mg",maltese:"mt",mongolian:"mn",nauru:"na",navajo:"nv",navaho:"nv","ndebele, south":"nr","south ndebele":"nr","ndebele, north":"nd","north ndebele":"nd",ndonga:"ng",nepali:"ne","norwegian nynorsk":"nn","nynorsk, norwegian":"nn","norwegian bokmål":"nb","bokmål, norwegian":"nb",norwegian:"no",chichewa:"ny",chewa:"ny",nyanja:"ny",occitan:"oc",ojibwa:"oj",oriya:"or",oromo:"om",ossetian:"os",ossetic:"os",panjabi:"pa",punjabi:"pa",pali:"pi",polish:"pl",portuguese:"pt",pushto:"ps",pashto:"ps",quechua:"qu",romansh:"rm",romanian:"ro",moldavian:"ro",moldovan:"ro",rundi:"rn",russian:"ru",sango:"sg",sanskrit:"sa",sinhala:"si",sinhalese:"si",slovak:"sk",slovenian:"sl","northern sami":"se",samoan:"sm",shona:"sn",sindhi:"sd",somali:"so","sotho, southern":"st",spanish:"es",castilian:"es",sardinian:"sc",serbian:"sr",swati:"ss",sundanese:"su",swahili:"sw",swedish:"sv",tahitian:"ty",tamil:"ta",tatar:"tt",telugu:"te",tajik:"tg",tagalog:"tl",thai:"th",tigrinya:"ti",tonga:"to",tswana:"tn",tsonga:"ts",turkmen:"tk",turkish:"tr",twi:"tw",uighur:"ug",uyghur:"ug",ukrainian:"uk",urdu:"ur",uzbek:"uz",venda:"ve",vietnamese:"vi",volapük:"vo",walloon:"wa",wolof:"wo",xhosa:"xh",yiddish:"yi",yoruba:"yo",zhuang:"za",chuang:"za",zulu:"zu"};const b=Object.values(g).sort();var w=t=>{if("string"!=typeof t)throw new Error('The "language" must be a string, received '+typeof t);if(t.length>100)throw new Error(`The "language" is too long at ${t.length} characters`);if(t=t.toLowerCase(),t=k[t]||g[t]||t,!b.includes(t))throw new Error(`The language "${t}" is not part of the ISO 639-1`);return t};function x(){var t=Object.create(null);function e(e){delete t[e]}this.set=function(n,r,a){if(void 0!==a&&("number"!=typeof a||isNaN(a)||a<=0))throw new Error("Cache timeout must be a positive number");var i=t[n];i&&clearTimeout(i.timeout);var o={value:r,expire:a+Date.now()};return isNaN(o.expire)||(o.timeout=setTimeout((()=>e(n)),a)),t[n]=o,r},this.del=function(n){var r=!0,a=t[n];return a?(clearTimeout(a.timeout),!isNaN(a.expire)&&a.expire<Date.now()&&(r=!1)):r=!1,r&&e(n),r},this.clear=function(){for(var e in t)clearTimeout(t[e].timeout);t=Object.create(null)},this.get=function(e){var n=t[e];if(void 0!==n){if(isNaN(n.expire)||n.expire>=Date.now())return n.value;delete t[e]}return null}}const E=new x;E.Cache=x;var L={google:{fetch:({key:t,from:e,to:n,text:r})=>[`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${e}&tl=${n}&dt=t&q=${encodeURI(r)}`],parse:t=>t.json().then((t=>{if(!(t=t&&t[0]&&t[0][0]&&t[0].map((t=>t[0])).join("")))throw new Error("Translation not found");return t}))},yandex:{needkey:!0,fetch:({key:t,from:e,to:n,text:r})=>[`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${t}&lang=${e}-${n}&text=${encodeURIComponent(r)}`,{method:"POST",body:""}],parse:t=>t.json().then((t=>{if(200!==t.code)throw new Error(t.message);return t.text[0]}))},libre:{needkey:!1,fetch:({url:t="https://libretranslate.com/translate",key:e,from:n,to:r,text:a})=>[t,{method:"POST",body:JSON.stringify({q:a,source:n,target:r,api_key:e}),headers:{"Content-Type":"application/json"}}],parse:t=>t.json().then((t=>{if(!t)throw new Error("No response found");if(t.error)throw new Error(t.error);if(!t.translatedText)throw new Error("No response found");return t.translatedText}))},deepl:{needkey:!0,fetch:({key:t,from:e,to:n,text:r})=>[`https://api${/:fx$/.test(t)?"-free":""}.deepl.com/v2/translate?auth_key=${t}&source_lang=${e}&target_lang=${n}&text=${r=encodeURIComponent(r)}`,{method:"POST",body:""}],parse:async t=>{if(!t.ok){if(403===t.status)throw new Error("Auth Error, please review the key for DeepL");throw new Error(`Error ${t.status}`)}return t.json().then((t=>t.translations[0].text))}}};const j=function(t={}){if(!(this instanceof j))return new j(t);const e={from:"en",to:"en",cache:void 0,languages:w,engines:L,engine:"google",keys:{}},n=async(t,e={})=>{"string"==typeof e&&(e={to:e}),e.text=t,e.from=w(e.from||n.from),e.to=w(e.to||n.to),e.cache=e.cache||n.cache,e.engines=e.engines||{},e.engine=e.engine||n.engine,e.url=e.url||n.url,e.id=e.id||`${e.url}:${e.from}:${e.to}:${e.engine}:${e.text}`,e.keys=e.keys||n.keys||{};for(let t in n.keys)e.keys[t]=e.keys[t]||n.keys[t];e.key=e.key||n.key||e.keys[e.engine];const r=e.engines[e.engine]||n.engines[e.engine],a=E.get(e.id);if(a)return Promise.resolve(a);if(e.to===e.from)return Promise.resolve(e.text);if(r.needkey&&!e.key)throw new Error(`The engine "${e.engine}" needs a key, please provide it`);const i=r.fetch(e);return fetch(...i).then(r.parse).then((t=>E.set(e.id,t,e.cache)))};for(let r in e)n[r]=void 0===t[r]?e[r]:t[r];return n},_=new j;function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function z(){z=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,o=Object.create(i.prototype),s=new N(r||[]);return a(o,"_invoke",{value:_(t,n,s)}),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var d="suspendedStart",f="suspendedYield",p="executing",y="completed",v={};function m(){}function g(){}function k(){}var b={};c(b,o,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==n&&r.call(x,o)&&(b=x);var E=k.prototype=m.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(a,i,o,s){var l=h(t[a],t,i);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==S(u)&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(u).then((function(t){c.value=t,o(c)}),(function(t){return n("throw",t,o,s)}))}s(l.arg)}var i;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return i=i?i.then(a,a):a()}})}function _(e,n,r){var a=d;return function(i,o){if(a===p)throw new Error("Generator is already running");if(a===y){if("throw"===i)throw o;return{value:t,done:!0}}for(r.method=i,r.arg=o;;){var s=r.delegate;if(s){var l=T(s,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=p;var c=h(e,n,r);if("normal"===c.type){if(a=r.done?y:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=y,r.method="throw",r.arg=c.arg)}}}function T(e,n){var r=n.method,a=e.iterator[r];if(a===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=h(a,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(S(e)+" is not iterable")}return g.prototype=k,a(E,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:g,configurable:!0}),g.displayName=c(k,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(j.prototype),c(j.prototype,s,(function(){return this})),e.AsyncIterator=j,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new j(u(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L(E),c(E,l,"Generator"),c(E,o,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=C,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return s.type="throw",s.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function T(t,e,n,r,a,i,o){try{var s=t[i](o),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,a)}_.Translate=j;var q,O,N="https://api.github.com/repos/".concat("B-S-B-Rabbit","/").concat("B-S-B-Rabbit.github.io","/commits?per_page=10");function C(){var t=0;document.querySelectorAll(".project-updates__item").forEach((function(e){window.innerWidth<=650?e.getBoundingClientRect().y+e.getBoundingClientRect().height<=window.innerHeight&&""==e.style.left&&setTimeout((function(){e.style.left=0,e.classList.add("animated-text")}),200*t++):(console.log(e.getBoundingClientRect().y+e.getBoundingClientRect().height,window.innerHeight),e.style.left=0)}))}m(),document.querySelector(".calculator__btn_type_bc").addEventListener("click",(function(){u.leftBackspace(),m()})),document.querySelector(".calculator__btn_type_C").addEventListener("click",(function(){u.clear(),p=f,h.style.fontSize="".concat(p,"px"),d.style.fontSize="".concat(p,"px"),y=0,m()})),document.querySelectorAll(".js-digit-btn").forEach((function(t){t.addEventListener("click",(function(){var e=t.textContent;u.appendDigit(e),m()}))})),document.querySelector(".calculator__btn_type_eq").addEventListener("click",(function(){u.calculate(),m()})),document.querySelectorAll(".js-function-btn").forEach((function(t){t.addEventListener("click",(function(){var e=t.textContent;u.setFunction(e),m()}))})),document.querySelectorAll(".js-operator-btn").forEach((function(t){t.addEventListener("click",(function(){var e=t.textContent;u.setOperator(e),m()}))})),q=document.querySelector(".calculator__btn_type_lp"),O=document.querySelector(".calculator__btn_type_rp"),q.addEventListener("click",(function(){u.openParenthesis(),m()})),O.addEventListener("click",(function(){u.closeParenthesis(),m()})),document.addEventListener("keydown",(function(t){if(!t.target.closest("input")){var e=t.key,n=document.querySelector('[data-key="'.concat(e,'"]'));e>="0"&&e<="9"?n&&(n.classList.add("js-keytapped-white"),u.appendDigit(e),m()):"Backspace"==e?(n.classList.add("js-keytapped-white"),u.leftBackspace(),m()):(n&&n.classList.add("js-keytapped-others"),["+","-","/","*","%","xy",".","x!"].indexOf(n.textContent)+1&&(u.setOperator(e),m()),"("==n.textContent&&(u.openParenthesis(),m()),")"==n.textContent&&(u.closeParenthesis(),m()),"="==n.textContent&&(u.calculate(),m()))}})),document.addEventListener("keyup",(function(t){if(!t.target.closest("input")){var e=t.key,n=document.querySelector('[data-key="'.concat(e,'"]'));e>="0"&&e<="9"||"Backspace"==e?n&&setTimeout((function(){return n.classList.remove("js-keytapped-white")}),100):n&&setTimeout((function(){return n.classList.remove("js-keytapped-others")}),100)}})),document.addEventListener("keydown",(function(t){"Enter"==t.key&&(t.preventDefault(),document.querySelector('[data-key="="]').classList.add("js-keytapped-others"),u.calculate(),m())})),document.addEventListener("keyup",(function(t){"Enter"==t.key&&(setTimeout((function(){return document.querySelector('[data-key="="]').classList.remove("js-keytapped-others")}),100),m())})),h.addEventListener("input",m),m(),h.addEventListener("keydown",(function(t){"Backspace"===t.key&&0===h.value.length&&(p=f,h.style.fontSize="".concat(p,"px"),d.style.fontSize="".concat(p,"px"),y=0)})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".calculator__screen").addEventListener("input",(function(){this.scrollLeft=this.scrollWidth}))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".calculator").scrollIntoView({behavior:"smooth"})})),document.addEventListener("DOMContentLoaded",(function(){var t=0;document.querySelector(".page").addEventListener("touchstart",(function(e){var n=(new Date).getTime();n-t<=50&&e.preventDefault(),t=n}))})),fetch(N).then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){return{sha:t.sha,message:t.commit.message}})),n=document.getElementsByClassName("project-updates__item");e.forEach((function(t,e){var r,a;(r=z().mark((function e(){return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_(t.message,"ru"));case 1:case"end":return e.stop()}}),e)})),a=function(){var t=this,e=arguments;return new Promise((function(n,a){var i=r.apply(t,e);function o(t){T(i,n,a,o,s,"next",t)}function s(t){T(i,n,a,o,s,"throw",t)}o(void 0)}))},function(){return a.apply(this,arguments)})().then((function(t){n[e].textContent=t}))}))})).catch((function(t){return console.error("Ошибка при получении данных:",t)})),document.addEventListener("DOMContentLoaded",(function(){C(),window.addEventListener("touchmove",C)})),function(t,e){var n=document.querySelector(".".concat(t)).offsetHeight,r=window.screen.width,a=document.querySelector(".".concat(e)),i=n;if(r>650){a.style.top="".concat(i,"px");var o=0,s=!1;window.addEventListener("scroll",(function(){var t=window.pageYOffset||document.documentElement.scrollTop;t>o?(s=!1,a.style.transition="top 0.3s, left 0.6s, right 0.6s",a.style.top="".concat(Math.max(i-t,0),"px")):t<i?(s=!0,a.style.transition="top 0.3s, left 0.6s, right 0.6s",a.style.top="".concat(i,"px")):s&&(a.style.transition="none",a.style.top="".concat(Math.max(i-t,0),"px")),o=t}))}}("header","project-updates"),h.addEventListener("input",u.checkValidity.bind(u))})();