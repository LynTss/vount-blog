{
    "title": "Vue-waterfall",
    "tags": ["vue","javascript"],
    "date": "2018-01-24",
    "desc": "A Vue directive for waterfall",
    "cover": "waterfall.jpg"
}

![img](./imgs/waterfall-img.png)

# Vue-waterfall

瀑布流渲染方法
```
searchSet () {
    let total1 = Number(this.total1)
    let total2 = Number(this.total2)
    let total3 = Number(this.total3)
    for (let se of this.searchList) {
        let heightMin = Math.min(total1, total2, total3)
        if (heightMin === total1) {
            this.firstList.push(se)
            total1 = total1 + se.imgHeight
        } else if (heightMin === total2) {
            this.secondList.push(se)
            total2 = total2 + se.imgHeight
        } else if (heightMin === total3) {
            this.thirdList.push(se)
            total3 = total3 + se.imgHeight
        }
    }
    this.total1 = total1
    this.total2 = total2
    this.total3 = total3
},
```
高度获取方法

```
// 获取当前滚动高度
getScrollTop () {
    let scrollTop = 0
    if (document.documentElement && 
    document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
        scrollTop = document.body.scrollTop
    }
    return scrollTop
},
// 获取当前可视范围的高度
getClientHeight () {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight){
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
},
// 获取文档完整的高度
getScrollHeight () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
}
```

滚动触发事件
```
window.onscroll = function () {
    if (this.getScrollTop() + this.getClientHeight() >= this.getScrollHeight() - 100) {
        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
            this.searchSet()
        }, 500)
    }
}.bind(this)
```
>在v-for渲染过程中无法用 `$refs` 来获取元素内容