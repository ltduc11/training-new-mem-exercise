<template>
  <v-container>
    <h2>HomePage</h2>
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Top 10 highest salary employees
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <PanelContent
              :employeeList="employeeListHighestSalary"
              :itemPerPage="10"
              highlighKey="salary"
              sortBy="salary"
              :sortDesc="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header>
            Employees of the department with the highest total salary
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <PanelContent
              :employeeList="getEmployeesOfHighestSalaryDepartment"
              :itemPerPage="10"
              sortBy="salary"
              :sortDesc="true"
            />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-container>
</template>

<script>
import mapping from "@/store/mapping";
import PanelContent from "./PanelContent.vue";
export default {
  data() {
    return {};
  },
  components: {
    PanelContent,
  },
  computed: {
    employeeListHighestSalary() {
      return this.getEmployeeListBySalary()(10);
    },
    getEmployeesOfHighestSalaryDepartment:
      mapping.employee.getters.getEmployeesOfHighestSalaryDepartment,
  },
  methods: {
    getEmployeeListBySalary: mapping.employee.getters.getListByHighestSalary,
  },
  mounted() {
    console.log(this.getEmployeesOfHighestSalaryDepartment);
  },
};
</script>
