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
      this.eventBus.$emit("update:selected", this.name, this);
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
$blue: blue
.tabs-item
  padding: 0 2rem
  flex-shrink: 0
  cursor: pointer
  height: 100%
  display: flex
  align-items: center
  &.active
    color: $blue
    font-weight: bold
</style>