---
title: Input
---
# 输入框

## 简单用法

**预览**

<ClientOnly>
  <input-demos-simple/>
</ClientOnly>

**代码**

```html
<f-input/>
<f-input value="中文"/>
<f-input value="中文" disabled/>
<f-input value="中文" readonly/>
```

## 双向绑定

**预览**

<ClientOnly>
  <input-demos-v-model/>
</ClientOnly>

**代码**

```js
data() {
  return {
    value: 'Hello World'
  }
}
```
```html
<f-input v-model="value"/>
<div>
  value: {{value}}
</div>
```