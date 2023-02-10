<template>
    <header>
        <HeaderComponentVue></HeaderComponentVue>
    </header>
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
    <div class="apartment-info row g-0">
        <div class="info-left col-12 col-md-6">
            <h4>Nome Appartamento</h4>
            <p class="utilities">
                <span>2 stanze da letto</span>
                <span>2 bagni</span>
                <span>5 posti letto</span>
            </p>
            <div class="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, nihil. Ab odit voluptatem, tenetur corporis repellat quis rerum maxime fuga quibusdam, temporibus quisquam labore, impedit molestiae eaque recusandae. Sit, quae delectus sint repellendus explicabo rerum necessitatibus nemo similique suscipit provident.
            </div>
        </div>
        <div class="info-right col-12 col-md-6">
            <h3 class="price"><span>900</span> € / notte</h3>
            <div>
                <div class="category">
                    <i class="fa-solid fa-building"></i> <span>Appartamento</span>
                </div>
                <div class="rating">
                    <i class="fa-solid fa-star"></i> <span>5 recensioni</span>
                </div>
                <div class="address">
                    <i class="fa-solid fa-marker"></i> <span>Via Strada Romana 13, 12448 Roma</span>
                </div>
            </div>
        </div>
    </div>
    <div class="map-position">
    
    </div>
    <div class="row g-0 container mx-auto">
        <div class="services col-12 col-md-6">
            <h4>A tua Disposizione</h4>
            <div class="row">
                <div class="col-6">
                    <i class="fa-solid fa-wifi"></i>
                </div>
                <div class="col-6">
                    <i class="fa-solid fa-wifi"></i>
                </div>
                <div class="col-6">
                    <i class="fa-solid fa-wifi"></i>
                </div>
                <div class="col-6">
                    <i class="fa-solid fa-wifi"></i>
                </div>
                <div class="col-6">
                    <i class="fa-solid fa-wifi"></i>
                </div>
            </div>
        </div>
        <div class="contact-form col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div class="contact-inner d-flex flex-column justify-content-between align-items-center">
                <h5>Necessiti di più informazioni?</h5>
                <p>None esitare a contattare l'host nel caso tu abbia domande sull'alloggio, la zona o i servizi offerti.</p>
                <span>Clicca qui per inviare un messaggio</span>
                <i class="fa-solid fa-envelope"></i>
            </div>
        </div>
    </div>
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
            
        },
        mounted(){

        }
    }
</script>

<style lang="scss" scoped>
@use '@/assets/styles/partials/_variables.scss' as *;
    .photo-album{
        height: 400px;
        position: relative;
        margin-bottom: 50px;
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
            background-color: wheat;
            height: 200px;

            .utilities{
                span{
                    &:not(:last-of-type)::after{
                        content: '\2022';
                        margin: 0 5px;
                    }
                }
            }
        }
        .info-right{
            background-color: firebrick;
            height: 200px;
        }
    }

    .services{

    }
    .contact-form{
        .contact-inner{
            background-color: sandybrown;
            padding: 20px;
            border-radius: 20px;
        }
    }
</style>