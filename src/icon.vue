<template>
  <div>
    <svg class="f-icon" aria-hidden="true">
      <use :xlink:href="`#i-${name}`" />
    </svg>
  </div>
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

<style lang="scss" scoped>
.f-icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  // transform: translateY(0.9px);
}
</style>