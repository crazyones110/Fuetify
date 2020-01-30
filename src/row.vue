<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FRow',
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    },
    align: {
      type: String,
      validator(val) {
        return ['left', 'right', 'middle'].includes(val)
      }
    }
  },
  computed: {
    rowStyle() {
      const { gutter } = this
      return {marginLeft: -gutter/2+ 'px', marginRight: -gutter/2+'px'}
    },
    rowClass() {
      const { align } = this
      return [align && `align-${align}`]
    }
  },
  mounted() { // 这个时候有儿子
    console.log('row mounted')
    this.$children.forEach(vm => {
      // console.log(vm)
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="sass" scoped>
  .row
    display: flex
    flex-wrap: wrap
    &.align-left
      justify-content: flex-start
    &.align-right
      justify-content: flex-end
    &.align-center
      justify-content: center
</style>