<template>
  <v-dialog v-model="showDialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Add Employee
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Employee Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="newEmp.firstName"
                label="First name*"
                hint="Employee First Name"
                type="text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="newEmp.lastName"
                label="Last name*"
                hint="Employee Last Name"
                type="text"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="newEmp.username"
                type="text"
                label="Username"
                hint="Username Employee"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="newEmp.email"
                type="email"
                label="Email"
                hint="Optional"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="2">
              <v-text-field
                v-model="newEmp.age"
                type="number"
                label="Age"
                hint="Optional"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <v-text-field
                v-model="newEmp.salary"
                type="number"
                label="Salary"
                hint="Optional"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                v-model="newEmp.department"
                :items="departmentList"
                item-text="name"
                label="Department*"
                required
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="showDialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="addNewEmployee(newEmp)">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';
import departmentData from '@/constants/departmentData';
export default {
  data: () => ({
    showDialog: false,
    departmentList: departmentData,
    newEmp: {
      id: null,
      firstName: '',
      lastName: '',
      username: '',
      email: null,
      age: null,
      department: null,
      salary: 0,
    },
  }),
  methods: {
    ...mapActions({
      addEmpAction: 'addEmployee',
    }),
    clearNewEmp() {
      this.newEmp = {
        id: null,
        firstName: '',
        lastName: '',
        username: '',
        email: null,
        age: null,
        department: null,
        salary: 0,
      };
    },
    addNewEmployee(emp) {
      if (emp.firstName && emp.lastName && emp.department) {
        this.addEmpAction({
          ...emp,
          id: Math.random().toString(36).substring(2, 9),
        });
        this.clearNewEmp();
        this.showDialog = false;
      }
    },
  },
};
</script>
