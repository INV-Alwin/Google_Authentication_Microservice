module.exports=[99900,a=>{"use strict";let b,c;var d,e=a.i(57850),f=a.i(45056);let g=(0,f.createContext)(null);function h({clientId:a,nonce:b,onScriptLoadSuccess:c,onScriptLoadError:d,children:e}){let h=function(a={}){let{nonce:b,onScriptLoadSuccess:c,onScriptLoadError:d}=a,[e,g]=(0,f.useState)(!1),h=(0,f.useRef)(c);h.current=c;let i=(0,f.useRef)(d);return i.current=d,(0,f.useEffect)(()=>{let a=document.createElement("script");return a.src="https://accounts.google.com/gsi/client",a.async=!0,a.defer=!0,a.nonce=b,a.onload=()=>{var a;g(!0),null==(a=h.current)||a.call(h)},a.onerror=()=>{var a;g(!1),null==(a=i.current)||a.call(i)},document.body.appendChild(a),()=>{document.body.removeChild(a)}},[b]),e}({nonce:b,onScriptLoadSuccess:c,onScriptLoadError:d}),i=(0,f.useMemo)(()=>({clientId:a,scriptLoadedSuccessfully:h}),[a,h]);return f.default.createElement(g.Provider,{value:i},e)}let i={data:""},j=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,k=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,m=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?m(g,f):f+"{"+m(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=m(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=m.p?m.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},n={},o=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+o(a[c]);return b}return a};function p(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let g=o(a),h=n[g]||(n[g]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(g));if(!n[h]){let b=g!==a?a:(a=>{let b,c,d=[{}];for(;b=j.exec(a.replace(k,""));)b[4]?d.shift():b[3]?(c=b[3].replace(l," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(l," ").trim();return d[0]})(a);n[h]=m(e?{["@keyframes "+h]:b}:b,c?"":"."+h)}let i=c&&n.g?n.g:null;return c&&(n.g=n[h]),f=n[h],i?b.data=b.data.replace(i,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),h})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":m(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||i,d.g,d.o,d.k)}p.bind({g:1});let q,r,s,t=p.bind({k:1});function u(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:r&&r()},h),c.o=/ *go\d+/.test(i),h.className=p.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),s&&j[0]&&s(h),q(j,h)}return b?b(e):e}}var v=(a,b)=>"function"==typeof a?a(b):a,w=(b=0,()=>(++b).toString()),x="default",y=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return y(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},z=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},B={},C=(a,b=x)=>{B[b]=y(B[b]||A,a),z.forEach(([a,c])=>{a===b&&c(B[b])})},D=a=>Object.keys(B).forEach(b=>C(a,b)),E=(a=x)=>b=>{C(b,a)},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},G=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||w()}))(b,a,c);return E(e.toasterId||(d=e.id,Object.keys(B).find(a=>B[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},H=(a,b)=>G("blank")(a,b);H.error=G("error"),H.success=G("success"),H.loading=G("loading"),H.custom=G("custom"),H.dismiss=(a,b)=>{let c={type:3,toastId:a};b?E(b)(c):D(c)},H.dismissAll=a=>H.dismiss(void 0,a),H.remove=(a,b)=>{let c={type:4,toastId:a};b?E(b)(c):D(c)},H.removeAll=a=>H.remove(void 0,a),H.promise=(a,b,c)=>{let d=H.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?v(b.success,a):void 0;return e?H.success(e,{id:d,...c,...null==c?void 0:c.success}):H.dismiss(d),a}).catch(a=>{let e=b.error?v(b.error,a):void 0;e?H.error(e,{id:d,...c,...null==c?void 0:c.error}):H.dismiss(d)}),a};var I=1e3,J=t`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,K=t`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,L=t`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,M=u("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${K} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,N=t`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,O=u("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${N} 1s linear infinite;
`,P=t`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Q=t`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,R=u("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${P} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Q} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,S=u("div")`
  position: absolute;
`,T=u("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=t`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,V=u("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${U} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?f.createElement(V,null,b):b:"blank"===c?null:f.createElement(T,null,f.createElement(O,{...d}),"loading"!==c&&f.createElement(S,null,"error"===c?f.createElement(M,{...d}):f.createElement(R,{...d})))},X=u("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Y=u("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Z=f.memo(({toast:a,position:b,style:d,children:e})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${t(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${t(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=f.createElement(W,{toast:a}),i=f.createElement(Y,{...a.ariaProps},v(a.message,a));return f.createElement(X,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof e?e({icon:h,message:i}):f.createElement(f.Fragment,null,h,i))});d=f.createElement,m.p=void 0,q=d,r=void 0,s=void 0;var $=({id:a,className:b,style:c,onHeightUpdate:d,children:e})=>{let g=f.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return f.createElement("div",{ref:g,className:b,style:c},e)},_=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,aa=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:e,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=x)=>{let[c,d]=(0,f.useState)(B[b]||A),e=(0,f.useRef)(B[b]);(0,f.useEffect)(()=>(e.current!==B[b]&&d(B[b]),z.push([b,d]),()=>{let a=z.findIndex(([a])=>a===b);a>-1&&z.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||F[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}})(a,b),e=(0,f.useRef)(new Map).current,g=(0,f.useCallback)((a,b=I)=>{if(e.has(a))return;let c=setTimeout(()=>{e.delete(a),h({type:4,toastId:a})},b);e.set(a,c)},[]);(0,f.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&H.dismiss(c.id);return}return setTimeout(()=>H.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,f.useCallback)(E(b),[b]),i=(0,f.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,f.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,f.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,f.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,f.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=e.get(a.id);b&&(clearTimeout(b),e.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return f.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:e,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return f.createElement($,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?_:"",style:m},"custom"===d.type?v(d.message,d):g?g(d):f.createElement(Z,{toast:d,position:j}))}))};function ab({children:a}){return(0,e.jsx)("html",{lang:"en",children:(0,e.jsxs)("body",{children:[(0,e.jsx)(h,{clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,children:a}),(0,e.jsx)(aa,{})]})})}a.s(["default",()=>ab],99900)}];

//# sourceMappingURL=frontend_app_layout_tsx_c21b6d0f._.js.map