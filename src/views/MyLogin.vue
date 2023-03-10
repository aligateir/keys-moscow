<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Панель пользователя</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          :class="{invalid: (v$.email.$dirty && !v$.email.required) || (v$.email.$error)}"
          v-model="v$.email.$model"
        >
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="v$.email.$error"
        >Поле email не соотвествует формату</small>
        <small
          class="helper-text invalid"
          v-if="v$.email.$dirty && !v$.email.required"
        >Поле email не должно быть пустым</small>
      </div>
      <div class="input-field">
        <input
          v-model="v$.password.$model"
          :class="{invalid: (v$.password.$dirty && !v$.password.required) || (v$.password.$error)}"
          id="password"
          type="password"
        >
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          :class="v$.password.$dirty"
        v-if="v$.password.$dirty && !v$.password.required"
        >Поле пароля не должно быть пустым</small>
       <small
          class="helper-text invalid"
        v-if="(this.password.length < this.lvalue) && v$.password.$dirty"
        >Длина пароля не менее 8 символов</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>

</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
// eslint-disable-next-line no-unused-vars
import messages from '@/utils/messages'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login',
  methods: {
    'submitHandler' () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      // eslint-disable-next-line no-unused-vars
      const formData = {
        email: this.email,
        password: this.password
      }
      this.$router.push('/')
    }
  },
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ email: '', password: '', lvalue: 8 }),
  'validations' () {
    return {
      email: { required, email },
      password: { required, minLength: minLength(this.lvalue) }
    }
  },
  'mounted' () {
    console.log(this.$route.query.message)
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>
