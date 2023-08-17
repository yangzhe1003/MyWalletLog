import{z as B,B as ae,F as re,G as se,r as k,S as q,I as c,M as ie,a4 as z,Q as oe,a5 as ce,O as I,a6 as de,a0 as V,U as $,a1 as U,a7 as le,V as Q,a8 as _e,W as L,N as P,ak as fe,X as W,Z as ue,J as me,$ as ge,a3 as he,a9 as F,ab as pe,al as ye}from"./index-194426f9.js";import{d as G}from"./deleteData-b029f507.js";import{m as Ce}from"./index-32b77c12.js";async function M(i,r,s){const o=await B.post(i,r,{headers:s});let t=[];const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29500};return o.data.data.erc20TransferEvents.edges.forEach(d=>{const{transaction_hash:f,from_address:u,transfer_amount_display:_,transfer_from_address:m,transfer_to_address:T,from_erc20_identifier:y,main_call:j,timestamp:D,__typename:N}=d.node;t.push({transaction_hash:f,from_address:u,transfer_amount_display:_,transfer_from_address:m,transfer_to_address:T,from_erc20_identifier:y,timestamp:D,main_call:j,__typename:N,total_value:a.hasOwnProperty(y)?_*a[y]:0})}),{transfers:t,hasNextPage:o.data.data.erc20TransferEvents.pageInfo.hasNextPage,endCursor:o.data.data.erc20TransferEvents.pageInfo.endCursor}}async function be(i){const r="https://starkscan.stellate.sh/",s={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},o={query:`query ERC20TransferEventsTableQuery(
  $first: Int!
  $after: String
  $input: ERC20TransferEventsInput!
) {
  ...ERC20TransferEventsTablePaginationFragment_erc20TransferEvents_2DAjA4
}

fragment ERC20TransferEventsTablePaginationFragment_erc20TransferEvents_2DAjA4 on Query {
  erc20TransferEvents(first: $first, after: $after, input: $input) {
    edges {
      node {
        id
        ...ERC20TransferEventsTableRowFragment_erc20TransferEvent
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment ERC20TransferEventsTableRowFragment_erc20TransferEvent on ERC20TransferEvent {
  id
  transaction_hash
  from_address
  from_erc20_identifier
  from_contract {
    is_social_verified
    id
  }
  transfer_from_address
  transfer_from_identifier
  transfer_from_contract {
    is_social_verified
    id
  }
  transfer_to_address
  transfer_to_identifier
  transfer_to_contract {
    is_social_verified
    id
  }
  transfer_amount
  transfer_amount_display
  timestamp
  main_call {
    selector_identifier
    id
  }
}
`,variables:{first:100,after:null,input:{transfer_from_or_to_address:i,sort_by:"timestamp",order_by:"desc"}}};let t=[],a=await M(r,o,s);for(t.push(...a.transfers);a.hasNextPage;)o.variables.after=a.endCursor,a=await M(r,o,s),t.push(...a.transfers);return t}async function H(i,r,s){const o=await B.post(i,r,{headers:s});let t=[];return o.data.data.transactions.edges.forEach(a=>{const{actual_fee_display:d,initiator_address:f,initiator_identifier:u,nonce:_,calldata:m,main_calls:T,timestamp:y,transaction_hash:j}=a.node;t.push({actual_fee_display:d,initiator_address:f,initiator_identifier:u,nonce:_,calldata:m,main_calls:T,timestamp:y,transaction_hash:j,transfers:[]})}),{transactions:t,hasNextPage:o.data.data.transactions.pageInfo.hasNextPage,endCursor:o.data.data.transactions.pageInfo.endCursor}}async function xe(i){const r="https://starkscan.stellate.sh/",s={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},o={query:`query TransactionsTableQuery(
  $first: Int!
  $after: String
  $input: TransactionsInput!
) {
  ...TransactionsTablePaginationFragment_transactions_2DAjA4
}

fragment TransactionsTableExpandedItemFragment_transaction on Transaction {
  entry_point_selector_name
  calldata_decoded
  entry_point_selector
  calldata
  initiator_address
  initiator_identifier
 actual_fee
  actual_fee_display
 main_calls {
    selector
    selector_name
    calldata_decoded
    selector_identifier
    calldata
    contract_address
    contract_identifier
    id
  }
}

fragment TransactionsTablePaginationFragment_transactions_2DAjA4 on Query {
  transactions(first: $first, after: $after, input: $input) {
    edges {
      node {
        id
        ...TransactionsTableRowFragment_transaction
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment TransactionsTableRowFragment_transaction on Transaction {
  id
  transaction_hash
  block_number
  transaction_status
  transaction_type
  timestamp
  nonce
 contract_address
  contract_identifier
 sender_address
  sender_identifier
 initiator_address
  initiator_identifier
  initiator {
    is_social_verified
    id
  }
  main_calls {
    selector_identifier
    id
  }
  ...TransactionsTableExpandedItemFragment_transaction
}
`,variables:{first:100,after:null,input:{initiator_address:i,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}};let t=[],a=await H(r,o,s);for(t.push(...a.transactions);a.hasNextPage;)o.variables.after=a.endCursor,a=await H(r,o,s),t.push(...a.transactions);const d=await be(i);return d.forEach(f=>{t.forEach(u=>{f.transaction_hash===u.transaction_hash&&u.transfers.push(f)})}),{transfers:d,transactions:t}}const Y=i=>{const r=new Date(i)*1e3,s=(new Date().getTime()-new Date(r).getTime())/1e3;if(s<60)return Math.round(s)+" 秒前";const o=s/60;if(o<60)return Math.round(o)+" 分前";const t=o/60;if(t<24)return Math.round(t)+" 时前";const a=t/24;return Math.round(a)+" 天前"},Te=async i=>{try{if(!i)return{tx:0,lastTime:"无交易",fee:0};let r=0;i.forEach(a=>{r+=parseFloat(a.actual_fee_display)});const s=i[0].nonce,o=i[0].timestamp,t=Y(o)||"无交易";return{tx:s,lastTime:t,fee:Number(r).toFixed(3)}}catch{return{tx:"-",lastTime:"-",fee:"-"}}};async function ke(i){try{const r="https://starkscan.stellate.sh/",s={query:`query ERC20BalancesByOwnerAddressTableQuery(
  $input: ERC20BalancesByOwnerAddressInput!
) {
  erc20BalancesByOwnerAddress(input: $input) {
    id
    ...ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance
  }
}

fragment ERC20BalancesByOwnerAddressTableRowFragment_erc20Balance on ERC20Balance {
  id
  contract_address
  contract_erc20_identifier
  contract_erc20_contract {
    symbol
    is_social_verified
    icon_url
    id
  }
  balance_display
}
`,variables:{input:{owner_address:i}}},o={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},t=await B.post(r,s,{headers:o});let a={ETH:0,USDT:0,USDC:0,DAI:0,WBTC:0};return t.data.data.erc20BalancesByOwnerAddress.forEach(d=>{d.contract_address==="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"?a.ETH=Number(parseFloat(d.balance_display)).toFixed(3):d.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"?a.USDT=Number(parseFloat(d.balance_display)).toFixed(3):d.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"?a.USDC=Number(parseFloat(d.balance_display)).toFixed(3):d.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"?a.DAI=Number(parseFloat(d.balance_display)).toFixed(3):d.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(a.WBTC=Number(parseFloat(d.balance_display)).toFixed(3))}),a}catch(r){return console.log(r),{ETH:"-",USDT:"-",USDC:"-",DAI:"-",WBTC:"-"}}}const we=i=>{const r=i.getFullYear(),s=new Date(r,0,1),o=(i.getDay()+6)%7,t=Math.floor((i.getTime()-s.getTime())/864e5),a=Math.floor((t+s.getDay()-o)/7);return`${r}-${a}`},ve=i=>{let r="";if(!i)return r;for(let s=0;s<i.length;s++)if(console.log(i[s].length),!!i[s]&&(i[s].length===66||i[s].length===64||i[s].length===65)){r=i[s];break}return r},Se=(i,r)=>{const s=new Set,o=new Set,t=new Set,a=new Set;return r.forEach(d=>{const f=new Date(d.timestamp*1e3),u=f.getFullYear(),_=f.getMonth(),m=f.getDate(),T=we(f);s.add(`${u}-${_}-${m}`),o.add(`${u}-${T}`),t.add(`${u}-${_}`);const y=ve(d.calldata);y&&a.add(y)}),{dayActivity:s.size,weekActivity:o.size,monthActivity:t.size,contractActivity:a.size}};function Ie(i,r){if(r.length===0)return{dayActivity:0,weekActivity:0,monthActivity:0,contractActivity:0};const{dayActivity:s,weekActivity:o,monthActivity:t,contractActivity:a}=Se(i,r);return{dayActivity:s,weekActivity:o,monthActivity:t,contractActivity:a}}const Fe=i=>{let r=0,s=0,o=0,t=0;const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29e3};return i.forEach(d=>{const f=d.transfer_from_address,u=d.transfer_to_address,_=d.transfer_amount_display,m=d.from_erc20_identifier;f.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(d.main_call?d.main_call.selector_identifier:null)==="handle_deposit"&&(r+=1,o+=parseFloat(_)*a[m]),u.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(d.main_call?d.main_call.selector_identifier:null)==="initiate_withdraw"&&(s+=1,t+=parseFloat(_)*a[m])}),{DepositTx:r,WithdrawTx:s,DepositVolume:Number(o.toFixed(2)),WithdrawVolume:Number(t.toFixed(2))}};async function je(i){const r="https://starkscan.stellate.sh/",s={query:`query ContractPageQuery(
  $input: ContractInput!
) {
  contract(input: $input) {
    contract_address
    is_starknet_class_code_verified
    implementation_type
    ...ContractPageContainerFragment_contract
    ...ContractPageOverviewTabFragment_contract
    ...ContractPageClassCodeHistoryTabFragment_contract
    ...ContractFunctionReadWriteTabFragment_contract
    id
  }
}

fragment ContractFunctionReadCallsFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
}

fragment ContractFunctionReadWriteTabFragment_contract on Contract {
  contract_address
  starknet_class {
    ...ContractFunctionReadCallsFragment_starknetClass
    ...ContractFunctionWriteCallsFragment_starknetClass
    id
  }
}

fragment ContractFunctionWriteCallsFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
}

fragment ContractPageClassCodeHistoryTabFragment_contract on Contract {
  contract_address
  starknet_class {
    is_code_verified
    id
  }
  ...ContractPageCodeSubTabFragment_contract
}

fragment ContractPageCodeSubTabFragment_contract on Contract {
  starknet_class {
    class_hash
    ...StarknetClassCodeTabFragment_starknetClass
    id
  }
}

fragment ContractPageContainerFragment_contract on Contract {
  contract_address
  implementation_type
  is_starknet_class_code_verified
  contract_stats {
    number_of_transactions
    number_of_account_calls
    number_of_events
  }
}

fragment ContractPageOverviewTabClassHashPlacedAtItemFragment_contract on Contract {
  deployed_at_transaction_hash
  class_hash_placed_at_transaction_hash
  class_hash_placed_at_timestamp
}

fragment ContractPageOverviewTabEthBalanceItemFragment_contract on Contract {
  eth_balance {
    balance_display
    id
  }
}

fragment ContractPageOverviewTabFragment_contract on Contract {
  contract_address
  class_hash
  name_tag
  is_social_verified
  deployed_by_contract_address
  deployed_by_contract_identifier
  deployed_at_transaction_hash
  deployed_at_timestamp
  ...ContractPageOverviewTabEthBalanceItemFragment_contract
  ...ContractPageOverviewTabTypeItemFragment_contract
  ...ContractPageOverviewTabStarknetIDItemFragment_contract
  starknet_class {
    ...StarknetClassVersionItemFragment_starknetClass
    id
  }
  ...ContractPageOverviewTabClassHashPlacedAtItemFragment_contract
}

fragment ContractPageOverviewTabStarknetIDItemFragment_contract on Contract {
  starknet_id {
    domain
  }
}

fragment ContractPageOverviewTabTypeItemFragment_contract on Contract {
  implementation_type
  starknet_class {
    type
    id
  }
}

fragment StarknetClassCodeTabAbiAndByteCodeItemFragment_starknetClass on StarknetClass {
  is_code_verified
  abi_final
  bytecode
  sierra_program
}

fragment StarknetClassCodeTabFragment_starknetClass on StarknetClass {
  ...StarknetClassCodeTabVerifiedItemFragment_starknetClass
  ...StarknetClassCodeTabSourceCodeItemFragment_starknetClass
  ...StarknetClassCodeTabAbiAndByteCodeItemFragment_starknetClass
}

fragment StarknetClassCodeTabSourceCodeItemFragment_starknetClass on StarknetClass {
  class_hash
  verified {
    source_code
  }
}

fragment StarknetClassCodeTabVerifiedItemFragment_starknetClass on StarknetClass {
  is_code_verified
  verified {
    name
    source_code
    verified_at_timestamp
  }
}

fragment StarknetClassVersionItemFragment_starknetClass on StarknetClass {
  is_cairo_one
}
`,variables:{input:{contract_address:i}}},o={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},t=await B.post(r,s,{headers:o}),a=Y(t.data.data.contract.deployed_at_timestamp),d=t.data.data.contract.starknet_id?t.data.data.contract.starknet_id.domain:"无";return{deployedTime:a,starkId:d}}function Ee(i){try{let r=0;const s=["transfer","deposit","handle_deposit","initiate_withdraw"];return i.forEach(o=>{if(o.main_calls&&s.includes(o.main_calls[0].selector_name))return;const t=o.transfers.sort((d,f)=>parseInt(f.total_value)-parseInt(d.total_value));if(t.length===0)return;const a=parseFloat(t[0].total_value);r+=a}),{Vol:r.toFixed(3)}}catch(r){return console.log(r),{Vol:"-"}}}const J=async i=>{let r;try{await ae(re);const s=await xe(i),o=s.transactions,t=s.transfers,a=Ie(i,o),{tx:d,lastTime:f,fee:u}=await Te(o),_=await ke(i),m=Fe(t),T=await je(i),y=Ee(o);return r={accountInfo:T,balance:_,tx:d,lastTime:f,fee:u,activity:a,bridge:m,...y,result:"success"},await se("starkTransactions",{address:i,data:JSON.stringify(o)}),r}catch(s){return r={result:"error",reason:s.message},r}};const{TextArea:Ae}=Q,{Content:De}=_e,Oe=()=>{const[i,r]=k.useState(!1),[s,o]=k.useState(!1),[t,a]=k.useState([]),[d]=q.useForm(),[f,u]=k.useState(!1),[_,m]=k.useState([]),[T,y]=k.useState(!1);let j=t.length+1;const[D,N]=k.useState(!1);k.useEffect(()=>{y(!0);const e=localStorage.getItem("stark_addresses");setTimeout(()=>{y(!1)},500),e&&a(JSON.parse(e)),N(!0)},[]),k.useEffect(()=>{D&&localStorage.setItem("stark_addresses",JSON.stringify(t))},[t,D]);const K=[{title:"#",key:"index",align:"center",render:(e,n,C)=>C+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(e,n)=>{const C=e||c.jsx(L,{});return c.jsx($,{title:c.jsx("div",{children:c.jsx(Q,{placeholder:"请输入备注",defaultValue:e,onChange:g=>{n.name=g.target.value},allowClear:!0,bordered:!0})}),icon:c.jsx(L,{}),onConfirm:()=>{a([...t]),localStorage.setItem("stark_addresses",JSON.stringify(t))},onCancel:()=>{},okText:"确定",cancelText:"取消",children:c.jsx(P,{color:"blue",style:{cursor:"pointer"},children:C})})}},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:(e,n)=>{const C=()=>{ye(e),Ce.success("地址已复制")};return e?c.jsxs(c.Fragment,{children:[e.slice(0,4),"...",e.slice(-4),c.jsx(I,{type:"text",icon:c.jsx(fe,{}),onClick:C,style:{marginLeft:8}})]}):c.jsx(z,{})}},{title:"StarkId",dataIndex:["accountInfo","starkId"],key:"starkId",align:"center",render:(e,n)=>e},{title:"StarkNet",className:"zksync2",children:[{title:"ETH",dataIndex:["balance","ETH"],key:"stark_eth_balance",align:"center",render:(e,n)=>e},{title:"USDC",dataIndex:["balance","USDC"],key:"stark_usdc_balance",align:"center",render:(e,n)=>e},{title:"USDT",dataIndex:["balance","USDT"],key:"stark_usdt_balance",align:"center",render:(e,n)=>e},{title:"DAI",dataIndex:["balance","DAI"],key:"stark_dai_balance",align:"center",render:(e,n)=>e},{title:"WBTC",dataIndex:["balance","WBTC"],key:"stark_wbtc_balance",align:"center",render:(e,n)=>e},{title:"Tx",dataIndex:"tx",key:"stark_tx_amount",align:"center",render:(e,n)=>e,sorter:(e,n)=>e.tx-n.tx},{title:"最后交易",dataIndex:"lastTime",key:"stark_latest_tx",align:"center",render:(e,n)=>c.jsx("a",{href:`https://voyager.online/contract/${n.address}`,target:"_blank",children:e})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","DepositTx"],align:"center",render:(e,n)=>e},{title:"L2->L1",dataIndex:["bridge","WithdrawTx"],align:"center",render:(e,n)=>e}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","DepositVolume"],align:"center",render:(e,n)=>e},{title:"L2->L1",dataIndex:["bridge","WithdrawVolume"],align:"center",render:(e,n)=>e}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","dayActivity"],align:"center",render:(e,n)=>e},{title:"周",dataIndex:["activity","weekActivity"],align:"center",render:(e,n)=>e},{title:"月",dataIndex:["activity","monthActivity"],align:"center",render:(e,n)=>e},{title:"合约",dataIndex:["activity","contractActivity"],align:"center",render:(e,n)=>e},{title:"Vol(U)",dataIndex:"Vol",align:"center",render:(e,n)=>e,sorter:(e,n)=>e.Vol-n.Vol},{title:"fee(E)",dataIndex:"fee",align:"center",render:(e,n)=>e,sorter:(e,n)=>e.fee-n.fee}]},{title:"状态",key:"result",align:"center",render:(e,n)=>c.jsxs(W,{children:[n.result==="success"?c.jsx(P,{icon:c.jsx(ue,{}),color:"success",children:"成功"}):null,n.result==="error"?c.jsx(me,{title:n.reason,children:c.jsx(P,{icon:c.jsx(ge,{}),color:"error",children:"失败 "})}):null,n.result==="pending"?c.jsx(P,{icon:c.jsx(V,{spin:!0}),color:"processing",children:"获取中 "}):null]})},{title:"操作",key:"action",align:"center",render:(e,n)=>c.jsxs(W,{children:[c.jsx($,{title:"确认删除？",onConfirm:async()=>{await X(n.address)},children:c.jsx(I,{icon:c.jsx(U,{})})}),c.jsx(I,{icon:c.jsx(he,{}),onClick:()=>{R(n.key)}})]})}]}],X=async e=>{a(t.filter(n=>n.address!==e)),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(n=>n.address!==e))),await G("starkTransactions",[e])},Z=async()=>{try{o(!0),r(!1);const n=(await d.validateFields()).addresses.split(`
`),C=5;let g=0,h=[];const w=()=>{for(;h.length>0&&g<C;){const l=h.shift();g+=1,l().finally(()=>{g-=1,w()})}};for(let l of n){if(l=l.trim(),l.length!==66&&l.length!==64){F.error({message:"错误",description:"请输入正确的stark地址(64位)",duration:1});continue}l.startsWith("0x")||(l="0x"+l);const v=()=>new Promise(async(E,O)=>{try{a(S=>{const b=[...S];if(b.findIndex(x=>x.address===l)===-1){const x={key:j.toString(),address:l,result:"pending"};j++,b.push(x)}return b});const A=await J(l);a(S=>{const b=[...S],p=b.findIndex(x=>x.address===l);return p!==-1&&(b[p]={...b[p],...A}),b}),E()}catch(A){O(A)}});h.push(v)}for(w();g>0||h.length>0;)await new Promise(l=>setTimeout(l,100));F.success({message:"成功",description:"批量添加完成",duration:1})}catch(e){F.error({message:"错误",description:e.message,duration:1})}finally{d.resetFields(),m([]),o(!1)}},R=async e=>{const n=e?[e]:_;if(!n.length){F.error({message:"错误",description:"请先选择要刷新的地址",duration:1});return}u(!0);try{let g=0,h=[];const w=()=>{for(;h.length>0&&g<5;){const l=h.shift();g+=1,l().finally(()=>{g-=1,w()})}};for(let l of n){const v=t.findIndex(E=>E.key===l);if(v!==-1){const E=()=>new Promise(async(O,A)=>{try{a(b=>{const p=[...b];for(let x in p[v])x!=="address"&&x!=="name"&&x!=="key"&&(x==="result"?p[v][x]="pending":p[v][x]=null);return p});const S=await J(t[v].address);a(b=>{const p=[...b];return p[v]={...p[v],...S},localStorage.setItem("stark_addresses",JSON.stringify(p)),p}),O()}catch(S){A(S)}});h.push(E)}}for(w();g>0||h.length>0;)await new Promise(l=>setTimeout(l,100));F.success({message:"完成",description:"刷新地址数据完成",duration:1})}catch(C){F.error({message:"错误",description:C.message,duration:1})}finally{u(!1),e||m([])}},ee=async()=>{if(!_.length){F.error({message:"错误",description:"请先选择要删除的地址",duration:1});return}const e=t.filter(n=>_.includes(n.key)).map(n=>n.address);await G("starkTransactions",e),a(t.filter(n=>!_.includes(n.key))),localStorage.setItem("stark_addresses",JSON.stringify(t.filter(n=>!_.includes(n.key)))),m([])},te=()=>{pe(t,"starkInfo")};k.useState(null);const ne={selectedRowKeys:_,onChange:e=>{m(e)}};return c.jsx("div",{children:c.jsxs(De,{children:[c.jsx(ie,{title:"批量添加地址",open:i,onOk:Z,onCancel:()=>{r(!1),d.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:c.jsx(q,{form:d,layout:"vertical",children:c.jsx(q.Item,{label:"地址",name:"addresses",rules:[{required:!0,validator:(e,n)=>{const C=n.split(`
`);let g=[];for(let h=0;h<C.length;h++){let w=C[h].trim();(!w.startsWith("0x")||w.length!==66&&w.length!==64)&&g.push(h+1)}return g.length?Promise.reject(`行 ${g.join(", ")} 的地址格式错误，请输入正确的stark地址(64位)`):Promise.resolve()}}],children:c.jsx(Ae,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),c.jsx("div",{style:{marginBottom:"50px"},children:c.jsx(z,{spinning:T,size:"small",children:c.jsx(oe,{rowSelection:ne,dataSource:t,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:K})})}),c.jsx("div",{className:"stark_footer",children:c.jsx(ce,{size:"small",style:{width:"100%"},children:c.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[c.jsx(I,{type:"primary",onClick:()=>{r(!0)},size:"large",style:{width:"25%"},icon:c.jsx(de,{}),loading:s,children:s?"添加中...":"添加地址"}),c.jsx(I,{type:"primary",onClick:()=>R(),loading:f,size:"large",style:{width:"25%"},icon:c.jsx(V,{}),children:"刷新选中地址"}),c.jsx($,{title:"确认删除"+_.length+"个地址？",onConfirm:async()=>{await ee()},children:c.jsx(I,{type:"primary",danger:!0,size:"large",style:{width:"25%"},icon:c.jsx(U,{}),children:"删除选中地址"})}),c.jsx(I,{type:"primary",icon:c.jsx(le,{}),size:"large",style:{width:"8%"},onClick:te})]})})})]})})};export{Oe as default};
