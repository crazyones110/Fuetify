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