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