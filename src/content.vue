<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FContent'
}
</script>

<style lang="sass" scoped>
.content
  flex-grow: 1
</style>