!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash.bind")):"function"==typeof define&&define.amd?define("core-next-object",["lodash.bind"],t):"object"==typeof exports?exports["core-next-object"]=t(require("lodash.bind")):e["core-next-object"]=t(e["lodash.bind"])}(this,function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=1)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=t.EVENT_SPLITTER=/\s+/,o=t.eventsApi=((e,t,r,i,s)=>{let l,u=0;if(r&&"object"==typeof r){void 0!==i&&"context"in s&&void 0===s.context&&(s.context=i);for(l=Object.keys(r);u<l.length;u++)t=o(e,t,l[u],r[l[u]],s)}else if(r&&n.test(r))for(l=r.split(n);u<l.length;u++)t=e(t,l[u],i,s);else t=e(t,r,i,s);return t}),i=(t.internalOn=((e,t,r,n,s)=>{if(e._events=o(i,e._events||{},t,r,{context:n,ctx:e,listening:s}),s){(e._listeners||(e._listeners={}))[s.id]=s}return e}),t.onApi=((e,t,r,n)=>{if(r){const o=e[t]||(e[t]=[]),i=n.context,s=n.ctx,l=n.listening;l&&l.count++,o.push({callback:r,context:i,ctx:i||s,listening:l})}return e})),s=(t.offApi=((e,t,r,n)=>{if(!e)return;let o,i=0;const s=n.context,l=n.listeners;if(!t&&!r&&!s){const e=Object.keys(l);for(;i<e.length;i++)delete l[(o=l[e[i]]).id],delete o.listeningTo[o.objId];return}let u=t?[t]:Object.keys(e);for(;i<u.length;i++){const n=e[t=u[i]];if(!n)break;const c=[];let f=0;for(f=0;f<n.length;f++){const e=n[f];r&&r!==e.callback&&r!==e.callback._callback||s&&s!==e.context?c.push(e):(o=e.listening)&&0==--o.count&&(delete l[o.id],delete o.listeningTo[o.objId])}c.length?e[t]=c:delete e[t]}return e}),t.triggerApi=((e,t,r,n)=>{if(e){const r=e[t];let o=e.all;r&&o&&(o=o.slice()),r&&s(r,n),o&&s(o,[t].concat(n))}return e}),t.triggerEvents=((e,t)=>{let r,n=-1;const o=e.length,i=t[0],s=t[1],l=t[2];switch(t.length){case 0:for(;++n<o;)(r=e[n]).callback.call(r.ctx);return;case 1:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i);return;case 2:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i,s);return;case 3:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i,s,l);return;default:for(;++n<o;)(r=e[n]).callback.apply(r.ctx,t);return}}))},function(e,t,r){"use strict";var n=s(r(2)),o=s(r(5)),i=r(0);function s(e){return e&&e.__esModule?e:{default:e}}e.exports.AugmentedObject=n.default,e.exports.Configuration=o.default,e.exports.eventsApi=i.eventsApi,e.exports.eventsApi=i.internalOn,e.exports.eventsApi=i.offApi,e.exports.eventsApi=i.triggerApi},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3),o=r(0);const i=r(4);t.default=class{constructor(e){e||(e={}),this._options||(this._options={}),Object.assign(this._options,e),e&&e.events?this._events=e.events:this._events={},this._listeningTo={},this._listenId={},this._listeners={}}initialize(...e){return this}get options(){return this._options}set options(e){this._options=e}get events(){return this._events}set events(e){this._events=e}trigger(e,...t){if(this._events){const r=Array.isArray(t)?t:Array.from(t);(0,o.eventsApi)(o.triggerApi,this._events,e,void 0,r)}return this}once(e,t,r){const n=(0,o.eventsApi)(this._onceMap,{},e,t,i(this.off,this));return"string"==typeof e&&null==r&&(t=void 0),this.on(n,t,r)}off(e,t,r){return this._events&&(this._events=(0,o.eventsApi)(o.offApi,this._events,e,t,{context:r,listeners:this._listeners})),this}stopListening(e,t,r){const n=this._listeningTo;if(n){const o=e?[e._listenId]:Object.keys(n);let i=0;for(i=0;i<o.length;i++){const e=n[o[i]];if(!e)break;e.obj.off(t,r,this)}}return this}on(e,t,r){return(0,o.internalOn)(this,e,t,r)}listenTo(e,t,r){if(e){const i=e._listenId||(e._listenId=(0,n.uniqueId)("l")),s=this._listeningTo||(this._listeningTo={});let l=s[i];if(!l){const t=this._listenId||(this._listenId=(0,n.uniqueId)("l"));l=s[i]={obj:e,objId:i,id:t,listeningTo:s,count:0}}(0,o.internalOn)(e,t,r,this,l)}return this}listenToOnce(e,t,r){const n=(0,o.eventsApi)(this._onceMap,{},t,r,i(this.stopListening,this,e));return this.listenTo(e,n)}_onceMap(e,t,r,o){if(r){const i=e[t]=(0,n.once)(()=>{o(t,i),r.apply(this,arguments)});i._callback=r}return e}}},function(e,t,r){"use strict";e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=3)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=typeof e;return"function"===t||"object"===t&&!!e})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"[object Function]"==Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.default=((e,t)=>{let r,o;if("function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);return o=Number.parseInt(e),()=>(--o>0&&(r=t.apply(void 0,n)),o<=1&&(t=void 0),r)})},function(e,t,r){var n=S(r(4)),o=S(r(1)),i=S(r(5)),s=S(r(6)),l=S(r(7)),u=S(r(8)),c=S(r(0)),f=S(r(9)),a=S(r(10)),p=S(r(11)),d=S(r(12)),b=S(r(13)),y=S(r(14)),_=S(r(15)),h=S(r(16)),g=S(r(2)),v=S(r(17)),x=r(18),O=r(19),j=r(20),M=S(r(21)),m=S(r(22));function S(e){return e&&e.__esModule?e:{default:e}}e.exports.shuffle=O.shuffle,e.exports.prettyPrint=O.prettyPrint,e.exports.binarySearch=O.binarySearch,e.exports.TransformerType=O.TransformerType,e.exports.Transformer=O.Transformer,e.exports.wrap=O.wrap,e.exports.filterObject=O.filterObject,e.exports.findByMatchingProperties=O.findByMatchingProperties,e.exports.sortObjects=j.sortObjects,e.exports.mergeSort=j.mergeSort,e.exports.quickSort=j.quickSort,e.exports.insertionSort=j.insertionSort,e.exports.bubbleSort=j.bubbleSort,e.exports.formatDate=M.default,e.exports.formatBinary=m.default,e.exports.isString=n.default,e.exports.isFunction=o.default,e.exports.extend=i.default,e.exports.pad=s.default,e.exports.uniqueId=l.default,e.exports.has=u.default,e.exports.isObject=c.default,e.exports.allKeys=f.default,e.exports.create=a.default,e.exports.result=p.default,e.exports.arrayHas=d.default,e.exports.exec=b.default,e.exports.isDefined=y.default,e.exports.some=_.default,e.exports.splice=h.default,e.exports.before=g.default,e.exports.once=v.default,e.exports.fibonacci=x.fibonacci,e.exports.fibonacciSequence=x.fibonacciSequence},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>"string"==typeof e||!!e&&"object"==typeof e&&"[object String]"===Object.prototype.toString.call(e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((...e)=>{let t=0;const r=e.length;for(t=1;t<r;t++){let r;for(r in e[t])e[t].hasOwnProperty(r)&&(e[0][r]=e[t][r])}return e[0]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>void 0===t?e:r?`${e}${t}`:`${t}${e}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});let n=0;t.default=(e=>`${e}${++n}`)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>null!==e&&hasOwnProperty.call(e,t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=(e=>(0,n.default)(e)?Object.getOwnPropertyNames(e):[])},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));t.default=((e,t)=>{const r=(e=>(0,n.default)(e)?Object.create(e):{})(e);return t&&Object.assign(r,t),r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=((e,t)=>{if(null===e)return;const r=e[t];return(0,n.default)(r)?r.call(e):r})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>-1!==e.indexOf(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,...r)=>{const n=e.split("."),o=n.pop(),i=n.length;let s=0;for(s=0;s<i;s++)t=t[n[s]];return t[o].apply(t,r)})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>void 0!==e)},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>!!Array.isArray(e)&&e.some(t))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t,r)=>{r=Math.min(Math.max(r,0),e.length);let n=Array(e.length-r);const o=t.length;let i;for(i=0;i<n.length;i++)n[i]=e[i+r];for(i=0;i<o;i++)e[i+r]=t[i];for(i=0;i<n.length;i++)e[i+o+r]=n[i]})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(2));t.default=(e=>(0,n.default)(2,e))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});const n=t.fibonacci=(e=>{const t=(1+Math.sqrt(5))/2,r=Math.pow(t,e)/Math.sqrt(5);return Math.round(r)});t.fibonacciSequence=(e=>{const t=[];let r=0;for(r=0;r<e;r++)t.push(n(r));return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.shuffle=(e=>{const t=e.slice(0);let r,n,o=0;for(o=e.length-1;o>0;o--)n=Math.floor(Math.random()*(o+1)),r=t[o],t[o]=t[n],t[n]=r;return t}),t.prettyPrint=((e,t,r)=>{let n="\t";return t&&(n=" ".repeat(r)),JSON.stringify(e,null,n)}),t.binarySearch=((e,t,r)=>{let n,o,i=0,s=e.length-1;for(;i<=s;)if((o=r(e[n=Math.floor((i+s)/2)],t))<0)i=n+1;else{if(!(o>0))return n;s=n-1}return null});const o=t.TransformerType={};o.STRING=Symbol("String"),o.INTEGER=Symbol("Integer"),o.NUMBER=Symbol("Number"),o.BOOLEAN=Symbol("Boolean"),o.ARRAY=Symbol("Array"),o.OBJECT=Symbol("Object"),o.NULL=Symbol("Null"),t.Transformer=class{constructor(){this.type=o}static transform(e,t){let r=null;switch(t){case o.STRING:r="object"==typeof e?JSON.stringify(e):String(e);break;case o.INTEGER:r=parseInt(e);break;case o.NUMBER:r=Number(e);break;case o.BOOLEAN:r=Boolean(e);break;case o.ARRAY:Array.isArray(e)?r=e:(r=[])[0]=e;break;case o.OBJECT:"object"!=typeof e?(r={})[e]=e:r=e}return r}static isType(e){return null===e?o.NULL:"string"==typeof e?o.STRING:"number"==typeof e?o.NUMBER:"boolean"==typeof e?o.BOOLEAN:Array.isArray(e)?o.ARRAY:"object"==typeof e?o.OBJECT:void 0}},t.wrap=((e,t)=>()=>t.apply(void 0,[e].concat(Array.prototype.slice.call(n)))),t.filterObject=((e,t)=>{const r={};if(e&&t){const n=t.length;let o=0;for(o=0;o<n;o++)r[t[o]]=e[t[o]]}return r}),t.findByMatchingProperties=((e,t)=>e.filter(e=>Object.keys(t).every(r=>e[r]===t[r])))},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.sortObjects=((e,t)=>e.sort((e,r)=>{const n=e[t],o=r[t];return n<o?-1:n>o?1:0}));const n=t.mergeSort=(e=>{if(1===e.length)return e;const t=Math.floor(e.length/2),r=e.slice(0,t),i=e.slice(t);return o(n(r),n(i))}),o=(e,t)=>{let r=[],n=0,o=0;for(;n<e.length&&o<t.length;)e[n]<t[o]?(r.push(e[n]),n++):(r.push(t[o]),o++);return r.concat(e.slice(n)).concat(t.slice(o))},i=t.quickSort=(e=>{if(0===e.length)return[];let t=1;const r=e.length,n=[],o=[],s=e[0];for(t=1;t<r;t++)e[t]<s?n.push(e[t]):o.push(e[t]);return i(n).concat(s,i(o))});t.insertionSort=(e=>{let t=[];if(e){const r=(t=e.slice()).length;let n,o,i;for(n=1;n<r;n++){for(i=t[n],o=n-1;o>=0&&t[o]>i;o--)t[o+1]=t[o];t[o+1]=i}}return t}),t.bubbleSort=(e=>{let t=[];if(e){let r,n,o;const i=(t=e.slice()).length-1;do{for(r=!1,n=0;n<i;n++)t[n]>t[n+1]&&(o=t[n],t[n]=t[n+1],t[n+1]=o,r=!0)}while(r)}return t})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e=>{const t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),o=e.getHours(),i=e.getMinutes();return e.getSeconds(),`${r}/${n}/${t} ${o%12||12}:${i<10?"0"+i:i}${o<12?"am":"pm"}`})},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=((e,t)=>(e=>{let t=0,r=e,n="";for(t=0;t<32;t++,n+=String(r>>>31),r<<=1);return n})(e).split("").reverse().join("").substring(0,t))}])},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={LoggerLevel:"error",MessageBundle:"Messages",AsynchronousQueueTimeout:2e3,ApplicationInitProcessTimeout:1e3}}])});
//# sourceMappingURL=core-next-object.js.map