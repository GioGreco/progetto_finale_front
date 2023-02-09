<template>
  <header>
    <NavbarComponent></NavbarComponent>
  </header>
  <main>
    <RouterView/>
  </main>
  <footer>
    <FooterComponent/>
  </footer>


</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

  export default {
    components: {
      NavbarComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>
