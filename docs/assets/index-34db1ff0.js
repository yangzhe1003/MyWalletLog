import{r as i,_ as be,x as nt,C as Oe,p as Ce}from"./index-04b3bc52.js";import{A as ot,d as ee,x as we,y as it,g as rt,c as te,z as lt,b as st,k as Te,D as Z,T as le,F as at,o as $e,u as ct,G as ye,l as dt,E as pt,H as ut}from"./EditOutlined-e142afc2.js";import{c as ft,C as gt}from"./index-f96e1400.js";var mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const bt=mt;var je=function(n,o){return i.createElement(ot,be(be({},n),{},{ref:o,icon:bt}))};je.displayName="EnterOutlined";const yt=i.forwardRef(je);var vt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const ht={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Et=i.forwardRef((e,n)=>{const o=f=>{const{keyCode:a}=f;a===ee.ENTER&&f.preventDefault()},t=f=>{const{keyCode:a}=f,{onClick:S}=e;a===ee.ENTER&&S&&S()},{style:r,noStyle:u,disabled:m}=e,E=vt(e,["style","noStyle","disabled"]);let p={};return u||(p=Object.assign({},ht)),m&&(p.pointerEvents="none"),p=Object.assign(Object.assign({},p),r),i.createElement("div",Object.assign({role:"button",tabIndex:0,ref:n},E,{onKeyDown:o,onKeyUp:t,style:p}))}),ve=Et,St=(e,n,o,t)=>{const{sizeMarginHeadingVerticalEnd:r,fontWeightStrong:u}=t;return{marginBottom:r,color:o,fontWeight:u,fontSize:e,lineHeight:n}},xt=e=>{const n=[1,2,3,4,5],o={};return n.forEach(t=>{o[`
      h${t}&,
      div&-h${t},
      div&-h${t} > textarea,
      h${t}
    `]=St(e[`fontSizeHeading${t}`],e[`lineHeightHeading${t}`],e.colorTextHeading,e)}),o},Ot=e=>{const{componentCls:n}=e;return{"a&, a":Object.assign(Object.assign({},we(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},Ct=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:nt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),wt=e=>{const{componentCls:n}=e,t=it(e).inputPaddingVertical+1;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-t,marginBottom:`calc(1em - ${t}px)`},[`${n}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Tt=e=>({"&-copy-success":{[`
    &,
    &:hover,
    &:focus`]:{color:e.colorSuccess}}}),$t=()=>({[`
  a&-ellipsis,
  span&-ellipsis
  `]:{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),jt=e=>{const{componentCls:n,sizeMarginHeadingVerticalStart:o}=e;return{[n]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${n}-secondary`]:{color:e.colorTextDescription},[`&${n}-success`]:{color:e.colorSuccess},[`&${n}-warning`]:{color:e.colorWarning},[`&${n}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${n}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},[`
        div&,
        p
      `]:{marginBottom:"1em"}},xt(e)),{[`
      & + h1${n},
      & + h2${n},
      & + h3${n},
      & + h4${n},
      & + h5${n}
      `]:{marginTop:o},[`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]:{[`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]:{marginTop:o}}}),Ct(e)),Ot(e)),{[`
        ${n}-expand,
        ${n}-edit,
        ${n}-copy
      `]:Object.assign(Object.assign({},we(e)),{marginInlineStart:e.marginXXS})}),wt(e)),Tt(e)),$t()),{"&-rtl":{direction:"rtl"}})}},Ie=rt("Typography",e=>[jt(e)],{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"}),It=e=>{let{prefixCls:n,"aria-label":o,className:t,style:r,direction:u,maxLength:m,autoSize:E=!0,value:p,onSave:f,onCancel:a,onEnd:S,component:g,enterIcon:$=i.createElement(yt,null)}=e;const h=i.useRef(null),C=i.useRef(!1),N=i.useRef(),[R,w]=i.useState(p);i.useEffect(()=>{w(p)},[p]),i.useEffect(()=>{if(h.current&&h.current.resizableTextArea){const{textArea:O}=h.current.resizableTextArea;O.focus();const{length:j}=O.value;O.setSelectionRange(j,j)}},[]);const c=O=>{let{target:j}=O;w(j.value.replace(/[\n\r]/g,""))},D=()=>{C.current=!0},B=()=>{C.current=!1},b=O=>{let{keyCode:j}=O;C.current||(N.current=j)},A=()=>{f(R.trim())},y=O=>{let{keyCode:j,ctrlKey:oe,altKey:V,metaKey:z,shiftKey:K}=O;N.current===j&&!C.current&&!oe&&!V&&!z&&!K&&(j===ee.ENTER?(A(),S==null||S()):j===ee.ESC&&a())},d=()=>{A()},T=g?`${n}-${g}`:"",[W,k]=Ie(n),L=te(n,`${n}-edit-content`,{[`${n}-rtl`]:u==="rtl"},t,T,k);return W(i.createElement("div",{className:L,style:r},i.createElement(lt,{ref:h,maxLength:m,value:R,onChange:c,onKeyDown:b,onKeyUp:y,onCompositionStart:D,onCompositionEnd:B,onBlur:d,"aria-label":o,rows:1,autoSize:E}),$!==null?st($,{className:`${n}-edit-content-confirm`}):null))},Rt=It;function ie(e,n){return i.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},n),o&&typeof e=="object"?e:null)]},[e])}const _t=(e,n)=>{const o=i.useRef(!1);i.useEffect(()=>{o.current?e():o.current=!0},n)},Pt=_t;var Lt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const Nt=i.forwardRef((e,n)=>{var{prefixCls:o,component:t="article",className:r,rootClassName:u,setContentRef:m,children:E,direction:p}=e,f=Lt(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]);const{getPrefixCls:a,direction:S}=i.useContext(Oe),g=p??S;let $=n;m&&($=Te(n,m));const h=a("typography",o),[C,N]=Ie(h),R=te(h,{[`${h}-rtl`]:g==="rtl"},r,u,N);return C(i.createElement(t,Object.assign({className:R,ref:$},f),E))}),Re=Nt;function _e(e){const n=typeof e;return n==="string"||n==="number"}function kt(e){let n=0;return e.forEach(o=>{_e(o)?n+=String(o).length:n+=1}),n}function he(e,n){let o=0;const t=[];for(let r=0;r<e.length;r+=1){if(o===n)return t;const u=e[r],E=_e(u)?String(u).length:1,p=o+E;if(p>n){const f=n-o;return t.push(String(u).slice(0,f)),t}t.push(u),o=p}return e}const zt=0,Q=1,Ee=2,re=3,Se=4,Ht=e=>{let{enabledMeasure:n,children:o,text:t,width:r,fontSize:u,rows:m,onEllipsis:E}=e;const[[p,f,a],S]=i.useState([0,0,0]),[g,$]=i.useState(zt),[h,C]=i.useState(0),N=i.useRef(null),R=i.useRef(null),w=i.useMemo(()=>Ce(t),[t]),c=i.useMemo(()=>kt(w),[w]),D=i.useMemo(()=>!n||g!==re?o(w,!1):o(he(w,f),f<c),[n,g,o,w,f,c]);Z(()=>{n&&r&&u&&c&&($(Q),S([0,Math.ceil(c/2),c]))},[n,r,u,t,c,m]),Z(()=>{var y;g===Q&&C(((y=N.current)===null||y===void 0?void 0:y.offsetHeight)||0)},[g]),Z(()=>{var y,d;if(h){if(g===Q){const T=((y=R.current)===null||y===void 0?void 0:y.offsetHeight)||0,W=m*h;T<=W?($(Se),E(!1)):$(Ee)}else if(g===Ee)if(p!==a){const T=((d=R.current)===null||d===void 0?void 0:d.offsetHeight)||0,W=m*h;let k=p,L=a;p===a-1?L=p:T<=W?k=f:L=f;const O=Math.ceil((k+L)/2);S([k,O,L])}else $(re),E(!0)}},[g,p,a,m,h]);const B={width:r,whiteSpace:"normal",margin:0,padding:0},b=(y,d,T)=>i.createElement("span",{"aria-hidden":!0,ref:d,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.floor(u/2)*2},T)},y),A=(y,d)=>{const T=he(w,y);return b(o(T,!0),d,B)};return i.createElement(i.Fragment,null,D,n&&g!==re&&g!==Se&&i.createElement(i.Fragment,null,b("lg",N,{wordBreak:"keep-all",whiteSpace:"nowrap"}),g===Q?b(o(w,!1),R,B):A(f,R)))},Mt=Ht,Dt=e=>{let{enabledEllipsis:n,isEllipsis:o,children:t,tooltipProps:r}=e;return!(r!=null&&r.title)||!n?t:i.createElement(le,Object.assign({open:o?void 0:!1},r),t)},Bt=Dt;var Wt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};function At(e,n){let{mark:o,code:t,underline:r,delete:u,strong:m,keyboard:E,italic:p}=e,f=n;function a(S,g){g&&(f=i.createElement(S,{},f))}return a("strong",m),a("u",r),a("del",u),a("code",t),a("mark",o),a("kbd",E),a("i",p),f}function Y(e,n,o){return e===!0||e===void 0?n:e||o&&n}function xe(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const Kt="...",Ft=i.forwardRef((e,n)=>{var o,t,r;const{prefixCls:u,className:m,style:E,type:p,disabled:f,children:a,ellipsis:S,editable:g,copyable:$,component:h,title:C}=e,N=Wt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:R,direction:w}=i.useContext(Oe),[c]=at("Text"),D=i.useRef(null),B=i.useRef(null),b=R("typography",u),A=$e(N,["mark","code","delete","underline","strong","keyboard","italic"]),[y,d]=ie(g),[T,W]=ct(!1,{value:d.editing}),{triggerType:k=["icon"]}=d,L=l=>{var s;l&&((s=d.onStart)===null||s===void 0||s.call(d)),W(l)};Pt(()=>{var l;T||(l=B.current)===null||l===void 0||l.focus()},[T]);const O=l=>{l==null||l.preventDefault(),L(!0)},j=l=>{var s;(s=d.onChange)===null||s===void 0||s.call(d,l),L(!1)},oe=()=>{var l;(l=d.onCancel)===null||l===void 0||l.call(d),L(!1)},[V,z]=ie($),[K,se]=i.useState(!1),ae=i.useRef(),ce={};z.format&&(ce.format=z.format);const de=()=>{window.clearTimeout(ae.current)},Pe=l=>{var s;l==null||l.preventDefault(),l==null||l.stopPropagation(),ft(z.text||String(a)||"",ce),se(!0),de(),ae.current=window.setTimeout(()=>{se(!1)},3e3),(s=z.onCopy)===null||s===void 0||s.call(z,l)};i.useEffect(()=>de,[]);const[pe,Le]=i.useState(!1),[ue,Ne]=i.useState(!1),[ke,ze]=i.useState(!1),[fe,He]=i.useState(!1),[ge,Me]=i.useState(!1),[De,Be]=i.useState(!0),[H,v]=ie(S,{expandable:!1}),_=H&&!ke,{rows:F=1}=v,X=i.useMemo(()=>!_||v.suffix!==void 0||v.onEllipsis||v.expandable||y||V,[_,v,y,V]);Z(()=>{H&&!X&&(Le(ye("webkitLineClamp")),Ne(ye("textOverflow")))},[X,H]);const P=i.useMemo(()=>X?!1:F===1?ue:pe,[X,ue,pe]),me=_&&(P?ge:fe),We=_&&F===1&&P,J=_&&F>1&&P,Ae=l=>{var s;ze(!0),(s=v.onExpand)===null||s===void 0||s.call(v,l)},[Ke,Fe]=i.useState(0),[Ve,Ue]=i.useState(0),Xe=(l,s)=>{let{offsetWidth:x}=l;var I;Fe(x),Ue(parseInt((I=window.getComputedStyle)===null||I===void 0?void 0:I.call(window,s).fontSize,10)||0)},Je=l=>{var s;He(l),fe!==l&&((s=v.onEllipsis)===null||s===void 0||s.call(v,l))};i.useEffect(()=>{const l=D.current;if(H&&P&&l){const s=J?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;ge!==s&&Me(s)}},[H,P,a,J,De]),i.useEffect(()=>{const l=D.current;if(typeof IntersectionObserver>"u"||!l||!P||!_)return;const s=new IntersectionObserver(()=>{Be(!!l.offsetParent)});return s.observe(l),()=>{s.disconnect()}},[P,_]);let M={};v.tooltip===!0?M={title:(o=d.text)!==null&&o!==void 0?o:a}:i.isValidElement(v.tooltip)?M={title:v.tooltip}:typeof v.tooltip=="object"?M=Object.assign({title:(t=d.text)!==null&&t!==void 0?t:a},v.tooltip):M={title:v.tooltip};const q=i.useMemo(()=>{const l=s=>["string","number"].includes(typeof s);if(!(!H||P)){if(l(d.text))return d.text;if(l(a))return a;if(l(C))return C;if(l(M.title))return M.title}},[H,P,C,M.title,me]);if(T)return i.createElement(Rt,{value:(r=d.text)!==null&&r!==void 0?r:typeof a=="string"?a:"",onSave:j,onCancel:oe,onEnd:d.onEnd,prefixCls:b,className:m,style:E,direction:w,component:h,maxLength:d.maxLength,autoSize:d.autoSize,enterIcon:d.enterIcon});const qe=()=>{const{expandable:l,symbol:s}=v;if(!l)return null;let x;return s?x=s:x=c==null?void 0:c.expand,i.createElement("a",{key:"expand",className:`${b}-expand`,onClick:Ae,"aria-label":c==null?void 0:c.expand},x)},Ge=()=>{if(!y)return;const{icon:l,tooltip:s}=d,x=Ce(s)[0]||(c==null?void 0:c.edit),I=typeof x=="string"?x:"";return k.includes("icon")?i.createElement(le,{key:"edit",title:s===!1?"":x},i.createElement(ve,{ref:B,className:`${b}-edit`,onClick:O,"aria-label":I},l||i.createElement(pt,{role:"button"}))):null},Qe=()=>{if(!V)return;const{tooltips:l,icon:s}=z,x=xe(l),I=xe(s),G=K?Y(x[1],c==null?void 0:c.copied):Y(x[0],c==null?void 0:c.copy),et=K?c==null?void 0:c.copied:c==null?void 0:c.copy,tt=typeof G=="string"?G:et;return i.createElement(le,{key:"copy",title:G},i.createElement(ve,{className:te(`${b}-copy`,K&&`${b}-copy-success`),onClick:Pe,"aria-label":tt},K?Y(I[1],i.createElement(ut,null),!0):Y(I[0],i.createElement(gt,null),!0)))},Ye=l=>[l&&qe(),Ge(),Qe()],Ze=l=>[l&&i.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Kt),v.suffix,Ye(l)];return i.createElement(dt,{onResize:Xe,disabled:!_||P},l=>i.createElement(Bt,{tooltipProps:M,enabledEllipsis:_,isEllipsis:me},i.createElement(Re,Object.assign({className:te({[`${b}-${p}`]:p,[`${b}-disabled`]:f,[`${b}-ellipsis`]:H,[`${b}-single-line`]:_&&F===1,[`${b}-ellipsis-single-line`]:We,[`${b}-ellipsis-multiple-line`]:J},m),prefixCls:u,style:Object.assign(Object.assign({},E),{WebkitLineClamp:J?F:void 0}),component:h,ref:Te(l,D,n),direction:w,onClick:k.includes("text")?O:void 0,"aria-label":q==null?void 0:q.toString(),title:C},A),i.createElement(Mt,{enabledMeasure:_&&!P,text:a,rows:F,width:Ke,fontSize:Ve,onEllipsis:Je},(s,x)=>{let I=s;return s.length&&x&&q&&(I=i.createElement("span",{key:"show-content","aria-hidden":!0},I)),At(e,i.createElement(i.Fragment,null,I,Ze(x)))}))))}),ne=Ft;var Vt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const Ut=i.forwardRef((e,n)=>{var{ellipsis:o,rel:t}=e,r=Vt(e,["ellipsis","rel"]);const u=Object.assign(Object.assign({},r),{rel:t===void 0&&r.target==="_blank"?"noopener noreferrer":t});return delete u.navigate,i.createElement(ne,Object.assign({},u,{ref:n,ellipsis:!!o,component:"a"}))}),Xt=Ut,Jt=i.forwardRef((e,n)=>i.createElement(ne,Object.assign({ref:n},e,{component:"div"}))),qt=Jt;var Gt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const Qt=(e,n)=>{var{ellipsis:o}=e,t=Gt(e,["ellipsis"]);const r=i.useMemo(()=>o&&typeof o=="object"?$e(o,["expandable","rows"]):o,[o]);return i.createElement(ne,Object.assign({ref:n},t,{ellipsis:r,component:"span"}))},Yt=i.forwardRef(Qt);var Zt=globalThis&&globalThis.__rest||function(e,n){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(o[t[r]]=e[t[r]]);return o};const en=[1,2,3,4,5],tn=i.forwardRef((e,n)=>{const{level:o=1}=e,t=Zt(e,["level"]);let r;return en.includes(o)?r=`h${o}`:r="h1",i.createElement(ne,Object.assign({ref:n},t,{component:r}))}),nn=tn,U=Re;U.Text=Yt;U.Link=Xt;U.Title=nn;U.Paragraph=qt;const sn=U;export{sn as T};
