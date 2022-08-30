<template>
  <v-form ref="form">
    <v-text-field
      v-model="username"
      label="Username"
      type="text"
      required
      solo
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
      solo
    ></v-text-field>

    <v-btn color="purple" class="mr-4" to="/"> Log in </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>
