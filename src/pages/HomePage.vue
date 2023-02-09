<template>

    homepage

    <!-- <div>
        <div>
            <h1>BoolBnB</h1>
        </div>
        <div>
            <HighlightCarouselComponent/>
        </div>

        <div>
            <CategoriesComponent/>
        </div>

        <div>
            <input type="text" v-model="address">
            <button @click="searchAddress" class="btn btn-dark">Cerca</button>
        </div>
    </div> -->
</template>

<script>
import HighlightCarouselComponent from '@/components/Homepage/HighlightCarouselComponent.vue';
import CategoriesComponent from '@/components/Homepage/CategoriesComponent.vue';

import axios from 'axios';

    export default {
        name: 'HomePage',
        components: {
            // HighlightCarouselComponent,
            // CategoriesComponent
        },
        data(){
            return{
                // address: '',
                // addressEndpoint: 'https://api.tomtom.com/search/2/geocode/4%20north%202nd%20street%20san%20jose.json?storeResult=false&lat=37.337&lon=-121.89&view=Unified&key=*****',
                // key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh'
            }
        },
        methods: {
            // searchAddress(){
            //     const encodedAddress = encodeURIComponent(this.address);
            //     axios.get(`https://api.tomtom.com/search/2/geocode/${encodedAddress}.json`, { params: {key : this.key} }).then((response)=>{
            //         console.log(response.data);
            //     })
            //     this.address = '';
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>