<template>
  <v-card
    class="ma-3 rounded-lg"
    outlined
    tile
    v-click-outside="onClickOutside"
    hover
    color="teal lighten-5"
  >
    <div class="d-flex align-center">
      <img
        :src="employee.image"
        width="60px"
        height="60px"
        class="rounded-circle pa-2"
      />
      <div style="width: 100%">
        <v-card-title class="px-2"> {{ fullname }}</v-card-title>
        <v-card-subtitle> ID: {{ employee.id }} </v-card-subtitle>
      </div>
    </div>
    <v-card-text>
      <div>Dep: {{ employee.department }}</div>
      <div>Username: {{ employee.username }}</div>
    </v-card-text>

    <v-card-actions class="d-flex justify-space-between">
      <v-btn
        color="primary accent-2"
        outlined
        @click="$router.push('/employee/' + employee.id)"
      >
        Detail
      </v-btn>

      <v-btn text color="blue accent-4" @click="reveal = true"> More </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: fit-content"
      >
        <v-card-title> {{ fullname }}</v-card-title>
        <v-card-subtitle>{{ employee.department }}</v-card-subtitle>
        <v-card-text class="m-0">
          <div>Age: {{ employee.age }}</div>
          <div>Salary: {{ employee.salary }}</div>
          <div>Email: {{ employee.email }}</div>
        </v-card-text>

        <v-card-actions class="d-flex justify-space-between">
          <ModalConfirmDeleteEmployee :employee="employee">
            <v-btn color="error  " depressed> Delete </v-btn>
          </ModalConfirmDeleteEmployee>

          <v-btn text color="teal accent-4" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
import ModalConfirmDeleteEmployee from './ModalConfirmDeleteEmployee.vue';

export default {
  components: { ModalConfirmDeleteEmployee },
  props: {
    employee: Object,
  },
  data() {
    return {
      reveal: false,
    };
  },
  computed: {
    fullname() {
      return `${this.employee.firstName} ${this.employee.lastName}`;
    },
  },
  methods: {
    onClickOutside() {
      this.reveal = false;
    },
  },
  // mounted() {
  //   console.log(this.employee);
  // },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
