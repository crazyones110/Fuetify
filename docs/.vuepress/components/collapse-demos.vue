<template>
  <div>
    <f-collapse :selected.sync="selected">
      <f-collapse-item title="title1" name="1">内容1</f-collapse-item>
      <f-collapse-item title="title2" name="2">内容2</f-collapse-item>
      <f-collapse-item title="title3" name="3">内容3</f-collapse-item>
    </f-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse/collapse'
import CollapseItem from '../../../src/collapse/collapse-item'
export default {
  components: {
    fCollapse: Collapse,
    fCollapseItem: CollapseItem
  },
  data() {
    return {
      selected: ['1', '3']
    }
  }
}
</script>