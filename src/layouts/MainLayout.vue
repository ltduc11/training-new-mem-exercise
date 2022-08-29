<template>
  <v-app>
    <v-navigation-drawer app>
      <SideBar />
    </v-navigation-drawer>

    <v-app-bar app>
      <AppBar />
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import AppBar from '../components/AppBar.vue';

export default {
  name: 'MainLayout',
  components: {
    SideBar,
    AppBar,
  },
};
</script>
