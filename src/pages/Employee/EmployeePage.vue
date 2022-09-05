<template>
  <div>
    <h2>Employees</h2>
    <v-card outlined class="py-1">
      <v-data-table
        :headers="headers"
        :items="getAllEmployee"
        :items-per-page="10"
        :search="search"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              hide-details="auto"
              outlined
            >
            </v-text-field>
            <v-spacer></v-spacer>

            <ModalAddEmployee />
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="$router.push('/employee/' + item.id)"
          >
            mdi-pencil</v-icon
          >
          <ModalConfirmDeleteEmployee :employee="item" />
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import mapping from '@/store/mapping';
import ModalAddEmployee from './ModalAddEmployee.vue';
import ModalConfirmDeleteEmployee from './ModalConfirmDeleteEmployee.vue';

export default {
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        {
          text: 'First name',
          align: 'start',
          value: 'firstName',
        },
        {
          text: 'Last name',
          align: 'start',
          value: 'lastName',
        },
        { text: 'Department', value: 'department' },
        { text: 'Email', value: 'email' },
        { text: 'Age', value: 'age' },
        { text: 'Username', value: 'username' },
        { text: 'Salary', value: 'salary' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      search: '',
      dialogDelete: false,
      deleteEmp: {},
    };
  },
  computed: {
    getAllEmployee: mapping.employee.getters.getAll,
  },
  components: { ModalAddEmployee, ModalConfirmDeleteEmployee },
  created() {
    this.fetchEmpAction();
  },
};
</script>
