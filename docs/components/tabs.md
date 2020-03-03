---
title: Tabs
---

# 标签

## 使用方法

**预览**

<ClientOnly>
  <tabs-demos/>
</ClientOnly>

**代码**

```js
data() {
  return {
    selected: 'home'
  }
}
```

```html
<f-tabs :selected="selected">
  <f-tabs-head>
    <f-tabs-item name="home">首页</f-tabs-item>
    <f-tabs-item name="sports">体育</f-tabs-item>
    <f-tabs-item name="beauty">美女</f-tabs-item>
  </f-tabs-head>
  <f-tabs-body>
    <f-tabs-pane name="home">首页内容</f-tabs-pane>
    <f-tabs-pane name="sports">体育内容</f-tabs-pane>
    <f-tabs-pane name="beauty">美女内容</f-tabs-pane>
  </f-tabs-body>
</f-tabs>
```

**f-tabs API**

| 参数     | 说明                                   | 类型   | 默认值 | 必须 | 可选值 |
| -------- | -------------------------------------- | ------ | ------ | ---- | ------ |
| selected | tab 选中哪个，和 tab-item 的 name 对应 | String | 无     | 否   |

**f-tabs-item API**
| 参数 | 说明 | 类型 | 默认值 | 必须 | 可选值 |
| -------- | ------------------------------------------ | ------ | ------ | ---- | ------ |
| name | tab-item 的唯一标识，和 f-tabs 的 selected 对应 | String | 无 | 是 |

**f-tabs-pane API**
| 参数 | 说明 | 类型 | 默认值 | 必须 | 可选值 |
| -------- | ------------------------------------------ | ------ | ------ | ---- | ------ |
| name | tab-pane 的唯一标识，和 f-tabs 的 selected 对应 | String | 无 | 是 |

::: tip
f-tabs-item和对应的f-tabs-pane的name要相同
:::
