import{ae as x,a as r,c as u,m as i,b as d,B as f,Q as m,b8 as v,a9 as g,s as y,G as s,h as C,I as B,g as h,J as w}from"./index-Bc3bAAiN.js";var b={name:"MinusIcon",extends:x},S=d("path",{d:"M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z",fill:"currentColor"},null,-1),I=[S];function V(n,c,e,t,a,o){return r(),u("svg",i({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.pti()),I,16)}b.render=V;var A=function(c){var e=c.dt;return`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: `.concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
}

.p-checkbox-input {
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
    border-radius: `).concat(e("checkbox.border.radius"),`;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: `).concat(e("checkbox.border.radius"),`;
    border: 1px solid `).concat(e("checkbox.border.color"),`;
    background: `).concat(e("checkbox.background"),`;
    width: `).concat(e("checkbox.width"),`;
    height: `).concat(e("checkbox.height"),`;
    transition: background `).concat(e("checkbox.transition.duration"),", color ").concat(e("checkbox.transition.duration"),", border-color ").concat(e("checkbox.transition.duration"),", box-shadow ").concat(e("checkbox.transition.duration"),", outline-color ").concat(e("checkbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("checkbox.shadow"),`;
}

.p-checkbox-icon {
    transition-duration: `).concat(e("checkbox.transition.duration"),`;
    color: `).concat(e("checkbox.icon.color"),`;
    font-size: `).concat(e("checkbox.icon.size"),`;
    width: `).concat(e("checkbox.icon.size"),`;
    height: `).concat(e("checkbox.icon.size"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: `).concat(e("checkbox.hover.border.color"),`;
}

.p-checkbox-checked .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.border.color"),`;
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
    border-color: `).concat(e("checkbox.checked.hover.border.color"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.checked.hover.color"),`;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.focus.border.color"),`;
    box-shadow: `).concat(e("checkbox.focus.ring.shadow"),`;
    outline: `).concat(e("checkbox.focus.ring.width")," ").concat(e("checkbox.focus.ring.style")," ").concat(e("checkbox.focus.ring.color"),`;
    outline-offset: `).concat(e("checkbox.focus.ring.offset"),`;
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: `).concat(e("checkbox.checked.focus.border.color"),`;
}

.p-checkbox.p-invalid > .p-checkbox-box {
    border-color: `).concat(e("checkbox.invalid.border.color"),`;
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.filled.background"),`;
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: `).concat(e("checkbox.checked.background"),`;
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: `).concat(e("checkbox.checked.hover.background"),`;
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: `).concat(e("checkbox.disabled.background"),`;
    border-color: `).concat(e("checkbox.checked.disabled.border.color"),`;
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: `).concat(e("checkbox.icon.disabled.color"),`;
}
`)},T={root:function(c){var e=c.instance,t=c.props;return["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":t.disabled,"p-invalid":t.invalid,"p-variant-filled":t.variant?t.variant==="filled":e.$primevue.config.inputStyle==="filled"||e.$primevue.config.inputVariant==="filled"}]},box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},O=f.extend({name:"checkbox",theme:A,classes:T}),_={name:"BaseCheckbox",extends:y,props:{value:null,modelValue:null,binary:Boolean,name:{type:String,default:null},indeterminate:{type:Boolean,default:!1},trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},variant:{type:String,default:null},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:O,provide:function(){return{$pcCheckbox:this,$parentInstance:this}}};function P(n){return F(n)||q(n)||j(n)||z()}function z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(n,c){if(n){if(typeof n=="string")return l(n,c);var e={}.toString.call(n).slice(8,-1);return e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set"?Array.from(n):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(n,c):void 0}}function q(n){if(typeof Symbol!="undefined"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function F(n){if(Array.isArray(n))return l(n)}function l(n,c){(c==null||c>n.length)&&(c=n.length);for(var e=0,t=Array(c);e<c;e++)t[e]=n[e];return t}var L={name:"Checkbox",extends:_,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","update:indeterminate"],data:function(){return{d_indeterminate:this.indeterminate}},watch:{indeterminate:function(c){this.d_indeterminate=c}},methods:{getPTOptions:function(c){var e=c==="root"?this.ptmi:this.ptm;return e(c,{context:{checked:this.checked,indeterminate:this.d_indeterminate,disabled:this.disabled}})},onChange:function(c){var e=this;if(!this.disabled&&!this.readonly){var t;this.binary?t=this.d_indeterminate?this.trueValue:this.checked?this.falseValue:this.trueValue:this.checked||this.d_indeterminate?t=this.modelValue.filter(function(a){return!m(a,e.value)}):t=this.modelValue?[].concat(P(this.modelValue),[this.value]):[this.value],this.d_indeterminate&&(this.d_indeterminate=!1,this.$emit("update:indeterminate",this.d_indeterminate)),this.$emit("update:modelValue",t),this.$emit("change",c)}},onFocus:function(c){this.$emit("focus",c)},onBlur:function(c){this.$emit("blur",c)}},computed:{checked:function(){return this.d_indeterminate?!1:this.binary?this.modelValue===this.trueValue:v(this.value,this.modelValue)}},components:{CheckIcon:g,MinusIcon:b}},$=["data-p-checked","data-p-indeterminate","data-p-disabled"],H=["id","value","name","checked","tabindex","disabled","readonly","required","aria-labelledby","aria-label","aria-invalid","aria-checked"];function M(n,c,e,t,a,o){var p=s("CheckIcon"),k=s("MinusIcon");return r(),u("div",i({class:n.cx("root")},o.getPTOptions("root"),{"data-p-checked":o.checked,"data-p-indeterminate":a.d_indeterminate||void 0,"data-p-disabled":n.disabled}),[d("input",i({id:n.inputId,type:"checkbox",class:[n.cx("input"),n.inputClass],style:n.inputStyle,value:n.value,name:n.name,checked:o.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,required:n.required,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,"aria-checked":a.d_indeterminate?"mixed":void 0,onFocus:c[0]||(c[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:c[1]||(c[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onChange:c[2]||(c[2]=function(){return o.onChange&&o.onChange.apply(o,arguments)})},o.getPTOptions("input")),null,16,H),d("div",i({class:n.cx("box")},o.getPTOptions("box")),[C(n.$slots,"icon",{checked:o.checked,indeterminate:a.d_indeterminate,class:B(n.cx("icon"))},function(){return[o.checked?(r(),h(p,i({key:0,class:n.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):a.d_indeterminate?(r(),h(k,i({key:1,class:n.cx("icon")},o.getPTOptions("icon")),null,16,["class"])):w("",!0)]})],16)],16,$)}L.render=M;export{b as a,L as s};
