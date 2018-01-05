!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e};"object"==typeof Reflect&&Reflect.construct;function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=n.length,o=window.console=window.console||{};i--;)o[e=n[i]]||(o[e]=t)}();var c=document.head||document.getElementsByTagName("head")[0],u=window.jQuery,f=/^(\S+)\s*(.*)$/,h=function(){function e(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t(this,e),this.el=n,this.$el=u(n),this.data=i,this.attachListeners()}return i(e,[{key:"attachListeners",value:function(){var e=this.listeners;for(var t in e){var n=t.trim(),i=!1,o=this[e[t]],r=t.match(f);if(r){var s=l(r,3);n=s[1],i=s[2]}var a=u.proxy(o,this);i?this.$el.on(n,i,a):this.$el.on(n,a)}}},{key:"detachListeners",value:function(){this.$el.off()}},{key:"destroy",value:function(){this.detachListeners();for(var e in this)this[e]=null}},{key:"child",value:function(e){var t=this.$el.find(e);return t.length?t.eq(0):null}},{key:"listeners",get:function(){return{}}}]),e}(),d=function(e){o(n,h);function n(e,i){return t(this,n),a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,i))}return i(n,[{key:"handleClick",value:function(e,t){e.preventDefault(),alert(this.data)}},{key:"listeners",get:function(){return{"click .example-child":"handleClick"}}}]),n}(),p=window.jQuery,y=function(e){o(n,h);function n(e,i){var o;return t(this,n),(o=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,i))).supportsSVG=document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"),o.supportsSVG&&o.injectSprite(),o}return i(n,[{key:"injectSprite",value:function(){var e=this;p.get(this.data.url,function(t,n){"success"===n?p(document.body).prepend(t):setTimeout(function(){return e.injectSprite()},1e4)},"text")}}]),n}(),v=function(e){o(n,h);function n(e,i){var o;return t(this,n),(o=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,i))).onResize=o.onResize.bind(s(o)),o.onScroll=o.onScroll.bind(s(o)),o.$slides=o.$el.find(".slide"),o.$window=$(window),o.$window.on("resize",o.onResize),o.$window.on("scroll",o.onScroll),o.updateSizes(),o.onScroll(),o}return i(n,[{key:"updateSizes",value:function(){var e=this.$window.height();this.windowHeight=e;var t=this.$slides.length-1;this.$slides.each(function(n){var i=$(this),o=i.children(".slide-in"),r=(0===n?1:0)+(n===t?1:0);i.css({height:o.innerHeight()-(n===t?0:e)+100*(2-r)})}),console.log("")}},{key:"onResize",value:function(){this.updateSizes()}},{key:"onScroll",value:function(){this.windowHeight;var e=this.$slides.length-1;this.$slides.each(function(t){var n=$(this),i=this.getBoundingClientRect(),o=i.top,r=i.bottom;n.toggleClass("is-active",o<=0&&r>=(t===e?0:1)),n.toggleClass("is-scrolling",o<=(0===t?0:-100)&&r>=(t===e?0:100)),n.toggleClass("is-aboveViewport",o<(0===t?0:-100))})}}]),n}();w="/node_modules/jquery/dist/jquery.min.js",m=function(e){!function(e){var t=[],n=function(n){if(n.name in e){var i=new(0,e[n.name])("string"==typeof n.place?document.querySelector(n.place):n.place,n.data||{});t.push(i)}};initComponents.map(n),initComponents={push:n}}({example:d,shapes:y,slides:v})},g=function(){console.log("jQuery dependency is missing. This page might not work correctly. Please try again later.")},window.jQuery?m(window.jQuery):w?function(t,n,i){var o=document.createElement("script");if(o.addEventListener("load",n),o.addEventListener("error",i),o.type="text/javascript","string"==typeof t)o.src=t,o.async=!0;else if("object"===e(t))for(var r in t)if(t.hasOwnProperty(r)){var s=t[r];"content"===r?o.appendChild(document.createTextNode(s)):o[r]=s}c.appendChild(o)}(w,function(){m(window.jQuery)},g):g();var w,m,g}();