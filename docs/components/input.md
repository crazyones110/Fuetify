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
<f-input />
<f-input value="中文" />
<f-input value="中文" disabled />
<f-input value="中文" readonly />
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
<f-input v-model="value" />
<div>
  value: {{value}}
</div>
```

**API**

| 参数     | 说明                 | 类型    | 默认值 | 必须 | 可选值      |
| -------- | -------------------- | ------- | ------ | ---- | ----------- |
| value    | 输入框的值           | String  | 无     | 否   | 任意字符串  |
| readonly | 是否只读             | Boolean | false  | 否   | true\|false |
| disabled | 是否不可用           | Boolean | false  | 否   | true\|false |
| error    | input 提示的错误信息 | String  | 无     | 否   | 任意字符串  |
