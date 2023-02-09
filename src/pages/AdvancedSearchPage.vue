<template>
    <header>
        <HeaderComponent></HeaderComponent>
    </header>
    <div>
        <CardComponent></CardComponent>
    </div>
    search
</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import CardComponent from '../components/AdvancedSearch/CardComponent.vue';

    export default {
        name: 'AdvancedSearchPage',
        components: {
        HeaderComponent,
        CardComponent
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