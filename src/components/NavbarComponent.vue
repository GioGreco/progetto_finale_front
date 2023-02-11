<template>
    <nav class="d-flex flex-column align-items-center">
        <TransitionGroup name="navMobileFX" tag="ul" class="d-flex flex-column">
            <li v-for="(navItem, index) in navItems" :key="index" v-show="showNav">
                <RouterLink active-class="is-active" class="d-flex justify-content-center align-items-center" :to="navItem.path" v-html="navItem.html"></RouterLink>
            </li>
        </TransitionGroup>
        <div @click="showNav = !showNav" class="navToggler">
            <i v-if="!showNav" class="fa-solid fa-bars"></i>
            <i v-else class="fa-solid fa-xmark"></i>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavbarComponent',
        data(){
            return {
                navItems: [
                    {
                        name: 'search',
                        path: '/search',
                        html: '<i class="fa-solid fa-magnifying-glass"></i>'
                    },
                    {
                        name: 'home',
                        path: '/',
                        html: '<i class="fa-solid fa-house"></i>'
                    },
                    {
                        name: 'user',
                        path: 'redirect to laravel',
                        html: '<i class="fa-solid fa-user"></i>'
                    },
                ],
                showNav: false
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>

@use '../assets/styles/partials/variables' as *;

nav{
    position: fixed;
    z-index: 500;
    bottom: 0;
    right: 0;
    min-width: 50px;
    margin: 0 20px 20px 0;
    font-size: 2rem;
    .navToggler{
        height: 60px;
        width: 60px;
        border-radius: 50%;
        text-align: center;
        outline: 4px solid $raindrop;
        background-color: $emerald;
        line-height: 60px;
        margin-top: 10px;
        color: $white;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            margin-top: 10px;
            &:first-of-type{
                transition: all .2s 0s;
            }
            &:nth-of-type(2){
                transition: all .2s .1s;
            }
            // &:nth-of-type(3){
            //     transition: all .2s .2s;
            // }
            // &:nth-of-type(4){
            //     transition: all .2s .3s;
            // }
            a{
                display: block;
                text-align: center;
                height: 60px;
                width: 60px;
                font-size: 1.5rem;
                text-align: center;
                line-height: 50px;
                border-radius: 50%;
                outline: 4px solid $sangria;
                background-color: $raindrop;
                text-decoration: none;
                color: $sangria;
            }
        }
    }
}

//animation
.navMobileFX-enter-from{
    transform: translate(0, 10px);
    opacity: 0;
}

.navMobileFX-enter-to{
    transform: translate(0, 0);
    opacity: 1;   
}

.navMobileFX-leave-from{
    transform: translate(0, 0);
    opacity: 1;
}

.navMobileFX-leave-to{
    transform: translate(0, 10px);
    opacity: 0;
}

.navMobileFX-enter-active, .navMobileFX-leave-active{
    transition: all .5s;
}
</style>