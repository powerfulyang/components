import{c as a,j as e,G as T,u as M,i as L,r as f,a as p,N as j,m as g,O as q,b as A,d as N,A as I,F as $,k as B,e as F,f as K,g as H,C as G,h as Q,S as Y,l as U,n as W,o as X,p as V,w as J,R as O,q as Z,s as ee,t as te,Q as oe,v as ne,x as re,y as ie,z as ae,T as se}from"./vendor-d67f5aa5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const ce=a`
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
`,de=()=>e(T,{styles:ce}),le=a`
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
`,fe=()=>e(T,{styles:le}),h={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"}},P={colors:{...h,primary:h.violet[500],secondary:h.gray[400],error:h.red[500],warning:h.orange[400],default:h.transparent,info:h.blue[400],success:h.green[400],disabled:h.gray[400],rippleColor:"rgb(0 0 0 / 8%)"}},R=()=>{const i=M();return L(i)?P:i},ue=()=>{const i=f.useId();return p("div",{css:a`
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
      `,children:[e("div",{css:a`
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
        `}),e("ul",{css:a`
          display: flex;
          align-items: center;
          height: 100%;
          list-style: none;
        `,children:["Components","Projects","Charts"].map(o=>e(j,{to:o,children:({isActive:r})=>p("li",{css:a`
                      position: relative;
                      cursor: pointer;
                      padding: 17px 30px;
                      text-decoration: none;
                      border-bottom: 2px solid transparent;
                      transition: 0.3s;
                      color: ${r?"white":"var(--inactive-color)"};
                      &:hover {
                        color: white;
                      }
                    `,children:[o,r&&e(g.div,{layoutId:`${i}-tab`,css:a`
                          position: absolute;
                          bottom: 0;
                          left: 0;
                          height: 2px;
                          width: 100%;
                          background-color: white;
                        `})]},o)},o))})]})},pe=()=>e("div",{css:a`
        display: flex;
        background-image: url('/bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
      `,children:p("div",{css:a`
          background-color: var(--theme-bg-color);
          backdrop-filter: blur(20px);
          max-width: 1400px;
          margin: auto;
          width: 90%;
          border-radius: 10px;
          height: 90%;
        `,children:[e(ue,{}),e(q,{})]})}),z=i=>{var c;const{container:o=(c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body,children:r}=i;return o?A.createPortal(r,o):null};z.displayName="Portal";const be={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},me=i=>e(g.div,{variants:be,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.3},css:a`
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.45);
      `,"aria-hidden":!0,...i}),he={initial:{opacity:0,scale:.35},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.35,transition:{type:"keyframes",ease:"easeInOut",duration:.15}}},ge=({children:i,open:o=!1,onClose:r,onOpen:c,top:t,left:n,closeOnOverlayClick:s=!0,closeOnEscape:l=!0,...d})=>{const m=f.useMemo(()=>N(t)?`${t}px`:t??"50%",[t]),x=f.useMemo(()=>N(n)?`${n}px`:n??"50%",[n]);return f.useEffect(()=>{if(o&&l){const b=y=>{y.key==="Escape"&&(r==null||r())};return document.addEventListener("keydown",b),()=>{document.removeEventListener("keydown",b)}}return()=>{}},[o,l,r]),e(z,{children:e(I,{children:o&&p($,{children:[e(me,{onClick:b=>{b.target===b.currentTarget&&s&&(r==null||r())}},"overlay"),e(g.div,{role:"alertdialog",css:a`
                position: fixed;
                top: ${m};
                left: ${x};
                border-radius: 6px;
                background-color: #fff;
                width: 90vw;
                max-width: 500px;
                max-height: 85vh;
                padding: 25px;
                box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
              `,variants:he,initial:"initial",animate:"animate",exit:"exit",style:{y:t===void 0?"-50%":0,x:n===void 0?"-50%":0},...d,children:i},"dialog")]})})})},ye=700,xe=B`
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
`,ve=()=>{const[i,o]=F([]),r=R(),c=f.useMemo(()=>K(()=>{o([])},ye),[o]),t=f.useCallback(n=>{if(n.button!==0)return;const s=n.currentTarget,l=s.getBoundingClientRect(),d=s.offsetWidth/2;o(m=>{m.push({x:n.clientX-l.x-d/2,y:n.clientY-l.y-d/2,size:d,key:m.length+1})}),requestAnimationFrame(()=>{c()})},[o,c]);return e("div",{role:"none",css:a`
        position: absolute;
        inset: 0;
        & > span {
          position: absolute;
          display: block;
          background-color: ${r.colors.rippleColor};
          border-radius: 50%;
          transform: scale(0);
          animation: ${xe} 700ms;
        }
      `,onMouseDown:t,children:i.map(({x:n,y:s,size:l,key:d})=>e(g.span,{style:{width:l,height:l,left:n,top:s}},d))})},we=f.memo(ve),S=({type:i,...o})=>e("svg",{css:a`
      width: 1em;
      height: 1em;
      overflow: hidden;
      fill: currentColor;
      vertical-align: -0.15em;
    `,...o,children:e("use",{xlinkHref:`#${i}`})});S.displayName="Icon";const _=f.memo(S),ke=B`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,u=f.forwardRef(({children:i,className:o,onClick:r,ripple:c=!0,appearance:t="default",rounded:n=!1,icon:s,loading:l=!1,ghost:d=!1,...m},x)=>{const{disabled:b=l}=m,y=!b&&!l,w=f.useCallback(k=>{y&&r&&r(k)},[y,r]),v=R();return p(g.button,{layout:!0,type:"button",...m,ref:x,css:[a({display:"inline-flex",justifySelf:"center",alignItems:"center",position:"relative",overflow:"hidden",padding:".65rem 1rem",color:"white",cursor:l?"not-allowed":"pointer",border:"none",borderRadius:n?"9999px":"0.5rem",backgroundColor:v.colors.transparent}),a`
            &:disabled,
            &[data-loading='true'] {
              cursor: not-allowed;
              opacity: 0.5;
              background-color: ${v.colors.disabled};
            }
            &:not(:disabled) {
              background-color: ${v.colors[t]};
            }
            &:not(:disabled):not([data-loading='true']):hover {
              filter: brightness(1.1);
            }
          `,d&&a`
              &:not(:disabled) {
                border: 1px solid ${v.colors[t]};
                background-color: ${v.colors.transparent};
              }
            `],className:o,onClick:w,"data-loading":l,children:[e(G,{children:({css:k})=>p($,{children:[l&&e(_,{type:"icon-loading",css:k`
                      margin-right: 0.6rem;
                      transform-origin: center;
                      animation: ${ke} 1s linear infinite;
                    `}),!l&&s&&f.cloneElement(s,{...s.props,className:H(k`
                      margin-right: 0.6rem;

                    `,s.props.className)})]})}),i,c&&y&&e(we,{})]})});u.displayName="Button";const ze=Q([]),D=new Y,Ce={success:i=>{D.next({_id:X(),message:i,type:"success",_visible:!0})}},Te={initial:{y:"-200%",scale:.6,opacity:.5,zIndex:"auto"},animate:{scale:1,opacity:1,y:0,transition:{duration:.3,type:"keyframes",ease:[.21,1.02,.73,1]},zIndex:"auto"},exit:{scale:.6,opacity:0,y:"-150%",zIndex:-1,transition:{duration:.4,type:"keyframes",ease:[.06,.71,.55,1]}}},Ie=()=>{const[i,o]=U(ze);f.useEffect(()=>{const t=D.subscribe({next:n=>{o(s=>{s.push(n)})}});return()=>{t.unsubscribe()}},[o]);const r=f.useRef(new Map),c=t=>{const n=window.setTimeout(()=>{o(s=>{const l=s.find(d=>d._id===t._id);l&&(l._visible=!1)})},2e3);r.current.set(t._id,n)};return e(z,{children:e("div",{css:a`
          position: fixed;
          inset: 0;
          z-index: 999;
          padding: 1rem;
          pointer-events: none;
          gap: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        `,children:i.map(t=>e(I,{children:t._visible===!0&&e(g.div,{css:a`
                  background: #fff;
                  padding: 8px 10px;
                  border-radius: 8px;
                  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
                  color: #363636;
                  pointer-events: auto;
                `,initial:"initial",animate:"animate",exit:"exit",variants:Te,onHoverStart:()=>{const n=r.current.get(t._id);n!==void 0&&window.clearTimeout(n)},onHoverEnd:()=>{c(t)},onAnimationComplete:n=>{n==="animate"&&c(t),n==="exit"&&t._visible===!1&&o(s=>{const l=s.findIndex(d=>d._id===t._id);l!==-1&&s.splice(l,1)})},children:W(t.message,t)})},t._id))})})},Ne=({children:i,anchorEl:o,anchorOrigin:r={vertical:"bottom",horizontal:"left"},onClose:c,open:t=!1})=>{const n=f.useMemo(()=>{const{vertical:s,horizontal:l}=r,d={position:"absolute",pointerEvents:"auto"};if(!o)return d;const m=o.getBoundingClientRect(),{top:x,left:b,height:y,width:w}=m;switch(s){case"top":d.top=x;break;case"center":d.top=x+y/2;break;case"bottom":d.top=x+y;break}switch(l){case"left":d.left=b;break;case"center":d.left=b+w/2;break;case"right":d.left=b+w;break}return d},[o,r]);return e(z,{children:e(I,{children:t&&e("div",{onClick:c,role:"presentation",css:a`
              position: fixed;
              inset: 0;
            `,children:e(g.div,{css:a`
                position: absolute;
                transform-origin: top left;
                background-color: white;
                border-radius: 4px;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
                padding: 8px;
              `,style:n,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2},onClick:s=>s.stopPropagation(),children:i})})})})},Oe=({layout:i="horizontal"})=>i==="horizontal"?e("hr",{css:a`
          display: block;
          width: 100%;
          border: 0;
          height: 1px;
          background-color: #e2e8f0;
          transform: scaleY(0.5);
        `}):e("div",{css:a`
        display: block;
        width: 1px;
        border: 0;
        height: 100%;
        background-color: #e2e8f0;
        transform: scaleX(0.5);
      `}),E=f.createContext({uniqueId:""}),C=({children:i,tabKey:o})=>{const{uniqueId:r,onChange:c,activeTabKey:t}=f.useContext(E);return p(g.div,{css:a`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        cursor: pointer;
        padding: 0 10px;
        position: relative;
      `,role:"tab",onClick:()=>{c==null||c(o)},children:[i,t===o&&e(g.div,{layoutId:`${r}-tab`,css:a`
            position: absolute;
            bottom: 0;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: #fff;
          `})]})},$e=({children:i,activeTabKey:o,onChange:r})=>{const c=f.useId(),t=f.useMemo(()=>({uniqueId:c,activeTabKey:o,onChange:r}),[o,c,r]);return e(E.Provider,{value:t,children:e("div",{css:a`
          display: flex;
        `,role:"tablist",children:i})})},Be=()=>{const[i,o]=f.useState(!1),r=V({mutationFn:()=>J(5e3),onSuccess:()=>{o(!1)}});let c=0;const[t,n]=f.useState(null),[s,l]=f.useState();return p("div",{css:a`
        padding: 20px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
      `,children:[e(u,{appearance:"primary",onClick:()=>o(!0),children:"Open Dialog"}),e(u,{appearance:"primary",onClick:()=>{c+=1,Ce.success(`hello world ${c}`)},children:"Open Toaster"}),p(ge,{open:i,onClose:()=>{o(!1)},children:[e("h2",{children:"Lorem ipsum"}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero. Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."}),p("div",{css:a`
            display: flex;
            justify-content: flex-end;
            gap: 20px;
          `,children:[e(u,{ghost:!0,appearance:"primary",css:a`
              color: #0ebeff;
            `,onClick:()=>o(!1),autoFocus:!0,children:"Cancel"}),e(u,{loading:r.isLoading,onClick:()=>{r.mutate()},appearance:"primary",children:"Yes, I'm sure"})]})]}),e(u,{appearance:"primary",onClick:d=>{n(d.currentTarget)},children:"Open Popover"}),e(Ne,{open:!!t,anchorEl:t,onClose:()=>{n(null)},children:"Popover Content"}),e(Oe,{}),p($e,{activeTabKey:s,onChange:d=>{l(d)},children:[e(C,{tabKey:"1",children:"Tab 1"}),e(C,{tabKey:"2",children:"Tab 2"}),e(C,{tabKey:"3",children:"Tab 3"})]})]})},Pe=()=>p("div",{css:a`
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
      `,children:[e(u,{children:"Default Button"}),e(u,{appearance:"primary",children:"Primary Button"}),e(u,{appearance:"secondary",children:"Secondary Button"}),e(u,{appearance:"error",children:"Danger Button"}),e(u,{ghost:!0,appearance:"primary",children:"Ghost Button"}),e(u,{disabled:!0,children:"Disabled Button"}),e(u,{rounded:!0,appearance:"primary",children:"Rounded Button"}),e(u,{appearance:"primary",icon:e(_,{type:"icon-send"}),children:"Icon Button"}),e(u,{loading:!0,appearance:"primary",children:"Loading Button"})]}),Re=()=>e("div",{className:"flex",children:e("div",{className:"components-container",children:p(ee,{children:[e(O,{index:!0,element:e(Z,{replace:!0,to:"/components/button"})}),e(O,{path:"/button",element:e(Pe,{})})]})})}),Se=te([{path:"/",element:e(pe,{}),children:[{path:"/",element:e(Be,{})},{path:"/components/*",element:e(Re,{})}]}]),_e=a`
  html,
  body,
  #root {
    --body-font: 'Poppins', sans-serif;
    font-family: var(--body-font);
    font-size: 14px;
    width: 100%;
    height: 100vh;
  }
`,De=new oe({defaultOptions:{queries:{refetchOnWindowFocus:!1,refetchOnMount:!0}}});ne.createRoot(document.getElementById("root")).render(e(re.StrictMode,{children:p(se,{theme:P,children:[e(de,{}),e(fe,{}),e(T,{styles:_e}),e(ie,{client:De,children:e(ae,{router:Se})}),e(Ie,{})]})}));
