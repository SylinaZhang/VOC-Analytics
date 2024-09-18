import{B as d,Q as u,s as c,a as l,c as b,b as r,m as e}from"./index-Bc3bAAiN.js";var s=function(t){var n=t.dt;return`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid `).concat(n("radiobutton.border.color"),`;
    background: `).concat(n("radiobutton.background"),`;
    width: `).concat(n("radiobutton.width"),`;
    height: `).concat(n("radiobutton.height"),`;
    transition: background `).concat(n("radiobutton.transition.duration"),", color ").concat(n("radiobutton.transition.duration"),", border-color ").concat(n("radiobutton.transition.duration"),", box-shadow ").concat(n("radiobutton.transition.duration"),", outline-color ").concat(n("radiobutton.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(n("radiobutton.shadow"),`;
}

.p-radiobutton-icon {
    transition-duration: `).concat(n("radiobutton.transition.duration"),`;
    background: transparent;
    font-size: `).concat(n("radiobutton.icon.size"),`;
    width: `).concat(n("radiobutton.icon.size"),`;
    height: `).concat(n("radiobutton.icon.size"),`;
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.hover.border.color"),`;
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.border.color"),`;
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.color"),`;
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.hover.border.color"),`;
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.checked.hover.color"),`;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.focus.border.color"),`;
    box-shadow: `).concat(n("radiobutton.focus.ring.shadow"),`;
    outline: `).concat(n("radiobutton.focus.ring.width")," ").concat(n("radiobutton.focus.ring.style")," ").concat(n("radiobutton.focus.ring.color"),`;
    outline-offset: `).concat(n("radiobutton.focus.ring.offset"),`;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.checked.focus.border.color"),`;
}

.p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: `).concat(n("radiobutton.invalid.border.color"),`;
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: `).concat(n("radiobutton.filled.background"),`;
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.background"),`;
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: `).concat(n("radiobutton.checked.hover.background"),`;
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: `).concat(n("radiobutton.disabled.background"),`;
    border-color: `).concat(n("radiobutton.checked.disabled.border.color"),`;
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: `).concat(n("radiobutton.icon.disabled.color"),`;
}
`)},p={root:function(t){var n=t.instance,i=t.props;return["p-radiobutton p-component",{"p-radiobutton-checked":n.checked,"p-disabled":i.disabled,"p-invalid":i.invalid,"p-variant-filled":i.variant?i.variant==="filled":n.$primevue.config.inputStyle==="filled"||n.$primevue.config.inputVariant==="filled"}]},box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},h=d.extend({name:"radiobutton",theme:s,classes:p}),f={name:"BaseRadioButton",extends:c,props:{value:null,modelValue:null,binary:Boolean,name:{type:String,default:null},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:h,provide:function(){return{$pcRadioButton:this,$parentInstance:this}}},g={name:"RadioButton",extends:f,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var n=this.binary?!this.checked:this.value;this.$emit("update:modelValue",n),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){this.$emit("blur",t)}},computed:{checked:function(){return this.modelValue!=null&&(this.binary?!!this.modelValue:u(this.modelValue,this.value))}}},v=["data-p-checked","data-p-disabled"],k=["id","value","name","checked","tabindex","disabled","readonly","aria-labelledby","aria-label","aria-invalid"];function m(o,t,n,i,y,a){return l(),b("div",e({class:o.cx("root")},a.getPTOptions("root"),{"data-p-checked":a.checked,"data-p-disabled":o.disabled}),[r("input",e({id:o.inputId,type:"radio",class:[o.cx("input"),o.inputClass],style:o.inputStyle,value:o.value,name:o.name,checked:a.checked,tabindex:o.tabindex,disabled:o.disabled,readonly:o.readonly,"aria-labelledby":o.ariaLabelledby,"aria-label":o.ariaLabel,"aria-invalid":o.invalid||void 0,onFocus:t[0]||(t[0]=function(){return a.onFocus&&a.onFocus.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)}),onChange:t[2]||(t[2]=function(){return a.onChange&&a.onChange.apply(a,arguments)})},a.getPTOptions("input")),null,16,k),r("div",e({class:o.cx("box")},a.getPTOptions("box")),[r("div",e({class:o.cx("icon")},a.getPTOptions("icon")),null,16)],16)],16,v)}g.render=m;export{g as s};
