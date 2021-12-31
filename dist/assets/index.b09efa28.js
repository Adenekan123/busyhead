var ke=Object.defineProperty,Ce=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var X=(e,n,r)=>n in e?ke(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,g=(e,n)=>{for(var r in n||(n={}))Ne.call(n,r)&&X(e,r,n[r]);if(K)for(var r of K(n))je.call(n,r)&&X(e,r,n[r]);return e},b=(e,n)=>Ce(e,Ae(n));import{r as v,s as w,u as k,j as m,a as t,L as J,T as Q,t as E,N as _,b as C,c as $,S as Re,d as Z,F as Oe,C as Le,e as Pe,B as De,R as ze,f as S,g as A,h as N,p as j,i as R,k as Ie,l as _e,m as Ge,n as qe,o as Me,q as Fe,P as Je}from"./vendor.0c8b7af4.js";const We=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))a(h);new MutationObserver(h=>{for(const o of h)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(h){const o={};return h.integrity&&(o.integrity=h.integrity),h.referrerpolicy&&(o.referrerPolicy=h.referrerpolicy),h.crossorigin==="use-credentials"?o.credentials="include":h.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(h){if(h.ep)return;h.ep=!0;const o=r(h);fetch(h.href,o)}};We();const Be=localStorage.getItem("isAuth"),Ue=Be!=null;function He(){const[e,n]=v.exports.useState(Ue);return{isAuth:e,setIsAuth:n}}const p={primary:"#f4f7f5",primaryText:"#535657",secondary:"#dee7e7",tertiary:"#4f646f",junior:"#fff",fontMed:"1.2rem",setColor(e){e.forEach(n=>this[n.key]?this[n.key=n.value]:!1)}},Ve=w.div`
  padding: 2rem;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  form {
    background-color: ${p.junior};
    padding: 2rem;
    box-sizing: border-box;
    width: 30%;
    font-size: 1.2rem;
    box-shadow: 0px 25px 30px rgba(0, 0, 0, 5%);

    @media (max-width: 900px) {
      width: 80%;
    }
    @media (max-width: 750px) {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 1rem;
      box-sizing: border-box;
      margin-bottom: 3rem;
      font-size: 1.2rem;
      border: 1px solid ${p.tertiary};
    }
    label {
      display: block;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    button {
      border: 1px solid;
      background: ${p.tertiary};
      color: ${p.junior};
      padding: 0.7rem 1.5rem;
      border: 0px;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        background: ${p.primaryText};
      }
    }

    legend {
      font-size: 2rem;
      margin-bottom: 3rem;
      font-weight: bold;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 1.2rem;
      margin-top: 2rem;

      a {
        text-decoration: none;
      }
    }
  }
`,y="";const Ye=({setIsAuth:e})=>{const[n,r]=v.exports.useState({username:"",password:""}),a=k(),h=d=>{r(l=>b(g({},l),{[d.target.name]:d.target.value}))};async function o(d){d.preventDefault();const l=E.loading("Authenticating User");try{const u=await(await fetch(`${y}/login`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g({},n))})).json();if(console.log(u),u.loggedin==!0)return E.update(l,{render:"Login Successful",type:"success",isLoading:!1,position:E.POSITION.TOP_CENTER,autoClose:7e3}),e(!0),localStorage.setItem("isAuth",!0),a("/",{replace:!0});E.update(l,{render:"Invalid Username or Password",type:"error",isLoading:!1,position:E.POSITION.TOP_CENTER,autoClose:7e3})}catch{e(!1)}}return m(Ve,{children:[m("form",{onSubmit:o,children:[t("legend",{children:"Busy Head"}),t("label",{htmlFor:"username",children:"Username"}),t("input",{type:"email",name:"username",id:"username",placeholder:"Enter username",onChange:h,value:n.username}),t("label",{htmlFor:"password",children:"Password"}),t("input",{type:"password",name:"password",id:"password",placeholder:"Enter Password",onChange:h,value:n.password}),t("center",{children:t("button",{children:"Login"})}),m("p",{children:["New user ? ",t(J,{to:"/adduser",children:"Create new account"})]})]}),t(Q,{autoClose:8e3})]})},Ke=w.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  form {
    background-color: ${p.junior};
    padding: 2rem;
    box-sizing: border-box;
    width: 30%;
    font-size: 1.2rem;
    box-shadow: 0px 25px 30px rgba(0, 0, 0, 5%);
    margin-top: 10rem;

    @media (max-width: 900px) {
      width: 80%;
    }
    @media (max-width: 750px) {
      width: 100%;
    }

    input {
      width: 100%;
      padding: 0.5rem 1rem;
      box-sizing: border-box;
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
      border: 1px solid ${p.tertiary};
    }
    label {
      display: block;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    button {
      border: 1px solid;
      background: ${p.tertiary};
      color: ${p.junior};
      padding: 0.7rem 1.5rem;
      border: 0px;
      font-size: 1.5rem;
      cursor: pointer;
      margin-top: 2rem;

      &:hover {
        background: ${p.primaryText};
      }
    }

    legend {
      font-size: 2rem;
      margin-bottom: 3rem;
      font-weight: bold;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 1.2rem;
      margin-top: 2rem;

      a {
        text-decoration: none;
      }
    }
  }
`,Xe=()=>{const[e,n]=v.exports.useState({firstname:"",lastname:"",title:"",phone:"",email:"",password:""}),r=k(),a=o=>{n(d=>b(g({},d),{[o.target.name]:o.target.value}))};async function h(o){o.preventDefault();const d=E.loading("Submitting Data");try{const c=await(await fetch(`${y}/api/user`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g({},e))})).json();if(console.log(c),c._id)return E.update(d,{render:"Account Created Successfully. Now Login",type:"success",isLoading:!1,position:E.POSITION.TOP_CENTER,autoClose:7e3}),r("/login",{replace:!0})}catch{E.update(d,{render:"Unable To Submit Data. Check Your Internet Connection",type:"error",isLoading:!1,position:E.POSITION.TOP_CENTER,autoClose:7e3})}}return m(Ke,{children:[m("form",{onSubmit:h,children:[t("legend",{children:"Create Account"}),t("label",{htmlFor:"firstname",children:"Firstname"}),t("input",{type:"text",name:"firstname",id:"firstname",placeholder:"Enter Firstname",onChange:a}),t("label",{htmlFor:"lastname",children:"Lastname"}),t("input",{type:"text",name:"lastname",id:"lastname",placeholder:"Enter Lastname",onChange:a}),t("label",{htmlFor:"title",children:"Title"}),t("input",{type:"text",name:"title",id:"title",placeholder:"Enter Title",onChange:a}),t("label",{htmlFor:"phone",children:"Phone"}),t("input",{type:"text",name:"phone",id:"phone",placeholder:"Enter Phone",onChange:a}),t("label",{htmlFor:"email",children:"Email"}),t("input",{type:"text",name:"email",id:"email",placeholder:"Enter Email",onChange:a}),t("label",{htmlFor:"title",children:"Password"}),t("input",{type:"password",name:"password",id:"password",placeholder:"Enter Password",onChange:a}),t("center",{children:t("button",{children:"Register"})}),m("p",{children:["Already have an account ? ",t(J,{to:"/login",children:"Login"})]})]}),t(Q,{})]})},Qe=w.div`
    ${""}
    max-width: ${e=>e.showMenu?"300px":"80px"};
    flex-basis:${e=>e.showMenu?"300px":"80px"};
    background-color:${p.junior};
    height:100vh;
    transition:all .5s;

    @media(max-width:750px){
        max-width: ${e=>e.showMenu?"100%":"60px"};
        flex-basis:${e=>e.showMenu?"100%":"60px"};
    }

    p{
        padding:0rem 2rem;
        font-size:1.5rem;
        line-height:0;

        @media(max-width:750px){
            padding:0rem 1rem;
        }
    }

    ul{
        padding: 5em 0;
        font-size:1.2rem;
        white-space:nowrap;

        @media(max-width:750px){
            padding: 2em 0;
        }

        li a{
            padding:1.5rem 2rem;
            display:flex;
            align-items:center;
            text-decoration:none;

            @media(max-width:750px){
                padding:1.5rem 1em ;
            }
 
            i{
                margin-right:2rem;
                color:${p.primaryText};
            }

            &.active{
                background-color:${p.secondary};
                font-weight:bold;
            }
            &:hover{
                background-color:${p.primary};

            }
        }
    }

`;function Ze(){const[e,n]=v.exports.useState(!1);return{showMenu:e,setShowMenu:n}}const et=()=>{const{showMenu:e,setShowMenu:n}=Ze(),r=()=>{e&&n(!1)};return m(Qe,{showMenu:e,children:[t("p",{onClick:()=>n(a=>!a),children:e?t("i",{className:"fas fa-times"}):t("i",{className:"fas fa-bars"})}),m("ul",{children:[t("li",{children:m(_,{to:"/newtask",className:({isActive:a})=>a?"active":void 0,onClick:()=>r(),children:[t("i",{className:"far fa-plus-square"}),t("span",{children:"Add New"})]})}),t("li",{children:m(_,{to:"/",className:({isActive:a})=>a?"active":void 0,onClick:()=>r(),children:[t("i",{className:"far fa-list-alt"}),t("span",{children:"Todos"})]})}),t("li",{children:m(_,{to:"/drafts",className:({isActive:a})=>a?"active":void 0,onClick:()=>r(),children:[t("i",{className:"far fa-sticky-note"}),t("span",{children:"Drafts"})]})}),t("li",{children:m(_,{to:"/archives",className:({isActive:a})=>a?"active":void 0,onClick:()=>r(),children:[t("i",{className:"fas fa-history"}),t("span",{children:"Archive"})]})}),t("li",{children:m(_,{to:"/recycles",className:({isActive:a})=>a?"active":void 0,onClick:()=>r(),children:[t("i",{className:"far fa-trash-alt"}),t("span",{children:"Recycles"})]})})]})]})},tt=w.div`
  height: 2rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  ${""}
  color: ${p.primaryText};
  font-weight: bold;
  background-color: ${p.junior};
  border-bottom: 1px solid ${p.secondary};
  ${""}

  @media (max-width: 750px) {
    white-space: nowrap;
  }

  p {
    text-align: center;
    cursor: pointer;
  }

  .notification {
    ${""}
    position: absolute;
    right: 7rem;

    i {
      font-size: 1.3rem;
      color: ${p.tertiary};
    }

    span {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      border-radius: 0.5rem;
      min-width: 30px;
      min-height: 15px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
      background-color: ${p.secondary};
    }
  }
`,ee="setprofile",te="getprofile",nt=e=>({type:ee,profile:e}),ot=()=>({type:te}),rt={profile:void 0};function it(e=rt,n){switch(n.type){case ee:const{profile:r}=n;return b(g({},e),{profile:r});default:return e}}const at=w.div`
  padding: 0px;

  p {
    padding: 1rem 2rem;
    ${""}
    text-transform: capitalize;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${p.secondary};
    }
  }

  button {
    border: 0px;
    outline: 0px;
    background: ${p.tertiary};
    color: ${p.junior};
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
  }
`;function st({data:e,logout:n}){return e?m(at,{children:[m("p",{children:["Name:",e.firstname+" "+e.lastname]}),m("p",{children:["Phone:",e.phone]}),m("p",{children:["Email:",e.email]}),t("center",{children:t("button",{onClick:n,children:"Logout"})})]}):t("p",{children:"No Profile"})}function lt({setIsAuth:e}){const n=C(),r=async()=>{try{const c=await(await fetch(`${y}/logout`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})).json();return console.log(c),e(!1),localStorage.removeItem("isAuth"),t(Z,{to:"/login"})}catch(l){console.log(l)}},a=$(l=>l.profile.profile),[h,o]=v.exports.useState(!1),d=()=>{o(l=>!l)};return v.exports.useEffect(()=>{n(ot())},[n]),t(Re,{sidebar:t(st,{data:a,logout:r}),pullRight:!0,open:h,onSetOpen:d,styles:{sidebar:{background:"white",width:"300px",padding:0,position:"fixed",top:"4rem"},overlay:{background:"none",top:"4rem",right:0,width:"200px",marginLeft:"auto",padding:0},root:{right:0,width:"80px",height:"4rem",left:"auto",padding:0,display:"flex"}},children:t("i",{className:"fas fa-user-circle",style:{fontSize:"1.5rem",display:"block",float:"right",marginTop:"1.2rem",marginRight:"2rem"},onClick:()=>d()})})}const dt=({isAuth:e,setIsAuth:n})=>{console.log({isAuth:e});const r=$(a=>a.reminders.totalReminders);return m(tt,{children:[t("p",{children:" Busy Head"}),m(Oe,{children:[m(J,{to:"/reminders",className:"notification",children:[t("i",{className:"fas fa-bell"}),r?t("span",{children:r}):""]}),e&&t(lt,{setIsAuth:n})]})]})},ct=w.div`
  flex: 1;
  height: 100vh;
  overflow: hidden;
  background-color: ${p.primary};
  position: relative;
  z-index: 1000;
  ${""};
`,pt=w.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,ht=w.div`

    margin-top:1rem;
    margin-bottom:2rem;

    
    div.action{
        display:flex;
        justify-content:space-between;
        ${""}
        padding:1rem;
        @media(max-width:750px){
            white-space:nowrap;
        }
    }

    div.tasks{
        display:grid;
        grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
        grid-auto-rows: repeat( min-content,max-content);
        gap:1rem;
        padding:1.5rem;
        

    }
`,ut=w.div`
  flex: 0 1 250px;
  background-color: white;
  padding: 1rem;
  background-color: ${p.junior};
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.08);

  a {
    text-decoration: none;
  }

  div.countdown {
    margin-top: 40px;
    width: 100%;
    height: 50px;
    border-radius: 50px;
    background-color: ${p.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    color: ${p.primaryText};
    border: 1px solid ${p.secondary};
    font-weight: bold;
    font-size: small;
    text-align: center;
    z-index: "0"
      ${""};
  }

  div.body {
    text-align: center;
    color: ${p.primaryText};
  }
`,ne="settodos",mt="archivetodos",oe="gettodos",re="setloader",G=e=>({type:ne,todos:e}),ft=()=>({type:oe}),L=e=>({type:re,payload:e}),gt={todos:void 0,loader:!1};function yt(e=gt,n){switch(n.type){case ne:const{todos:r}=n;return b(g({},e),{todos:r});case re:const{payload:a}=n;return b(g({},e),{loader:a});default:return e}}const ie="setreminders",ae="setloader",se="getreminders",W=e=>({type:ie,reminders:e}),B=()=>({type:se}),P=e=>({type:ae,payload:e}),xt={reminders:void 0,totalReminders:0,loader:!1},bt=e=>{let n=0;if(!e||!Array.isArray(e)||e.length<1)return;const r=e.reduce((a,h)=>a.tasks.length+h.tasks.length);return typeof r=="object"?n=r.tasks.length:n=r,n};function wt(e=xt,n){switch(n.type){case ie:const{reminders:r}=n;return b(g({},e),{reminders:r,totalReminders:bt(r)});case ae:const{payload:a}=n;return b(g({},e),{loader:a});default:return e}}const vt=({todos:e,task:n,docid:r,showdate:a,toggleSelect:h,isSelected:o})=>{const d=C(),{_id:l,title:c,date:u}=n;let i=location.pathname;i=i=="/"?"/todos":i;const s=async()=>{try{const f=await fetch("/api/todos/remind",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({docid:r,_id:l})}),{data:x,deletedCount:Te}=await f.json();Te>0&&(d(G(x)),d(B()))}catch(f){Console.log(f)}};return m(ut,{children:[o(r,l)?t("input",{type:"checkbox",onClick:()=>h(r,l),checked:!0}):t("input",{type:"checkbox",onClick:()=>h(r,l),name:"",id:""}),m("div",{children:[a&&t("div",{className:"countdown",children:t(Le,{date:u,onComplete:s})}),m("div",{className:"body",children:[t("h4",{children:c}),t(J,{to:`/viewtask${i}/${r}/${l}`,children:"View"})]})]})]})},q=({todos:e,todo:n,archiveAll:r,toggleSelectAll:a,toggleSelect:h,isSelected:o,showdate:d})=>{const{_id:l,date:c,tasks:u}=n;return m(ht,{children:[m("div",{className:"action",children:[t("span",{children:u.length>0&&c}),m("div",{children:["select All",t("input",{type:"checkbox",name:"",id:"",onClick:()=>a(l,u)})]})]}),t("div",{className:"tasks",children:u?u.map((i,s)=>t(vt,{todos:e,task:i,docid:l,isSelected:o,toggleSelect:h,archiveAll:r,showdate:d},s)):"Loading tasks..."})]})},St=w.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  border-bottom: 1px solid ${p.secondary};
  background: ${p.primary};
  padding: 1rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  @media (max-width: 750px) {
    justify-content: center;
    white-space: nowrap;
  }

  button {
    font-size: ${p.fontMed};
    border: 0px;
    padding: 0.5rem 1rem;
    cursor: pointer;

    :nth-of-type(1) {
      background: ${p.secondary};
      color: ${p.tertiary};
      margin-right: 1rem;
    }
    :nth-of-type(2) {
      background: ${p.tertiary};
      color: ${p.primary};
    }

    :last-of-type {
      margin-right: 2rem;
    }

    &:hover {
      filter: brightness(120%);
    }
  }
`,M=({btns:e})=>t(St,{children:e.map((n,r)=>t("button",{className:"junior",onClick:()=>n.action(),children:n.title},r))}),$t=w.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);

  .loader {
    font-size: 3.5rem;
    color: ${p.junior};
  }
`;function T(){return t($t,{children:t("i",{className:"loader fas fa-spinner fa-spin"})})}const F=()=>{const[e,n]=v.exports.useState([]);return{resetSelect:()=>n([]),toggleSelectAll:(d,l)=>{const c=[...e],u=c.findIndex(i=>i.selectid===d);if(u!=-1)if(c[u].taskids.length===l.length){const i=c.filter(s=>s.selectid!==d);n(i)}else{const i=l.map(s=>s._id);c[u].taskids=i,n(c)}else{const i=l.map(f=>f._id),s={selectid:d,taskids:i};n(f=>[...f,s])}},toggleSelect:(d,l)=>{const c=[...e],u=c.findIndex(i=>i.selectid===d);if(u!=-1){const i=c[u].taskids.findIndex(s=>s===l);i>-1?c[u].taskids.splice(i,1):c[u].taskids.push(l)}else{const i={selectid:d,taskids:[l]};c.push(i)}n(c)},isSelected:(d,l)=>{const c=[...e],u=c.findIndex(i=>i.selectid===d);return u===-1?!1:c[u].taskids.some(i=>i===l)},select:e,setSelect:n}},Et=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:a,isSelected:h}=F(),o=C(),d=k();v.exports.useEffect(()=>{o(ft()),o(B())},[o]);const l=async()=>{o(L(!0));const s=[...e],f=await fetch(`${y}/api/todos/archive`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(G(x)),o(L(!1)),n([])},c=async()=>{o(L(!0));const s=[...e],f=await fetch(`${y}/api/todos/trash`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(G(x)),o(L(!1)),n([])},u=$(s=>s.todos.loader),i=$(s=>s.todos.todos);return i&&i.loggedin===!1&&(o(L(!1)),localStorage.removeItem("isAuth"),d("/login")),i&&i.length===0?(o(L(!1)),t("h3",{children:"No todos found"})):m(pt,{children:[u&&t(T,{}),t(M,{btns:[{title:"Archive",action:l},{title:"Delete",action:c}]}),i&&Array.isArray(i)?i.map((s,f)=>t(q,{todos:i,showdate:!0,todo:s,select:e,toggleSelectAll:a,archiveAll:l,toggleSelect:r,isSelected:h},f)):t(T,{})]})},Tt=w.div`

    width:100%;
    height:calc(100vh - 4rem);

    padding: 1rem;
    display:flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    
    form{
        box-sizing: border-box;

        flex: 1 0 50%;
        max-width: 50%;

        @media(max-width:750px){
            flex: 1 0 100%;
            max-width: 100%;
            white-space: nowrap;
        }

        &>div{
            width:100%;

            :not(:last-of-type){
                margin-bottom:2rem;
            }

            &.form_action{
                width:100%;
                @media(max-width:750px){
                    display:flex;
                }
            }

            &.form_action button{
                font-size: 1.2rem;
                padding: .8rem 1rem;
                border:0px;
                cursor:pointer;

                @media(max-width:750px){
                    padding: 8px 10px;
                }

                :nth-of-type(1){
                    background-color: ${p.tertiary};
                    color: ${p.junior};
                    margin-right:2rem;

                    @media(max-width:750px){
                        margin-right:1rem;
                    }
                    
                }
                :nth-of-type(2){
                    background-color: ${p.secondary};
                    ${""}
                }
            }
        }

        label{
            display:block;
            margin-bottom:1rem;
        }

        input{
            width:100%;
            padding: 1rem;
            background-color: ${p.junior};
            border:1px solid ${p.tertiary};
            box-sizing: border-box;

            

        }

        textarea{
            width:100%;
            background-color: ${p.junior};
            border:1px solid ${p.tertiary};
            box-sizing: border-box;
            padding: 1rem;

        }

        
    }
`,U={title:"",reminderdate:"",description:""},le=()=>{const[e,n]=v.exports.useState(U),r=d=>n(l=>b(g({},l),{[d.target.name]:d.target.value})),a=()=>{const d=g({},e);for(let l in d)if(d[l]===""||d[l]===void 0)return!1;return!0},h=async()=>{if(!a())return alert("Please enter all required fileds");(await(await fetch(`${y}/api/todos/add`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(g({},e))})).json())._id&&(alert("Task added successfully"),n(U))},o=async()=>{if(!a())return alert("Please enter all required fileds");(await(await fetch(`${y}/api/draft/add`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(g({},e))})).json())._id&&(alert("Draft added successfully"),n(U))};return t(Tt,{children:m("form",{action:"",children:[m("div",{children:[t("label",{children:"Title:"}),t("input",{type:"text",name:"title",placeholder:"Enter title",id:"",onChange:r,value:e.title})]}),m("div",{children:[t("label",{children:"Reminder Date:"}),t("input",{type:"datetime-local",name:"reminderdate",placeholder:"Enter title",id:"",onChange:r,value:e.reminderdate})]}),m("div",{children:[t("label",{children:"Note:"}),t("textarea",{name:"description",rows:"4",placeholder:"Enter description",onChange:r,value:e.description})]}),m("div",{className:"form_action",children:[t("button",{type:"button",onClick:h,children:"Add to task"}),t("button",{type:"button",onClick:o,children:"Add to draft"})]})]})})},kt=w.div`

    width:100%;
    height:calc(100vh - 4rem);
    padding:1rem;

    display:flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    
    form{
        flex: 1 0 50%;
        max-width: 50%;
        box-sizing: border-box;

        @media(max-width:750px){
            flex: 1 0 100%;
            max-width: 100%;
            white-space: nowrap;
        }

        &>div{
            width:100%;

            :not(:last-of-type){
                margin-bottom:2rem;
            }

            &.form_action button{
                font-size: 1.2rem;
                padding: .8rem 1rem;
                border:0px;
                cursor:pointer;

                @media(max-width:750px){
                    padding: 8px 10px;
                }

                :nth-of-type(1){
                    background-color: ${p.tertiary};
                    color: ${p.junior};
                    margin-right:2rem;

                    @media(max-width:750px){
                        margin-right:1rem;
                    }
                    
                }
                :nth-of-type(2){
                    background-color: ${p.secondary};
                    ${""}
                }
            }
        }

        label{
            display:block;
            margin-bottom:1rem;
        }

        input{
            width:100%;
            padding: 1rem;
            background-color: ${p.junior};
            border:1px solid ${p.tertiary};
            box-sizing: border-box;

            

        }

        textarea{
            width:100%;
            background-color: ${p.junior};
            border:1px solid ${p.tertiary};
            box-sizing: border-box;
            padding: 1rem;

        }

        
    }
`,de={title:"",reminderdate:"",description:""},ce=()=>{const{document:e,docid:n,id:r}=Pe(),[a,h]=v.exports.useState(de),o=c=>h(u=>b(g({},u),{[c.target.name]:c.target.value}));v.exports.useEffect(()=>{e&&n&&(console.log(`${y}/${e}/${n}/${r}`),fetch(`${y}/api/${e}/${n}/${r}`,{credentials:"include",headers:{"Content-Type":"application/json"}}).then(c=>c.json()).then(c=>{console.log({result:c});const{tasks:u}=c.data[0];h(i=>({title:u[0].title,description:u[0].description,reminderdate:u[0].date}))}).catch(c=>{console.log(c)}))},[]);const d=()=>{const c=g({},a);for(let u in c)if(c[u]===""||c[u]===void 0)return!1;return!0},l=async()=>{if(!d())return alert("Please enter all required fileds");const u=await(await fetch(`${y}/api/${e}/update`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(b(g({},a),{docid:n,id:r}))})).json();console.log(u),u.updatedCount&&(alert("Task updated successfully"),h(de))};return t(kt,{children:m("form",{action:"",children:[m("div",{children:[t("label",{children:"Title:"}),t("input",{type:"text",name:"title",placeholder:"Enter title",id:"",onChange:o,value:a.title})]}),m("div",{children:[t("label",{children:"Reminder Date:"}),t("input",{type:"datetime-local",name:"reminderdate",placeholder:"Enter title",id:"",onChange:o,value:a.reminderdate})]}),m("div",{children:[t("label",{children:"Note:"}),t("textarea",{name:"description",rows:"4",placeholder:"Enter description",onChange:o,value:a.description})]}),t("div",{className:"form_action",children:t("button",{type:"button",onClick:l,children:"Edit task"})})]})})},Ct=w.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,pe="getdrafts",he="setdrafts",ue="setloader",At=()=>({type:pe}),H=e=>({type:he,drafts:e}),Nt={drafts:void 0,loader:!1},D=e=>({type:ue,payload:e});function jt(e=Nt,n){switch(n.type){case he:const{drafts:r}=n;return b(g({},e),{drafts:r});case ue:const{payload:a}=n;return b(g({},e),{loader:a});default:return e}}const me=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:a,isSelected:h}=F(),o=C(),d=k();v.exports.useEffect(()=>{o(At())},[o]);const l=async()=>{o(D(!0));const s=[...e],f=await fetch(`${y}/api/drafts/add`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(H(x)),o(D(!1)),n([])},c=async()=>{o(D(!0));const s=[...e],f=await fetch(`${y}/api/drafts/delete`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(H(x)),o(D(!1)),n([])},u=$(s=>s.drafts.loader),i=$(s=>s.drafts.drafts);return i&&i.loggedin===!1&&(o(D(!1)),localStorage.removeItem("isAuth"),d("/login")),i&&i.length===0?(o(D(!1)),t("h3",{children:"No Drafts found"})):m(Ct,{children:[u&&t(T,{}),t(M,{btns:[{title:"Add to task",action:l},{title:"Delete",action:c}]}),i&&Array.isArray(i)?i.map((s,f)=>t(q,{showdate:!1,todo:s,toggleSelectAll:a,toggleSelect:r,isSelected:h},f)):t(T,{})]})},Rt=w.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,fe="getarchives",ge="setarchives",ye="setloader",Ot=()=>({type:fe}),V=e=>({type:ge,archives:e}),z=e=>({type:ye,payload:e}),Lt={archives:void 0,loader:!1};function Pt(e=Lt,n){switch(n.type){case ge:const{archives:r}=n;return b(g({},e),{archives:r});case ye:const{payload:a}=n;return b(g({},e),{loader:a});default:return e}}const xe=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:a,isSelected:h}=F(),o=C(),d=k();v.exports.useEffect(()=>{o(Ot())},[o]);const l=async()=>{o(z(!0));const s=[...e],f=await fetch(`${y}/api/archives/reset`,{method:"POST",headers:{"Content-type":"application/json"},credentials:"include",body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(V(x)),o(z(!1)),n([])},c=async()=>{o(z(!0));const s=[...e],f=await fetch(`${y}/api/archives/delete`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(V(x)),o(z(!1)),n([])},u=$(s=>s.archives.loader),i=$(s=>s.archives.archives);return i&&i.loggedin===!1&&(o(z(!1)),localStorage.removeItem("isAuth"),d("/login")),i&&i.length===0?(o(z(!1)),t("h3",{children:"No archives found"})):m(Rt,{children:[u&&t(T,{}),t(M,{btns:[{title:"Reset task",action:l},{title:"Delete",action:c}]}),i&&Array.isArray(i)?i.map((s,f)=>t(q,{showdate:!1,todo:s,toggleSelectAll:a,toggleSelect:r,isSelected:h},f)):t(T,{})]})},Dt=w.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,be="setrecycles",we="setloader",ve="getrecycles",Y=e=>({type:be,recycles:e}),zt=()=>({type:ve}),I=e=>({type:we,payload:e}),It={recycles:void 0,loader:!1};function _t(e=It,n){switch(n.type){case be:const{recycles:r}=n;return b(g({},e),{recycles:r});case we:const{payload:a}=n;return b(g({},e),{loader:a});default:return e}}const Se=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:a,isSelected:h}=F(),o=C(),d=k();v.exports.useEffect(()=>{o(zt()),console.log("ran dispatch")},[o]);const l=async()=>{o(I(!0));const s=[...e],f=await fetch(`${y}/api/recycles/restore`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(Y(x)),o(I(!1)),n([])},c=async()=>{o(I(!0));const s=[...e],f=await fetch(`${y}/api/recycles/delete`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(Y(x)),o(I(!1)),n([])},u=$(s=>s.recycles.loader),i=$(s=>s.recycles.recycles);return i&&i.loggedin===!1&&(o(I(!1)),localStorage.removeItem("isAuth"),d("/login")),i&&i.length===0?(o(I(!1)),t("h3",{children:"No Recycles found"})):m(Dt,{children:[u&&t(T,{}),t(M,{btns:[{title:"Restore",action:l},{title:"Delete",action:c}]}),i&&Array.isArray(i)?i.map((s,f)=>t(q,{showdate:!1,todo:s,toggleSelectAll:a,toggleSelect:r,isSelected:h},f)):t(T,{})]})},Gt=w.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,$e=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:a,isSelected:h}=F(),o=C(),d=k();v.exports.useEffect(()=>{o(B()),console.log("ran dispatch")},[o]);const l=async()=>{o(P(!0));const s=[...e],f=await fetch(`${y}/api/reminders/archive`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(W(x)),o(P(!1)),n([])},c=async()=>{o(P(!0));const s=[...e],f=await fetch(`${y}/api/reminders/delete`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:s})}),{data:x}=await f.json();o(W(x)),o(P(!1)),n([])},u=$(s=>s.reminders.loader),i=$(s=>s.reminders.reminders);return i&&i.loggedin===!1&&(o(P(!1)),localStorage.removeItem("isAuth"),d("/login")),i&&i.length===0?(o(P(!1)),t("h3",{children:"No Reminders found"})):m(Gt,{children:[u&&t(T,{}),t(M,{btns:[{title:"Done it",action:l},{title:"Delete",action:c}]}),i&&Array.isArray(i)?i.map((s,f)=>t(q,{showdate:!1,todo:s,toggleSelectAll:a,toggleSelect:r,isSelected:h},f)):t(T,{})]})},O=({isAuth:e,Component:n})=>e?t(n,{}):t(Z,{to:"/login",state:{from:location}});function qt(){v.exports.useState(0);const{isAuth:e,setIsAuth:n}=He();return t("div",{style:{display:"flex"},children:m(De,{children:[e&&t(et,{}),m(ct,{children:[e&&t(dt,{isAuth:e,setIsAuth:n}),t("div",{className:"content",children:m(ze,{children:[t(S,{path:"/login",element:t(Ye,{setIsAuth:n})}),t(S,{path:"/adduser",element:t(Xe,{})}),t(S,{path:"/",element:t(O,{isAuth:e,Component:Et})}),t(S,{path:"/drafts",element:t(O,{isAuth:e,Component:me}),children:t(S,{element:t(me,{})})}),t(S,{path:"/archives",element:t(O,{isAuth:e,Component:xe}),children:t(S,{element:t(xe,{})})}),t(S,{path:"/recycles",element:t(O,{isAuth:e,Component:Se}),children:t(S,{element:t(Se,{})})}),t(S,{path:"/reminders",element:t(O,{isAuth:e,Component:$e}),children:t(S,{element:t($e,{})})}),t(S,{path:"/newtask",element:t(O,{isAuth:e,Component:le}),children:t(S,{element:t(le,{})})}),t(S,{path:"/viewtask/:document/:docid/:id",element:t(O,{isAuth:e,Component:ce}),children:t(S,{element:t(ce,{})})})]})})]})]})})}function Mt(){return A.request({method:"GET",url:`${y}/api/todos`,withCredentials:!0})}function Ft(){return A.request({method:"GET",url:`${y}/api/todos`})}function*Jt(){const e=yield N(Mt),{data:n}=e;yield j(G(n))}function*Wt(){const e=yield N(Ft),{data:n}=e;yield j(G(n))}function Bt(){return A.request({method:"GET",url:`${y}/api/drafts`,withCredentials:!0})}function*Ut(){const e=yield N(Bt),{data:n}=e;yield j(H(n))}function Ht(){return A.request({method:"GET",url:`${y}/api/archives`,withCredentials:!0})}function*Vt(){const e=yield N(Ht),{data:n}=e;yield j(V(n))}function Yt(){return A.request({method:"GET",url:`${y}/api/recycles`,withCredentials:!0})}function*Kt(){const e=yield N(Yt),{data:n}=e;yield j(Y(n))}function Xt(){return A.request({method:"GET",url:`${y}/api/reminders`,withCredentials:!0})}function*Qt(){const e=yield N(Xt),{data:n}=e;yield j(W(n))}function Zt(){return A.request({method:"GET",url:`${y}/api/profile`,withCredentials:!0})}function*en(){const e=yield N(Zt),{data:n}=e;yield j(nt(n))}function*tn(){yield R(oe,Jt),yield R(mt,Wt),yield R(pe,Ut),yield R(fe,Vt),yield R(ve,Kt),yield R(se,Qt),yield R(te,en)}const nn="setloader",on="getloader",rn={loader:!0};function an(e=rn,n){switch(n.type){case on:return g({},e);case nn:const{stateValue:r}=n;return b(g({},e),{loader:r});default:return e}}const sn=Ie({todos:yt,drafts:jt,archives:Pt,recycles:_t,reminders:wt,profile:it,loader:an}),Ee=_e(),ln=[Ee],dn=Ge(sn,{},qe(...ln));Ee.run(tn);Me.render(t(Fe.StrictMode,{children:t(Je,{store:dn,children:t(qt,{})})}),document.getElementById("root"));
