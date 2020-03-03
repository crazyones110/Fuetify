---
title: Grid
---

# 网格

::: warning 提醒
`box-sizing`必须设置为`border-box`
:::

## 24 格网格

**预览**

<ClientOnly>
  <grid-demos/>
</ClientOnly>

**代码**

```html
<f-row class="demoRow">
  <f-col span="8">
    <div class="demoCol">8</div>
  </f-col>
  <f-col span="8">
    <div class="demoCol">8</div>
  </f-col>
  <f-col span="8">
    <div class="demoCol">8</div>
  </f-col>
</f-row>

<f-row class="demoRow">
  <f-col span="6">
    <div class="demoCol">6</div>
  </f-col>
  <f-col span="6">
    <div class="demoCol">6</div>
  </f-col>
  <f-col span="6">
    <div class="demoCol">6</div>
  </f-col>
  <f-col span="6">
    <div class="demoCol">6</div>
  </f-col>
</f-row>

<f-row class="demoRow">
  <f-col span="4">
    <div class="demoCol">4</div>
  </f-col>
  <f-col span="4">
    <div class="demoCol">4</div>
  </f-col>
  <f-col span="4">
    <div class="demoCol">4</div>
  </f-col>
  <f-col span="4">
    <div class="demoCol">4</div>
  </f-col>
  <f-col span="4">
    <div class="demoCol">4</div>
  </f-col>
  <f-col span="4">
    <div class="demoCol">4</div>
  </f-col>
</f-row>

<f-row class="demoRow">
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
</f-row>
```

## 设置 gutter

**预览**

<ClientOnly>
  <grid-demos-gutter/>
</ClientOnly>

**代码**

```html
<f-row class="demoRow" gutter="10">
  <f-col span="8">
    <div class="demoCol">8</div>
  </f-col>
  <f-col span="8">
    <div class="demoCol">8</div>
  </f-col>
  <f-col span="8">
    <div class="demoCol">8</div>
  </f-col>
</f-row>

<f-row class="demoRow" gutter="10">
  <f-col span="6">
    <div class="demoCol">6</div>
  </f-col>
  <f-col span="6">
    <div class="demoCol">6</div>
  </f-col>
  <f-col span="6">
    <div class="demoCol">6</div>
  </f-col>
  <f-col span="6">
    <div class="demoCol">6</div>
  </f-col>
</f-row>
```

## 设置空隙

**预览**

<ClientOnly>
  <grid-demos-offset/>
</ClientOnly>

**代码**

```html
<f-row class="demoRow" gutter="10">
  <f-col span="8">
    <div class="demoCol">8</div>
  </f-col>
  <f-col span="8" offset="8">
    <div class="demoCol">8</div>
  </f-col>
</f-row>
<f-row class="demoRow" gutter="10">
  <f-col span="6" offset="6">
    <div class="demoCol">6</div>
  </f-col>
  <f-col span="6" offset="6">
    <div class="demoCol">6</div>
  </f-col>
</f-row>
<f-row class="demoRow" gutter="10">
  <f-col span="4">
    <div class="demoCol">4</div>
  </f-col>
  <f-col span="4" offset="4">
    <div class="demoCol">4</div>
  </f-col>
  <f-col span="4" offset="8">
    <div class="demoCol">4</div>
  </f-col>
</f-row>
<f-row class="demoRow" gutter="10">
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2" offset="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2" offset="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2" offset="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2">
    <div class="demoCol">2</div>
  </f-col>
  <f-col span="2" offset="2">
    <div class="demoCol">2</div>
  </f-col>
</f-row>
```

**f-row API**

| 参数   | 说明                      | 类型   | 默认值 | 必须 | 可选值              |
| ------ | ------------------------- | ------ | ------ | ---- | ------------------- |
| gutter | 布局之间的间隙，单位是 px | String | 0      | 否   | 任意                |
| align  | 布局内部的 flex 排列方式  | String | left   | 否   | left\|middle\|right |

**f-col API**

| 参数   | 说明                 | 类型   | 默认值 | 必须 | 可选值 |
| ------ | -------------------- | ------ | ------ | ---- | ------ |
| span   | 布局占几格           | String | 无     | 是   | 0-24   |
| offset | 布局左边的间隙占几格 | String | 0      | 否   | 0-24   |

:::tip
布局为24分布局，span + offset 不能大于24
:::