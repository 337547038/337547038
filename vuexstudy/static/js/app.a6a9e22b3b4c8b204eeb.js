webpackJsonp([1],{"7kji":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},a=s("VU/8")({name:"App"},n,!1,null,null,null).exports,i=s("/ocq"),v={render:function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{staticClass:"dialog"},[this._v("dialog")]):this._e()},staticRenderFns:[]};var r={name:"HelloWorld",data:function(){return{showDialog:!1}},components:{vDialog:s("VU/8")({name:"dia",data:function(){return{}},props:["show"],components:{},methods:{},computed:{},mounted:function(){},filters:{}},v,!1,function(t){s("7kji")},null,null).exports}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"demo"},[s("h1",[t._v("在vue-cli中使用vuex学习笔记")]),t._v(" "),s("div",[s("p",[t._v("示例以一个对话框为例子，首先新增dialog.vue组件，代码如下")]),t._v(" "),s("pre",[t._v('<template>\n    <div class="dialog" v-if="show">dialog content</div>\n</template>\n<script>\n    export default {\n        data () {\n            return {}\n        },\n        props: [\'show\'],\n    }\n<\/script>')]),t._v(" "),s("p",[t._v("很简单的一个例子，通过参数show来显示或隐藏")]),t._v(" "),s("p",[t._v("正常情况我们都这么使用：")]),t._v(" "),s("pre",[t._v('<dialog :show="showDialog"></dialog>\n<a href="javascript:;" @click="showDialog=true">点击显示</a>')]),t._v(" "),s("p",[t._v("点击a标签是就能够显示了")]),t._v(" "),s("vDialog",{attrs:{show:t.showDialog}}),t._v(" "),s("p",[s("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.showDialog=!0}}},[t._v("点击显示")])])],1),t._v(" "),s("div",[s("h2",[t._v("安装、使用vuex")]),t._v(" "),s("p",[t._v("首先是在开发环境中安装vuex")]),t._v(" "),s("pre",[t._v("npm install vuex --save")]),t._v(" "),s("p",[t._v("根据官方推荐的写法，当然也是为了团队成员和便于日后的维护，更容易让团队成员看清楚明白。")]),t._v(" "),s("p",[t._v("2.在src下新建文件夹store，然后分别新建文件index.js，getters.js，mutations.js，mutation-types.js，action.js；")]),t._v(" "),s("p",[t._v("3.index.js作为入口，代码如下：")]),t._v(" "),s("pre",[t._v("import Vue from 'vue'\nimport vuex from 'vuex'\nimport mutations from './mutations'\nimport getters from './getters'\nimport actions from './actions'\nVue.use(vuex);\nexport default new vuex.Store({\n    state:{\n        show:false//定义一个变量\n    },\n    getters,\n    mutations,\n    actions\n})")]),t._v(" "),s("p",[t._v("相应的，在实例化Vue对象时加入store对象，将main.js里的代码修改2个地方如下：")]),t._v(" "),s("pre",[t._v("import store from './store' //1.import进来\nnew Vue({\n  el: '#app',\n  router,\n  store,//2.使用store\n  template: '<App/>',\n  components: { App }\n})")]),t._v(" "),s("p",[t._v("完成以上步骤，就可以在页面中通过 $store.state.show （要使用双大括号）输入前面设置的show了，值为："+t._s(t.$store.state.show))]),t._v(" "),s("pre",[t._v("{ { $store.state.show } }")]),t._v(" "),s("p",[t._v("或者是在mounted里使用 this.$store.state.show 输出")]),t._v(" "),s("pre",[t._v("            mounted(){\n            console.log(this.$store.state.show);\n            }")]),t._v(" "),s("p",[t._v("到这里为止，已经能够设置和输出相对应的值了，如果我们要将show的值修改成true，那该怎么办？这个时候就该到mutations出场了。")])]),t._v(" "),s("div",[s("h2",[t._v("Mutations")]),t._v(" "),s("p",[t._v("官方文档是这么说的：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type)\n                和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数")]),t._v(" "),s("p",[t._v("1.在mutations.js加入如下代码")]),t._v(" "),s("pre",[t._v("switch_dialog(state){//这里的state对应着上面index.js里的state\n        state.show = !state.show;\n        //你还可以在这里执行其他的操作改变state\n    }")]),t._v(" "),s("p",[t._v("使用 $store.commit('switch_dialog') 来触发 mutations 中的 switch_dialog 方法。")]),t._v(" "),s("p",[t._v("将示例修改如下：")]),t._v(" "),s("pre",[t._v('<vDialog :show="$store.state.show"></vDialog>\n<a href="javascript:;" @click="$store.commit(\'switch_dialog\')">点击显示</a>')]),t._v(" "),s("p",[s("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.$store.commit("switch_dialog")}}},[t._v("点击显示/隐藏")])]),t._v(" "),s("vDialog",{attrs:{show:t.$store.state.show}}),t._v(" "),s("p",[t._v("这里需要注意的是：")]),t._v(" "),s("p",[t._v("mutations 中的方法是不分组件的，$store.commit('switch_dialog') 会执行所有的 switch_dialog 方法")]),t._v(" "),s("h3",[t._v("使用常量替代 Mutation 事件类型")]),t._v(" "),s("p",[t._v("官方文档这么说：")]),t._v(" "),s("p",[t._v("使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的\n                mutation 一目了然。用不用常量取决于你——在需要多人协作的大型项目中，这会很有帮助。但如果你不喜欢，你完全可以不这样做")]),t._v(" "),s("p",[t._v("mutation-types.js加入代码：")]),t._v(" "),s("pre",[t._v("export const SWITCH_DIALOG = 'switch_dialog'\nexport const SOME_MUTATION = 'SOME_MUTATION'")]),t._v(" "),s("p",[t._v("mutation中引入mutation-types后，原来mutation中的switch_dialog方法就可以修改成")]),t._v(" "),s("pre",[t._v("[SWITCH_DIALOG](state){//这里的state对应着上面这个state\n        state.show = !state.show;\n        //你还可以在这里执行其他的操作改变state\n    }")])],1),t._v(" "),s("div",[s("h2",[t._v("Action")]),t._v(" "),s("p",[t._v("Action 类似于 mutation，不同在于：")]),t._v(" "),s("p",[t._v("1.Action 提交的是 mutation，而不是直接变更状态。")]),t._v(" "),s("p",[t._v("2.Action 可以包含任意异步操作。")]),t._v(" "),s("p",[t._v("在action.js中加入如下代码：")]),t._v(" "),s("pre",[t._v("switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法\n        context.commit('switch_dialog');\n        //你还可以在这里触发其他的mutations方法\n    }")]),t._v(" "),s("p",[t._v("使用 $store.dispatch('switch_dialog') 来触发 action 中的 switch_dialog 方法")]),t._v(" "),s("p",[s("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.$store.dispatch("switch_dialog")}}},[t._v("点击显示/隐藏")])])]),t._v(" "),s("div",[s("h2",[t._v("Getters")]),t._v(" "),s("p",[t._v("getters 和 vue 中的 computed 类似 , 都是用来计算 state 然后生成新的数据 ( 状态 ) 的。")]),t._v(" "),s("p",[t._v("假如我们需要一个与状态 show 刚好相反的状态 , 使用 vue 中的 computed 可以这样算出来：")]),t._v(" "),s("pre",[t._v("computed(){\n    hide(){\n        return !this.$store.state.show;\n    }\n}")]),t._v(" "),s("p",[t._v("换成getters，我们可以这么写，在getters.js中写入如下代码：")]),t._v(" "),s("pre",[t._v("hide(state){//这里的state对应着上面这个state\n        return !state.show;\n    }")]),t._v(" "),s("p",[t._v("我们在组件中使用 $store.state.show 来获得状态 show , 类似的 , 我们可以使用 $store.getters.hide 来获得状态 hide\n                。值为："+t._s(t.$store.getters.hide))]),t._v(" "),s("p",[t._v("注意 : $store.getters.hide 的值是不能直接修改的 , 需要对应的 state 发生变化才能修改。")])]),t._v(" "),s("div",[s("h2",[t._v("Modules")]),t._v(" "),s("p",[t._v("\n                前面我们在index.js里设置的show，无论是在哪个组件都是可以使用到$store.state.show，如果组件多了，状态也多了；这么一来所有的状态都在store文件下的index.js不好维护怎么办？")]),t._v(" "),s("p",[t._v("我们可以使用 vuex 的 modules , 将组件的store分开来，如新建一个文件dialog_store.js")]),t._v(" "),s("pre",[t._v("export default {\n    state:{\n        show:false\n    }\n}")]),t._v(" "),s("p",[t._v("然后在index.js里引入，添加modules内容")]),t._v(" "),s("pre",[t._v("export default new vuex.Store({\n    modules: {\n        dialog: dialog_store\n    }\n})")]),t._v(" "),s("p",[t._v("完成以上修改时，我们将之前我们使用的 $store.state.show 改为 $store.state.dialog.show 即可。值为："+t._s(t.$store.state.dialog.show))])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h2",[t._v("mapState、mapGetters、mapActions")]),t._v(" "),s("p",[t._v("很多时候 , $store.state.dialog.show 、$store.dispatch('switch_dialog') 这种写法又长又臭 , 很不方便 , 我们没使用 vuex 的时候 , 获取一个状态只需要 this.show , 执行一个方法只需要 this.switch_dialog 就行了 , 使用 vuex 使写法变复杂了 ?")]),t._v(" "),s("p",[t._v("使用 mapState、mapGetters、mapActions 就不会这么复杂了。")]),t._v(" "),s("pre",[t._v("import {mapState} from 'vuex';\nexport default {\n  computed:{\n    //这里的三点叫做 : 扩展运算符\n    ...mapState({\n      show:state=>state.dialog.show\n    }),\n  }\n}")]),t._v(" "),s("p",[t._v("相当于：")]),t._v(" "),s("pre",[t._v("import {mapState} from 'vuex';\nexport default {\n  computed:{\n    show(){\n        return this.$store.state.dialog.show;\n    }\n  }\n}")]),t._v(" "),s("p",[t._v("mapGetters、mapActions 和 mapState 类似 , mapGetters 一般也写在 computed 中 , mapActions 一般写在 methods 中")])])}]};var p=s("VU/8")(r,_,!1,function(t){s("Q6CR")},null,null).exports;o.a.use(i.a);var u=new i.a({routes:[{path:"/",name:"HelloWorld",component:p}]}),c=s("NYxO"),h=s("bOdI"),l=s.n(h)()({},"switch_dialog",function(t){t.show=!t.show});o.a.use(c.a);var d=new c.a.Store({state:{show:!1},getters:{hide:function(t){return!t.show}},mutations:l,actions:{switch_dialog:function(t){t.commit("switch_dialog")}},modules:{dialog:{state:{show:!1}}}});o.a.config.productionTip=!1,new o.a({el:"#app",router:u,store:d,components:{App:a},template:"<App/>"})},Q6CR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a6a9e22b3b4c8b204eeb.js.map