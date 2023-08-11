import{z as B,B as re,F as se,G as ie,r as T,S as q,I as c,M as oe,a3 as z,Q as ce,a4 as de,O as S,a5 as le,Z as V,$ as U,a0 as L,a6 as _e,U as Q,a7 as fe,N as P,V as ue,aj as me,W,X as ge,J as he,Y as pe,a2 as ye,a8 as F,aa as Ce,ak as be}from"./index-307ac27a.js";import{d as G}from"./deleteData-cae3f438.js";import{m as xe}from"./index-26445bd1.js";async function M(i,r,s){const o=await B.post(i,r,{headers:s});let n=[];const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29500};return o.data.data.erc20TransferEvents.edges.forEach(d=>{const{transaction_hash:f,from_address:u,transfer_amount_display:_,transfer_from_address:m,transfer_to_address:k,from_erc20_identifier:y,main_call:E,timestamp:D,__typename:N}=d.node;n.push({transaction_hash:f,from_address:u,transfer_amount_display:_,transfer_from_address:m,transfer_to_address:k,from_erc20_identifier:y,timestamp:D,main_call:E,__typename:N,total_value:a.hasOwnProperty(y)?_*a[y]:0})}),{transfers:n,hasNextPage:o.data.data.erc20TransferEvents.pageInfo.hasNextPage,endCursor:o.data.data.erc20TransferEvents.pageInfo.endCursor}}async function ke(i){const r="https://starkscan.stellate.sh/",s={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},o={query:`query ERC20TransferEventsTableQuery(
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
`,variables:{first:100,after:null,input:{transfer_from_or_to_address:i,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let n=[],a=await M(r,o,s);for(n.push(...a.transfers);a.hasNextPage;)o.variables.after=a.endCursor,a=await M(r,o,s),n.push(...a.transfers);return n}async function H(i,r,s){const o=await B.post(i,r,{headers:s});let n=[];return o.data.data.transactions.edges.forEach(a=>{const{actual_fee_display:d,initiator_address:f,initiator_identifier:u,nonce:_,calldata:m,main_calls:k,timestamp:y,transaction_hash:E}=a.node;n.push({actual_fee_display:d,initiator_address:f,initiator_identifier:u,nonce:_,calldata:m,main_calls:k,timestamp:y,transaction_hash:E,transfers:[]})}),{transactions:n,hasNextPage:o.data.data.transactions.pageInfo.hasNextPage,endCursor:o.data.data.transactions.pageInfo.endCursor}}async function Te(i){const r="https://starkscan.stellate.sh/",s={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},o={query:`query TransactionsTableQuery(
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
`,variables:{first:100,after:null,input:{initiator_address:i,sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}};let n=[],a=await H(r,o,s);for(n.push(...a.transactions);a.hasNextPage;)o.variables.after=a.endCursor,a=await H(r,o,s),n.push(...a.transactions);const d=await ke(i);return d.forEach(f=>{n.forEach(u=>{f.transaction_hash===u.transaction_hash&&u.transfers.push(f)})}),{transfers:d,transactions:n}}const K=i=>{const r=new Date(i)*1e3,s=(new Date().getTime()-new Date(r).getTime())/1e3;if(s<60)return Math.round(s)+" 秒前";const o=s/60;if(o<60)return Math.round(o)+" 分前";const n=o/60;if(n<24)return Math.round(n)+" 时前";const a=n/24;return Math.round(a)+" 天前"},ve=async i=>{try{if(!i)return{tx:0,lastTime:"无交易",fee:0};let r=0;i.forEach(a=>{r+=parseFloat(a.actual_fee_display)});const s=i[0].nonce,o=i[0].timestamp,n=K(o)||"无交易";return{tx:s,lastTime:n,fee:Number(r).toFixed(3)}}catch{return{tx:"-",lastTime:"-",fee:"-"}}};async function we(i){try{const r="https://starkscan.stellate.sh/",s={query:`query ERC20BalancesByOwnerAddressTableQuery(
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
`,variables:{input:{owner_address:i}}},o={authority:"starkscan.stellate.sh","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6"},n=await B.post(r,s,{headers:o});let a={ETH:0,USDT:0,USDC:0,DAI:0,WBTC:0};return n.data.data.erc20BalancesByOwnerAddress.forEach(d=>{d.contract_address==="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"?a.ETH=Number(parseFloat(d.balance_display)).toFixed(3):d.contract_address==="0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8"?a.USDT=Number(parseFloat(d.balance_display)).toFixed(3):d.contract_address==="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"?a.USDC=Number(parseFloat(d.balance_display)).toFixed(3):d.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"?a.DAI=Number(parseFloat(d.balance_display)).toFixed(3):d.contract_address==="0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3"&&(a.WBTC=Number(parseFloat(d.balance_display)).toFixed(3))}),a}catch(r){return console.log(r),{ETH:"-",USDT:"-",USDC:"-",DAI:"-",WBTC:"-"}}}const Se=i=>{const r=i.getFullYear(),s=new Date(r,0,1),o=(i.getDay()+6)%7,n=Math.floor((i.getTime()-s.getTime())/864e5),a=Math.floor((n+s.getDay()-o)/7);return`${r}-${a}`},Ie=i=>{let r="";if(!i)return r;for(let s=0;s<i.length;s++)if(console.log(i[s].length),!!i[s]&&(i[s].length===66||i[s].length===64||i[s].length===65)){r=i[s];break}return r},Fe=(i,r)=>{const s=new Set,o=new Set,n=new Set,a=new Set;return r.forEach(d=>{const f=new Date(d.timestamp*1e3),u=f.getFullYear(),_=f.getMonth(),m=f.getDate(),k=Se(f);s.add(`${u}-${_}-${m}`),o.add(`${u}-${k}`),n.add(`${u}-${_}`);const y=Ie(d.calldata);y&&a.add(y)}),{dayActivity:s.size,weekActivity:o.size,monthActivity:n.size,contractActivity:a.size}};function Ee(i,r){if(r.length===0)return{dayActivity:0,weekActivity:0,monthActivity:0,contractActivity:0};const{dayActivity:s,weekActivity:o,monthActivity:n,contractActivity:a}=Fe(i,r);return{dayActivity:s,weekActivity:o,monthActivity:n,contractActivity:a}}const je=i=>{let r=0,s=0,o=0,n=0;const a={"StarkGate: ETH":1800,"StarkGate: USDT":1,"StarkGate: USDC":1,"StarkGate: DAI":1,"StarkGate: WBTC":29e3};return i.forEach(d=>{const f=d.transfer_from_address,u=d.transfer_to_address,_=d.transfer_amount_display,m=d.from_erc20_identifier;f.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(d.main_call?d.main_call.selector_identifier:null)==="handle_deposit"&&(r+=1,o+=parseFloat(_)*a[m]),u.toLowerCase()==="0x0000000000000000000000000000000000000000000000000000000000000000".toLowerCase()&&(d.main_call?d.main_call.selector_identifier:null)==="initiate_withdraw"&&(s+=1,n+=parseFloat(_)*a[m])}),{DepositTx:r,WithdrawTx:s,DepositVolume:Number(o.toFixed(2)),WithdrawVolume:Number(n.toFixed(2))}};async function Ae(i){const r="https://starkscan.stellate.sh/",s={query:`query ContractPageQuery(
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
`,variables:{input:{contract_address:i}}},o={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},n=await B.post(r,s,{headers:o}),a=K(n.data.data.contract.deployed_at_timestamp),d=n.data.data.contract.starknet_id?n.data.data.contract.starknet_id.domain:"无";return{deployedTime:a,starkId:d}}function De(i){try{let r=0;const s=["transfer","deposit","handle_deposit","initiate_withdraw"];return i.forEach(o=>{if(o.main_calls&&s.includes(o.main_calls[0].selector_name))return;const n=o.transfers.sort((d,f)=>parseInt(f.total_value)-parseInt(d.total_value));if(n.length===0)return;const a=parseFloat(n[0].total_value);r+=a}),{Vol:r.toFixed(3)}}catch(r){return console.log(r),{Vol:"-"}}}const J=async i=>{let r;try{await re(se);const s=await Te(i),o=s.transactions,n=s.transfers,a=Ee(i,o),{tx:d,lastTime:f,fee:u}=await ve(o),_=await we(i),m=je(n),k=await Ae(i),y=De(o);return r={accountInfo:k,balance:_,tx:d,lastTime:f,fee:u,activity:a,bridge:m,...y,result:"success"},await ie("starkTransactions",{address:i,data:JSON.stringify(o)}),r}catch(s){return r={result:"error",reason:s.message},r}};const{TextArea:Pe}=Q,{Content:Be}=fe,$e=()=>{const[i,r]=T.useState(!1),[s,o]=T.useState(!1),[n,a]=T.useState([]),[d]=q.useForm(),[f,u]=T.useState(!1),[_,m]=T.useState([]),[k,y]=T.useState(!1);let E=n.length+1;const[D,N]=T.useState(!1);T.useEffect(()=>{y(!0);const e=localStorage.getItem("stark_addresses");setTimeout(()=>{y(!1)},500),e&&a(JSON.parse(e)),N(!0)},[]),T.useEffect(()=>{D&&localStorage.setItem("stark_addresses",JSON.stringify(n))},[n,D]);const Y=[{title:"#",key:"index",align:"center",render:(e,t,C)=>C+1},{title:"备注",dataIndex:"name",key:"name",align:"center",className:"name",render:(e,t)=>t.key===ne?c.jsx(Q,{placeholder:"请输入备注",defaultValue:e,onPressEnter:g=>{t.name=g.target.value,a([...n]),localStorage.setItem("stark_addresses",JSON.stringify(n)),R(null)}}):c.jsxs(c.Fragment,{children:[c.jsx(P,{color:"blue",children:e}),c.jsx(S,{shape:"circle",icon:c.jsx(ue,{}),size:"small",onClick:()=>R(t.key)})]})},{title:"钱包地址",dataIndex:"address",key:"address",align:"center",className:"address",render:(e,t)=>{const C=()=>{be(e),xe.success("地址已复制")};return e?c.jsxs(c.Fragment,{children:[e.slice(0,4),"...",e.slice(-4),c.jsx(S,{type:"text",icon:c.jsx(me,{}),onClick:C,style:{marginLeft:8}})]}):c.jsx(z,{})}},{title:"StarkId",dataIndex:["accountInfo","starkId"],key:"starkId",align:"center",render:(e,t)=>e},{title:"StarkNet",className:"zksync2",children:[{title:"ETH",dataIndex:["balance","ETH"],key:"stark_eth_balance",align:"center",render:(e,t)=>e},{title:"USDC",dataIndex:["balance","USDC"],key:"stark_usdc_balance",align:"center",render:(e,t)=>e},{title:"USDT",dataIndex:["balance","USDT"],key:"stark_usdt_balance",align:"center",render:(e,t)=>e},{title:"DAI",dataIndex:["balance","DAI"],key:"stark_dai_balance",align:"center",render:(e,t)=>e},{title:"WBTC",dataIndex:["balance","WBTC"],key:"stark_wbtc_balance",align:"center",render:(e,t)=>e},{title:"Tx",dataIndex:"tx",key:"stark_tx_amount",align:"center",render:(e,t)=>e,sorter:(e,t)=>e.tx-t.tx},{title:"最后交易",dataIndex:"lastTime",key:"stark_latest_tx",align:"center",render:(e,t)=>c.jsx("a",{href:`https://voyager.online/contract/${t.address}`,target:"_blank",children:e})},{title:"官方桥Tx",className:"stark_cross_tx",children:[{title:"L1->L2",dataIndex:["bridge","DepositTx"],align:"center",render:(e,t)=>e},{title:"L2->L1",dataIndex:["bridge","WithdrawTx"],align:"center",render:(e,t)=>e}]},{title:"官方桥金额(U)",className:"stark_cross_amount",children:[{title:"L1->L2",dataIndex:["bridge","DepositVolume"],align:"center",render:(e,t)=>e},{title:"L2->L1",dataIndex:["bridge","WithdrawVolume"],align:"center",render:(e,t)=>e}]},{title:"活跃统计",className:"stark_activity",children:[{title:"天",dataIndex:["activity","dayActivity"],align:"center",render:(e,t)=>e},{title:"周",dataIndex:["activity","weekActivity"],align:"center",render:(e,t)=>e},{title:"月",dataIndex:["activity","monthActivity"],align:"center",render:(e,t)=>e},{title:"合约",dataIndex:["activity","contractActivity"],align:"center",render:(e,t)=>e},{title:"Vol(U)",dataIndex:"Vol",align:"center",render:(e,t)=>e,sorter:(e,t)=>e.Vol-t.Vol},{title:"fee(E)",dataIndex:"fee",align:"center",render:(e,t)=>e,sorter:(e,t)=>e.fee-t.fee}]},{title:"状态",key:"result",align:"center",render:(e,t)=>c.jsxs(W,{children:[t.result==="success"?c.jsx(P,{icon:c.jsx(ge,{}),color:"success",children:"成功"}):null,t.result==="error"?c.jsx(he,{title:t.reason,children:c.jsx(P,{icon:c.jsx(pe,{}),color:"error",children:"失败 "})}):null,t.result==="pending"?c.jsx(P,{icon:c.jsx(V,{spin:!0}),color:"processing",children:"获取中 "}):null]})},{title:"操作",key:"action",align:"center",render:(e,t)=>c.jsxs(W,{children:[c.jsx(U,{title:"确认删除？",onConfirm:async()=>{await X(t.address)},children:c.jsx(S,{icon:c.jsx(L,{})})}),c.jsx(S,{icon:c.jsx(ye,{}),onClick:()=>{$(t.key)}})]})}]}],X=async e=>{a(n.filter(t=>t.address!==e)),localStorage.setItem("stark_addresses",JSON.stringify(n.filter(t=>t.address!==e))),await G("starkTransactions",[e])},Z=async()=>{try{o(!0),r(!1);const t=(await d.validateFields()).addresses.split(`
`),C=5;let g=0,h=[];const v=()=>{for(;h.length>0&&g<C;){const l=h.shift();g+=1,l().finally(()=>{g-=1,v()})}};for(let l of t){if(l=l.trim(),l.length!==66&&l.length!==64){F.error({message:"错误",description:"请输入正确的stark地址(64位)",duration:1});continue}l.startsWith("0x")||(l="0x"+l);const w=()=>new Promise(async(j,O)=>{try{a(I=>{const b=[...I];if(b.findIndex(x=>x.address===l)===-1){const x={key:E.toString(),address:l,result:"pending"};E++,b.push(x)}return b});const A=await J(l);a(I=>{const b=[...I],p=b.findIndex(x=>x.address===l);return p!==-1&&(b[p]={...b[p],...A}),b}),j()}catch(A){O(A)}});h.push(w)}for(v();g>0||h.length>0;)await new Promise(l=>setTimeout(l,100));F.success({message:"成功",description:"批量添加完成",duration:1})}catch(e){F.error({message:"错误",description:e.message,duration:1})}finally{d.resetFields(),m([]),o(!1)}},$=async e=>{const t=e?[e]:_;if(!t.length){F.error({message:"错误",description:"请先选择要刷新的地址",duration:1});return}u(!0);try{let g=0,h=[];const v=()=>{for(;h.length>0&&g<5;){const l=h.shift();g+=1,l().finally(()=>{g-=1,v()})}};for(let l of t){const w=n.findIndex(j=>j.key===l);if(w!==-1){const j=()=>new Promise(async(O,A)=>{try{a(b=>{const p=[...b];for(let x in p[w])x!=="address"&&x!=="name"&&x!=="key"&&(x==="result"?p[w][x]="pending":p[w][x]=null);return p});const I=await J(n[w].address);a(b=>{const p=[...b];return p[w]={...p[w],...I},localStorage.setItem("stark_addresses",JSON.stringify(p)),p}),O()}catch(I){A(I)}});h.push(j)}}for(v();g>0||h.length>0;)await new Promise(l=>setTimeout(l,100));F.success({message:"完成",description:"刷新地址数据完成",duration:1})}catch(C){F.error({message:"错误",description:C.message,duration:1})}finally{u(!1),e||m([])}},ee=async()=>{if(!_.length){F.error({message:"错误",description:"请先选择要删除的地址",duration:1});return}const e=n.filter(t=>_.includes(t.key)).map(t=>t.address);await G("starkTransactions",e),a(n.filter(t=>!_.includes(t.key))),localStorage.setItem("stark_addresses",JSON.stringify(n.filter(t=>!_.includes(t.key)))),m([])},te=()=>{Ce(n,"starkInfo")},[ne,R]=T.useState(null),ae={selectedRowKeys:_,onChange:e=>{m(e)}};return c.jsx("div",{children:c.jsxs(Be,{children:[c.jsx(oe,{title:"批量添加地址",open:i,onOk:Z,onCancel:()=>{r(!1),d.resetFields()},okText:"添加地址",cancelText:"取消",width:800,children:c.jsx(q,{form:d,layout:"vertical",children:c.jsx(q.Item,{label:"地址",name:"addresses",rules:[{required:!0,validator:(e,t)=>{const C=t.split(`
`);let g=[];for(let h=0;h<C.length;h++){let v=C[h].trim();(!v.startsWith("0x")||v.length!==66&&v.length!==64)&&g.push(h+1)}return g.length?Promise.reject(`行 ${g.join(", ")} 的地址格式错误，请输入正确的stark地址(64位)`):Promise.resolve()}}],children:c.jsx(Pe,{placeholder:"请输入地址，每行一个",style:{width:"100%",height:"300px",resize:"none"}})})})}),c.jsx("div",{style:{marginBottom:"50px"},children:c.jsx(z,{spinning:k,size:"large",children:c.jsx(ce,{rowSelection:ae,dataSource:n,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",columns:Y})})}),c.jsx("div",{className:"stark_footer",children:c.jsx(de,{size:"small",style:{width:"100%"},children:c.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[c.jsx(S,{type:"primary",onClick:()=>{r(!0)},size:"large",style:{width:"25%"},icon:c.jsx(le,{}),loading:s,children:s?"添加中...":"添加地址"}),c.jsx(S,{type:"primary",onClick:()=>$(),loading:f,size:"large",style:{width:"25%"},icon:c.jsx(V,{}),children:"刷新选中地址"}),c.jsx(U,{title:"确认删除"+_.length+"个地址？",onConfirm:async()=>{await ee()},children:c.jsx(S,{type:"primary",danger:!0,size:"large",style:{width:"25%"},icon:c.jsx(L,{}),children:"删除选中地址"})}),c.jsx(S,{type:"primary",icon:c.jsx(_e,{}),size:"large",style:{width:"8%"},onClick:te})]})})})]})})};export{$e as default};
