<template>
    <header>
        <HeaderComponentVue></HeaderComponentVue>
    </header>
    single
</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';

    export default {
        name: 'SingleApartmentPage',
        components: {
            HeaderComponent
        },
        data(){
            return{

            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

</style>