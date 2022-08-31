const employeeStore = {
  state: {
    employees: [],
  },
  getters: {
    getEmployeeById: (state) => (id) => {
      return state.employees.find((emp) => emp.id.toString() === id);
    },
    //get 'amount' employees highest salary
    getEmployeesByHighestSalary: (state) => (amount) => {
      return state;
    },
  },
  mutations: {
    FETCH_EMPLOYEE_LIST(state, employeeList) {
      state.employees = employeeList;
    },
    ADD_EMPLOYEE(state, employee) {
      state.employees.push(employee);
    },
    UPDATE_EMPLOYEE(state, employee) {
      const index = state.employees.findIndex((emp) => emp.id == employee.id);
      state.employees.splice(index, 1, employee);
    },
    DELETE_EMPLOYEE(state, employeeId) {
      state.employees = state.employees.filter((emp) => emp.id !== employeeId);
    },
  },
  actions: {
    async fetchEmployeeList({ commit }) {
      try {
        const res = await fetch('https://dummyjson.com/users');
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

        commit('FETCH_EMPLOYEE_LIST', users);
      } catch (error) {
        console.log(error);
      }
    },
    addEmployee({ commit }, newEmployee) {
      commit('ADD_EMPLOYEE', newEmployee);
    },
    updateEmployee({ commit }, employee) {
      commit('UPDATE_EMPLOYEE', employee);
    },
    deleteEmployee({ commit }, employee) {
      commit('DELETE_EMPLOYEE', employee.id);
    },
  },
};

export default employeeStore;
