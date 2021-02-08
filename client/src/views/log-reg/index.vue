<template>
  <div>
    <header id="home-header">登录</header>
    <router-link :to="{path: 'login'}">登录</router-link>
    <router-link :to="{path: 'register'}">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import { reactive } from "vue"

export default {
  name: "LogReg",
  setup(){

  }
}
</script>

<style scoped>
#home-header {
  width: 100px;
  height: 100px;
  background-color: cadetblue;
}
</style>