<template>
  <div>
    <f-popover>
      <f-button>上方弹出</f-button>
      <template #content="{ close }">
        <f-input value="hello world"/>
        <br>
        <f-button>确定</f-button>
        <f-button @click="close">关闭</f-button>
      </template>
    </f-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Input from '../../../src/input'
import Button from '../../../src/button'
export default {
  components: {
    fPopover: Popover,
    fInput: Input,
    fButton: Button,
  }
}
</script>

<style>

</style>