<template>
  <div>
    <f-input/>
    <f-input value="中文"/>
    <f-input value="中文" disabled/>
    <f-input value="中文" readonly/>
  </div>
</template>

<script>
import Input from '../../../src/input'
export default {
  components: {
    fInput: Input
  }
}
</script>

<style>

</style>