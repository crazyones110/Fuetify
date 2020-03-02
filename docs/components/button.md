---
title: Button
---

# 按钮

## 使用方法

**预览**

<ClientOnly>
  <button-demos/>
</ClientOnly>

**代码**

```html
<f-button>默认按钮</f-button>
<f-button loading>Loading</f-button>
<f-button disabled>禁用按钮</f-button>
<f-button icon="setting">Loading</f-button>
<f-button icon="setting" icon-position="right">Loading</f-button>
```

## 按钮组

**预览**

<ClientOnly>
  <button-demos-buttongroup/>
</ClientOnly>

**代码**

```html
<f-button-group>
  <f-button>上一个</f-button>
  <f-button>返回首页</f-button>
  <f-button>下一个</f-button>
</f-button-group>
```

**API**

| 参数         | 说明            | 类型    | 默认值 | 必须 | 可选值         |
| ------------ | --------------- | ------- | ------ | ---- | -------------- |
| icon         | button 里的图标 | String  | 无     | 否   | 参考 icon 组件 |
| loading      | 是否有加载图标  | Boolean | false  | 否   |
| iconPosition | icon 的位置     | String  | left   | 否   | left\|right    |
