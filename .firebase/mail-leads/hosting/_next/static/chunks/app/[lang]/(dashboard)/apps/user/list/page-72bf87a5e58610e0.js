(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[234],{79217:function(e,t,a){Promise.resolve().then(a.bind(a,80209)),Promise.resolve().then(a.bind(a,74270))},99227:function(e,t,a){"use strict";a.d(t,{F:function(){return n}});var l=a(20994),s=a(24086);let i=(0,l.ZF)({apiKey:"AIzaSyCgaCOl03vf4plSdXfs_mU1gmLPwNpjot4",authDomain:"mail-leads.firebaseapp.com",projectId:"mail-leads",storageBucket:"mail-leads.appspot.com",messagingSenderId:"765027549290",appId:"1:765027549290:web:ada721e668d6e9ce468a13",measurementId:"G-Z45NJC62VK"}),n=(0,s.ad)(i)},74270:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return O}});var l=a(57437),s=a(2265),i=a(15133),n=a(76623),r=a(21975),o=a(43226),c=a(52653),d=a(62786),u=a(42744),m=a.n(u),h=a(48558),p=a(7660),x=a(3216),g=a(24086),y=a(41421),j=a(63014),f=a(99227),v=a(64111),b=a(64210),w=a(50819),S=a(84142),N=a(85882),C=a(54986);let Z=a(74847),I=async e=>{try{let t=localStorage.getItem("accessToken");if(t){let a=y.KU.init({authProvider:async e=>{e(null,t)}});await a.api("/me/sendMail").post({message:{subject:"Email content",body:{contentType:"HTML",content:Z},toRecipients:[{emailAddress:{address:e}}]}}),(0,j.Am)("Email sent successfully")}}catch(e){console.log("Error",e)}},F={userName:"",email:"",company:"",country:"",business:"",recipientId:"",conversationId:"",followUpNo:1};var D=e=>{let t,{open:a,handleClose:i}=e,[d,u]=(0,s.useState)(F),m=e=>new Date(e).toLocaleString("en-US",{month:"numeric",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}),h=async()=>{try{let e=localStorage.getItem("accessToken");if(e){let a=y.KU.init({authProvider:async t=>{t(null,e)}}),l=d.email,s=(0,g.IO)((0,g.hJ)(f.F,"data"),(0,g.ar)("email","==",d.email));if((await (0,g.PL)(s)).empty&&d.business.length>0){let e=g.EK.now(),s=e.toDate(),i=m(s),n=new Date(s);n.setDate(s.getDate()+5);let r=m(n),o=g.EK.fromDate(n);await I(l);let c={select:"id, conversationId",search:'"to:'.concat(l,'"')};setTimeout(async function(){let l=await a.api("/me/mailFolders/sentitems/messages").query(c).top(1).get(),s=l.value[0].id,n=l.value[0].conversationId;u(e=>({...e,recipientId:s,conversationId:n})),await (0,g.r7)((0,g.JU)(f.F,"data",t),{recipientId:s,conversationId:n,followUpNo:d.followUpNo,initialDateAndTimeTimeStamp:e,initialDateAndTime:i,expectedFollowupDateTimeStamp:o,expectedFollowupDate:r})},2e3)}}}catch(e){console.log("error",e),(0,j.Am)(e)}},p=async e=>{try{t=(await (0,g.ET)((0,g.hJ)(f.F,"data"),{userName:e.userName,company:e.company,email:e.email,country:e.country,business:e.business,response:""})).id}catch(e){console.log("error",e)}},x=async e=>{e.preventDefault();try{let e=(0,g.IO)((0,g.hJ)(f.F,"data"),(0,g.ar)("email","==",d.email));(await (0,g.PL)(e)).empty?(await p(d),(0,j.Am)("Lead added successfully"),i(),u(F)):(0,j.Am)("Mail already exists in Database")}catch(e){console.log("Error checking duplicate email:",e)}},Z=()=>{i(),u({userName:"",email:"",company:"",country:"",business:""})};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(v.ZP,{open:a,anchor:"right",variant:"temporary",onClose:Z,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:{xs:300,sm:400}}},children:[(0,l.jsxs)("div",{className:"flex items-center justify-between pli-5 plb-[15px]",children:[(0,l.jsx)(o.Z,{variant:"h5",children:"Add New Lead"}),(0,l.jsx)(c.Z,{onClick:Z,children:(0,l.jsx)("i",{className:"ri-close-line"})})]}),(0,l.jsx)(C.Z,{}),(0,l.jsx)("div",{className:"p-5",children:(0,l.jsxs)("form",{onSubmit:x,className:"flex flex-col gap-5",children:[(0,l.jsx)(r.Z,{label:"Company",fullWidth:!0,value:d.company,onChange:e=>u({...d,company:e.target.value}),required:!0}),(0,l.jsx)(r.Z,{label:"Email",fullWidth:!0,value:d.email,onChange:e=>u({...d,email:e.target.value}),required:!0}),(0,l.jsx)(r.Z,{label:"Contact Person",fullWidth:!0,value:d.userName,onChange:e=>u({...d,userName:e.target.value})}),(0,l.jsxs)(b.Z,{fullWidth:!0,children:[(0,l.jsx)(w.Z,{id:"country",children:"Select Country"}),(0,l.jsxs)(N.Z,{fullWidth:!0,id:"country",value:d.country,onChange:e=>u({...d,country:e.target.value}),label:"Select Country",labelId:"country",inputProps:{placeholder:"Country"},required:!0,children:[(0,l.jsx)(S.Z,{value:"UK",children:"UK"}),(0,l.jsx)(S.Z,{value:"USA",children:"USA"}),(0,l.jsx)(S.Z,{value:"Australia",children:"Australia"}),(0,l.jsx)(S.Z,{value:"Germany",children:"Germany"})]})]}),(0,l.jsxs)(b.Z,{fullWidth:!0,children:[(0,l.jsx)(w.Z,{id:"Business",children:"Select Business"}),(0,l.jsxs)(N.Z,{fullWidth:!0,id:"Business",value:d.business,onChange:e=>u({...d,business:e.target.value}),label:"Select Business",labelId:"Business",inputProps:{placeholder:"Business"},required:!0,children:[(0,l.jsx)(S.Z,{value:"IT",children:"IT"}),(0,l.jsx)(S.Z,{value:"NON-IT",children:"NON-IT"})]})]}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)(n.Z,{variant:"contained",type:"submit",children:"Save"}),(0,l.jsx)(n.Z,{variant:"outlined",color:"error",type:"submit-send",onClick:()=>h(),children:"Save & Send"})]})]})})]})})},P=a(7435),T=a(79245),R=a(64173),k=e=>{let{leadId:t,open:a,handleClose:i}=e,[r,o]=(0,s.useState)(!1),c=async e=>{try{o(!0),await (0,g.oe)((0,g.JU)(f.F,"data",e)),console.log("Document successfully deleted!")}catch(e){console.error("Error deleting document: ",e)}finally{o(!1)}(0,j.Am)("Lead deleted successfully")};return(0,l.jsx)(P.Z,{open:a,onClose:i,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,l.jsxs)(T.Z,{sx:{position:"absolute",width:400,bgcolor:"background.paper",boxShadow:24,p:4,borderRadius:1},children:[(0,l.jsx)(R.Z,{id:"modal-modal-title",variant:"h6",component:"h2",sx:{mb:4},children:"Are you sure you want to delete this lead?"}),(0,l.jsxs)(T.Z,{sx:{display:"flex",justifyContent:"left",gap:2},children:[(0,l.jsx)(n.Z,{onClick:()=>{c(t),i()},variant:"contained",className:"is-full sm:is-auto",children:"Delete"}),(0,l.jsx)(n.Z,{onClick:()=>i(),variant:"contained",className:"is-full sm:is-auto",children:"Cancel"})]})]})})},A=e=>{let{open:t,handleClose:a,leadId:i}=e,[o,c]=(0,s.useState)(),[d,u]=(0,s.useState)(""),m=async e=>{try{d.length>0&&await (0,g.r7)((0,g.JU)(f.F,"data",e),{response:d}),o.length>0&&await (0,g.r7)((0,g.JU)(f.F,"data",e),{notes:o})}catch(e){console.log("Error",e)}},h=e=>{e.target.name===i&&u(e.target.value)},p=e=>{e.target.name===i&&c(e.target.value)},x=()=>{a(),u(""),c("")};return(0,l.jsx)(P.Z,{open:t,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,l.jsxs)(T.Z,{sx:{position:"absolute",width:400,bgcolor:"background.paper",boxShadow:24,p:4,borderRadius:1},children:[(0,l.jsxs)(b.Z,{fullWidth:!0,style:{marginBottom:"16px"},children:[(0,l.jsx)(w.Z,{id:i,children:"Select Response"}),(0,l.jsxs)(N.Z,{fullWidth:!0,label:"Select Response",labelId:"Response",value:d,name:i,inputProps:{placeholder:"Response"},onChange:e=>h(e),children:[(0,l.jsx)(S.Z,{value:"No-Response",children:"No-Response"}),(0,l.jsx)(S.Z,{value:"Positive",children:"Positive"}),(0,l.jsx)(S.Z,{value:"Negative",children:"Negative"})]})]}),(0,l.jsx)(r.Z,{label:"Notes",fullWidth:!0,multiline:!0,value:o,name:i,style:{marginBottom:"16px"},onChange:e=>p(e)}),(0,l.jsxs)(T.Z,{sx:{display:"flex",justifyContent:"left",gap:2},children:[(0,l.jsx)(n.Z,{onClick:()=>(m(i),x()),variant:"contained",className:"is-full sm:is-auto",children:"Save"}),(0,l.jsx)(n.Z,{onClick:()=>x(),variant:"contained",className:"is-full sm:is-auto",children:"Close"})]})]})})},E=a(85889),U=a.n(E);let M=(e,t,a,l)=>{let s=(0,h.O4)(e.getValue(t),a);return l({itemRank:s}),s.passed},_=e=>{let{value:t,onChange:a,debounce:i=500,...n}=e,[o,c]=(0,s.useState)(t);return(0,s.useEffect)(()=>{c(t)},[t]),(0,s.useEffect)(()=>{let e=setTimeout(()=>{a(o)},i);return()=>clearTimeout(e)},[o]),(0,l.jsx)(r.Z,{...n,value:o,onChange:e=>c(e.target.value),size:"small"})},L=(0,p.Cl)();var O=()=>{let[e,t]=(0,s.useState)(!1),[a,r]=(0,s.useState)(!1),[u,h]=(0,s.useState)({}),[v,b]=(0,s.useState)([]),[w,S]=(0,s.useState)(""),[N,C]=(0,s.useState)(),[Z,F]=(0,s.useState)(!1);(0,s.useEffect)(()=>{!async function(){b(await P())}()},[a,e,Z]);let P=async()=>{let e=await (0,g.PL)((0,g.hJ)(f.F,"data")),t=[];return e.forEach(e=>{t.push({id:e.id,...e.data()})}),t},T=async e=>{let t=e.currentTarget.id;try{let e=localStorage.getItem("accessToken");if(e){let a;let l=y.KU.init({authProvider:async t=>{t(null,e)}}),s=(await l.api("/me/mailFolders/sentitems/messages").select("id").select("toRecipients").get()).value.map(e=>({id:e.id,emailId:e.toRecipients[0].emailAddress.address}));console.log("user data",v),console.log("emails",s);let i=v.filter(e=>!s.some(t=>{let{emailId:a}=t;return e.email===a}));console.log("filter",i);let n=e=>new Date(e).toLocaleString("en-US",{month:"numeric",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});i.find(e=>{v.find(async s=>{if(t===e.id){a=!0,await I(e.email);let s=g.EK.now(),i=s.toDate(),r=n(i),o=new Date(i);o.setDate(i.getDate()+5);let c=n(o),d=g.EK.fromDate(o),u={select:"id, conversationId",search:'"to:'.concat(e.email,'"')};setTimeout(async function(){let e=await l.api("/me/mailFolders/sentitems/messages").query(u).top(1).get(),a=e.value[0].id,i=e.value[0].conversationId;await (0,g.r7)((0,g.JU)(f.F,"data",t),{initialDateAndTimeTimeStamp:s,initialDateAndTime:r,expectedFollowupDateTimeStamp:d,expectedFollowupDate:c,recipientId:a,conversationId:i,followUpNo:1});let n=await P();b(n)},2e3)}})}),a||(0,j.Am)("Mail already sent to user")}}catch(e){console.log("ERROR",e)}},R=(0,s.useMemo)(()=>[L.accessor("company",{header:"Company Name",cell:e=>{let{row:t}=e;return(0,l.jsx)(o.Z,{color:"text.primary",children:t.original.company})}}),L.accessor("email",{header:"Email",cell:e=>{let{row:t}=e;return(0,l.jsx)(o.Z,{color:"text.primary",children:t.original.email})}}),L.accessor("userName",{header:"Contact Person",cell:e=>{let{row:t}=e;return(0,l.jsx)("div",{className:"flex items-center gap-4",children:(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsx)(o.Z,{color:"text.primary",children:t.original.userName})})})}}),L.accessor("country",{header:"Country",cell:e=>{let{row:t}=e;return(0,l.jsx)(o.Z,{className:"capitalize",color:"text.primary",children:t.original.country})}}),L.accessor("business",{header:"Business",cell:e=>{let{row:t}=e;return(0,l.jsx)(o.Z,{color:"text.primary",children:t.original.business})}}),L.accessor("Initial D&T",{header:"Initial D&T",cell:e=>{let{row:t}=e;return(0,l.jsx)(o.Z,{color:"text.primary",children:t.original.initialDateAndTime})}}),L.accessor("Status",{header:"Response",cell:e=>{let{row:t}=e;return(0,l.jsx)(o.Z,{color:"text.primary",children:t.original.response})}}),L.accessor("Notes",{header:"Notes",cell:e=>{let{row:t}=e;return(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{color:"text.primary",variant:"body1",style:{whiteSpace:"pre-line"},children:t.original.notes})})}}),L.accessor("delete",{header:"Action",cell:e=>{let{row:t}=e;return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)(c.Z,{id:t.original.id,onClick:e=>T(e),children:(0,l.jsx)("i",{className:"ri-send-plane-2-line text-[22px] text-textSecondary"})}),(0,l.jsx)(c.Z,{onClick:()=>(C(t.original.id),F(!Z)),children:(0,l.jsx)("i",{className:"ri-edit-box-line text-[22px]"})}),(0,l.jsx)(c.Z,{onClick:()=>(C(t.original.id),r(!a)),children:(0,l.jsx)("i",{className:"ri-delete-bin-7-line text-[22px] text-textSecondary"})})]})},enableSorting:!1})],[v]),E=(0,x.b7)({data:v,columns:R,filterFns:{fuzzy:M},state:{rowSelection:u,globalFilter:w},initialState:{pagination:{pageSize:10}},enableRowSelection:!0,globalFilterFn:M,onRowSelectionChange:h,getCoreRowModel:(0,p.sC)(),onGlobalFilterChange:S,getFilteredRowModel:(0,p.vL)(),getSortedRowModel:(0,p.tj)(),getPaginationRowModel:(0,p.G_)(),getFacetedRowModel:(0,p.o6)(),getFacetedUniqueValues:(0,p.JG)(),getFacetedMinMaxValues:(0,p.HO)()});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)("div",{className:"flex justify-between p-5 gap-4 flex-col items-start sm:flex-row sm:items-center",children:[(0,l.jsx)(_,{value:null!=w?w:"",onChange:e=>S(String(e)),placeholder:"Search User",className:"is-full sm:is-auto"}),(0,l.jsx)(n.Z,{variant:"contained",onClick:()=>t(!e),className:"is-full sm:is-auto",children:"Add New Lead"})]}),(0,l.jsx)("div",{className:"overflow-x-auto",children:(0,l.jsxs)("table",{className:U().table,children:[(0,l.jsx)("thead",{children:E.getHeaderGroups().map(e=>(0,l.jsx)("tr",{children:e.headers.map(e=>{var t;return(0,l.jsx)("th",{children:e.isPlaceholder?null:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:m()({"flex items-center":e.column.getIsSorted(),"cursor-pointer select-none":e.column.getCanSort()}),onClick:e.column.getToggleSortingHandler(),children:[(0,x.ie)(e.column.columnDef.header,e.getContext()),null!==(t=({asc:(0,l.jsx)("i",{className:"ri-arrow-up-s-line text-xl"}),desc:(0,l.jsx)("i",{className:"ri-arrow-down-s-line text-xl"})})[e.column.getIsSorted()])&&void 0!==t?t:null]})})},e.id)})},e.id))}),0===E.getFilteredRowModel().rows.length?(0,l.jsx)("tbody",{children:(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:E.getVisibleFlatColumns().length,className:"text-center",children:"No data available"})})}):(0,l.jsx)("tbody",{children:E.getRowModel().rows.slice(0,E.getState().pagination.pageSize).map(e=>(0,l.jsx)("tr",{className:m()({selected:e.getIsSelected()}),children:e.getVisibleCells().map(e=>(0,l.jsx)("td",{children:(0,x.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id))})]})}),(0,l.jsx)(d.Z,{rowsPerPageOptions:[10,25,50],component:"div",className:"border-bs",count:E.getFilteredRowModel().rows.length,rowsPerPage:E.getState().pagination.pageSize,page:E.getState().pagination.pageIndex,SelectProps:{inputProps:{"aria-label":"rows per page"}},onPageChange:(e,t)=>{E.setPageIndex(t)},onRowsPerPageChange:e=>E.setPageSize(Number(e.target.value))})]}),(0,l.jsx)(D,{open:e,handleClose:()=>t(!e)}),(0,l.jsx)(k,{leadId:N,open:a,handleClose:()=>r(!a)}),(0,l.jsx)(A,{leadId:N,open:Z,handleClose:()=>F(!Z)})]})}},74847:function(e){e.exports='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Email Template</title>\n</head>\n<body>\n    <div>\n      Hello\n    </div>\n</body>\n</html>\n'},85889:function(e){e.exports={table:"table_table__cB3AL",cellWithInput:"table_cellWithInput__N6u24"}}},function(e){e.O(0,[358,174,582,8,977,158,707,971,938,744],function(){return e(e.s=79217)}),_N_E=e.O()}]);