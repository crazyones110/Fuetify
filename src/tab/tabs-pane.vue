<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FTabsPane',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  inject: ['eventBus'],
  created() {
    this.eventBus.$on('update:selected', name => {
      this.active = this.name === name
    })
  },
  computed: {
    classes() {
      const {active} = this
      return { active }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-pane {
    padding: 1em;
    &.active {
    }
  }
</style>