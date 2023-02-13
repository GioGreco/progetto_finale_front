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
import FilterLargeComponent from './components/FilterLargeComponent.vue';

  export default {
    components: {
    NavbarComponent,
    FooterComponent,
    FilterLargeComponent
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
@media screen and (max-width: 800px) {
    .filterlarge {
    display: none;
    opacity: 0;
  }
}

.filterlarge{

}

</style>
