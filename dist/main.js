(()=>{"use strict";const t={board:function t(o){const r=new Array(o||0);let n=o;if(arguments.length>1){const c=Array.prototype.slice.call(arguments,1);for(;n--;)r[o-1-n]=t.apply(this,c)}return r}(10,10)};console.log(t)})();