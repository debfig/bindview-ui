## 安装包
   ```
   npm i bindview-ui
   ```

## 1. 导入包和使用
```js
import Bindview from "bindview"

// 导入ui
import UI from "../../bindview-ui"
// 导入样式
import "../../bindview-ui/lib/index.less"

// 挂载ui
Bindview.prototype.$addDataMethods('$ui', UI)

new Bindview({
  el: '#App',
  data: {

  },
  node(bv) {
    return bv.$h('div', { class: 'root' }, [
      bv.$h('div', '1'),
      bv.$ui.Button('默认按钮'),
    ])
  },
  methods: {

  },
  life: {
    createDom() {
      console.log(this);
    }
  }
})
```

## 2. bindview-ui 组件
>### 1. Button 组件
>`Button` 组件可以传入一个字符串或一个 `attr` 属性对象
```js
   node(bv) {
    return bv.$h('div', { class: 'root' }, [
      bv.$ui.Button('默认按钮'),
      bv.$ui.Button({val:'默认按钮',calss:'but'}),
    ])
  },
```
