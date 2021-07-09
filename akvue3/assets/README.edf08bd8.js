var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{r as c,a as o,o as d,c as h,b as r,F as i,w as v,f as u,t as j,d as g,y as m,A as w,L as _}from"./vendor.a13852a4.js";const f={setup:()=>({switch1:c(!1),switch2:c(!0)})};f.render=function(s,a,n,l,t,e){const p=o("ak-switch");return d(),h(i,null,[r("p",null,[r(p,{modelValue:l.switch1,"onUpdate:modelValue":a[1]||(a[1]=s=>l.switch1=s)},null,8,["modelValue"])]),r("p",null,[r(p,{modelValue:l.switch2,"onUpdate:modelValue":a[2]||(a[2]=s=>l.switch2=s)},null,8,["modelValue"])])],64)};const k={setup:()=>({switch3:c(!1)})},y=u("开"),b=u("关");k.render=function(s,a,n,l,t,e){const p=o("ak-switch");return d(),h(p,{modelValue:l.switch3,"onUpdate:modelValue":a[1]||(a[1]=s=>l.switch3=s)},{open:v((()=>[y])),close:v((()=>[b])),_:1},8,["modelValue"])};const q={setup:()=>({switch4:c(!1),switch5:c(!0)})};q.render=function(s,a,n,l,t,e){const p=o("ak-switch");return d(),h(i,null,[r("p",null,[r(p,{modelValue:l.switch4,"onUpdate:modelValue":a[1]||(a[1]=s=>l.switch4=s),disabled:!0},null,8,["modelValue"])]),r("p",null,[r(p,{modelValue:l.switch5,"onUpdate:modelValue":a[2]||(a[2]=s=>l.switch5=s),disabled:!0},null,8,["modelValue"])])],64)};const V={setup:()=>({switch6:c(!0)})};V.render=function(s,a,n,l,t,e){const p=o("ak-switch");return d(),h("p",null,[u(j(l.switch6)+" ",1),r(p,{modelValue:l.switch6,"onUpdate:modelValue":a[1]||(a[1]=s=>l.switch6=s),"close-color":"#999","active-color":"red"},null,8,["modelValue"])])};const x={setup:()=>({switch7:c("a")})};x.render=function(s,a,n,l,t,e){const p=o("ak-switch");return d(),h("p",null,[u(j(l.switch7)+" ",1),r(p,{modelValue:l.switch7,"onUpdate:modelValue":a[1]||(a[1]=s=>l.switch7=s),"close-value":"a","active-value":"b"},null,8,["modelValue"])])};const H=g({components:{vdpv_0:f,vdpv_1:k,vdpv_2:q,vdpv_3:V,vdpv_4:x},setup(s){const o=c(),d=c(),h=c(),r=c(),i=c(),v=[o,d,h,r,i],u=m({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return j=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))e.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===u[a+"Height"]?u[a+"Height"]=(v[s].value?v[s].value.offsetHeight:0)||0:u[a+"Height"]=0}},w(u)),a(j,n({vdpv_0Ref:o,vdpv_1Ref:d,vdpv_2Ref:h,vdpv_3Ref:r,vdpv_4Ref:i}));var j}});H.$vd={matter:{},toc:[{content:"Switch 开关",anchor:"switch-开关",level:1},{content:"基本用法",anchor:"基本用法",level:3},{content:"自定显示文本",anchor:"自定显示文本",level:3},{content:"禁用",anchor:"禁用",level:3},{content:"设置开关状态时的颜色",anchor:"设置开关状态时的颜色",level:3},{content:"设置开关状态时的值",anchor:"设置开关状态时的值",level:3},{content:"API",anchor:"api",level:2},{content:"Switch",anchor:"switch",level:3},{content:"Switch Event",anchor:"switch-event",level:3},{content:"Switch Slot",anchor:"switch-slot",level:3}]};const C=H,S={class:"vuedoc  "},A=_('<h1 id="switch-开关" data-source-line="3"><a class="markdownIt-Anchor" href="#switch-开关">#</a> Switch 开关</h1><h3 id="基本用法" data-source-line="5"><a class="markdownIt-Anchor" href="#基本用法">#</a> 基本用法</h3><pre style="display:none;"></pre>',3),I={class:"vuedoc-demo "},R={class:"vuedoc-demo__inner"},O={class:"vuedoc-demo__preview"},P={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},U=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch1 = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> switch2 = ref(<span class="hljs-literal">true</span>)\n    <span class="hljs-keyword">return</span> {\n      switch1,\n      switch2\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),E=r("h3",{id:"自定显示文本","data-source-line":"33"},[r("a",{class:"markdownIt-Anchor",href:"#自定显示文本"},"#"),u(" 自定显示文本")],-1),D=r("pre",{style:{display:"none"}},null,-1),F={class:"vuedoc-demo "},L={class:"vuedoc-demo__inner"},$={class:"vuedoc-demo__preview"},z={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},B=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch3&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">open</span>&gt;</span>开<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">close</span>&gt;</span>关<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">ak-switch</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch3 = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">return</span> {\n      switch3\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),G=r("h3",{id:"禁用","data-source-line":"56"},[r("a",{class:"markdownIt-Anchor",href:"#禁用"},"#"),u(" 禁用")],-1),J=r("pre",{style:{display:"none"}},null,-1),K={class:"vuedoc-demo "},M={class:"vuedoc-demo__inner"},N={class:"vuedoc-demo__preview"},Q={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},T=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch4&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch5&quot;</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">&quot;true&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch4 = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> switch5 = ref(<span class="hljs-literal">true</span>)\n    <span class="hljs-keyword">return</span> {\n      switch4,\n      switch5\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1),W=r("h3",{id:"设置开关状态时的颜色","data-source-line":"85"},[r("a",{class:"markdownIt-Anchor",href:"#设置开关状态时的颜色"},"#"),u(" 设置开关状态时的颜色")],-1),X=r("p",{"data-source-line":"87"},[r("code",null,"closeColor"),u("设置关闭状态颜色，"),r("code",null,"activeColor"),u("设置打开状态颜色")],-1),Y=r("pre",{style:{display:"none"}},null,-1),Z={class:"vuedoc-demo "},ss={class:"vuedoc-demo__inner"},as={class:"vuedoc-demo__preview"},ns={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},ls=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml">\n<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{switch6}}\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch6&quot;</span> <span class="hljs-attr">close-color</span>=<span class="hljs-string">&quot;#999&quot;</span> <span class="hljs-attr">active-color</span>=<span class="hljs-string">&quot;red&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch6 = ref(<span class="hljs-literal">true</span>)\n    <span class="hljs-keyword">return</span> {\n      switch6\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n\n</span></code></pre></div>',1),ts=r("h3",{id:"设置开关状态时的值","data-source-line":"111"},[r("a",{class:"markdownIt-Anchor",href:"#设置开关状态时的值"},"#"),u(" 设置开关状态时的值")],-1),es=r("p",{"data-source-line":"113"},[r("code",null,"closeValue"),u("设置关闭状态时的值，"),r("code",null,"activeValue"),u("设置打开状态的值，当"),r("code",null,"v-model=activeValue"),u("时选中状态")],-1),ps=r("pre",{style:{display:"none"}},null,-1),cs={class:"vuedoc-demo "},os={class:"vuedoc-demo__inner"},ds={class:"vuedoc-demo__preview"},hs={ref:"vdpv_4Ref",class:"vuedoc-demo__sourceref"},rs=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>{{switch7}}\n    <span class="hljs-tag">&lt;<span class="hljs-name">ak-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;switch7&quot;</span> <span class="hljs-attr">close-value</span>=<span class="hljs-string">&quot;a&quot;</span> <span class="hljs-attr">active-value</span>=<span class="hljs-string">&quot;b&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">import</span> {ref} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> switch7 = ref(<span class="hljs-string">&#39;a&#39;</span>)\n    <span class="hljs-keyword">return</span> {\n      switch7\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),is=_('<h2 id="api" data-source-line="135"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="switch" data-source-line="137"><a class="markdownIt-Anchor" href="#switch">#</a> Switch</h3><table data-source-line="139"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>boolean/false</td><td>指定当前是否选中</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用状态</td></tr><tr><td>closeColor</td><td>String</td><td>设置关闭时颜色值</td></tr><tr><td>activeColor</td><td>String</td><td>设置打开时颜色值</td></tr><tr><td>closeValue</td><td>String</td><td>设置关闭状态时的值</td></tr><tr><td>activeValue</td><td>String</td><td>设置打开状态时的值</td></tr></tbody></table><h3 id="switch-event" data-source-line="148"><a class="markdownIt-Anchor" href="#switch-event">#</a> Switch Event</h3><table data-source-line="150"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table><h3 id="switch-slot" data-source-line="154"><a class="markdownIt-Anchor" href="#switch-slot">#</a> Switch Slot</h3><table data-source-line="156"><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td>自定义显示打开时的内容</td></tr><tr><td>close</td><td>自定义显示关闭时的内容</td></tr></tbody></table>',7);C.render=function(s,a,n,l,t,e){const p=o("vdpv_0"),c=o("vdpv_1"),i=o("vdpv_2"),v=o("vdpv_3"),u=o("vdpv_4");return d(),h("div",S,[A,r("div",I,[r("div",R,[r("div",O,[r(p)]),r("div",{style:{height:s.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[r("div",P,[U],512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(0))},j(s.vdpv_0Height>0?"hidden":"show"),1)])]),E,D,r("div",F,[r("div",L,[r("div",$,[r(c)]),r("div",{style:{height:s.vdpv_1Height+"px"},class:"vuedoc-demo__source"},[r("div",z,[B],512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(1))},j(s.vdpv_1Height>0?"hidden":"show"),1)])]),G,J,r("div",K,[r("div",M,[r("div",N,[r(i)]),r("div",{style:{height:s.vdpv_2Height+"px"},class:"vuedoc-demo__source"},[r("div",Q,[T],512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(2))},j(s.vdpv_2Height>0?"hidden":"show"),1)])]),W,X,Y,r("div",Z,[r("div",ss,[r("div",as,[r(v)]),r("div",{style:{height:s.vdpv_3Height+"px"},class:"vuedoc-demo__source"},[r("div",ns,[ls],512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(3))},j(s.vdpv_3Height>0?"hidden":"show"),1)])]),ts,es,ps,r("div",cs,[r("div",os,[r("div",ds,[r(u)]),r("div",{style:{height:s.vdpv_4Height+"px"},class:"vuedoc-demo__source"},[r("div",hs,[rs],512)],4),r("div",{class:"vuedoc-demo__footer",onClick:a[5]||(a[5]=a=>s.toggleCode(4))},j(s.vdpv_4Height>0?"hidden":"show"),1)])]),is])};export default C;