<template>
  <svg class="f-icon" aria-hidden="true">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss">
.f-icon {
  width: 1rem;
  height: 1rem;
}
</style>