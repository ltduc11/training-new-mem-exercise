<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="employeeList"
      :items-per-page="itemPerPage"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <!-- <template v-slot:item[highlighKey]="{ item }">
        <v-chip dark>
          {{ item[highlighKey] }}
        </v-chip>
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    employeeList: Array || String,
    itemPerPage: { type: Number, default: 10 },
    highlighKey: String,
    sortBy: String,
    sortDesc: Boolean,
  },
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        {
          text: "First name",
          align: "start",
          value: "firstName",
        },
        {
          text: "Last name",
          align: "start",
          value: "lastName",
        },
        { text: "Department", value: "department" },
        { text: "Email", value: "email" },
        { text: "Age", value: "age" },
        { text: "Username", value: "username" },
        { text: "Salary", value: "salary" },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  computed: {},
  mounted() {
    // console.log(this.$props.highlighKey);
  },
};
</script>
