import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from '@/constants/colors';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.light.primary,
        secondary: colors.light.secondary,
      },
      dark: {
        primary: colors.dark.primary,
        secondary: colors.dark.secondary,
      },
    },
  },
});
