<template>
  <div>
    <f-popover>
      <f-button>上方弹出</f-button>
      <template #content>
        弹出内容
      </template>
    </f-popover>
    <f-popover position="bottom">
      <f-button>下方弹出</f-button>
      <template #content>
        弹出内容
      </template>
    </f-popover>
    <f-popover position="left">
      <f-button>左边弹出</f-button>
      <template #content>
        弹出内容
      </template>
    </f-popover>
    <f-popover position="right">
      <f-button>右边弹出</f-button>
      <template #content>
        弹出内容
      </template>
    </f-popover>
  </div>
</template>

<script>
import Popover from '../../../src/popover'
import Button from '../../../src/button'
export default {
  components: {
    fPopover: Popover,
    fButton: Button,
  }
}
</script>

<style>

</style>