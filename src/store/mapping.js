import { mapActions, mapGetters } from "vuex";

const mapping = {
  auth: {
    actions: {
      ...mapActions({
        login: "auth/login",
        logout: "auth/logout",
      }),
    },
  },
  employee: {
    getters: {
      ...mapGetters({
        getAll: "employee/getAll",
        getById: "employee/getEmployeeById",
        getListByHighestSalary: "employee/getEmployeesByHighestSalary",
        getEmployeesOfHighestSalaryDepartment:
          "employee/getEmployeesOfHighestSalaryDepartment",
      }),
    },
    actions: {
      ...mapActions({
        fetch: "employee/fetchList",
        add: "employee/add",
        update: "employee/update",
        delete: "employee/delete",
      }),
    },
  },
};
export default mapping;
