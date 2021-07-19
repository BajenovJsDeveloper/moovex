<template>
  <div class="login-container" @submit.prevent="submitForm">
    <loading :loading="$store.getters.isLoading" />
    <form class="login-form">
      <p>Login</p>
      <input-field v-model="formData.email" :msg="errMessage" prop="email" type="email" label="Email"/>
      <input-field v-model="formData.password" :msg="errMessage" prop="password" type="password" label="Password" />
      <button-styled>Login</button-styled>
      <p><router-link to="/register">SignUp</router-link></p>
    </form>
    <error-alert :msg="$store.getters.errorMsg"/>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { validate, clearFormData } from '@/api/validator'
export default {
  name: 'Login',
  setup (props, { root: { $store }}) {
    const formData = ref({
      email: '',
      password: '',
    })
    const errMessage = ref({})
    const submitForm = () => {
      errMessage.value = validate(formData.value)
      if(!errMessage.value.isErrors) $store.dispatch('fetchLoginUser', formData.value)
      formData.value = clearFormData(formData.value)
    }
    return {
      formData,
      errMessage,
      submitForm
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  display: flex;
  justify-content: center; 
}
.login-form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  margin-top: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.123);
  max-width: 600px;
}
</style>
