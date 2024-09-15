import{B as z,U as C,O as g,Z as k,aQ as F,j as v,a6 as R,i as L,D as P,v as B,z as G,y as x,C as H,A as N,S as E,E as _,s as V,aU as U,m as c,R as Z,G as y,V as W,a as d,g as p,e as S,c as h,F as K,f as j,b as A,W as q,K as w,I as J,J as b,t as Q,n as X,T as O,d as M,h as T}from"./index-Bc3bAAiN.js";import{O as Y}from"./index-BCKLKQOk.js";import{s as $}from"./index-erLa119m.js";var ee=function(e){var t=e.dt;return`
.p-tieredmenu {
    background: `.concat(t("tieredmenu.background"),`;
    color: `).concat(t("tieredmenu.color"),`;
    border: 1px solid `).concat(t("tieredmenu.border.color"),`;
    border-radius: `).concat(t("tieredmenu.border.radius"),`;
    min-width: 12.5rem;
}

.p-tieredmenu-root-list,
.p-tieredmenu-submenu {
    margin: 0;
    padding: `).concat(t("tieredmenu.list.padding"),`;
    list-style: none;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("tieredmenu.list.gap"),`;
}

.p-tieredmenu-submenu {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    background: `).concat(t("tieredmenu.background"),`;
    color: `).concat(t("tieredmenu.color"),`;
    border: 1px solid `).concat(t("tieredmenu.border.color"),`;
    border-radius: `).concat(t("tieredmenu.border.radius"),`;
    box-shadow: `).concat(t("tieredmenu.shadow"),`;
}

.p-tieredmenu-item {
    position: relative;
}

.p-tieredmenu-item-content {
    transition: background `).concat(t("tieredmenu.transition.duration"),", color ").concat(t("tieredmenu.transition.duration"),`;
    border-radius: `).concat(t("tieredmenu.item.border.radius"),`;
    color: `).concat(t("tieredmenu.item.color"),`;
}

.p-tieredmenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("tieredmenu.item.padding"),`;
    gap: `).concat(t("tieredmenu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-tieredmenu-item-label {
    line-height: 1;
}

.p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.color"),`;
}

.p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.color"),`;
    margin-left: auto;
    font-size: `).concat(t("tieredmenu.submenu.icon.size"),`;
    width: `).concat(t("tieredmenu.submenu.icon.size"),`;
    height: `).concat(t("tieredmenu.submenu.icon.size"),`;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
    color: `).concat(t("tieredmenu.item.focus.color"),`;
    background: `).concat(t("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.focus.color"),`;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
    color: `).concat(t("tieredmenu.item.focus.color"),`;
    background: `).concat(t("tieredmenu.item.focus.background"),`;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.focus.color"),`;
}

.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.focus.color"),`;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content {
    color: `).concat(t("tieredmenu.item.active.color"),`;
    background: `).concat(t("tieredmenu.item.active.background"),`;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
    color: `).concat(t("tieredmenu.item.icon.active.color"),`;
}

.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
    color: `).concat(t("tieredmenu.submenu.icon.active.color"),`;
}

.p-tieredmenu-separator {
    border-top: 1px solid `).concat(t("tieredmenu.separator.border.color"),`;
}

.p-tieredmenu-overlay {
    box-shadow: `).concat(t("tieredmenu.shadow"),`;
}

.p-tieredmenu-enter-from,
.p-tieredmenu-leave-active {
    opacity: 0;
}

.p-tieredmenu-enter-active {
    transition: opacity 250ms;
}
`)},te={submenu:function(e){var t=e.instance,r=e.processedItem;return{display:t.isItemActive(r)?"flex":"none"}}},ie={root:function(e){e.instance;var t=e.props;return["p-tieredmenu p-component",{"p-tieredmenu-overlay":t.popup}]},start:"p-tieredmenu-start",rootList:"p-tieredmenu-root-list",item:function(e){var t=e.instance,r=e.processedItem;return["p-tieredmenu-item",{"p-tieredmenu-item-active":t.isItemActive(r),"p-focus":t.isItemFocused(r),"p-disabled":t.isItemDisabled(r)}]},itemContent:"p-tieredmenu-item-content",itemLink:"p-tieredmenu-item-link",itemIcon:"p-tieredmenu-item-icon",itemLabel:"p-tieredmenu-item-label",submenuIcon:"p-tieredmenu-submenu-icon",submenu:"p-tieredmenu-submenu",separator:"p-tieredmenu-separator",end:"p-tieredmenu-end"},ne=z.extend({name:"tieredmenu",theme:ee,classes:ie,inlineStyles:te}),re={name:"BaseTieredMenu",extends:V,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ne,provide:function(){return{$pcTieredMenu:this,$parentInstance:this}}},D={name:"TieredMenuSub",hostName:"TieredMenu",extends:V,emits:["item-click","item-mouseenter","item-mousemove"],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,r){return e&&e.item?F(e.item[t],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,r){return this.ptm(r,{context:{item:e,index:t,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return g(e.items)},onEnter:function(){U(this.container,this.level)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(r){return t.isItemVisible(r)&&t.getItemProp(r,"separator")}).length+1},getMenuItemProps:function(e,t){return{action:c({class:this.cx("itemLink"),tabindex:-1,"aria-hidden":!0},this.getPTOptions(e,t,"itemLink")),icon:c({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,t,"itemIcon")),label:c({class:this.cx("itemLabel")},this.getPTOptions(e,t,"itemLabel")),submenuicon:c({class:this.cx("submenuIcon")},this.getPTOptions(e,t,"submenuIcon"))}},containerRef:function(e){this.container=e}},components:{AngleRightIcon:$},directives:{ripple:Z}},se=["tabindex"],ae=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],oe=["onClick","onMouseenter","onMousemove"],ue=["href","target"],de=["id"],ce=["id"];function le(i,e,t,r,a,n){var o=y("AngleRightIcon"),m=y("TieredMenuSub",!0),I=W("ripple");return d(),p(O,c({name:"p-tieredmenu",onEnter:n.onEnter},i.ptm("menu.transition")),{default:S(function(){return[t.level===0||t.visible?(d(),h("ul",c({key:0,ref:n.containerRef,class:t.level===0?i.cx("rootList"):i.cx("submenu"),tabindex:t.tabindex},t.level===0?i.ptm("rootList"):i.ptm("submenu")),[(d(!0),h(K,null,j(t.items,function(s,u){return d(),h(K,{key:n.getItemKey(s)},[n.isItemVisible(s)&&!n.getItemProp(s,"separator")?(d(),h("li",c({key:0,id:n.getItemId(s),style:n.getItemProp(s,"style"),class:[i.cx("item",{processedItem:s}),n.getItemProp(s,"class")],role:"menuitem","aria-label":n.getItemLabel(s),"aria-disabled":n.isItemDisabled(s)||void 0,"aria-expanded":n.isItemGroup(s)?n.isItemActive(s):void 0,"aria-haspopup":n.isItemGroup(s)&&!n.getItemProp(s,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(u),ref_for:!0},n.getPTOptions(s,u,"item"),{"data-p-active":n.isItemActive(s),"data-p-focused":n.isItemFocused(s),"data-p-disabled":n.isItemDisabled(s)}),[A("div",c({class:i.cx("itemContent"),onClick:function(f){return n.onItemClick(f,s)},onMouseenter:function(f){return n.onItemMouseEnter(f,s)},onMousemove:function(f){return n.onItemMouseMove(f,s)},ref_for:!0},n.getPTOptions(s,u,"itemContent")),[t.templates.item?(d(),p(w(t.templates.item),{key:1,item:s.item,hasSubmenu:n.getItemProp(s,"items"),label:n.getItemLabel(s),props:n.getMenuItemProps(s,u)},null,8,["item","hasSubmenu","label","props"])):q((d(),h("a",c({key:0,href:n.getItemProp(s,"url"),class:i.cx("itemLink"),target:n.getItemProp(s,"target"),tabindex:"-1","aria-hidden":"true",ref_for:!0},n.getPTOptions(s,u,"itemLink")),[t.templates.itemicon?(d(),p(w(t.templates.itemicon),{key:0,item:s.item,class:J(i.cx("itemIcon"))},null,8,["item","class"])):n.getItemProp(s,"icon")?(d(),h("span",c({key:1,class:[i.cx("itemIcon"),n.getItemProp(s,"icon")],ref_for:!0},n.getPTOptions(s,u,"itemIcon")),null,16)):b("",!0),A("span",c({id:n.getItemLabelId(s),class:i.cx("itemLabel"),ref_for:!0},n.getPTOptions(s,u,"itemLabel")),Q(n.getItemLabel(s)),17,de),n.getItemProp(s,"items")?(d(),h(K,{key:2},[t.templates.submenuicon?(d(),p(w(t.templates.submenuicon),c({key:0,class:i.cx("submenuIcon"),active:n.isItemActive(s),ref_for:!0},n.getPTOptions(s,u,"submenuIcon")),null,16,["class","active"])):(d(),p(o,c({key:1,class:i.cx("submenuIcon"),ref_for:!0},n.getPTOptions(s,u,"submenuIcon")),null,16,["class"]))],64)):b("",!0)],16,ue)),[[I]])],16,oe),n.isItemVisible(s)&&n.isItemGroup(s)?(d(),p(m,{key:0,id:n.getItemId(s)+"_list",style:X(i.sx("submenu",!0,{processedItem:s})),"aria-labelledby":n.getItemLabelId(s),role:"menu",menuId:t.menuId,focusedItemId:t.focusedItemId,items:s.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:n.isItemActive(s)&&n.isItemGroup(s),pt:i.pt,unstyled:i.unstyled,onItemClick:e[0]||(e[0]=function(l){return i.$emit("item-click",l)}),onItemMouseenter:e[1]||(e[1]=function(l){return i.$emit("item-mouseenter",l)}),onItemMousemove:e[2]||(e[2]=function(l){return i.$emit("item-mousemove",l)})},null,8,["id","style","aria-labelledby","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):b("",!0)],16,ae)):b("",!0),n.isItemVisible(s)&&n.getItemProp(s,"separator")?(d(),h("li",c({key:1,id:n.getItemId(s),style:n.getItemProp(s,"style"),class:[i.cx("separator"),n.getItemProp(s,"class")],role:"separator",ref_for:!0},i.ptm("separator")),null,16,ce)):b("",!0)],64)}),128))],16,se)):b("",!0)]}),_:1},16,["onEnter"])}D.render=le;var me={name:"TieredMenu",extends:re,inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{id:this.$attrs.id,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||C()},activeItemPath:function(e){this.popup||(g(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted:function(){this.id=this.id||C()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&k.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?F(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return g(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&g(e.items)},toggle:function(e){this.visible?this.hide(e,!0):this.show(e)},show:function(e,t){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null),t&&v(this.menubar)},hide:function(e,t){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},t&&v(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&R(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var t=e.processedItem,r=e.isFocus;if(!L(t)){var a=t.index,n=t.key,o=t.level,m=t.parentKey,I=t.items,s=g(I),u=this.activeItemPath.filter(function(l){return l.parentKey!==m&&l.parentKey!==n});s&&(u.push(t),this.submenuVisible=!0),this.focusedItemInfo={index:a,level:o,parentKey:m},this.activeItemPath=u,s&&(this.dirty=!0),r&&v(this.menubar)}},onOverlayClick:function(e){Y.emit("overlay-click",{originalEvent:e,target:this.target})},onItemClick:function(e){var t=e.originalEvent,r=e.processedItem,a=this.isProccessedItemGroup(r),n=L(r.parent),o=this.isSelected(r);if(o){var m=r.index,I=r.key,s=r.level,u=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(f){return I!==f.key&&I.startsWith(f.key)}),this.focusedItemInfo={index:m,level:s,parentKey:u},this.dirty=!n,v(this.menubar)}else if(a)this.onItemChange(e);else{var l=n?r:this.activeItemPath.find(function(f){return f.parentKey===""});this.hide(t),this.changeFocusedItemIndex(t,l?l.index:-1),v(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e)},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(t);!r&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(e,!0),e.preventDefault()}else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,r=this.visibleItems[this.focusedItemInfo.index],a=this.activeItemPath.find(function(o){return o.key===r.parentKey}),n=L(r.parent);n||(this.focusedItemInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(t);r&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=P(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=t&&P(t,'[data-pc-section="itemlink"]');if(r?r.click():t&&t.click(),!this.popup){var a=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(a);!n&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.popup||this.focusedItemInfo.level!==0){var t=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(t.parentKey.split("_")[0]),level:0,parentKey:""},this.popup&&v(this.target)}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(t);!r&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){this.autoZIndex&&k.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),B(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),v(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave:function(e){this.autoZIndex&&k.clear(e)},alignOverlay:function(){G(this.container,this.target);var e=x(this.target);e>x(this.container)&&(this.container.style.minWidth=x(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var r=e.container&&!e.container.contains(t.target),a=e.popup?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;r&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new H(this.target,function(t){e.hide(t,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(t){N()||e.hide(t,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return E(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return t.isValidItem(a)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var t=this,r=e>0?E(this.visibleItems.slice(0,e),function(a){return t.isValidItem(a)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var r=this;this.searchValue=(this.searchValue||"")+t;var a=-1,n=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(o){return r.isItemMatched(o)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(o){return r.isItemMatched(o)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(o){return r.isItemMatched(o)}),a!==-1&&(n=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),n},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.id,"_").concat(e):this.focusedItemId,r=P(this.menubar,'li[id="'.concat(t,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",o=[];return e&&e.forEach(function(m,I){var s=(n!==""?n+"_":"")+I,u={item:m,index:I,level:r,key:s,parent:a,parentKey:n};u.items=t.createProcessedItems(m.items,r+1,u,s),o.push(u)}),o},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.id).concat(g(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{TieredMenuSub:D,Portal:_}},he=["id"];function fe(i,e,t,r,a,n){var o=y("TieredMenuSub"),m=y("Portal");return d(),p(m,{appendTo:i.appendTo,disabled:!i.popup},{default:S(function(){return[M(O,c({name:"p-connected-overlay",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},i.ptm("transition")),{default:S(function(){return[a.visible?(d(),h("div",c({key:0,ref:n.containerRef,id:a.id,class:i.cx("root"),onClick:e[0]||(e[0]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)})},i.ptmi("root")),[i.$slots.start?(d(),h("div",c({key:0,class:i.cx("start")},i.ptm("start")),[T(i.$slots,"start")],16)):b("",!0),M(o,{ref:n.menubarRef,id:a.id+"_list",tabindex:i.disabled?-1:i.tabindex,role:"menubar","aria-label":i.ariaLabel,"aria-labelledby":i.ariaLabelledby,"aria-disabled":i.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":a.focused?n.focusedItemId:void 0,menuId:a.id,focusedItemId:a.focused?n.focusedItemId:void 0,items:n.processedItems,templates:i.$slots,activeItemPath:a.activeItemPath,level:0,visible:a.submenuVisible,pt:i.pt,unstyled:i.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter,onItemMousemove:n.onItemMouseMove},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),i.$slots.end?(d(),h("div",c({key:1,class:i.cx("end")},i.ptm("end")),[T(i.$slots,"end")],16)):b("",!0)],16,he)):b("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}me.render=fe;export{me as s};
