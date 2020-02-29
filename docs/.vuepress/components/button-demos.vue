<template>
  <div>
    <f-button>默认按钮</f-button>
    <f-button loading>Loading</f-button>
    <f-button disabled>禁用按钮</f-button>
    <f-button icon="setting">Loading</f-button>
    <f-button icon="setting" icon-position="right">Loading</f-button>
  </div>
</template>

<script>
import Button from '../../../src/button'
export default {
  components: {
    fButton: Button
  },
  data() {
    return {
      content: `
        <f-button>默认按钮</f-button>
      `
    }
  }
}
</script>

<style>

</style>