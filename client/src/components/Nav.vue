<template>
  <div id="nav">
    <ul>
      <li>
        <router-link :to="{path: '/home'}">首页</router-link>
      </li>
      <li>
        <router-link :to="{path: '/discovery'}">探索</router-link>
      </li>
      <li>
        <router-link :to="{path: '/notification'}">通知</router-link>
      </li>
      <li>
        <router-link :to="{path: '/me'}">我</router-link>
      </li>
      <li>
        <router-link :to="{path: '/log-reg'}">登录</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
#nav {
  flex: 1 1 200px;
  min-width: 40px;
  height: 100vh;
  padding: 1rem;
  border: 1px solid #ccc;
}
ul li{
  height: 30px;
  line-height: 30px;
  border-radius: 8px;
}
ul li:hover {
  background-color: rgb(219, 219, 219);
}
</style>