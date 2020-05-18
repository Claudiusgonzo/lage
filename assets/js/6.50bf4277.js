(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{354:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("Your JS repo has gotten large enough that you have turned to using a tool to help you manage multiple packages inside a repository. That's great! However, you realized quickly that the tasks defined inside the workspace have to be run in package dependency order.")]),t._v(" "),a("p",[t._v("Lerna, Rush, wsrun and even pnpm will provide a simple way for you to run npm scripts to be run in a topological order. However, these tools will force you to run your tasks by script name one at a time. For example, all the "),a("code",[t._v("build")]),t._v(" scripts will have to run first. Then all the "),a("code",[t._v("test")]),t._v(" scripts run in the topological order.")]),t._v(" "),a("p",[t._v("This usually means that there are wasted CPU cycles in between "),a("code",[t._v("build")]),t._v(" and "),a("code",[t._v("test")]),t._v(". We can achieve better pipelining the npm scripts if we had a way to say that "),a("code",[t._v("test")]),t._v(" can run as soon as "),a("code",[t._v("build")]),t._v(" are done for the package.")]),t._v(" "),a("p",[a("code",[t._v("lage")]),t._v(' (Norwegian for "make", pronounced law-geh) solves this by providing a terse pipelining syntax. It has many features geared towards speeding up the task runner that we\'ll explore later.')]),t._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),a("p",[a("code",[t._v("lage")]),t._v(" gives you this capability with very little configuration. First, let's install the "),a("code",[t._v("lage")]),t._v(" utility. You can place this in your workspace's root "),a("code",[t._v("package.json")]),t._v(" by running "),a("code",[t._v("yarn add")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("yarn add -D lage\n")])])]),a("p",[t._v("Confirm with "),a("code",[t._v("yarn")]),t._v(" that you are sure to add a package at the root level, you then place a root level script inside the "),a("code",[t._v("package.json")]),t._v(" to run "),a("code",[t._v("lage")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n  "scripts": {\n    "build": "lage build",\n    "test": "lage test"\n  }\n}\n')])])]),a("p",[t._v("Add a configuration file in the root to get started. Create this file at the root "),a("code",[t._v("lage.config.js")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pipeline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Do not worry about the syntax for now. We will go over the configuration file in a coming section. You can now run this command:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ lage test\n")])])]),a("p",[a("code",[t._v("lage")]),t._v(" will detect that you need to run "),a("code",[t._v("build")]),t._v(" steps before "),a("code",[t._v("test")]),t._v("s are run.")])])}),[],!1,null,null,null);e.default=n.exports}}]);