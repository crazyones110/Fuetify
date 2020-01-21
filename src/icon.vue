<template>
  <div>
    <svg class="f-icon" aria-hidden="true">
      <use :xlink:href="`#i-${name}`" />
    </svg>
  </div>
</template>

<script>
import './svg'
export default {
  name: 'FIcon',
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
  // fill: currentColor;
  overflow: hidden;
  // transform: translateY(10%);
}
</style>