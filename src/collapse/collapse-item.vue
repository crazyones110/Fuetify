<template>
  <div class="collapse-item">
    <div class="title" @click="toggle" :class="{show}">
      {{title}}
    </div>
    <div class="content" v-if="show">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      show: false
    }
  },
  inject: ['eventBus'],
  methods: {
    toggle() {
      if (this.show === true) {
        this.eventBus.$emit('close', this.name)
      } else {
        this.eventBus.$emit('open', this.name)
      }
    }
  },
  mounted() {
    this.eventBus.$on('inform', names => {
      if (names.includes(this.name)) { // 需要开启
        this.show = true
      } else {
        this.show = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  &:first-child {
    .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  .title {
    cursor: pointer;
    border: 1px solid $grey;
    margin: {
      top: -1px;
      left: -1px;
      right: -1px;
    }
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  .content {
    padding: 8px;
  }
}
</style>