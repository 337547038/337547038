var e=Object.defineProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,s,n)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[s]=n;import{d as r,v as t,z as l,o as c,c as p,I as d}from"./vendor.10f01dac.js";const i=r({components:{},setup(e){const r=[],c=t({});return((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&o(e,t,r[t]);if(a)for(var t of a(r))n.call(r,t)&&o(e,t,r[t]);return e})({toggleCode:e=>{const a="vdpv_"+e;0===c[a+"Height"]?c[a+"Height"]=(r[e].value?r[e].value.offsetHeight:0)||0:c[a+"Height"]=0}},l(c))}});i.$vd={matter:{},toc:[{content:"使用",anchor:"使用",level:1},{content:"全局引入（推荐）",anchor:"全局引入推荐",level:2},{content:"按需引用",anchor:"按需引用",level:2}]};const h=i,u={class:"vuedoc  "},v=d('<h1 id="使用" data-source-line="3"><a class="markdownIt-Anchor" href="#使用">#</a> 使用</h1><p data-source-line="5">基于 Vue3 + Typescript + Vite，用于学习研究，欢迎交流，QQ/微信:337547038</p><p data-source-line="7"><a href="https://337547038.github.io/akvue/">Vue2 版本的请点击这里</a></p><h2 id="全局引入推荐" data-source-line="9"><a class="markdownIt-Anchor" href="#全局引入推荐">#</a> 全局引入（推荐）</h2><p data-source-line="11">在入口页面 main.js 中如下配置：</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code><span class="hljs-keyword">import</span> Component <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../packages/index&#39;</span>\n<span class="hljs-comment">// 全局注册基础组件</span>\nVue.use(Component)\n</code></pre><h2 id="按需引用" data-source-line="19"><a class="markdownIt-Anchor" href="#按需引用">#</a> 按需引用</h2><p data-source-line="21">在当前页面import所需组件</p><pre style="display:none;"></pre><pre class="hljs vuedoc__hljs language-javascript hljs--one-dark"><code><span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;../packages/button.vue&#39;</span>\n</code></pre>',11);h.render=function(e,a,s,n,o,r){return c(),p("div",u,[v])};export default h;
