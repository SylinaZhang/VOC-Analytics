import{s as I}from"./index-CI2xSwuC.js";import{s as T}from"./index-Dga9hBp7.js";import{s as z}from"./index-CZ4kCCQ0.js";import{s as D}from"./index-BewXgKyH.js";import{s as J,a as U}from"./index-QvGz82GH.js";import{s as j}from"./index-Bw1x5_pn.js";import{a as x}from"./axios-Dd5_8ppC.js";import{r as d,o as q,a as s,c as n,b as t,d as p,e as a,H as b,t as l,J as F,F as u,f as _,g as v}from"./index-Bc3bAAiN.js";import"./index-CAMXmtmr.js";const L={class:"flex flex-col"},O={class:"card"},P=t("i",{class:"pi pi-search"},null,-1),H={class:"flex flex-col"},A={class:"card"},E=t("div",{class:"font-semibold text-xl"},"分析结论",-1),M={key:0,class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}},R={class:"card"},G=t("div",{class:"font-semibold text-xl",style:{"margin-bottom":"20px"}},"评论列表",-1),K={class:"list-none p-0 m-0"},Q={class:"m-0"},W={style:{padding:"10px"}},X={class:"text-base"},Y={class:"text-base"},Z={class:"text-base"},ee={class:"text-base"},g="https://4qbg7psib5.execute-api.us-east-1.amazonaws.com/test",pe={__name:"PanelsDoc",setup(te){const w=d([{label:"Save",icon:"pi pi-check"},{label:"Update",icon:"pi pi-upload"},{label:"Delete",icon:"pi pi-trash"},{label:"Home Page",icon:"pi pi-home"}]);d([{label:"Save",icon:"pi pi-fw pi-check"},{label:"Update",icon:"pi pi-fw pi-refresh"},{label:"Delete",icon:"pi pi-fw pi-trash"}]),d(null);const m=d(null),h=d(null),y=d(!0);function k(){m.value=[],x.get(g+"/get_analysis_details").then(o=>{m.value=JSON.parse(o.data.body)}).catch(o=>{console.error(o)})}function N(o){h.value="",y.value=!1;const r=JSON.stringify({question:o});x.post(g+"/qa_bot",{body:r},{headers:{"Content-Type":"application/json"}}).then(c=>{console.log(c),y.value=!0,h.value=JSON.parse(c.data.body).answers}).catch(c=>{console.error(c)})}return q(()=>{m.value=k()}),(o,r)=>{const c=J,V=j,$=U,S=D,B=z,f=T,C=I;return s(),n("div",L,[t("div",O,[p(B,null,{center:a(()=>[p($,{style:{width:"100%","min-width":"600px"}},{default:a(()=>[p(c,null,{default:a(()=>[P]),_:1}),p(V,{placeholder:"输入您的问题",size:"large",style:{width:"100%"},modelValue:o.ana_value,"onUpdate:modelValue":r[0]||(r[0]=e=>o.ana_value=e)},null,8,["modelValue"])]),_:1})]),end:a(()=>[p(S,{label:"分析",model:w.value,size:"large",onClick:r[1]||(r[1]=e=>N(o.ana_value))},null,8,["model"])]),_:1})]),t("div",H,[t("div",null,[t("div",A,[E,b(" "+l(h.value),1),y.value?F("",!0):(s(),n("i",M))]),t("div",R,[G,t("ul",K,[(s(!0),n(u,null,_(m.value,e=>(s(),n("li",{class:"flex flex-col md:flex-row md:items-center md:justify-between mb-6",key:e.id},[p(C,{style:{width:"100%"}},{title:a(()=>[b("用户："+l(e.customer)+"，评分："+l(e.rating),1)]),content:a(()=>[t("p",Q,l(e.review),1),t("div",W,[(s(!0),n(u,null,_(e.advantages,i=>(s(),v(f,{severity:"success",key:e.id,style:{margin:"10px"}},{default:a(()=>[t("span",X,l(i.term),1)]),_:2},1024))),128)),(s(!0),n(u,null,_(e.expectations,i=>(s(),v(f,{severity:"info",key:e.id,style:{margin:"10px"}},{default:a(()=>[t("span",Y,l(i.term),1)]),_:2},1024))),128)),(s(!0),n(u,null,_(e.motivations,i=>(s(),v(f,{severity:"warn",key:e.id,style:{margin:"10px"}},{default:a(()=>[t("span",Z,l(i.term),1)]),_:2},1024))),128)),(s(!0),n(u,null,_(e.disadvantages,i=>(s(),v(f,{severity:"danger",key:e.id,style:{margin:"10px"}},{default:a(()=>[t("span",ee,l(i.term),1)]),_:2},1024))),128))])]),_:2},1024)]))),128))])])])])])}}};export{pe as default};
