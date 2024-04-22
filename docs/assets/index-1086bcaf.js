import{af as ae,ag as se,ah as oe,ai as le,r as o,a1 as ce,a3 as ie,a8 as de,ac as ue,K as $,aj as fe,Q as he,ak as pe,a9 as me,al as ge,am as ye,an as xe,ao as ve,j as a,s as Se,ap as M,aq as j,ar as y,as as I,h as C,at as Y,g as A,S as O,B as N,au as Ce,a as w,av as je,aw as Te}from"./index-c3ce6ac5.js";import{g as De}from"./getEthPrice-67484e9d.js";import{i as H,d as V,a as Ee,g as ke}from"./main-4b572464.js";import{T as P}from"./index-6dfe59fc.js";let be=function(t){ae(r,t);var e=se(r);function r(){var n;return oe(this,r),n=e.apply(this,arguments),n.state={error:void 0,info:{componentStack:""}},n}return le(r,[{key:"componentDidCatch",value:function(s,l){this.setState({error:s,info:l})}},{key:"render",value:function(){const{message:s,description:l,children:c}=this.props,{error:u,info:i}=this.state,d=i&&i.componentStack?i.componentStack:null,h=typeof s>"u"?(u||"").toString():s,p=typeof l>"u"?d:l;return u?o.createElement(L,{type:"error",message:h,description:o.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},p)}):c}}]),r}(o.Component);const we=be,E=(t,e,r,n,s)=>({backgroundColor:t,border:`${n.lineWidth}px ${n.lineType} ${e}`,[`${s}-icon`]:{color:r}}),$e=t=>{const{componentCls:e,motionDurationSlow:r,marginXS:n,marginSM:s,fontSize:l,fontSizeLG:c,lineHeight:u,borderRadiusLG:i,motionEaseInOutCirc:d,alertIconSizeLG:h,colorText:p,paddingContentVerticalSM:g,alertPaddingHorizontal:f,paddingMD:v,paddingContentHorizontalLG:x}=t;return{[e]:Object.assign(Object.assign({},de(t)),{position:"relative",display:"flex",alignItems:"center",padding:`${g}px ${f}px`,wordWrap:"break-word",borderRadius:i,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:n,lineHeight:0},["&-description"]:{display:"none",fontSize:l,lineHeight:u},"&-message":{color:p},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${r} ${d}, opacity ${r} ${d},
        padding-top ${r} ${d}, padding-bottom ${r} ${d},
        margin-bottom ${r} ${d}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",paddingInline:x,paddingBlock:v,[`${e}-icon`]:{marginInlineEnd:s,fontSize:h,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:n,color:p,fontSize:c},[`${e}-description`]:{display:"block"}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Me=t=>{const{componentCls:e,colorSuccess:r,colorSuccessBorder:n,colorSuccessBg:s,colorWarning:l,colorWarningBorder:c,colorWarningBg:u,colorError:i,colorErrorBorder:d,colorErrorBg:h,colorInfo:p,colorInfoBorder:g,colorInfoBg:f}=t;return{[e]:{"&-success":E(s,n,r,t,e),"&-info":E(f,g,p,t,e),"&-warning":E(u,c,l,t,e),"&-error":Object.assign(Object.assign({},E(h,d,i,t,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},Ie=t=>{const{componentCls:e,iconCls:r,motionDurationMid:n,marginXS:s,fontSizeIcon:l,colorIcon:c,colorIconHover:u}=t;return{[e]:{["&-action"]:{marginInlineStart:s},[`${e}-close-icon`]:{marginInlineStart:s,padding:0,overflow:"hidden",fontSize:l,lineHeight:`${l}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${r}-close`]:{color:c,transition:`color ${n}`,"&:hover":{color:u}}},"&-close-text":{color:c,transition:`color ${n}`,"&:hover":{color:u}}}}},Ye=t=>[$e(t),Me(t),Ie(t)],Ae=ce("Alert",t=>{const{fontSizeHeading3:e}=t,r=ie(t,{alertIconSizeLG:e,alertPaddingHorizontal:12});return[Ye(r)]});var Le=globalThis&&globalThis.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r};const Fe={success:ge,info:ye,error:xe,warning:ve},Re=t=>{const{icon:e,prefixCls:r,type:n}=t,s=Fe[n]||null;return e?pe(e,o.createElement("span",{className:`${r}-icon`},e),()=>({className:$(`${r}-icon`,{[e.props.className]:e.props.className})})):o.createElement(s,{className:`${r}-icon`})},Be=t=>{const{isClosable:e,closeText:r,prefixCls:n,closeIcon:s,handleClose:l}=t;return e?o.createElement("button",{type:"button",onClick:l,className:`${n}-close-icon`,tabIndex:0},r?o.createElement("span",{className:`${n}-close-text`},r):s):null},_=t=>{var{description:e,prefixCls:r,message:n,banner:s,className:l,rootClassName:c,style:u,onMouseEnter:i,onMouseLeave:d,onClick:h,afterClose:p,showIcon:g,closable:f,closeText:v,closeIcon:x=o.createElement(me,null),action:F}=t,T=Le(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[R,G]=o.useState(!1),W=o.useRef(),{getPrefixCls:X,direction:K}=o.useContext(ue),m=X("alert",r),[U,q]=Ae(m),J=S=>{var D;G(!0),(D=T.onClose)===null||D===void 0||D.call(T,S)},Q=()=>{const{type:S}=T;return S!==void 0?S:s?"warning":"info"},ee=v?!0:f,B=Q(),z=s&&g===void 0?!0:g,te=$(m,`${m}-${B}`,{[`${m}-with-description`]:!!e,[`${m}-no-icon`]:!z,[`${m}-banner`]:!!s,[`${m}-rtl`]:K==="rtl"},l,c,q),re=fe(T);return U(o.createElement(he,{visible:!R,motionName:`${m}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:S=>({maxHeight:S.offsetHeight}),onLeaveEnd:p},S=>{let{className:D,style:ne}=S;return o.createElement("div",Object.assign({ref:W,"data-show":!R,className:$(te,D),style:Object.assign(Object.assign({},u),ne),onMouseEnter:i,onMouseLeave:d,onClick:h,role:"alert"},re),z?o.createElement(Re,{description:e,icon:T.icon,prefixCls:m,type:B}):null,o.createElement("div",{className:`${m}-content`},n?o.createElement("div",{className:`${m}-message`},n):null,e?o.createElement("div",{className:`${m}-description`},e):null),F?o.createElement("div",{className:`${m}-action`},F):null,o.createElement(Be,{isClosable:!!ee,closeText:v,prefixCls:m,closeIcon:x,handleClose:J}))}))};_.ErrorBoundary=we;const L=_,Z=(t,e)=>{let r=y(t).startOf("day");const n=y(e).startOf("day");let s=[];for(;r.isSameOrBefore(n);)s.push({date:r.format("YYYY-MM-DD"),value:0}),r=r.add(1,"days");return s},ze=({transactions:t,ethPrice:e})=>{const r=o.useRef(null);return o.useEffect(()=>{if(t.length===0)return;const n=t.sort((d,h)=>y(d.receivedAt).isAfter(h.receivedAt)?1:-1),s=n[0].receivedAt,l=n[n.length-1].receivedAt,c=Z(s,l);let u={};t.forEach(d=>{const h=y(d.receivedAt).format("YYYY-MM-DD");u[h]={date:h,value:parseInt(d.fee,16)/10**18*e}});let i=c.map(d=>u[d.date]||d);return r.current&&new I(r.current,{data:i,xField:"date",yField:"value",slider:{start:0,end:1,formatter:h=>y(h).format("YYYY-MM-DD")}}).render(),()=>{r.current&&(r.current.innerHTML="")}},[t]),a.jsx(C,{title:"每日Gas消耗统计(U)",children:a.jsx("div",{ref:r,style:{height:300}})})},Oe=({transactions:t,ethPrice:e})=>{const r=o.useRef(null);return o.useEffect(()=>{if(t.length===0)return;let n=[],s=0;return t.forEach(l=>{s+=parseInt(l.fee,16)/10**18*e,n.push({date:y(l.receivedAt).format("YYYY-MM-DD"),value:s})}),r.current&&new Y(r.current,{data:n,xField:"date",yField:"value",smooth:!0,isStack:!0,slider:{start:0,end:1,formatter:c=>y(c).format("YYYY-MM-DD")},label:{formatter:c=>c.value.toFixed(2)}}).render(),()=>{r.current&&(r.current.innerHTML="")}},[t]),a.jsx(C,{title:"累计Gas消耗统计(U)",children:a.jsx("div",{ref:r,style:{height:300}})})},Ne=({transactions:t})=>{const e=o.useRef(null);return o.useEffect(()=>{if(t.length===0)return;const r=t.sort((i,d)=>y(i.receivedAt).isAfter(d.receivedAt)?1:-1),n=r[0].receivedAt,s=r[r.length-1].receivedAt,l=Z(n,s);let c={};t.forEach(i=>{const d=y(i.receivedAt).format("YYYY-MM-DD");c[d]?c[d].value+=1:c[d]={date:d,value:1}});let u=l.map(i=>c[i.date]||i);return e.current&&new I(e.current,{data:u,xField:"date",yField:"value",slider:{start:0,end:1,formatter:d=>y(d).format("YYYY-MM-DD")}}).render(),()=>{e.current&&(e.current.innerHTML="")}},[t]),a.jsx(C,{title:"每日交易Tx",children:a.jsx("div",{ref:e,style:{height:300}})})},He=({transaction:t})=>{const e=t.transfers.sort((r,n)=>parseInt(n.amount)*10**-n.token.decimals*n.token.price-parseInt(r.amount)*10**-r.token.decimals*r.token.price);return e.length===0?0:parseInt(e[0].amount)*10**-e[0].token.decimals*e[0].token.price},Ve=({transactions:t})=>{const e=o.useRef(null);return o.useEffect(()=>{if(t.length===0)return;let r={},n=0;t.forEach(l=>{const c=y(l.receivedAt).format("YYYY-MM-DD"),u=He({transaction:l});n+=u,r[c]={date:c,value:n}});let s=Object.values(r);return e.current&&new Y(e.current,{data:s,xField:"date",yField:"value",smooth:!0,isStack:!0,slider:{start:0,end:1,formatter:c=>y(c).format("YYYY-MM-DD")},label:{formatter:c=>c.value.toFixed(2)}}).render(),()=>{e.current&&(e.current.innerHTML="")}},[t]),a.jsx(C,{title:"累计交易量(U)",children:a.jsx("div",{ref:e,style:{height:300}})})},Pe=async()=>(await H(V),await Ee("zkTransactions")||[]),_e=async t=>{await H(V);const e=await ke("zkTransactions",t);return(e.data?JSON.parse(e.data):[])||[]},Ze=()=>{const[t,e]=o.useState([]),[r,n]=o.useState(""),[s,l]=o.useState([]),[c,u]=o.useState(0);return o.useEffect(()=>{De().then(i=>{u(Number(i))})},[]),o.useEffect(()=>{Pe().then(i=>{e(i)})},[]),a.jsxs("div",{children:[a.jsx(Se,{defaultValue:"选择地址展示数据.",style:{width:"100%",marginTop:"20px"},onChange:i=>{n(i),_e(i).then(d=>{l(d)})},notFoundContent:"暂无数据,请先刷新您的zkSync获取数据",options:t.map(i=>({value:i,label:i}))}),a.jsxs(M,{gutter:16,style:{marginTop:20},children:[a.jsx(j,{xs:24,md:12,children:r&&a.jsx(ze,{transactions:s,ethPrice:c})}),a.jsx(j,{xs:24,md:12,children:r&&a.jsx(Oe,{transactions:s,ethPrice:c})}),a.jsx(j,{xs:24,md:12,children:r&&a.jsx(Ne,{transactions:s})}),a.jsx(j,{xs:24,md:12,children:r&&a.jsx(Ve,{transactions:s})})]})]})},{Text:k}=P,Ge=async()=>{const t="https://api.llama.fi/v2/historicalChainTvl/zkSync%20Era";return(await w.get(t)).data},We=({data:t,nowTvl:e,change24h:r,onRefresh:n})=>{const s=o.useRef(null);return o.useEffect(()=>{if(t.length===0)return;let l=[];t.forEach(u=>{l.push({date:new Date(u.date*1e3).toLocaleDateString(),tvl:u.tvl/1e6})});const c=Math.max(...l.map(u=>u.tvl));return s.current&&new Y(s.current,{data:l,xField:"date",yField:"tvl",smooth:!0,isStack:!0,label:{content:i=>`${i.tvl.toFixed(0)}`},slider:{start:0,end:1,formatter:i=>y(i).format("YYYY-MM-DD")},meta:{tvl:{alias:"TVL(M)",min:0,max:c*1.1}}}).render(),()=>{s.current&&(s.current.innerHTML="")}},[t]),a.jsx(C,{title:"TVL(M)",bordered:!0,extra:a.jsxs(O,{children:[a.jsx(k,{type:"secondary",children:"Now "}),a.jsxs(k,{children:[Number(e/1e6).toFixed(2),"M"]}),a.jsx(k,{type:"secondary",children:"24h "}),a.jsx(k,{type:r.includes("-")?"danger":"success",children:r}),a.jsx(N,{type:"primary",onClick:n,children:"Refresh"})]}),children:a.jsx("div",{ref:s,style:{height:500}})})},Xe=({data:t})=>{const e=o.useRef(null);return o.useEffect(()=>{if(t.length!==0)return e.current&&new Ce(e.current,{data:t,xField:"tvl",yField:"name",yAxis:{label:{formatter:n=>`${n}`}},label:{position:"right",formatter:n=>`${n.tvl.toFixed(2)}`},meta:{tvl:{alias:"TVL(M)",max:Math.max(...t.map(n=>n.tvl))*1.1}}}).render(),()=>{e.current&&(e.current.innerHTML="")}},[t]),a.jsx(C,{title:"Top 30 TVL(M)",children:a.jsx("div",{ref:e,style:{height:500}})})},Ke=async()=>{const t="https://api.llama.fi/protocols",e=await w.get(t);let r=[];return e.data.forEach(n=>{n.chains.includes("zkSync Era")&&n.category!=="CEX"&&r.push({name:n.name,tvl:n.chainTvls["zkSync Era"]/1e6})}),r.sort((n,s)=>s.tvl-n.tvl),r=r.slice(0,30),r},Ue=()=>{const[t,e]=o.useState([]),[r,n]=o.useState(null),[s,l]=o.useState(null),[c,u]=o.useState([]),[i,d]=o.useState(!1),[h,p]=o.useState(null),g=async()=>{d(!0);try{const f=await Ge();e(f);const v=(f[f.length-1].tvl-f[f.length-2].tvl)/f[f.length-2].tvl*100;n(`${v.toFixed(2)}%`),l(f[f.length-1].tvl);const x=await Ke();u(x)}catch(f){console.error("Failed to fetch data: ",f),p("Failed to fetch data.")}d(!1)};return o.useEffect(()=>{g()},[]),h?a.jsxs("div",{children:["Error: ",h]}):a.jsx("div",{children:a.jsx(A,{spinning:i,children:a.jsxs(M,{gutter:16,style:{marginTop:20},children:[a.jsx(j,{xs:24,md:12,children:t.length!==0&&a.jsx(We,{data:t,nowTvl:s,change24h:r,onRefresh:g})}),a.jsx(j,{xs:24,md:12,children:c.length!==0&&a.jsx(Xe,{data:c})})]})})})},qe=({data:t,title:e})=>{const r=o.useRef(null);return o.useEffect(()=>(r.current&&new je(r.current,{data:t,angleField:"value",colorField:"type",radius:.8,label:{type:"inner",offset:"-30%",content:"{value}",style:{textAlign:"center",fontSize:14}},interactions:[{type:"element-active"}],legend:{layout:"horizontal",position:"bottom"}}).render(),()=>{r.current&&(r.current.innerHTML="")}),[t]),a.jsx(C,{title:e,children:a.jsx("div",{ref:r,style:{height:"300px"}})})},Je=()=>{const t=[{key:"lastHourlyTxs",title:"过去1小数Tx"},{key:"currentDayTxs",title:"当天Tx"},{key:"prevDayTxs",title:"前一天Tx"},{key:"dayBeforeLastTxs",title:"前两天Tx"},{key:"weeklyTxs",title:"一周Tx"},{key:"monthlyTxs",title:"一月Tx"}],[e,r]=o.useState([]),[n,s]=o.useState(!1),[l,c]=o.useState(null);return o.useEffect(()=>{const u="https://bridges.llama.fi/bridge/26";(async()=>{s(!0);try{const h=(await w.get(u)).data.chainBreakdown["zkSync Era"];t.forEach(p=>{r(g=>[...g,{title:p.title,value:[{type:"L2 Withdrawal To L1",value:h[p.key].deposits},{type:"L1 Deposit To L2",value:h[p.key].withdrawals}]}])}),c(null)}catch(d){console.error("Error fetching data: ",d),c("Error fetching data.")}s(!1)})()},[]),l?a.jsx(L,{message:"Error",description:l,type:"error",showIcon:!0}):a.jsx("div",{children:a.jsx(A,{spinning:n,children:a.jsx(M,{gutter:[16,16],children:e.map((u,i)=>a.jsx(j,{xs:24,sm:12,md:6,children:a.jsx(qe,{data:u.value,title:u.title})},i))})})})},{Text:b}=P,Qe=({data:t,change_7d:e,change_1d:r,onRefresh:n,isLoading:s})=>{const l=o.useRef(null);return o.useEffect(()=>(l.current&&new I(l.current,{data:t,xField:"date",yField:"volume",slider:{start:0,end:1}}).render(),()=>{l.current&&(l.current.innerHTML="")}),[t]),a.jsx(A,{spinning:s,size:"large",children:a.jsx(C,{title:"Vol(M)",extra:a.jsxs(O,{children:[a.jsx(N,{onClick:n,loading:s,children:"Refresh"}),a.jsx(b,{type:"secondary",children:"1d: "}),a.jsxs(b,{type:r<0?"danger":"success",children:[r,"%"]}),a.jsx(b,{type:"secondary",children:"7d: "}),a.jsxs(b,{type:e<0?"danger":"success",children:[e,"%"]})]}),children:a.jsx("div",{ref:l,style:{height:500}})})})},et=()=>{const[t,e]=o.useState([]),[r,n]=o.useState(0),[s,l]=o.useState(0),[c,u]=o.useState(!1),[i,d]=o.useState(null),h="https://api.llama.fi/overview/dexs/zkSync%20Era?excludeTotalDataChart=false&excludeTotalDataChartBreakdown=true&dataType=dailyVolume",p=async()=>{u(!0);try{const f=await w.get(h);let v=[];for(let x=0;x<f.data.totalDataChart.length;x++)v.push({date:new Date(Number(f.data.totalDataChart[x][0])*1e3).toLocaleDateString(),volume:f.data.totalDataChart[x][1]/1e6});e(v),n(f.data.change_1d),l(f.data.change_7d)}catch{d("Error fetching data.")}u(!1)},g=()=>{p()};return o.useEffect(()=>{p()},[]),i?a.jsx(L,{message:"Error",description:i,type:"error",showIcon:!0}):a.jsx(a.Fragment,{children:t.length>0&&a.jsx(Qe,{data:t,change_1d:r,change_7d:s,onRefresh:g,isLoading:c})})},st=()=>{const t=[{label:"个人地址详情",key:"ZksyncMyAddress",children:a.jsx(Ze,{})},{label:"zkSync Tvl",key:"ZksyncTvl",children:a.jsx(Ue,{})},{label:"zkSync Bridge",key:"ZksyncBridge",children:a.jsx(Je,{})},{label:"zkSync Vol",key:"ZksyncVol",children:a.jsx(et,{})}];return a.jsx("div",{style:{padding:"0 20px"},children:a.jsx(Te,{defaultActiveKey:"ZksyncTvl",centered:!0,items:t})})};export{st as default};
