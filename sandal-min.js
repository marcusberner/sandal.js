var Sandal=function(){"use strict";var e,n,t,r,o,i,c;return t=function(e,n,t,r){if("done"===n||e[n])throw new Error(n+" is already registered");if(r)for(var o=0;o<r.length;o++)!function(t){if("done"===r[t]||e[r[t]]&&!e[r[t]].isGroup)throw new Error(n+" is already registered and can not be used as group name");e[r[t]]&&e[r[t]].isGroup?e[r[t]].dependencyNames.push(n):e[r[t]]={factory:function(){for(var n={},o=0;o<e[r[t]].dependencyNames.length;o++)n[e[r[t]].dependencyNames[o]]=arguments[o];return n},lifecycle:"transient",dependencyNames:[n],isGroup:!0}}(o);e[n]=t},n=function(e){var n,t;return n=e.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,""),t=n.slice(n.indexOf("(")+1,n.indexOf(")")).match(/([^\s,]+)/g),null===t&&(t=[]),t},r=function(e,n){var t,r;for(r=0;r<e.length;r++)for(t=0;t<n.length;t++)if(n[t]===e[r])return!0;return!1},o=function(e,n){for(var t=0;t<n.resolvedCallbacks.length;t++)n.resolvedCallbacks[t](e);n.resolvedCallbacks=[],n.isResolving=!1},i=function(e,n){if(e.ctor){var t,r=function(){};return r.prototype=e.ctor.prototype,t=new r,e.ctor.prototype.constructor.apply(t,n),t}return e.factory.apply(null,n)},c=function(e,t,l,s){var a,f,u,d,p,y,h,g;if(l.push(e),d=t[e],!d)return void s(new Error("No implementation registered for "+e+(l.length<2?"":" needed for "+l.splice(l.length-2,1))));if(u=function(e,n){"singleton"===d.lifecycle?(d.singleton=n,o(e,d)):s(e,n)},"singleton"===d.lifecycle){if(d.resolvedCallbacks=d.resolvedCallbacks||[],d.resolvedCallbacks.push(function(e){s(e,d.singleton)}),d.isResolving)return;if(d.isResolving=!0,d.hasOwnProperty("singleton"))return void u(null,d.singleton)}if(!d.ctor&&!d.factory)return void u(new Error("No valid implementation registered for "+e));if(d.dependencyNames=d.dependencyNames||n(d.ctor||d.factory),r(d.dependencyNames,l))return void u(new Error("There are circular dependencies in resolve chain: "+l));if(p=d.dependencyNames.length,0!==p)for(y=[],h=!1,g=0,a=0;p>a;a++)!function(e){var n=function(n,t){if(n)return void u(n);if(y[e]=t,g++,g===p){try{f=i(d,y)}catch(n){u(n)}h||u(null,f)}};return"done"===d.dependencyNames[e]?(h=!0,void(d.factory?n(null,u):n(null,function(e){setTimeout(function(){u(e,f)},0)}))):void c(d.dependencyNames[e],t,l.slice(0),n)}(a);else try{f=i(d,[]),u(null,f)}catch(v){u(v)}},e=function(){this.clear()},e.prototype.service=function(e,n,r,o,i){if(n instanceof Array||(i=o,o=r,r=n,n=null),o instanceof Array&&(i=o,o=!1),"function"!=typeof r)throw new Error('Service "'+e+'" must be a function');return t(this.container,e,{ctor:r,lifecycle:o?"transient":"singleton",dependencyNames:n},i),this},e.prototype.factory=function(e,n,r,o,i){if(n instanceof Array||(i=o,o=r,r=n,n=null),o instanceof Array&&(i=o,o=!1),"function"!=typeof r)throw new Error('Factory "'+e+'" must be a function');return t(this.container,e,{factory:r,lifecycle:o?"transient":"singleton",dependencyNames:n},i),this},e.prototype.object=function(e,n,r){return t(this.container,e,{singleton:n,lifecycle:"singleton"},r),this},e.prototype.resolve=function(e,t){var r,o,i,l,s,a,f=this;if("string"==typeof e?(o=[e],r=t):"function"==typeof e?r=e:(o=e,r=t),o||"function"==typeof r){if(o||(o=n(r),o=o.splice(1,o.length-1)),i=o.length,0===i)return r();for(l=0,s=[],a=0;i>a;a++)!function(e){c(o[e],f.container,[],function(n,t){l++,s[0]=s[0]||n,s[e+1]=t,l===i&&r&&r.apply({},s)})}(a);return this}},e.prototype.remove=function(e){if(!e)return this;"string"==typeof e&&(e=[e]);for(var n=0;n<e.length;n++){if("sandal"===e[n]||"done"===e[n])throw new Error("Removing "+e[n]+" is not allowed");delete this.container[e[n]]}return this},e.prototype.clear=function(){return this.container={sandal:{singleton:this,lifecycle:"singleton"}},this},e}();"undefined"!=typeof module&&module.exports&&(module.exports=Sandal),"undefined"!=typeof window&&(window.sandal=new Sandal);
//# sourceMappingURL=sandal-min.map