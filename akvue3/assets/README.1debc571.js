var s=Object.defineProperty,a=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,p=(a,n,l)=>n in a?s(a,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[n]=l;import{a as c,o as d,c as o,b as h,w as r,f as g,d as u,r as v,v as j,z as i,t as m,H as _}from"./vendor.1eabd6cc.js";const b={},f=g("评论"),k=g("回复");b.render=function(s,a){const n=c("ak-button"),l=c("ak-badge");return d(),o("div",null,[h(l,{value:12},{default:r((()=>[h(n,null,{default:r((()=>[f])),_:1})])),_:1}),h(l,{value:2},{default:r((()=>[h(n,null,{default:r((()=>[k])),_:1})])),_:1})])};const q={methods:{click(s){console.log(s)}}},w=g("回复"),y=g(" 回复 ");q.render=function(s,a,n,l,t,e){const p=c("ak-button"),g=c("ak-badge");return d(),o("div",null,[h(g,{value:220,max:99},{default:r((()=>[h(p,null,{default:r((()=>[w])),_:1})])),_:1}),h(g,{value:220,max:9},{default:r((()=>[y])),_:1})])};const x={methods:{click(s){console.log(s)}}},H=g("回复"),I=g(" 评论 ");x.render=function(s,a,n,l,t,e){const p=c("ak-button"),g=c("ak-badge");return d(),o("div",null,[h(g,{value:220,dot:!0},{default:r((()=>[h(p,null,{default:r((()=>[H])),_:1})])),_:1}),h(g,{value:220,dot:!0},{default:r((()=>[I])),_:1})])};const A={methods:{click(s){console.log(s)}}},C=g("回复"),O=g(" 回复 ");A.render=function(s,a,n,l,t,e){const p=c("ak-button"),g=c("ak-badge");return d(),o("div",null,[h(g,{value:"hot",dot:!0},{default:r((()=>[h(p,null,{default:r((()=>[C])),_:1})])),_:1}),h(g,{value:"new",dot:!0},{default:r((()=>[O])),_:1})])};const R=u({components:{vdpv_0:b,vdpv_1:q,vdpv_2:x,vdpv_3:A},setup(s){const c=v(),d=v(),o=v(),h=v(),r=[c,d,o,h],g=j({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0});return u=((s,a)=>{for(var n in a||(a={}))t.call(a,n)&&p(s,n,a[n]);if(l)for(var n of l(a))e.call(a,n)&&p(s,n,a[n]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===g[a+"Height"]?g[a+"Height"]=(r[s].value?r[s].value.offsetHeight:0)||0:g[a+"Height"]=0}},i(g)),a(u,n({vdpv_0Ref:c,vdpv_1Ref:d,vdpv_2Ref:o,vdpv_3Ref:h}));var u}});R.$vd={matter:{},toc:[{content:"Badge 标记",anchor:"badge-标记",level:1},{content:"基础用法",anchor:"基础用法",level:2},{content:"最大值",anchor:"最大值",level:2},{content:"小圆点",anchor:"小圆点",level:2},{content:"自定义内容",anchor:"自定义内容",level:2},{content:"API",anchor:"api",level:2},{content:"Badge",anchor:"badge",level:3}]};const P=R,B={class:"vuedoc  "},N=_('<h1 id="badge-标记" data-source-line="1"><a class="markdownIt-Anchor" href="#badge-标记">#</a> Badge 标记</h1><h2 id="基础用法" data-source-line="3"><a class="markdownIt-Anchor" href="#基础用法">#</a> 基础用法</h2><pre style="display:none;"></pre>',3),S={class:"vuedoc-demo "},z={class:"vuedoc-demo__inner"},D={class:"vuedoc-demo__preview"},E={ref:"vdpv_0Ref",class:"vuedoc-demo__sourceref"},$=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>评论<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>回复<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n   <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n</span></code></pre></div>',1),F=h("h2",{id:"最大值","data-source-line":"18"},[h("a",{class:"markdownIt-Anchor",href:"#最大值"},"#"),g(" 最大值")],-1),G=h("p",{"data-source-line":"20"},"可自定义最大值，当value为Number时",-1),J=h("pre",{style:{display:"none"}},null,-1),K={class:"vuedoc-demo "},L={class:"vuedoc-demo__inner"},M={class:"vuedoc-demo__preview"},Q={ref:"vdpv_1Ref",class:"vuedoc-demo__sourceref"},T=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;99&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>回复<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;9&quot;</span>&gt;</span>\n        回复\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span> \n   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">methods</span>:{\n    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params">name</span>)</span>{\n      <span class="hljs-built_in">console</span>.log(name)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),U=h("h2",{id:"小圆点","data-source-line":"44"},[h("a",{class:"markdownIt-Anchor",href:"#小圆点"},"#"),g(" 小圆点")],-1),V=h("p",{"data-source-line":"46"},"以红点的形式标注需要关注的内容",-1),W=h("pre",{style:{display:"none"}},null,-1),X={class:"vuedoc-demo "},Y={class:"vuedoc-demo__inner"},Z={class:"vuedoc-demo__preview"},ss={ref:"vdpv_2Ref",class:"vuedoc-demo__sourceref"},as=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:dot</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>回复<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span> \n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;220&quot;</span> <span class="hljs-attr">:dot</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n        评论\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span> \n   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">methods</span>:{\n    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params">name</span>)</span>{\n      <span class="hljs-built_in">console</span>.log(name)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),ns=h("h2",{id:"自定义内容","data-source-line":"70"},[h("a",{class:"markdownIt-Anchor",href:"#自定义内容"},"#"),g(" 自定义内容")],-1),ls=h("p",{"data-source-line":"72"},"自定义显示内容",-1),ts=h("pre",{style:{display:"none"}},null,-1),es={class:"vuedoc-demo "},ps={class:"vuedoc-demo__inner"},cs={class:"vuedoc-demo__preview"},ds={ref:"vdpv_3Ref",class:"vuedoc-demo__sourceref"},os=_('<div class="vuedoc__code "><pre class="hljs vuedoc__hljs language-vue hljs--one-dark"><code><span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n   <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;hot&quot;</span> <span class="hljs-attr">:dot</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">ak-button</span>&gt;</span>回复<span class="hljs-tag">&lt;/<span class="hljs-name">ak-button</span>&gt;</span>\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>\n     <span class="hljs-tag">&lt;<span class="hljs-name">ak-badge</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;new&quot;</span> <span class="hljs-attr">:dot</span>=<span class="hljs-string">&quot;true&quot;</span>&gt;</span>\n        回复\n     <span class="hljs-tag">&lt;/<span class="hljs-name">ak-badge</span>&gt;</span>  \n   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span></span><span class="javascript">\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">methods</span>:{\n    <span class="hljs-function"><span class="hljs-title">click</span>(<span class="hljs-params">name</span>)</span>{\n      <span class="hljs-built_in">console</span>.log(name)\n    }\n  }\n}\n</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</span></code></pre></div>',1),hs=_('<h2 id="api" data-source-line="96"><a class="markdownIt-Anchor" href="#api">#</a> API</h2><h3 id="badge" data-source-line="98"><a class="markdownIt-Anchor" href="#badge">#</a> Badge</h3><table data-source-line="99"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td>String/Number</td><td>显示值</td></tr><tr><td>max</td><td>Number</td><td>最大值，value为Number有效</td></tr><tr><td>dot</td><td>boolean/false</td><td>显示小圆点</td></tr></tbody></table>',3);P.render=function(s,a,n,l,t,e){const p=c("vdpv_0"),r=c("vdpv_1"),g=c("vdpv_2"),u=c("vdpv_3");return d(),o("div",B,[N,h("div",S,[h("div",z,[h("div",D,[h(p)]),h("div",{style:{height:s.vdpv_0Height+"px"},class:"vuedoc-demo__source"},[h("div",E,[$],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[1]||(a[1]=a=>s.toggleCode(0))},m(s.vdpv_0Height>0?"hidden":"show"),1)])]),F,G,J,h("div",K,[h("div",L,[h("div",M,[h(r)]),h("div",{style:{height:s.vdpv_1Height+"px"},class:"vuedoc-demo__source"},[h("div",Q,[T],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[2]||(a[2]=a=>s.toggleCode(1))},m(s.vdpv_1Height>0?"hidden":"show"),1)])]),U,V,W,h("div",X,[h("div",Y,[h("div",Z,[h(g)]),h("div",{style:{height:s.vdpv_2Height+"px"},class:"vuedoc-demo__source"},[h("div",ss,[as],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[3]||(a[3]=a=>s.toggleCode(2))},m(s.vdpv_2Height>0?"hidden":"show"),1)])]),ns,ls,ts,h("div",es,[h("div",ps,[h("div",cs,[h(u)]),h("div",{style:{height:s.vdpv_3Height+"px"},class:"vuedoc-demo__source"},[h("div",ds,[os],512)],4),h("div",{class:"vuedoc-demo__footer",onClick:a[4]||(a[4]=a=>s.toggleCode(3))},m(s.vdpv_3Height>0?"hidden":"show"),1)])]),hs])};export default P;
