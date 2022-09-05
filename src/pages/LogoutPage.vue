<template>
  <div>Logout</div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      logoutAction: 'auth/logout',
    }),
  },
  mounted() {
    this.logoutAction();
    this.$router.push('/login');
  },
};
</script>
