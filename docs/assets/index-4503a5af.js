import{r as $,j as e}from"./index-c45d47ea.js";import{F as R,a as nt,T as rt,b as mt,U as gt,S as ht,D as ft,c as kt,n as V,e as pt}from"./save_excel-e1179387.js";import{a as X,I as Z,S as h,C as wt,P as xt}from"./axios-2aba4112.js";import{B as H,E as St}from"./EditOutlined-1424166f.js";import{S as Ct,L as yt}from"./index-2d432e81.js";async function K(y){try{let u=0,f,p;const d="https://starkscan.stellate.sh/",l={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},r={query:`query TransactionsTableQuery(
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
`,variables:{first:30,after:null,input:{initiator_address:y,transaction_types:["INVOKE_FUNCTION"],sort_by:"timestamp",order_by:"desc",min_block_number:null,max_block_number:null,min_timestamp:null,max_timestamp:null}}},c=await X.post(d,r,{headers:l});u+=c.data.data.transactions.edges.length,f=c.data.data.transactions.pageInfo.hasNextPage;const C=c.data.data.transactions.edges[0].node.timestamp,i=new Date(C*1e3);let b=i.getFullYear(),x=i.getMonth()+1,w=i.getDate();x<10&&(x="0"+x),w<10&&(w="0"+w);let L=`${b}/${x}/${w}`;if(f===!0)for(p=c.data.data.transactions.pageInfo.endCursor;f;){r.variables.after=p;const M=await X.post(d,r,{headers:l});f=M.data.data.transactions.pageInfo.hasNextPage,p=M.data.data.transactions.pageInfo.endCursor,u+=M.data.data.transactions.edges.length}return console.log(u,L),{tx:u,stark_latest_tx:L}}catch(u){return console.error(u),{tx:"Error",stark_latest_tx:"Error"}}}async function st(y,u,f,p){for(let d=0;d<p.length;d++){const l=p[d].node;l.transaction_hash;const r=l.transfer_amount_display,c=l.transfer_from_address;l.timestamp,l.transfer_to_identifier;const C=l.main_call?l.main_call.selector_identifier:null;if(c==="0x0000000000000000000000000000000000000000000000000000000000000000"&&C==="handle_deposit"){const i=l.from_erc20_identifier;if(i in u){const b=u[i].amount+=parseFloat(r),x=u[i].count+=1;u[i]={amount:b,count:x}}else u[i]={amount:parseFloat(r),count:1}}else if(c===y&&C==="initiate_withdraw"){const i=l.from_erc20_identifier;if(i in f){const b=f[i].amount+=parseFloat(r),x=f[i].count+=1;f[i]={amount:b,count:x}}else f[i]={amount:parseFloat(r),count:1}}}return[u,f]}async function Q(y){try{const u="https://starkscan.stellate.sh/",f={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},p={query:`query ERC20TransferEventsTableQuery(
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
`,variables:{first:30,after:null,input:{transfer_from_or_to_address:y,call_invocation_type:"FUNCTION",sort_by:"timestamp",order_by:"desc"}}};let d=await X.post(u,p,{headers:f}),l=d.data.data.erc20TransferEvents.edges,r={},c={},C=d.data.data.erc20TransferEvents.pageInfo.hasNextPage,i;for([r,c]=await st(y,r,c,l),C&&(i=d.data.data.erc20TransferEvents.pageInfo.endCursor);C===!0;){p.variables.after=i;let w=await X.post(u,p,{headers:f});C=w.data.data.erc20TransferEvents.pageInfo.hasNextPage,C===!1?i=null:i=w.data.data.erc20TransferEvents.pageInfo.endCursor,[r,c]=await st(y,r,c,w.data.data.erc20TransferEvents.edges)}let b=0,x=0;for(let w in r)b+=r[w].count;for(let w in c)x+=c[w].count;return console.log(r),console.log(c),{d_eth_amount:r["StarkGate: ETH"]?parseFloat(r["StarkGate: ETH"].amount).toFixed(3):0,d_eth_count:r["StarkGate: ETH"]?r["StarkGate: ETH"].count:0,d_usdc_amount:r["StarkGate: USDC"]?parseFloat(r["StarkGate: USDC"].amount).toFixed(3):0,d_usdc_count:r["StarkGate: USDC"]?r["StarkGate: USDC"].count:0,d_usdt_amount:r["StarkGate: USDT"]?parseFloat(r["StarkGate: USDT"].amount).toFixed(3):0,d_usdt_count:r["StarkGate: USDT"]?r["StarkGate: USDT"].count:0,d_dai_amount:r["StarkGate: DAI"]?parseFloat(r["StarkGate: DAI"].amount).toFixed(3):0,d_dai_count:r["StarkGate: DAI"]?r["StarkGate: DAI"].count:0,d_wbtc_amount:r["StarkGate: WBTC"]?parseFloat(r["StarkGate: WBTC"].amount).toFixed(6):0,d_wbtc_count:r["StarkGate: WBTC"]?r["StarkGate: WBTC"].count:0,w_eth_amount:c["StarkGate: ETH"]?parseFloat(c["StarkGate: ETH"].amount).toFixed(3):0,w_eth_count:c["StarkGate: ETH"]?c["StarkGate: ETH"].count:0,w_usdc_amount:c["StarkGate: USDC"]?parseFloat(c["StarkGate: USDC"].amount).toFixed(3):0,w_usdc_count:c["StarkGate: USDC"]?c["StarkGate: USDC"].count:0,w_usdt_amount:c["StarkGate: USDT"]?parseFloat(c["StarkGate: USDT"].amount).toFixed(3):0,w_usdt_count:c["StarkGate: USDT"]?c["StarkGate: USDT"].count:0,w_dai_amount:c["StarkGate: DAI"]?parseFloat(c["StarkGate: DAI"].amount).toFixed(3):0,w_dai_count:c["StarkGate: DAI"]?c["StarkGate: DAI"].count:0,w_wbtc_amount:c["StarkGate: WBTC"]?parseFloat(c["StarkGate: WBTC"].amount).toFixed(6):0,w_wbtc_count:c["StarkGate: WBTC"]?c["StarkGate: WBTC"].count:0,total_deposit_count:b,total_widthdraw_count:x}}catch(u){return console.log(u),{d_eth_amount:"Error",d_eth_count:"Error",d_usdc_amount:"Error",d_usdc_count:"Error",d_usdt_amount:"Error",d_usdt_count:"Error",d_dai_amount:"Error",d_dai_count:"Error",d_wbtc_amount:"Error",d_wbtc_count:"Error",w_eth_amount:"Error",w_eth_count:"Error",w_usdc_amount:"Error",w_usdc_count:"Error",w_usdt_amount:"Error",w_usdt_count:"Error",w_dai_amount:"Error",w_dai_count:"Error",w_wbtc_amount:"Error",w_wbtc_count:"Error",total_deposit_count:"Error",total_widthdraw_count:"Error"}}}async function Y(y){try{const u="https://starkscan.stellate.sh/",f={authority:"starkscan.stellate.sh",accept:"application/json","accept-language":"zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","content-type":"application/json"},p={query:`query ContractPageQuery(
  $input: ContractInput!
) {
  contract(input: $input) {
    contract_address
    is_starknet_class_code_verified
    implementation_type
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
`,variables:{input:{contract_address:y}}},d=await X.post(u,p,{headers:f}),l=d.data.data.contract.eth_balance.balance_display,r=d.data.data.contract.starknet_id?d.data.data.contract.starknet_id.domain:"null",c=d.data.data.contract.deployed_at_timestamp;return{eth_balance:parseFloat(l).toFixed(3),stark_id:r==="null"?"无":r,deployed_at_timestamp:c}}catch(u){return console.log(u),{eth_balance:"Error",stark_id:"Error",deployed_at_timestamp:"Error"}}}const{TextArea:bt}=Z,{Content:Tt}=yt,{Column:m,ColumnGroup:W}=rt,Nt=()=>{const[y,u]=$.useState(!1),[f,p]=$.useState(!1),[d,l]=$.useState([]),[r]=R.useForm(),[c,C]=$.useState(!1),[i,b]=$.useState([]),[x,w]=$.useState(!1),[L]=R.useForm(),M={onChange:(t,o)=>{b(t)}};$.useEffect(()=>{w(!0);const t=localStorage.getItem("stark_addresses");setTimeout(()=>{w(!1)},500),t&&l(JSON.parse(t))},[]);const ot=t=>{l(d.filter(o=>o.key!==t)),localStorage.setItem("stark_addresses",JSON.stringify(d.filter(o=>o.key!==t)))},lt=async()=>{try{const t=await L.validateFields();if(t.address.length!==66&&t.address.length!==64){V.error({message:"错误",description:"请输入正确的stark地址(64位)"},2);return}t.address.startsWith("0x")||(t.address="0x"+t.address),u(!1);const o=d.findIndex(n=>n.address===t.address);if(o!==-1){l(d.map((a,_)=>_===o?{...a,name:t.name}:a));const n=[...d];Y(t.address).then(({eth_balance:a,stark_id:_,deployed_at_timestamp:s})=>{n[o]={...n[o],stark_eth_balance:a,stark_id:_,create_time:s},l(n),localStorage.setItem("stark_addresses",JSON.stringify(d))}),Q(t.address).then(({d_eth_amount:a,d_eth_count:_,d_usdc_amount:s,d_usdc_count:g,d_usdt_amount:k,d_usdt_count:S,d_dai_amount:T,d_dai_count:I,d_wbtc_amount:j,d_wbtc_count:F,w_eth_amount:E,w_eth_count:v,w_usdc_amount:N,w_usdc_count:D,w_usdt_amount:G,w_usdt_count:O,w_dai_amount:P,w_dai_count:U,w_wbtc_amount:A,w_wbtc_count:B,total_deposit_count:J,total_widthdraw_count:q})=>{n[o]={...n[o],d_eth_amount:a,d_eth_count:_,d_usdc_amount:s,d_usdc_count:g,d_usdt_amount:k,d_usdt_count:S,d_dai_amount:T,d_dai_count:I,d_wbtc_amount:j,d_wbtc_count:F,w_eth_amount:E,w_eth_count:v,w_usdc_amount:N,w_usdc_count:D,w_usdt_amount:G,w_usdt_count:O,w_dai_amount:P,w_dai_count:U,w_wbtc_amount:A,w_wbtc_count:B,total_deposit_count:J,total_widthdraw_count:q},l(n),localStorage.setItem("stark_addresses",JSON.stringify(d))}),K(t.address).then(({tx:a,stark_latest_tx:_})=>{n[o]={...n[o],stark_tx_amount:a,stark_latest_tx:_},l(n),localStorage.setItem("stark_addresses",JSON.stringify(d))})}else{const n={key:d.length.toString(),name:t.name,address:t.address,stark_eth_balance:null,stark_id:null,create_time:null,d_eth_amount:null,d_eth_count:null,d_usdc_amount:null,d_usdc_count:null,d_usdt_amount:null,d_usdt_count:null,d_dai_amount:null,d_dai_count:null,d_wbtc_amount:null,d_wbtc_count:null,w_eth_amount:null,w_eth_count:null,w_usdc_amount:null,w_usdc_count:null,w_usdt_amount:null,w_usdt_count:null,w_dai_amount:null,w_dai_count:null,w_wbtc_amount:null,w_wbtc_count:null,stark_tx_amount:null,stark_latest_tx:null,total_deposit_count:null,total_widthdraw_count:null},a=[...d,n];l(a),K(t.address).then(({tx:_,stark_latest_tx:s})=>{n.stark_tx_amount=_,n.stark_latest_tx=s,l([...a]),localStorage.setItem("stark_addresses",JSON.stringify(a))}),Y(t.address).then(({eth_balance:_,stark_id:s,deployed_at_timestamp:g})=>{n.stark_eth_balance=_,n.stark_id=s,n.create_time=g,l([...a]),localStorage.setItem("stark_addresses",JSON.stringify(a))}),Q(t.address).then(({d_eth_amount:_,d_eth_count:s,d_usdc_amount:g,d_usdc_count:k,d_usdt_amount:S,d_usdt_count:T,d_dai_amount:I,d_dai_count:j,d_wbtc_amount:F,d_wbtc_count:E,w_eth_amount:v,w_eth_count:N,w_usdc_amount:D,w_usdc_count:G,w_usdt_amount:O,w_usdt_count:P,w_dai_amount:U,w_dai_count:A,w_wbtc_amount:B,w_wbtc_count:J,total_widthdraw_count:q,total_deposit_count:z})=>{n.d_eth_amount=_,n.d_eth_count=s,n.d_usdc_amount=g,n.d_usdc_count=k,n.d_usdt_amount=S,n.d_usdt_count=T,n.d_dai_amount=I,n.d_dai_count=j,n.d_wbtc_amount=F,n.d_wbtc_count=E,n.w_eth_amount=v,n.w_eth_count=N,n.w_usdc_amount=D,n.w_usdc_count=G,n.w_usdt_amount=O,n.w_usdt_count=P,n.w_dai_amount=U,n.w_dai_count=A,n.w_wbtc_amount=B,n.w_wbtc_count=J,n.total_deposit_count=z,n.total_widthdraw_count=q,l([...a]),localStorage.setItem("stark_addresses",JSON.stringify(a))})}}catch(t){V.error({message:"错误",description:t.message},2)}finally{L.resetFields()}},ct=async()=>{try{const o=(await r.validateFields()).addresses.split(`
`),n=[...d];for(let a of o){if(a=a.trim(),a.length!==66&&a.length!==64){V.error({message:"错误",description:"请输入正确的stark地址(64位)"});continue}a.startsWith("0x")||(a="0x"+a);const _=n.findIndex(s=>s.address===a);if(_!==-1){const s=[...n];K(a).then(({tx:g,stark_latest_tx:k})=>{s[_]={...s[_],stark_tx_amount:g,stark_latest_tx:k},l(s),localStorage.setItem("stark_addresses",JSON.stringify(s))}),Y(a).then(({eth_balance:g,stark_id:k,deployed_at_timestamp:S})=>{s[_]={...s[_],stark_eth_balance:g,stark_id:k,create_time:S},l(s),localStorage.setItem("stark_addresses",JSON.stringify(s))}),Q(a).then(({d_eth_amount:g,d_eth_count:k,d_usdc_amount:S,d_usdc_count:T,d_usdt_amount:I,d_usdt_count:j,d_dai_amount:F,d_dai_count:E,d_wbtc_amount:v,d_wbtc_count:N,w_eth_amount:D,w_eth_count:G,w_usdc_amount:O,w_usdc_count:P,w_usdt_amount:U,w_usdt_count:A,w_dai_amount:B,w_dai_count:J,w_wbtc_amount:q,w_wbtc_count:z,total_widthdraw_count:tt,total_deposit_count:at})=>{s[_]={...s[_],d_eth_amount:g,d_eth_count:k,d_usdc_amount:S,d_usdc_count:T,d_usdt_amount:I,d_usdt_count:j,d_dai_amount:F,d_dai_count:E,d_wbtc_amount:v,d_wbtc_count:N,w_eth_amount:D,w_eth_count:G,w_usdc_amount:O,w_usdc_count:P,w_usdt_amount:U,w_usdt_count:A,w_dai_amount:B,w_dai_count:J,w_wbtc_amount:q,w_wbtc_count:z,total_widthdraw_count:tt,total_deposit_count:at}})}else{const s={key:n.length.toString(),address:a,stark_eth_balance:null,stark_id:null,create_time:null,d_eth_amount:null,d_eth_count:null,d_usdc_amount:null,d_usdc_count:null,d_usdt_amount:null,d_usdt_count:null,d_dai_amount:null,d_dai_count:null,d_wbtc_amount:null,d_wbtc_count:null,w_eth_amount:null,w_eth_count:null,w_usdc_amount:null,w_usdc_count:null,w_usdt_amount:null,w_usdt_count:null,w_dai_amount:null,w_dai_count:null,w_wbtc_amount:null,w_wbtc_count:null,stark_tx_amount:null,stark_latest_tx:null,total_deposit_count:null,total_widthdraw_count:null};n.push(s),l(n),K(a).then(({tx:g,stark_latest_tx:k})=>{s.stark_tx_amount=g,s.stark_latest_tx=k,l([...n]),localStorage.setItem("stark_addresses",JSON.stringify(n))}),Y(a).then(({eth_balance:g,stark_id:k,deployed_at_timestamp:S})=>{s.stark_eth_balance=g,s.stark_id=k,s.create_time=S,l([...n]),localStorage.setItem("stark_addresses",JSON.stringify(n))}),Q(a).then(({d_eth_amount:g,d_eth_count:k,d_usdc_amount:S,d_usdc_count:T,d_usdt_amount:I,d_usdt_count:j,d_dai_amount:F,d_dai_count:E,d_wbtc_amount:v,d_wbtc_count:N,w_eth_amount:D,w_eth_count:G,w_usdc_amount:O,w_usdc_count:P,w_usdt_amount:U,w_usdt_count:A,w_dai_amount:B,w_dai_count:J,w_wbtc_amount:q,w_wbtc_count:z,total_widthdraw_count:tt,total_deposit_count:at})=>{s.d_eth_amount=g,s.d_eth_count=k,s.d_usdc_amount=S,s.d_usdc_count=T,s.d_usdt_amount=I,s.d_usdt_count=j,s.d_dai_amount=F,s.d_dai_count=E,s.d_wbtc_amount=v,s.d_wbtc_count=N,s.w_eth_amount=D,s.w_eth_count=G,s.w_usdc_amount=O,s.w_usdc_count=P,s.w_usdt_amount=U,s.w_usdt_count=A,s.w_dai_amount=B,s.w_dai_count=J,s.w_wbtc_amount=q,s.w_wbtc_count=z,s.total_widthdraw_count=tt,s.total_deposit_count=at,l([...n]),localStorage.setItem("stark_addresses",JSON.stringify(n))})}}p(!1)}catch(t){V.error({message:"错误",description:t.message})}finally{r.resetFields()}},dt=async()=>{if(!i.length){V.error({message:"错误",description:"请先选择要刷新的地址"},2);return}C(!0);try{const t=[...d];for(let o of i){const n=t.findIndex(a=>a.key===o);if(n!==-1){const a=t[n];a.stark_tx_amount=null,a.stark_latest_tx=null,a.stark_eth_balance=null,a.stark_id=null,a.create_time=null,a.d_eth_amount=null,a.d_eth_count=null,a.d_usdc_amount=null,a.d_usdc_count=null,a.d_usdt_amount=null,a.d_usdt_count=null,a.d_dai_amount=null,a.d_dai_count=null,a.d_wbtc_amount=null,a.d_wbtc_count=null,a.w_eth_amount=null,a.w_eth_count=null,a.w_usdc_amount=null,a.w_usdc_count=null,a.w_usdt_amount=null,a.w_usdt_count=null,a.w_dai_amount=null,a.w_dai_count=null,a.w_wbtc_amount=null,a.w_wbtc_count=null,a.total_widthdraw_count=null,a.total_deposit_count=null,l([...t]),K(a.address).then(({tx:_,stark_latest_tx:s})=>{a.stark_tx_amount=_,a.stark_latest_tx=s,l([...t]),localStorage.setItem("stark_addresses",JSON.stringify(d))}),Y(a.address).then(({eth_balance:_,stark_id:s,deployed_at_timestamp:g})=>{a.stark_eth_balance=_,a.stark_id=s,a.create_time=g,l([...t]),localStorage.setItem("stark_addresses",JSON.stringify(d))}),Q(a.address).then(({d_eth_amount:_,d_eth_count:s,d_usdc_amount:g,d_usdc_count:k,d_usdt_amount:S,d_usdt_count:T,d_dai_amount:I,d_dai_count:j,d_wbtc_amount:F,d_wbtc_count:E,w_eth_amount:v,w_eth_count:N,w_usdc_amount:D,w_usdc_count:G,w_usdt_amount:O,w_usdt_count:P,w_dai_amount:U,w_dai_count:A,w_wbtc_amount:B,w_wbtc_count:J,total_widthdraw_count:q,total_deposit_count:z})=>{a.d_eth_amount=_,a.d_eth_count=s,a.d_usdc_amount=g,a.d_usdc_count=k,a.d_usdt_amount=S,a.d_usdt_count=T,a.d_dai_amount=I,a.d_dai_count=j,a.d_wbtc_amount=F,a.d_wbtc_count=E,a.w_eth_amount=v,a.w_eth_count=N,a.w_usdc_amount=D,a.w_usdc_count=G,a.w_usdt_amount=O,a.w_usdt_count=P,a.w_dai_amount=U,a.w_dai_count=A,a.w_wbtc_amount=B,a.w_wbtc_count=J,a.total_widthdraw_count=q,a.total_deposit_count=z,l([...t]),localStorage.setItem("stark_addresses",JSON.stringify(d))})}}}catch(t){V.error({message:"错误",description:t.message},2)}finally{C(!1)}},_t=()=>{l(d.filter(t=>!i.includes(t.key))),localStorage.setItem("stark_addresses",JSON.stringify(d.filter(t=>!i.includes(t.key)))),b([])},it=()=>{pt(d,"starkInfo")},[ut,et]=$.useState(null);return e.jsx("div",{children:e.jsxs(Tt,{children:[e.jsx(nt,{title:"批量添加地址",open:f,onOk:ct,onCancel:()=>{p(!1),r.resetFields()},okText:"添加地址",cancelText:"取消",children:e.jsx(R,{form:r,layout:"vertical",children:e.jsx(R.Item,{label:"地址",name:"addresses",rules:[{required:!0}],children:e.jsx(bt,{placeholder:"请输入地址，每行一个",style:{width:"500px",height:"200px"}})})})}),e.jsx(nt,{title:"添加地址",open:y,onOk:lt,onCancel:()=>u(!1),okText:"添加地址",cancelText:"取消",children:e.jsxs(R,{form:L,layout:"vertical",children:[e.jsx(R.Item,{label:"地址",name:"address",rules:[{required:!0}],children:e.jsx(Z,{placeholder:"请输入地址"})}),e.jsx(R.Item,{label:"备注",name:"name",children:e.jsx(Z,{placeholder:"请输入备注"})})]})}),e.jsx(h,{spinning:x,children:e.jsxs(rt,{rowSelection:{type:"checkbox",...M},dataSource:d,pagination:!1,bordered:!0,style:{marginBottom:"20px"},size:"small",children:[e.jsx(m,{title:"备注",dataIndex:"name",align:"center",className:"name",render:(t,o)=>o.key===ut?e.jsx(Z,{placeholder:"请输入备注",defaultValue:t,onPressEnter:a=>{o.name=a.target.value,l([...d]),localStorage.setItem("stark_addresses",JSON.stringify(d)),et(null)}}):e.jsxs(e.Fragment,{children:[e.jsx(mt,{color:"blue",children:t}),e.jsx(H,{shape:"circle",icon:e.jsx(St,{}),size:"small",onClick:()=>et(o.key)})]})},"name"),e.jsx(m,{title:"钱包地址",dataIndex:"address",align:"center",className:"address",render:(t,o)=>t===null?e.jsx(h,{}):t.slice(0,4)+"..."+t.slice(-4)},"address"),e.jsx(m,{title:"创建时间",dataIndex:"create_time",align:"center",className:"create_time",render:(t,o)=>{if(t===null)return e.jsx(h,{});{let n=new Date(t*1e3),a=n.getFullYear(),_=(n.getMonth()+1).toString().padStart(2,"0"),s=n.getDate().toString().padStart(2,"0");return`${a}/${_}/${s}`}}},"create_time"),e.jsx(m,{title:"StarkId",dataIndex:"stark_id",align:"center",className:"stark_id",render:(t,o)=>t===null?e.jsx(h,{}):t},"stark_id"),e.jsxs(W,{title:"StarkWare",className:"zksync2",children:[e.jsx(m,{title:"ETH",dataIndex:"stark_eth_balance",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"zks2_son"},"stark_eth_balance"),e.jsx(m,{title:"Tx",dataIndex:"stark_tx_amount",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"zks2_son"},"stark_tx_amount"),e.jsx(m,{title:"最后交易时间",dataIndex:"stark_latest_tx",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"zks2_son"},"stark_latest_tx"),e.jsxs(W,{title:"官方桥Tx数量",className:"stark_cross_tx",children:[e.jsxs(W,{title:"L1->L2",className:"cross12",children:[e.jsx(m,{title:"ETH",dataIndex:"d_eth_count",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"12cross_eth_tx"),e.jsx(m,{title:"USDC",dataIndex:"d_usdc_count",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"12cross_usdc_tx"),e.jsx(m,{title:"USDT",dataIndex:"d_usdt_count",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"12cross_usdt_tx"),e.jsx(m,{title:"总共",dataIndex:"total_deposit_count",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"12cross_total_tx")]}),e.jsxs(W,{title:"L2->L1",className:"cross21",children:[e.jsx(m,{title:"ETH",dataIndex:"w_eth_count",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"21cross_eth_tx"),e.jsx(m,{title:"USDC",dataIndex:"w_usdc_count",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"21cross_usdc_tx"),e.jsx(m,{title:"USDT",dataIndex:"w_usdt_count",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"21cross_usdt_tx"),e.jsx(m,{title:"总共",dataIndex:"total_widthdraw_count",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"21cross_total_tx")]})]}),e.jsxs(W,{title:"官方桥跨链额",className:"stark_cross_amount",children:[e.jsxs(W,{title:"L1->L2",className:"cross12a",children:[e.jsx(m,{title:"ETH",dataIndex:"d_eth_amount",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"12cross_eth_amount"),e.jsx(m,{title:"USDC",dataIndex:"d_usdc_amount",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"12cross_usdc_amount"),e.jsx(m,{title:"USDT",dataIndex:"d_usdt_amount",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"12cross_usdt_amount")]}),e.jsxs(W,{title:"L2->L1",className:"cross21a",children:[e.jsx(m,{title:"ETH",dataIndex:"w_eth_amount",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"21cross_eth_amount"),e.jsx(m,{title:"USDC",dataIndex:"w_usdc_amount",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"21cross_usdc_amount"),e.jsx(m,{title:"USDT",dataIndex:"w_usdt_amount",align:"center",render:(t,o)=>t===null?e.jsx(h,{}):t,className:"cross_son"},"21cross_usdt_amount")]})]})]}),e.jsx(m,{className:"action",title:"操作",align:"center",render:(t,o)=>e.jsx(Ct,{size:"small",children:e.jsx(H,{type:"primary",danger:!0,onClick:()=>ot(o.key),children:"删除"})})},"action")]})}),e.jsx(wt,{children:e.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[e.jsx(H,{type:"primary",onClick:()=>{u(!0)},size:"large",style:{width:"20%"},icon:e.jsx(xt,{}),children:"添加地址"}),e.jsx(H,{type:"primary",onClick:()=>{p(!0)},size:"large",style:{width:"20%"},icon:e.jsx(gt,{}),children:"批量添加地址"}),e.jsx(H,{type:"primary",onClick:dt,loading:c,size:"large",style:{width:"20%"},disabled:!i.length,icon:e.jsx(ht,{}),children:"刷新选中地址"}),e.jsx(H,{type:"primary",danger:!0,onClick:_t,size:"large",style:{width:"20%"},disabled:!i.length,icon:e.jsx(ft,{}),children:"删除选中地址"}),e.jsx(H,{type:"primary",icon:e.jsx(kt,{}),size:"large",style:{width:"8%"},onClick:it})]})})]})})};export{Nt as default};
