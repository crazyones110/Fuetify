<template>
  <div>
    <f-row class="demoRow" gutter="10">
      <f-col span="8">
        <div class="demoCol">8</div>
      </f-col>
      <f-col span="8">
        <div class="demoCol">8</div>
      </f-col>
      <f-col span="8">
        <div class="demoCol">8</div>
      </f-col>
    </f-row>

    <f-row class="demoRow" gutter="10">
      <f-col span="6">
        <div class="demoCol">6</div>
      </f-col>
      <f-col span="6">
        <div class="demoCol">6</div>
      </f-col>
      <f-col span="6">
        <div class="demoCol">6</div>
      </f-col>
      <f-col span="6">
        <div class="demoCol">6</div>
      </f-col>
    </f-row>
  </div>
</template>

<script>
import Row from "../../../src/row";
import Col from "../../../src/col";
export default {
  components: {
    fRow: Row,
    fCol: Col
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>