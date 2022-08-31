<template>
  <div>Logout</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      logoutAction: 'logout',
    }),
  },
  mounted() {
    this.logoutAction('logout');
    this.$router.push('/login');
  },
};
</script>
