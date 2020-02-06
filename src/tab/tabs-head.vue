<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'FTabsHead',
  mounted() {
    console.log(this.$slots.actions)
  }
}
</script>

<style>

</style>