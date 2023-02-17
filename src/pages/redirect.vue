<template>
  <div class="page-loader">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
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

<style lang="scss" scoped>
$rosegold: #ae8a86;
$darkgrey: #646464;
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 999;
}
.cube {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: $rosegold;
  &:first-child {
    animation: left 1s infinite;
  }
  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}
@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
