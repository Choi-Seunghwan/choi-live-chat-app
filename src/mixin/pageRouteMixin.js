const pageRouteMixin = {
  methods: {
    $_routeMainPage(...args) {
      const { query } = args;
      this.$router.push({ name: 'main', query });
    },

    $_routeLoginPage(...args) {
      const { query } = args;
      this.$router.push({ name: 'login', query });
    }
  }
};

export default pageRouteMixin;
