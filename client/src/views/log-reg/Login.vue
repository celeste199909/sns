<template>
  <div>
    <form>
      <input type="text" class="username" v-model="loginForm.username">
      <input type="text" class="password" v-model="loginForm.password">
      <button @click="handleLogin">登录</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue"
import { login } from "../../api/index"
export default {
  name: "Login",
  setup(props, context) {
    const loginForm = reactive({
      username: "",
      password: ""
    })

     const registerForm = reactive({
      username: "",
      password: ""
    })

    function handleLogin(e) {
      e.preventDefault()
      // console.log(e,loginForm);
      login(loginForm)
    }

    return {
      loginForm,
      handleLogin
    }
  }
}
</script>

<style scoped>

</style>