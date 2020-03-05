<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FCollapse'
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey {
    radius: $border-radius;
    // bottom: none;
  }
}
</style>