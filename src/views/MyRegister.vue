<template>
  <form class="card auth-card" @submit.prevent="registerHandler">
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
          v-if="(this.password.length < this.lpass) && v$.password.$dirty"
        >Длина пароля не менее {{ this.lpass }} символов</small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model="v$.name.$model"
          :class="{invalid: (v$.name.$dirty && !v$.name.required) || (v$.name.$error)}"
        >
        <label for="name">Имя</label>
        <small class="helper-text invalid"
               v-if="v$.name.$dirty && !v$.name.required"
        >Имя пользователя не должно быть пустым</small>
        <small class="helper-text invalid"
               v-if="(this.name.length < this.lname) && v$.name.$dirty"
        >Имя пользователя не короче {{ this.lname }} символов</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="v$.checkbox.$model"/>
          <span
            :class="{ invalid: v$.checkbox.$invalid && v$.checkbox.$dirty }"
            class="helper-text"
          >С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'register',
  methods: {
    registerHandler () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      console.log(formData)
      this.$router.push('/')
    }

  },
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ email: '', password: '', name: '', checkbox: '', lpass: 8, lname: 3 }),
  validations () {
    return {
      email: { required, email },
      password: { required, minLength: minLength(this.lpass) },
      name: { required, minLength: minLength(this.lname) },
      checkbox: { required }
    }
  }
}
</script>
