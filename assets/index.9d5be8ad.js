import{d as e,u as t,r as n,a as s,b as l,c as o,e as a,o as r,w as i,f as c,g as d,h as u,i as m,j as p,v as f,k as x,t as v,l as h,F as g,m as y,n as w,p as b,q as k,s as S,x as C,y as B,z as j,A as V,B as E,C as A}from"./vendor.d8cbdbfd.js";var L=e({name:"App",setup(){const e=t(),l=n(null);return e.beforeEach(((e,t)=>{t.meta.noTransition||l.value&&(l.value.style.opacity="0%",s({targets:l.value,opacity:100,duration:300,easing:"easeInSine"}))})),{component:l}}});const z={ref:"component"};L.render=function(e,t,n,s,i,c){const d=l("router-view");return r(),o("div",z,[a(d)],512)};var q=e({name:"QA"});const D={class:"text-center mt-16"},O=a("div",{class:"text-6xl font-bold"},"How does it work?",-1),T={class:"mx-auto max-w-2xl mt-16"},N=c('<div class="flex flex-wrap md:flex-nowrap items-center my-8 px-8"><div class="w-full flex justify-center md:w-auto"><div class="\n              rounded-full\n              w-24\n              h-24\n              bg-green-200\n              flex\n              items-center\n              justify-center\n              text-5xl\n              mb-6\n              md:mb-0 md:mr-12\n              flex-shrink-0\n            "> 1. </div></div><div class="text-center md:text-left"><div class="text-2xl font-bold"> Answer some questions about what you want and how you&#39;ll use it. </div><div class="text-sm text-gray-500 font-light"> We&#39;ll ask some questions about what kind of product you want, how you&#39;ll use it and what&#39;s important to you in making your decision. </div></div></div><div class="flex flex-wrap md:flex-nowrap items-center my-8 px-8"><div class="w-full flex justify-center md:w-auto"><div class="\n              rounded-full\n              w-24\n              h-24\n              bg-green-200\n              flex\n              items-center\n              justify-center\n              text-5xl\n              mb-6\n              md:mb-0 md:mr-12\n              flex-shrink-0\n            "> 2. </div></div><div class="text-center md:text-left"><div class="text-2xl font-bold"> Our artificial intelligence algorithms will search thousands of products. </div><div class="text-sm text-gray-500 font-light"> Using your responses, we&#39;ll <span class="italic">sift</span> through thousands of pages of product data and reviews to find the best fit for your needs. </div></div></div><div class="flex flex-wrap md:flex-nowrap items-center my-8 px-8"><div class="w-full flex justify-center md:w-auto"><div class="\n              rounded-full\n              w-24\n              h-24\n              bg-green-200\n              flex\n              items-center\n              justify-center\n              text-5xl\n              mb-6\n              md:mb-0 md:mr-12\n              flex-shrink-0\n            "> 3. </div></div><div class="text-center md:text-left"><div class="text-2xl font-bold"> Select from the best options and find the lowest price. </div><div class="text-sm text-gray-500 font-light"> Once we&#39;ve found the best options, we&#39;ll show them to you along with reasons customized to your responses. We&#39;ll also highlight top reviews and help you find the lowest price available. </div></div></div>',3),W=d(" Ready? Let's "),M=a("span",{class:"\n            p-1\n            bg-green-200\n            rounded\n            font-bold\n            text-gray-900\n            group-hover:bg-green-300\n            transition-colors\n            duration-500\n          "},"get started",-1),H=d(". ");q.render=function(e,t,n,s,c,d){const u=l("router-link");return r(),o("div",D,[O,a("div",T,[N,a(u,{to:"/",class:"text-gray-500 font-light mt-4 mb-24 hover:underline group"},{default:i((()=>[W,M,H])),_:1})])])};var U=e({name:"App",setup(){const e=t(),l=n(""),o=n(null),a=n(null);let r=!1;function i(){r=!0,s({targets:[o.value,a.value],opacity:0,translateY:-250,duration:500,easing:"easeOutQuad"}).finished.then((()=>{r=!1,e.push({path:"/categories",query:{search:l.value?l.value:void 0}})}))}function c(e){!r&&e.deltaY>50&&i()}return u((()=>{window.addEventListener("wheel",c,!1)})),m((()=>{window.removeEventListener("wheel",c,!1)})),{leave:i,toolbar:a,arrow:o,search:l}}});const I={class:"absolute top-0 left-0 w-screen h-screen flex items-center pb-16"},P={class:"w-full p-4",ref:"toolbar"},Q=a("div",{class:"uppercase text-4xl text-center mb-4 font-medium"},"Sift",-1),R={class:"max-w-md mx-auto flex"},K=a("div",{class:"animate-bounce text-gray-400 font-light mb-2"}," View All Categories ",-1);U.render=function(e,t,n,s,i,c){const d=l("feather-icon");return r(),o("div",I,[a("div",P,[Q,a("div",R,[p(a("input",{type:"text",class:"\n            shadow-md\n            mx-auto\n            w-full\n            bg-gray-200\n            rounded-xl\n            font-light\n            text-base\n            p-2\n            md:p-4 md:text-lg\n            focus:outline-none focus:ring\n          ",placeholder:"What would you like to buy today?",onKeydown:t[1]||(t[1]=x((t=>e.leave()),["enter"])),"onUpdate:modelValue":t[2]||(t[2]=t=>e.search=t)},null,544),[[f,e.search]])])],512),a("button",{class:"focus:outline-none absolute bottom-0 w-screen text-center p-4",ref:"arrow",onClick:t[3]||(t[3]=t=>e.leave())},[K,a(d,{type:"chevrons-down","stroke-width":"3",size:"48",class:"animate-bounce text-gray-300"})],512)])};var Y=e({name:"SelectCard",emits:["select"],props:{name:{type:String,required:!0},icon:{type:String},benefits:{type:Array,required:!0},selected:{type:Boolean}},setup:(e,{emit:t})=>({props:e,select:()=>t("select")})});const _={class:"flex flex-col w-full items-start md:items-center md:my-auto"},F={class:"block text-3xl font-medium md:font-normal"},J={key:0,class:"my-12 hidden md:block"},X={class:"block font-light text-sm text-gray-700"},G={class:"inline md:hidden"},Z={key:0,class:"block md:hidden"};Y.render=function(e,t,n,s,i,c){const u=l("feather-icon");return r(),o("button",{class:["\n      p-8\n      md:p-0 md:h-80\n      w-full\n      md:w-1/3\n      rounded-2xl\n      bg-gray-100\n      m-4\n      flex\n      md:justify-center\n      items-center\n      transition-shadow\n      duration-200\n      hover:ring\n      hover:ring-green-100\n    ",{"ring ring-green-300 hover:ring-green-300":e.props.selected}],onClick:t[1]||(t[1]=t=>e.select())},[a("span",_,[a("span",F,v(e.props.name),1),e.props.icon?(r(),o("span",J,[a(u,{type:e.props.icon,class:"w-16 mx-auto"},null,8,["type"])])):h("",!0),a("span",X,[(r(!0),o(g,null,y(e.props.benefits,((e,t)=>(r(),o("span",{key:t,class:"md:block my-2"},[a("span",G,v(0===t?"":", "),1),d(v(e),1)])))),128))])]),e.props.icon?(r(),o("span",Z,[a(u,{type:e.props.icon,class:"w-12 mx-auto"},null,8,["type"])])):h("",!0)],2)};var $=e({name:"ConfirmButton",emits:["confirm"],props:{enabled:{type:Boolean,default:()=>!0},captureEnter:{type:Boolean,default:()=>!0}},setup(e,{emit:t}){function n(){t("confirm")}return e.captureEnter&&function(e){function t(t){"Enter"===t.key&&e()}u((()=>{window.addEventListener("keypress",t)})),m((()=>{window.removeEventListener("keypress",t)}))}((()=>{e.enabled&&n()})),{props:e,next:n}}});const ee=d(" Confirm ");$.render=function(e,t,n,s,a,i){const c=l("feather-icon");return r(),o("button",{class:["\n      rounded-2xl\n      bg-vivid-green\n      text-lg\n      px-12\n      py-4\n      transition-opacity\n      duration-500\n      font-medium\n      mx-auto\n      flex\n      items-center\n    ",{"opacity-50":!e.props.enabled,"ring ring-gray-100":e.props.enabled}],onClick:t[1]||(t[1]=t=>e.props.enabled&&e.next())},[ee,e.props.enabled?(r(),o(c,{key:0,type:"corner-down-right",size:"24",class:"ml-2 hidden md:block"})):h("",!0)],2)};var te=e({name:"Select",components:{SelectCard:Y,ConfirmButton:$},setup(){const e=t(),n=w({option:null});const s=b((()=>null!==n.option));return{state:n,completed:s,select:function(e){n.option=e},confirm:()=>e.push("/")}}});const ne={class:"text-center mt-12 max-w-4xl px-4 mx-auto"},se=a("div",{class:"text-4xl md:text-4xl font-bold"}," What kind of headphones do you want? ",-1),le={class:"flex flex-wrap md:flex-nowrap mt-8 px-12"},oe={class:"my-8"};te.render=function(e,t,n,s,i,c){const d=l("SelectCard"),u=l("ConfirmButton");return r(),o("div",ne,[se,a("div",le,[a(d,{name:"Wireless",icon:"wifi",benefits:["No Tangles","Design"],selected:"wireless"===e.state.option,onSelect:t[1]||(t[1]=t=>e.select("wireless"))},null,8,["selected"]),a(d,{name:"Either",benefits:["More Options"],selected:"either"===e.state.option,onSelect:t[2]||(t[2]=t=>e.select("either"))},null,8,["selected"]),a(d,{name:"Wired",icon:"zap",benefits:["Better Sound","Cheaper"],selected:"wired"===e.state.option,onSelect:t[3]||(t[3]=t=>e.select("wired"))},null,8,["selected"])]),a("div",oe,[a(u,{enabled:e.completed,onConfirm:t[4]||(t[4]=t=>e.confirm())},null,8,["enabled"])])])};var ae=e({name:"Slider",emits:["update:modelValue"],props:{min:{type:Number,default:()=>0},max:{type:Number,default:()=>100},fine:{type:Number,default:()=>1},coarse:{type:Number,default:()=>5},lowest:{type:Number},ticks:{type:Array,default:()=>[]},ticker:{type:Boolean,default:()=>!0},duration:{type:Number,default:()=>500},modelValue:{type:Number,default:()=>0}},setup(e,{emit:t}){const l=n(null),o=n(null),a=n(null),r=b((()=>{var t;return null!=(t=e.lowest)?t:e.min}));function i(t){return(t-r.value)/(e.max-r.value)}const c=b((()=>i(e.modelValue))),d=b((()=>e.ticks.map((t=>({point:(t.point-r.value)/(e.max-r.value),title:t.title}))))),p=b((()=>e.ticks.some((e=>e.title))));function f(t){const n=100*i(t)+"%",l={targets:o.value,left:n,duration:e.duration,easing:"easeOutExpo"},r={targets:a.value,width:n,duration:e.duration,easing:"easeOutExpo"};s.timeline(l).add(r,0)}k((()=>e.modelValue),f);let x=!1,v=0;function h(n){if(!l.value)return;const s=l.value.getBoundingClientRect(),o=(n.clientX-s.left)/s.width,a=Math.max(Math.min(o,1),0)*(e.max-e.min)+e.min,r=Math.round(a/e.fine)*e.fine;t("update:modelValue",r)}function g(){v++}function y(){v--,v<=0&&(x=!1)}function w(e){x&&h(e)}u((()=>{f(e.modelValue),window.addEventListener("mouseup",y),window.addEventListener("mousedown",g),window.addEventListener("mousemove",w)})),m((()=>{window.removeEventListener("mouseup",y),window.removeEventListener("mousedown",g),window.removeEventListener("mousemove",w)}));const S=b((()=>Boolean(e.ticker)));return{select:function(e){x=!0,h(e)},ratio:c,adjust:function(n){switch(n){case"left":t("update:modelValue",Math.max(e.modelValue-e.coarse,e.min));break;case"right":t("update:modelValue",Math.min(e.modelValue+e.coarse,e.max))}},button:l,ticks:d,titlebar:p,ticker:o,progress:a,hasTicker:S}}});const re={class:"p-4"},ie={key:0,class:"hidden xs:block relative pb-8 pt-4"},ce={class:"relative w-full h-4 flex"},de={key:0,class:"\n          absolute\n          top-1/2\n          rounded-full\n          bg-green-400\n          w-5\n          h-5\n          my-auto\n          z-20\n          transform\n          -translate-x-1/2 -translate-y-1/2\n          pointer-events-none\n        ",ref:"ticker"},ue={class:"h-full bg-green-200 w-0",ref:"progress"},me={class:"\n            absolute\n            flex\n            items-center\n            text-gray-700\n            w-full\n            h-full\n            top-0\n            left-0\n            pointer-events-none\n          "};ae.render=function(e,t,n,s,l,i){return r(),o("div",re,[e.titlebar?(r(),o("div",ie,[(r(!0),o(g,null,y(e.ticks,((e,t)=>(r(),o("div",{key:t,class:"absolute transform -translate-x-1/2 text-gray-700",style:{left:100*e.point+"%"}},v(e.title),5)))),128))])):h("",!0),a("div",ce,[e.hasTicker?(r(),o("div",de,null,512)):h("",!0),a("button",{ref:"button",class:"\n          w-full\n          h-full\n          rounded-lg\n          bg-gray-100\n          overflow-hidden\n          focus:outline-none\n          focus:ring\n        ",onMousedown:t[1]||(t[1]=(...t)=>e.select&&e.select(...t)),onKeydown:[t[2]||(t[2]=x((t=>e.adjust("left")),["left"])),t[3]||(t[3]=x((t=>e.adjust("right")),["right"]))]},[a("div",ue,null,512),a("div",me,[(r(!0),o(g,null,y(e.ticks,((e,t)=>(r(),o("div",{key:t,class:"absolute h-3/4 w-px bg-gray-400 z-10 -ml-px",style:{left:100*e.point+"%"}},null,4)))),128))])],544)])])};var pe=e({name:"SliderTest",components:{Slider:ae},setup(){const e=n(50),t=[];for(let n=2;n<100;n+=2)t.push({point:n});return console.log(t),{value:e,ticks:t}}});const fe={class:"text-center text-4xl text-gray-700 p-4"},xe={class:"max-w-4xl mx-auto"},ve={class:"flex flex-col justify-center text-center"},he=a("div",null," Reactive!! Different!! Just a test page. ",-1);pe.render=function(e,t,n,s,i,c){const d=l("Slider");return r(),o(g,null,[a("div",fe,v(e.value),1),a("div",xe,[a(d,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value=t),min:1,max:100,ticks:e.ticks},null,8,["modelValue","ticks"])]),a("div",ve,[he,a("div",{class:"bg-gray-500 mx-auto my-4",style:{width:2*e.value+"px",height:2*e.value+"px"}},null,4)])],64)};const ge=w({categories:{data:[{name:"Loading Demo",icon:"headphones",description:"It's fake...",location:"/loading"},{name:"Size Demo",icon:"maximize",description:"Basically the same as Slider Demo.",location:"/tests/size"},{name:"Slider Demo",icon:"pie-chart",description:"Doesn't work on phones!",location:"/tests/slider"},{name:"QA Demo",icon:"help-circle",description:"Totally functionless.",location:"/tests/qa"},{name:"Options Demo",icon:"list",description:"Three options, pick one.",location:"/tests/select"},{name:"Attributes Demo",icon:"more-horizontal",description:"Pick all of them!",location:"/tests/attributes"}]}.data});var ye=e({name:"CategoryHeader",props:{data:{type:Object,required:!0}},setup:e=>({props:e})});const we={class:"w-56 h-56 bg-gray-100 rounded-xl border-2 border-vivid-green p-4 text-center"},be={class:"block font-light"},ke={class:"block mt-4 text-lg font-light"};ye.render=function(e,t,n,s,c,d){const u=l("feather-icon"),m=l("router-link");return r(),o(m,{to:e.props.data.location,class:"w-full"},{default:i((()=>[a("button",we,[a(u,{type:e.props.data.icon,size:"72"},null,8,["type"]),a("span",be,[a("span",ke,v(e.props.data.name),1)])])])),_:1},8,["to"])};var Se=e({components:{CategoryHeader:ye},setup(){var e;const t=S(),s=n(null!=(e=t.query.search)?e:""),l=b((()=>{if(!s.value)return ge.categories;return new C(ge.categories,{keys:["name","description"]}).search(s.value).map((e=>e.item))}));return{search:s,categories:l}}});const Ce={class:"mt-8"},Be=a("div",{class:"text-4xl md:text-4xl font-bold text-center mt-12 mb-6"}," Let's find you the best ",-1),je={class:"max-w-xl mx-auto flex px-4"},Ve={class:"flex flex-wrap justify-center max-w-4xl mx-auto mt-8"};Se.render=function(e,t,n,s,i,c){const d=l("CategoryHeader");return r(),o("div",null,[a("div",Ce,[Be,a("div",je,[p(a("input",{type:"text",class:"\n            shadow-md\n            mx-auto\n            w-full\n            bg-gray-100\n            rounded-xl\n            font-light\n            text-base\n            p-2\n            md:py-4 px-6\n            md:text-lg\n            border\n            focus:outline-none focus:ring\n          ",placeholder:"Type to search through 6 whole categories.","onUpdate:modelValue":t[1]||(t[1]=t=>e.search=t)},null,512),[[f,e.search]])])]),a("div",Ve,[(r(!0),o(g,null,y(e.categories,((e,t)=>(r(),o("div",{key:t,class:"md:w-1/3 p-4 text-center"},[a(d,{data:e},null,8,["data"])])))),128))])])};var Ee=e({name:"SliderTest",components:{Slider:ae},setup:()=>({value:n(0),ticks:[{point:25,title:"Cheap"},{point:50,title:"Average"},{point:75,title:"Hefty"}]})});const Ae={class:"text-center text-4xl text-gray-700 p-4"},Le={class:"max-w-4xl mx-auto"};Ee.render=function(e,t,n,s,i,c){const d=l("Slider");return r(),o(g,null,[a("div",Ae,v(e.value),1),a("div",Le,[a(d,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.value=t),fine:25,coarse:25,ticks:e.ticks},null,8,["modelValue","ticks"])])],64)};var ze=e({name:"Loading",setup(){let e=[];B((()=>{e=[]}));const t=[],n=[21,43,34,57,35,18,11,39,68,46,75,20,64,61,49,10,67,86,53,26,13,56,20,8],l=[];for(let s=0;s<24;s++){t[s]=2*n[s];let e=t[s]-n[s];l[s]=e/.1}return u((()=>{for(let o=0;o<24;o++)s({targets:e[o],height:[n[o]+"%",t[o]+"%"],easing:"easeInSine",direction:"alternate",duration:l[o],loop:!0})})),{addBar:function(t){t&&e.push(t)}}}});const qe={id:"container",class:"w-screen h-screen flex flex-col items-center "},De=a("div",{class:"text-3xl pt-10"},[a("span",null,"Let's find you a new "),a("span",{class:"bg-green-300 rounded-md p-1"},"Smart Phone")],-1),Oe={class:"mx-auto my-auto w-96 h-60 text-center flex flex-row items-center justify-center"};ze.render=function(e,t,n,s,l,i){return r(),o("div",qe,[De,a("div",Oe,[(r(),o(g,null,y(24,(t=>a("div",{ref:e.addBar,class:"w-1/24 h-1/2 bg-gray-500 rounded-full m-px"},null,512))),64))])])};var Te=e({name:"AttributeButton",emits:["select"],props:{name:{type:String,required:!0},icon:{type:String},selected:{type:Boolean,default:()=>!1}},setup:(e,{emit:t})=>({props:e,select:()=>t("select")})});Te.render=function(e,t,n,s,a,i){const c=l("feather-icon");return r(),o("button",{class:["\n      bg-gray-100\n      hover:bg-green-50\n      text-gray-700\n      rounded-xl\n      px-6\n      md:px-8\n      py-3\n      md:py-4\n      m-2\n      flex\n      items-center\n      transition-colors\n      duration-200\n      w-full\n      md:w-auto\n      font-semibold\n      text-lg\n      md:text-xl\n      md:text-sm\n      ring-vivid-green\n      ring-1\n      md:ring-0\n    ",{"bg-vivid-green hover:bg-vivid-green text-gray-900":e.props.selected}],onClick:t[1]||(t[1]=t=>e.select())},[e.props.icon?(r(),o(c,{key:0,type:e.props.icon,class:"w-5 h-5 mr-4 md:mr-2"},null,8,["type"])):h("",!0),d(" "+v(e.props.name),1)],2)};var Ne=e({name:"Attributes",components:{ConfirmButton:$,AttributeButton:Te},setup(){const e=t(),n=w({selected:[]});const s=b((()=>0!==n.selected.length));return{state:n,select:function(e){n.selected.includes(e)?n.selected=n.selected.filter((t=>t!==e)):n.selected.push(e)},completed:s,confirm:()=>e.push("/")}}});const We={class:"text-center mt-12 max-w-4xl px-4 mx-auto"},Me=a("div",{class:"text-4xl md:text-4xl font-bold"}," What do you use your headphones for? ",-1),He={class:"mt-8 md:my-28 px-4 md:px-12"},Ue={class:"flex flex-wrap md:flex-nowrap justify-center"},Ie={class:"flex flex-wrap md:flex-nowrap justify-center"},Pe={class:"flex flex-wrap md:flex-nowrap justify-center"},Qe={class:"my-8"};Ne.render=function(e,t,n,s,i,c){const d=l("AttributeButton"),u=l("ConfirmButton");return r(),o("div",We,[Me,a("div",He,[a("div",Ue,[a(d,{name:"Office Work",icon:"play",onSelect:t[1]||(t[1]=t=>e.select("office-work")),selected:e.state.selected.includes("office-work")},null,8,["selected"]),a(d,{name:"Coffee Shop",icon:"play",onSelect:t[2]||(t[2]=t=>e.select("coffee-shop")),selected:e.state.selected.includes("coffee-shop")},null,8,["selected"])]),a("div",Ie,[a(d,{name:"Airplane",icon:"play",onSelect:t[3]||(t[3]=t=>e.select("airplane")),selected:e.state.selected.includes("airplane")},null,8,["selected"]),a(d,{name:"Phone Calls",icon:"play",onSelect:t[4]||(t[4]=t=>e.select("phone-calls")),selected:e.state.selected.includes("phone-calls")},null,8,["selected"]),a(d,{name:"At Home",icon:"play",onSelect:t[5]||(t[5]=t=>e.select("at-home")),selected:e.state.selected.includes("at-home")},null,8,["selected"])]),a("div",Pe,[a(d,{name:"Commuting",icon:"play",onSelect:t[6]||(t[6]=t=>e.select("commuting")),selected:e.state.selected.includes("commuting")},null,8,["selected"]),a(d,{name:"Exercise",icon:"info",onSelect:t[7]||(t[7]=t=>e.select("exercise")),selected:e.state.selected.includes("exercise")},null,8,["selected"])])]),a("div",Qe,[a(u,{enabled:e.completed,onConfirm:t[8]||(t[8]=t=>e.confirm())},null,8,["enabled"])])])};const Re=[{path:"/home",component:U},{path:"/",component:Se},{path:"/loading",component:ze},{path:"/tests/size",component:pe},{path:"/tests/slider",component:Ee},{path:"/tests/qa",component:q},{path:"/tests/select",component:te},{path:"/tests/attributes",component:Ne}],Ke=j({history:V(),routes:Re});const Ye=E(L);Ye.use(Ke),Ye.component("feather-icon",A),Ye.mount("#app");
