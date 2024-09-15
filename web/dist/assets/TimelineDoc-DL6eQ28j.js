import{s as y}from"./index-CI2xSwuC.js";import{s as z}from"./index-BewXgKyH.js";import{B as w,P as T,s as S,a as u,c as h,F as C,f as O,m as v,b as t,h as g,J as _,_ as B,r as f,d as s,e as r,H as c,t as m,n as A,I as $,a4 as q,a5 as I}from"./index-Bc3bAAiN.js";import"./index-CAMXmtmr.js";var D=function(a){var e=a.dt;return`
.p-timeline {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}

.p-timeline-left .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-left .p-timeline-event-content {
    text-align: left;
}

.p-timeline-right .p-timeline-event {
    flex-direction: row-reverse;
}

.p-timeline-right .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-right .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: row-reverse;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
    text-align: right;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
    text-align: left;
}

.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: right;
}

.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline-vertical .p-timeline-event-content {
    padding: `.concat(e("timeline.vertical.event.content.padding"),`;
}

.p-timeline-vertical .p-timeline-event-connector {
    width: `).concat(e("timeline.event.connector.size"),`;
}

.p-timeline-event {
    display: flex;
    position: relative;
    min-height: `).concat(e("timeline.event.min.height"),`;
}

.p-timeline-event:last-child {
    min-height: 0;
}

.p-timeline-event-opposite {
    flex: 1;
}

.p-timeline-event-content {
    flex: 1;
}

.p-timeline-event-separator {
    flex: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.p-timeline-event-marker {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: baseline;
    border-width: `).concat(e("timeline.event.marker.border.width"),`;
    border-style: solid;
    border-color: `).concat(e("timeline.event.marker.border.color"),`;
    border-radius: `).concat(e("timeline.event.marker.border.radius"),`;
    width: `).concat(e("timeline.event.marker.size"),`;
    height: `).concat(e("timeline.event.marker.size"),`;
    background: `).concat(e("timeline.event.marker.background"),`;
}

.p-timeline-event-marker::before {
    content: " ";
    border-radius: `).concat(e("timeline.event.marker.content.border.radius"),`;
    width: `).concat(e("timeline.event.marker.content.size"),`;
    height:`).concat(e("timeline.event.marker.content.size"),`;
    background: `).concat(e("timeline.event.marker.content.background"),`;
}

.p-timeline-event-marker::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(e("timeline.event.marker.border.radius"),`;
    box-shadow: `).concat(e("timeline.event.marker.content.inset.shadow"),`;
}

.p-timeline-event-connector {
    flex-grow: 1;
    background: `).concat(e("timeline.event.connector.color"),`;
}

.p-timeline-horizontal {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event {
    flex-direction: column;
    flex: 1;
}

.p-timeline-horizontal .p-timeline-event:last-child {
    flex: 0;
}

.p-timeline-horizontal .p-timeline-event-separator {
    flex-direction: row;
}

.p-timeline-horizontal .p-timeline-event-connector {
    width: 100%;
    height: `).concat(e("timeline.event.connector.size"),`;
}

.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline-horizontal .p-timeline-event-content {
    padding: `).concat(e("timeline.horizontal.event.content.padding"),`;
}

.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
    flex-direction: column-reverse;
}

.p-timeline-bottom .p-timeline-event {
    flex-direction: column-reverse;
}
`)},K={root:function(a){var e=a.props;return["p-timeline p-component","p-timeline-"+e.align,"p-timeline-"+e.layout]},event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},P=w.extend({name:"timeline",theme:D,classes:K}),F={name:"BaseTimeline",extends:S,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:P,provide:function(){return{$pcTimeline:this,$parentInstance:this}}},b={name:"Timeline",extends:F,inheritAttrs:!1,methods:{getKey:function(a,e){return this.dataKey?T(a,this.dataKey):e},getPTOptions:function(a,e){return this.ptm(a,{context:{index:e,count:this.value.length}})}}};function N(n,a,e,x,k,o){return u(),h("div",v({class:n.cx("root")},n.ptmi("root")),[(u(!0),h(C,null,O(n.value,function(d,l){return u(),h("div",v({key:o.getKey(d,l),class:n.cx("event"),ref_for:!0},o.getPTOptions("event",l)),[t("div",v({class:n.cx("eventOpposite",{index:l}),ref_for:!0},o.getPTOptions("eventOpposite",l)),[g(n.$slots,"opposite",{item:d,index:l})],16),t("div",v({class:n.cx("eventSeparator"),ref_for:!0},o.getPTOptions("eventSeparator",l)),[g(n.$slots,"marker",{item:d,index:l},function(){return[t("div",v({class:n.cx("eventMarker"),ref_for:!0},o.getPTOptions("eventMarker",l)),null,16)]}),l!==n.value.length-1?g(n.$slots,"connector",{key:0,item:d,index:l},function(){return[t("div",v({class:n.cx("eventConnector"),ref_for:!0},o.getPTOptions("eventConnector",l)),null,16)]}):_("",!0)],16),t("div",v({class:n.cx("eventContent"),ref_for:!0},o.getPTOptions("eventContent",l)),[g(n.$slots,"content",{item:d,index:l})],16)],16)}),128))],16)}b.render=N;const p=n=>(q("data-v-6669d0cb"),n=n(),I(),n),V={class:"grid grid-cols-12 gap-8"},j={class:"col-span-6"},L={class:"card"},M=p(()=>t("div",{class:"font-semibold text-xl mb-4"},"Left Align",-1)),E={class:"col-span-6"},H={class:"card"},R=p(()=>t("div",{class:"font-semibold text-xl mb-4"},"Right Align",-1)),J={class:"col-span-6"},G={class:"card"},Q=p(()=>t("div",{class:"font-semibold text-xl mb-4"},"Alternate Align",-1)),U={class:"col-span-6"},W={class:"card"},X=p(()=>t("div",{class:"font-semibold text-xl mb-4"},"Opposite Content",-1)),Y={class:"text-muted-color"},Z={class:"col-span-full"},ee={class:"card"},te=p(()=>t("div",{class:"font-semibold text-xl mb-4"},"Templating",-1)),ne=["src","alt"],ie=p(()=>t("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! ",-1)),oe={class:"col-span-full"},le={class:"card"},ae=p(()=>t("div",{class:"font-semibold text-xl mb-4"},"Horizontal",-1)),re=p(()=>t("div",{class:"font-semibold mb-2"},"Top Align",-1)),se=p(()=>t("div",{class:"font-semibold mt-4 mb-2"},"Bottom Align",-1)),ce=p(()=>t("div",{class:"font-semibold mt-4 mb-2"},"Alternate Align",-1)),me={__name:"TimelineDoc",setup(n){const a=f([{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-envelope",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]),e=f(["2020","2021","2022","2023"]);return(x,k)=>{const o=b,d=z,l=y;return u(),h("div",V,[t("div",j,[t("div",L,[M,s(o,{value:a.value},{content:r(i=>[c(m(i.item.status),1)]),_:1},8,["value"])])]),t("div",E,[t("div",H,[R,s(o,{value:a.value,align:"right"},{content:r(i=>[c(m(i.item.status),1)]),_:1},8,["value"])])]),t("div",J,[t("div",G,[Q,s(o,{value:a.value,align:"alternate"},{content:r(i=>[c(m(i.item.status),1)]),_:1},8,["value"])])]),t("div",U,[t("div",W,[X,s(o,{value:a.value},{opposite:r(i=>[t("small",Y,m(i.item.date),1)]),content:r(i=>[c(m(i.item.status),1)]),_:1},8,["value"])])]),t("div",Z,[t("div",ee,[te,s(o,{value:a.value,align:"alternate",class:"customized-timeline"},{marker:r(i=>[t("span",{class:"flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm",style:A({backgroundColor:i.item.color})},[t("i",{class:$(i.item.icon)},null,2)],4)]),content:r(i=>[s(l,{class:"mt-4"},{title:r(()=>[c(m(i.item.status),1)]),subtitle:r(()=>[c(m(i.item.date),1)]),content:r(()=>[i.item.image?(u(),h("img",{key:0,src:`https://primefaces.org/cdn/primevue/images/product/${i.item.image}`,alt:i.item.name,width:"200",class:"shadow-sm"},null,8,ne)):_("",!0),ie,s(d,{label:"Read more",text:""})]),_:2},1024)]),_:1},8,["value"])])]),t("div",oe,[t("div",le,[ae,re,s(o,{value:e.value,layout:"horizontal",align:"top"},{content:r(i=>[c(m(i.item),1)]),_:1},8,["value"]),se,s(o,{value:e.value,layout:"horizontal",align:"bottom"},{content:r(i=>[c(m(i.item),1)]),_:1},8,["value"]),ce,s(o,{value:e.value,layout:"horizontal",align:"alternate"},{opposite:r(()=>[c("   ")]),content:r(i=>[c(m(i.item),1)]),_:1},8,["value"])])])])}}},he=B(me,[["__scopeId","data-v-6669d0cb"]]);export{he as default};
