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
    return {
      content: `
      <a href="https://github.com">github征婚相亲交友</a>
      `
    }
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