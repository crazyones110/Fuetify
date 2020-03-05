---
title: Collapse
---

# 折叠面板

## 基本使用

**预览**

<ClientOnly>
  <collapse-demos/>
</ClientOnly>

**代码**

```vue
<template>
  <div>
    <f-collapse :selected.sync="selected">
      <f-collapse-item title="title1" name="1">内容1</f-collapse-item>
      <f-collapse-item title="title2" name="2">内容2</f-collapse-item>
      <f-collapse-item title="title3" name="3">内容3</f-collapse-item>
    </f-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse/collapse'
import CollapseItem from '../../../src/collapse/collapse-item'
export default {
  components: {
    fCollapse: Collapse,
    fCollapseItem: CollapseItem
  },
  data() {
    return {
      selected: ['1', '3']
    }
  }
}
</script>
```

## 手风琴效果

**预览**

<ClientOnly>
  <collapse-demos-single/>
</ClientOnly>

**代码**

```vue
<template>
  <div>
    <f-collapse :selected.sync="selected" single>
      <f-collapse-item title="title1" name="1">内容1</f-collapse-item>
      <f-collapse-item title="title2" name="2">内容2</f-collapse-item>
      <f-collapse-item title="title3" name="3">内容3</f-collapse-item>
    </f-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse/collapse'
import CollapseItem from '../../../src/collapse/collapse-item'
export default {
  components: {
    fCollapse: Collapse,
    fCollapseItem: CollapseItem
  },
  data() {
    return {
      selected: ['1']
    }
  }
}
</script>
```

**collapse API**

| 参数         | 说明            | 类型    | 默认值 | 必须 | 可选值         |
| ------------ | --------------- | ------- | ------ | ---- | -------------- |
| selected     | 默认选中，对应collapse-item里的name | Array  | 无     | 是   |  |
| single      | 是否开启手风琴风格  | Boolean | false  | 否   | true\|false

**collapse-item API**

| 参数         | 说明            | 类型    | 默认值 | 必须 | 可选值         |
| ------------ | --------------- | ------- | ------ | ---- | -------------- |
| title     | 标题 | String  | 无     | 是   | 任意字符串 |
| name      | 标记是否开启  | String | 无  | 是   | 任意字符串
