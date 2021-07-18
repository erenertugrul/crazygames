!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CrazyEventTypeMap=t.CrazyAdTypeMap=t.debug=void 0;var i,o=r(n(2)),a=r(n(4)),s=function(){function e(){}return e.getInstance=function(){if(!this.instance)try{var e=window.parent;e.Crazygames&&e.Crazygames.load?(u("Running with CrazySDK"),this.instance=new o.default):(u("Running with LocalSDK"),this.instance=new a.default)}catch(e){u("Falling back to CrazySDK"),this.instance=new o.default}return this.instance},e.instance=null,e}();function u(e){var t;void 0===i&&(i="true"===(t="sdk_debug",decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURIComponent(t).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1")))),i&&console.log("[JS-SDK] "+e)}t.debug=u,t.CrazyAdTypeMap={midgame:"midgame",rewarded:"rewarded"},t.CrazyEventTypeMap={adStarted:"adStarted",adFinished:"adFinished",adError:"adError",adblockDetectionExecuted:"adblockDetectionExecuted"},window.CrazyGames={CrazySDK:s,CrazyAdType:t.CrazyAdTypeMap,CrazyEventType:t.CrazyEventTypeMap},t.default=o.default},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=function(){function e(){this.initialized=!1,this.initializeReplied=!1,this.requestInProgress=!1,this.eventListeners={},this.adblockDetectionExecuted=!1,this.hasAdblock=!1,this.gameLink=null}return e.prototype.addEventListener=function(e,t){var n;if(this.isValidCrazyEvent(e)){var o=this.eventListeners[e]||[];this.eventListeners=r(r({},this.eventListeners),((n={})[e]=i(o,[t]),n))}else console.error("[CrazySDK] Invalid Event",e)},e.prototype.removeEventListener=function(e,t){var n;if(this.isValidCrazyEvent(e)){var i=this.eventListeners[e]||[];this.eventListeners=r(r({},this.eventListeners),((n={})[e]=i.filter((function(e){return e!==t})),n))}else console.error("[CrazySDK] Invalid Event",e)},e.prototype.inviteLink=function(e){void 0===e&&(e={}),o.debug("Requesting invite link"),this.ensureInit();var t="utm_source=invite";Object.keys(e).forEach((function(n){var r=n+"="+e[n];t=t+"&"+r}));var n=this.gameLink||"https://www.crazygames.com/game/your-game-will-appear-here",r=n.includes("?")?n+"&"+t:n+"?"+t;return o.debug("Invite link is "+r),r},e.prototype.callListeners=function(e,t){(this.eventListeners[e]||[]).forEach((function(e){return e(t)}))},e.prototype.isValidCrazyEvent=function(e){switch(e){case"adStarted":case"adFinished":case"adError":case"adblockDetectionExecuted":case"bannerRendered":case"bannerError":case"requestBanner":return!0;default:return!1}},e.prototype.ensureInit=function(){this.initialized||this.init()},e}();t.default=a},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=s(n(1)),l=n(3),c=n(0),d=function(e){function t(){var t=e.call(this)||this;return t.rafvertizingUrl="",t.receiveMessage=function(e){var n=e.data,r=n.type,i=n.data;r&&("initialized"!==r?t.isValidCrazyEvent(r)&&t.callListeners(r,e.data):t.initializeReply(i))},t.queuedRequest=null,t.registerDefaultListeners(),t}return i(t,e),t.prototype.init=function(){this.initialized||(c.debug("Initializing"),this.initialized=!0,this.registerMessageListener(),this.postMessage("init",{version:"1.10.2",sdkType:"js"}))},t.prototype.requestAd=function(e){void 0===e&&(e="midgame"),c.debug("Requesting "+e+" ad"),this.ensureInit(),this.requestInProgress||(this.initializeReplied?(this.requestInProgress=!0,this.postMessage("requestAd",{adType:e})):this.queuedRequest=e)},t.prototype.requestBanner=function(e){return o(this,void 0,void 0,(function(){var t,n,r,i;return a(this,(function(o){switch(o.label){case 0:c.debug("Requesting banners to gameframe"),c.debug(JSON.stringify(e,null,2)),t=[],n=0,r=e,o.label=1;case 1:return n<r.length?(i=r[n],[4,this.checkContainerVisible(i.containerId)]):[3,4];case 2:o.sent()&&t.push(i),o.label=3;case 3:return n++,[3,1];case 4:return t.length>0&&(c.debug("Valid banners"),c.debug(JSON.stringify(t,null,2)),this.postMessage("requestBanner",t)),[2]}}))}))},t.prototype.checkContainerVisible=function(e){return o(this,void 0,void 0,(function(){var t,n;return a(this,(function(r){switch(r.label){case 0:return(t=document.getElementById(e))?[4,this.isElementVisible(t)]:(n="The container "+e+" is not present on the page",c.debug(n),this.callListeners("bannerError",{error:n}),[2,!1]);case 1:return r.sent()?[2,!0]:(n="The container "+e+" is not entirely visible on the page",c.debug(n),this.callListeners("bannerError",{error:n}),[2,!1])}}))}))},t.prototype.isElementVisible=function(e){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,new Promise((function(t){var n=new IntersectionObserver((function(e){var r=e[0];t(r.intersectionRatio>.95),n.disconnect()}));n.observe(e)}))]}))}))},t.prototype.inviteLink=function(t){void 0===t&&(t={});var n=e.prototype.inviteLink.call(this,t);return this.postMessage("inviteUrl",{inviteUrl:n}),n},t.prototype.happytime=function(){c.debug("Requesting happytime"),this.ensureInit(),this.postMessage("happytime",{})},t.prototype.gameplayStart=function(){c.debug("Requesting gameplay start"),this.ensureInit(),this.postMessage("gameplayStart",{})},t.prototype.gameplayStop=function(){c.debug("Requesting gameplay stop"),this.ensureInit(),this.postMessage("gameplayStop",{})},t.prototype.registerDefaultListeners=function(){var e=this;c.debug("Registering default listeners"),this.addEventListener("adFinished",(function(){e.requestInProgress=!1})),this.addEventListener("adError",(function(){e.requestInProgress=!1})),this.addEventListener("adblockDetectionExecuted",(function(t){e.adblockDetectionExecuted=!0;var n=t.hasAdblock;e.hasAdblock=!!n})),this.addEventListener("requestBanner",(function(t){c.debug("Banner request answer from gameframe received"),t.request.options.banner={callback:function(t){if(t.empty){var n="Sorry, no banner is available for the moment for "+t.code+", please retry";c.debug(n),e.callListeners("bannerError",{error:n})}else c.debug("Banner rendered for container "+t.code),e.callListeners("bannerRendered",{containerId:t.code})}},l.requestInGameBanner(t.request,e.rafvertizingUrl)}))},t.prototype.registerMessageListener=function(){window.addEventListener("message",this.receiveMessage,!1)},t.prototype.initializeReply=function(e){c.debug("Initialize reply received from gameframe"),c.debug(JSON.stringify(e,null,2)),this.initializeReplied||(this.initializeReplied=!0,e&&(this.gameLink=e.gameLink,this.rafvertizingUrl=e.rafvertizingUrl),l.loadCrazyAdsIfNeeded(this.rafvertizingUrl),this.queuedRequest&&(this.requestAd(this.queuedRequest),this.queuedRequest=null))},t.prototype.postMessage=function(e,t){this.getCrazySDKWindow().postMessage({type:e,data:t},"*")},t.prototype.getCrazySDKWindow=function(){return window.parent},t}(u.default);t.default=d},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.loadCrazyAdsIfNeeded=t.loadScript=t.requestInGameBanner=void 0;var o,a=n(0);function s(e){return new Promise((function(t,n){var r=document.createElement("script");r.onload=function(){return t()},r.onerror=function(e){return n(e)},r.src=e,r.async=!0,document.head.appendChild(r)}))}function u(e){return window.CrazygamesAds?Promise.resolve():function(e){if(o)return o;return o=s(e)}(e)}t.requestInGameBanner=function(e,t){return r(this,void 0,void 0,(function(){var n;return i(this,(function(r){switch(r.label){case 0:return[4,u(t)];case 1:return r.sent(),n=window.CrazygamesAds,a.debug("Requesting banner to CrazyAds"),n.requestAds(e.request,e.options),[2]}}))}))},t.loadScript=s,t.loadCrazyAdsIfNeeded=u},function(e,t,n){"use strict";var r,i=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.overlay=null,t.adDurationInMs=5e3,t}return i(t,e),t.prototype.init=function(){this.initialized||(this.initialized=!0,this.overlay=document.createElement("div"),this.createOverlayStyle(),document.body.appendChild(this.overlay),this.log("initializing"))},t.prototype.requestAd=function(e){void 0===e&&(e="midgame"),this.ensureInit(),this.requestInProgress||this.renderFakeAd(e)},t.prototype.happytime=function(){this.log("happy time")},t.prototype.gameplayStart=function(){this.log("gameplay start")},t.prototype.gameplayStop=function(){this.log("gameplay stop")},t.prototype.renderFakeAd=function(e){var t=this;this.log("requesting "+e+" ad"),this.requestInProgress=!0,this.showOverlay(),this.overlay.innerHTML="<h1>A "+e+" ad would appear here</h1>",this.callListeners("adStarted",{}),window.setTimeout((function(){t.requestInProgress=!1,t.callListeners("adFinished",{}),t.hideOverlay()}),this.adDurationInMs)},t.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.log.apply(console,o(["[CrazySDK]"],e))},t.prototype.showOverlay=function(){this.overlay.style.display="flex"},t.prototype.hideOverlay=function(){this.overlay.style.display="none",this.overlay.innerHTML=""},t.prototype.createOverlayStyle=function(){var e={position:"fixed",display:"none",width:"100%",height:"100%",top:"0",left:"0",right:"0",bottom:"0","align-items":"center","justify-content":"center","background-color":"rgba(0,0,0,0.5)","z-index":"10000"};for(var t in e)this.overlay.style[t]=e[t]},t}(a(n(1)).default);t.default=s}]);
//# sourceMappingURL=bundle.js.map