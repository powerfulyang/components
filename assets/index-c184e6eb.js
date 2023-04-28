import{c as r,j as e,G as z,r as p,a as m,N as D,m as h,O as M,b as E,i as N,A as T,F as B,k as P,u as L,d as q,e as A,f as j,C as F,g as K,S as H,h as G,l as Q,n as Y,o as U,w as W,R as O,p as X,q as V,s as J,t as Z,Q as ee,v as te,x as oe,y as ne,z as ie,T as re}from"./vendor-fba8cd49.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const ae=r`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
    text-decoration: none;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
    background-image: none;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  details {
    display: block;
  }
  summary {
    display: list-item;
  }
  template {
    display: none;
  }
  [hidden] {
    display: none;
  }
`,se=()=>e(z,{styles:ae}),ce=r`
  :root {
    --py-tooltip-bg-color: rgba(0 0 0 / 65%);
    --py-tooltip-z-index: 1000;
    --py-notification-z-index: 1000;

    // checkbox radio bg color
    --checkbox-radio-bg-color: rgba(33 16 118);
    --checkbox-radio-bg-color-hover: rgba(33 16 118 / 50%);
    --tooltip-bg-color: rgba(43 41 41 / 92%);

    //
    --theme-bg-color: rgba(16 18 27 / 40%);
    --border-color: rgba(113 119 144 / 25%);
    --theme-color: #f9fafb;
    --inactive-color: rgba(113 119 144 / 78%);
    --hover-menu-bg: rgba(12 15 25 / 15%);
    --focus-menu-bg: rgba(16 18 27 / 25%);
    --active-menu-bg: rgba(16 18 27 / 40%);
    --content-title-color: #999ba5;
    --content-bg: rgba(146 151 179 / 13%);
    --button-inactive: rgba(249 250 251 / 55%);
    --dropdown-bg: #21242d;
    --dropdown-hover: rgba(42 46 60);
    --popup-bg: rgba(22 25 37);
    --search-bg: #14162b;
    --overlay-bg: rgba(36 39 59 / 30%);
    --scrollbar-bg: rgba(1 2 3 / 40%);

    #py-notification-collection {
      position: fixed;
      right: 2rem;
      top: 2rem;
      z-index: var(--py-notification-z-index);
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`,le=()=>e(z,{styles:ce}),de=()=>{const s=p.useId();return m("div",{css:r`
        display: flex;
        align-items: center;
        flex-shrink: 0;
        height: 58px;
        border-bottom: 1px solid var(--border-color);
        padding: 0 30px;
        white-space: nowrap;
        @media screen and (max-width: 480px) {
          padding: 0 16px;
        }
      `,children:[e("div",{css:r`
          width: 15px;
          height: 15px;
          background-color: #f96057;
          border-radius: 50%;
          box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
          margin-right: 6rem;
          flex-shrink: 0;
          @media screen and (max-width: 945px) {
            display: none;
          }
        `}),e("ul",{css:r`
          display: flex;
          align-items: center;
          height: 100%;
          list-style: none;
        `,children:["Components","Projects","Charts"].map(o=>e(D,{to:o,children:({isActive:i})=>m("li",{css:r`
                      position: relative;
                      cursor: pointer;
                      padding: 17px 30px;
                      text-decoration: none;
                      border-bottom: 2px solid transparent;
                      transition: 0.3s;
                      color: ${i?"white":"var(--inactive-color)"};
                      &:hover {
                        color: white;
                      }
                    `,children:[o,i&&e(h.div,{layoutId:`${s}-tab`,css:r`
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          height: 2px;
                          width: 100%;
                          background-color: white;
                        `})]},o)},o))})]})},pe=()=>e("div",{css:r`
        display: flex;
        background-image: url('/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
      `,children:m("div",{css:r`
          background-color: var(--theme-bg-color);
          backdrop-filter: blur(20px);
          max-width: 1400px;
          margin: auto;
          width: 90%;
          border-radius: 10px;
          height: 90%;
        `,children:[e(de,{}),e(M,{})]})}),w=s=>{var c;const{container:o=(c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body,children:i}=s;return o?E.createPortal(i,o):null};w.displayName="Portal";const ue={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},me=s=>e(h.div,{variants:ue,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.3},css:r`
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.45);
      `,"aria-hidden":!0,...s}),be={initial:{opacity:0,scale:.35},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.35,transition:{type:"keyframes",ease:"easeInOut",duration:.15}}},he=({children:s,open:o=!1,onClose:i,onOpen:c,top:t,left:n,closeOnOverlayClick:a=!0,closeOnEscape:l=!0,...d})=>{const y=p.useMemo(()=>N(t)?`${t}px`:t??"50%",[t]),g=p.useMemo(()=>N(n)?`${n}px`:n??"50%",[n]);return p.useEffect(()=>{if(o&&l){const b=f=>{f.key==="Escape"&&(i==null||i())};return document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}}return()=>{}},[o,l,i]),e(w,{children:e(T,{children:o&&m(B,{children:[e(me,{onClick:b=>{b.target===b.currentTarget&&a&&(i==null||i())}},"overlay"),e(h.div,{role:"alertdialog",css:r`
                position: fixed;
                top: ${y};
                left: ${g};
                border-radius: 6px;
                background-color: #fff;
                width: 90vw;
                max-width: 500px;
                max-height: 85vh;
                padding: 25px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
              `,variants:be,initial:"initial",animate:"animate",exit:"exit",style:{y:t===void 0?"-50%":0,x:n===void 0?"-50%":0},...d,children:s},"dialog")]})})})},fe=700,ge=P`
  0% {
    transform: scale(0);
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
`,ye=()=>{const[s,o]=L([]),i=p.useMemo(()=>q(()=>{o([])},fe),[o]),c=p.useCallback(t=>{if(t.button!==0)return;const n=t.currentTarget,a=n.getBoundingClientRect(),l=n.offsetWidth/2;o(d=>{d.push({x:t.clientX-a.x-l/2,y:t.clientY-a.y-l/2,size:l,key:d.length+1})}),requestAnimationFrame(()=>{i()})},[o,i]);return e("div",{role:"none",css:r`
        position: absolute;
        inset: 0;
        & > span {
          position: absolute;
          display: block;
          background-color: rgb(0 0 0 / 8%);
          border-radius: 50%;
          transform: scale(0);
          animation: ${ge} 700ms;
        }
      `,onMouseDown:c,children:s.map(({x:t,y:n,size:a,key:l})=>e(h.span,{style:{width:a,height:a,left:t,top:n}},l))})},xe=p.memo(ye),R=({type:s,...o})=>e("svg",{css:r`
      width: 1em;
      height: 1em;
      overflow: hidden;
      fill: currentColor;
      vertical-align: -0.15em;
    `,...o,children:e("use",{xlinkHref:`#${s}`})});R.displayName="Icon";const S=p.memo(R),ve=P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,u=p.forwardRef(({children:s,className:o,onClick:i,ripple:c=!0,appearance:t="info",rounded:n=!1,icon:a,loading:l=!1,ghost:d=!1,...y},g)=>{const{disabled:b=l}=y,f=!b&&!l,x=p.useCallback(v=>{f&&i&&i(v)},[f,i]),C=A(),I=C.palette[t].main;return m(h.button,{type:"button",ref:g,css:[r({display:"inline-flex",justifySelf:"center",alignItems:"center",position:"relative",overflow:"hidden",padding:".65rem 1rem",color:"white",cursor:l?"not-allowed":"pointer",border:"none",borderRadius:n?"9999px":"0.5rem",backgroundColor:"transparent"}),r`
            &:disabled,
            &[data-loading='true'] {
              cursor: not-allowed;
              opacity: 0.5;
              background-color: ${C.palette.grey[400]};
            }
            &:not(:disabled) {
              background-color: ${I};
            }
            &:not(:disabled):not([data-loading='true']):hover {
              filter: brightness(1.1);
            }
          `,d&&r`
              &:not(:disabled) {
                border: 1px solid ${I};
                background-color: transparent;
              }
            `],className:o,onClick:x,"data-loading":l,...y,children:[e(F,{children:({css:v})=>m(B,{children:[l&&e(S,{type:"icon-loading",css:v`
                      margin-right: 0.6rem;
                      transform-origin: center;
                      animation: ${ve} 1s linear infinite;
                    `}),!l&&a&&p.cloneElement(a,{...a.props,className:j(v`
                      margin-right: 0.6rem;

                    `,a.props.className)})]})}),s,c&&f&&e(xe,{})]})});u.displayName="Button";const we=K([]),_=new H,ke={success:s=>{_.next({_id:Y(),message:s,type:"success",_visible:!0})}},ze={initial:{y:"-200%",scale:.6,opacity:.5,zIndex:"auto"},animate:{scale:1,opacity:1,y:0,transition:{duration:.3,type:"keyframes",ease:[.21,1.02,.73,1]},zIndex:"auto"},exit:{scale:.6,opacity:0,y:"-150%",zIndex:-1,transition:{duration:.4,type:"keyframes",ease:[.06,.71,.55,1]}}},Te=()=>{const[s,o]=G(we);p.useEffect(()=>{const t=_.subscribe({next:n=>{o(a=>{a.push(n)})}});return()=>{t.unsubscribe()}},[o]);const i=p.useRef(new Map),c=t=>{const n=window.setTimeout(()=>{o(a=>{const l=a.find(d=>d._id===t._id);l&&(l._visible=!1)})},2e3);i.current.set(t._id,n)};return e(w,{children:e("div",{css:r`
          position: fixed;
          inset: 0;
          z-index: 999;
          padding: 1rem;
          pointer-events: none;
          gap: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `,children:s.map(t=>e(T,{children:t._visible===!0&&e(h.div,{css:r`
                  background: #fff;
                  padding: 8px 10px;
                  border-radius: 8px;
                  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
                  color: #363636;
                  pointer-events: auto;
                `,initial:"initial",animate:"animate",exit:"exit",variants:ze,onHoverStart:()=>{const n=i.current.get(t._id);n!==void 0&&window.clearTimeout(n)},onHoverEnd:()=>{c(t)},onAnimationComplete:n=>{n==="animate"&&c(t),n==="exit"&&t._visible===!1&&o(a=>{const l=a.findIndex(d=>d._id===t._id);l!==-1&&a.splice(l,1)})},children:Q(t.message,t)})},t._id))})})},Ce=({children:s,anchorEl:o,anchorOrigin:i={vertical:"bottom",horizontal:"left"},onClose:c,open:t=!1})=>{const n=p.useMemo(()=>{const{vertical:a,horizontal:l}=i,d={position:"absolute",pointerEvents:"auto"};if(!o)return d;const y=o.getBoundingClientRect(),{top:g,left:b,height:f,width:x}=y;switch(a){case"top":d.top=g;break;case"center":d.top=g+f/2;break;case"bottom":d.top=g+f;break}switch(l){case"left":d.left=b;break;case"center":d.left=b+x/2;break;case"right":d.left=b+x;break}return d},[o,i]);return e(w,{children:e(T,{children:t&&e("div",{onClick:c,role:"presentation",css:r`
              position: fixed;
              inset: 0;
            `,children:e(h.div,{css:r`
                position: absolute;
                transform-origin: top left;
                background-color: white;
                border-radius: 4px;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
                padding: 8px;
              `,style:n,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2},onClick:a=>a.stopPropagation(),children:s})})})})},Ie=({layout:s="horizontal"})=>s==="horizontal"?e("hr",{css:r`
          display: block;
          width: 100%;
          border: 0;
          height: 1px;
          background-color: #e2e8f0;
          transform: scaleY(0.5);
        `}):e("div",{css:r`
        display: block;
        width: 1px;
        border: 0;
        height: 100%;
        background-color: #e2e8f0;
        transform: scaleX(0.5);
      `}),$=p.createContext({uniqueId:""}),k=({children:s,tabKey:o})=>{const{uniqueId:i,onChange:c,activeTabKey:t}=p.useContext($);return m(h.div,{css:r`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        cursor: pointer;
        padding: 0 10px;
        position: relative;
      `,role:"tab",onClick:()=>{c==null||c(o)},children:[s,t===o&&e(h.div,{layoutId:`${i}-tab`,css:r`
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: #fff;
          `})]})},Ne=({children:s,activeTabKey:o,onChange:i})=>{const c=p.useId(),t=p.useMemo(()=>({uniqueId:c,activeTabKey:o,onChange:i}),[o,c,i]);return e($.Provider,{value:t,children:e("div",{css:r`
          display: flex;
        `,role:"tablist",children:s})})},Oe=()=>{const[s,o]=p.useState(!1),i=U({mutationFn:()=>W(5e3),onSuccess:()=>{o(!1)}});let c=0;const[t,n]=p.useState(null),[a,l]=p.useState();return m("div",{css:r`
        padding: 20px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      `,children:[e(u,{appearance:"primary",onClick:()=>o(!0),children:"Open Dialog"}),e(u,{appearance:"primary",onClick:()=>{c+=1,ke.success(`hello world ${c}`)},children:"Open Toaster"}),m(he,{open:s,onClose:()=>{o(!1)},children:[e("h2",{children:"Lorem ipsum"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."}),m("div",{css:r`
            display: flex;
            justify-content: flex-end;
            gap: 20px;
          `,children:[e(u,{ghost:!0,appearance:"primary",css:r`
              color: #0ebeff;
            `,onClick:()=>o(!1),autoFocus:!0,children:"Cancel"}),e(u,{loading:i.isLoading,onClick:()=>{i.mutate()},appearance:"primary",children:"Yes, I'm sure"})]})]}),e(u,{appearance:"primary",onClick:d=>{n(d.currentTarget)},children:"Open Popover"}),e(Ce,{open:!!t,anchorEl:t,onClose:()=>{n(null)},children:"Popover Content"}),e(Ie,{}),m(Ne,{activeTabKey:a,onChange:d=>{l(d)},children:[e(k,{tabKey:"1",children:"Tab 1"}),e(k,{tabKey:"2",children:"Tab 2"}),e(k,{tabKey:"3",children:"Tab 3"})]})]})},Be=()=>m("div",{css:r`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      `,children:[e(u,{children:"Default Button"}),e(u,{appearance:"primary",children:"Primary Button"}),e(u,{appearance:"secondary",children:"Secondary Button"}),e(u,{appearance:"error",children:"Danger Button"}),e(u,{ghost:!0,appearance:"primary",children:"Ghost Button"}),e(u,{disabled:!0,children:"Disabled Button"}),e(u,{rounded:!0,appearance:"primary",children:"Rounded Button"}),e(u,{appearance:"primary",icon:e(S,{type:"icon-send"}),children:"Icon Button"}),e(u,{loading:!0,appearance:"primary",children:"Loading Button"})]}),Pe=()=>e("div",{className:"flex",children:e("div",{className:"components-container",children:m(V,{children:[e(O,{index:!0,element:e(X,{replace:!0,to:"/components/button"})}),e(O,{path:"/button",element:e(Be,{})})]})})}),Re=J([{path:"/",element:e(pe,{}),children:[{path:"/",element:e(Oe,{})},{path:"/components/*",element:e(Pe,{})}]}]),Se=Z(),_e=r`
  html,
  body,
  #root {
    --body-font: 'Poppins', sans-serif;
    font-family: var(--body-font);
    font-size: 14px;
    width: 100%;
    height: 100vh;
  }
`,$e=new ee({defaultOptions:{queries:{refetchOnWindowFocus:!1,refetchOnMount:!0}}});te.createRoot(document.getElementById("root")).render(e(oe.StrictMode,{children:m(re,{theme:Se,children:[e(se,{}),e(le,{}),e(z,{styles:_e}),e(ne,{client:$e,children:e(ie,{router:Re})}),e(Te,{})]})}));
