(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{428:function(t,e,r){"use strict";r.r(e);var a=r(45),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_1-react新手入门"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-react新手入门"}},[t._v("#")]),t._v(" 1. react新手入门")]),t._v(" "),r("p",[t._v("前言：自己刚刚总结的关于react的知识点，比较简单，大家可以粗略看看。")]),t._v(" "),r("h3",{attrs:{id:"一-关于react的一些知识点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-关于react的一些知识点"}},[t._v("#")]),t._v(" 一：关于react的一些知识点")]),t._v(" "),r("h5",{attrs:{id:"_1-jsx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-jsx"}},[t._v("#")]),t._v(" 1，Jsx")]),t._v(" "),r("p",[t._v("所有的html，css都可以写在js中，这就是jsx的用法。")]),t._v(" "),r("h5",{attrs:{id:"_2-生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-生命周期"}},[t._v("#")]),t._v(" 2，生命周期")]),t._v(" "),r("ul",[r("li",[t._v("渲染组件的时候几个过程")])]),t._v(" "),r("ol",[r("li",[t._v("getDefaultProps")]),t._v(" "),r("li",[t._v("getInitialState")]),t._v(" "),r("li",[t._v("componentWillMount // 组件将要被加载之前的操作。如请求数据等")]),t._v(" "),r("li",[t._v("render")]),t._v(" "),r("li",[t._v("componentDidMount(一般在这个阶段各种api的请求等，与redux配合的时候，可以在redux的action获取接口数据。)")])]),t._v(" "),r("ul",[r("li",[t._v("组件存在时候")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("componentWillReceiveProps")]),t._v(" "),r("p",[t._v("// 常用的用法是父组件的props改变了，需要在子组件中通过这个生命周期获得最新的props，然后setState组建的state")])]),t._v(" "),r("li",[r("p",[t._v("shouldComponentUpdate // 组件是否要重新渲染，默认为真。")])]),t._v(" "),r("li",[r("p",[t._v("componentWillUpdate")])]),t._v(" "),r("li",[r("p",[t._v("render")])]),t._v(" "),r("li",[r("p",[t._v("componentDidUpdate")])])]),t._v(" "),r("h5",{attrs:{id:"_3-数据的类型验证-proptypes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据的类型验证-proptypes"}},[t._v("#")]),t._v(" 3，数据的类型验证：PropTypes")]),t._v(" "),r("p",[t._v("用于验证数据的类型是否是满足你的需要,不过我在现有的项目中没有特意的指定数据的propTyoe，因为这些都是前后端约定好的。")]),t._v(" "),r("h5",{attrs:{id:"_4-路由-react-router"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-路由-react-router"}},[t._v("#")]),t._v(" 4，路由（react-router）")]),t._v(" "),r("p",[t._v("这个与vue-router差不多，大家可以看文档。")]),t._v(" "),r("p",[t._v("react-router的中文官网 ： "),r("a",{attrs:{href:"https://link.jianshu.com?t=http%3A%2F%2Freact-guide.github.io%2Freact-router-cn%2Fdocs%2FAPI.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文官网"),r("OutboundLink")],1)]),t._v(" "),r("h5",{attrs:{id:"_5-父子之间的传递属性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-父子之间的传递属性"}},[t._v("#")]),t._v(" 5，父子之间的传递属性")]),t._v(" "),r("ul",[r("li",[t._v("没有使用redux，最简单的（props与state）")]),t._v(" "),r("li",[t._v("使用redux（状态管理）: "),r("a",{attrs:{href:"https://link.jianshu.com?t=http%3A%2F%2Fwww.redux.org.cn%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("redux中文官网"),r("OutboundLink")],1),t._v(" (差不多70多行代码)\n"),r("ul",[r("li",[t._v("mobx(相对于redux较为简单) : "),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fmobx.js.org%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("mobx"),r("OutboundLink")],1),t._v(";")]),t._v(" "),r("li",[t._v("阿里新出的一个框架Mirror : "),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F28643798",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mirror"),r("OutboundLink")],1),t._v(";")])])])]),t._v(" "),r("h5",{attrs:{id:"_6-react中获取真实的dom节点-【ref】"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-react中获取真实的dom节点-【ref】"}},[t._v("#")]),t._v(" 6，react中获取真实的dom节点 【ref】")]),t._v(" "),r("p",[t._v("因为react与vue一样，都是使用vitural-dom，没有处理dom节点，从而大大提高了页面的渲染效率。")]),t._v(" "),r("p",[t._v("当你想要获取真实的dom节点的时候，可以使用ref，具体的使用，可以看阮一峰的react入门，我下面的todolist的demo里面也会涉及到。")]),t._v(" "),r("p",[t._v("不过在你使用无状态组件申明组件的时候，ref在这个组件中是不能使用的。")]),t._v(" "),r("h5",{attrs:{id:"_7-webpack的使用-既grunt-gulp之后的构建工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-webpack的使用-既grunt-gulp之后的构建工具"}},[t._v("#")]),t._v(" 7，webpack的使用，既grunt，gulp之后的构建工具")]),t._v(" "),r("p",[t._v("可以通过webpack安装各种依赖，我使用的最爽的一个就是react-hot-loader，就是热更新，非常好用。不过热更新其他的工具，比如"),r("code",[t._v("browser-sync")]),t._v(",下面是一些文档。")]),t._v(" "),r("ul",[r("li",[t._v("webpack中文官网 ： "),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fwebpack-china.org%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文官网"),r("OutboundLink")],1)]),t._v(" "),r("li",[t._v("webpack的demo(阮一峰)："),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fviviannow%2Fwebpack-ruanyf",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-demo"),r("OutboundLink")],1)])]),t._v(" "),r("h4",{attrs:{id:"_8-react的脚手架工具create-react-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-react的脚手架工具create-react-app"}},[t._v("#")]),t._v(" 8，react的脚手架工具create-react-app")]),t._v(" "),r("p",[t._v("如vue的vue-cli脚手架，"),r("a",{attrs:{href:"https://link.jianshu.com?t=%5Bhttps%3A%2F%2Fgithub.com%2Ffacebookincubator%2Fcreate-react-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-react-app"),r("OutboundLink")],1),t._v("]("),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Ffacebookincubator%2Fcreate-react-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/facebookincubator/create-react-app"),r("OutboundLink")],1),t._v(")，使用以上方法的话，与vue-cli脚手架工具类似")]),t._v(" "),r("h2",{attrs:{id:"二、学习react-我当时的学习路线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、学习react-我当时的学习路线"}},[t._v("#")]),t._v(" 二、学习react（我当时的学习路线）")]),t._v(" "),r("ol",[r("li",[r("h4",{attrs:{id:"第一阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一阶段"}},[t._v("#")]),t._v(" 第一阶段：")]),t._v(" "),r("p",[t._v("学习之前，花费了很多时间去配置"),r("code",[t._v("webpack")]),t._v("，"),r("code",[t._v("react-router")]),t._v("，"),r("code",[t._v("react-hot-loader")]),t._v("，没有使用脚手架。")])]),t._v(" "),r("li",[r("h4",{attrs:{id:"第二阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二阶段"}},[t._v("#")]),t._v(" 第二阶段：")]),t._v(" "),r("p",[t._v("学习基础的react语法，如下面demo中的todolist，但是不涉及到redux（统一状态管理），这个阶段学的特别快。主要是我上面列的一些知识点（jsx，组件之前数据传递，react-router，PropTypes），最主要的就是一个模块化的概念，个人感觉学过vue的，理解模块化，上手应该是蛮快的。")])]),t._v(" "),r("li",[r("h4",{attrs:{id:"第三阶段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三阶段"}},[t._v("#")]),t._v(" 第三阶段：")]),t._v(" "),r("p",[t._v("学习redux，当时是因为组建太多，而数据需要一层一层的传递进去，比较麻烦，就学了redux，讲状态统一管路，在用到的组件直接使用redux调用相应的状态就好了。【这个学习的成本蛮高的，主要是理解，理解了之后使用起来很简单。】")]),t._v(" "),r("p",[t._v("想快速上手的话，可以学习mobx，这个相对于redux更加简单，但对大型系统的话，redux更好，如果你想快速使用redux做项目开发，可以建议使用相关的框架，我上面也提到了，阿里的"),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fpro.ant.design%2Findex-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("ant-design-pro"),r("OutboundLink")],1),t._v("，具体的教程官方都有，这里需要说的一点是，这个框架是配合阿里的redux框架"),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fdvajs%2Fdva",target:"_blank",rel:"noopener noreferrer"}},[t._v("dva"),r("OutboundLink")],1),t._v("使用的。大家有兴趣可以看一下。")])])]),t._v(" "),r("p",[t._v("我自己的一些总结，单单学react是不难的，难的是要和一些工具混合来用，往往这个过程的成本最高。比如使用webpack构建，redux管理状态，"),r("a",{attrs:{href:"https://link.jianshu.com?t=http%3A%2F%2Fwww.redux.org.cn%2F",target:"_blank",rel:"noopener noreferrer"}},[t._v("redux-thunk"),r("OutboundLink")],1),t._v("或者"),r("a",{attrs:{href:"https://link.jianshu.com?t=http%3A%2F%2Fleonshi.com%2Fredux-saga-in-chinese%2Fdocs%2Fapi%2Findex.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("redux-saga"),r("OutboundLink")],1),t._v("来处理异步action。")]),t._v(" "),r("p",[t._v("还有一个很大的趋势就是前端变化很快，拿"),r("code",[t._v("react-router")]),t._v("来说，你做了一个项目，"),r("code",[t._v("react-router@2.0.0")]),t._v("是能完美跑起来的，但是换成了当换成了"),r("code",[t._v("react-router@3.0.0")]),t._v("，基本上就跑不起来了，更何况现在的"),r("code",[t._v("react-router")]),t._v("已经出到4.0，")]),t._v(" "),r("p",[t._v("相应的"),r("code",[t._v("webpack")]),t._v("也是这样，当时一些开发者基于"),r("code",[t._v("webpack1.0")]),t._v("开发的，当webpack升到2.0的时候，"),r("code",[t._v("webpack.config,js")]),t._v("里面的文件要重新配置了。现在"),r("code",[t._v("webpack")]),t._v("已经更新到了3.0。")]),t._v(" "),r("h3",{attrs:{id:"三、关于react的网站"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、关于react的网站"}},[t._v("#")]),t._v(" 三、关于react的网站")]),t._v(" "),r("h5",{attrs:{id:"_1-各个官网-英语好的话-真的推荐去官网看。"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-各个官网-英语好的话-真的推荐去官网看。"}},[t._v("#")]),t._v(" 1，各个官网：英语好的话，真的推荐去官网看。")]),t._v(" "),r("p",[t._v("2， 阮一峰的文档："),r("a",{attrs:{href:"https://link.jianshu.com?t=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2015%2F03%2Freact.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("react的入门"),r("OutboundLink")],1),t._v("，webpack的入门，"),r("a",{attrs:{href:"https://link.jianshu.com?t=http%3A%2F%2Fwww.ruanyifeng.com%2Fblog%2F2016%2F05%2Freact_router.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-router"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("3，react的一些框架和一些轮子：")]),t._v(" "),r("blockquote",[r("p",[t._v("3.1 : 有赞团队 ： "),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fwww.youzanyun.com%2Fzanui%2Freact%2Fguides%2Finstall",target:"_blank",rel:"noopener noreferrer"}},[t._v("zent"),r("OutboundLink")],1),t._v(";(也是一两个月前刚开源的);")]),t._v(" "),r("p",[t._v("3.2 : 蚂蚁金服："),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fant.design%2Fdocs%2Freact%2Fintroduce-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant-dedign"),r("OutboundLink")],1),t._v(" , "),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fmobile.ant.design%2Fdocs%2Freact%2Fintroduce",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant-design-mobile"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fpro.ant.design%2Findex-cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("ant-design-pro"),r("OutboundLink")],1),t._v(";")]),t._v(" "),r("p",[t._v("3.3 : react-weui ："),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fweui%2Freact-weui",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-weui"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("3.4 : react-awesome : "),r("a",{attrs:{href:"https://link.jianshu.com?t=https%3A%2F%2Fgithub.com%2Fenaqx%2Fawesome-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("react-awesome"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("4，一个渐进的学react的demo。")]),t._v(" "),r("p",[t._v("里面基本上涉及到了，react入门的所有涵盖的知识，他都是自己搭的，没有使用脚手架工具。里面也涵盖了webpack的一些配置，对于新手学习蛮好的。")]),t._v(" "),r("h3",{attrs:{id:"四、小案列-自己前段时间写的一些小demo-比较low-大家可以看看"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、小案列-自己前段时间写的一些小demo-比较low-大家可以看看"}},[t._v("#")]),t._v(" 四、小案列（自己前段时间写的一些小demo，比较low，大家可以看看）")])])}),[],!1,null,null,null);e.default=n.exports}}]);