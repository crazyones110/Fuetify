<template>
  <div class="tabs-item" @click="xxx" :class="classes">
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
    this.eventBus.$on("update:selected", name => {
      this.active = this.name === name;
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    }
  },
  computed: {
    classes() {
      const { active } = this;
      return { active };
    }
  }
};
</script>

<style lang="sass" scoped>
.tabs-item
  padding: 0 2rem
  flex-shrink: 0
  cursor: pointer
  border: 1px solid black
  height: 100%
  display: flex
  align-items: center
  &.active
    background-color: red
</style>