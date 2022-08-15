import{a as qe}from"./index.2d77d2e3.js";import{r as g,u as Je,a as w,o as Ke,w as $,b as ee,d as Qe,F as Ze,e as _e,f as A,n as ae,g as te,i as be,j as ea,k as we,l as le,m as Se,p as ze}from"./vue.esm-bundler.b7b75245.js";import"./iframe.77a01171.js";import"./es.map.constructor.ff42f4fa.js";import"./decorateStory.bf902897.js";function Re(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Function]"}function G(a,n,t,b=1){const[E,F]=typeof b=="number"?[b,b]:b,B=Math.round(n/E/a[0])*a[0],S=Math.round(t/F/a[1])*a[1];return[B,S]}function ue(a,n,t){return a-n-t}function ne(a,n,t){return a-n-t}function V(a,n,t){return n!==null&&a<n?n:t!==null&&t<a?t:a}function Me(a,n,t){let b=a;const E=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find(F=>Re(b[F]));if(!Re(b[E]))return!1;do{if(b[E](n))return!0;if(b===t)return!1;b=b.parentNode}while(b);return!1}function aa(a){const n=window.getComputedStyle(a);return[parseFloat(n.getPropertyValue("width"),10),parseFloat(n.getPropertyValue("height"),10)]}function C(a,n,t){!a||(a.attachEvent?a.attachEvent("on"+n,t):a.addEventListener?a.addEventListener(n,t,!0):a["on"+n]=t)}function Ne(a,n,t){!a||(a.detachEvent?a.detachEvent("on"+n,t):a.removeEventListener?a.removeEventListener(n,t,!0):a["on"+n]=null)}const ta=["onMousedown","onTouchstart"],Ve={__name:"DraggableResizableVue3",props:{draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},x:{type:Number,default:0},y:{type:Number,default:0},z:{type:[String,Number],default:"auto",validator:a=>typeof a=="string"?a==="auto":a>=0},w:{type:[Number,String],validator:a=>typeof a=="number"?a>0:a==="auto"},h:{type:[Number,String],validator:a=>typeof a=="number"?a>0:a==="auto"},minWidth:{type:Number,default:0,validator:a=>a>=0},minHeight:{type:Number,default:0,validator:a=>a>=0},maxWidth:{type:Number,default:null,validator:a=>a>=0},maxHeight:{type:Number,default:null,validator:a=>a>=0},active:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},activeOnHover:{type:Boolean,default:!1},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},lockAspectRatio:{type:Boolean,default:!1},handlesType:{type:String,default:"handles",validator:a=>["handles","borders","custom"].includes(a)},handles:{type:Array,default:()=>["tl","tm","tr","mr","br","bm","bl","ml"],validator:a=>{const n=new Set(["tl","tm","tr","mr","br","bm","bl","ml"]);return new Set(a.filter(t=>n.has(t))).size===a.length}},handlesSize:{type:Number,default:10},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},axis:{type:String,default:"both",validator:a=>["x","y","both"].includes(a)},grid:{type:Array,validator:a=>Array.isArray(a)&&typeof a[0]=="number"&&typeof a[1]=="number"},showGrid:{type:[Boolean,String],default:!1,validator:a=>[!0,!1,"x","y","both"].includes(a)},gridColor:{type:String,default:"rgba(0, 0, 0, 0.1)"},parent:{type:[Boolean,String],default:!1},scale:{type:[Number,Array],default:1,validator:a=>typeof a=="number"?a>0:a.length===2&&a[0]>0&&a[1]>0},className:{type:String,default:"drv"},classNameDraggable:{type:String,default:"drv-draggable"},classNameResizable:{type:String,default:"drv-resizable"},classNameDragging:{type:String,default:"drv-dragging"},classNameResizing:{type:String,default:"drv-resizing"},classNameActive:{type:String,default:"drv-active"},classNameHandle:{type:String,default:"drv-handle"},onDragStart:{type:Function,default:()=>!0},onDrag:{type:Function,default:()=>!0},onResizeStart:{type:Function,default:()=>!0},onResize:{type:Function,default:()=>!0}},emits:["update:x","update:y","update:w","update:h","update:active","resizing","resizestop","dragging","dragstop","activated","deactivated"],setup(a,{emit:n}){const t=a;ea(e=>({"910ad622":A(Be),"67ab50c2":A(Pe)}));const b={mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"},touch:{start:"touchstart",move:"touchmove",stop:"touchend"}},E={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},F={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"};let B=b.mouse;const S=g(null),U=g(null),D=g({h:"auto",w:"auto",active:!1,x:0,y:0}),oe=Je(),d=w({get(){return t.w||D.value.w},set(e){n("update:w",e),D.value.w=e}}),p=w({get(){return t.h||D.value.h},set(e){n("update:h",e),D.value.h=e}}),o=w({get(){return t.x||D.value.x},set(e){n("update:x",e),D.value.x=e}}),s=w({get(){return t.y||D.value.y},set(e){n("update:y",e),D.value.y=e}}),i=g(null),m=g(null),H=w({get(){return t.active||D.value.active},set(e){n("update:active",e),D.value.active=e}}),Be=w(()=>t.handlesSize+"px"),Pe=w(()=>t.handlesSize/2+"px"),q=g(!1),J=g(!1),h=g(null),M=g(null),N=g(null),z=g(null),L=g(!1),P=g(!1),K=g(!1),se=g(!1),Te=g(t.z),c=g(null),v=g(null),De=w(()=>({transform:`translate(${o.value}px, ${s.value}px)`,width:ke.value,height:Ae.value,zIndex:Te.value,...P.value&&t.disableUserSelect?E:F})),ve=we("drvContainerClass"),T=w(()=>ve.value?"."+ve.value:t.parent),re=we("drvContainerGrid"),f=w(()=>re.value?t.grid?t.grid:re.value:t.grid||[1,1]),He=w(()=>{const e={x:`linear-gradient(-90deg, ${f.value.valueColor} 1px, transparent 1px) 0px 0px / ${f.value[0]}px ${f.value[0]}px`,y:`linear-gradient(0deg, ${f.value.valueColor} 1px, transparent 1px) 0px 0px / ${f.value[1]}px ${f.value[1]}px`};return t.showGrid==="x"||t.showGrid==="y"?e[t.showGrid]:t.showGrid?`${e.x}, ${e.y}`:null}),Le=w(()=>t.resizable?t.handles:[]),ke=w(()=>d.value==="auto"&&!q.value?"auto":d.value+"px"),Ae=w(()=>p.value==="auto"&&!J.value?"auto":p.value+"px"),X=g(t.minWidth),Y=g(t.minHeight),y=g(t.maxWidth),x=g(t.maxHeight),ie=w(()=>Boolean(z.value)&&(z.value.includes("l")||z.value.includes("r"))),me=w(()=>Boolean(z.value)&&(z.value.includes("t")||z.value.includes("b"))),Q=()=>{c.value={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},v.value={minLeft:null,maxLeft:null,minRight:null,maxRight:null,minTop:null,maxTop:null,minBottom:null,maxBottom:null}},Xe=()=>{if(T.value){const[e,u]=ce();M.value=e,N.value=u,i.value=M.value-d.value-o.value,m.value=N.value-p.value-s.value}},ce=()=>{if(T.value){const e=typeof T.value=="string"?S.value.closest(T.value):S.value.parentNode;U.value=e;const u=window.getComputedStyle(e,null);return[parseInt(u.getPropertyValue("width"),10),parseInt(u.getPropertyValue("height"),10)]}return[null,null]},fe=()=>{if(T.value&&t.showGrid){if(!U.value){const e=typeof e.value=="string"?S.value.closest(e.value):S.value.parentNode;U.value=e}U.value.style.background=He.value}},Ye=e=>{B=b.touch,de(e)},Ce=e=>{B=b.mouse,de(e)},de=e=>{if(e instanceof MouseEvent&&e.which!==1)return;const u=e.target||e.srcElement;if(S.value.contains(u)){if(t.onDragStart(e)===!1)return;if(t.dragHandle&&!Me(u,t.dragHandle,S.value)||t.dragCancel&&Me(u,t.dragCancel,S.value)){P.value=!1;return}H.value||(H.value=!0,n("activated")),t.draggable&&(K.value=!0),c.value.mouseX=e.touches?e.touches[0].pageX:e.pageX,c.value.mouseY=e.touches?e.touches[0].pageY:e.pageY,c.value.left=o.value,c.value.right=i.value,c.value.top=s.value,c.value.bottom=m.value,T.value&&(v.value=Z()),C(document.documentElement,B.move,We),C(document.documentElement,B.stop,he)}},Z=()=>({minLeft:o.value%f.value[0],maxLeft:Math.floor((M.value-d.value-o.value)/f.value[0])*f.value[0]+o.value,minRight:i.value%f.value[0],maxRight:Math.floor((M.value-d.value-i.value)/f.value[0])*f.value[0]+i.value,minTop:s.value%f.value[1],maxTop:Math.floor((N.value-p.value-s.value)/f.value[1])*f.value[1]+s.value,minBottom:m.value%f.value[1],maxBottom:Math.floor((N.value-p.value-m.value)/f.value[1])*f.value[1]+m.value}),pe=e=>{const u=e.target||e.srcElement,l=new RegExp(t.className+"-([trmbl]{2})","");(!S.value||!S.value.contains(u)&&!l.test(u.className))&&(H.value&&!t.preventDeactivation&&(H.value=!1,n("deactivated")),Ne(document.documentElement,B.move,O)),Q()},Ee=(e,u)=>{B=b.touch,ge(e,u)},ge=(e,u)=>{u instanceof MouseEvent&&u.which!==1||t.onResizeStart(e,u)!==!1&&(u.stopPropagation&&u.stopPropagation(),t.lockAspectRatio&&!e.includes("m")?z.value="m"+e.substring(1):z.value=e,se.value=!0,c.value.mouseX=u.touches?u.touches[0].pageX:u.pageX,c.value.mouseY=u.touches?u.touches[0].pageY:u.pageY,c.value.left=o.value,c.value.right=i.value,c.value.top=s.value,c.value.bottom=m.value,v.value=_(),C(document.documentElement,B.move,O),C(document.documentElement,B.stop,he))},_=()=>{const[e,u]=f.value;t.lockAspectRatio&&(X.value/Y.value>h.value?Y.value=X.value/h.value:X.value=h.value*Y.value,y.value&&x.value?(y.value=Math.min(y.value,h.value*x.value),x.value=Math.min(x.value,y.value/h.value)):y.value?x.value=y.value/h.value:x.value&&(y.value=h.value*x.value)),y.value=y.value-y.value%e,x.value=x.value-x.value%u;const l={minLeft:null,maxLeft:null,minTop:null,maxTop:null,minRight:null,maxRight:null,minBottom:null,maxBottom:null};return T.value?(l.minLeft=o.value%e,l.maxLeft=o.value+Math.floor((d.value-X.value)/e)*e,l.minTop=s.value%u,l.maxTop=s.value+Math.floor((p.value-Y.value)/u)*u,l.minRight=i.value%e,l.maxRight=i.value+Math.floor((d.value-X.value)/e)*e,l.minBottom=m.value%u,l.maxBottom=m.value+Math.floor((p.value-Y.value)/u)*u,y.value&&(l.minLeft=Math.max(l.minLeft,M.value-i.value-y.value),l.minRight=Math.max(l.minRight,M.value-o.value-y.value)),x.value&&(l.minTop=Math.max(l.minTop,N.value-m.value-x.value),l.minBottom=Math.max(l.minBottom,N.value-s.value-x.value)),t.lockAspectRatio&&(l.minLeft=Math.max(l.minLeft,o.value-s.value*h.value),l.minTop=Math.max(l.minTop,s.value-o.value/h.value),l.minRight=Math.max(l.minRight,i.value-m.value*h.value),l.minBottom=Math.max(l.minBottom,m.value-i.value/h.value))):(l.minLeft=null,l.maxLeft=o.value+Math.floor((d.value-X.value)/e)*e,l.minTop=null,l.maxTop=s.value+Math.floor((p.value-Y.value)/u)*u,l.minRight=null,l.maxRight=i.value+Math.floor((d.value-X.value)/e)*e,l.minBottom=null,l.maxBottom=m.value+Math.floor((p.value-Y.value)/u)*u,y.value&&(l.minLeft=-(i.value+y.value),l.minRight=-(o.value+y.value)),x.value&&(l.minTop=-(m.value+x.value),l.minBottom=-(s.value+x.value)),t.lockAspectRatio&&y.value&&x.value&&(l.minLeft=Math.min(l.minLeft,-(i.value+y.value)),l.minTop=Math.min(l.minTop,-(x.value+m.value)),l.minRight=Math.min(l.minRight,-o.value-y.value),l.minBottom=Math.min(l.minBottom,-s.value-x.value))),l},We=e=>{L.value?O(e):K.value&&$e(e)},$e=e=>{const u=t.axis&&t.axis!=="y"?c.value.mouseX-(e.touches?e.touches[0].pageX:e.pageX):0,l=t.axis&&t.axis!=="x"?c.value.mouseY-(e.touches?e.touches[0].pageY:e.pageY):0,[r,R]=G(f.value,u,l,t.scale),k=V(c.value.left-r,v.value.minLeft,v.value.maxLeft),W=V(c.value.top-R,v.value.minTop,v.value.maxTop);if(t.onDrag(o,s)===!1)return;const I=V(c.value.right+r,v.value.minRight,v.value.maxRight),j=V(c.value.bottom+R,v.value.minBottom,v.value.maxBottom);o.value=k,s.value=W,i.value=I,m.value=j,n("dragging",o.value,s.value),P.value=!0},Ge=e=>{const[u,l]=G(f.value,e,s.value,1),r=V(u,v.value.minLeft,v.value.maxLeft);o.value=r,i.value=M.value-d.value-r},Fe=e=>{const[u,l]=G(f.value,o.value,e,1),r=V(l,v.value.minTop,v.value.maxTop);s.value=r,m.value=N.value-p.value-r},O=e=>{let u=o.value,l=s.value,r=i.value,R=m.value;const k=c.value.mouseX-(e.touches?e.touches[0].pageX:e.pageX),W=c.value.mouseY-(e.touches?e.touches[0].pageY:e.pageY);!q.value&&k&&(q.value=!0),!J.value&&W&&(J.value=!0);const[I,j]=G(f.value,k,W,t.scale);z.value.includes("b")?(R=V(c.value.bottom+j,v.value.minBottom,v.value.maxBottom),t.lockAspectRatio&&me&&(r=i.value-(m.value-R)*h.value)):z.value.includes("t")&&(l=V(c.value.top-j,v.value.minTop,v.value.maxTop),t.lockAspectRatio&&me&&(u=o.value-(s.value-l)*h.value)),z.value.includes("r")?(r=V(c.value.right+I,v.value.minRight,v.value.maxRight),t.lockAspectRatio&&ie&&(R=m.value-(i.value-r)/h.value)):z.value.includes("l")&&(u=V(c.value.left-I,v.value.minLeft,v.value.maxLeft),t.lockAspectRatio&&ie&&(l=s.value-(o.value-u)/h.value));const ye=ue(M.value,u,r),xe=ne(N.value,l,R);t.onResize(z.value,u,l,ye,xe)!==!1&&(o.value=u,s.value=l,i.value=r,m.value=R,d.value=ye,p.value=xe,n("resizing",o.value,s.value,d.value,p.value),L.value=!0)},Ue=e=>{const[u]=G(f.value,e,0,1);let l=V(M.value-u-o.value,v.value.minRight,v.value.maxRight),r=m.value;t.lockAspectRatio&&(r=m.value-(i.value-l)/h.value);const R=ue(M.value,o.value,l),k=ne(N.value,s.value,r);i.value=l,m.value=r,d.value=R,p.value=k},Oe=e=>{const[u,l]=G(f.value,0,e,1);let r=V(N.value-l-s.value,v.value.minBottom,v.value.maxBottom),R=i.value;t.lockAspectRatio&&(R=i.value-(m.value-r)*h.value);const k=ue(M.value,o.value,R),W=ne(N.value,s.value,r);i.value=R,m.value=r,d.value=k,p.value=W},he=e=>{z.value=null,Q(),K.value=!1,se.value=!1,L.value&&(L.value=!1,n("resizestop",o.value,s.value,d.value,p.value)),P.value&&(P.value=!1,n("dragstop",o.value,s.value)),Ne(document.documentElement,B.move,O)},Ie=()=>{t.activeOnHover&&(H.value=!0)},je=()=>{t.activeOnHover&&!P.value&&(H.value=!1)};return Ke(()=>{Q(),t.enableNativeDrag||(S.value.ondragstart=()=>!1);const[e,u]=ce();M.value=e,N.value=u;const[l,r]=aa(S.value);h.value=(d.value!=="auto"?d.value:l)/(p.value!=="auto"?p.value:r),d.value=d.value!=="auto"?d.value:l,p.value=p.value!=="auto"?p.value:r,i.value=M.value-d.value-o.value,m.value=N.value-p.value-s.value,H.value&&n("activated"),t.showGrid&&fe(),C(document.documentElement,"mousedown",pe),C(document.documentElement,"touchend touchcancel",pe),C(window,"resize",Xe)}),$(()=>t.x,e=>{L.value||P.value||(T.value&&(v.value=Z()),Ge(e))}),$(()=>t.y,e=>{L.value||P.value||(T.value&&(v.value=Z()),Fe(e))}),$(()=>t.lockAspectRatio,e=>{e?h.value=d.value/p.value:h.value=void 0}),$(()=>t.w,e=>{L.value||P.value||(T.value&&(v.value=_()),Ue(e))}),$(()=>t.h,e=>{L.value||P.value||(T.value&&(v.value=_()),Oe(e))}),$(()=>t.showGrid,()=>{fe()}),(e,u)=>(le(),ee("div",{ref_key:"el",ref:S,style:be(A(De)),class:ae([{[a.classNameActive]:A(H),[a.classNameDragging]:P.value,[a.classNameResizing]:L.value,[a.classNameDraggable]:a.draggable,[a.classNameResizable]:a.resizable},a.className]),onMousedown:Ce,onTouchstart:Ye,onMouseover:Ie,onMouseleave:je},[Qe("div",{class:ae("drv-"+a.handlesType)},[(le(!0),ee(Ze,null,_e(A(Le),l=>(le(),ee("div",{key:l,class:ae([a.classNameHandle,a.classNameHandle+"-"+l,a.classNameHandle!=="drv-handle"?"drv-handle":"",a.classNameHandle!=="drv-handle"?"drv-handle-"+l:""]),style:be({display:A(H)?"block":"none"}),onMousedown:Se(r=>ge(l,r),["stop","prevent"]),onTouchstart:Se(r=>Ee(l,r),["stop","prevent"])},[A(oe)["handle-"+l]?te(e.$slots,"handle-"+l,{key:0}):ze("",!0),A(oe)["handle-"+l]?ze("",!0):te(e.$slots,"handle",{key:1})],46,ta))),128))],2),te(e.$slots,"default")],38))}};Ve.__docgenInfo={exportName:"default",displayName:"DraggableResizableVue3",description:"",tags:{},props:[{name:"draggable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"resizable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"x",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"y",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"z",type:{name:"string|number"},defaultValue:{func:!1,value:"'auto'"}},{name:"w",type:{name:"number|string"}},{name:"h",type:{name:"number|string"}},{name:"minWidth",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"minHeight",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"maxWidth",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"maxHeight",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"active",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"preventDeactivation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"activeOnHover",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disableUserSelect",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"enableNativeDrag",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"lockAspectRatio",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"handlesType",type:{name:"string"},defaultValue:{func:!1,value:"'handles'"},values:["handles","borders","custom"]},{name:"handles",type:{name:"array"},defaultValue:{func:!1,value:"['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']"}},{name:"handlesSize",type:{name:"number"},defaultValue:{func:!1,value:"10"}},{name:"dragHandle",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"dragCancel",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"axis",type:{name:"string"},defaultValue:{func:!1,value:"'both'"},values:["x","y","both"]},{name:"grid",type:{name:"array"}},{name:"showGrid",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"},values:[!0,"x","y","both"]},{name:"gridColor",type:{name:"string"},defaultValue:{func:!1,value:"'rgba(0, 0, 0, 0.1)'"}},{name:"parent",type:{name:"boolean|string"},defaultValue:{func:!1,value:"false"}},{name:"scale",type:{name:"number|array"},defaultValue:{func:!1,value:"1"}},{name:"className",type:{name:"string"},defaultValue:{func:!1,value:"'drv'"}},{name:"classNameDraggable",type:{name:"string"},defaultValue:{func:!1,value:"'drv-draggable'"}},{name:"classNameResizable",type:{name:"string"},defaultValue:{func:!1,value:"'drv-resizable'"}},{name:"classNameDragging",type:{name:"string"},defaultValue:{func:!1,value:"'drv-dragging'"}},{name:"classNameResizing",type:{name:"string"},defaultValue:{func:!1,value:"'drv-resizing'"}},{name:"classNameActive",type:{name:"string"},defaultValue:{func:!1,value:"'drv-active'"}},{name:"classNameHandle",type:{name:"string"},defaultValue:{func:!1,value:"'drv-handle'"}},{name:"onDragStart",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onDrag",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onResizeStart",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}},{name:"onResize",type:{name:"func"},defaultValue:{func:!0,value:"() => true"}}],events:[{name:"update:x"},{name:"update:y"},{name:"update:w"},{name:"update:h"},{name:"update:active"},{name:"resizing"},{name:"resizestop"},{name:"dragging"},{name:"dragstop"},{name:"activated"},{name:"deactivated"}],slots:[{name:"default",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"handle"}]};qe.component("DraggableResizableVue",Ve);const va={controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},ra={showPanel:!1};export{ra as options,va as parameters};
//# sourceMappingURL=preview.1422b427.js.map