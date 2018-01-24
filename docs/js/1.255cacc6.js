webpackJsonp([1,8],{32:function(t,e,n){t.exports=n.p+"img/waterfall.af766355.jpg"},41:function(t,e,n){t.exports=n(52)},52:function(t,e,n){var l=n(2)(null,n(53),null,null,null);t.exports=l.exports},53:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",[l("p",[t._v('{\n"title": "Vue-waterfall",\n"tags": ["vue","javascript"],\n"date": "2018-01-24",\n"desc": "A Vue directive for waterfall",\n"cover": "waterfall.jpg"\n}')]),t._v(" "),l("p",[l("img",{attrs:{src:n(32),alt:"img"}})]),t._v(" "),l("h1",[t._v("Vue-waterfall")]),t._v(" "),l("p",[t._v("瀑布流渲染方法")]),t._v(" "),l("pre",{pre:!0,attrs:{class:"hljs"}},[l("code",{attrs:{"v-pre":""}},[t._v("searchSet () {\n    let total1 = Number(this.total1)\n    let total2 = Number(this.total2)\n    let total3 = Number(this.total3)\n    for (let se of this.searchList) {\n        let heightMin = Math.min(total1, total2, total3)\n        if (heightMin === total1) {\n            this.firstList.push(se)\n            total1 = total1 + se.imgHeight\n        } else if (heightMin === total2) {\n            this.secondList.push(se)\n            total2 = total2 + se.imgHeight\n        } else if (heightMin === total3) {\n            this.thirdList.push(se)\n            total3 = total3 + se.imgHeight\n        }\n    }\n    this.total1 = total1\n    this.total2 = total2\n    this.total3 = total3\n},\n")])]),t._v(" "),l("p",[t._v("高度获取方法")]),t._v(" "),l("pre",{pre:!0,attrs:{class:"hljs"}},[l("code",{attrs:{"v-pre":""}},[t._v("// 获取当前滚动高度\ngetScrollTop () {\n    let scrollTop = 0\n    if (document.documentElement && \n    document.documentElement.scrollTop) {\n        scrollTop = document.documentElement.scrollTop\n    } else if (document.body) {\n        scrollTop = document.body.scrollTop\n    }\n    return scrollTop\n},\n// 获取当前可视范围的高度\ngetClientHeight () {\n    let clientHeight = 0\n    if (document.body.clientHeight && document.documentElement.clientHeight){\n        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)\n    } else {\n        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)\n    }\n    return clientHeight\n},\n// 获取文档完整的高度\ngetScrollHeight () {\n    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)\n}\n")])]),t._v(" "),l("p",[t._v("滚动触发事件")]),t._v(" "),l("pre",{pre:!0,attrs:{class:"hljs"}},[l("code",{attrs:{"v-pre":""}},[t._v("window.onscroll = function () {\n    if (this.getScrollTop() + this.getClientHeight() >= this.getScrollHeight() - 100) {\n        if (this.timer) {\n            clearTimeout(this.timer)\n        }\n        this.timer = setTimeout(() => {\n            this.searchSet()\n        }, 500)\n    }\n}.bind(this)\n")])]),t._v(" "),l("blockquote",[l("p",[t._v("在v-for渲染过程中无法用 "),l("code",{pre:!0},[t._v("$refs")]),t._v(" 来获取元素内容")])])])}]}}});