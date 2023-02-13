<template>
    <header>
        <HeaderComponent></HeaderComponent>
    </header>
    <div v-if="success" id="show-mobile">
        <div>
            <div class="cover-img">
                <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
            </div>
            <div class="address">
                <h2>{{ apartment.title }}</h2>
                <div><i class="fa-solid fa-location-dot"></i> {{ apartment.address }}</div>
            </div>
        </div>
        <div>
            <div class="gallery">
                <div class="d-flex justify-content-between">
                    <h3>Galleria</h3>
                    <span>See all</span>
                </div>
                <div class="pics row">
                    <div class="pic-wrap">
                        <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                    </div>
                    <div class="pic-wrap">
                        <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="details">
                <h3></h3>
                <div>
                </div>
            </div>
            <div class="description">
                <h3></h3>
                <div></div>
            </div>
            <div class="services">
                <h3></h3>
                <div class="d-flex">
                    
                </div>
            </div>
            <div class="location">
            
            </div>
        </div>
        <div class="price"></div>
    </div>
    <div v-if="success" id="show-desktop">
        <div class="photo-album">
            <div class="pic-row d-flex justify-content-between">
                <div class="pic-wrap">
                    <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                </div>
                <div class="pic-wrap">
                    <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                </div>
                <div class="pic-wrap">
                    <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                </div>
                <div class="pic-wrap">
                    <img src="https://img.staticmb.com/mbcontent//images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" alt="">
                </div>
            </div>
            <div class="bottom-layer"></div>
        </div>
        <div class="apartment-info row g-0 fs-5">
            <div class="info-left col-12 col-md-6">
                <h2>{{ apartment.title }}</h2>
                <p class="utilities fs-5">
                    <span>{{ apartment.room_number }} camere</span>
                    <span>{{ apartment.bath_number }} bagni</span>
                    <span>{{ apartment.bed_number }} posti letto</span>
                </p>
                <div class="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, nihil. Ab odit voluptatem, tenetur corporis repellat quis rerum maxime fuga quibusdam, temporibus quisquam labore, impedit molestiae eaque recusandae. Sit, quae delectus sint repellendus explicabo rerum necessitatibus nemo similique suscipit provident.
                </div>
            </div>
            <div class="info-right col-12 col-md-6 d-flex flex-column align-items-end justify-content-between">
                <h2 class="price"><span>{{ apartment.price }}</span> € / notte</h2>
                <div class="specs">
                    <div class="category">
                        <i class="fa-solid fa-city me-2 fs-4"></i> <span>{{ apartment.category.name }}</span>
                    </div>
                    <div class="rating my-2">
                        <i class="fa-solid fa-star me-2 fs-4"></i> <span>5 recensioni</span>
                    </div>
                    <div class="address">
                        <i class="fa-solid fa-location-dot me-2 fs-4"></i> <span>{{ apartment.address }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="map-position">
            <MapComponent :apartmentLocation="apartment"/>
        </div>
        <div class="row g-0">
            <div class="services col-12 col-md-6">
                <h3 class="mb-5">A tua disposizione :</h3>
                <div class="row">
                    <div v-for="(service, index) in apartment.services" :key="index" class="col-6">
                        <i class="fa-solid fa-wifi"></i>  {{ service.title }}
                    </div>
                </div>
            </div>
            <div class="contact-form col-12 col-md-6">
                <div class="contact-inner d-flex flex-column justify-content-between align-items-center">
                    <h5 class="text-white">Necessiti di più informazioni?</h5>
                    <p class='m-0'>None esitare a contattare l'host nel caso tu abbia domande sull'alloggio, la zona o i servizi offerti.</p>
                    <span>Clicca qui per inviare un messaggio</span>
                    <i class="fa-regular fa-envelope fs-2 text-white"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import MapComponent from '@/components/Map/MapComponent.vue';

    export default {
        name: 'SingleApartmentPage',
        components: {
            HeaderComponent,
            MapComponent
        },
        data(){
            return{
                store,
                apartment: {},
                success: false
            }
        },
        methods: {
            getProduct(){
                axios.get(`${store.apiBaseUrl}/${this.$route.params.slug}`).then((response)=>{
                    if (response.data.success) {
                        this.apartment = response.data.results;
                        this.success = true;
                        console.log(this.apartment)
                    } else {
                        this.$router.push({ name: "not-found" });
                    }
                });
            }
        },
        mounted(){
            this.getProduct();
        }
    }
</script>

<style lang="scss" scoped>
@use '@/assets/styles/partials/_variables.scss' as *;

    #show-mobile{
        display: none;

        .cover-img{
            width: 100vw;
            height: 300px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .address{
            width: 90vw;
            padding: 30px 0;
            margin: 0 auto;
            border-bottom: 1px solid $darkgrey;
        }

        .gallery{
            .pics{
                    flex-wrap: nowrap;
                    overflow-x: scroll;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                .pic-wrap{
                    width: 40vw;
                    height: 20vh;
                    margin: 0 10px;
                    border-radius: 30px;
                    overflow: hidden;
                    img{
                        height: 100%;
                        width: 100%
                    }
                }
            }
        }

        .details{

        }
        .services{

        }

        .description{

        }

        .location{

        }

        .price{

        }
    }
    .photo-album{
        height: 400px;
        position: relative;
        margin-bottom: 15px;
        .pic-row{
            height: 100%;
            padding: 0 50px;
            .pic-wrap{
                height: 100%;
                margin: 0 10px;
                width: calc((100% - 200px) / 4);
                cursor: pointer;
                transition: width .8s ease-in-out;

                &:hover{
                    width: 60%;
                }

                img{
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        .bottom-layer{
            position: absolute;
            left: 0;
            bottom: -15px;
            width: 100%;
            height: 30px;
            background-color: $raindrop;
            z-index: -1;
        }
    }

    .apartment-info{
        .info-left{
            padding: 60px 100px;
            h2{
                color: $sangria;
                font-weight: bolder;
            }
            .utilities{
                span{
                    &:not(:last-of-type)::after{
                        content: '';
                        display: inline-block;
                        height: 5px;
                        width: 5px;
                        border-radius: 50%;
                        background-color: $sangria;
                        margin: 0 5px 2px;
                    }
                }
            }
        }
        .info-right{
            padding: 60px 100px;
            i{
                color: $emerald;
            }
            .price{
                color: $emerald;
                font-weight: bolder;
                font-size: 2.3rem;
            }
            .specs{
                text-align: end;
            }
        }
    }

    .services{
        padding: 60px 100px;
        h3{
            color: $sangria;
            font-weight: bolder;
        }
        i{
            border: 2px solid $mauve;
            border-radius: 50%;
            text-align: center;
            line-height: 26px;
            font-size: .9rem;
            color: $mauve;
            height: 30px;
            width: 30px;
            margin-right: 3px;
        }
        .col-6{
            margin-bottom: 16px;
        }
    }
    .contact-form{
        padding: 60px 100px;

        .contact-inner{
            background-color: $mauve;
            padding: 20px;
            height: 100%;
            border-radius: 20px;
            text-align: center;
            color: $sangria;
            h5{
                border-bottom: 1px solid white;
                padding-bottom: 3px;
                width: 85%;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        
    }

    @media screen and (max-width: 992px) {

    }

    @media screen and (max-width: 768px) {

    }

    @media screen and (max-width: 576px) {
        #show-mobile{
            display: block;
        }
        #show-desktop{
            display: none;
        }
    }
</style>