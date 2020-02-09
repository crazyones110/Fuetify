<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      // this.x = true // 新增一个 `更新UI任务` 到任务队列里面 // TODO 任务队列
      const { width, height, top, left } = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      // this.$refs.line.style.left = `${left}px` // FIXME 为什么我的left不带padding
      this.$refs.line.style.left = `calc(${left}px - 2rem)`
    })
  }
}
</script>

<style lang="sass" scoped>
$tab-height: 40px
$blue: blue
.tabs-head
  display: flex
  height: $tab-height
  justify-content: flex-start
  align-items: center
  position: relative
  border-bottom: 1px solid #ddd
  .line
    position: absolute
    bottom: 0
    border-bottom: 1px solid $blue
    transition: all 250ms
    // width: 100px
  .actions-wrapper
    margin-left: auto
    display: flex
    align-items: center
    justify-content: center
    padding: 0 1rem
</style>