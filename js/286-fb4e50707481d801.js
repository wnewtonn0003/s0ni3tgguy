"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{73914:function(e,r,t){t.d(r,{dc:function(){return l},zx:function(){return h}});var n=t(26705),a=t(71538),i=t(12218),o=t(20955),s=t(62076),d=t(17809);let l=(0,i.j)("tracking-normal inline-flex whitespace-nowrap backdrop-blur items-center justify-center gap-x-1 py-2 px-6 rounded-full font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&>svg]:stroke-[3px]",{variants:{variant:{primary:"text-button-foreground bg-button/[0.16] hover:bg-button/[0.24] transition focus-visible:ring-button",secondary:"pl-0 text-shade-3 theme-dark:text-shade-light focus-visible:ring-shade-3"},size:{sm:"text-body-sm",md:"text-body",lg:"text-body",xl:"text-body","2xl":"text-body-lg"}},defaultVariants:{variant:"primary",size:"md"}}),h=o.forwardRef((e,r)=>{let{className:t,variant:i,size:o,asChild:d=!1,...h}=e,c=d?a.g7:"button",u=(0,s.cn)(l({variant:i,size:o}));return(0,n.jsx)(c,{className:(0,s.cn)(u,t),ref:r,...h})});h.displayName="Button",o.forwardRef((e,r)=>{let{className:t,asChild:i=!1,variant:o="default",size:l="md",animated:h=!0,children:c,...u}=e,g=i?a.g7:"button";return(0,n.jsxs)(g,{className:(0,s.cn)("relative inline-block group","icon"===o&&"aspect-square",t),ref:r,...u,children:[h&&(0,n.jsx)("div",{className:"absolute inset-0 bg-gradient-sonic-mirrored animate-gradient rounded-full blur-sm group-hover:blur group-hover:brightness-125 transition"}),(0,n.jsxs)("div",{className:(0,s.cn)("relative overflow-hidden z-10 p-[1px] rounded-full",h?"bg-gradient-sonic-mirrored animate-gradient":"bg-gradient-sonic-subtle"),children:[(0,n.jsx)("div",{className:(0,s.cn)("flex items-center justify-center gap-x-2 bg-black/85 rounded-full group-hover:bg-black/75 transition",{sm:"icon"===o?"p-0.5":"px-2 py-0.5 text-xs",md:"icon"===o?"p-1":"px-3 py-1 text-body-sm",lg:"icon"===o?"p-1.5":"px-4 py-1.5 text-body",xl:"icon"===o?"p-2":"px-5 py-2 text-body","2xl":"icon"===o?"p-2.5":"px-6 py-2.5 text-body"}[l]),children:(0,n.jsx)("span",{className:"text-white/85 font-medium group-hover:text-white transition",children:c})}),(0,n.jsx)(d.Shimmer,{className:"absolute inset-0 z-20"})]})]})}).displayName="SonicGradientButton"},17809:function(e,r,t){t.d(r,{Shimmer:function(){return h}});var n=t(26705),a=t(12218),i=t(79681),o=t(20955),s=t(62076);let d=(0,a.j)("absolute inset-0 -skew-x-12 group pointer-events-none",{variants:{variant:{default:"via-white/20"}},defaultVariants:{variant:"default"}}),l=e=>{let{className:r,variant:t}=e,[a,l]=(0,o.useState)(!1),h=(0,o.useRef)(null),[c,u]=(0,o.useState)("forward");return(0,o.useEffect)(()=>{let e=e=>{if(h.current){let r=h.current.getBoundingClientRect(),t=(e.clientX-r.left)/r.width,n=(e.clientY-r.top)/r.height;t>=0&&t<=1&&n>=0&&n<=1?l(!0):l(!1)}};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[]),(0,o.useEffect)(()=>{a?u("forward"):u("backward")},[a]),(0,n.jsx)(i.E.div,{ref:h,className:(0,s.cn)(d({variant:t}),r),initial:"hidden",animate:a||"backward"===c?"visible":"hidden",children:(0,n.jsx)(i.E.div,{className:"w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent ",variants:{hidden:{opacity:0,x:"forward"===c?"100%":"-100%"},visible:{opacity:1,x:"forward"===c?"-100%":"100%"}},transition:{duration:.3,ease:"linear"}},c)})},h=e=>(0,n.jsx)(l,{...e})},62076:function(e,r,t){t.d(r,{cn:function(){return c}}),t(6707);var n=t(12218),a=t(96164),i=t(67022),o=t(54988),s=t.n(o);let d=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=e.slice().reverse();return"linear-gradient(".concat(r,"deg, ").concat(e.join(", "),", ").concat(t.join(", "),")")},l={darkMode:["class"],content:["./src/**/*.{ts,tsx}"],prefix:"",theme:{screens:{"2xs":"300px",xs:"390px",sm:"640px",md:"834px",lg:"1440px"},container:{center:!0,padding:{DEFAULT:"1rem",sm:"1rem",md:"2rem",lg:"4rem"},screens:{xs:"390px",sm:"640px",md:"834px",lg:"1024px",xl:"1280px"}},extend:{padding:{sm:"1rem",md:"1.5rem",lg:"2rem",xl:"2.5rem"},fontSize:{h1:["var(--font-size-h1)","var(--line-height-h1)"],h2:["var(--font-size-h2)","var(--line-height-h2)"],h3:["var(--font-size-h3)","var(--line-height-h3)"],h4:["var(--font-size-h4)","var(--line-height-h4)"],h5:["var(--font-size-h5)","var(--line-height-h5)"],h6:["var(--font-size-h6)","var(--line-height-h6)"],"body-lg":["var(--font-size-body-lg)","var(--line-height-body-lg)"],body:["var(--font-size-body)","var(--line-height-body)"],"body-sm":["var(--font-size-body-sm)","var(--line-height-body-sm)"],"body-xs":["var(--font-size-body-xs)","var(--line-height-body-xs)"],caption:["var(--font-size-caption)","var(--line-height-caption)"],"d-h1":"8rem","d-h2":"6rem","d-h3":"5rem","d-h4":"4rem","d-h5":"3rem","d-h6":"2rem","d-body-large":"1.5rem","d-body":"1rem","d-body-small":"0.875rem","d-caption":"0.875rem","d-micro":"0.75rem","t-h1":"6rem","t-h2":"3.375rem","t-h3":"2.5rem","t-h4":"1.5rem","t-h5":"1.25rem","t-h6":"1rem","t-body-large":"1.125rem","t-body":"1rem","t-body-small":"0.875rem","t-caption":"0.875rem","t-micro":"0.75rem","m-h1":"3.5rem","m-h2":"2.5rem","m-h3":"2rem","m-h4":"1.5rem","m-h5":"1.25rem","m-h6":"1rem","m-body-large":"1.125rem","m-body":"1rem","m-body-small":"0.875rem","m-caption":"0.875rem","m-micro":"0.625rem","g-label":"1.125rem"},fontFamily:{sans:["var(--font-sans)",...i.fontFamily.sans],pecita:["Pecita","sans-serif"]},height:{section:"var(--height-section)"},minHeight:{section:"var(--height-section)"},colors:{"hero-1":"hsl(var(--hero-1))","hero-2":"hsl(var(--hero-2))","hero-3":"hsl(var(--hero-3))","shade-light":"hsl(var(--shade-light))","shade-1":"hsl(var(--shade-1))","shade-2":"hsl(var(--shade-2))","shade-3":"hsl(var(--shade-3))","sonic-black":"hsl(var(--sonic-black))","sonic-white":"hsl(var(--sonic-white))",link:"hsl(var(--link))",button:"hsl(var(--button))","button-foreground":"hsl(var(--button-foreground))",border:"hsl(var(--border))",input:"hsl(var(--input))",ring:"hsl(var(--ring))",background:"hsl(var(--background))",foreground:"hsl(var(--foreground))",primary:{DEFAULT:"hsl(var(--primary))",foreground:"hsl(var(--primary-foreground))"},secondary:{DEFAULT:"hsl(var(--secondary))",foreground:"hsl(var(--secondary-foreground))"},destructive:{DEFAULT:"hsl(var(--destructive))",foreground:"hsl(var(--destructive-foreground))"},muted:{DEFAULT:"hsl(var(--muted))",foreground:"hsl(var(--muted-foreground))"},accent:{DEFAULT:"hsl(var(--accent))",foreground:"hsl(var(--accent-foreground))"},popover:{DEFAULT:"hsl(var(--popover))",foreground:"hsl(var(--popover-foreground))"},card:{DEFAULT:"hsl(var(--card))",foreground:"hsl(var(--card-foreground))"}},borderRadius:{lg:"var(--radius)",md:"calc(var(--radius) - 2px)",sm:"calc(var(--radius) - 4px)"},keyframes:{"accordion-down":{from:{height:"0"},to:{height:"var(--radix-accordion-content-height)"}},"accordion-up":{from:{height:"var(--radix-accordion-content-height)"},to:{height:"0"}},"border-spin":{"100%":{transform:"rotate(-360deg)"}},gradient:{to:{backgroundPosition:"200%"}},marquee:{"0%":{transform:"translateX(0)"},"100%":{transform:"translateX(calc(-50% - 4px))"}}},animation:{"accordion-down":"accordion-down 0.2s ease-out","accordion-up":"accordion-up 0.2s ease-out","border-spin":"border-spin 4s linear infinite",gradient:"gradient 3s linear infinite",marquee:"marquee linear infinite"},boxShadow:{"planet-glow":"\n              inset 0 0 50px #FFCB67,\n              inset 20px 0 80px #F43,\n              inset -20px 0 80px #FFCB67,\n              inset 20px 0 300px #F43,\n              inset -20px 0 300px #FFCB67,\n              0 0 50px #F43,\n              10px 0 400px #F43\n        "},backgroundImage:{"planet-glow":"conic-gradient(from 45deg at 50% 50%, #F43, #FFCB67,#214E81, #F43)","planet-glow-foreground":"radial-gradient(rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%), conic-gradient(from 45deg at 50% 50%, #F43, #FFCB67,#214E81, #F43)","gradient-sonic-horizontal":"linear-gradient(270deg, hsla(212, 59%, 32%, 1) 25%,\nhsla(215, 20%, 39%, 1) 50%,\nhsla(20, 93%, 48%, 1) 75%,\nhsla(39, 100%, 70%, 1) 100%)","gradient-sonic-vertical":"linear-gradient(0deg, hsla(212, 59%, 32%, 1) 25%,\nhsla(215, 20%, 39%, 1) 50%,\nhsla(20, 93%, 48%, 1) 75%,\nhsla(39, 100%, 70%, 1) 100%)","gradient-sonic-mirrored":d(["#214E81","rgba(80, 97, 121)","rgba(237, 84, 9)","rgba(255, 203, 103)"],90),"gradient-sonic-subtle":"linear-gradient(92.79deg, #EDAA60 4.62%, #BF5F38 53.19%, #1753B0 101.61%)","gradient-sonic-sun":d(["#FFCB67","#FFB44D","#FF9D33","#FF8519","#ED5409"],90),"gradient-sonic-silver":d(["#E0E0E0","#C2C2C2","#A3A3A3","#858585","#666666"],90),"gradient-radial":"radial-gradient(var(--tw-gradient-stops))"},backgroundSize:{"gradient-sonic-mirrored":"200% auto","gradient-sonic-sun":"200% auto","gradient-nav-banner":"200% auto","gradient-sonic-silver":"200% auto"},textShadow:{glow:"0 0 10px rgba(255,255,255,0.5)"}}},plugins:[t(58804),t(7229),s()(function(e){let{addVariant:r}=e;r("theme-light",["html .theme-light &",".light &"]),r("theme-dark",["html .theme-dark &",".dark &"])}),s()(function(e){let{addBase:r}=e;r({html:{fontSize:"16px"}})}),s()(e=>{let{addVariant:r}=e;r("not-last","&:not(:last-child)")})]},h=(0,a.q7)({extend:{classGroups:{"font-size":Object.keys(l.theme.extend.fontSize).map(e=>"text-"+e),"text-color":Object.keys(l.theme.extend.colors).map(e=>"text-"+e)}}});function c(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return h((0,n.cx)(r))}},67676:function(e,r,t){t.d(r,{Sx:function(){return i},gx:function(){return a},tW:function(){return n}});let n=t(25566).env.NEXT_PUBLIC_SANITY_API_VERSION||"2024-07-27",a=o("production","Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"),i=o("3tj5s547","Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");function o(e,r){if(void 0===e)throw Error(r);return e}},6707:function(e,r,t){t.d(r,{u:function(){return s}});var n=t(36103),a=t.n(n),i=t(67676);let o=a()({projectId:i.Sx,dataset:i.gx}),s=e=>o.image(e)}}]);