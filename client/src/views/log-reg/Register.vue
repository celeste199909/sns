<template>
  <div>
    <form>
      <input type="text" class="username" v-model="registerForm.username">
      <input type="text" class="password" v-model="registerForm.password">
      <button @click="handleRegister">注册</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue"
import { register } from "../../api/index"
export default {
  name: "Register",
  setup(props, context) {
     const registerForm = reactive({
      username: "",
      password: ""
    })

    function handleRegister(e) {
      e.preventDefault()
      // console.log(e,loginForm);
      register(registerForm)
    }

    return {
      registerForm,
      handleRegister
    }
  }
}
</script>

<style scoped>

</style>