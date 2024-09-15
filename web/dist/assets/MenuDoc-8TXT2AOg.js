import{B as O,U as A,aQ as z,Q as R,j as k,ad as H,D as x,m as u,s as C,O as I,R as N,G as S,V as G,a as c,c as d,F as w,f as V,b as p,W as D,g,K as y,J as h,I as M,t as B,d as v,e as P,ai as he,T as Z,a6 as $,aR as ce,i as E,h as L,Z as F,A as ee,S as j,n as be,aa as Ie,aK as ge,v as ve,aS as it,aT as at,aB as ot,E as ye,aU as rt,p as U,z as st,y as J,C as ut,H as _,aV as X,aA as ct,ar as Y,aW as lt,ak as mt,r as T}from"./index-Bc3bAAiN.js";import{s as ke}from"./index-DyY1ucbJ.js";import{s as te}from"./index-CcJnEpJY.js";import{s as xe}from"./index-DmU6RP03.js";import{s as we}from"./index-CDkZaVKK.js";import{s as re}from"./index-erLa119m.js";import{s as dt}from"./index-BewXgKyH.js";import{O as ft}from"./index-BCKLKQOk.js";import{s as pt}from"./index-DPh3RVuK.js";import{s as ht}from"./index--b48MFbe.js";import{s as bt,a as It}from"./index-QvGz82GH.js";import{s as gt}from"./index-Bw1x5_pn.js";import"./index-CAMXmtmr.js";var vt=function(e){var t=e.dt;return`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: `.concat(t("panelmenu.gap"),`;
}

.p-panelmenu-panel {
    background: `).concat(t("panelmenu.panel.background"),`;
    border-width: `).concat(t("panelmenu.panel.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("panelmenu.panel.border.color"),`;
    color: `).concat(t("panelmenu.panel.color"),`;
    border-radius: `).concat(t("panelmenu.panel.border.radius"),`;
    padding: `).concat(t("panelmenu.panel.padding"),`;
}

.p-panelmenu-panel:first-child {
    border-width: `).concat(t("panelmenu.panel.first.border.width"),`;
    border-top-left-radius: `).concat(t("panelmenu.panel.first.top.border.radius"),`;
    border-top-right-radius: `).concat(t("panelmenu.panel.first.top.border.radius"),`;
}

.p-panelmenu-panel:last-child {
    border-width: `).concat(t("panelmenu.panel.last.border.width"),`;
    border-bottom-left-radius: `).concat(t("panelmenu.panel.last.bottom.border.radius"),`;
    border-bottom-right-radius: `).concat(t("panelmenu.panel.last.bottom.border.radius"),`;
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: `).concat(t("panelmenu.item.border.radius"),`;
    transition: background `).concat(t("panelmenu.transition.duration"),", color ").concat(t("panelmenu.transition.duration"),", outline-color ").concat(t("panelmenu.transition.duration"),", box-shadow ").concat(t("panelmenu.transition.duration"),`;
    outline-color: transparent;
    color: `).concat(t("panelmenu.item.color"),`;
}

.p-panelmenu-header-link {
    display: flex;
    gap: `).concat(t("panelmenu.item.gap"),`;
    padding: `).concat(t("panelmenu.item.padding"),`;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.icon.color"),`;
}

.p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 `).concat(t("panelmenu.submenu.indent"),`;
    outline: 0;
    list-style: none;
}

.p-panelmenu-item-link {
    display: flex;
    gap: `).concat(t("panelmenu.item.gap"),`;
    padding: `).concat(t("panelmenu.item.padding"),`;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: `).concat(t("panelmenu.item.border.radius"),`;
    transition: background `).concat(t("panelmenu.transition.duration"),", color ").concat(t("panelmenu.transition.duration"),", outline-color ").concat(t("panelmenu.transition.duration"),", box-shadow ").concat(t("panelmenu.transition.duration"),`;
    color: `).concat(t("panelmenu.item.color"),`;
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: `).concat(t("panelmenu.item.focus.background"),`;
    color: `).concat(t("panelmenu.item.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"),`;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"),`;
}
`)},yt={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var t=e.instance,a=e.item;return["p-panelmenu-header",{"p-panelmenu-header-active":t.isItemActive(a)&&!!a.items,"p-disabled":t.isItemDisabled(a)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(e){var t=e.instance,a=e.processedItem;return["p-panelmenu-item",{"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},kt=O.extend({name:"panelmenu",theme:vt,classes:yt}),xt={name:"BasePanelMenu",extends:C,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:kt,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},Le={name:"PanelMenuSub",hostName:"PanelMenu",extends:C,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?z(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t,index:a,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return I(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-toggle",{processedItem:t,expanded:!this.isItemActive(t)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:u({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions("itemLink",e,t)),icon:u({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:u({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:u({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{ChevronRightIcon:te,ChevronDownIcon:ke},directives:{ripple:N}},wt=["tabindex"],Lt=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],Pt=["onClick","onMousemove"],Kt=["href","target"];function Ct(n,e,t,a,o,i){var l=S("PanelMenuSub",!0),m=G("ripple");return c(),d("ul",{class:M(n.cx("submenu")),tabindex:t.tabindex},[(c(!0),d(w,null,V(t.items,function(r,s){return c(),d(w,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(c(),d("li",u({key:0,id:i.getItemId(r),class:[n.cx("item",{processedItem:r}),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"treeitem","aria-label":i.getItemLabel(r),"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(s),ref_for:!0},i.getPTOptions("item",r,s),{"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",u({class:n.cx("itemContent"),onClick:function(b){return i.onItemClick(b,r)},onMousemove:function(b){return i.onItemMouseMove(b,r)},ref_for:!0},i.getPTOptions("itemContent",r,s)),[t.templates.item?(c(),g(y(t.templates.item),{key:1,item:r.item,root:!1,active:i.isItemActive(r),hasSubmenu:i.isItemGroup(r),label:i.getItemLabel(r),props:i.getMenuItemProps(r,s)},null,8,["item","active","hasSubmenu","label","props"])):D((c(),d("a",u({key:0,href:i.getItemProp(r,"url"),class:n.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true",ref_for:!0},i.getPTOptions("itemLink",r,s)),[i.isItemGroup(r)?(c(),d(w,{key:0},[t.templates.submenuicon?(c(),g(y(t.templates.submenuicon),u({key:0,class:n.cx("submenuIcon"),active:i.isItemActive(r),ref_for:!0},i.getPTOptions("submenuIcon",r,s)),null,16,["class","active"])):(c(),g(y(i.isItemActive(r)?"ChevronDownIcon":"ChevronRightIcon"),u({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",r,s)),null,16,["class"]))],64)):h("",!0),t.templates.itemicon?(c(),g(y(t.templates.itemicon),{key:1,item:r.item,class:M(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(c(),d("span",u({key:2,class:[n.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions("itemIcon",r,s)),null,16)):h("",!0),p("span",u({class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",r,s)),B(i.getItemLabel(r)),17)],16,Kt)),[[m]])],16,Pt),v(Z,u({name:"p-toggleable-content",ref_for:!0},n.ptm("transition")),{default:P(function(){return[D(p("div",u({class:n.cx("contentContainer"),ref_for:!0},n.ptm("contentContainer")),[i.isItemVisible(r)&&i.isItemGroup(r)?(c(),g(l,u({key:0,id:i.getItemId(r)+"_list",role:"group",panelId:t.panelId,focusedItemId:t.focusedItemId,items:r.items,level:t.level+1,templates:t.templates,activeItemPath:t.activeItemPath,onItemToggle:i.onItemToggle,onItemMousemove:e[0]||(e[0]=function(f){return n.$emit("item-mousemove",f)}),pt:n.pt,unstyled:n.unstyled,ref_for:!0},n.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):h("",!0)],16),[[he,i.isItemActive(r)]])]}),_:2},1040)],16,Lt)):h("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(c(),d("li",u({key:1,style:i.getItemProp(r,"style"),class:[n.cx("separator"),i.getItemProp(r,"class")],role:"separator",ref_for:!0},n.ptm("separator")),null,16)):h("",!0)],64)}),128))],10,wt)}Le.render=Ct;function St(n,e){return Tt(n)||Ot(n,e)||At(n,e)||Mt()}function Mt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function At(n,e){if(n){if(typeof n=="string")return le(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?le(n,e):void 0}}function le(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}function Ot(n,e){var t=n==null?null:typeof Symbol!="undefined"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var a,o,i,l,m=[],r=!0,s=!1;try{if(i=(t=t.call(n)).next,e!==0)for(;!(r=(a=i.call(t)).done)&&(m.push(a.value),m.length!==e);r=!0);}catch(f){s=!0,o=f}finally{try{if(!r&&t.return!=null&&(l=t.return(),Object(l)!==l))return}finally{if(s)throw o}}return m}}function Tt(n){if(Array.isArray(n))return n}var Pe={name:"PanelMenuList",hostName:"PanelMenu",extends:C,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},mounted:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,t){return e&&e.item?z(e.item[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.parentKey})},isItemGroup:function(e){return I(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&$(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var t=I(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:t,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var t=I(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:t,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var t=this;if(I(this.focusedItem)){var a=this.activeItemPath.some(function(o){return o.key===t.focusedItem.key});a?this.activeItemPath=this.activeItemPath.filter(function(o){return o.key!==t.focusedItem.key}):this.focusedItem=I(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var t=this;if(I(this.focusedItem)){var a=this.isItemGroup(this.focusedItem);if(a){var o=this.activeItemPath.some(function(i){return i.key===t.focusedItem.key});o?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(i){return i.parentKey!==t.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(I(this.focusedItem)){var t=x(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&(x(t,'[data-pc-section="itemlink"]')||x(t,"a,button"));a?a.click():t&&t.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var t=e.processedItem,a=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:t.item,expanded:a}):(this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==t.parentKey}),a&&this.activeItemPath.push(t)),this.focusedItem=t,k(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,t){var a=e.currentTarget.closest('[data-pc-section="panel"]');return a&&a.contains(t)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(t){return e.isValidItem(t)})},findLastItem:function(){var e=this;return ce(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItem:function(e){var t=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),o=a<this.visibleItems.length-1?this.visibleItems.slice(a+1).find(function(i){return t.isValidItem(i)}):void 0;return o||e},findPrevItem:function(e){var t=this,a=this.visibleItems.findIndex(function(i){return i.key===e.key}),o=a>0?ce(this.visibleItems.slice(0,a),function(i){return t.isValidItem(i)}):void 0;return o||e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var o=null,i=!1;if(I(this.focusedItem)){var l=this.visibleItems.findIndex(function(m){return m.key===a.focusedItem.key});o=this.visibleItems.slice(l).find(function(m){return a.isItemMatched(m)}),o=E(o)?this.visibleItems.slice(0,l).find(function(m){return a.isItemMatched(m)}):o}else o=this.visibleItems.find(function(m){return a.isItemMatched(m)});return I(o)&&(i=!0),E(o)&&E(this.focusedItem)&&(o=this.findFirstItem()),I(o)&&this.changeFocusedItem({originalEvent:e,processedItem:o,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItem:function(e){var t=e.originalEvent,a=e.processedItem,o=e.focusOnNext,i=e.selfCheck,l=e.allowHeaderFocus,m=l===void 0?!0:l;I(this.focusedItem)&&this.focusedItem.key!==a.key?(this.focusedItem=a,this.scrollInView()):m&&this.$emit("header-focus",{originalEvent:t,focusOnNext:o,selfCheck:i})},scrollInView:function(){var e=x(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var t=this;this.activeItemPath=Object.entries(e||{}).reduce(function(a,o){var i=St(o,2),l=i[0],m=i[1];if(m){var r=t.findProcessedItemByItemKey(l);r&&a.push(r)}return a},[])},findProcessedItemByItemKey:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t=t||a===0&&this.processedItems,!t)return null;for(var o=0;o<t.length;o++){var i=t[o];if(this.getItemProp(i,"key")===e)return i;var l=this.findProcessedItemByItemKey(e,i.items,a+1);if(l)return l}},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(m,r){var s=(i!==""?i+"_":"")+r,f={item:m,index:r,level:a,key:s,parent:o,parentKey:i};f.items=t.createProcessedItems(m.items,a+1,f,s),l.push(f)}),l},flatItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(o){t.isVisibleItem(o)&&(a.push(o),t.flatItems(o.items,a))}),a}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return I(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:Le}};function Et(n,e,t,a,o,i){var l=S("PanelMenuSub");return c(),g(l,u({id:t.panelId+"_list",class:n.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":o.focused?i.focusedItemId:void 0,panelId:t.panelId,focusedItemId:o.focused?i.focusedItemId:void 0,items:i.processedItems,templates:t.templates,activeItemPath:o.activeItemPath,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemToggle:i.onItemToggle,onItemMousemove:i.onItemMouseMove,pt:n.pt,unstyled:n.unstyled},n.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}Pe.render=Et;function W(n){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(n)}function me(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function Ft(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?me(Object(t),!0).forEach(function(a){Vt(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):me(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function Vt(n,e,t){return(e=Dt(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Dt(n){var e=Bt(n,"string");return W(e)=="symbol"?e:e+""}function Bt(n,e){if(W(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(W(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Ke={name:"PanelMenu",extends:xt,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{id:this.$attrs.id,activeItem:null,activeItems:[]}},watch:{"$attrs.id":function(e){this.id=e||A()}},mounted:function(){this.id=this.id||A()},methods:{getItemProp:function(e,t){return e?z(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{index:a,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(t){return R(e,t)}):R(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return R(e,this.activeItem)},getPanelId:function(e){return"".concat(this.id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,t){if(this.isItemDisabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),this.changeActiveItem(e,t),k(e.currentTarget)},onHeaderKeyDown:function(e,t){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,t);break}},onHeaderArrowDownKey:function(e){var t=H(e.currentTarget,"data-p-active")===!0?x(e.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;t?k(t):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var t=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),a=H(t,"data-p-active")===!0?x(t.nextElementSibling,'[data-pc-section="rootlist"]'):null;a?k(a):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,t){var a=x(e.currentTarget,'[data-pc-section="headerlink"]');a?a.click():this.onHeaderClick(e,t),e.preventDefault()},findNextHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.nextElementSibling,o=x(a,'[data-pc-section="header"]');return o?H(o,"data-p-disabled")?this.findNextHeader(o.parentElement):o:null},findPrevHeader:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.previousElementSibling,o=x(a,'[data-pc-section="header"]');return o?H(o,"data-p-disabled")?this.findPrevHeader(o.parentElement):o:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var t=e.originalEvent,a=e.focusOnNext,o=e.selfCheck,i=t.currentTarget.closest('[data-pc-section="panel"]'),l=o?x(i,'[data-pc-section="header"]'):a?this.findNextHeader(i):this.findPrevHeader(i);l?this.changeFocusedHeader(t,l):a?this.onHeaderHomeKey(t):this.onHeaderEndKey(t)},changeActiveItem:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(t)){var o=this.isItemActive(t),i=o?"panel-close":"panel-open";this.activeItem=a?t:this.activeItem&&R(t,this.activeItem)?null:t,this.multiple&&(this.activeItems.some(function(l){return R(t,l)})?this.activeItems=this.activeItems.filter(function(l){return!R(t,l)}):this.activeItems.push(t)),this.changeExpandedKeys({item:t,expanded:!o}),this.$emit(i,{originalEvent:e,item:t})}},changeExpandedKeys:function(e){var t=e.item,a=e.expanded,o=a===void 0?!1:a;if(this.expandedKeys){var i=Ft({},this.expandedKeys);o?i[t.key]=!0:delete i[t.key],this.$emit("update:expandedKeys",i)}},changeFocusedHeader:function(e,t){t&&k(t)},getMenuItemProps:function(e,t){return{icon:u({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,t)),label:u({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,t))}}},components:{PanelMenuList:Pe,ChevronRightIcon:te,ChevronDownIcon:ke}},zt=["id"],_t=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],Ht=["href"],Rt=["id","aria-labelledby"];function Nt(n,e,t,a,o,i){var l=S("PanelMenuList");return c(),d("div",u({id:o.id,class:n.cx("root")},n.ptmi("root")),[(c(!0),d(w,null,V(n.model,function(m,r){return c(),d(w,{key:i.getPanelKey(r)},[i.isItemVisible(m)?(c(),d("div",u({key:0,style:i.getItemProp(m,"style"),class:[n.cx("panel"),i.getItemProp(m,"class")],ref_for:!0},n.ptm("panel")),[p("div",u({id:i.getHeaderId(r),class:[n.cx("header",{item:m}),i.getItemProp(m,"headerClass")],tabindex:i.isItemDisabled(m)?-1:n.tabindex,role:"button","aria-label":i.getItemLabel(m),"aria-expanded":i.isItemActive(m),"aria-controls":i.getContentId(r),"aria-disabled":i.isItemDisabled(m),onClick:function(f){return i.onHeaderClick(f,m)},onKeydown:function(f){return i.onHeaderKeyDown(f,m)},ref_for:!0},i.getPTOptions("header",m,r),{"data-p-active":i.isItemActive(m),"data-p-disabled":i.isItemDisabled(m)}),[p("div",u({class:n.cx("headerContent"),ref_for:!0},i.getPTOptions("headerContent",m,r)),[n.$slots.item?(c(),g(y(n.$slots.item),{key:1,item:m,root:!0,active:i.isItemActive(m),hasSubmenu:i.getItemProp(m,"items"),label:i.getItemLabel(m),props:i.getMenuItemProps(m,r)},null,8,["item","active","hasSubmenu","label","props"])):(c(),d("a",u({key:0,href:i.getItemProp(m,"url"),class:n.cx("headerLink"),tabindex:-1,ref_for:!0},i.getPTOptions("headerLink",m,r)),[i.getItemProp(m,"items")?L(n.$slots,"submenuicon",{key:0,active:i.isItemActive(m)},function(){return[(c(),g(y(i.isItemActive(m)?"ChevronDownIcon":"ChevronRightIcon"),u({class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuIcon",m,r)),null,16,["class"]))]}):h("",!0),n.$slots.headericon?(c(),g(y(n.$slots.headericon),{key:1,item:m,class:M([n.cx("headerIcon"),i.getItemProp(m,"icon")])},null,8,["item","class"])):i.getItemProp(m,"icon")?(c(),d("span",u({key:2,class:[n.cx("headerIcon"),i.getItemProp(m,"icon")],ref_for:!0},i.getPTOptions("headerIcon",m,r)),null,16)):h("",!0),p("span",u({class:n.cx("headerLabel"),ref_for:!0},i.getPTOptions("headerLabel",m,r)),B(i.getItemLabel(m)),17)],16,Ht))],16)],16,_t),v(Z,u({name:"p-toggleable-content",ref_for:!0},n.ptm("transition")),{default:P(function(){return[D(p("div",u({id:i.getContentId(r),class:n.cx("contentContainer"),role:"region","aria-labelledby":i.getHeaderId(r),ref_for:!0},n.ptm("contentContainer")),[i.getItemProp(m,"items")?(c(),d("div",u({key:0,class:n.cx("content"),ref_for:!0},n.ptm("content")),[v(l,{panelId:i.getPanelId(r),items:i.getItemProp(m,"items"),templates:n.$slots,expandedKeys:n.expandedKeys,onItemToggle:i.changeExpandedKeys,onHeaderFocus:i.updateFocusedHeader,pt:n.pt,unstyled:n.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):h("",!0)],16,Rt),[[he,i.isItemActive(m)]])]}),_:2},1040)],16)):h("",!0)],64)}),128))],16,zt)}Ke.render=Nt;var Gt=function(e){var t=e.dt;return`
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: `.concat(t("megamenu.background"),`;
    border: 1px solid `).concat(t("megamenu.border.color"),`;
    border-radius: `).concat(t("megamenu.border.radius"),`;
    color: `).concat(t("megamenu.color"),`;
    gap: `).concat(t("megamenu.gap"),`;
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: `).concat(t("megamenu.gap"),`;
}

.p-megamenu-root-list > .p-megamenu-item > .p-menumegamenubar-item-content {
    border-radius: `).concat(t("megamenu.base.item.border.radius"),`;
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: `).concat(t("megamenu.base.item.padding"),`;
}

.p-megamenu-item-content {
    transition: background `).concat(t("megamenu.transition.duration"),", color ").concat(t("megamenu.transition.duration"),`;
    border-radius: `).concat(t("megamenu.item.border.radius"),`;
    color: `).concat(t("megamenu.item.color"),`;
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("megamenu.item.padding"),`;
    gap: `).concat(t("megamenu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.color"),`;
}

.p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.color"),`;
    font-size: `).concat(t("megamenu.submenu.icon.size"),`;
    width: `).concat(t("megamenu.submenu.icon.size"),`;
    height: `).concat(t("megamenu.submenu.icon.size"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: `).concat(t("megamenu.item.focus.color"),`;
    background: `).concat(t("megamenu.item.focus.background"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.focus.color"),`;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.focus.color"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: `).concat(t("megamenu.item.focus.color"),`;
    background: `).concat(t("megamenu.item.focus.background"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.focus.color"),`;
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.focus.color"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: `).concat(t("megamenu.item.active.color"),`;
    background: `).concat(t("megamenu.item.active.background"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: `).concat(t("megamenu.item.icon.active.color"),`;
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: `).concat(t("megamenu.submenu.icon.active.color"),`;
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: `).concat(t("megamenu.overlay.padding"),`;
    background: `).concat(t("megamenu.overlay.background"),`;
    color: `).concat(t("megamenu.overlay.color"),`;
    border: 1px solid `).concat(t("megamenu.overlay.border.color"),`;
    border-radius: `).concat(t("megamenu.overlay.border.radius"),`;
    box-shadow: `).concat(t("megamenu.overlay.shadow"),`;
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: `).concat(t("megamenu.submenu.padding"),`;
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("megamenu.submenu.gap"),`
}

.p-megamenu-submenu-label {
    padding: `).concat(t("megamenu.submenu.label.padding"),`;
    color: `).concat(t("megamenu.submenu.label.color"),`;
    font-weight: `).concat(t("megamenu.submenu.label.font.weight"),`;
    background: `).concat(t("megamenu.submenu.label.background"),`;
}

.p-megamenu-separator {
    border-top: 1px solid `).concat(t("megamenu.separator.border.color"),`;
}

.p-megamenu-horizontal {
    align-items: center;
    padding: `).concat(t("megamenu.horizontal.orientation.padding"),`;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("megamenu.horizontal.orientation.gap"),`;
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: `).concat(t("megamenu.vertical.orientation.padding"),`;
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: `).concat(t("megamenu.vertical.orientation.gap"),`;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: `).concat(t("megamenu.overlay.gap"),`;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("megamenu.mobile.button.size"),`;
    height: `).concat(t("megamenu.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("megamenu.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("megamenu.mobile.button.border.radius"),`;
    transition: background `).concat(t("megamenu.transition.duration"),", color ").concat(t("megamenu.transition.duration"),", outline-color ").concat(t("megamenu.transition.duration"),", ox-shadow ").concat(t("megamenu.transition.duration"),`;
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: `).concat(t("megamenu.mobile.button.hover.color"),`;
    background: `).concat(t("megamenu.mobile.button.hover.background"),`;
}

.p-megamenu-button:focus-visible {
    box-shadow: `).concat(t("megamenu.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("megamenu.mobile.button.focus.ring.width")," ").concat(t("megamenu.mobile.button.focus.ring.style")," ").concat(t("megamenu.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("megamenu.mobile.button.focus.ring.offset"),`;
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: `).concat(t("megamenu.submenu.padding"),`;
    gap: `).concat(t("megamenu.submenu.gap"),`;
    background: `).concat(t("megamenu.overlay.background"),`;
    border: 1px solid `).concat(t("megamenu.overlay.border.color"),`;
    box-shadow: `).concat(t("menubar.overlay.shadow"),`;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}
`)},Ut={submenu:function(e){var t=e.instance,a=e.processedItem;return{display:t.isItemActive(a)?"block":"none"}}},jt={root:function(e){var t=e.instance;return["p-megamenu p-component",{"p-megamenu-mobile":t.queryMatches,"p-megamenu-mobile-active":t.mobileActive,"p-megamenu-horizontal":t.horizontal,"p-megamenu-vertical":t.vertical}]},start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:function(e){var t=e.instance,a=e.processedItem;return["p-megamenu-submenu-label",{"p-disabled":t.isItemDisabled(a)}]},item:function(e){var t=e.instance,a=e.processedItem;return["p-megamenu-item",{"p-megamenu-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:function(e){var t=e.instance,a=e.processedItem,o=t.isItemGroup(a)?a.items.length:0,i;if(t.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(o){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},Wt=O.extend({name:"megamenu",theme:Gt,classes:jt,inlineStyles:Ut}),qt={name:"BaseMegaMenu",extends:C,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Wt,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},Ce={name:"MegaMenuSub",hostName:"MegaMenu",extends:C,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?z(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,t,a){return this.ptm(a,{context:{item:e,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return I(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return I(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:u({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,t,"itemLink")),icon:u({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:u({class:this.cx("label")},this.getPTOptions(e,t,"label")),submenuicon:u({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},components:{AngleRightIcon:re,AngleDownIcon:we},directives:{ripple:N}},Zt=["tabindex"],Qt=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],Xt=["onClick","onMouseenter"],Yt=["href","target"],Jt=["id"];function $t(n,e,t,a,o,i){var l=S("MegaMenuSub",!0),m=G("ripple");return c(),d("ul",u({class:t.level===0?n.cx("rootList"):n.cx("submenu"),tabindex:t.tabindex},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[t.submenu?(c(),d("li",u({key:0,class:[n.cx("submenuLabel",{submenu:t.submenu}),i.getItemProp(t.submenu,"class")],style:i.getItemProp(t.submenu,"style"),role:"presentation"},n.ptm("submenuLabel")),B(i.getItemLabel(t.submenu)),17)):h("",!0),(c(!0),d(w,null,V(t.items,function(r,s){return c(),d(w,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(c(),d("li",u({key:0,id:i.getItemId(r),style:i.getItemProp(r,"style"),class:[n.cx("item",{processedItem:r}),i.getItemProp(r,"class")],role:"menuitem","aria-label":i.getItemLabel(r),"aria-disabled":i.isItemDisabled(r)||void 0,"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-haspopup":i.isItemGroup(r)&&!i.getItemProp(r,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(s),ref_for:!0},i.getPTOptions(r,s,"item"),{"data-p-active":i.isItemActive(r),"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",u({class:n.cx("itemContent"),onClick:function(b){return i.onItemClick(b,r)},onMouseenter:function(b){return i.onItemMouseEnter(b,r)},ref_for:!0},i.getPTOptions(r,s,"itemContent")),[t.templates.item?(c(),g(y(t.templates.item),{key:1,item:r.item,hasSubmenu:i.isItemGroup(r),label:i.getItemLabel(r),props:i.getMenuItemProps(r,s)},null,8,["item","hasSubmenu","label","props"])):D((c(),d("a",u({key:0,href:i.getItemProp(r,"url"),class:n.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true",ref_for:!0},i.getPTOptions(r,s,"itemLink")),[t.templates.itemicon?(c(),g(y(t.templates.itemicon),{key:0,item:r.item,class:M(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(c(),d("span",u({key:1,class:[n.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions(r,s,"itemIcon")),null,16)):h("",!0),p("span",u({class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions(r,s,"itemLabel")),B(i.getItemLabel(r)),17),i.isItemGroup(r)?(c(),d(w,{key:2},[t.templates.submenuicon?(c(),g(y(t.templates.submenuicon),u({key:0,active:i.isItemActive(r),class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(r,s,"submenuIcon")),null,16,["active","class"])):(c(),g(y(t.horizontal||t.mobileActive?"AngleDownIcon":"AngleRightIcon"),u({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(r,s,"submenuIcon")),null,16,["class"]))],64)):h("",!0)],16,Yt)),[[m]])],16,Xt),i.isItemVisible(r)&&i.isItemGroup(r)?(c(),d("div",u({key:0,class:n.cx("overlay"),ref_for:!0},n.ptm("overlay")),[p("div",u({class:n.cx("grid"),ref_for:!0},n.ptm("grid")),[(c(!0),d(w,null,V(r.items,function(f){return c(),d("div",u({key:i.getItemKey(f),class:n.cx("column",{processedItem:r}),ref_for:!0},n.ptm("column")),[(c(!0),d(w,null,V(f,function(b){return c(),g(l,{key:i.getSubListKey(b),id:i.getSubListId(b),style:be(n.sx("submenu",!0,{processedItem:r})),role:"menu",menuId:t.menuId,focusedItemId:t.focusedItemId,submenu:b,items:b.items,templates:t.templates,level:t.level+1,mobileActive:t.mobileActive,pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(K){return n.$emit("item-click",K)}),onItemMouseenter:e[1]||(e[1]=function(K){return n.$emit("item-mouseenter",K)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):h("",!0)],16,Qt)):h("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(c(),d("li",u({key:1,id:i.getItemId(r),class:[n.cx("separator"),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,Jt)):h("",!0)],64)}),128))],16,Zt)}Ce.render=$t;var Se={name:"MegaMenu",extends:qt,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||A()},activeItem:function(e){I(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||A(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,t){return e?z(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return I(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&I(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,F.clear(this.menubar),this.hide()):(this.mobileActive=!0,F.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},k(this.menubar)},hide:function(e,t){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){k(a.$refs.menubutton)},0)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},t&&k(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var t=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(t);this.focusedItemInfo={index:t,key:a.key,parentKey:a.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&$(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,a=e.isFocus;if(!E(t)){var o=t.index,i=t.key,l=t.parentKey,m=t.items,r=I(m);r&&(this.activeItem=t),this.focusedItemInfo={index:o,key:i,parentKey:l},r&&(this.dirty=!0),a&&k(this.menubar)}},onItemClick:function(e){var t=e.originalEvent,a=e.processedItem,o=this.isProccessedItemGroup(a),i=E(a.parent),l=this.isSelected(a);if(l){var m=a.index,r=a.key,s=a.parentKey;this.activeItem=null,this.focusedItemInfo={index:m,key:r,parentKey:s},this.dirty=!i,k(this.menubar)}else o?this.onItemChange(e):this.hide(t)},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal)if(I(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,key:t.key,parentKey:t.parentKey},this.searchValue="")}var o=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,o),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);!a&&I(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,o),e.preventDefault()}},onArrowLeftKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);if(a){if(this.horizontal){var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,o)}}else{this.vertical&&I(this.activeItem)&&t.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=t.columnIndex-1,l=this.visibleItems.findIndex(function(m){return m.columnIndex===i});l!==-1&&this.changeFocusedItemInfo(e,l)}e.preventDefault()},onArrowRightKey:function(e){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);if(a){if(this.vertical)if(I(this.activeItem)&&this.activeItem.key===t.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var o=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(o);i&&(this.onItemChange({originalEvent:e,processedItem:o}),this.focusedItemInfo={index:-1,key:o.key,parentKey:o.parentKey},this.searchValue="")}var l=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,l)}else{var m=t.columnIndex+1,r=this.visibleItems.findIndex(function(s){return s.columnIndex===m});r!==-1&&this.changeFocusedItemInfo(e,r)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=x(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&x(t,'a[data-pc-section="itemlink"]');a?a.click():t&&t.click();var o=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(o);!i&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){I(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),o=!(e.target&&(e.target===t.target||e.target.contains(t.target)));a&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){ee()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return I(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return j(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return t.isValidItem(o)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?j(this.visibleItems.slice(0,e),function(o){return t.isValidItem(o)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return I(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var o=-1,i=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(l){return a.isItemMatched(l)}),o!==-1&&(i=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemInfo(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemInfo:function(e,t){var a=this.findVisibleItem(t);this.focusedItemInfo.index=t,this.focusedItemInfo.key=I(a)?a.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,a=x(this.menubar,'li[id="'.concat(t,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=arguments.length>4?arguments[4]:void 0,m=[];return e&&e.forEach(function(r,s){var f=(i!==""?i+"_":"")+(l!==void 0?l+"_":"")+s,b={item:r,index:s,level:a,key:f,parent:o,parentKey:i,columnIndex:l!==void 0?l:o.columnIndex!==void 0?o.columnIndex:s};b.items=a===0&&r.items&&r.items.length>0?r.items.map(function(K,ne){return t.createProcessedItems(K,a+1,b,f,ne)}):t.createProcessedItems(r.items,a+1,b,f),m.push(b)}),m},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=I(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(t,a){return a.forEach(function(o){o.items.forEach(function(i){t.push(i)})}),t},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return I(this.focusedItemInfo.key)?"".concat(this.id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:Ce,BarsIcon:xe}},en=["id"],tn=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function nn(n,e,t,a,o,i){var l=S("BarsIcon"),m=S("MegaMenuSub");return c(),d("div",u({ref:i.containerRef,id:o.id,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(c(),d("div",u({key:0,class:n.cx("start")},n.ptm("start")),[L(n.$slots,"start")],16)):h("",!0),L(n.$slots,n.$slots.button?"button":"menubutton",{id:o.id,class:M(n.cx("button")),toggleCallback:function(s){return i.menuButtonClick(s)}},function(){var r;return[n.model&&n.model.length>0?(c(),d("a",u({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":o.mobileActive,"aria-controls":o.id,"aria-label":(r=n.$primevue.config.locale.aria)===null||r===void 0?void 0:r.navigation,onClick:e[0]||(e[0]=function(s){return i.menuButtonClick(s)}),onKeydown:e[1]||(e[1]=function(s){return i.menuButtonKeydown(s)})},n.ptm("button")),[L(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[v(l,Ie(ge(n.ptm("buttonicon"))),null,16)]})],16,tn)):h("",!0)]}),v(m,{ref:i.menubarRef,id:o.id+"_list",tabindex:n.disabled?-1:n.tabindex,role:"menubar","aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,"aria-disabled":n.disabled||void 0,"aria-orientation":n.orientation,"aria-activedescendant":o.focused?i.focusedItemId:void 0,menuId:o.id,focusedItemId:o.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:n.$slots,activeItem:o.activeItem,mobileActive:o.mobileActive,level:0,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),n.$slots.end?(c(),d("div",u({key:1,class:n.cx("end")},n.ptm("end")),[L(n.$slots,"end")],16)):h("",!0)],16,en)}Se.render=nn;var an=function(e){var t=e.dt;return`
.p-contextmenu {
    background: `.concat(t("contextmenu.background"),`;
    color: `).concat(t("contextmenu.color"),`;
    border: 1px solid `).concat(t("contextmenu.border.color"),`;
    border-radius: `).concat(t("contextmenu.border.radius"),`;
    box-shadow: `).concat(t("contextmenu.shadow"),`;
    min-width: 12.5rem;
}

.p-contextmenu-root-list,
.p-contextmenu-submenu {
    margin: 0;
    padding: `).concat(t("contextmenu.list.padding"),`;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("contextmenu.list.gap"),`;
}

.p-contextmenu-submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    z-index: 1;
    background: `).concat(t("contextmenu.background"),`;
    color: `).concat(t("contextmenu.color"),`;
    border: 1px solid `).concat(t("contextmenu.border.color"),`;
    border-radius: `).concat(t("contextmenu.border.radius"),`;
    box-shadow: `).concat(t("contextmenu.shadow"),`;
}

.p-contextmenu-item {
    position: relative;
}

.p-contextmenu-item-content {
    transition: background `).concat(t("contextmenu.transition.duration"),", color ").concat(t("contextmenu.transition.duration"),`;
    border-radius: `).concat(t("contextmenu.item.border.radius"),`;
    color: `).concat(t("contextmenu.item.color"),`;
}

.p-contextmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("contextmenu.item.padding"),`;
    gap: `).concat(t("contextmenu.item.gap"),`;
    user-select: none;
}

.p-contextmenu-item-label {
    line-height: 1;
}

.p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.color"),`;
}

.p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("contextmenu.submenu.icon.size"),`;
    width: `).concat(t("contextmenu.submenu.icon.size"),`;
    height: `).concat(t("contextmenu.submenu.icon.size"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.focus.color"),`;
    background: `).concat(t("contextmenu.item.focus.background"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
    color: `).concat(t("contextmenu.item.focus.color"),`;
    background: `).concat(t("contextmenu.item.focus.background"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.focus.color"),`;
}

.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.focus.color"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content {
    color: `).concat(t("contextmenu.item.active.color"),`;
    background: `).concat(t("contextmenu.item.active.background"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
    color: `).concat(t("contextmenu.item.icon.active.color"),`;
}

.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
    color: `).concat(t("contextmenu.submenu.icon.active.color"),`;
}

.p-contextmenu-separator {
    border-top: 1px solid  `).concat(t("contextmenu.separator.border.color"),`;
}

.p-contextmenu-enter-from,
.p-contextmenu-leave-active {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
`)},on={root:"p-contextmenu p-component",rootList:"p-contextmenu-root-list",item:function(e){var t=e.instance,a=e.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},rn=O.extend({name:"contextmenu",theme:an,classes:on}),sn={name:"BaseContextMenu",extends:C,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:rn,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},Me={name:"ContextMenuSub",hostName:"ContextMenu",extends:C,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?z(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,a){return this.ptm(e,{context:{item:t,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:a}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return I(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},onEnter:function(){rt(this.$refs.container,this.level)},getMenuItemProps:function(e,t){return{action:u({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions("itemLink",e,t)),icon:u({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:u({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:u({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{AngleRightIcon:re},directives:{ripple:N}},un=["tabindex"],cn=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],ln=["onClick","onMouseenter","onMousemove"],mn=["href","target"],dn=["id"],fn=["id"];function pn(n,e,t,a,o,i){var l=S("AngleRightIcon"),m=S("ContextMenuSub",!0),r=G("ripple");return c(),g(Z,u({name:"p-contextmenusub",onEnter:i.onEnter},n.ptm("menu.transition")),{default:P(function(){return[t.root||t.visible?(c(),d("ul",u({key:0,ref:"container",tabindex:t.tabindex},n.ptm("rootList")),[(c(!0),d(w,null,V(t.items,function(s,f){return c(),d(w,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(c(),d("li",u({key:0,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("item",{processedItem:s}),i.getItemProp(s,"class")],role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(f),ref_for:!0},i.getPTOptions("item",s,f),{"data-p-active":i.isItemActive(s),"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[p("div",u({class:n.cx("itemContent"),onClick:function(K){return i.onItemClick(K,s)},onMouseenter:function(K){return i.onItemMouseEnter(K,s)},onMousemove:function(K){return i.onItemMouseMove(K,s)},ref_for:!0},i.getPTOptions("itemContent",s,f)),[t.templates.item?(c(),g(y(t.templates.item),{key:1,item:s.item,hasSubmenu:i.getItemProp(s,"items"),label:i.getItemLabel(s),props:i.getMenuItemProps(s,f)},null,8,["item","hasSubmenu","label","props"])):D((c(),d("a",u({key:0,href:i.getItemProp(s,"url"),class:n.cx("itemLink"),target:i.getItemProp(s,"target"),tabindex:"-1","aria-hidden":"true",ref_for:!0},i.getPTOptions("itemLink",s,f)),[t.templates.itemicon?(c(),g(y(t.templates.itemicon),{key:0,item:s.item,class:M(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(s,"icon")?(c(),d("span",u({key:1,class:[n.cx("itemIcon"),i.getItemProp(s,"icon")],ref_for:!0},i.getPTOptions("itemIcon",s,f)),null,16)):h("",!0),p("span",u({id:i.getItemLabelId(s),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",s,f)),B(i.getItemLabel(s)),17,dn),i.getItemProp(s,"items")?(c(),d(w,{key:2},[t.templates.submenuicon?(c(),g(y(t.templates.submenuicon),{key:0,active:i.isItemActive(s),class:M(n.cx("submenuIcon"))},null,8,["active","class"])):(c(),g(l,u({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions("submenuicon",s,f)),null,16,["class"]))],64)):h("",!0)],16,mn)),[[r]])],16,ln),i.isItemVisible(s)&&i.isItemGroup(s)?(c(),g(m,u({key:0,id:i.getItemId(s)+"_list",role:"menu",class:n.cx("submenu"),menuId:t.menuId,focusedItemId:t.focusedItemId,items:s.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:i.isItemActive(s)&&i.isItemGroup(s),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(b){return n.$emit("item-click",b)}),onItemMouseenter:e[1]||(e[1]=function(b){return n.$emit("item-mouseenter",b)}),onItemMousemove:e[2]||(e[2]=function(b){return n.$emit("item-mousemove",b)}),"aria-labelledby":i.getItemLabelId(s),ref_for:!0},n.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):h("",!0)],16,cn)):h("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(c(),d("li",u({key:1,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[n.cx("separator"),i.getItemProp(s,"class")],role:"separator",ref_for:!0},n.ptm("separator")),null,16,fn)):h("",!0)],64)}),128))],16,un)):h("",!0)]}),_:1},16,["onEnter"])}Me.render=pn;var Ae={name:"ContextMenu",extends:sn,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1}},watch:{"$attrs.id":function(e){this.id=e||A()},activeItemPath:function(e){I(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.id=this.id||A(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.container&&this.autoZIndex&&F.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?z(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return I(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&I(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},k(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&$(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,a=e.isFocus;if(!E(t)){var o=t.index,i=t.key,l=t.level,m=t.parentKey,r=t.items,s=I(r),f=this.activeItemPath.filter(function(b){return b.parentKey!==m&&b.parentKey!==i});s&&(f.push(t),this.submenuVisible=!0),this.focusedItemInfo={index:o,level:l,parentKey:m},this.activeItemPath=f,a&&k(this.list)}},onItemClick:function(e){var t=e.processedItem,a=this.isProccessedItemGroup(t),o=this.isSelected(t);if(o){var i=t.index,l=t.key,m=t.level,r=t.parentKey;this.activeItemPath=this.activeItemPath.filter(function(s){return l!==s.key&&l.startsWith(s.key)}),this.focusedItemInfo={index:i,level:m,parentKey:r},k(this.list)}else a?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var o=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,o),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,a=this.visibleItems[this.focusedItemInfo.index],o=this.activeItemPath.find(function(l){return l.key===a.parentKey}),i=E(a.parent);i||(this.focusedItemInfo={index:-1,parentKey:o?o.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(l){return l.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);a&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=x(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),a=t&&x(t,'[data-pc-section="itemlink"]');a?a.click():t&&t.click();var o=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(o);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){ve(e,{position:"absolute"}),this.position(),this.autoZIndex&&F.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),k(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&F.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,a=this.container.offsetParent?this.container.offsetWidth:it(this.container),o=this.container.offsetParent?this.container.offsetHeight:at(this.container),i=ot();e+a-document.body.scrollLeft>i.width&&(e-=a),t+o-document.body.scrollTop>i.height&&(t-=o),e<document.body.scrollLeft&&(e=document.body.scrollLeft),t<document.body.scrollTop&&(t=document.body.scrollTop),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),o=e.visible?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;a&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!ee()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return j(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return t.isValidItem(o)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?j(this.visibleItems.slice(0,e),function(o){return t.isValidItem(o)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var o=-1,i=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(l){return a.isItemMatched(l)}),o!==-1&&(i=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemIdx,a=x(this.list,'li[id="'.concat(t,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(m,r){var s=(i!==""?i+"_":"")+r,f={item:m,index:r,level:a,key:s,parent:o,parentKey:i};f.items=t.createProcessedItems(m.items,a+1,f,s),l.push(f)}),l},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(I(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:Me,Portal:ye}};function hn(n,e,t,a,o,i){var l=S("ContextMenuSub"),m=S("Portal");return c(),g(m,{appendTo:n.appendTo},{default:P(function(){return[v(Z,u({name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:P(function(){return[o.visible?(c(),d("div",u({key:0,ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[v(l,{ref:i.listRef,id:o.id+"_list",class:M(n.cx("rootList")),role:"menubar",root:!0,tabindex:n.tabindex,"aria-orientation":"vertical","aria-activedescendant":o.focused?i.focusedItemIdx:void 0,menuId:o.id,focusedItemId:o.focused?i.focusedItemIdx:void 0,items:i.processedItems,templates:n.$slots,activeItemPath:o.activeItemPath,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,level:0,visible:o.submenuVisible,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):h("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}Ae.render=hn;var bn=function(e){var t=e.dt;return`
.p-menu {
    background: `.concat(t("menu.background"),`;
    color: `).concat(t("menu.color"),`;
    border: 1px solid `).concat(t("menu.border.color"),`;
    border-radius: `).concat(t("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(t("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(t("menu.transition.duration"),", color ").concat(t("menu.transition.duration"),`;
    border-radius: `).concat(t("menu.item.border.radius"),`;
    color: `).concat(t("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menu.item.padding"),`;
    gap: `).concat(t("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(t("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(t("menu.item.focus.color"),`;
    background: `).concat(t("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(t("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(t("menu.item.focus.color"),`;
    background: `).concat(t("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(t("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(t("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(t("menu.submenu.label.background"),`;
    padding: `).concat(t("menu.submenu.label.padding"),`;
    color: `).concat(t("menu.submenu.label.color"),`;
    font-weight: `).concat(t("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-top: 1px solid `).concat(t("menu.separator.border.color"),`;
}
`)},In={root:function(e){var t=e.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var t=e.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},gn=O.extend({name:"menu",theme:bn,classes:In}),vn={name:"BaseMenu",extends:C,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:gn,provide:function(){return{$pcMenu:this,$parentInstance:this}}},Oe={name:"Menuitem",hostName:"Menu",extends:C,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?z(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:u({class:this.cx("itemLink"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("itemLink")),icon:u({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:u({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:N}},yn=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],kn=["href","target"];function xn(n,e,t,a,o,i){var l=G("ripple");return i.visible()?(c(),d("li",u({key:0,id:t.id,class:[n.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[p("div",u({class:n.cx("itemContent"),onClick:e[0]||(e[0]=function(m){return i.onItemClick(m)}),onMousemove:e[1]||(e[1]=function(m){return i.onItemMouseMove(m)})},i.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(c(),g(y(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps(t.item)},null,8,["item","label","props"])):h("",!0):D((c(),d("a",u({key:0,href:t.item.url,class:n.cx("itemLink"),target:t.item.target,tabindex:"-1","aria-hidden":"true"},i.getPTOptions("itemLink")),[t.templates.itemicon?(c(),g(y(t.templates.itemicon),{key:0,item:t.item,class:M(n.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(c(),d("span",u({key:1,class:[n.cx("itemIcon"),t.item.icon]},i.getPTOptions("itemIcon")),null,16)):h("",!0),p("span",u({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),B(i.label()),17)],16,kn)),[[l]])],16)],16,yn)):h("",!0)}Oe.render=xn;function de(n){return Kn(n)||Pn(n)||Ln(n)||wn()}function wn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ln(n,e){if(n){if(typeof n=="string")return oe(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?oe(n,e):void 0}}function Pn(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Kn(n){if(Array.isArray(n))return oe(n)}function oe(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=Array(e);t<e;t++)a[t]=n[t];return a}var Te={name:"Menu",extends:vn,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||A()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||A(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&F.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(k(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)k(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(U(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var t=x(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),a=t&&x(t,'a[data-pc-section="itemlink"]');this.popup&&k(this.target),a?a.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=U(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=de(t).findIndex(function(o){return o.id===e});return a>-1?a+1:0},findPrevOptionIndex:function(e){var t=U(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=de(t).findIndex(function(o){return o.id===e});return a>-1?a-1:0},changeFocusedOptionIndex:function(e){var t=U(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=e>=t.length?t.length-1:e<0?0:e;a>-1&&(this.focusedOptionIndex=t[a].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){ve(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&F.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&k(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&F.clear(e)},alignOverlay:function(){st(this.container,this.target);var e=J(this.target);e>J(this.container)&&(this.container.style.minWidth=J(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),o=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&a&&o?e.hide():!e.popup&&a&&o&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new ut(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!ee()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){ft.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:Oe,Portal:ye}},Cn=["id"],Sn=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],Mn=["id"];function An(n,e,t,a,o,i){var l=S("PVMenuitem"),m=S("Portal");return c(),g(m,{appendTo:n.appendTo,disabled:!n.popup},{default:P(function(){return[v(Z,u({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:P(function(){return[!n.popup||o.overlayVisible?(c(),d("div",u({key:0,ref:i.containerRef,id:o.id,class:n.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(c(),d("div",u({key:0,class:n.cx("start")},n.ptm("start")),[L(n.$slots,"start")],16)):h("",!0),p("ul",u({ref:i.listRef,id:o.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":o.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(c(!0),d(w,null,V(n.model,function(r,s){return c(),d(w,{key:i.label(r)+s.toString()},[r.items&&i.visible(r)&&!r.separator?(c(),d(w,{key:0},[r.items?(c(),d("li",u({key:0,id:o.id+"_"+s,class:[n.cx("submenuLabel"),r.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[L(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:r},function(){return[_(B(i.label(r)),1)]})],16,Mn)):h("",!0),(c(!0),d(w,null,V(r.items,function(f,b){return c(),d(w,{key:f.label+s+"_"+b},[i.visible(f)&&!f.separator?(c(),g(l,{key:0,id:o.id+"_"+s+"_"+b,item:f,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(f)&&f.separator?(c(),d("li",u({key:"separator"+s+b,class:[n.cx("separator"),r.class],style:f.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):h("",!0)],64)}),128))],64)):i.visible(r)&&r.separator?(c(),d("li",u({key:"separator"+s.toString(),class:[n.cx("separator"),r.class],style:r.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(c(),g(l,{key:i.label(r)+s.toString(),id:o.id+"_"+s,item:r,index:s,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Sn),n.$slots.end?(c(),d("div",u({key:1,class:n.cx("end")},n.ptm("end")),[L(n.$slots,"end")],16)):h("",!0)],16,Cn)):h("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}Te.render=An;var On=function(e){var t=e.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(t("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(t("tabs.tablist.border.color"),`;
    border-width: `).concat(t("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(t("tabs.nav.button.background"),`;
    color: `).concat(t("tabs.nav.button.color"),`;
    width: `).concat(t("tabs.nav.button.width"),`;
    transition: color `).concat(t("tabs.transition.duration"),", outline-color ").concat(t("tabs.transition.duration"),", box-shadow ").concat(t("tabs.transition.duration"),`;
    box-shadow: `).concat(t("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(t("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(t("tabs.nav.button.focus.ring.width")," ").concat(t("tabs.nav.button.focus.ring.style")," ").concat(t("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(t("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(t("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    left: 0;
}

.p-tablist-next-button {
    right: 0;
}

.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(t("tabs.tab.background"),`;
    border-width: `).concat(t("tabs.tab.border.width"),`;
    border-color: `).concat(t("tabs.tab.border.color"),`;
    color: `).concat(t("tabs.tab.color"),`;
    padding: `).concat(t("tabs.tab.padding"),`;
    font-weight: `).concat(t("tabs.tab.font.weight"),`;
    transition: background `).concat(t("tabs.transition.duration"),", border-color ").concat(t("tabs.transition.duration"),", color ").concat(t("tabs.transition.duration"),", outline-color ").concat(t("tabs.transition.duration"),", box-shadow ").concat(t("tabs.transition.duration"),`;
    margin: `).concat(t("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(t("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(t("tabs.tab.focus.ring.width")," ").concat(t("tabs.tab.focus.ring.style")," ").concat(t("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(t("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(t("tabs.tab.hover.background"),`;
    border-color: `).concat(t("tabs.tab.hover.border.color"),`;
    color: `).concat(t("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(t("tabs.tab.active.background"),`;
    border-color: `).concat(t("tabs.tab.active.border.color"),`;
    color: `).concat(t("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(t("tabs.tabpanel.background"),`;
    color: `).concat(t("tabs.tabpanel.color"),`;
    padding: `).concat(t("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(t("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(t("tabs.tabpanel.focus.ring.width")," ").concat(t("tabs.tabpanel.focus.ring.style")," ").concat(t("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(t("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: `).concat(t("tabs.active.bar.bottom"),`;
    height: `).concat(t("tabs.active.bar.height"),`;
    background: `).concat(t("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},Tn={root:function(e){var t=e.props;return["p-tabs p-component",{"p-tabs-scrollable":t.scrollable}]}},En=O.extend({name:"tabs",theme:On,classes:Tn}),Fn={name:"BaseTabs",extends:C,props:{value:{type:String,default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:En,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Ee={name:"Tabs",extends:Fn,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||A()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||A()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Vn(n,e,t,a,o,i){return c(),d("div",u({class:n.cx("root")},n.ptmi("root")),[L(n.$slots,"default")],16)}Ee.render=Vn;var Dn={root:"p-tablist",content:function(e){var t=e.instance;return["p-tablist-content",{"p-tablist-viewport":t.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Bn=O.extend({name:"tablist",classes:Dn}),zn={name:"BaseTabList",extends:C,props:{},style:Bn,provide:function(){return{$pcTabList:this,$parentInstance:this}}},Fe={name:"TabList",extends:zn,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;this.$nextTick(function(){e.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,t=X(e),a=e.scrollLeft-t;e.scrollLeft=a<=0?0:a},onNextButtonClick:function(){var e=this.$refs.content,t=X(e)-this.getVisibleButtonWidths(),a=e.scrollLeft+t,o=e.scrollWidth-t;e.scrollLeft=a>=o?o:a},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,t=e.content,a=e.inkbar,o=e.tabs,i=x(t,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(a.style.height=ct(i)+"px",a.style.top=Y(i).top-Y(o).top+"px"):(a.style.width=J(i)+"px",a.style.left=Y(i).left-Y(o).left+"px")},updateButtonState:function(){var e=this.$refs,t=e.list,a=e.content,o=a.scrollLeft,i=a.scrollTop,l=a.scrollWidth,m=a.scrollHeight,r=a.offsetWidth,s=a.offsetHeight,f=[X(a),lt(a)],b=f[0],K=f[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=t.offsetHeight>=s&&parseInt(i)!==m-K):(this.isPrevButtonEnabled=o!==0,this.isNextButtonEnabled=t.offsetWidth>=r&&parseInt(o)!==l-b)},getVisibleButtonWidths:function(){var e=this.$refs,t=e.prevBtn,a=e.nextBtn;return[t,a].reduce(function(o,i){return i?o+X(i):o},0)}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:ht,ChevronRightIcon:te},directives:{ripple:N}},_n=["aria-label","tabindex"],Hn=["aria-orientation"],Rn=["aria-label","tabindex"];function Nn(n,e,t,a,o,i){var l=G("ripple");return c(),d("div",u({ref:"list",class:n.cx("root")},n.ptmi("root")),[i.showNavigators&&o.isPrevButtonEnabled?D((c(),d("button",u({key:0,ref:"prevButton",class:n.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},n.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(c(),g(y(i.templates.previcon||"ChevronLeftIcon"),u({"aria-hidden":"true"},n.ptm("prevIcon")),null,16))],16,_n)),[[l]]):h("",!0),p("div",u({ref:"content",class:n.cx("content"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)})},n.ptm("content")),[p("div",u({ref:"tabs",class:n.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},n.ptm("tabList")),[L(n.$slots,"default"),p("span",u({ref:"inkbar",class:n.cx("activeBar"),role:"presentation","aria-hidden":"true"},n.ptm("activeBar")),null,16)],16,Hn)],16),i.showNavigators&&o.isNextButtonEnabled?D((c(),d("button",u({key:1,ref:"nextButton",class:n.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},n.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(c(),g(y(i.templates.nexticon||"ChevronRightIcon"),u({"aria-hidden":"true"},n.ptm("nextIcon")),null,16))],16,Rn)),[[l]]):h("",!0)],16)}Fe.render=Nn;var Gn={root:function(e){var t=e.instance,a=e.props;return["p-tab",{"p-tab-active":t.active,"p-disabled":a.disabled}]}},Un=O.extend({name:"tab",classes:Gn}),jn={name:"BaseTab",extends:C,props:{value:{type:String,default:void 0},disabled:{type:Boolean,default:!1},as:{type:String,default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Un,provide:function(){return{$pcTab:this,$parentInstance:this}}},Ve={name:"Tab",extends:jn,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var t=this.findNextTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var t=this.findPrevTab(e.currentTarget);t?this.changeFocusedTab(e,t):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var t=this.findFirstTab();this.changeFocusedTab(e,t),e.preventDefault()},onEndKey:function(e){var t=this.findLastTab();this.changeFocusedTab(e,t),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.nextElementSibling;return a?H(a,"data-p-disabled")||H(a,"data-pc-section")==="inkbar"?this.findNextTab(a):x(a,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=t?e:e.previousElementSibling;return a?H(a,"data-p-disabled")||H(a,"data-pc-section")==="inkbar"?this.findPrevTab(a):x(a,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,t){k(t),this.scrollInView(t)},scrollInView:function(e){var t;e==null||(t=e.scrollIntoView)===null||t===void 0||t.call(e,{block:"nearest"})}},computed:{active:function(){var e;return R((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.id,"_tabpanel_").concat(this.value)},attrs:function(){return u(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:N}};function Wn(n,e,t,a,o,i){var l=G("ripple");return n.asChild?L(n.$slots,"default",{key:1,class:M(n.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):D((c(),g(y(n.as),u({key:0,class:n.cx("root"),onClick:i.onClick},i.attrs),{default:P(function(){return[L(n.$slots,"default")]}),_:3},16,["class","onClick"])),[[l]])}Ve.render=Wn;var qn=function(e){var t=e.dt;return`
.p-steplist {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    overflow-x: auto;
}

.p-step {
    position: relative;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: `.concat(t("stepper.step.gap"),`;
    padding: `).concat(t("stepper.step.padding"),`;
}

.p-step:last-of-type {
    flex: initial;
}

.p-step-header {
    border: 0 none;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),`;
    border-radius: `).concat(t("stepper.step.header.border.radius"),`;
    outline-color: transparent;
    background: transparent;
    padding: `).concat(t("stepper.step.header.padding"),`;
    gap: `).concat(t("stepper.step.header.gap"),`;
}

.p-step-header:focus-visible {
    box-shadow: `).concat(t("stepper.step.header.focus.ring.shadow"),`;
    outline: `).concat(t("stepper.step.header.focus.ring.width")," ").concat(t("stepper.step.header.focus.ring.style")," ").concat(t("stepper.step.header.focus.ring.color"),`;
    outline-offset: `).concat(t("stepper.step.header.focus.ring.offset"),`;
}

.p-stepper.p-stepper-readonly .p-step {
    cursor: auto;
}

.p-step-title {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: `).concat(t("stepper.step.title.color"),`;
    font-weight: `).concat(t("stepper.step.title.font.weight"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: `).concat(t("stepper.step.number.color"),`;
    border: 2px solid `).concat(t("stepper.step.number.border.color"),`;
    background: `).concat(t("stepper.step.number.background"),`;
    min-width: `).concat(t("stepper.step.number.size"),`;
    height: `).concat(t("stepper.step.number.size"),`;
    line-height: `).concat(t("stepper.step.number.size"),`;
    font-size: `).concat(t("stepper.step.number.font.size"),`;
    z-index: 1;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    position: relative;
    font-weight: `).concat(t("stepper.step.number.font.weight"),`;
}

.p-step-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: `).concat(t("stepper.step.number.border.radius"),`;
    box-shadow: `).concat(t("stepper.step.number.shadow"),`;
}

.p-step-active .p-step-header {
    cursor: default;
}

.p-step-active .p-step-number {
    background: `).concat(t("stepper.step.number.active.background"),`;
    border-color: `).concat(t("stepper.step.number.active.border.color"),`;
    color: `).concat(t("stepper.step.number.active.color"),`;
}

.p-step-active .p-step-title {
    color: `).concat(t("stepper.step.title.active.color"),`;
}

.p-step:not(.p-disabled):focus-visible {
    outline: `).concat(t("focus.ring.width")," ").concat(t("focus.ring.style")," ").concat(t("focus.ring.color"),`;
    outline-offset: `).concat(t("focus.ring.offset"),`;
}

.p-step:has(~ .p-step-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepper-separator {
    flex: 1 1 0;
    background: `).concat(t("stepper.separator.background"),`;
    width: 100%;
    height: `).concat(t("stepper.separator.size"),`;
    transition: background `).concat(t("stepper.transition.duration"),", color ").concat(t("stepper.transition.duration"),", border-color ").concat(t("stepper.transition.duration"),", box-shadow ").concat(t("stepper.transition.duration"),", outline-color ").concat(t("stepper.transition.duration"),`;
}

.p-steppanels {
    padding: `).concat(t("stepper.steppanels.padding"),`;
}

.p-steppanel {
    background: `).concat(t("stepper.steppanel.background"),`;
    color: `).concat(t("stepper.steppanel.color"),`;
}

.p-stepper:has(.p-stepitem) {
    display: flex;
    flex-direction: column;
}

.p-stepitem {
    display: flex;
    flex-direction: column;
    flex: initial;
}

.p-stepitem.p-stepitem-active {
    flex: 1 1 auto;
}

.p-stepitem .p-step {
    flex: initial;
}

.p-stepitem .p-steppanel-content {
    width: 100%;
    padding: `).concat(t("stepper.steppanel.padding"),`;
}

.p-stepitem .p-steppanel {
    display: flex;
    flex: 1 1 auto;
}

.p-stepitem .p-stepper-separator {
    flex: 0 0 auto;
    width: `).concat(t("stepper.separator.size"),`;
    height: auto;
    margin: `).concat(t("stepper.separator.margin"),`;
    position: relative;
    left: calc(-1 * `).concat(t("stepper.separator.size"),`);
}

.p-stepitem:has(~ .p-stepitem-active) .p-stepper-separator {
    background: `).concat(t("stepper.separator.active.background"),`;
}

.p-stepitem:last-of-type .p-steppanel {
    padding-inline-start: `).concat(t("stepper.step.number.size"),`;
}
`)},Zn={root:function(e){var t=e.props;return["p-stepper p-component",{"p-readonly":t.linear}]},separator:"p-stepper-separator"},Qn=O.extend({name:"stepper",theme:qn,classes:Zn}),Xn={name:"BaseStepper",extends:C,props:{value:{type:[String,Number],default:void 0},linear:{type:Boolean,default:!1}},style:Qn,provide:function(){return{$pcStepper:this,$parentInstance:this}}},De={name:"Stepper",extends:Xn,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(e){this.id=e||A()},value:function(e){this.d_value=e}},mounted:function(){this.id=this.id||A()},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isStepActive:function(e){return this.d_value===e},isStepDisabled:function(){return this.linear}}};function Yn(n,e,t,a,o,i){return c(),d("div",u({class:n.cx("root"),role:"tablist"},n.ptmi("root")),[n.$slots.start?L(n.$slots,"start",{key:0}):h("",!0),L(n.$slots,"default"),n.$slots.end?L(n.$slots,"end",{key:1}):h("",!0)],16)}De.render=Yn;var Jn={root:"p-steplist"},$n=O.extend({name:"steplist",classes:Jn}),ei={name:"BaseStepList",extends:C,style:$n,provide:function(){return{$pcStepList:this,$parentInstance:this}}},Be={name:"StepList",extends:ei,inheritAttrs:!1};function ti(n,e,t,a,o,i){return c(),d("div",u({class:n.cx("root")},n.ptmi("root")),[L(n.$slots,"default")],16)}Be.render=ti;var ni={root:function(e){var t=e.instance;return["p-step",{"p-step-active":t.active,"p-disabled":t.isStepDisabled}]},header:"p-step-header",number:"p-step-number",title:"p-step-title"},ii=O.extend({name:"step",classes:ni}),ze={name:"StepperSeparator",hostName:"Stepper",extends:C};function ai(n,e,t,a,o,i){return c(),d("span",u({class:n.cx("separator")},n.ptm("separator")),null,16)}ze.render=ai;var oi={name:"BaseStep",extends:C,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},asChild:{type:Boolean,default:!1},as:{type:String,default:"DIV"}},style:ii,provide:function(){return{$pcStep:this,$parentInstance:this}}},_e={name:"Step",extends:oi,inheritAttrs:!1,inject:{$pcStepper:{default:null},$pcStepList:{default:null},$pcStepItem:{default:null}},data:function(){return{isSeparatorVisible:!1}},mounted:function(){if(this.$el&&this.$pcStepList){var e=mt(this.$el,U(this.$pcStepper.$el,'[data-pc-name="step"]')),t=U(this.$pcStepper.$el,'[data-pc-name="step"]').length;this.isSeparatorVisible=e!==t-1}},methods:{getPTOptions:function(e){var t=e==="root"?this.ptmi:this.ptm;return t(e,{context:{active:this.active,disabled:this.isStepDisabled}})},onStepClick:function(){this.$pcStepper.updateValue(this.activeValue)}},computed:{active:function(){return this.$pcStepper.isStepActive(this.activeValue)},activeValue:function(){var e;return this.$pcStepItem?(e=this.$pcStepItem)===null||e===void 0?void 0:e.value:this.value},isStepDisabled:function(){return!this.active&&(this.$pcStepper.isStepDisabled()||this.disabled)},id:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_step_").concat(this.activeValue)},ariaControls:function(){var e;return"".concat((e=this.$pcStepper)===null||e===void 0?void 0:e.id,"_steppanel_").concat(this.activeValue)},a11yAttrs:function(){return{root:{role:"presentation","aria-current":this.active?"step":void 0,"data-pc-name":"step","data-pc-section":"root","data-p-disabled":this.disabled,"data-p-active":this.active},header:{id:this.id,role:"tab",taindex:this.disabled?-1:void 0,"aria-controls":this.ariaControls,"data-pc-section":"header",disabled:this.disabled,onClick:this.onStepClick}}}},components:{StepperSeparator:ze}},ri=["id","tabindex","aria-controls","disabled"];function si(n,e,t,a,o,i){var l=S("StepperSeparator");return n.asChild?L(n.$slots,"default",{key:1,class:M(n.cx("root")),active:i.active,value:n.value,a11yAttrs:i.a11yAttrs,activateCallback:i.onStepClick}):(c(),g(y(n.as),u({key:0,class:n.cx("root"),"aria-current":i.active?"step":void 0,role:"presentation","data-p-active":i.active,"data-p-disabled":i.isStepDisabled},i.getPTOptions("root")),{default:P(function(){return[p("button",u({id:i.id,class:n.cx("header"),role:"tab",type:"button",tabindex:i.isStepDisabled?-1:void 0,"aria-controls":i.ariaControls,disabled:i.isStepDisabled,onClick:e[0]||(e[0]=function(){return i.onStepClick&&i.onStepClick.apply(i,arguments)})},i.getPTOptions("header")),[p("span",u({class:n.cx("number")},i.getPTOptions("number")),B(i.activeValue),17),p("span",u({class:n.cx("title")},i.getPTOptions("title")),[L(n.$slots,"default")],16)],16,ri),o.isSeparatorVisible?(c(),g(l,{key:0})):h("",!0)]}),_:3},16,["class","aria-current","data-p-active","data-p-disabled"]))}_e.render=si;var ui=function(e){var t=e.dt;return`
.p-breadcrumb {
    background: `.concat(t("breadcrumb.background"),`;
    padding: `).concat(t("breadcrumb.padding"),`;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: `).concat(t("breadcrumb.gap"),`;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: `).concat(t("breadcrumb.separator.color"),`;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: `).concat(t("breadcrumb.item.gap"),`;
    transition: background `).concat(t("breadcrumb.transition.duration"),", color ").concat(t("breadcrumb.transition.duration"),", outline-color ").concat(t("breadcrumb.transition.duration"),", box-shadow ").concat(t("breadcrumb.transition.duration"),`;
    border-radius: `).concat(t("breadcrumb.item.border.radius"),`;
    outline-color: transparent;
    color: `).concat(t("breadcrumb.item.color"),`;
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: `).concat(t("breadcrumb.item.focus.ring.shadow"),`;
    outline: `).concat(t("breadcrumb.item.focus.ring.width")," ").concat(t("breadcrumb.item.focus.ring.style")," ").concat(t("breadcrumb.item.focus.ring.color"),`;
    outline-offset: `).concat(t("breadcrumb.item.focus.ring.offset"),`;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: `).concat(t("breadcrumb.item.hover.color"),`;
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.color"),`;
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: `).concat(t("breadcrumb.item.icon.hover.color"),`;
}
`)},ci={root:"p-breadcrumb p-component",list:"p-breadcrumb-list",homeItem:"p-breadcrumb-home-item",separator:"p-breadcrumb-separator",item:function(e){var t=e.instance;return["p-breadcrumb-item",{"p-disabled":t.disabled()}]},itemLink:"p-breadcrumb-item-link",itemIcon:"p-breadcrumb-item-icon",itemLabel:"p-breadcrumb-item-label"},li=O.extend({name:"breadcrumb",theme:ui,classes:ci}),mi={name:"BaseBreadcrumb",extends:C,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:li,provide:function(){return{$pcBreadcrumb:this,$parentInstance:this}}},He={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:C,props:{item:null,templates:null,index:null},methods:{onClick:function(e){this.item.command&&this.item.command({originalEvent:e,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var e=this.item,t=e.to,a=e.url,o=typeof window!="undefined"?window.location.pathname:"";return t===o||a===o?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var e=this;return{action:u({class:this.cx("itemLink"),"aria-current":this.isCurrentUrl(),onClick:function(a){return e.onClick(a)}},this.ptm("itemLink",this.ptmOptions)),icon:u({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:u({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},di=["href","target","aria-current"];function fi(n,e,t,a,o,i){return i.visible()?(c(),d("li",u({key:0,class:[n.cx("item"),t.item.class]},n.ptm("item",i.ptmOptions)),[t.templates.item?(c(),g(y(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps},null,8,["item","label","props"])):(c(),d("a",u({key:0,href:t.item.url||"#",class:n.cx("itemLink"),target:t.item.target,"aria-current":i.isCurrentUrl(),onClick:e[0]||(e[0]=function(){return i.onClick&&i.onClick.apply(i,arguments)})},n.ptm("itemLink",i.ptmOptions)),[t.templates&&t.templates.itemicon?(c(),g(y(t.templates.itemicon),{key:0,item:t.item,class:M(n.cx("itemIcon",i.ptmOptions))},null,8,["item","class"])):t.item.icon?(c(),d("span",u({key:1,class:[n.cx("itemIcon"),t.item.icon]},n.ptm("itemIcon",i.ptmOptions)),null,16)):h("",!0),t.item.label?(c(),d("span",u({key:2,class:n.cx("itemLabel")},n.ptm("itemLabel",i.ptmOptions)),B(i.label()),17)):h("",!0)],16,di))],16)):h("",!0)}He.render=fi;var Re={name:"Breadcrumb",extends:mi,inheritAttrs:!1,components:{BreadcrumbItem:He,ChevronRightIcon:te}};function pi(n,e,t,a,o,i){var l=S("BreadcrumbItem"),m=S("ChevronRightIcon");return c(),d("nav",u({class:n.cx("root")},n.ptmi("root")),[p("ol",u({class:n.cx("list")},n.ptm("list")),[n.home?(c(),g(l,u({key:0,item:n.home,class:n.cx("homeItem"),templates:n.$slots,pt:n.pt,unstyled:n.unstyled},n.ptm("homeItem")),null,16,["item","class","templates","pt","unstyled"])):h("",!0),(c(!0),d(w,null,V(n.model,function(r,s){return c(),d(w,{key:r.label+"_"+s},[n.home||s!==0?(c(),d("li",u({key:0,class:n.cx("separator"),ref_for:!0},n.ptm("separator")),[L(n.$slots,"separator",{},function(){return[v(m,u({"aria-hidden":"true",ref_for:!0},n.ptm("separatorIcon")),null,16)]})],16)):h("",!0),v(l,{item:r,index:s,templates:n.$slots,pt:n.pt,unstyled:n.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}Re.render=pi;var hi=function(e){var t=e.dt;return`
.p-menubar {
    display: flex;
    align-items: center;
    background: `.concat(t("menubar.background"),`;
    border: 1px solid `).concat(t("menubar.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    color: `).concat(t("menubar.color"),`;
    padding: `).concat(t("menubar.padding"),`;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(t("menubar.gap"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.base.item.border.radius"),`;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.base.item.padding"),`;
}

.p-menubar-item-content {
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),`;
    border-radius: `).concat(t("menubar.item.border.radius"),`;
    color: `).concat(t("menubar.item.color"),`;
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menubar.item.padding"),`;
    gap: `).concat(t("menubar.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.color"),`;
}

.p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("menubar.submenu.icon.size"),`;
    width: `).concat(t("menubar.submenu.icon.size"),`;
    height: `).concat(t("menubar.submenu.icon.size"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: `).concat(t("menubar.item.focus.color"),`;
    background: `).concat(t("menubar.item.focus.background"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.focus.color"),`;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.focus.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content {
    color: `).concat(t("menubar.item.active.color"),`;
    background: `).concat(t("menubar.item.active.background"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(t("menubar.item.icon.active.color"),`;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(t("menubar.submenu.icon.active.color"),`;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    border-radius: `).concat(t("menubar.border.radius"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
    color: `).concat(t("menubar.submenu.color"),`;
    flex-direction: column;
    padding: `).concat(t("menubar.submenu.padding"),`;
    gap: `).concat(t("menubar.submenu.gap"),`;
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

 .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(t("menubar.mobile.button.size"),`;
    height: `).concat(t("menubar.mobile.button.size"),`;
    position: relative;
    color: `).concat(t("menubar.mobile.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(t("menubar.mobile.button.border.radius"),`;
    transition: background `).concat(t("menubar.transition.duration"),", color ").concat(t("menubar.transition.duration"),", outline-color ").concat(t("menubar.transition.duration"),`;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(t("menubar.mobile.button.hover.color"),`;
    background: `).concat(t("menubar.mobile.button.hover.background"),`;
}

.p-menubar-button:focus-visible {
    box-shadow: `).concat(t("menubar.mobile.button.focus.ring.shadow"),`;
    outline: `).concat(t("menubar.mobile.button.focus.ring.width")," ").concat(t("menubar.mobile.button.focus.ring.style")," ").concat(t("menubar.mobile.button.focus.ring.color"),`;
    outline-offset: `).concat(t("menubar.mobile.button.focus.ring.offset"),`;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: `).concat(t("menubar.submenu.padding"),`;
    background: `).concat(t("menubar.submenu.background"),`;
    border: 1px solid `).concat(t("menubar.submenu.border.color"),`;
    box-shadow: `).concat(t("menubar.submenu.shadow"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(t("menubar.item.border.radius"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(t("menubar.item.padding"),`;
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid `).concat(t("menubar.separator.border.color"),`;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: `).concat(t("menubar.submenu.mobile.indent"),`;
}
`)},bi={submenu:function(e){var t=e.instance,a=e.processedItem;return{display:t.isItemActive(a)?"flex":"none"}}},Ii={root:function(e){var t=e.instance;return["p-menubar p-component",{"p-menubar-mobile":t.queryMatches,"p-menubar-mobile-active":t.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var t=e.instance,a=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":t.isItemActive(a),"p-focus":t.isItemFocused(a),"p-disabled":t.isItemDisabled(a)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},gi=O.extend({name:"menubar",theme:hi,classes:Ii,inlineStyles:bi}),vi={name:"BaseMenubar",extends:C,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:gi,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},Ne={name:"MenubarSub",hostName:"Menubar",extends:C,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,a){return e&&e.item?z(e.item[t],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,a){return this.ptm(a,{context:{item:e,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return I(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(a){return t.isItemVisible(a)&&t.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:u({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,t,"itemLink")),icon:u({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:u({class:this.cx("itemLabel")},this.getPTOptions(e,t,"itemLabel")),submenuicon:u({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}}},components:{AngleRightIcon:re,AngleDownIcon:we},directives:{ripple:N}},yi=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],ki=["onClick","onMouseenter","onMousemove"],xi=["href","target"],wi=["id"],Li=["id"];function Pi(n,e,t,a,o,i){var l=S("MenubarSub",!0),m=G("ripple");return c(),d("ul",u({class:t.level===0?n.cx("rootList"):n.cx("submenu")},t.level===0?n.ptm("rootList"):n.ptm("submenu")),[(c(!0),d(w,null,V(t.items,function(r,s){return c(),d(w,{key:i.getItemKey(r)},[i.isItemVisible(r)&&!i.getItemProp(r,"separator")?(c(),d("li",u({key:0,id:i.getItemId(r),style:i.getItemProp(r,"style"),class:[n.cx("item",{processedItem:r}),i.getItemProp(r,"class")],role:"menuitem","aria-label":i.getItemLabel(r),"aria-disabled":i.isItemDisabled(r)||void 0,"aria-expanded":i.isItemGroup(r)?i.isItemActive(r):void 0,"aria-haspopup":i.isItemGroup(r)&&!i.getItemProp(r,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(s),ref_for:!0},i.getPTOptions(r,s,"item"),{"data-p-active":i.isItemActive(r),"data-p-focused":i.isItemFocused(r),"data-p-disabled":i.isItemDisabled(r)}),[p("div",u({class:n.cx("itemContent"),onClick:function(b){return i.onItemClick(b,r)},onMouseenter:function(b){return i.onItemMouseEnter(b,r)},onMousemove:function(b){return i.onItemMouseMove(b,r)},ref_for:!0},i.getPTOptions(r,s,"itemContent")),[t.templates.item?(c(),g(y(t.templates.item),{key:1,item:r.item,root:t.root,hasSubmenu:i.getItemProp(r,"items"),label:i.getItemLabel(r),props:i.getMenuItemProps(r,s)},null,8,["item","root","hasSubmenu","label","props"])):D((c(),d("a",u({key:0,href:i.getItemProp(r,"url"),class:n.cx("itemLink"),target:i.getItemProp(r,"target"),tabindex:"-1","aria-hidden":"true",ref_for:!0},i.getPTOptions(r,s,"itemLink")),[t.templates.itemicon?(c(),g(y(t.templates.itemicon),{key:0,item:r.item,class:M(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(r,"icon")?(c(),d("span",u({key:1,class:[n.cx("itemIcon"),i.getItemProp(r,"icon")],ref_for:!0},i.getPTOptions(r,s,"itemIcon")),null,16)):h("",!0),p("span",u({id:i.getItemLabelId(r),class:n.cx("itemLabel"),ref_for:!0},i.getPTOptions(r,s,"itemLabel")),B(i.getItemLabel(r)),17,wi),i.getItemProp(r,"items")?(c(),d(w,{key:2},[t.templates.submenuicon?(c(),g(y(t.templates.submenuicon),{key:0,root:t.root,active:i.isItemActive(r),class:M(n.cx("submenuIcon"))},null,8,["root","active","class"])):(c(),g(y(t.root?"AngleDownIcon":"AngleRightIcon"),u({key:1,class:n.cx("submenuIcon"),ref_for:!0},i.getPTOptions(r,s,"submenuIcon")),null,16,["class"]))],64)):h("",!0)],16,xi)),[[m]])],16,ki),i.isItemVisible(r)&&i.isItemGroup(r)?(c(),g(l,{key:0,id:i.getItemId(r)+"_list",menuId:t.menuId,role:"menu",style:be(n.sx("submenu",!0,{processedItem:r})),focusedItemId:t.focusedItemId,items:r.items,mobileActive:t.mobileActive,activeItemPath:t.activeItemPath,templates:t.templates,level:t.level+1,"aria-labelledby":i.getItemLabelId(r),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(f){return n.$emit("item-click",f)}),onItemMouseenter:e[1]||(e[1]=function(f){return n.$emit("item-mouseenter",f)}),onItemMousemove:e[2]||(e[2]=function(f){return n.$emit("item-mousemove",f)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):h("",!0)],16,yi)):h("",!0),i.isItemVisible(r)&&i.getItemProp(r,"separator")?(c(),d("li",u({key:1,id:i.getItemId(r),class:[n.cx("separator"),i.getItemProp(r,"class")],style:i.getItemProp(r,"style"),role:"separator",ref_for:!0},n.ptm("separator")),null,16,Li)):h("",!0)],64)}),128))],16)}Ne.render=Pi;var Ge={name:"Menubar",extends:vi,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{id:this.$attrs.id,mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{"$attrs.id":function(e){this.id=e||A()},activeItemPath:function(e){I(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.id=this.id||A(),this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&F.clear(this.container),this.container=null},methods:{getItemProp:function(e,t){return e?z(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return I(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&I(e.items)},toggle:function(e){var t=this;this.mobileActive?(this.mobileActive=!1,F.clear(this.menubar),this.hide()):(this.mobileActive=!0,F.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){t.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){k(this.menubar)},hide:function(e,t){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){k(a.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&k(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&$(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,a=e.isFocus;if(!E(t)){var o=t.index,i=t.key,l=t.level,m=t.parentKey,r=t.items,s=I(r),f=this.activeItemPath.filter(function(b){return b.parentKey!==m&&b.parentKey!==i});s&&f.push(t),this.focusedItemInfo={index:o,level:l,parentKey:m},this.activeItemPath=f,s&&(this.dirty=!0),a&&k(this.menubar)}},onItemClick:function(e){var t=e.originalEvent,a=e.processedItem,o=this.isProccessedItemGroup(a),i=E(a.parent),l=this.isSelected(a);if(l){var m=a.index,r=a.key,s=a.level,f=a.parentKey;this.activeItemPath=this.activeItemPath.filter(function(K){return r!==K.key&&r.startsWith(K.key)}),this.focusedItemInfo={index:m,level:s,parentKey:f},this.dirty=!i,k(this.menubar)}else if(o)this.onItemChange(e);else{var b=i?a:this.activeItemPath.find(function(K){return K.parentKey===""});this.hide(t),this.changeFocusedItemIndex(t,b?b.index:-1),this.mobileActive=!1,k(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],a=t?E(t.parent):null;if(a){var o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowRightKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var t=this,a=this.visibleItems[this.focusedItemInfo.index],o=E(a.parent);if(o){var i=this.isProccessedItemGroup(a);if(i){this.onItemChange({originalEvent:e,processedItem:a}),this.focusedItemInfo={index:-1,parentKey:a.key};var l=this.findLastItemIndex();this.changeFocusedItemIndex(e,l)}}else{var m=this.activeItemPath.find(function(s){return s.key===a.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:m?m.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==t.focusedItemInfo.parentKey});else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r)}}e.preventDefault()},onArrowLeftKey:function(e){var t=this,a=this.visibleItems[this.focusedItemInfo.index],o=a?this.activeItemPath.find(function(l){return l.key===a.parentKey}):null;if(o)this.onItemChange({originalEvent:e,processedItem:o}),this.activeItemPath=this.activeItemPath.filter(function(l){return l.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault();else{var i=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],a=t?this.activeItemPath.find(function(l){return l.key===t.parentKey}):null;if(a){var o=this.isProccessedItemGroup(t);o&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.onArrowDownKey(e))}else{var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=x(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=t&&x(t,'a[data-pc-section="itemlink"]');a?a.click():t&&t.click();var o=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(o);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],a=this.isProccessedItemGroup(t);!a&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var a=e.container&&!e.container.contains(t.target),o=!(e.target&&(e.target===t.target||e.target.contains(t.target)));a&&o&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){ee()||e.hide(t,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return j(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(o){return t.isValidItem(o)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var t=this,a=e>0?j(this.visibleItems.slice(0,e),function(o){return t.isValidItem(o)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var a=this;this.searchValue=(this.searchValue||"")+t;var o=-1,i=!1;return this.focusedItemInfo.index!==-1?(o=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}),o=o===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(l){return a.isItemMatched(l)}):o+this.focusedItemInfo.index):o=this.visibleItems.findIndex(function(l){return a.isItemMatched(l)}),o!==-1&&(i=!0),o===-1&&this.focusedItemInfo.index===-1&&(o=this.findFirstFocusedItemIndex()),o!==-1&&this.changeFocusedItemIndex(e,o),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,a=x(this.menubar,'li[id="'.concat(t,'"]'));a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(m,r){var s=(i!==""?i+"_":"")+r,f={item:m,index:r,level:a,key:s,parent:o,parentKey:i};f.items=t.createProcessedItems(m.items,a+1,f,s),l.push(f)}),l},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(a){return a.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(I(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:Ne,BarsIcon:xe}};function q(n){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(n)}function fe(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,a)}return t}function pe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?fe(Object(t),!0).forEach(function(a){Ki(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function Ki(n,e,t){return(e=Ci(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ci(n){var e=Si(n,"string");return q(e)=="symbol"?e:e+""}function Si(n,e){if(q(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e||"default");if(q(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}var Mi=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function Ai(n,e,t,a,o,i){var l=S("BarsIcon"),m=S("MenubarSub");return c(),d("div",u({ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[n.$slots.start?(c(),d("div",u({key:0,class:n.cx("start")},n.ptm("start")),[L(n.$slots,"start")],16)):h("",!0),L(n.$slots,n.$slots.button?"button":"menubutton",{id:o.id,class:M(n.cx("button")),toggleCallback:function(s){return i.menuButtonClick(s)}},function(){var r;return[n.model&&n.model.length>0?(c(),d("a",u({key:0,ref:"menubutton",role:"button",tabindex:"0",class:n.cx("button"),"aria-haspopup":!!(n.model.length&&n.model.length>0),"aria-expanded":o.mobileActive,"aria-controls":o.id,"aria-label":(r=n.$primevue.config.locale.aria)===null||r===void 0?void 0:r.navigation,onClick:e[0]||(e[0]=function(s){return i.menuButtonClick(s)}),onKeydown:e[1]||(e[1]=function(s){return i.menuButtonKeydown(s)})},pe(pe({},n.buttonProps),n.ptm("button"))),[L(n.$slots,n.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[v(l,Ie(ge(n.ptm("buttonicon"))),null,16)]})],16,Mi)):h("",!0)]}),v(m,{ref:i.menubarRef,id:o.id+"_list",role:"menubar",items:i.processedItems,templates:n.$slots,root:!0,mobileActive:o.mobileActive,tabindex:"0","aria-activedescendant":o.focused?i.focusedItemId:void 0,menuId:o.id,focusedItemId:o.focused?i.focusedItemId:void 0,activeItemPath:o.activeItemPath,level:0,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),n.$slots.end?(c(),d("div",u({key:1,class:n.cx("end")},n.ptm("end")),[L(n.$slots,"end")],16)):h("",!0)],16)}Ge.render=Ai;const Oi={class:"card"},Ti=p("div",{class:"font-semibold text-xl mb-4"},"Menubar",-1),Ei={class:"card"},Fi=p("div",{class:"font-semibold text-xl mb-4"},"Breadcrumb",-1),Vi={class:"flex flex-col md:flex-row gap-8"},Di={class:"md:w-1/2"},Bi={class:"card"},zi=p("div",{class:"font-semibold text-xl mb-4"},"Steps",-1),_i={class:"md:w-1/2"},Hi={class:"card"},Ri=p("div",{class:"font-semibold text-xl mb-4"},"TabMenu",-1),Ni={class:"flex flex-col md:flex-row gap-8 mt-6"},Gi={class:"md:w-1/3"},Ui={class:"card"},ji=p("div",{class:"font-semibold text-xl mb-4"},"Tiered Menu",-1),Wi={class:"md:w-1/3"},qi={class:"card"},Zi=p("div",{class:"font-semibold text-xl mb-4"},"Plain Menu",-1),Qi={class:"md:w-1/3"},Xi={class:"card"},Yi=p("div",{class:"font-semibold text-xl mb-4"},"Overlay Menu",-1),Ji=p("div",{class:"font-semibold text-xl mb-4"},"Context Menu",-1),$i={class:"flex flex-col md:flex-row gap-8 mt-8"},ea={class:"md:w-1/2"},ta={class:"card"},na=p("div",{class:"font-semibold text-xl mb-4"},"MegaMenu | Horizontal",-1),ia=p("div",{class:"font-semibold text-xl mb-4 mt-8"},"MegaMenu | Vertical",-1),aa={class:"md:w-1/2"},oa={class:"card"},ra=p("div",{class:"font-semibold text-xl mb-4"},"PanelMenu",-1),ka={__name:"MenuDoc",setup(n){const e=T(null),t=T(null),a=T([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),o=T({icon:"pi pi-home",to:"/"}),i=T([{label:"Computer"},{label:"Notebook"},{label:"Accessories"},{label:"Backpacks"},{label:"Item"}]),l=T([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]},{separator:!0},{label:"Quit",icon:"pi pi-fw pi-sign-out"}]),m=T([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Home",icon:"pi pi-home"}]),r=T([{label:"Customers",items:[{label:"New",icon:"pi pi-fw pi-plus"},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]}]),s=T([{label:"Save",icon:"pi pi-save"},{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-trash"},{separator:!0},{label:"Options",icon:"pi pi-cog"}]),f=T([{label:"Fashion",icon:"pi pi-fw pi-tag",items:[[{label:"Woman",items:[{label:"Woman Item"},{label:"Woman Item"},{label:"Woman Item"}]},{label:"Men",items:[{label:"Men Item"},{label:"Men Item"},{label:"Men Item"}]}],[{label:"Kids",items:[{label:"Kids Item"},{label:"Kids Item"}]},{label:"Luggage",items:[{label:"Luggage Item"},{label:"Luggage Item"},{label:"Luggage Item"}]}]]},{label:"Electronics",icon:"pi pi-fw pi-desktop",items:[[{label:"Computer",items:[{label:"Computer Item"},{label:"Computer Item"}]},{label:"Camcorder",items:[{label:"Camcorder Item"},{label:"Camcorder Item"},{label:"Camcorder Item"}]}],[{label:"TV",items:[{label:"TV Item"},{label:"TV Item"}]},{label:"Audio",items:[{label:"Audio Item"},{label:"Audio Item"},{label:"Audio Item"}]}],[{label:"Sports.7",items:[{label:"Sports.7.1"},{label:"Sports.7.2"}]}]]},{label:"Furniture",icon:"pi pi-fw pi-image",items:[[{label:"Living Room",items:[{label:"Living Room Item"},{label:"Living Room Item"}]},{label:"Kitchen",items:[{label:"Kitchen Item"},{label:"Kitchen Item"},{label:"Kitchen Item"}]}],[{label:"Bedroom",items:[{label:"Bedroom Item"},{label:"Bedroom Item"}]},{label:"Outdoor",items:[{label:"Outdoor Item"},{label:"Outdoor Item"},{label:"Outdoor Item"}]}]]},{label:"Sports",icon:"pi pi-fw pi-star",items:[[{label:"Basketball",items:[{label:"Basketball Item"},{label:"Basketball Item"}]},{label:"Football",items:[{label:"Football Item"},{label:"Football Item"},{label:"Football Item"}]}],[{label:"Tennis",items:[{label:"Tennis Item"},{label:"Tennis Item"}]}]]}]),b=T([{label:"Customers",icon:"pi pi-fw pi-table",items:[{label:"New",icon:"pi pi-fw pi-user-plus",items:[{label:"Customer",icon:"pi pi-fw pi-plus"},{label:"Duplicate",icon:"pi pi-fw pi-copy"}]},{label:"Edit",icon:"pi pi-fw pi-user-edit"}]},{label:"Orders",icon:"pi pi-fw pi-shopping-cart",items:[{label:"View",icon:"pi pi-fw pi-list"},{label:"Search",icon:"pi pi-fw pi-search"}]},{label:"Shipments",icon:"pi pi-fw pi-envelope",items:[{label:"Tracker",icon:"pi pi-fw pi-compass"},{label:"Map",icon:"pi pi-fw pi-map-marker"},{label:"Manage",icon:"pi pi-fw pi-pencil"}]},{label:"Profile",icon:"pi pi-fw pi-user",items:[{label:"Settings",icon:"pi pi-fw pi-cog"},{label:"Billing",icon:"pi pi-fw pi-file"}]}]);function K(Q){e.value.toggle(Q)}function ne(Q){t.value.show(Q)}return(Q,sa)=>{const Ue=bt,je=gt,We=It,qe=Ge,Ze=Re,ie=_e,Qe=Be,Xe=De,ae=Ve,Ye=Fe,Je=Ee,$e=pt,se=Te,et=dt,tt=Ae,ue=Se,nt=Ke;return c(),d(w,null,[p("div",Oi,[Ti,v(qe,{model:a.value},{end:P(()=>[v(We,{iconPosition:"left"},{default:P(()=>[v(Ue,{class:"pi pi-search"}),v(je,{type:"text",placeholder:"Search"})]),_:1})]),_:1},8,["model"])]),p("div",Ei,[Fi,v(Ze,{home:o.value,model:i.value},null,8,["home","model"])]),p("div",Vi,[p("div",Di,[p("div",Bi,[zi,v(Xe,{value:"1"},{default:P(()=>[v(Qe,null,{default:P(()=>[v(ie,{value:"1"},{default:P(()=>[_("Header I")]),_:1}),v(ie,{value:"2"},{default:P(()=>[_("Header II")]),_:1}),v(ie,{value:"3"},{default:P(()=>[_("Header III")]),_:1})]),_:1})]),_:1})])]),p("div",_i,[p("div",Hi,[Ri,v(Je,{value:"0"},{default:P(()=>[v(Ye,null,{default:P(()=>[v(ae,{value:"0"},{default:P(()=>[_("Header I")]),_:1}),v(ae,{value:"1"},{default:P(()=>[_("Header II")]),_:1}),v(ae,{value:"2"},{default:P(()=>[_("Header III")]),_:1})]),_:1})]),_:1})])])]),p("div",Ni,[p("div",Gi,[p("div",Ui,[ji,v($e,{model:l.value},null,8,["model"])])]),p("div",Wi,[p("div",qi,[Zi,v(se,{model:r.value},null,8,["model"])])]),p("div",Qi,[p("div",Xi,[Yi,v(se,{ref_key:"menu",ref:e,model:m.value,popup:!0},null,8,["model"]),v(et,{type:"button",label:"Options",icon:"pi pi-angle-down",onClick:K,style:{width:"auto"}})]),p("div",{class:"card",onContextmenu:ne},[Ji,_(" Right click to display. "),v(tt,{ref_key:"contextMenu",ref:t,model:s.value},null,8,["model"])],32)])]),p("div",$i,[p("div",ea,[p("div",ta,[na,v(ue,{model:f.value},null,8,["model"]),ia,v(ue,{model:f.value,orientation:"vertical"},null,8,["model"])])]),p("div",aa,[p("div",oa,[ra,v(nt,{model:b.value},null,8,["model"])])])])],64)}}};export{ka as default};
