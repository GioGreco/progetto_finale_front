<template>
        <div ref="mapRef" id="map"></div>
</template>

<script>
    export default {
        name: 'MapComponent',
        props: {
            apartmentLocation: {
                type: Object,
                // required: true
            }
        },
        data(){
            return{
                locations: [
                    {
                        lat: this.$props.apartmentLocation.lat,
                        lng: this.$props.apartmentLocation.long
                    }
                ],
                locationName: this.$props.apartmentLocation.title
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
                const focus = { lat: this.$props.apartmentLocation.lat, lng: this.$props.apartmentLocation.long }
    
                var map = tt.map({
                    key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                    container: this.$refs.mapRef,
                    center: focus,
                    zoom: 10
                })
                map.addControl(new tt.FullscreenControl()); 
                map.addControl(new tt.NavigationControl());

                this.insertLocs(map)
            },
            insertLocs(map){
                const tomtom = window.tt;

                this.locations.forEach((location) => {
                    let marker = new tomtom.Marker().setLngLat(location).addTo(map);
                    const popup = new tt.Popup({ anchor: 'top'}).setText(this.locationName);
                    marker.setPopup(popup).togglePopup()
                })
            }
        },
        mounted(){
            this.initMap();
            window.scrollTo(0,0);
        }
    }
</script>

<style lang="scss" scoped>
#map{
    height: 40vh;
    width: 100vw;
}
</style>