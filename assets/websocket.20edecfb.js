import{_ as ee}from"./utils.30b28a2e.js";import{W as te,d as oe,_ as ae}from"./regex.47aea6be.js";import{a as se,_ as ne}from"./Tab.vue_vue_type_script_setup_true_lang.ebb0cf62.js";import{f as le,E as ce,at as re,h as E,au as h,g as ie,av as de,aw as ue,V as me,X as L,ao as pe,ax as k,ay as ge,o as O,c as ve,w as m,e as n,i as d,v as V,j as e,a1 as M,N as R,k as _e,a as l,t as G,az as fe,aA as be,K as ye,aB as he,d as ke,m as Ce,a5 as Se,a2 as we,aC as Ee,aD as xe,aE as Ne,aF as $e,aG as De,x as Ie,z as Te,aH as Pe,aI as We,aJ as Le,aK as Oe,aL as Ve,aM as Me,aN as Re}from"./index.cb7d2b1b.js";import{_ as Ge}from"./Communication.vue_vue_type_script_setup_true_lang.feb2855a.js";import{I as z}from"./check-circle.741ca2e2.js";import{I as ze}from"./grip-vertical.9229403b.js";import{d as Be}from"./vuedraggable.umd.336b3c3b.js";import"./date.5007ec6f.js";import"./lens-actions.d9daeb6a.js";import"./json.eb8ef70b.js";import"./newOutline.84c9d5d0.js";import"./json.50ff94ee.js";import"./TaskOption.1d4f6c52.js";import"./files.4937b996.js";const Ue={class:"sticky top-0 z-10 flex flex-shrink-0 p-4 space-x-2 overflow-x-auto bg-primary"},je={class:"inline-flex flex-1 space-x-2"},Ae=["placeholder","disabled"],Fe={class:"sticky z-10 flex items-center justify-between flex-shrink-0 pl-4 overflow-x-auto border-b bg-primary border-dividerLight top-upperSecondaryStickyFold"},Ke={class:"font-semibold truncate text-secondaryLight"},He={class:"flex"},Je={class:"flex border-b divide-x divide-dividerLight border-dividerLight draggable-content group"},Xe=["onUpdate:modelValue","placeholder","onChange"],qe={key:0,class:"flex flex-col items-center justify-center p-4 text-secondaryLight"},Qe=["src","alt"],Ye={class:"mb-4 text-center"},vt=le({__name:"websocket",setup(Ze){const o=ce(),C=Se(),B=we(),{subscribeToStream:U}=re(),x=E("communication"),c=h(We,"",Pe),r=h(Oe,[],Le),S=ie({get(){return r.value.map((t,a)=>({id:`protocol-${a}-${t.value}`,protocol:t}))},set(t){r.value=t.map(({protocol:a})=>a)}}),p=h(ue,new de,Ve),i=me(p.value.connectionState$,"DISCONNECTED"),b=h(Re,[],Me),y=E(!0),N=E([]);let g;L(c,t=>{t&&K()}),L(r,t=>{N.value=t.filter(a=>Object.prototype.hasOwnProperty.call(a,"active")?a.active===!0:!0).map(({value:a})=>a)},{deep:!0});const j=({data:t})=>{t.url===c.value&&(y.value=t.result)},A=t=>t instanceof SyntaxError?t.message:o("error.something_went_wrong").toString();pe(()=>{g=new te,g.addEventListener("message",j),U(p.value.event$,t=>{switch(t==null?void 0:t.type){case"CONNECTING":b.value=[{payload:`${o("state.connecting_to",{name:c.value})}`,source:"info",color:"var(--accent-color)",ts:void 0}];break;case"CONNECTED":b.value=[{payload:`${o("state.connected_to",{name:c.value})}`,source:"info",color:"var(--accent-color)",ts:Date.now()}],C.success(`${o("state.connected")}`);break;case"MESSAGE_SENT":k({payload:t.message,source:"client",ts:Date.now()});break;case"MESSAGE_RECEIVED":k({payload:t.message,source:"server",ts:t.time});break;case"ERROR":k({payload:A(t.error),source:"info",color:"#ff5555",ts:t.time});break;case"DISCONNECTED":k({payload:o("state.disconnected_from",{name:c.value}).toString(),source:"disconnected",color:"#ff5555",ts:t.time}),C.error(`${o("state.disconnected")}`);break}})}),ge(()=>{g&&g.terminate()});const F=()=>{Ee()},K=oe(function(){g.postMessage({type:"ws",url:c.value})},1e3),$=()=>{if(i.value==="DISCONNECTED")return p.value.connect(c.value,N.value);p.value.disconnect()},H=t=>{p.value.sendMessage(t)},J=()=>{xe({value:"",active:!0})},X=t=>{const a=r.value.slice();Ne(t),C.success(`${o("state.deleted")}`,{duration:4e3,action:{text:`${o("action.undo")}`,onClick:(I,w)=>{r.value=a,w.goAway()}}})},D=(t,a)=>{$e(t,a)},q=()=>{b.value=[]};return(t,a)=>{const I=De,w=Ge,T=se,v=Ie,Q=ne,Y=ae,Z=ee,_=Te("tippy");return O(),ve(Z,{"layout-id":"websocket"},{primary:m(()=>[n("div",Ue,[n("div",je,[d(n("input",{id:"websocket-url","onUpdate:modelValue":a[0]||(a[0]=s=>M(c)?c.value=s:null),class:R(["w-full px-4 py-2 border rounded bg-primaryLight border-divider text-secondaryDark",{error:!y.value}]),type:"url",autocomplete:"off",spellcheck:"false",placeholder:`${e(o)("websocket.url")}`,disabled:e(i)==="CONNECTED"||e(i)==="CONNECTING",onKeyup:a[1]||(a[1]=_e(s=>y.value?$():null,["enter"]))},null,42,Ae),[[V,e(c)]]),l(I,{id:"connect",disabled:!y.value,class:"w-32",name:"connect",label:e(i)==="CONNECTING"?e(o)("action.connecting"):e(i)==="DISCONNECTED"?e(o)("action.connect"):e(o)("action.disconnect"),loading:e(i)==="CONNECTING",onClick:$},null,8,["disabled","label","loading"])])]),l(Q,{modelValue:x.value,"onUpdate:modelValue":a[4]||(a[4]=s=>x.value=s),styles:"sticky overflow-x-auto flex-shrink-0 bg-primary top-upperPrimaryStickyFold z-10","render-inactive-tabs":""},{default:m(()=>[l(T,{id:"communication",label:`${e(o)("websocket.communication")}`},{default:m(()=>[l(w,{"is-connected":e(i)==="CONNECTED","sticky-header-styles":"top-upperSecondaryStickyFold",onSendMessage:a[2]||(a[2]=s=>H(s))},null,8,["is-connected"])]),_:1},8,["label"]),l(T,{id:"protocols",label:`${e(o)("websocket.protocols")}`},{default:m(()=>[n("div",Fe,[n("label",Ke,G(e(o)("websocket.protocols")),1),n("div",He,[d(l(v,{title:e(o)("action.clear_all"),icon:e(fe),onClick:F},null,8,["title","icon"]),[[_,{theme:"tooltip"}]]),d(l(v,{title:e(o)("add.new"),icon:e(be),onClick:J},null,8,["title","icon"]),[[_,{theme:"tooltip"}]])])]),l(e(Be),{modelValue:e(S),"onUpdate:modelValue":a[3]||(a[3]=s=>M(S)?S.value=s:null),"item-key":"id",animation:"250",handle:".draggable-handle",draggable:".draggable-content","ghost-class":"cursor-move","chosen-class":"bg-primaryLight","drag-class":"cursor-grabbing"},{item:m(({element:{protocol:s},index:u})=>{var P,W;return[n("div",Je,[n("span",null,[d(l(v,{icon:e(ze),class:R(["cursor-auto text-primary hover:text-primary",{"draggable-handle group-hover:text-secondaryLight !cursor-grab":u!==((P=e(r))==null?void 0:P.length)-1}]),tabindex:"-1"},null,8,["icon","class"]),[[_,{theme:"tooltip",delay:[500,20],content:u!==((W=e(r))==null?void 0:W.length)-1?e(o)("action.drag_to_reorder"):null}]])]),d(n("input",{"onUpdate:modelValue":f=>s.value=f,class:"flex flex-1 px-4 py-2 bg-transparent",placeholder:`${e(o)("count.protocol",{count:u+1})}`,name:"message",type:"text",autocomplete:"off",onChange:f=>D(u,{value:f.target.value,active:s.active})},null,40,Xe),[[V,s.value]]),n("span",null,[d(l(v,{title:s.hasOwnProperty("active")?s.active?e(o)("action.turn_off"):e(o)("action.turn_on"):e(o)("action.turn_off"),icon:s.hasOwnProperty("active")?s.active?e(z):e(ye):e(z),color:"green",onClick:f=>D(u,{value:s.value,active:!s.active})},null,8,["title","icon","onClick"]),[[_,{theme:"tooltip"}]])]),n("span",null,[d(l(v,{title:e(o)("action.remove"),icon:e(he),color:"red",onClick:f=>X(u)},null,8,["title","icon","onClick"]),[[_,{theme:"tooltip"}]])])])]}),_:1},8,["modelValue"]),e(r).length===0?(O(),ke("div",qe,[n("img",{src:`/images/states/${e(B).value}/add_category.svg`,loading:"lazy",class:"inline-flex flex-col object-contain object-center w-16 h-16 my-4",alt:`${e(o)("empty.protocols")}`},null,8,Qe),n("span",Ye,G(e(o)("empty.protocols")),1)])):Ce("",!0)]),_:1},8,["label"])]),_:1},8,["modelValue"])]),secondary:m(()=>[l(Y,{title:e(o)("websocket.log"),log:e(b),onDelete:a[5]||(a[5]=s=>q())},null,8,["title","log"])]),_:1})}}});export{vt as default};
//# sourceMappingURL=websocket.20edecfb.js.map
