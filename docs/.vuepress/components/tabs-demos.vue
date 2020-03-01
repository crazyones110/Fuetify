<template>
  <div>
    <f-tabs :selected="selected">
      <f-tabs-head>
        <f-tabs-item name="home">首页</f-tabs-item>
        <f-tabs-item name="sports">体育</f-tabs-item>
        <f-tabs-item name="beauty">美女</f-tabs-item>
      </f-tabs-head>
      <f-tabs-body>
        <f-tabs-pane name="home">首页内容</f-tabs-pane>
        <f-tabs-pane name="sports">体育内容</f-tabs-pane>
        <f-tabs-pane name="beauty">美女内容</f-tabs-pane>
      </f-tabs-body>
    </f-tabs>
  </div>
</template>

<script>
import TabBody from '../../../src/tab/tabs-body'
import TabHead from '../../../src/tab/tabs-head'
import TabItem from '../../../src/tab/tabs-item'
import TabPane from '../../../src/tab/tabs-pane'
import Tab from '../../../src/tab/tabs'
export default {
  components: {
    fTabs: Tab,
    fTabsPane: TabPane,
    fTabsItem: TabItem,
    fTabsHead: TabHead,
    fTabsBody: TabBody
  },
  data() {
    return {
      selected: 'home'
    }
  }
}
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
}
</style>