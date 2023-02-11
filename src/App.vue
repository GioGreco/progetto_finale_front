<template>
  <header class="navsmart">
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
@use './assets/styles/partials/variables' as *;

@media screen and (min-width: 800px) {
    .navsmart {
    display: none;
    opacity: 0;
  }
}
</style>
