<template>
  <v-list nav dense>
    <v-list-item-group active-class="">
      <v-list-item to="/">
        <v-list-item-title class="text-decoration-none">
          Home
        </v-list-item-title>
      </v-list-item>
      <v-list-item to="/employee">
        <v-list-item-title>Employee</v-list-item-title>
      </v-list-item>
      <v-list-item to="/test">
        <v-list-item-title>Test</v-list-item-title>
      </v-list-item>
      <v-list-item to="/logout">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {};
</script>
