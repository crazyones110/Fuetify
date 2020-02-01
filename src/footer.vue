<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FFooter',
  mounted() {
    console.log(this.$slots.default);
  }
}
</script>

<style lang="sass" scoped>
</style>