<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Employee Profile: {{ newEmp.id }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="newEmp.firstName"
              label="First name*"
              hint="Emoloyee First Name"
              type="text"
              required
              spellcheck="false"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="newEmp.lastName"
              label="Last name*"
              hint="Emoloyee Last Name"
              type="text"
              required
              spellcheck="false"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="newEmp.username"
              type="text"
              label="Username*"
              hint="Username Employee"
              required
              spellcheck="false"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="6">
            <v-text-field
              v-model="newEmp.email"
              type="email"
              label="Email"
              hint="Optional"
              spellcheck="false"
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
      <v-btn color="blue darken-1" text @click="$router.go(-1)"> Close </v-btn>
      <v-btn color="blue darken-1" text @click="handleSave(newEmp)">
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import departmentData from '@/constants/departmentData';
export default {
  data() {
    return {
      departmentList: departmentData,
      newEmp: {},
    };
  },
  computed: {
    employee() {
      return this.$store.getters.getEmployeeById(this.$route.params.id);
    },
    // stateStore() {
    //   return this.$store.state.employee.employees;
    // },
  },
  watch: {
    // //refresh page -> fetch api -> assign lai employee
    // stateStore: function () {
    //   this.assignEmployeeObject();
    // },
  },
  methods: {
    ...mapActions({
      updateEmpAction: 'updateEmployee',
    }),
    handleSave(emp) {
      this.updateEmpAction({
        ...emp,
        id: this.employee.id,
      });
      this.$router.push('/employee');
    },
    assignEmployeeObject() {
      this.newEmp = Object.assign({}, this.employee);
    },
  },
  mounted() {
    this.assignEmployeeObject();
  },
};
</script>
