<template>
  <div class="tabs-item" @click="handleClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FTabsItem",
  data() {
    // 不需要用户传值，自身维护值
    return {
      active: false
    };
  },
  props: {
    // 需要用户（前端开发者）传值
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      required: true
    }
  },
  inject: ["eventBus"],
  created() {
    this.eventBus &&
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
    });
  },
  methods: {
    handleClick() {
      if (this.disabled) {
        return
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this)
      this.$emit('click')
    }
  },
  computed: {
    classes() {
      const { active, disabled } = this;
      return { active, disabled }
    }
  }
};
</script>

<style lang="scss" scoped>
$blue: blue;
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>