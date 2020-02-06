<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FTabsBody',
  inject: ['eventBus'],
}
</script>

<style>

</style>