<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === 'FSider') {
        this.layoutClass.hasSider = true
      }
    })
  }
};
</script>

<style lang="sass" scoped>
.layout
  flex-grow: 1
  display: flex
  flex-direction: column
  &.hasSider
    flex-direction: row
</style>