<template>
  <div id="app-wrapper">
    <Nav />
    <div id="main">
      <router-view></router-view>
    </div>
    <Sidebar />
  </div>
</template>

<script >
import "./assets/style/reset.css"
import Nav from "./components/Nav.vue"
import Sidebar from "./components/Sidebar.vue"
export default {
  setup() {},
  components: { Nav, Sidebar },
}
</script>

<style>
#app {
  background-color: #f5f5f5;
}
#app-wrapper {
  max-width: 1200px;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
}
#main {
  max-width: 800px;
  flex: 1 0 800px;
  height: 100vh;
  overflow: hidden;
}
</style>