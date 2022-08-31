<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',
  components: {},
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  methods: {
    ...mapActions({
      fetchEmpAction: 'fetchEmployeeList',
    }),
  },
  created() {
    this.fetchEmpAction();
  },
};
</script>
