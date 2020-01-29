<template>
  <div class="row" :style="{marginLeft: -gutter/2+ 'px', marginRight: -gutter/2+'px'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FRow',
  props: {
    gutter: {
      type: [Number, String],
      default: 0
    }
  },
  created() { // 这个时候没有儿子
    console.log('row created')
  },
  beforeMount() {
    console.log('row beforeMount')
    console.log(this.$children)
  },
  mounted() { // 这个时候有儿子
    console.log('row mounted')
    this.$children.forEach(vm => {
      // console.log(vm)
      vm.gutter = this.gutter
    })
  }
}

const div = document.createElement('div') // created 在内存中生成这个对象
const childDiv = document.createElement('div') // child created
// 但其实儿子和父亲谁先 created 无所谓的，Vue 选择了哪一种呢
div.appendChild(childDiv) // child mounted
document.body.appendChild(div) // mounted 把这个 div 对象挂到页面里面去

</script>

<style lang="sass" scoped>
  .row
    display: flex
    // margin: 0 -10px
</style>