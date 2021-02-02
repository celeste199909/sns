<template>
  <div>
    <ul>
      <li>
        <router-link :to="{path: '/'}">关注</router-link>
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
    </ul>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>