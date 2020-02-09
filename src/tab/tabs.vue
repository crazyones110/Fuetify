<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "FTabs",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return val === "horizontal" || val === "vertical";
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  created() {
    this.eventBus.$on("update:selected", name => {
      // this.selected = name
      this.$emit("update:selected", name);
      console.log(this.selected);
    });
  },
  mounted() {
    // this.$emit('update:selected', 'xxx')
    this.$children.forEach(vm => {
      if (vm.$options.name === "FTabsHead") {
        vm.$children.forEach(item => {
          if (
            item.$options.name === "FTabsItem" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item)
          }
        });
      }
    });
  }
}
</script>

<style>
</style>