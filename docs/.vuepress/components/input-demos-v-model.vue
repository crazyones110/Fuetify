<template>
  <div>
    <f-input v-model="value"/>
    <div>
      value: {{value}}
    </div>
  </div>
</template>

<script>
import Input from '../../../src/input'
export default {
  components: {
    fInput: Input
  },
  data() {
    return {
      value: 'Hello World'
    }
  }
}
</script>

<style>

</style>