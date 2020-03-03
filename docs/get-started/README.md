---
title: 快速上手
---

# 快速上手

::: tip 提醒
使用前需要将box-sizing改为border-box
```css
*,*::before,*::after {
  box-sizing: border-box;
}
```
:::

## 引入

```js
import {Button, Input} from 'fuetify'
import 'fuetify/dist/index.css'

export default {
  name: 'app',
  components: {
    'f-button': Button,
    'f-input': Input
  }
}
```