<template>
    <div>
        <NewPointerForm @useLocation="useLocation"/>
    </div>
    <div class="d-flex justify-content-center align-items-center">
        <div ref="mapRef" id="map"></div>
    </div>
</template>

<script>
import NewPointerForm from '@/components/Map/NewPointerForm.vue'
    export default {
        name: 'MapComponent',
        components: {
            NewPointerForm
        },
        data(){
            return{
                mapGlob: null,
                locations: [
                    {
                        lat: 45.07,
                        lng: 7.684
                    },
                    {
                        lat: 45.38,
                        lng: 9.32
                    },
                    {
                        lat: 40.85,
                        lng: 14.27
                    },
                    {
                        lat: 41.89,
                        lng: 12.50
                    }
                ],
                options: {
                    idleTimePress: 100,
                    minNumberOfCharacters: 0,
                    searchOptions: {
                        key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                        language: 'en-GB',
                        limit: 5
                    },
                    autocompleteOptions: {
                        key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                        language: 'en-GB'
                    },
                    noResultsMessage: 'No results found.'
                }
            }
        },
        methods: {
            useLocation(location){
                this.locations.push(location);
                // console.log(this.locations)
                const lastLocation = this.locations[this.locations.length - 1];
                // console.log(lastLocation)
                var map = tt.map({
                    key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                    container: this.$refs.mapRef,
                    center: lastLocation,
                    zoom: 15
                })

                this.insertLocs(map)
            },
            initMap(){
                const tt = window.tt;
                console.log(tt);
                const focus = { lat: 41.89, lng: 12.50 }
    
                var map = tt.map({
                    key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                    container: this.$refs.mapRef,
                    center: focus,
                    zoom: 5
                })

                console.log(map);
    
                map.addControl(new tt.FullscreenControl()); 
                map.addControl(new tt.NavigationControl());

                const ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
                map.addControl(ttSearchBox, 'top-left')
    
                this.mapGlob = map
                this.insertLocs(map)
            },
            insertLocs(map){
                const tomtom = window.tt;

                this.locations.forEach((location) => {
                    let marker = new tomtom.Marker().setLngLat(location).addTo(map);
                    const popup = new tt.Popup({ anchor: 'top'}).setText('Porto Alghepoli');
                    marker.setPopup(popup).togglePopup()
                })
            },
            initSearchBox(){
                // let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
                // let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
                // console.log(ttSearchBox);

                // let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
                // document.body.appendChild(searchBoxHTML);
                // console.log(searchBoxHTML);
            }
        },
        mounted(){
            this.initMap();
            // setTimeout(()=>{
            //     this.initSearchBox()
            // }, 5000)
        }
    }
</script>

<style lang="scss" scoped>
#map{
    height: 80vh;
    width: 80vw;
}
</style>