<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'FTabs',
  props: {
    selected: { // TODO 自己试下update:xxx .sync修饰符
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(val) {
        return val === 'horizontal' || val === 'vertical'
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    // this.$emit('update:selected', 'xxx')
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>

<style>

</style>