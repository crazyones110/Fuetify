<template>
  <div>
    <f-button-group>
      <f-button>上一个</f-button>
      <f-button>返回首页</f-button>
      <f-button>下一个</f-button>
    </f-button-group>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/ButtonGroup'
import Button from '../../../src/button'
export default {
  components: {
    fButtonGroup: ButtonGroup,
    fButton: Button
  }
}
</script>

<style>

</style>