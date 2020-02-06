<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
/**
 * 组件就是一个函数，prop就是参数，data就是内部变量
 */
// function fn(prop1, prop2) {
//   let data1
//   let data2

// } // TODO 加入笔记

export default {
  name: 'FTabsItem',
  data() { // 不需要用户传值，自身维护值
    return {
      active: false
    }
  },
  props: { // 需要用户（前端开发者）传值
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', name => {
      this.active = this.name === name
    })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  },
  computed: {
    classes() {
      const {active} = this
      return { active }
    }
  }
}
</script>

<style lang="sass" scoped>
.tabs-item
  padding: 0 2rem
  flex-shrink: 0
  &.active
    background-color: red
</style>