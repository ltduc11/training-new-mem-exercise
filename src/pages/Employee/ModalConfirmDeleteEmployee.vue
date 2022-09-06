<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <button v-bind="attrs" v-on="on">
        <slot></slot>
      </button>
    </template>
    <v-card>
      <v-card-title class="text-h5"> Confirm Delete </v-card-title>
      <v-card-text>Are you sure you want to delete this employee? </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Cancel
        </v-btn>
        <v-btn color="red darken-1" text @click="confirmDelete"> Delete </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import mapping from "@/store/mapping";
export default {
  props: {
    employee: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    deleteEmpAction: mapping.employee.actions.delete,

    confirmDelete() {
      this.deleteEmpAction(this.employee);
      this.dialog = false;
    },
  },
};
</script>
