<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'FCollapse',
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    if (this.single) {
      if (this.selected.length > 1) {
        console.warn('在single的情况下selected的长度不能大于1')
      }

    }
    this.eventBus.$emit('inform', this.selected)
    this.eventBus.$on('close', name => {
      const newSelected = [...this.selected]
      const index = newSelected.indexOf(name)
      newSelected.splice(index, 1)
      this.$emit('update:selected', newSelected)
      this.$nextTick(() => {
        this.eventBus.$emit('inform', this.selected)
      })
      // this.eventBus.$emit('inform', newSelected) // 这里传this.selected会慢一点
    })
    this.eventBus.$on('open', name => {
      let newSelected
      if (this.single) {
        newSelected = [name]
      } else {
        newSelected = [...this.selected]
        newSelected.push(name)
      }
      this.$emit('update:selected', newSelected)
      this.$nextTick(() => {
        this.eventBus.$emit('inform', this.selected)
      })
    })



  }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey {
    radius: $border-radius;
    // bottom: none;
  }
}
</style>