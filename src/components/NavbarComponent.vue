<template>
    <nav class="d-flex flex-column align-items-center">
        <TransitionGroup name="navMobileFX" tag="ul" class="d-flex flex-column">
            <li v-for="(navItem, index) in navItems" :key="index" v-show="showNav">
                <RouterLink active-class="is-active" class="navLink" :to="navItem.path" v-html="navItem.icon"></RouterLink>
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
                        name: 'home',
                        path: '/',
                        icon: '<i class="fa-solid fa-house"></i>'
                    },
                    {
                        name: 'search',
                        path: '/',
                        icon: '<i class="fa-solid fa-magnifying-glass"></i>'
                    },
                    {
                        name: 'messages',
                        path: '/',
                        icon: '<i class="fa-solid fa-comment"></i>' 
                    },
                    {
                        name: 'profile',
                        path: '/',
                        icon: '<i class="fa-solid fa-user"></i>'
                    }
                ],
                showNav: false
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
nav{
    position: fixed;
    bottom: 0;
    right: 0;
    min-width: 50px;
    margin: 0 20px 20px 0;
    .navToggler{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: sandybrown;
        line-height: 40px;
        margin-top: 10px;
        color: white
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            margin-top: 5px;
            &:first-of-type{
                transition: all .2s 0s;
            }
            &:nth-of-type(2){
                transition: all .2s .1s;
            }
            &:nth-of-type(3){
                transition: all .2s .2s;
            }
            &:nth-of-type(4){
                transition: all .2s .3s;
            }
            a{
                display: block;
                text-align: center;
                height: 50px;
                width: 50px;
                text-align: center;
                line-height: 50px;
                border-radius: 50%;
                background-color: salmon;
                color: white;
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