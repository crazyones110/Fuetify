<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>