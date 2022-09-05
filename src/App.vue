<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import mapping from '@/store/mapping';
export default {
  name: 'App',
  components: {},
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
  methods: {
    fetchEmpAction: mapping.employee.actions.fetch,
  },
  created() {
    this.fetchEmpAction();
  },
};
</script>
