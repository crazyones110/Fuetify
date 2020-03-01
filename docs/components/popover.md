---
title: Popover
---
# 弹出层

## 点击触发

**预览**

<ClientOnly>
  <popover-demos-click/>
</ClientOnly>

**代码**

```html
<f-popover>
  <f-button>上方弹出</f-button>
  <template #content>
    弹出内容
  </template>
</f-popover>
<f-popover position="bottom">
  <f-button>下方弹出</f-button>
  <template #content>
    弹出内容
  </template>
</f-popover>
<f-popover position-"left">
  <f-button>左边弹出</f-button>
  <template #content>
    弹出内容
  </template>
</f-popover>
<f-popover position="right">
  <f-button>右边弹出</f-button>
  <template #content>
    弹出内容
  </template>
</f-popover>
```

## 将触发方式改为 hover

**预览**

<ClientOnly>
  <popover-demos-hover/>
</ClientOnly>

**代码**

```html
<f-popover trigger="hover">
  <f-button>上方弹出</f-button>
  <template #content>
    弹出内容
  </template>
</f-popover>
<f-popover position="bottom" trigger="hover">
  <f-button>下方弹出</f-button>
  <template #content>
    弹出内容
  </template>
</f-popover>
<f-popover position="left" trigger="hover">
  <f-button>左边弹出</f-button>
  <template #content>
    弹出内容
  </template>
</f-popover>
<f-popover position="right" trigger="hover">
  <f-button>右边弹出</f-button>
  <template #content>
    弹出内容
  </template>
</f-popover>
```

## 支持 HTML

**预览**

<ClientOnly>
  <popover-demos-html/>
</ClientOnly>

**代码**

```html
<f-popover>
  <f-button>上方弹出</f-button>
  <template #content>
    <f-input value="hello world"/>
    <br>
    <f-button>确定</f-button>
  </template>
</f-popover>
```

## 提供了关闭的接口

**预览**

<ClientOnly>
  <popover-demos-close/>
</ClientOnly>

**代码**

```html
<f-popover>
  <f-button>上方弹出</f-button>
  <template #content="{ close }">
    <f-input value="hello world"/>
    <br>
    <f-button>确定</f-button>
    <f-button @click="close">关闭</f-button>
  </template>
</f-popover>
```