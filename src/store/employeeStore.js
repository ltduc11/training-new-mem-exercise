import { sortArrayByKey } from "@/helpers/sort";
import departmentData from "@/constants/departmentData";
import _ from "lodash";
const employeeStore = {
  namespaced: true,
  state: {
    employees: [],
  },
  getters: {
    getAll: (state) => {
      return state.employees;
    },
    getEmployeeById: (state) => (id) => {
      return state.employees.find((emp) => emp.id.toString() === id);
    },
    //get 'amount' employees highest salary
    getEmployeesByHighestSalary: (state) => (amount) => {
      const list = sortArrayByKey(
        state.employees,
        "salary",
        "descending"
      ).slice(0, amount);
      // console.log("list", list);
      return list;
    },
    getEmployeesOfHighestSalaryDepartment: (state) => {
      const departmentList = [...departmentData];
      state.employees.forEach((emp) => {
        const depIndex = departmentList.findIndex(
          (dep) => dep.name === emp.department
        );
        departmentList[depIndex].salary = departmentList[depIndex].salary
          ? departmentList[depIndex].salary + parseInt(emp.salary)
          : parseInt(emp.salary);
      });
      const maxDepBySalary = _.maxBy(departmentList, "salary");
      const list = state.employees.filter(
        (emp) => emp.department === maxDepBySalary.name
      );
      return list;
    },
  },
  mutations: {
    FETCH_LIST(state, employeeList) {
      state.employees = employeeList;
    },
    ADD(state, employee) {
      state.employees.push(employee);
    },
    UPDATE(state, employee) {
      const index = state.employees.findIndex((emp) => emp.id == employee.id);
      state.employees.splice(index, 1, employee);
    },
    DELETE(state, employeeId) {
      state.employees = state.employees.filter((emp) => emp.id !== employeeId);
    },
  },
  actions: {
    async fetchList({ commit }) {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const json = await res.json();
        const users = json.users.map((user) => {
          return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            age: user.age,
            department: user.company.department,
            email: user.email,
            salary: parseInt(user.address.postalCode, 10),
          };
        });

        commit("FETCH_LIST", users);
      } catch (error) {
        console.log(error);
      }
    },
    add({ commit }, employee) {
      commit("ADD", employee);
    },
    update({ commit }, employee) {
      commit("UPDATE", employee);
    },
    delete({ commit }, employee) {
      commit("DELETE", employee.id);
    },
  },
};

export default employeeStore;
