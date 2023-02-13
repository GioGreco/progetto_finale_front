<template>
    <div class="allfoot">
        <div class="container">
            <div class="row gy-3">
                <div class="col-12 text-center">
                    <h1>
                        Sito Realizzato da:
                    </h1>
                </div>
                <div class="col-12 col-md-6 col-lg-3 text-center">
                    <div class="creators">
                        <div class="creator">
                            <a target="_blank" href="https://github.com/GioGreco">
                                <img src="https://avatars.githubusercontent.com/u/108538293?v=4" alt="">
                                GitHub <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 text-center">
                    <div class="creators">
                        <div class="creator">
                            <a target="_blank" href="https://github.com/AndreaGallini">
                                <img src="https://avatars.githubusercontent.com/u/75275610?v=4" alt="">
                                GitHub <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 text-center">
                    <div class="creators">
                        <div class="creator">
                            <a target="_blank" href="https://github.com/Roberta-Colombo">
                                <img src="https://avatars.githubusercontent.com/u/108630368?v=4" alt="">
                                GitHub <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 text-center">
                    <div class="creators">
                        <div class="creator">
                            <a target="_blank" href="https://github.com/FrancescolaPiana">
                                <img src="https://avatars.githubusercontent.com/u/109112620?s=400&u=7b06baa474e925a91d92f3f88b2f81915d19d06e&v=4" alt="">
                                GitHub <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/partials/variables' as *;

    .allfoot{
        margin-top: 80px;
        padding: 30px 0px;
        background-color: $raindrop;
        .container{
            .creators{
                transition: ease-in-out all 300ms;
                &:hover{
                    transform: scale(1.1);
                }
                .creator{
                    margin-bottom: 10px;
                }
                a{  
                    transition: all 300ms;
                    &:hover{
                        box-shadow: 0px 0px 20px $white;
                        color: $white;
                        text-shadow: 0px 0px 20px $white;
                        background-color: $sangria;
                    }
                    img{
                    height: 90px;
                    border-radius: 50%;
                    }
                    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.45), inset 0px 2px 5px rgba(255, 255, 255, 0.25);
                    padding: 10px;
                    border-radius: 60px;
                    margin: 0 auto;
                    width: 270px;
                    display: block;
                    background-color: $rosegold;
                    color: $sangria;
                    text-transform: uppercase;
                    font-size: 30px;
                    font-family: $secondary_font;
                }
            }
        }
    }
</style>