import{B as w,U as h,i as C,s as B,G as g,a as b,c as y,d as e,L as x,e as u,h as p,I as v,b as o,m as c,g as D,K as I,r as _}from"./index-Bc3bAAiN.js";import{s as P}from"./index-DyY1ucbJ.js";import{s as S}from"./index-BewXgKyH.js";import{s as z}from"./index-DPh3RVuK.js";import"./index-CAMXmtmr.js";import"./index-BCKLKQOk.js";import"./index-erLa119m.js";var T=function(s){var i=s.dt;return`
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: `.concat(i("splitbutton.border.radius"),`;
}

.p-splitbutton-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-button:focus-visible,
.p-splitbutton-dropdown:focus-visible {
    z-index: 1;
}

.p-splitbutton-button:not(:disabled):hover,
.p-splitbutton-button:not(:disabled):active {
    border-right: 0 none;
}

.p-splitbutton-dropdown {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-splitbutton-fluid {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-top-right-radius: `).concat(i("splitbutton.rounded.border.radius"),`;
    border-bottom-right-radius: `).concat(i("splitbutton.rounded.border.radius"),`;
}

.p-splitbutton-rounded .p-splitbutton-button {
    border-top-left-radius: `).concat(i("splitbutton.rounded.border.radius"),`;
    border-bottom-left-radius: `).concat(i("splitbutton.rounded.border.radius"),`;
}

.p-splitbutton-raised {
    box-shadow: `).concat(i("splitbutton.raised.shadow"),`;
}
`)},V={root:function(s){var i=s.instance,d=s.props;return["p-splitbutton p-component",{"p-splitbutton-raised":d.raised,"p-splitbutton-rounded":d.rounded,"p-splitbutton-fluid":i.hasFluid}]},pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown"},Z=w.extend({name:"splitbutton",theme:T,classes:V}),E={name:"BaseSplitButton",extends:B,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1},fluid:{type:Boolean,default:null},class:{type:null,default:null},style:{type:null,default:null},buttonProps:{type:null,default:null},menuButtonProps:{type:null,default:null},menuButtonIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:Z,provide:function(){return{$pcSplitButton:this,$parentInstance:this}}},$={name:"SplitButton",extends:E,inheritAttrs:!1,emits:["click"],inject:{$pcFluid:{default:null}},data:function(){return{id:this.$attrs.id,isExpanded:!1}},watch:{"$attrs.id":function(s){this.id=s||h()}},mounted:function(){var s=this;this.id=this.id||h(),this.$watch("$refs.menu.visible",function(i){s.isExpanded=i})},methods:{onDropdownButtonClick:function(s){s&&s.preventDefault(),this.$refs.menu.toggle({currentTarget:this.$el,relatedTarget:this.$refs.button.$el}),this.isExpanded=this.$refs.menu.visible},onDropdownKeydown:function(s){(s.code==="ArrowDown"||s.code==="ArrowUp")&&(this.onDropdownButtonClick(),s.preventDefault())},onDefaultButtonClick:function(s){this.isExpanded&&this.$refs.menu.hide(s),this.$emit("click",s)}},computed:{containerClass:function(){return[this.cx("root"),this.class]},hasFluid:function(){return C(this.fluid)?!!this.$pcFluid:this.fluid}},components:{PVSButton:S,PVSMenu:z,ChevronDownIcon:P}},G=["data-p-severity"];function H(n,s,i,d,r,a){var t=g("PVSButton"),f=g("PVSMenu");return b(),y("div",c({class:a.containerClass,style:n.style},n.ptmi("root"),{"data-p-severity":n.severity}),[e(t,c({type:"button",class:n.cx("pcButton"),label:n.label,disabled:n.disabled,severity:n.severity,text:n.text,icon:n.icon,outlined:n.outlined,size:n.size,fluid:n.fluid,"aria-label":n.label,onClick:a.onDefaultButtonClick},n.buttonProps,{pt:n.ptm("pcButton"),unstyled:n.unstyled}),x({default:u(function(){return[p(n.$slots,"default")]}),_:2},[n.$slots.icon?{name:"icon",fn:u(function(l){return[p(n.$slots,"icon",{class:v(l.class)},function(){return[o("span",c({class:[n.icon,l.class]},n.ptm("pcButton").icon,{"data-pc-section":"buttonicon"}),null,16)]})]}),key:"0"}:void 0]),1040,["class","label","disabled","severity","text","icon","outlined","size","fluid","aria-label","onClick","pt","unstyled"]),e(t,c({ref:"button",type:"button",class:n.cx("pcDropdown"),disabled:n.disabled,"aria-haspopup":"true","aria-expanded":r.isExpanded,"aria-controls":r.id+"_overlay",onClick:a.onDropdownButtonClick,onKeydown:a.onDropdownKeydown,severity:n.severity,text:n.text,outlined:n.outlined,size:n.size,unstyled:n.unstyled},n.menuButtonProps,{pt:n.ptm("pcDropdown")}),{icon:u(function(l){return[p(n.$slots,n.$slots.dropdownicon?"dropdownicon":"menubuttonicon",{class:v(l.class)},function(){return[(b(),D(I(n.menuButtonIcon||n.dropdownIcon?"span":"ChevronDownIcon"),c({class:[n.dropdownIcon||n.menuButtonIcon,l.class]},n.ptm("pcDropdown").icon,{"data-pc-section":"menubuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","aria-expanded","aria-controls","onClick","onKeydown","severity","text","outlined","size","unstyled","pt"]),e(f,{ref:"menu",id:r.id+"_overlay",model:n.model,popup:!0,autoZIndex:n.autoZIndex,baseZIndex:n.baseZIndex,appendTo:n.appendTo,unstyled:n.unstyled,pt:n.ptm("pcMenu")},x({_:2},[n.$slots.menuitemicon?{name:"itemicon",fn:u(function(l){return[p(n.$slots,"menuitemicon",{item:l.item,class:v(l.class)})]}),key:"0"}:void 0,n.$slots.item?{name:"item",fn:u(function(l){return[p(n.$slots,"item",{item:l.item,hasSubmenu:l.hasSubmenu,label:l.label,props:l.props})]}),key:"1"}:void 0]),1032,["id","model","autoZIndex","baseZIndex","appendTo","unstyled","pt"])],16,G)}$.render=H;var K=function(s){return s.dt,`
.p-buttongroup .p-button {
    margin: 0;
}

.p-buttongroup .p-button:not(:last-child),
.p-buttongroup .p-button:not(:last-child):hover {
    border-right: 0 none;
}

.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttongroup .p-button:first-of-type:not(:only-of-type) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttongroup .p-button:last-of-type:not(:only-of-type) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttongroup .p-button:focus {
    position: relative;
    z-index: 1;
}
`},A={root:"p-buttongroup p-component"},F=w.extend({name:"buttongroup",theme:K,classes:A}),R={name:"BaseButtonGroup",extends:B,style:F,provide:function(){return{$pcButtonGroup:this,$parentInstance:this}}},k={name:"ButtonGroup",extends:R,inheritAttrs:!1};function M(n,s,i,d,r,a){return b(),y("span",c({class:n.cx("root"),role:"group"},n.ptmi("root")),[p(n.$slots,"default")],16)}k.render=M;const U="/demo/images/logo-white.svg",W="/demo/images/logo.svg",L={class:"flex flex-col md:flex-row gap-8"},N={class:"md:w-1/2"},O={class:"card flex flex-col gap-4"},j=o("div",{class:"font-semibold text-xl"},"Default",-1),q={class:"flex flex-wrap gap-2"},J={class:"card flex flex-col gap-4"},Q=o("div",{class:"font-semibold text-xl"},"Severities",-1),X={class:"flex flex-wrap gap-2"},Y={class:"card flex flex-col gap-4"},ee=o("div",{class:"font-semibold text-xl"},"Text",-1),te={class:"flex flex-wrap gap-2"},ne={class:"card flex flex-col gap-4"},oe=o("div",{class:"font-semibold text-xl"},"Outlined",-1),se={class:"flex flex-wrap gap-2"},le={class:"card flex flex-col gap-4"},ie=o("div",{class:"font-semibold text-xl"},"Group",-1),ae={class:"flex flex-wrap gap-2"},de={class:"card flex flex-col gap-4"},re=o("div",{class:"font-semibold text-xl"},"SplitButton",-1),ue={class:"flex flex-wrap gap-2"},pe={class:"card flex flex-col gap-4"},ce=o("div",{class:"font-semibold text-xl"},"Templating",-1),be={class:"flex flex-wrap gap-2"},fe=o("img",{alt:"logo",src:U,style:{width:"1.5rem"}},null,-1),me=o("img",{alt:"logo",src:W,style:{width:"1.5rem"}},null,-1),ve=o("span",{class:"ml-2 text-bold"},"PrimeVue",-1),ye={class:"md:w-1/2"},he={class:"card flex flex-col gap-4"},ge=o("div",{class:"font-semibold text-xl"},"Icons",-1),xe={class:"flex flex-wrap gap-2"},_e={class:"card flex flex-col gap-4"},we=o("div",{class:"font-semibold text-xl"},"Raised",-1),Be={class:"flex flex-wrap gap-2"},Se={class:"card flex flex-col gap-4"},$e=o("div",{class:"font-semibold text-xl"},"Rounded",-1),ke={class:"flex flex-wrap gap-2"},Ce={class:"card flex flex-col gap-4"},De=o("div",{class:"font-semibold text-xl"},"Rounded Icons",-1),Ie={class:"flex flex-wrap gap-2"},Pe={class:"card flex flex-col gap-4"},ze=o("div",{class:"font-semibold text-xl"},"Rounded Text",-1),Te={class:"flex flex-wrap gap-2"},Ve={class:"card flex flex-col gap-4"},Ze=o("div",{class:"font-semibold text-xl"},"Rounded Outlined",-1),Ee={class:"flex flex-wrap gap-2"},Ge={class:"card flex flex-col gap-4"},He=o("div",{class:"font-semibold text-xl"},"Loading",-1),Ke={class:"flex flex-wrap gap-2"},Ne={__name:"ButtonDoc",setup(n){const s=_([{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),i=_([!1,!1,!1]);function d(r){i.value[r]=!0,setTimeout(()=>i.value[r]=!1,1e3)}return(r,a)=>{const t=S,f=k,l=$;return b(),y("div",L,[o("div",N,[o("div",O,[j,o("div",q,[e(t,{label:"Submit"}),e(t,{label:"Disabled",disabled:!0}),e(t,{label:"Link",class:"p-button-link"})])]),o("div",J,[Q,o("div",X,[e(t,{label:"Primary"}),e(t,{label:"Secondary",severity:"secondary"}),e(t,{label:"Success",severity:"success"}),e(t,{label:"Info",severity:"info"}),e(t,{label:"Warn",severity:"warn"}),e(t,{label:"Help",severity:"help"}),e(t,{label:"Danger",severity:"danger"}),e(t,{label:"Contrast",severity:"contrast"})])]),o("div",Y,[ee,o("div",te,[e(t,{label:"Primary",text:""}),e(t,{label:"Secondary",severity:"secondary",text:""}),e(t,{label:"Success",severity:"success",text:""}),e(t,{label:"Info",severity:"info",text:""}),e(t,{label:"Warn",severity:"warn",text:""}),e(t,{label:"Help",severity:"help",text:""}),e(t,{label:"Danger",severity:"danger",text:""}),e(t,{label:"Plain",plain:"",text:""})])]),o("div",ne,[oe,o("div",se,[e(t,{label:"Primary",outlined:""}),e(t,{label:"Secondary",severity:"secondary",outlined:""}),e(t,{label:"Success",severity:"success",outlined:""}),e(t,{label:"Info",severity:"info",outlined:""}),e(t,{label:"warn",severity:"warn",outlined:""}),e(t,{label:"Help",severity:"help",outlined:""}),e(t,{label:"Danger",severity:"danger",outlined:""}),e(t,{label:"Contrast",severity:"contrast",outlined:""})])]),o("div",le,[ie,o("div",ae,[e(f,null,{default:u(()=>[e(t,{label:"Save",icon:"pi pi-check"}),e(t,{label:"Delete",icon:"pi pi-trash"}),e(t,{label:"Cancel",icon:"pi pi-times"})]),_:1})])]),o("div",de,[re,o("div",ue,[e(l,{label:"Save",model:s.value},null,8,["model"]),e(l,{label:"Save",model:s.value,severity:"secondary"},null,8,["model"]),e(l,{label:"Save",model:s.value,severity:"success"},null,8,["model"]),e(l,{label:"Save",model:s.value,severity:"info"},null,8,["model"]),e(l,{label:"Save",model:s.value,severity:"warn"},null,8,["model"]),e(l,{label:"Save",model:s.value,severity:"help"},null,8,["model"]),e(l,{label:"Save",model:s.value,severity:"danger"},null,8,["model"]),e(l,{label:"Save",model:s.value,severity:"contrast"},null,8,["model"])])]),o("div",pe,[ce,o("div",be,[e(t,{type:"button"},{default:u(()=>[fe]),_:1}),e(t,{type:"button",outlined:"",severity:"success"},{default:u(()=>[me,ve]),_:1})])])]),o("div",ye,[o("div",he,[ge,o("div",xe,[e(t,{icon:"pi pi-star-fill",class:"mr-2 mb-2"}),e(t,{label:"Bookmark",icon:"pi pi-bookmark",class:"mr-2 mb-2"}),e(t,{label:"Bookmark",icon:"pi pi-bookmark",iconPos:"right",class:"mr-2 mb-2"})])]),o("div",_e,[we,o("div",Be,[e(t,{label:"Primary",raised:""}),e(t,{label:"Secondary",severity:"secondary",raised:""}),e(t,{label:"Success",severity:"success",raised:""}),e(t,{label:"Info",severity:"info",raised:""}),e(t,{label:"Warn",severity:"warn",raised:""}),e(t,{label:"Help",severity:"help",raised:""}),e(t,{label:"Danger",severity:"danger",raised:""}),e(t,{label:"Contrast",severity:"contrast",raised:""})])]),o("div",Se,[$e,o("div",ke,[e(t,{label:"Primary",rounded:""}),e(t,{label:"Secondary",severity:"secondary",rounded:""}),e(t,{label:"Success",severity:"success",rounded:""}),e(t,{label:"Info",severity:"info",rounded:""}),e(t,{label:"Warn",severity:"warn",rounded:""}),e(t,{label:"Help",severity:"help",rounded:""}),e(t,{label:"Danger",severity:"danger",rounded:""}),e(t,{label:"Contrast",severity:"contrast",rounded:""})])]),o("div",Ce,[De,o("div",Ie,[e(t,{icon:"pi pi-check",rounded:""}),e(t,{icon:"pi pi-bookmark",severity:"secondary",rounded:""}),e(t,{icon:"pi pi-search",severity:"success",rounded:""}),e(t,{icon:"pi pi-user",severity:"info",rounded:""}),e(t,{icon:"pi pi-bell",severity:"warn",rounded:""}),e(t,{icon:"pi pi-heart",severity:"help",rounded:""}),e(t,{icon:"pi pi-times",severity:"danger",rounded:""})])]),o("div",Pe,[ze,o("div",Te,[e(t,{icon:"pi pi-check",text:"",raised:"",rounded:""}),e(t,{icon:"pi pi-bookmark",severity:"secondary",text:"",raised:"",rounded:""}),e(t,{icon:"pi pi-search",severity:"success",text:"",raised:"",rounded:""}),e(t,{icon:"pi pi-user",severity:"info",text:"",raised:"",rounded:""}),e(t,{icon:"pi pi-bell",severity:"warn",text:"",raised:"",rounded:""}),e(t,{icon:"pi pi-heart",severity:"help",text:"",raised:"",rounded:""}),e(t,{icon:"pi pi-times",severity:"danger",text:"",raised:"",rounded:""})])]),o("div",Ve,[Ze,o("div",Ee,[e(t,{icon:"pi pi-check",rounded:"",outlined:""}),e(t,{icon:"pi pi-bookmark",severity:"secondary",rounded:"",outlined:""}),e(t,{icon:"pi pi-search",severity:"success",rounded:"",outlined:""}),e(t,{icon:"pi pi-user",severity:"info",rounded:"",outlined:""}),e(t,{icon:"pi pi-bell",severity:"warn",rounded:"",outlined:""}),e(t,{icon:"pi pi-heart",severity:"help",rounded:"",outlined:""}),e(t,{icon:"pi pi-times",severity:"danger",rounded:"",outlined:""})])]),o("div",Ge,[He,o("div",Ke,[e(t,{type:"button",class:"mr-2 mb-2",label:"Search",icon:"pi pi-search",loading:i.value[0],onClick:a[0]||(a[0]=m=>d(0))},null,8,["loading"]),e(t,{type:"button",class:"mr-2 mb-2",label:"Search",icon:"pi pi-search",iconPos:"right",loading:i.value[1],onClick:a[1]||(a[1]=m=>d(1))},null,8,["loading"]),e(t,{type:"button",class:"mr-2 mb-2",icon:"pi pi-search",loading:i.value[2],onClick:a[2]||(a[2]=m=>d(2))},null,8,["loading"]),e(t,{type:"button",class:"mr-2 mb-2",label:"Search",loading:i.value[3],onClick:a[3]||(a[3]=m=>d(3))},null,8,["loading"])])])])])}}};export{Ne as default};
