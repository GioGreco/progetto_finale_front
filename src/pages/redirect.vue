<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    launch() {
      location.replace("http://127.0.0.1:8000/");
    },
  },
  mounted() {
    this.launch();
  },
};
</script>

<style lang="scss" scoped></style>
