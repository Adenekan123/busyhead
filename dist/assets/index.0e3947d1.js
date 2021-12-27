var pe=Object.defineProperty,he=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var F=(e,n,r)=>n in e?pe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,g=(e,n)=>{for(var r in n||(n={}))me.call(n,r)&&F(e,r,n[r]);if(q)for(var r of q(n))fe.call(n,r)&&F(e,r,n[r]);return e},w=(e,n)=>he(e,ue(n));import{r as y,s as x,u as J,j as t,a as u,L as O,N as T,b as C,c as v,S as ge,d as W,F as ye,e as xe,B as be,R as we,f as b,g as S,h as $,p as k,t as A,i as ve,k as Se,l as $e,m as ke,n as Ae,o as Ee,P as Ce}from"./vendor.623711df.js";const Te=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))s(h);new MutationObserver(h=>{for(const a of h)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(h){const a={};return h.integrity&&(a.integrity=h.integrity),h.referrerpolicy&&(a.referrerPolicy=h.referrerpolicy),h.crossorigin==="use-credentials"?a.credentials="include":h.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(h){if(h.ep)return;h.ep=!0;const a=r(h);fetch(h.href,a)}};Te();const je=localStorage.getItem("isAuth"),Ne=je!=null;function Re(){const[e,n]=y.exports.useState(Ne);return{isAuth:e,setIsAuth:n}}const d={primary:"#f4f7f5",primaryText:"#535657",secondary:"#dee7e7",tertiary:"#4f646f",junior:"#fff",fontMed:"1.2rem",setColor(e){e.forEach(n=>this[n.key]?this[n.key=n.value]:!1)}},Oe=x.div`
  padding: 2rem;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  form {
    background-color: ${d.junior};
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
      border: 1px solid ${d.tertiary};
    }
    label {
      display: block;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    button {
      border: 1px solid;
      background: ${d.tertiary};
      color: ${d.junior};
      padding: 0.7rem 1.5rem;
      border: 0px;
      font-size: 1.5rem;
      cursor: pointer;

      &:hover {
        background: ${d.primaryText};
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
`,f="",Pe=({setIsAuth:e})=>{const[n,r]=y.exports.useState({username:"",password:""}),s=J(),h=l=>{console.log(l.target.value),r(p=>w(g({},p),{[l.target.name]:l.target.value}))};async function a(l){l.preventDefault();try{const i=await(await fetch(`${f}/login`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g({},n))})).json();if(console.log(i),i.loggedin==!0)return console.log("setting is Auth"),e(!0),localStorage.setItem("isAuth",!0),s("/",{replace:!0})}catch{e(!1)}}return t(Oe,{children:u("form",{onSubmit:a,children:[t("legend",{children:"Busy Head"}),t("label",{htmlFor:"username",children:"Username"}),t("input",{type:"email",name:"username",id:"username",placeholder:"Enter username",onChange:h,value:n.username}),t("label",{htmlFor:"password",children:"Password"}),t("input",{type:"password",name:"password",id:"password",placeholder:"Enter Password",onChange:h,value:n.password}),t("center",{children:t("button",{children:"Login"})}),u("p",{children:["New user ? ",t(O,{to:"/adduser",children:"Create new account"})]})]})})},ze=x.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  form {
    background-color: ${d.junior};
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
      border: 1px solid ${d.tertiary};
    }
    label {
      display: block;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    button {
      border: 1px solid;
      background: ${d.tertiary};
      color: ${d.junior};
      padding: 0.7rem 1.5rem;
      border: 0px;
      font-size: 1.5rem;
      cursor: pointer;
      margin-top: 2rem;

      &:hover {
        background: ${d.primaryText};
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
`,Le=()=>{const[e,n]=y.exports.useState({firstname:"",lastname:"",title:"",phone:"",email:"",password:""}),r=J(),s=a=>{console.log(a.target.value),n(l=>w(g({},l),{[a.target.name]:a.target.value}))};async function h(a){a.preventDefault();try{const p=await(await fetch(`${f}/api/user`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(g({},e))})).json();if(console.log(p),p._id)return alert("Account created successfully"),r("/login",{replace:!0})}catch{alert("Something went wrong. Contact admin")}}return t(ze,{children:u("form",{onSubmit:h,children:[t("legend",{children:"Create Account"}),t("label",{htmlFor:"firstname",children:"Firstname"}),t("input",{type:"text",name:"firstname",id:"firstname",placeholder:"Enter Firstname",onChange:s}),t("label",{htmlFor:"lastname",children:"Lastname"}),t("input",{type:"text",name:"lastname",id:"lastname",placeholder:"Enter Lastname",onChange:s}),t("label",{htmlFor:"title",children:"Title"}),t("input",{type:"text",name:"title",id:"title",placeholder:"Enter Title",onChange:s}),t("label",{htmlFor:"phone",children:"Phone"}),t("input",{type:"text",name:"phone",id:"phone",placeholder:"Enter Phone",onChange:s}),t("label",{htmlFor:"email",children:"Email"}),t("input",{type:"text",name:"email",id:"email",placeholder:"Enter Email",onChange:s}),t("label",{htmlFor:"title",children:"Password"}),t("input",{type:"password",name:"password",id:"password",placeholder:"Enter Password",onChange:s}),t("center",{children:t("button",{children:"Register"})}),u("p",{children:["Already have an account ? ",t(O,{to:"/login",children:"Login"})]})]})})},De=x.div`
    ${""}
    max-width: ${e=>e.showMenu?"300px":"80px"};
    flex-basis:${e=>e.showMenu?"300px":"80px"};
    background-color:${d.junior};
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
                color:${d.primaryText};
            }

            &.active{
                background-color:${d.secondary};
                font-weight:bold;
            }
            &:hover{
                background-color:${d.primary};

            }
        }
    }

`;function _e(){const[e,n]=y.exports.useState(!1);return{showMenu:e,setShowMenu:n}}const Ge=()=>{const{showMenu:e,setShowMenu:n}=_e(),r=()=>{e&&n(!1)};return u(De,{showMenu:e,children:[t("p",{onClick:()=>n(s=>!s),children:e?t("i",{className:"fas fa-times"}):t("i",{className:"fas fa-bars"})}),u("ul",{children:[t("li",{children:u(T,{to:"/newtask",className:({isActive:s})=>s?"active":void 0,onClick:()=>r(),children:[t("i",{className:"far fa-plus-square"}),t("span",{children:"Add New"})]})}),t("li",{children:u(T,{to:"/",className:({isActive:s})=>s?"active":void 0,onClick:()=>r(),children:[t("i",{className:"far fa-list-alt"}),t("span",{children:"Todos"})]})}),t("li",{children:u(T,{to:"/drafts",className:({isActive:s})=>s?"active":void 0,onClick:()=>r(),children:[t("i",{className:"far fa-sticky-note"}),t("span",{children:"Drafts"})]})}),t("li",{children:u(T,{to:"/archives",className:({isActive:s})=>s?"active":void 0,onClick:()=>r(),children:[t("i",{className:"fas fa-history"}),t("span",{children:"Archive"})]})}),t("li",{children:u(T,{to:"/recycles",className:({isActive:s})=>s?"active":void 0,onClick:()=>r(),children:[t("i",{className:"far fa-trash-alt"}),t("span",{children:"Recycles"})]})})]})]})},Ie=x.div`
  height: 2rem;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  ${""}
  color: ${d.primaryText};
  font-weight: bold;
  background-color: ${d.junior};
  border-bottom: 1px solid ${d.secondary};
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
      color: ${d.tertiary};
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
      background-color: ${d.secondary};
    }
  }
`,B="setprofile",H="getprofile",Me=e=>({type:B,profile:e}),qe=()=>({type:H}),Fe={profile:void 0};function Je(e=Fe,n){switch(n.type){case B:const{profile:r}=n;return w(g({},e),{profile:r});default:return e}}const We=x.div`
  padding: 0px;

  p {
    padding: 1rem 2rem;
    ${""}
    text-transform: capitalize;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${d.secondary};
    }
  }

  button {
    border: 0px;
    outline: 0px;
    background: ${d.tertiary};
    color: ${d.junior};
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
  }
`;function Be({data:e,logout:n}){return e?u(We,{children:[u("p",{children:["Name:",e.firstname+" "+e.lastname]}),u("p",{children:["Phone:",e.phone]}),u("p",{children:["Email:",e.email]}),t("center",{children:t("button",{onClick:n,children:"Logout"})})]}):t("p",{children:"No Profile"})}function He({setIsAuth:e}){const n=C(),r=async()=>{try{const i=await(await fetch(`${f}/logout`,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})).json();return console.log(i),e(!1),localStorage.removeItem("isAuth"),t(W,{to:"/login"})}catch(p){console.log(p)}},s=v(p=>p.profile.profile),[h,a]=y.exports.useState(!1),l=()=>{a(p=>!p)};return y.exports.useEffect(()=>{n(qe())},[n]),t(ge,{sidebar:t(Be,{data:s,logout:r}),pullRight:!0,open:h,onSetOpen:l,styles:{sidebar:{background:"white",width:"300px",padding:0,position:"fixed",top:"4rem"},overlay:{background:"none",top:"4rem",right:0,width:"200px",marginLeft:"auto",padding:0},root:{right:0,width:"80px",height:"4rem",left:"auto",padding:0,display:"flex"}},children:t("i",{className:"fas fa-user-circle",style:{fontSize:"1.5rem",display:"block",float:"right",marginTop:"1.2rem",marginRight:"2rem"},onClick:()=>l()})})}const Ue=({isAuth:e,setIsAuth:n})=>{console.log({isAuth:e});const r=v(s=>s.reminders.totalReminders);return u(Ie,{children:[t("p",{children:" Busy Head"}),u(ye,{children:[u(O,{to:"/reminders",className:"notification",children:[t("i",{className:"fas fa-bell"}),r?t("span",{children:r}):""]}),e&&t(He,{setIsAuth:n})]})]})},Ve=x.div`
  flex: 1;
  height: 100vh;
  overflow: hidden;
  background-color: ${d.primary};
  position: relative;
  z-index: 1000;
  ${""};
`,Ye=x.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,Ke=x.div`

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
`,Xe=x.div`
  flex: 0 1 250px;
  background-color: white;
  padding: 1rem;
  background-color: ${d.junior};
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.08);

  a {
    text-decoration: none;
  }

  div.countdown {
    margin-top: 40px;
    width: 100%;
    height: 50px;
    border-radius: 50px;
    background-color: ${d.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    color: ${d.primaryText};
    border: 1px solid ${d.secondary};
    font-weight: bold;
    font-size: small;
    text-align: center;
    z-index: "0"
      ${""};
  }

  div.body {
    text-align: center;
    color: ${d.primaryText};
  }
`,U="settodos",Qe="archivetodos",V="gettodos",P=e=>({type:U,todos:e}),Ze=()=>({type:V}),et={todos:void 0};function tt(e=et,n){switch(n.type){case U:const{todos:r}=n;return w(g({},e),{todos:r});default:return e}}const Y="setreminders",K="getreminders",L=e=>({type:Y,reminders:e}),D=()=>({type:K}),nt={reminders:void 0,totalReminders:0},rt=e=>{let n=0;if(!e||!Array.isArray(e)||e.length<1)return;const r=e.reduce((s,h)=>s.tasks.length+h.tasks.length);return typeof r=="object"?n=r.tasks.length:n=r,n};function ot(e=nt,n){switch(n.type){case Y:const{reminders:r}=n;return w(g({},e),{reminders:r,totalReminders:rt(r)});default:return e}}const it=({todos:e,task:n,docid:r,showdate:s,toggleSelect:h,isSelected:a})=>{const{_id:l,title:p,date:i}=n;let o=location.pathname;return o=o=="/"?"/todos":o,u(Xe,{children:[a(r,l)?t("input",{type:"checkbox",onClick:()=>h(r,l),checked:!0}):t("input",{type:"checkbox",onClick:()=>h(r,l),name:"",id:""}),u("div",{children:[s&&t("div",{className:"countdown",children:i}),u("div",{className:"body",children:[t("h4",{children:p}),t(O,{to:`/viewtask${o}/${r}/${l}`,children:"View"})]})]})]})},j=({todos:e,todo:n,archiveAll:r,toggleSelectAll:s,toggleSelect:h,isSelected:a,showdate:l})=>{const{_id:p,date:i,tasks:o}=n;return u(Ke,{children:[u("div",{className:"action",children:[t("span",{children:o.length>0&&i}),u("div",{children:["select All",t("input",{type:"checkbox",name:"",id:"",onClick:()=>s(p,o)})]})]}),t("div",{className:"tasks",children:o?o.map((c,m)=>t(it,{todos:e,task:c,docid:p,isSelected:a,toggleSelect:h,archiveAll:r,showdate:l},m)):"Loading tasks..."})]})},at=x.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  border-bottom: 1px solid ${d.secondary};
  background: ${d.primary};
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
    font-size: ${d.fontMed};
    border: 0px;
    padding: 0.5rem 1rem;
    cursor: pointer;

    :nth-of-type(1) {
      background: ${d.secondary};
      color: ${d.tertiary};
      margin-right: 1rem;
    }
    :nth-of-type(2) {
      background: ${d.tertiary};
      color: ${d.primary};
    }

    :last-of-type {
      margin-right: 2rem;
    }

    &:hover {
      filter: brightness(120%);
    }
  }
`,N=({btns:e})=>t(at,{children:e.map((n,r)=>t("button",{className:"junior",onClick:()=>n.action(),children:n.title},r))}),R=()=>{const[e,n]=y.exports.useState([]);return{resetSelect:()=>n([]),toggleSelectAll:(l,p)=>{const i=[...e],o=i.findIndex(c=>c.selectid===l);if(o!=-1)if(i[o].taskids.length===p.length){const c=i.filter(m=>m.selectid!==l);n(c)}else{const c=p.map(m=>m._id);i[o].taskids=c,n(i)}else{const c=p.map(z=>z._id),m={selectid:l,taskids:c};n(z=>[...z,m])}},toggleSelect:(l,p)=>{const i=[...e],o=i.findIndex(c=>c.selectid===l);if(o!=-1){const c=i[o].taskids.findIndex(m=>m===p);c>-1?i[o].taskids.splice(c,1):i[o].taskids.push(p)}else{const c={selectid:l,taskids:[p]};i.push(c)}n(i)},isSelected:(l,p)=>{const i=[...e],o=i.findIndex(c=>c.selectid===l);return o===-1?!1:i[o].taskids.some(c=>c===p)},select:e,setSelect:n}},st=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:s,isSelected:h}=R(),a=C(),l=async()=>{const o=[...e],c=await fetch(`${f}/api/todos/archive`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(P(m)),a(D()),n([])},p=async()=>{const o=[...e],c=await fetch(`${f}/api/todos/trash`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(P(m)),n([])};y.exports.useEffect(()=>{console.log("re-rendered the state"),a(Ze()),a(D()),console.log("ran dispatch")},[a]);const i=v(o=>o.todos.todos);return console.log({todos:i}),!Array.isArray(i)||i.length===0?t("h3",{children:"No todos found"}):u(Ye,{children:[t(N,{btns:[{title:"Archive",action:l},{title:"Delete",action:p}]}),i&&Array.isArray(i)?i.map((o,c)=>t(j,{todos:i,showdate:!0,todo:o,select:e,toggleSelectAll:s,archiveAll:l,toggleSelect:r,isSelected:h},c)):"Loading.."]})},lt=x.div`

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
                    background-color: ${d.tertiary};
                    color: ${d.junior};
                    margin-right:2rem;

                    @media(max-width:750px){
                        margin-right:1rem;
                    }
                    
                }
                :nth-of-type(2){
                    background-color: ${d.secondary};
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
            background-color: ${d.junior};
            border:1px solid ${d.tertiary};
            box-sizing: border-box;

            

        }

        textarea{
            width:100%;
            background-color: ${d.junior};
            border:1px solid ${d.tertiary};
            box-sizing: border-box;
            padding: 1rem;

        }

        
    }
`,_={title:"",reminderdate:"",description:""},X=()=>{const[e,n]=y.exports.useState(_),r=l=>n(p=>w(g({},p),{[l.target.name]:l.target.value})),s=()=>{const l=g({},e);for(let p in l)if(l[p]===""||l[p]===void 0)return!1;return!0},h=async()=>{if(!s())return alert("Please enter all required fileds");(await(await fetch(`${f}/api/todos/add`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(g({},e))})).json())._id&&(alert("Task added successfully"),n(_))},a=async()=>{if(!s())return alert("Please enter all required fileds");(await(await fetch(`${f}/api/draft/add`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(g({},e))})).json())._id&&(alert("Draft added successfully"),n(_))};return t(lt,{children:u("form",{action:"",children:[u("div",{children:[t("label",{children:"Title:"}),t("input",{type:"text",name:"title",placeholder:"Enter title",id:"",onChange:r,value:e.title})]}),u("div",{children:[t("label",{children:"Reminder Date:"}),t("input",{type:"datetime-local",name:"reminderdate",placeholder:"Enter title",id:"",onChange:r,value:e.reminderdate})]}),u("div",{children:[t("label",{children:"Note:"}),t("textarea",{name:"description",rows:"4",placeholder:"Enter description",onChange:r,value:e.description})]}),u("div",{className:"form_action",children:[t("button",{type:"button",onClick:h,children:"Add to task"}),t("button",{type:"button",onClick:a,children:"Add to draft"})]})]})})},ct=x.div`

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
                    background-color: ${d.tertiary};
                    color: ${d.junior};
                    margin-right:2rem;

                    @media(max-width:750px){
                        margin-right:1rem;
                    }
                    
                }
                :nth-of-type(2){
                    background-color: ${d.secondary};
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
            background-color: ${d.junior};
            border:1px solid ${d.tertiary};
            box-sizing: border-box;

            

        }

        textarea{
            width:100%;
            background-color: ${d.junior};
            border:1px solid ${d.tertiary};
            box-sizing: border-box;
            padding: 1rem;

        }

        
    }
`,Q={title:"",reminderdate:"",description:""},Z=()=>{const{document:e,docid:n,id:r}=xe(),[s,h]=y.exports.useState(Q),a=i=>h(o=>w(g({},o),{[i.target.name]:i.target.value}));y.exports.useEffect(()=>{e&&n&&fetch(`${f}/${e}/${n}/${r}`,{credentials:"include",headers:{"Content-Type":"application/json"}}).then(i=>i.json()).then(i=>{const{tasks:o}=i.data[0];h(c=>({title:o[0].title,description:o[0].description,reminderdate:o[0].date}))}).catch(i=>{console.log(i)})},[]);const l=()=>{const i=g({},s);for(let o in i)if(i[o]===""||i[o]===void 0)return!1;return!0},p=async()=>{if(!l())return alert("Please enter all required fileds");(await(await fetch(`${f}/api/${e}/update`,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(w(g({},s),{docid:n,id:r}))})).json()).updatedCount&&(alert("Task updated successfully"),h(Q))};return t(ct,{children:u("form",{action:"",children:[u("div",{children:[t("label",{children:"Title:"}),t("input",{type:"text",name:"title",placeholder:"Enter title",id:"",onChange:a,value:s.title})]}),u("div",{children:[t("label",{children:"Reminder Date:"}),t("input",{type:"datetime-local",name:"reminderdate",placeholder:"Enter title",id:"",onChange:a,value:s.reminderdate})]}),u("div",{children:[t("label",{children:"Note:"}),t("textarea",{name:"description",rows:"4",placeholder:"Enter description",onChange:a,value:s.description})]}),t("div",{className:"form_action",children:t("button",{type:"button",onClick:p,children:"Edit task"})})]})})},dt=x.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,ee="getdrafts",te="setdrafts",pt=()=>({type:ee}),G=e=>({type:te,drafts:e}),ht={drafts:void 0};function ut(e=ht,n){switch(n.type){case te:const{drafts:r}=n;return w(g({},e),{drafts:r});default:return e}}const ne=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:s,isSelected:h}=R(),a=C(),l=async()=>{const o=[...e],c=await fetch(`${f}/api/drafts/add`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(G(m)),n([])},p=async()=>{const o=[...e],c=await fetch(`${f}/api/drafts/delete`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(G(m)),n([])};y.exports.useEffect(()=>{a(pt())},[a]);const i=v(o=>o.drafts.drafts);return!Array.isArray(i)||i.length===0?t("h3",{children:"No Draft found"}):u(dt,{children:[t(N,{btns:[{title:"Add to task",action:l},{title:"Delete",action:p}]}),i&&Array.isArray(i)?i.map((o,c)=>t(j,{showdate:!1,todo:o,toggleSelectAll:s,toggleSelect:r,isSelected:h},c)):"Loading.."]})},mt=x.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,re="getarchives",oe="setarchives",ft=()=>({type:re}),I=e=>({type:oe,archives:e}),gt={archives:void 0};function yt(e=gt,n){switch(n.type){case oe:const{archives:r}=n;return w(g({},e),{archives:r});default:return e}}const ie=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:s,isSelected:h}=R(),a=C(),l=async()=>{const o=[...e],c=await fetch(`${f}/api/archives/reset`,{method:"POST",headers:{"Content-type":"application/json"},credentials:"include",body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(I(m)),n([])},p=async()=>{const o=[...e],c=await fetch(`${f}/api/archives/delete`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(I(m)),n([])};y.exports.useEffect(()=>{a(ft())},[a]);const i=v(o=>o.archives.archives);return!Array.isArray(i)||i.length===0?t("h3",{children:"No Archives found"}):u(mt,{children:[t(N,{btns:[{title:"Reset task",action:l},{title:"Delete",action:p}]}),i&&Array.isArray(i)?i.map((o,c)=>t(j,{showdate:!1,todo:o,toggleSelectAll:s,toggleSelect:r,isSelected:h},c)):"Loading.."]})},xt=x.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,ae="setrecycles",se="getrecycles",M=e=>({type:ae,recycles:e}),bt=()=>({type:se}),wt={recycles:void 0};function vt(e=wt,n){switch(n.type){case ae:const{recycles:r}=n;return w(g({},e),{recycles:r});default:return e}}const le=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:s,isSelected:h}=R(),a=C(),l=async()=>{const o=[...e],c=await fetch(`${f}/api/recycles/restore`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(M(m)),n([])},p=async()=>{const o=[...e],c=await fetch(`${f}/api/recycles/delete`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(M(m)),n([])};y.exports.useEffect(()=>{console.log("re-rendered the state"),a(bt()),console.log("ran dispatch")},[a]);const i=v(o=>o.recycles.recycles);return!Array.isArray(i)||i.length===0?t("h3",{children:"No Recycles found"}):u(xt,{children:[t(N,{btns:[{title:"Restore",action:l},{title:"Delete",action:p}]}),i&&Array.isArray(i)?i.map((o,c)=>t(j,{showdate:!1,todo:o,toggleSelectAll:s,toggleSelect:r,isSelected:h},c)):"Loading.."]})},St=x.div`
    ${""}
    height:calc(100vh - 4rem);
    overflow:hidden;
    overflow-y:auto;
`,ce=()=>{const{select:e,setSelect:n,toggleSelect:r,toggleSelectAll:s,isSelected:h}=R(),a=C(),l=async()=>{const o=[...e],c=await fetch(`${f}/api/reminders/archive`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(L(m)),n([])},p=async()=>{const o=[...e],c=await fetch(`${f}/api/reminders/delete`,{method:"DELETE",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({allSelects:o})}),{data:m}=await c.json();a(L(m)),n([])};y.exports.useEffect(()=>{console.log("re-rendered the state"),a(D()),console.log("ran dispatch")},[a]);const i=v(o=>o.reminders.reminders);return!Array.isArray(i)||i.length===0?t("h3",{children:"No reminders found"}):u(St,{children:[t(N,{btns:[{title:"Done it",action:l},{title:"Delete",action:p}]}),i&&Array.isArray(i)?i.map((o,c)=>t(j,{showdate:!1,todo:o,toggleSelectAll:s,toggleSelect:r,isSelected:h},c)):"Loading.."]})},E=({isAuth:e,Component:n})=>e?t(n,{}):t(W,{to:"/login",state:{from:location}});function $t(){y.exports.useState(0);const{isAuth:e,setIsAuth:n}=Re();return t("div",{style:{display:"flex"},children:u(be,{children:[e&&t(Ge,{}),u(Ve,{children:[e&&t(Ue,{isAuth:e,setIsAuth:n}),t("div",{className:"content",children:u(we,{children:[t(b,{path:"/login",element:t(Pe,{setIsAuth:n})}),t(b,{path:"/adduser",element:t(Le,{})}),t(b,{path:"/",element:t(E,{isAuth:e,Component:st})}),t(b,{path:"/drafts",element:t(E,{isAuth:e,Component:ne}),children:t(b,{element:t(ne,{})})}),t(b,{path:"/archives",element:t(E,{isAuth:e,Component:ie}),children:t(b,{element:t(ie,{})})}),t(b,{path:"/recycles",element:t(E,{isAuth:e,Component:le}),children:t(b,{element:t(le,{})})}),t(b,{path:"/reminders",element:t(E,{isAuth:e,Component:ce}),children:t(b,{element:t(ce,{})})}),t(b,{path:"/newtask",element:t(E,{isAuth:e,Component:X}),children:t(b,{element:t(X,{})})}),t(b,{path:"/viewtask/:document/:docid/:id",element:t(E,{isAuth:e,Component:Z}),children:t(b,{element:t(Z,{})})})]})})]})]})})}function kt(){return S.request({method:"GET",url:`${f}/api/todos`,withCredentials:!0})}function At(){return S.request({method:"GET",url:`${f}/api/todos`})}function*Et(){const e=yield $(kt),{data:n}=e;yield k(P(n))}function*Ct(){const e=yield $(At),{data:n}=e;yield k(P(n))}function Tt(){return S.request({method:"GET",url:`${f}/api/drafts`,withCredentials:!0})}function*jt(){const e=yield $(Tt),{data:n}=e;yield k(G(n))}function Nt(){return S.request({method:"GET",url:`${f}/api/archives`,withCredentials:!0})}function*Rt(){const e=yield $(Nt),{data:n}=e;yield k(I(n))}function Ot(){return S.request({method:"GET",url:`${f}/api/recycles`,withCredentials:!0})}function*Pt(){const e=yield $(Ot),{data:n}=e;yield k(M(n))}function zt(){return S.request({method:"GET",url:`${f}/api/reminders`,withCredentials:!0})}function*Lt(){const e=yield $(zt),{data:n}=e;yield k(L(n))}function Dt(){return S.request({method:"GET",url:`${f}/api/profile`,withCredentials:!0})}function*_t(){const e=yield $(Dt),{data:n}=e;yield k(Me(n))}function*Gt(){yield A(V,Et),yield A(Qe,Ct),yield A(ee,jt),yield A(re,Rt),yield A(se,Pt),yield A(K,Lt),yield A(H,_t)}const It=ve({todos:tt,drafts:ut,archives:yt,recycles:vt,reminders:ot,profile:Je}),de=Se(),Mt=[de],qt=$e(It,{},ke(...Mt));de.run(Gt);Ae.render(t(Ee.StrictMode,{children:t(Ce,{store:qt,children:t($t,{})})}),document.getElementById("root"));
