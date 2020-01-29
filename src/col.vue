<template>
  <div
    class="col"
    :class="colClasses"
    :style="colStyle"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FCol',
  props: {
    span: {
      type: [Number, String]
    },
    offset: [Number, String]
  },
  data() {
    return {
      gutter: 0,
      // colStyle: {
      //   paddingLeft: this.gutter / 2 + 'px',
      //   paddingRight: this.gutter / 2 + 'px',
      // }
    }
  },
  computed: {
    colClasses() {
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`
        ]
    },
    colStyle() {
      // gutter 变了，所以我要变了
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.col
  // width: 50%
  $class-prefix: col-
  @for $n from 1 through 24
    &.#{$class-prefix}#{$n}
      width: ($n / 24) * 100%
  $class-prefix: offset-
  @for $n from 1 through 24
    &.#{$class-prefix}#{$n}
      margin-left: ($n / 24) * 100%
</style>