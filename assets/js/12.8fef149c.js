(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{446:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress"}},[s._v("#")]),s._v(" VuePress")]),s._v(" "),a("ul",[a("li",[s._v("官网：https://www.vuepress.cn")]),s._v(" "),a("li",[a("code",[s._v("VuePress")]),s._v(" 是 "),a("code",[s._v("Vue")]),s._v(" 驱动的静态网站生成器")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"一、介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、介绍"}},[s._v("#")]),s._v(" 一、介绍")]),s._v(" "),a("ul",[a("li",[s._v("简洁至上\n"),a("ul",[a("li",[s._v("以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。")])])]),s._v(" "),a("li",[a("code",[s._v("Vue")]),s._v(" 驱动\n"),a("ul",[a("li",[s._v("享受 "),a("code",[s._v("Vue")]),s._v(" + "),a("code",[s._v("webpack")]),s._v(" 的开发体验，可以在 "),a("code",[s._v("Markdown")]),s._v(" 中使用 "),a("code",[s._v("Vue")]),s._v(" 组件，又可以使用 "),a("code",[s._v("Vue")]),s._v(" 来开发自定义主题。")])])]),s._v(" "),a("li",[s._v("高性能\n"),a("ul",[a("li",[a("code",[s._v("VuePress")]),s._v(" 会为每个页面预渲染生成静态的 "),a("code",[s._v("HTML")]),s._v("，同时，每个页面被加载的时候，将作为 "),a("code",[s._v("SPA")]),s._v(" 运行。")])])])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"二、安装-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装-node-js"}},[s._v("#")]),s._v(" 二、安装 "),a("code",[s._v("Node.js")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("VuePress")]),s._v(" 需要 "),a("code",[s._v("Node.js")]),s._v(" >= 8.6")]),s._v(" "),a("li",[s._v("官网：https://nodejs.org")])]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"三、安装-vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、安装-vuepress"}},[s._v("#")]),s._v(" 三、安装 "),a("code",[s._v("VuePress")])]),s._v(" "),a("h3",{attrs:{id:"_1、创建并进入一个新目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建并进入一个新目录"}},[s._v("#")]),s._v(" 1、创建并进入一个新目录")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("mkdir vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("starter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" cd vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("starter\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2、包管理器进行初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、包管理器进行初始化"}},[s._v("#")]),s._v(" 2、包管理器进行初始化")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("yarn init "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm init")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目名称")]),s._v("\nquestion "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("vuepress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目版本")]),s._v("\nquestion "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("version")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目描述")]),s._v("\nquestion description"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目入口")]),s._v("\nquestion entry "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("point")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目存储库，如：git")]),s._v("\nquestion repository url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目作者")]),s._v("\nquestion author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目许可证")]),s._v("\nquestion "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("license")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MIT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目私有属性")]),s._v("\nquestion "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[s._v("根目录会新建一个文件：package.json")])]),s._v(" "),a("h3",{attrs:{id:"_3、将-vuepress-安装为本地依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、将-vuepress-安装为本地依赖"}},[s._v("#")]),s._v(" 3、将 "),a("code",[s._v("VuePress")]),s._v(" 安装为本地依赖")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("yarn add "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("D")]),s._v(" vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\nyarn "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" add vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者：npm install -g vuepress")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4、新建目录和文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、新建目录和文件"}},[s._v("#")]),s._v(" 4、新建目录和文件")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("mkdir docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'# Hello VuePress'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("README")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(".")]),s._v("md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5、package-json-添加配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、package-json-添加配置"}},[s._v("#")]),s._v(" 5、"),a("code",[s._v("package.json")]),s._v(" 添加配置")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_6、本地启动服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、本地启动服务器"}},[s._v("#")]),s._v(" 6、本地启动服务器")]),s._v(" "),a("div",{staticClass:"language-php line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[s._v("yarn docs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run docs:dev")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);