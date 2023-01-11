import{S as ct,r as Gt,c as Yt,i as U,a as lt,b as ht,d as Kt,e as S,C as B,u as W,f as At,j as v,g as Dt,h as G,R as Wt}from"./index-924ccef8.js";function Y(t,n){return t==null||n==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function Zt(t,n){return t==null||n==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function bt(t){let n,r,e;t.length!==2?(n=Y,r=(f,c)=>Y(t(f),c),e=(f,c)=>t(f)-c):(n=t===Y||t===Zt?t:Qt,r=t,e=t);function i(f,c,a=0,h=f.length){if(a<h){if(n(c,c)!==0)return h;do{const s=a+h>>>1;r(f[s],c)<0?a=s+1:h=s}while(a<h)}return a}function o(f,c,a=0,h=f.length){if(a<h){if(n(c,c)!==0)return h;do{const s=a+h>>>1;r(f[s],c)<=0?a=s+1:h=s}while(a<h)}return a}function u(f,c,a=0,h=f.length){const s=i(f,c,a,h-1);return s>a&&e(f[s-1],c)>-e(f[s],c)?s-1:s}return{left:i,center:u,right:o}}function Qt(){return 0}function Ut(t){return t===null?NaN:+t}const Jt=bt(Y),tn=Jt.right;bt(Ut).center;const nn=tn;class dt extends Map{constructor(n,r=on){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),n!=null)for(const[e,i]of n)this.set(e,i)}get(n){return super.get(mt(this,n))}has(n){return super.has(mt(this,n))}set(n,r){return super.set(en(this,n),r)}delete(n){return super.delete(rn(this,n))}}function mt({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):r}function en({_intern:t,_key:n},r){const e=n(r);return t.has(e)?t.get(e):(t.set(e,r),r)}function rn({_intern:t,_key:n},r){const e=n(r);return t.has(e)&&(r=t.get(e),t.delete(e)),r}function on(t){return t!==null&&typeof t=="object"?t.valueOf():t}var J=Math.sqrt(50),tt=Math.sqrt(10),nt=Math.sqrt(2);function un(t,n,r){var e,i=-1,o,u,f;if(n=+n,t=+t,r=+r,t===n&&r>0)return[t];if((e=n<t)&&(o=t,t=n,n=o),(f=St(t,n,r))===0||!isFinite(f))return[];if(f>0){let c=Math.round(t/f),a=Math.round(n/f);for(c*f<t&&++c,a*f>n&&--a,u=new Array(o=a-c+1);++i<o;)u[i]=(c+i)*f}else{f=-f;let c=Math.round(t*f),a=Math.round(n*f);for(c/f<t&&++c,a/f>n&&--a,u=new Array(o=a-c+1);++i<o;)u[i]=(c+i)/f}return e&&u.reverse(),u}function St(t,n,r){var e=(n-t)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),o=e/Math.pow(10,i);return i>=0?(o>=J?10:o>=tt?5:o>=nt?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=J?10:o>=tt?5:o>=nt?2:1)}function an(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),o=e/i;return o>=J?i*=10:o>=tt?i*=5:o>=nt&&(i*=2),n<t?-i:i}function sn(t,n){let r;if(n===void 0)for(const e of t)e!=null&&(r<e||r===void 0&&e>=e)&&(r=e);else{let e=-1;for(let i of t)(i=n(i,++e,t))!=null&&(r<i||r===void 0&&i>=i)&&(r=i)}return r}function fn(t,n,r){t=+t,n=+n,r=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+r;for(var e=-1,i=Math.max(0,Math.ceil((n-t)/r))|0,o=new Array(i);++e<i;)o[e]=t+e*r;return o}function cn(t){return t}var Z=1,Q=2,et=3,L=4,gt=1e-6;function ln(t){return"translate("+t+",0)"}function hn(t){return"translate(0,"+t+")"}function dn(t){return n=>+t(n)}function mn(t,n){return n=Math.max(0,t.bandwidth()-n*2)/2,t.round()&&(n=Math.round(n)),r=>+t(r)+n}function gn(){return!this.__axis}function Nt(t,n){var r=[],e=null,i=null,o=6,u=6,f=3,c=typeof window<"u"&&window.devicePixelRatio>1?0:.5,a=t===Z||t===L?-1:1,h=t===L||t===Q?"x":"y",s=t===Z||t===et?ln:hn;function l(d){var m=e??(n.ticks?n.ticks.apply(n,r):n.domain()),p=i??(n.tickFormat?n.tickFormat.apply(n,r):cn),y=Math.max(o,0)+f,M=n.range(),A=+M[0]+c,w=+M[M.length-1]+c,b=(n.bandwidth?mn:dn)(n.copy(),c),x=d.selection?d.selection():d,C=x.selectAll(".domain").data([null]),N=x.selectAll(".tick").data(m,n).order(),I=N.exit(),j=N.enter().append("g").attr("class","tick"),P=N.select("line"),g=N.select("text");C=C.merge(C.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),N=N.merge(j),P=P.merge(j.append("line").attr("stroke","currentColor").attr(h+"2",a*o)),g=g.merge(j.append("text").attr("fill","currentColor").attr(h,a*y).attr("dy",t===Z?"0em":t===et?"0.71em":"0.32em")),d!==x&&(C=C.transition(d),N=N.transition(d),P=P.transition(d),g=g.transition(d),I=I.transition(d).attr("opacity",gt).attr("transform",function($){return isFinite($=b($))?s($+c):this.getAttribute("transform")}),j.attr("opacity",gt).attr("transform",function($){var _=this.parentNode.__axis;return s((_&&isFinite(_=_($))?_:b($))+c)})),I.remove(),C.attr("d",t===L||t===Q?u?"M"+a*u+","+A+"H"+c+"V"+w+"H"+a*u:"M"+c+","+A+"V"+w:u?"M"+A+","+a*u+"V"+c+"H"+w+"V"+a*u:"M"+A+","+c+"H"+w),N.attr("opacity",1).attr("transform",function($){return s(b($)+c)}),P.attr(h+"2",a*o),g.attr(h,a*y).text(p),x.filter(gn).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Q?"start":t===L?"end":"middle"),x.each(function(){this.__axis=b})}return l.scale=function(d){return arguments.length?(n=d,l):n},l.ticks=function(){return r=Array.from(arguments),l},l.tickArguments=function(d){return arguments.length?(r=d==null?[]:Array.from(d),l):r.slice()},l.tickValues=function(d){return arguments.length?(e=d==null?null:Array.from(d),l):e&&e.slice()},l.tickFormat=function(d){return arguments.length?(i=d,l):i},l.tickSize=function(d){return arguments.length?(o=u=+d,l):o},l.tickSizeInner=function(d){return arguments.length?(o=+d,l):o},l.tickSizeOuter=function(d){return arguments.length?(u=+d,l):u},l.tickPadding=function(d){return arguments.length?(f=+d,l):f},l.offset=function(d){return arguments.length?(c=+d,l):c},l}function pn(t){return Nt(et,t)}function zt(t){return Nt(L,t)}function T(t){return typeof t=="string"?new ct([[document.querySelector(t)]],[document.documentElement]):new ct([[t]],Gt)}function yn(t,n){n||(n=[]);var r=t?Math.min(n.length,t.length):0,e=n.slice(),i;return function(o){for(i=0;i<r;++i)e[i]=t[i]*(1-o)+n[i]*o;return e}}function Mn(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function xn(t,n){var r=n?n.length:0,e=t?Math.min(r,t.length):0,i=new Array(e),o=new Array(r),u;for(u=0;u<e;++u)i[u]=ut(t[u],n[u]);for(;u<r;++u)o[u]=n[u];return function(f){for(u=0;u<e;++u)o[u]=i[u](f);return o}}function wn(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}}function kn(t,n){var r={},e={},i;(t===null||typeof t!="object")&&(t={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in t?r[i]=ut(t[i],n[i]):e[i]=n[i];return function(o){for(i in r)e[i]=r[i](o);return e}}function ut(t,n){var r=typeof n,e;return n==null||r==="boolean"?Yt(n):(r==="number"?U:r==="string"?(e=lt(n))?(n=e,ht):Kt:n instanceof lt?ht:n instanceof Date?wn:Mn(n)?yn:Array.isArray(n)?xn:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?kn:U)(t,n)}function vn(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}}const rt=Math.PI,it=2*rt,E=1e-6,_n=it-E;function Ct(t){this._+=t[0];for(let n=1,r=t.length;n<r;++n)this._+=arguments[n]+t[n]}function $n(t){let n=Math.floor(t);if(!(n>=0))throw new Error(`invalid digits: ${t}`);if(n>15)return Ct;const r=10**n;return function(e){this._+=e[0];for(let i=1,o=e.length;i<o;++i)this._+=Math.round(arguments[i]*r)/r+e[i]}}class An{constructor(n){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=n==null?Ct:$n(n)}moveTo(n,r){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+r}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(n,r){this._append`L${this._x1=+n},${this._y1=+r}`}quadraticCurveTo(n,r,e,i){this._append`Q${+n},${+r},${this._x1=+e},${this._y1=+i}`}bezierCurveTo(n,r,e,i,o,u){this._append`C${+n},${+r},${+e},${+i},${this._x1=+o},${this._y1=+u}`}arcTo(n,r,e,i,o){if(n=+n,r=+r,e=+e,i=+i,o=+o,o<0)throw new Error(`negative radius: ${o}`);let u=this._x1,f=this._y1,c=e-n,a=i-r,h=u-n,s=f-r,l=h*h+s*s;if(this._x1===null)this._append`M${this._x1=n},${this._y1=r}`;else if(l>E)if(!(Math.abs(s*c-a*h)>E)||!o)this._append`L${this._x1=n},${this._y1=r}`;else{let d=e-u,m=i-f,p=c*c+a*a,y=d*d+m*m,M=Math.sqrt(p),A=Math.sqrt(l),w=o*Math.tan((rt-Math.acos((p+l-y)/(2*M*A)))/2),b=w/A,x=w/M;Math.abs(b-1)>E&&this._append`L${n+b*h},${r+b*s}`,this._append`A${o},${o},0,0,${+(s*d>h*m)},${this._x1=n+x*c},${this._y1=r+x*a}`}}arc(n,r,e,i,o,u){if(n=+n,r=+r,e=+e,u=!!u,e<0)throw new Error(`negative radius: ${e}`);let f=e*Math.cos(i),c=e*Math.sin(i),a=n+f,h=r+c,s=1^u,l=u?i-o:o-i;this._x1===null?this._append`M${a},${h}`:(Math.abs(this._x1-a)>E||Math.abs(this._y1-h)>E)&&this._append`L${a},${h}`,e&&(l<0&&(l=l%it+it),l>_n?this._append`A${e},${e},0,1,${s},${n-f},${r-c}A${e},${e},0,1,${s},${this._x1=a},${this._y1=h}`:l>E&&this._append`A${e},${e},0,${+(l>=rt)},${s},${this._x1=n+e*Math.cos(o)},${this._y1=r+e*Math.sin(o)}`)}rect(n,r,e,i){this._append`M${this._x0=this._x1=+n},${this._y0=this._y1=+r}h${e=+e}v${+i}h${-e}Z`}toString(){return this._}}function bn(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function K(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]}function O(t){return t=K(Math.abs(t)),t?t[1]:NaN}function Sn(t,n){return function(r,e){for(var i=r.length,o=[],u=0,f=t[0],c=0;i>0&&f>0&&(c+f+1>e&&(f=Math.max(1,e-c)),o.push(r.substring(i-=f,i+f)),!((c+=f+1)>e));)f=t[u=(u+1)%t.length];return o.reverse().join(n)}}function Nn(t){return function(n){return n.replace(/[0-9]/g,function(r){return t[+r]})}}var zn=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function D(t){if(!(n=zn.exec(t)))throw new Error("invalid format: "+t);var n;return new at({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}D.prototype=at.prototype;function at(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}at.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function Cn(t){t:for(var n=t.length,r=1,e=-1,i;r<n;++r)switch(t[r]){case".":e=i=r;break;case"0":e===0&&(e=r),i=r;break;default:if(!+t[r])break t;e>0&&(e=0);break}return e>0?t.slice(0,e)+t.slice(i+1):t}var Pt;function Pn(t,n){var r=K(t,n);if(!r)return t+"";var e=r[0],i=r[1],o=i-(Pt=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,u=e.length;return o===u?e:o>u?e+new Array(o-u+1).join("0"):o>0?e.slice(0,o)+"."+e.slice(o):"0."+new Array(1-o).join("0")+K(t,Math.max(0,n+o-1))[0]}function pt(t,n){var r=K(t,n);if(!r)return t+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}const yt={"%":(t,n)=>(t*100).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:bn,e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>pt(t*100,n),r:pt,s:Pn,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Mt(t){return t}var xt=Array.prototype.map,wt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function En(t){var n=t.grouping===void 0||t.thousands===void 0?Mt:Sn(xt.call(t.grouping,Number),t.thousands+""),r=t.currency===void 0?"":t.currency[0]+"",e=t.currency===void 0?"":t.currency[1]+"",i=t.decimal===void 0?".":t.decimal+"",o=t.numerals===void 0?Mt:Nn(xt.call(t.numerals,String)),u=t.percent===void 0?"%":t.percent+"",f=t.minus===void 0?"−":t.minus+"",c=t.nan===void 0?"NaN":t.nan+"";function a(s){s=D(s);var l=s.fill,d=s.align,m=s.sign,p=s.symbol,y=s.zero,M=s.width,A=s.comma,w=s.precision,b=s.trim,x=s.type;x==="n"?(A=!0,x="g"):yt[x]||(w===void 0&&(w=12),b=!0,x="g"),(y||l==="0"&&d==="=")&&(y=!0,l="0",d="=");var C=p==="$"?r:p==="#"&&/[boxX]/.test(x)?"0"+x.toLowerCase():"",N=p==="$"?e:/[%p]/.test(x)?u:"",I=yt[x],j=/[defgprs%]/.test(x);w=w===void 0?6:/[gprs]/.test(x)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function P(g){var $=C,_=N,R,ft,V;if(x==="c")_=I(g)+_,g="";else{g=+g;var q=g<0||1/g<0;if(g=isNaN(g)?c:I(Math.abs(g),w),b&&(g=Cn(g)),q&&+g==0&&m!=="+"&&(q=!1),$=(q?m==="("?m:f:m==="-"||m==="("?"":m)+$,_=(x==="s"?wt[8+Pt/3]:"")+_+(q&&m==="("?")":""),j){for(R=-1,ft=g.length;++R<ft;)if(V=g.charCodeAt(R),48>V||V>57){_=(V===46?i+g.slice(R+1):g.slice(R))+_,g=g.slice(0,R);break}}}A&&!y&&(g=n(g,1/0));var H=$.length+g.length+_.length,z=H<M?new Array(M-H+1).join(l):"";switch(A&&y&&(g=n(z+g,z.length?M-_.length:1/0),z=""),d){case"<":g=$+g+_+z;break;case"=":g=$+z+g+_;break;case"^":g=z.slice(0,H=z.length>>1)+$+g+_+z.slice(H);break;default:g=z+$+g+_;break}return o(g)}return P.toString=function(){return s+""},P}function h(s,l){var d=a((s=D(s),s.type="f",s)),m=Math.max(-8,Math.min(8,Math.floor(O(l)/3)))*3,p=Math.pow(10,-m),y=wt[8+m/3];return function(M){return d(p*M)+y}}return{format:a,formatPrefix:h}}var X,Et,It;In({thousands:",",grouping:[3],currency:["$",""]});function In(t){return X=En(t),Et=X.format,It=X.formatPrefix,X}function jn(t){return Math.max(0,-O(Math.abs(t)))}function Rn(t,n){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(O(n)/3)))*3-O(Math.abs(t)))}function Tn(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,O(n)-O(t))+1}function st(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t);break}return this}const kt=Symbol("implicit");function jt(){var t=new dt,n=[],r=[],e=kt;function i(o){let u=t.get(o);if(u===void 0){if(e!==kt)return e;t.set(o,u=n.push(o)-1)}return r[u%r.length]}return i.domain=function(o){if(!arguments.length)return n.slice();n=[],t=new dt;for(const u of o)t.has(u)||t.set(u,n.push(u)-1);return i},i.range=function(o){return arguments.length?(r=Array.from(o),i):r.slice()},i.unknown=function(o){return arguments.length?(e=o,i):e},i.copy=function(){return jt(n,r).unknown(e)},st.apply(i,arguments),i}function Rt(){var t=jt().unknown(void 0),n=t.domain,r=t.range,e=0,i=1,o,u,f=!1,c=0,a=0,h=.5;delete t.unknown;function s(){var l=n().length,d=i<e,m=d?i:e,p=d?e:i;o=(p-m)/Math.max(1,l-c+a*2),f&&(o=Math.floor(o)),m+=(p-m-o*(l-c))*h,u=o*(1-c),f&&(m=Math.round(m),u=Math.round(u));var y=fn(l).map(function(M){return m+o*M});return r(d?y.reverse():y)}return t.domain=function(l){return arguments.length?(n(l),s()):n()},t.range=function(l){return arguments.length?([e,i]=l,e=+e,i=+i,s()):[e,i]},t.rangeRound=function(l){return[e,i]=l,e=+e,i=+i,f=!0,s()},t.bandwidth=function(){return u},t.step=function(){return o},t.round=function(l){return arguments.length?(f=!!l,s()):f},t.padding=function(l){return arguments.length?(c=Math.min(1,a=+l),s()):c},t.paddingInner=function(l){return arguments.length?(c=Math.min(1,l),s()):c},t.paddingOuter=function(l){return arguments.length?(a=+l,s()):a},t.align=function(l){return arguments.length?(h=Math.max(0,Math.min(1,l)),s()):h},t.copy=function(){return Rt(n(),[e,i]).round(f).paddingInner(c).paddingOuter(a).align(h)},st.apply(s(),arguments)}function Tt(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return Tt(n())},t}function Fn(){return Tt(Rt.apply(null,arguments).paddingInner(1))}function On(t){return function(){return t}}function Ln(t){return+t}var vt=[0,1];function F(t){return t}function ot(t,n){return(n-=t=+t)?function(r){return(r-t)/n}:On(isNaN(n)?NaN:.5)}function Bn(t,n){var r;return t>n&&(r=t,t=n,n=r),function(e){return Math.max(t,Math.min(n,e))}}function Vn(t,n,r){var e=t[0],i=t[1],o=n[0],u=n[1];return i<e?(e=ot(i,e),o=r(u,o)):(e=ot(e,i),o=r(o,u)),function(f){return o(e(f))}}function qn(t,n,r){var e=Math.min(t.length,n.length)-1,i=new Array(e),o=new Array(e),u=-1;for(t[e]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<e;)i[u]=ot(t[u],t[u+1]),o[u]=r(n[u],n[u+1]);return function(f){var c=nn(t,f,1,e)-1;return o[c](i[c](f))}}function Hn(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function Xn(){var t=vt,n=vt,r=ut,e,i,o,u=F,f,c,a;function h(){var l=Math.min(t.length,n.length);return u!==F&&(u=Bn(t[0],t[l-1])),f=l>2?qn:Vn,c=a=null,s}function s(l){return l==null||isNaN(l=+l)?o:(c||(c=f(t.map(e),n,r)))(e(u(l)))}return s.invert=function(l){return u(i((a||(a=f(n,t.map(e),U)))(l)))},s.domain=function(l){return arguments.length?(t=Array.from(l,Ln),h()):t.slice()},s.range=function(l){return arguments.length?(n=Array.from(l),h()):n.slice()},s.rangeRound=function(l){return n=Array.from(l),r=vn,h()},s.clamp=function(l){return arguments.length?(u=l?!0:F,h()):u!==F},s.interpolate=function(l){return arguments.length?(r=l,h()):r},s.unknown=function(l){return arguments.length?(o=l,s):o},function(l,d){return e=l,i=d,h()}}function Gn(){return Xn()(F,F)}function Yn(t,n,r,e){var i=an(t,n,r),o;switch(e=D(e??",f"),e.type){case"s":{var u=Math.max(Math.abs(t),Math.abs(n));return e.precision==null&&!isNaN(o=Rn(i,u))&&(e.precision=o),It(e,u)}case"":case"e":case"g":case"p":case"r":{e.precision==null&&!isNaN(o=Tn(i,Math.max(Math.abs(t),Math.abs(n))))&&(e.precision=o-(e.type==="e"));break}case"f":case"%":{e.precision==null&&!isNaN(o=jn(i))&&(e.precision=o-(e.type==="%")*2);break}}return Et(e)}function Kn(t){var n=t.domain;return t.ticks=function(r){var e=n();return un(e[0],e[e.length-1],r??10)},t.tickFormat=function(r,e){var i=n();return Yn(i[0],i[i.length-1],r??10,e)},t.nice=function(r){r==null&&(r=10);var e=n(),i=0,o=e.length-1,u=e[i],f=e[o],c,a,h=10;for(f<u&&(a=u,u=f,f=a,a=i,i=o,o=a);h-- >0;){if(a=St(u,f,r),a===c)return e[i]=u,e[o]=f,n(e);if(a>0)u=Math.floor(u/a)*a,f=Math.ceil(f/a)*a;else if(a<0)u=Math.ceil(u*a)/a,f=Math.floor(f*a)/a;else break;c=a}return t},t}function Ft(){var t=Gn();return t.copy=function(){return Hn(t,Ft())},st.apply(t,arguments),Kn(t)}function k(t){return function(){return t}}function Ot(t){let n=3;return t.digits=function(r){if(!arguments.length)return n;if(r==null)n=null;else{const e=Math.floor(r);if(!(e>=0))throw new RangeError(`invalid digits: ${r}`);n=e}return t},()=>new An(n)}function Lt(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Bt(t){this._context=t}Bt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n);break}}};function Vt(t){return new Bt(t)}function qt(t){return t[0]}function Ht(t){return t[1]}function Dn(t,n){var r=k(!0),e=null,i=Vt,o=null,u=Ot(f);t=typeof t=="function"?t:t===void 0?qt:k(t),n=typeof n=="function"?n:n===void 0?Ht:k(n);function f(c){var a,h=(c=Lt(c)).length,s,l=!1,d;for(e==null&&(o=i(d=u())),a=0;a<=h;++a)!(a<h&&r(s=c[a],a,c))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(s,a,c),+n(s,a,c));if(d)return o=null,d+""||null}return f.x=function(c){return arguments.length?(t=typeof c=="function"?c:k(+c),f):t},f.y=function(c){return arguments.length?(n=typeof c=="function"?c:k(+c),f):n},f.defined=function(c){return arguments.length?(r=typeof c=="function"?c:k(!!c),f):r},f.curve=function(c){return arguments.length?(i=c,e!=null&&(o=i(e)),f):i},f.context=function(c){return arguments.length?(c==null?e=o=null:o=i(e=c),f):e},f}function Wn(t,n,r){var e=null,i=k(!0),o=null,u=Vt,f=null,c=Ot(a);t=typeof t=="function"?t:t===void 0?qt:k(+t),n=typeof n=="function"?n:k(n===void 0?0:+n),r=typeof r=="function"?r:r===void 0?Ht:k(+r);function a(s){var l,d,m,p=(s=Lt(s)).length,y,M=!1,A,w=new Array(p),b=new Array(p);for(o==null&&(f=u(A=c())),l=0;l<=p;++l){if(!(l<p&&i(y=s[l],l,s))===M)if(M=!M)d=l,f.areaStart(),f.lineStart();else{for(f.lineEnd(),f.lineStart(),m=l-1;m>=d;--m)f.point(w[m],b[m]);f.lineEnd(),f.areaEnd()}M&&(w[l]=+t(y,l,s),b[l]=+n(y,l,s),f.point(e?+e(y,l,s):w[l],r?+r(y,l,s):b[l]))}if(A)return f=null,A+""||null}function h(){return Dn().defined(i).curve(u).context(o)}return a.x=function(s){return arguments.length?(t=typeof s=="function"?s:k(+s),e=null,a):t},a.x0=function(s){return arguments.length?(t=typeof s=="function"?s:k(+s),a):t},a.x1=function(s){return arguments.length?(e=s==null?null:typeof s=="function"?s:k(+s),a):e},a.y=function(s){return arguments.length?(n=typeof s=="function"?s:k(+s),r=null,a):n},a.y0=function(s){return arguments.length?(n=typeof s=="function"?s:k(+s),a):n},a.y1=function(s){return arguments.length?(r=s==null?null:typeof s=="function"?s:k(+s),a):r},a.lineX0=a.lineY0=function(){return h().x(t).y(n)},a.lineY1=function(){return h().x(t).y(r)},a.lineX1=function(){return h().x(e).y(n)},a.defined=function(s){return arguments.length?(i=typeof s=="function"?s:k(!!s),a):i},a.curve=function(s){return arguments.length?(u=s,o!=null&&(f=u(o)),a):u},a.context=function(s){return arguments.length?(s==null?o=f=null:f=u(o=s),a):o},a}function Xt(t){this._context=t}Xt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,r=t.length;if(r)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),r===2)this._context.lineTo(t[1],n[1]);else for(var e=_t(t),i=_t(n),o=0,u=1;u<r;++o,++u)this._context.bezierCurveTo(e[0][o],i[0][o],e[1][o],i[1][o],t[u],n[u]);(this._line||this._line!==0&&r===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};function _t(t){var n,r=t.length-1,e,i=new Array(r),o=new Array(r),u=new Array(r);for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1];for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function Zn(t){return new Xt(t)}const Qn=({dataKey:t})=>{const n=S.useRef(null),{atomInstance:r,width:e,height:i,padding:o,data:u}=S.useContext(B),[f,c]=W(r),a=f.yAxis.size;return At(()=>{var h;if(n.current){const s=[0,e-o.right-o.left-a],l=T(n.current),d=Fn().domain(u.map(p=>p[t])).range(s);l.call(pn(d));const m=((h=l.node())==null?void 0:h.getBBox().height)||0;c(p=>{p.xAxis.size=m,p.xAxis.scale=d,p.xAxis.dataKey=t}),a&&l.attr("transform",`translate(${o.left+a}, ${i-o.bottom-m})`)}},[u,t,i,o.bottom,o.left,o.right,c,e,a]),v("g",{ref:n})},Un=()=>{const t=S.useRef(null),{atomInstance:n,width:r,height:e,padding:i,data:o}=S.useContext(B),[u,f]=W(n),c=u.xAxis.size,{dataKeys:a}=u.yAxis;return At(()=>{var h;if(t.current&&c){const s=[0,e-i.bottom-c-i.top],l=T(t.current),d=Ft().domain([sn(o,p=>{const y=a.map(M=>p[M]);return Math.max(...y)})||0,0]).range(s);l.call(zt(d));const m=((h=l.node())==null?void 0:h.getBBox().width)||0;f(p=>{p.yAxis.size=m,p.yAxis.scale=d}),l.attr("transform",`translate(${m+i.left}, ${i.top})`)}},[u.xAxis.dataKey,o,a,e,i.bottom,i.left,i.top,f,r,c]),v("g",{ref:t})},$t=({dataKey:t,baseDataKey:n,...r})=>{const{atomInstance:e,padding:i,data:o}=S.useContext(B),[u,f]=W(e),{xAxis:c,yAxis:a}=u;S.useEffect(()=>{f(l=>{l.yAxis.dataKeys.push(t)})},[t,f]);const h=a.size,s=S.useMemo(()=>c.scale&&a.scale&&c.dataKey&&Wn(d=>{var m;return((m=c.scale)==null?void 0:m.call(c,d[c.dataKey]))||0},d=>{var m;return((m=a.scale)==null?void 0:m.call(a,d[t]))||0},d=>{var m;return((m=a.scale)==null?void 0:m.call(a,n&&d[n]||0))||0}).curve(Zn)(o)||"",[n,o,t,c,a]);return v("path",{d:s,transform:`translate(${i.left+h}, ${i.top})`,...r})},Jn=({id:t,x:n,y:r,width:e,height:i})=>v("defs",{children:v("clipPath",{id:t,children:v("rect",{x:n,y:r,height:i,width:e})})}),te=({width:t,height:n,viewBox:r,data:e,children:i,padding:o})=>{const u=r||{width:t,height:n,x:0,y:0},f=S.useId(),c=`clip-path-${f}`,a=S.useMemo(()=>Dt({xAxis:{size:0,dataKey:""},yAxis:{size:0,dataKeys:[]}}),[]),h=S.useMemo(()=>({atomInstance:a,width:t,height:n,padding:{top:(o==null?void 0:o.top)||0,right:(o==null?void 0:o.right)||0,bottom:(o==null?void 0:o.bottom)||0,left:(o==null?void 0:o.left)||0},data:e}),[a,e,n,o,t]),s=S.useMemo(()=>({id:c,x:h.padding.left,y:h.padding.top,width:h.width-h.padding.left-h.padding.right,height:h.height-h.padding.top-h.padding.bottom}),[c,h.height,h.padding.bottom,h.padding.left,h.padding.right,h.padding.top,h.width]);return v(B.Provider,{value:h,children:G("svg",{id:f,width:t,height:n,viewBox:`${u.x} ${u.y} ${u.width} ${u.height}`,children:[v(Jn,{...s}),i]})})},ne=()=>{const{padding:t,atomInstance:n,width:r}=S.useContext(B),[e]=W(n),{yAxis:i}=e,o=Wt.useRef(null);return S.useEffect(()=>{o.current&&i.scale&&(T(o.current).call(zt(i.scale).ticks(3).tickSize(-r+t.left+t.right+i.size).tickFormat(()=>"")),T(o.current).select(".tick:last-of-type").remove(),T(o.current).select(".domain").remove(),T(o.current).selectAll(".tick line").attr("fill","none").attr("stroke","var(--inactive-color)").attr("stroke-dasharray","5 5"))},[t.left,t.right,r,i.scale,i.size]),v("g",{className:"cartesian-grid",ref:o,transform:`translate(${t.left+e.yAxis.size},${t.top})`})},re=()=>G(te,{width:500,height:400,data:[{name:"A",value1:1,value2:1},{name:"B",value1:1,value2:2},{name:"C",value1:2,value2:1}],padding:{left:30,bottom:30,top:30,right:30},children:[v(Qn,{dataKey:"name"}),v(Un,{}),G("linearGradient",{id:"gradient1",x1:"0",y1:"0",x2:"0",y2:"1",children:[v("stop",{offset:"0%",stopColor:"#82ca9d",stopOpacity:.5}),v("stop",{offset:"100%",stopColor:"#82ca9d",stopOpacity:.01})]}),G("linearGradient",{id:"gradient2",x1:"0",y1:"0",x2:"0",y2:"1",children:[v("stop",{offset:"0%",stopColor:"#8884d8",stopOpacity:.5}),v("stop",{offset:"100%",stopColor:"#8884d8",stopOpacity:.01})]}),v($t,{fill:"url(#gradient1)",dataKey:"value1"}),v($t,{fill:"url(#gradient2)",dataKey:"value2"}),v(ne,{})]});export{re as default};
