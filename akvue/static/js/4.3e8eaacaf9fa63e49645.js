webpackJsonp([4],{"51sW":function(s,a,t){"use strict";function n(){return Math.floor(100*Math.random())}Object.defineProperty(a,"__esModule",{value:!0});var l=[{name:"名称",data:[{name:"Mon",value:n()},{name:"Tue",value:n()},{name:"Wed",value:n()},{name:"Thu",value:n()},{name:"Fri",value:n()},{name:"Sat",value:n()},{name:"Sun",value:n()}]}],v=[{name:"名称1",data:[{name:"Mon",value:n()},{name:"Tue",value:n()},{name:"Wed",value:n()},{name:"Thu",value:n()},{name:"Fri",value:n()},{name:"Sat",value:n()},{name:"Sun",value:n()}]},{name:"名称2",data:[{name:"Mon",value:n()},{name:"Tue",value:n()},{name:"Wed",value:n()},{name:"Thu",value:n()},{name:"Fri",value:n()},{name:"Sat",value:n()},{name:"Sun",value:n()}]}],r={data:function(){return{option2:{color:["blue"],legend:{show:!1},yAxis:{name:"统计图表",axisTick:{show:!1}},xAxis:{}},data1:l,data2:v,option3:{color:["orange"],xAxis:{data:["Mon","Tue","Web","Thu","Fri","Sta","Sun"]},yAxis:{name:"统计图表option"},series:[{data:[820,932,901,934,1290,1330,1320]}]},type:"bar",area:"world"}},methods:{event:function(s){s.on("click",function(s){})},changeData:function(){this.data1=[{name:"名称change",data:[{name:"Mon1",value:n()},{name:"Tue2",value:n()},{name:"Wed3",value:n()},{name:"Thu4",value:n()},{name:"Fri5",value:n()},{name:"Sat6",value:n()},{name:"Sun7",value:n()}]}]}}},_={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Echarts 图形图表")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("div",[t("ak-button",{on:{click:s.changeData}},[s._v("change data")])],1),s._v(" "),t("ak-echarts",{attrs:{data:s.data1,type:"line"}})],1)]],2),s._v(" "),t("p",[s._v("传图表类型type和数据data即可")]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"changeData"')]),s._v(">")]),s._v("change data"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"line"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n     "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data1")]),s._v(": data1\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._v(" "),s._m(5),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("ak-echarts",{attrs:{data:s.data1,type:"line",option:s.option2}})],1)]],2),s._v(" "),t("p",[s._v("配合option传配置")]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data1"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"line"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":option")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"option2"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("option2")]),s._v(": {\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(":["),t("span",{attrs:{class:"hljs-string"}},[s._v("'blue'")]),s._v("],\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("legend")]),s._v(":{"),t("span",{attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(":"),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("},\n              "),t("span",{attrs:{class:"hljs-attr"}},[s._v("yAxis")]),s._v(": {\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'统计图表'")]),s._v(",\n                "),t("span",{attrs:{class:"hljs-attr"}},[s._v("axisTick")]),s._v(": {\n                  "),t("span",{attrs:{class:"hljs-attr"}},[s._v("show")]),s._v(": "),t("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n                }\n              },\n              "),t("span",{attrs:{class:"hljs-attr"}},[s._v("xAxis")]),s._v(": {},\n              "),t("span",{attrs:{class:"hljs-attr"}},[s._v("grid")]),s._v(": {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("left")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'50px'")]),s._v("}\n            },\n     "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data1")]),s._v(": data1\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._v(" "),s._m(6),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("ak-echarts",{attrs:{type:"line",option:s.option3}})],1)]],2),s._v(" "),t("p",[s._v("只传option时，图表数据格式是echarts支持即可，不一定要是data的格式，如这里的"),t("code",[s._v("data: [820, 932, 901, 934, 1290, 1330, 1320]")])]),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"line"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":option")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"option3"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("option3")]),s._v(":{\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(":["),t("span",{attrs:{class:"hljs-string"}},[s._v("'orange'")]),s._v("],\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("xAxis")]),s._v(":{\n             "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(":["),t("span",{attrs:{class:"hljs-string"}},[s._v("'Mon'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'Tue'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'Web'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'Thu'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'Fri'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'Sta'")]),s._v(","),t("span",{attrs:{class:"hljs-string"}},[s._v("'Sun'")]),s._v("]\n            },\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("yAxis")]),s._v(":{"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'统计图表option'")]),s._v("},\n            "),t("span",{attrs:{class:"hljs-attr"}},[s._v("series")]),s._v(":[{\n               "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": ["),t("span",{attrs:{class:"hljs-number"}},[s._v("820")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("932")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("901")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("934")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("1290")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("1330")]),s._v(", "),t("span",{attrs:{class:"hljs-number"}},[s._v("1320")]),s._v("]\n            }]\n            }\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._v(" "),s._m(7),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("ak-echarts",{attrs:{type:"line",data:s.data2}})],1)]],2),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"line"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data2"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data2")]),s._v(":data2\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._v(" "),s._m(8),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("div",[t("ak-button",{on:{click:function(a){s.type="line"}}},[s._v("line")]),s._v(" "),t("ak-button",{on:{click:function(a){s.type="bar"}}},[s._v("bar")]),s._v(" "),t("ak-button",{on:{click:function(a){s.type="pie"}}},[s._v("pie")]),s._v("\n  "+s._s(s.type)+"\n  ")],1),s._v(" "),t("ak-echarts",{attrs:{type:s.type,data:s.data1}})],1)]],2),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"type='line'\"")]),s._v(">")]),s._v("line"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"type='bar'\"")]),s._v(">")]),s._v("bar"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"type='pie'\"")]),s._v(">")]),s._v("pie"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n  {{type}}\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"type"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"data1"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'bar'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data2")]),s._v(":data1\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._v(" "),s._m(9),s._v(" "),t("demo-block",[t("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[[t("div",[t("div",[t("ak-button",{on:{click:function(a){s.area="world"}}},[s._v("世界")]),s._v(" "),t("ak-button",{on:{click:function(a){s.area="china"}}},[s._v("中国")]),s._v(" "),t("ak-button",{on:{click:function(a){s.area="guangdong"}}},[s._v("广东")]),s._v(" "),t("ak-button",{on:{click:function(a){s.area="440100"}}},[s._v("广州")])],1),s._v(" "),t("ak-echarts",{attrs:{type:"map",area:s.area}})],1)]],2),s._v(" "),t("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"area='world'\"")]),s._v(">")]),s._v("世界"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"area='china'\"")]),s._v(">")]),s._v("中国"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"area='guangdong'\"")]),s._v(">")]),s._v("广东"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v("\"area='440100'\"")]),s._v(">")]),s._v("广州"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-button")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"map"')]),s._v(" "),t("span",{attrs:{class:"hljs-attr"}},[s._v(":area")]),s._v("="),t("span",{attrs:{class:"hljs-string"}},[s._v('"area"')]),s._v(">")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("ak-echarts")]),s._v(">")]),s._v("\n  "),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("type")]),s._v(":"),t("span",{attrs:{class:"hljs-string"}},[s._v("'bar'")]),s._v(",\n      "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data2")]),s._v(":data1\n    }\n  }\n}\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n\n")])])])]),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),s._v(" "),s._m(14)],1)},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("echarts.js通过html页引入")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("将data作为单独参数，1.是为了统一数据格式，方便在不同的图表间切换；2.可从数据里自动提取x轴所需数据；3.提取图例")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("当没使用data参数时，只是简单的将option和组件初始的值合并")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("blockquote",[a("p",[this._v("实际使用可在组件里修改公共配置，通过data传值就即")])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95","aria-hidden":"true"}},[this._v("¶")]),this._v(" 基础用法")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"%E4%BF%AE%E6%94%B9%E4%B8%AA%E6%80%A7%E9%85%8D%E7%BD%AE"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E4%BF%AE%E6%94%B9%E4%B8%AA%E6%80%A7%E9%85%8D%E7%BD%AE","aria-hidden":"true"}},[this._v("¶")]),this._v(" 修改个性配置")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"%E9%80%9A%E8%BF%87option%E4%BC%A0data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E9%80%9A%E8%BF%87option%E4%BC%A0data","aria-hidden":"true"}},[this._v("¶")]),this._v(" 通过option传data")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"%E5%A4%9A%E7%BB%B4%E6%95%B0%E6%8D%AE"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%A4%9A%E7%BB%B4%E6%95%B0%E6%8D%AE","aria-hidden":"true"}},[this._v("¶")]),this._v(" 多维数据")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"%E5%85%B6%E5%AE%83"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%85%B6%E5%AE%83","aria-hidden":"true"}},[this._v("¶")]),this._v(" 其它")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"%E5%9C%B0%E5%9B%BE"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E5%9C%B0%E5%9B%BE","aria-hidden":"true"}},[this._v("¶")]),this._v(" 地图")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("¶")]),this._v(" API")])},function(){var s=this.$createElement,a=this._self._c||s;return a("h3",{attrs:{id:"echarts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#echarts","aria-hidden":"true"}},[this._v("¶")]),this._v(" ECharts")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("type")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("图表类型")])]),s._v(" "),t("tr",[t("td",[s._v("width")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("图表显示的宽，一般可通过样式设置")])]),s._v(" "),t("tr",[t("td",[s._v("height")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("图表显示的高，一般可通过样式设置")])]),s._v(" "),t("tr",[t("td",[s._v("data")]),s._v(" "),t("td",[s._v("Array")]),s._v(" "),t("td",[s._v("图表数据，格式请查看下面的演示数据")])]),s._v(" "),t("tr",[t("td",[s._v("option")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td",[s._v("图表配置，图表数据也可通过option传，跟data选其中一种方式即可")])]),s._v(" "),t("tr",[t("td",[s._v("xAxisAuto")]),s._v(" "),t("td",[s._v("Boolean/true")]),s._v(" "),t("td",[s._v("是否自动提取x轴字段，且data为真时")])]),s._v(" "),t("tr",[t("td",[s._v("event")]),s._v(" "),t("td",[s._v("Function")]),s._v(" "),t("td",[s._v("返回实例")])]),s._v(" "),t("tr",[t("td",[s._v("area")]),s._v(" "),t("td",[s._v("String")]),s._v(" "),t("td",[s._v("地图区域。仅当type=map时有效，世界(world)，中国(china)，省市时对应json的名称，即对应地图文件名")])])])])},function(){var s=this.$createElement,a=this._self._c||s;return a("h2",{attrs:{id:"%E6%BC%94%E7%A4%BA%E6%95%B0%E6%8D%AE"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#%E6%BC%94%E7%A4%BA%E6%95%B0%E6%8D%AE","aria-hidden":"true"}},[this._v("¶")]),this._v(" 演示数据")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{attrs:{"v-pre":"",class:"language-html"}},[t("span",{attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{attrs:{class:"javascript"}},[s._v("\n"),t("span",{attrs:{class:"hljs-function"}},[t("span",{attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" "),t("span",{attrs:{class:"hljs-title"}},[s._v("random")]),s._v(" ("),t("span",{attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n  "),t("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".floor("),t("span",{attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random() * "),t("span",{attrs:{class:"hljs-number"}},[s._v("100")]),s._v(")\n}\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 一维数据")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data1 = [\n  {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'名称'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Mon'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'80'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Tue'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'932'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Wed'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'901'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Thu'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'934'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Fri'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'1290'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Sat'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'1330'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Sun'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'990'")]),s._v("}\n    ]\n  }\n]\n"),t("span",{attrs:{class:"hljs-comment"}},[s._v("// 多维数据")]),s._v("\n"),t("span",{attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" data2 = [\n  {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'名称1'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Mon'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'80'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Tue'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'932'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Wed'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'901'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Thu'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'934'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Fri'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'1290'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Sat'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'1330'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Sun'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'990'")]),s._v("}\n    ]\n  },\n  {\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'名称2'")]),s._v(",\n    "),t("span",{attrs:{class:"hljs-attr"}},[s._v("data")]),s._v(": [\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Mon'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'80'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Tue'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'932'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Wed'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'901'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Thu'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'934'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Fri'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'1290'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Sat'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'1330'")]),s._v("},\n      {"),t("span",{attrs:{class:"hljs-attr"}},[s._v("name")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'Sun'")]),s._v(", "),t("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),t("span",{attrs:{class:"hljs-string"}},[s._v("'990'")]),s._v("}\n    ]\n  }\n]\n")]),t("span",{attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])}]};var e=t("VU/8")(r,_,!1,function(s){t("8bSr")},null,null);a.default=e.exports},"8bSr":function(s,a,t){var n=t("k30+");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("09d06517",n,!0,{})},"k30+":function(s,a,t){(s.exports=t("FZ+f")(!1)).push([s.i,".ak-echarts{width:100%;height:350px}",""])},zrhq:function(s,a,t){s.exports=t("51sW")}});