<template>
  <v-card
    class="mx-auto"
    max-width="500px"
    min-width="300px"
    width="40%"
    elevation="2"
    :loading="loading"
  >
    <template slot="progress">
      <v-progress-linear
        color="primary"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-container class="px-3">
      <v-card-title>Welcome Back!</v-card-title>
      <v-card-subtitle> Sign in to continue to APP </v-card-subtitle>
      <v-divider></v-divider>
      <v-container>
        <v-form
          ref="formLogin"
          v-model="valid"
          lazy-validation
          @submit.prevent="handleSubmit"
        >
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            label="Username"
            type="text"
            required
            color="primary"
            @keypress="submitForm"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            color="primary"
            required
            :rules="passwordRules"
            @keypress="submitForm"
          ></v-text-field>
          <v-row align="center" justify="center" class="mt-2">
            <v-btn color="primary" :disabled="loading" type="submit">
              Log in
            </v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      valid: true,
      username: '',
      usernameRules: [(v) => !!v || 'Username is required'],
      password: '',
      passwordRules: [(v) => !!v || 'Password is required'],
      loading: false,
    };
  },
  computed: {
    validateForm() {
      return this.$refs.formLogin.validate();
    },
  },
  methods: {
    ...mapActions({
      loginAction: 'login',
    }),
    handleSubmit() {
      this.loading = true;
      if (this.validateForm) {
        this.login(this.username, this.password);
      }
      this.loading = false;
    },
    login(username, password) {
      if (username === 'admin' && password === 'admin') {
        this.loginAction(username);
        this.$router.push({ path: '/' });
      } else {
        alert('invalid username/password');
      }
    },
    //use when keypress enter
    submitForm() {
      return this.$refs.formLogin.submit;
    },
  },
};
</script>
