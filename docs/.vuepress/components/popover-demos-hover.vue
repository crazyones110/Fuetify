<template>
  <div>
    <f-popover trigger="hover">
      <f-button>上方弹出</f-button>
      <template #content>
        弹出内容
      </template>
    </f-popover>
    <f-popover position="bottom" trigger="hover">
      <f-button>下方弹出</f-button>
      <template #content>
        弹出内容
      </template>
    </f-popover>
    <f-popover position="left" trigger="hover">
      <f-button>左边弹出</f-button>
      <template #content>
        弹出内容
      </template>
    </f-popover>
    <f-popover position="right" trigger="hover">
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