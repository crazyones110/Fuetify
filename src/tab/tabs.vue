<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FTabs',
  props: {
    selected: {
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
  created() {
    // this.$emit('update:selected', 'xxx')
  }
}
</script>

<style>

</style>