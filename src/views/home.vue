<template>
  <div>
    <h1>Olá, eu sou o seu professor</h1>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },

  mounted() {
    this.teste();
  },

  methods: {
    async teste() {
      await this.$axios.get("/users/HernanySimao").then((data) => {
        console.log(data);
      });
    },
  },
};
</script>
