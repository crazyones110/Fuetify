---
title: Layout
---
# 布局

## 不带sider的布局

**预览**

<ClientOnly>
  <layout-demos-without-sider/>
</ClientOnly>

**代码**

```html
<f-layout style="color: white; margin-bottom:50px;">
  <f-header style="height: 50px; background:lightskyblue;">
    header
  </f-header>
  <f-content style="height: 100px; background:deepskyblue;">
    content
  </f-content>
  <f-footer style="height: 50px; background:lightskyblue;">
    footer
  </f-footer>
</f-layout>
```

## sider和content齐平的布局

**预览**

<ClientOnly>
  <layout-demos-sider-align-with-content/>
</ClientOnly>

**代码**

```html
<f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <f-header style="height: 50px; background:lightskyblue;">header</f-header>
  <f-layout>
    <f-sider style="height: 100px; background:#ddd; width:200px; color: black;">sider</f-sider>
    <f-content style="height: 100px; background:deepskyblue;">content</f-content>
  </f-layout>
  <f-footer style="height: 50px; background:lightskyblue;">footer</f-footer>
</f-layout>
```

## 一整个sider的布局

**预览**

<ClientOnly>
  <layout-demos-big-sider/>
</ClientOnly>

**代码**

```html
<f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <f-sider style=" background:#ddd; width:200px; color: black;">sider</f-sider>
  <f-layout>
    <f-header style="height: 50px; background:lightskyblue;">header</f-header>
    <f-content style="height: 100px; background:deepskyblue;">content</f-content>
    <f-footer style="height: 50px; background:lightskyblue;">footer</f-footer>
  </f-layout>
</f-layout>
```