<template>
        <div ref="mapRef" id="map"></div>
</template>

<script>
    export default {
        name: 'MapComponent',
        data(){
            return{
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
                ]
            }
        },
        methods: {
            useLocation(location){
                this.locations.push(location);
                const lastLocation = this.locations[this.locations.length - 1];
                var map = tt.map({
                    key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                    container: this.$refs.mapRef,
                    center: lastLocation,
                    zoom: 15
                })

                this.insertLocs(map)
            }
            ,
            initMap(){
                const tt = window.tt;
                const focus = { lat: 41.89, lng: 12.50 }
    
                var map = tt.map({
                    key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                    container: this.$refs.mapRef,
                    center: focus,
                    zoom: 15
                })
    
                map.addControl(new tt.FullscreenControl()); 
                map.addControl(new tt.NavigationControl());

                this.insertLocs(map)
            },
            insertLocs(map){
                const tomtom = window.tt;

                this.locations.forEach((location) => {
                    let marker = new tomtom.Marker().setLngLat(location).addTo(map);
                    const popup = new tt.Popup({ anchor: 'top'}).setText('Forestopoli');
                    marker.setPopup(popup).togglePopup()
                })
            }
        },
        mounted(){
            this.initMap();
        }
    }
</script>

<style lang="scss" scoped>
#map{
    height: 40vh;
    width: 100vw;
}
</style>