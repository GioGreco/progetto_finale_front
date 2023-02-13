<template>

</template>

<script>
import {store} from '../store';
import axios from 'axios';

    export default {
        name: 'FilterLargeComponent',
        data(){
            
            return {
                store,
                array1 : [],
                array2 : [],
                loading: true,
                options: {
                    idleTimePress: 100,
                    minNumberOfCharacters: 0,
                    searchOptions: {
                        key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                        language: 'it-IT',
                        limit: 5
                    },
                    autocompleteOptions: {
                        key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                        language: 'it-IT'
                    },
                    noResultsMessage: 'No results found.'
                },
            }
        },
        methods: {
            initSearchBox(){
                // let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
                let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
                // console.log(ttSearchBox);

                let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
                document.getElementById('search').appendChild(searchBoxHTML);
                // console.log(searchBoxHTML);

                ttSearchBox.on('tomtom.searchbox.resultsfound', function(data){
                    console.log(data);
                })

                ttSearchBox.on('tomtom.searchbox.resultselected', function(data){
                    console.log(data);
                })
            },
            getProducts() {
        axios.get(`${this.store.apiBaseUrl}/apartments`).then((res) => {
        this.array1 = res.data.results;
        console.log(this.array1);
        this.loading = false;
            });
            },


        },
        mounted() {
        this.getProducts();
        this.initSearchBox();
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.wholefilter{
    height: 800px;
    background-color: aqua;
    width: 500px;
}

</style>