<template>
  <v-container>
    <h2>Employees</h2>
    <v-card>
      <v-toolbar flat>
        <template>
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
        </template>

        <template v-slot:extension>
          <v-tabs v-model="currentTab" align-with-title>
            <v-tabs-slider color="primary"></v-tabs-slider>
            <v-tab v-for="tab in tabs" :key="tab">
              {{ tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="currentTab">
        <v-tab-item v-for="tab in tabs" :key="tab">
          <!-- LIST TAB -->
          <v-card v-if="tab === 'list'">
            <v-data-table
              :headers="headers"
              :items="getAllEmployee"
              :items-per-page="10"
              :search="search"
            >
              <template v-slot:[`item.actions`]="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="$router.push('/employee/' + item.id)"
                >
                  mdi-pencil
                </v-icon>
                <ModalConfirmDeleteEmployee :employee="item">
                  <v-icon small> mdi-delete </v-icon>
                </ModalConfirmDeleteEmployee>
              </template>
            </v-data-table>
          </v-card>

          <!-- CARD TAB -->
          <v-card v-else-if="tab === 'cards'">
            <v-container class="">
              <v-data-table
                :items-per-page="10"
                :search="search"
                :items="getAllEmployee"
              >
                <template v-slot:body="{ items }">
                  <v-row no-gutters>
                    <v-col
                      v-for="emp in items"
                      :key="emp.id"
                      cols="12"
                      sm="6"
                      md="4"
                      lg="3"
                    >
                      <card-employee :employee="emp"></card-employee>
                    </v-col>
                  </v-row>
                </template>
              </v-data-table>
            </v-container>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import mapping from '@/store/mapping';
import ModalAddEmployee from './ModalAddEmployee.vue';
import ModalConfirmDeleteEmployee from './ModalConfirmDeleteEmployee.vue';
import CardEmployee from './CardEmployee.vue';

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
      tabs: ['list', 'cards'],
      search: '',
      currentTab: 1,
    };
  },
  computed: {
    getAllEmployee: mapping.employee.getters.getAll,
  },
  components: {
    ModalAddEmployee,
    ModalConfirmDeleteEmployee,
    CardEmployee,
  },
  updated() {
    console.log('tab', this.currentTab);
    console.log('route', this.$route);
  },
};
</script>
