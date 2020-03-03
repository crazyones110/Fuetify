---
title: Toast
---
# 弹出提示

## 基础使用: `this.$toast`

**预览**

<ClientOnly>
  <toast-demos-basic/>
</ClientOnly>

**代码**
```vue
<template>
  <div>
    <f-button @click="$toast('点击弹出提示')">上方弹出</f-button>
    <f-button @click="$toast('点击弹出提示', {position: 'middle'})">中间弹出</f-button>
    <f-button @click="$toast('点击弹出提示', {position: 'bottom'})">下方弹出</f-button>
  </div>
</template>

<script>
import plugin from '../../../src/plugin'
import Button from '../../../src/button'
import Vue from 'vue'

Vue.use(plugin)

export default {
  components: {
    fButton: Button
  }
}
</script>
```

## 设置关闭按钮

**预览**

<ClientOnly>
  <toast-demos-close/>
</ClientOnly>

**代码**

```vue
<template>
  <div>
    <f-button @click="handleClick">上方弹出</f-button>
  </div>
</template>

<script>
import plugin from '../../../src/plugin'
import Button from '../../../src/button'
import Vue from 'vue'

Vue.use(plugin)

export default {
  components: {
    fButton: Button!
  },
  methods: {
    handleClick() {
      this.$toast('我又弹出了', {
        closeButton: {
          text: '好吧/无奈',
          callback() {
            console.log('在控制台里也能看到我!')
          }
        }
      })
    }
  }
}
</script>
```

## 支持 HTML

**预览**

<ClientOnly>
  <toast-demos-html/>
</ClientOnly>

**代码**

```vue
<template>
  <div>
    <f-button @click="handleClick">上方弹出</f-button>
  </div>
</template>

<script>
import plugin from '../../../src/plugin'
import Button from '../../../src/button'
import Vue from 'vue'

Vue.use(plugin)

export default {
  components: {
    fButton: Button
  },
  data() {
    content: `
    <a href="https://github.com">github征婚相亲交友</a>
    `
  },
  methods: {
    handleClick() {
      this.$toast(this.content, {
        enableHtml: true
      })
    }
  }
}
</script>
```

**vm.$toast API**

```typescript
vm.$toast(content: string, {
  enableHtml?: boolean,
  position?: 'middle'|'top'|'bottom',
  closeButton?: {
    text: string,
    callback: () => any
  }
})
```