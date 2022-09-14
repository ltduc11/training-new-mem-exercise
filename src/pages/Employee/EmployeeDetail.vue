<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">Employee Profile: ID({{ newEmp.id }})</span>
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
            <v-text-field
              v-model="newEmp.lastName"
              label="Last name*"
              hint="Emoloyee Last Name"
              type="text"
              required
              spellcheck="false"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6"
            class="d-flex align-center justify-end"
          >
            <v-img
              :src="newEmp.image"
              alt="avatar"
              contain
              height="100px"
              aspect-ratio="1"
            ></v-img>
          </v-col>
        </v-row>
        <v-row>
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
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
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
      <v-btn color="gray" text @click="$router.go(-1)"> Close </v-btn>
      <v-btn color="primary darken-1" @click="handleSave(newEmp)"> Save </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import mapping from '@/store/mapping';
import departmentData from '@/constants/departmentData';
export default {
  data() {
    return {
      departmentList: departmentData,
      newEmp: {},
      id: this.$route.params.id,
    };
  },
  computed: {
    employee() {
      return this.getEmpById()(this.id);
    },
    employeesStore: mapping.employee.getters.getAll,
  },
  watch: {
    //refresh page -> fetch api -> assign lai employee
    employeesStore: function () {
      this.assignEmployeeObject();
    },
  },
  methods: {
    getEmpById: mapping.employee.getters.getById,
    updateEmpAction: mapping.employee.actions.update,
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
  beforeMount() {
    if (this.employee) {
      this.assignEmployeeObject();
    }
  },
};
</script>
