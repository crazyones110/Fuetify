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
<style lang="scss" scoped>
>>>.gulu-toast {
  z-index: 30;
}
</style>