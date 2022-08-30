<template>
  <div>
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

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="newEmp.age"
                type="number"
                label="Age"
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
        <v-btn color="blue darken-1" text @click="$router.go(-1)">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="handleSave(newEmp)">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import departmentData from '@/constants/departmentData';
export default {
  data() {
    return {
      departmentList: departmentData,
      newEmp: {},
    };
  },
  mounted() {
    this.newEmp = Object.assign({}, this.employee);
  },
  computed: {
    employee() {
      return this.$store.getters.getEmployeeById(this.$route.params.id);
    },
  },
  methods: {
    handleSave(emp) {
      this.$store.dispatch('updateEmployee', {
        ...emp,
        id: this.employee.id,
      });
      this.$router.push('/employee');
    },
  },
};
</script>
