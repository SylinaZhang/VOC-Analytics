import{B as w,s as $,a as c,c as h,m as o,U as k,aW as H,M as y,N as B,b as r,h as x,Z as S,ac as O,G as A,g as _,e as v,I as D,K as T,J as U,T as V,t as W,d as s,r as N,o as G,aY as j,F as J}from"./index-Bc3bAAiN.js";import{s as Z}from"./index-Dnz12a-4.js";import{s as Q}from"./index-Dga9hBp7.js";import{s as ee}from"./index-BM5cqray.js";import{s as C}from"./index-BewXgKyH.js";import{a as M}from"./index-CAMXmtmr.js";import{s as te}from"./index-CdVQ3-ZG.js";var ne=function(e){var n=e.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(n("skeleton.background"),`;
    border-radius: `).concat(n("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0), `).concat(n("skeleton.animation.background"),`, rgba(255, 255, 255, 0) );
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}
`)},se={root:{position:"relative"}},ae={root:function(e){var n=e.props;return["p-skeleton p-component",{"p-skeleton-circle":n.shape==="circle","p-skeleton-animation-none":n.animation==="none"}]}},re=w.extend({name:"skeleton",theme:ne,classes:ae,inlineStyles:se}),oe={name:"BaseSkeleton",extends:$,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:re,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},P={name:"Skeleton",extends:oe,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function ie(t,e,n,i,u,a){return c(),h("div",o({class:t.cx("root"),style:[t.sx("root"),a.containerStyle],"aria-hidden":"true"},t.ptmi("root")),null,16)}P.render=ie;var le=function(e){var n=e.dt;return`
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * `.concat(n("scrollpanel.bar.size"),`));
    width: calc(100% + calc(2 * `).concat(n("scrollpanel.bar.size"),`));
    padding: 0 calc(2 * `).concat(n("scrollpanel.bar.size"),") calc(2 * ").concat(n("scrollpanel.bar.size"),`) 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: `).concat(n("scrollpanel.bar.border.radius"),`;
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color `).concat(n("scrollpanel.transition.duration"),`;
    background: `).concat(n("scrollpanel.bar.background"),`;
    border: 0 none;
    transition: outline-color `).concat(n("scrollpanel.transition.duration"),", opacity ").concat(n("scrollpanel.transition.duration"),`;
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: `).concat(n("scrollpanel.bar.focus.ring.shadow"),`;
    outline: `).concat(n("scrollpanel.barfocus.ring.width")," ").concat(n("scrollpanel.bar.focus.ring.style")," ").concat(n("scrollpanel.bar.focus.ring.color"),`;
    outline-offset: `).concat(n("scrollpanel.barfocus.ring.offset"),`;
}

.p-scrollpanel-bar-y {
    width: `).concat(n("scrollpanel.bar.size"),`;
    top: 0;
}

.p-scrollpanel-bar-x {
    height: `).concat(n("scrollpanel.bar.size"),`;
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`)},ce={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},ue=w.extend({name:"scrollpanel",theme:le,classes:ce}),de={name:"BaseScrollPanel",extends:$,props:{step:{type:Number,default:5}},style:ue,provide:function(){return{$pcScrollPanel:this,$parentInstance:this}}},F={name:"ScrollPanel",extends:de,inheritAttrs:!1,initialized:!1,documentResizeListener:null,documentMouseMoveListener:null,documentMouseUpListener:null,frame:null,scrollXRatio:null,scrollYRatio:null,isXBarClicked:!1,isYBarClicked:!1,lastPageX:null,lastPageY:null,timer:null,outsideClickListener:null,data:function(){return{id:this.$attrs.id,orientation:"vertical",lastScrollTop:0,lastScrollLeft:0}},watch:{"$attrs.id":function(e){this.id=e||k()}},mounted:function(){this.id=this.id||k(),this.$el.offsetParent&&this.initialize()},updated:function(){!this.initialized&&this.$el.offsetParent&&this.initialize()},beforeUnmount:function(){this.unbindDocumentResizeListener(),this.frame&&window.cancelAnimationFrame(this.frame)},methods:{initialize:function(){this.moveBar(),this.bindDocumentResizeListener(),this.calculateContainerHeight()},calculateContainerHeight:function(){var e=getComputedStyle(this.$el),n=getComputedStyle(this.$refs.xBar),i=H(this.$el)-parseInt(n.height,10);e["max-height"]!=="none"&&i===0&&(this.$refs.content.offsetHeight+parseInt(n.height,10)>parseInt(e["max-height"],10)?this.$el.style.height=e["max-height"]:this.$el.style.height=this.$refs.content.offsetHeight+parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth)+"px")},moveBar:function(){var e=this;if(this.$refs.content){var n=this.$refs.content.scrollWidth,i=this.$refs.content.clientWidth,u=(this.$el.clientHeight-this.$refs.xBar.clientHeight)*-1;this.scrollXRatio=i/n;var a=this.$refs.content.scrollHeight,p=this.$refs.content.clientHeight,g=(this.$el.clientWidth-this.$refs.yBar.clientWidth)*-1;this.scrollYRatio=p/a,this.frame=this.requestAnimationFrame(function(){e.$refs.xBar&&(e.scrollXRatio>=1?(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.xBar,"p-scrollpanel-hidden")):(e.$refs.xBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&B(e.$refs.xBar,"p-scrollpanel-hidden"),e.$refs.xBar.style.cssText="width:"+Math.max(e.scrollXRatio*100,10)+"%; left:"+e.$refs.content.scrollLeft/n*100+"%;bottom:"+u+"px;")),e.$refs.yBar&&(e.scrollYRatio>=1?(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","true"),!e.isUnstyled&&y(e.$refs.yBar,"p-scrollpanel-hidden")):(e.$refs.yBar.setAttribute("data-p-scrollpanel-hidden","false"),!e.isUnstyled&&B(e.$refs.yBar,"p-scrollpanel-hidden"),e.$refs.yBar.style.cssText="height:"+Math.max(e.scrollYRatio*100,10)+"%; top: calc("+e.$refs.content.scrollTop/a*100+"% - "+e.$refs.xBar.clientHeight+"px);right:"+g+"px;"))})}},onYBarMouseDown:function(e){this.isYBarClicked=!0,this.$refs.yBar.focus(),this.lastPageY=e.pageY,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(this.$refs.yBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onXBarMouseDown:function(e){this.isXBarClicked=!0,this.$refs.xBar.focus(),this.lastPageX=e.pageX,this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&y(document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()},onScroll:function(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()},onKeyDown:function(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}}},onKeyUp:function(){this.clearTimer()},repeat:function(e,n){this.$refs.content[e]+=n,this.moveBar()},setTimer:function(e,n){var i=this;this.clearTimer(),this.timer=setTimeout(function(){i.repeat(e,n)},40)},clearTimer:function(){this.timer&&clearTimeout(this.timer)},onDocumentMouseMove:function(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))},onMouseMoveForXBar:function(e){var n=this,i=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollLeft+=i/n.scrollXRatio})},onMouseMoveForYBar:function(e){var n=this,i=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.frame=this.requestAnimationFrame(function(){n.$refs.content.scrollTop+=i/n.scrollYRatio})},onFocus:function(e){this.$refs.xBar.isSameNode(e.target)?this.orientation="horizontal":this.$refs.yBar.isSameNode(e.target)&&(this.orientation="vertical")},onBlur:function(){this.orientation==="horizontal"&&(this.orientation="vertical")},onDocumentMouseUp:function(){this.$refs.yBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&B(this.$refs.yBar,"p-scrollpanel-grabbed"),this.$refs.xBar.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&B(this.$refs.xBar,"p-scrollpanel-grabbed"),document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.isUnstyled&&B(document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1},requestAnimationFrame:function(e){var n=window.requestAnimationFrame||this.timeoutFrame;return n(e)},refresh:function(){this.moveBar()},scrollTop:function(e){var n=this.$refs.content.scrollHeight-this.$refs.content.clientHeight;e=e>n?n:e>0?e:0,this.$refs.content.scrollTop=e},timeoutFrame:function(e){setTimeout(e,0)},bindDocumentMouseListeners:function(){var e=this;this.documentMouseMoveListener||(this.documentMouseMoveListener=function(n){e.onDocumentMouseMove(n)},document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=function(n){e.onDocumentMouseUp(n)},document.addEventListener("mouseup",this.documentMouseUpListener))},unbindDocumentMouseListeners:function(){this.documentMouseMoveListener&&(document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)},bindDocumentResizeListener:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(){e.moveBar()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentResizeListener:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}},computed:{contentId:function(){return this.id+"_content"}}},pe=["id"],me=["aria-controls","aria-valuenow"],he=["aria-controls","aria-valuenow"];function fe(t,e,n,i,u,a){return c(),h("div",o({class:t.cx("root")},t.ptmi("root")),[r("div",o({class:t.cx("contentContainer")},t.ptm("contentContainer")),[r("div",o({ref:"content",id:a.contentId,class:t.cx("content"),onScroll:e[0]||(e[0]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)}),onMouseenter:e[1]||(e[1]=function(){return a.moveBar&&a.moveBar.apply(a,arguments)})},t.ptm("content")),[x(t.$slots,"default")],16,pe)],16),r("div",o({ref:"xBar",class:t.cx("barx"),tabindex:"0",role:"scrollbar","aria-orientation":"horizontal","aria-controls":a.contentId,"aria-valuenow":u.lastScrollLeft,onMousedown:e[2]||(e[2]=function(){return a.onXBarMouseDown&&a.onXBarMouseDown.apply(a,arguments)}),onKeydown:e[3]||(e[3]=function(p){return a.onKeyDown(p)}),onKeyup:e[4]||(e[4]=function(){return a.onKeyUp&&a.onKeyUp.apply(a,arguments)}),onFocus:e[5]||(e[5]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:e[6]||(e[6]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},t.ptm("barx"),{"data-pc-group-section":"bar"}),null,16,me),r("div",o({ref:"yBar",class:t.cx("bary"),tabindex:"0",role:"scrollbar","aria-orientation":"vertical","aria-controls":a.contentId,"aria-valuenow":u.lastScrollTop,onMousedown:e[7]||(e[7]=function(){return a.onYBarMouseDown&&a.onYBarMouseDown.apply(a,arguments)}),onKeydown:e[8]||(e[8]=function(p){return a.onKeyDown(p)}),onKeyup:e[9]||(e[9]=function(){return a.onKeyUp&&a.onKeyUp.apply(a,arguments)}),onFocus:e[10]||(e[10]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)})},t.ptm("bary"),{"data-pc-group-section":"bar"}),null,16,he)],16)}F.render=fe;var ve=function(e){return e.dt,`
.p-scrolltop.p-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky;
    display: flex;
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`},be={root:function(e){var n=e.props;return["p-scrolltop",{"p-scrolltop-sticky":n.target!=="window"}]},icon:"p-scrolltop-icon"},ge=w.extend({name:"scrolltop",theme:ve,classes:be}),ye={name:"BaseScrollTop",extends:$,props:{target:{type:String,default:"window"},threshold:{type:Number,default:400},icon:{type:String,default:void 0},behavior:{type:String,default:"smooth"},buttonProps:{type:Object,default:function(){return{rounded:!0}}}},style:ge,provide:function(){return{$pcScrollTop:this,$parentInstance:this}}},R={name:"ScrollTop",extends:ye,inheritAttrs:!1,scrollListener:null,container:null,data:function(){return{visible:!1}},mounted:function(){this.target==="window"?this.bindDocumentScrollListener():this.target==="parent"&&this.bindParentScrollListener()},beforeUnmount:function(){this.target==="window"?this.unbindDocumentScrollListener():this.target==="parent"&&this.unbindParentScrollListener(),this.container&&(S.clear(this.container),this.overlay=null)},methods:{onClick:function(){var e=this.target==="window"?window:this.$el.parentElement;e.scroll({top:0,behavior:this.behavior})},checkVisibility:function(e){e>this.threshold?this.visible=!0:this.visible=!1},bindParentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(e.$el.parentElement.scrollTop)},this.$el.parentElement.addEventListener("scroll",this.scrollListener)},bindDocumentScrollListener:function(){var e=this;this.scrollListener=function(){e.checkVisibility(O())},window.addEventListener("scroll",this.scrollListener)},unbindParentScrollListener:function(){this.scrollListener&&(this.$el.parentElement.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},unbindDocumentScrollListener:function(){this.scrollListener&&(window.removeEventListener("scroll",this.scrollListener),this.scrollListener=null)},onEnter:function(e){S.set("overlay",e,this.$primevue.config.zIndex.overlay)},onAfterLeave:function(e){S.clear(e)},containerRef:function(e){this.container=e?e.$el:void 0},rootPTOptions:function(){return o(this.ptmi("root"),this.ptm("button"))},iconPTOptions:function(){return o(this.ptmi("root").icon,this.ptm("button").icon)}},computed:{scrollTopAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.scrollTop:void 0}},components:{ChevronUpIcon:ee,Button:C}};function we(t,e,n,i,u,a){var p=A("Button");return c(),_(V,o({name:"p-scrolltop",appear:"",onEnter:a.onEnter,onAfterLeave:a.onAfterLeave},t.ptm("transition")),{default:v(function(){return[u.visible?(c(),_(p,o({key:0,ref:a.containerRef,class:t.cx("root"),onClick:a.onClick,"aria-label":a.scrollTopAriaLabel,unstyled:t.unstyled},t.buttonProps,{pt:a.rootPTOptions()}),{icon:v(function(g){return[x(t.$slots,"icon",{class:D(t.cx("icon"))},function(){return[(c(),_(T(t.icon?"span":"ChevronUpIcon"),o({class:[t.cx("icon"),t.icon,g.class]},a.iconPTOptions),null,16,["class"]))]})]}),_:3},16,["class","onClick","aria-label","unstyled","pt"])):U("",!0)]}),_:3},16,["onEnter","onAfterLeave"])}R.render=we;var Be={root:"p-avatar-group p-component"},$e=w.extend({name:"avatargroup",classes:Be}),xe={name:"BaseAvatarGroup",extends:$,style:$e,provide:function(){return{$pcAvatarGroup:this,$parentInstance:this}}},E={name:"AvatarGroup",extends:xe,inheritAttrs:!1};function Le(t,e,n,i,u,a){return c(),h("div",o({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default")],16)}E.render=Le;var _e=function(e){var n=e.dt;return`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: `.concat(n("avatar.width"),`;
    height: `).concat(n("avatar.height"),`;
    font-size: `).concat(n("avatar.font.size"),`;
    background: `).concat(n("avatar.background"),`;
    border-radius: `).concat(n("avatar.border.radius"),`;
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: `).concat(n("avatar.font.size"),`;
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: `).concat(n("avatar.lg.width"),`;
    height: `).concat(n("avatar.lg.width"),`;
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-lg .p-avatar-icon {
    font-size: `).concat(n("avatar.lg.font.size"),`;
}

.p-avatar-xl {
    width: `).concat(n("avatar.xl.width"),`;
    height: `).concat(n("avatar.xl.width"),`;
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-xl .p-avatar-icon {
    font-size: `).concat(n("avatar.xl.font.size"),`;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-left: `).concat(n("avatar.group.offset"),`;
}

.p-avatar-group .p-avatar {
    border: 2px solid `).concat(n("avatar.group.border.color"),`;
}
`)},Se={root:function(e){var n=e.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Me=w.extend({name:"avatar",theme:_e,classes:Se}),ze={name:"BaseAvatar",extends:$,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Me,provide:function(){return{$pcAvatar:this,$parentInstance:this}}},I={name:"Avatar",extends:ze,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}}},ke=["aria-labelledby","aria-label"],Ae=["src","alt"];function De(t,e,n,i,u,a){return c(),h("div",o({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root")),[x(t.$slots,"default",{},function(){return[t.label?(c(),h("span",o({key:0,class:t.cx("label")},t.ptm("label")),W(t.label),17)):t.$slots.icon?(c(),_(T(t.$slots.icon),{key:1,class:D(t.cx("icon"))},null,8,["class"])):t.icon?(c(),h("span",o({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):t.image?(c(),h("img",o({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return a.onError&&a.onError.apply(a,arguments)})},t.ptm("image")),null,16,Ae)):U("",!0)]})],16,ke)}I.render=De;var Te=function(e){var n=e.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(n("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(n("overlaybadge.outline.color"),`;
}
`)},Ue={root:"p-overlaybadge"},Ce=w.extend({name:"overlaybadge",theme:Te,classes:Ue}),Pe={name:"OverlayBadge",extends:M,style:Ce,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},X={name:"OverlayBadge",extends:Pe,inheritAttrs:!1,components:{Badge:M}};function Fe(t,e,n,i,u,a){var p=A("Badge");return c(),h("div",o({class:t.cx("root")},t.ptmi("root")),[x(t.$slots,"default"),s(p,o(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}X.render=Fe;const Re={class:"card"},Ee=r("div",{class:"font-semibold text-xl mb-4"},"ProgressBar",-1),Ie={class:"flex flex-col md:flex-row gap-4"},Xe={class:"md:w-1/2"},Ye={class:"md:w-1/2"},qe={class:"flex flex-col md:flex-row gap-8"},Ke={class:"md:w-1/2"},He={class:"card"},Oe=r("div",{class:"font-semibold text-xl mb-4"},"Badge",-1),Ve={class:"flex gap-2"},We=r("div",{class:"font-semibold my-4"},"Overlay",-1),Ne={class:"flex gap-6"},Ge=r("i",{class:"pi pi-bell",style:{"font-size":"2rem"}},null,-1),je=r("i",{class:"pi pi-calendar",style:{"font-size":"2rem"}},null,-1),Je=r("i",{class:"pi pi-envelope",style:{"font-size":"2rem"}},null,-1),Ze=r("div",{class:"font-semibold my-4"},"Button",-1),Qe={class:"flex gap-2"},et=r("div",{class:"font-semibold my-4"},"Sizes",-1),tt={class:"flex items-start gap-2"},nt={class:"card"},st=r("div",{class:"font-semibold text-xl mb-4"},"Avatar",-1),at=r("div",{class:"font-semibold mb-4"},"Group",-1),rt=r("div",{class:"font-semibold my-4"},"Label - Circle",-1),ot=r("div",{class:"font-semibold my-4"},"Icon - Badge",-1),it={class:"card"},lt=r("div",{class:"font-semibold text-xl mb-4"},"ScrollTop",-1),ct=r("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. ",-1),ut={class:"md:w-1/2"},dt={class:"card"},pt=r("div",{class:"font-semibold text-xl mb-4"},"Tag",-1),mt=r("div",{class:"font-semibold mb-4"},"Default",-1),ht={class:"flex gap-2"},ft=r("div",{class:"font-semibold my-4"},"Pills",-1),vt={class:"flex gap-2"},bt=r("div",{class:"font-semibold my-4"},"Icons",-1),gt={class:"flex gap-2"},yt={class:"card"},wt=r("div",{class:"font-semibold text-xl mb-4"},"Chip",-1),Bt=r("div",{class:"font-semibold mb-4"},"Basic",-1),$t={class:"flex items-center flex-col sm:flex-row"},xt=r("div",{class:"font-semibold my-4"},"Icon",-1),Lt={class:"flex items-center flex-col sm:flex-row"},_t=r("div",{class:"font-semibold my-4"},"Image",-1),St={class:"flex items-center flex-col sm:flex-row"},Mt={class:"card"},zt=r("div",{class:"font-semibold text-xl mb-4"},"Skeleton",-1),kt={class:"rounded-border border border-surface p-6"},At={class:"flex mb-4"},Dt={class:"flex justify-between mt-4"},It={__name:"MiscDoc",setup(t){const e=N(0);let n=null;function i(){n=setInterval(()=>{let a=e.value+Math.floor(Math.random()*10)+1;a>=100&&(a=100),e.value=a},2e3)}function u(){clearInterval(n),n=null}return G(()=>{i()}),j(()=>{u()}),(a,p)=>{const g=te,f=M,L=X,z=C,m=I,Y=E,q=R,K=F,l=Q,d=Z,b=P;return c(),h(J,null,[r("div",Re,[Ee,r("div",Ie,[r("div",Xe,[s(g,{value:e.value},null,8,["value"])]),r("div",Ye,[s(g,{value:50,showValue:!1})])])]),r("div",qe,[r("div",Ke,[r("div",He,[Oe,r("div",Ve,[s(f,{value:2}),s(f,{value:8,severity:"success"}),s(f,{value:4,severity:"info"}),s(f,{value:12,severity:"Warn"}),s(f,{value:3,severity:"danger"})]),We,r("div",Ne,[s(L,{value:"2"},{default:v(()=>[Ge]),_:1}),s(L,{value:"4",severity:"danger"},{default:v(()=>[je]),_:1}),s(L,{severity:"danger"},{default:v(()=>[Je]),_:1})]),Ze,r("div",Qe,[s(z,{label:"Emails",badge:"8",class:"mr-2"}),s(z,{label:"Messages",icon:"pi pi-users",severity:"warn",badge:"8",badgeClass:"p-badge-danger"})]),et,r("div",tt,[s(f,{value:2}),s(f,{value:4,size:"large",severity:"warn"}),s(f,{value:6,size:"xlarge",severity:"success"})])]),r("div",nt,[st,at,s(Y,null,{default:v(()=>[s(m,{image:"/demo/images/avatar/amyelsner.png",size:"large",shape:"circle"}),s(m,{image:"/demo/images/avatar/asiyajavayant.png",size:"large",shape:"circle"}),s(m,{image:"/demo/images/avatar/onyamalimba.png",size:"large",shape:"circle"}),s(m,{image:"/demo/images/avatar/ionibowcher.png",size:"large",shape:"circle"}),s(m,{image:"/demo/images/avatar/xuxuefeng.png",size:"large",shape:"circle"}),s(m,{label:"+2",shape:"circle",size:"large",style:{"background-color":"#9c27b0",color:"#ffffff"}})]),_:1}),rt,s(m,{label:"P",class:"mr-2",size:"xlarge",shape:"circle"}),s(m,{label:"V",class:"mr-2",size:"large",style:{"background-color":"#2196F3",color:"#ffffff"},shape:"circle"}),s(m,{label:"U",class:"mr-2",style:{"background-color":"#9c27b0",color:"#ffffff"},shape:"circle"}),ot,s(L,{value:"4",severity:"danger",class:"inline-flex"},{default:v(()=>[s(m,{label:"U",size:"xlarge"})]),_:1})]),r("div",it,[lt,s(K,{style:{width:"250px",height:"200px"}},{default:v(()=>[ct,s(q,{target:"parent",threshold:100,icon:"pi pi-arrow-up"})]),_:1})])]),r("div",ut,[r("div",dt,[pt,mt,r("div",ht,[s(l,{value:"Primary"}),s(l,{severity:"success",value:"Success"}),s(l,{severity:"info",value:"Info"}),s(l,{severity:"warn",value:"Warn"}),s(l,{severity:"danger",value:"Danger"})]),ft,r("div",vt,[s(l,{value:"Primary",rounded:!0}),s(l,{severity:"success",value:"Success",rounded:!0}),s(l,{severity:"info",value:"Info",rounded:!0}),s(l,{severity:"warn",value:"Warn",rounded:!0}),s(l,{severity:"danger",value:"Danger",rounded:!0})]),bt,r("div",gt,[s(l,{icon:"pi pi-user",value:"Primary"}),s(l,{icon:"pi pi-check",severity:"success",value:"Success"}),s(l,{icon:"pi pi-info-circle",severity:"info",value:"Info"}),s(l,{con:"pi pi-exclamation-triangle",severity:"warn",value:"Warn"}),s(l,{icon:"pi pi-times",severity:"danger",value:"Danger"})])]),r("div",yt,[wt,Bt,r("div",$t,[s(d,{label:"Action",class:"mr-2 mb-2"}),s(d,{label:"Comedy",class:"mr-2 mb-2"}),s(d,{label:"Mystery",class:"mr-2 mb-2"}),s(d,{label:"Thriller",removable:!0,class:"mb-2"})]),xt,r("div",Lt,[s(d,{label:"Apple",icon:"pi pi-apple",class:"mr-2 mb-2"}),s(d,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2 mb-2"}),s(d,{label:"Google",icon:"pi pi-google",class:"mr-2 mb-2"}),s(d,{label:"Microsoft",icon:"pi pi-microsoft",removable:!0,class:"mb-2"})]),_t,r("div",St,[s(d,{label:"Amy Elsner",image:"/demo/images/avatar/amyelsner.png",class:"mr-2 mb-2"}),s(d,{label:"Asiya Javayant",image:"/demo/images/avatar/asiyajavayant.png",class:"mr-2 mb-2"}),s(d,{label:"Onyama Limba",image:"/demo/images/avatar/onyamalimba.png",class:"mr-2 mb-2"})])]),r("div",Mt,[zt,r("div",kt,[r("div",At,[s(b,{shape:"circle",size:"4rem",class:"mr-2"}),r("div",null,[s(b,{width:"10rem",class:"mb-2"}),s(b,{width:"5rem",class:"mb-2"}),s(b,{height:".5rem"})])]),s(b,{width:"100%",height:"150px"}),r("div",Dt,[s(b,{width:"4rem",height:"2rem"}),s(b,{width:"4rem",height:"2rem"})])])])])])],64)}}};export{It as default};
