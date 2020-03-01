<template>
  <div>
    <f-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <f-sider style=" background:#ddd; width:200px; color: black;">sider</f-sider>
      <f-layout>
        <f-header style="height: 50px; background:lightskyblue;">header</f-header>
        <f-content style="height: 100px; background:deepskyblue;">content</f-content>
        <f-footer style="height: 50px; background:lightskyblue;">footer</f-footer>
      </f-layout>
    </f-layout>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Footer from "../../../src/footer";
import Sider from "../../../src/sider";
export default {
  components: {
    fLayout: Layout,
    fHeader: Header,
    fContent: Content,
    fFooter: Footer,
    fSider: Sider
  }
};
</script>

<style>
</style>