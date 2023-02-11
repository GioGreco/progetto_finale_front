<template>
<div class="allm">
    <div class="container">
        <Router-link class="title" :to="'/'">BoolBnB</Router-link> 
        <!-- <a class="title" href="#">BoolBnB</a> -->

        <ul class="">
            <li><a href="http://127.0.0.1:8000/">Account</a></li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>

@use '../assets/styles/partials/variables' as *;
    
.allm{
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.150);
}
.container{
        display: flex;
        justify-content: center;
        align-items: center;

        .title{
            font-size: 40px;
            color: $rosegold;
            font-weight: 700;
        }
        ul{
            margin: 0;
            padding: 0;
            gap: 10px;
            li{
                margin: 0;
                 padding: 0;
                 a{
                    color: $white;
                    background-color: $rosegold;
                    font-size: 18px;
                    padding: 4px 24px;
                    border-radius: 20px;
                    font-weight: 600;
                 }
            }
        }
    }

    @media screen and (min-width: 800px) {
    .container {
    justify-content: space-between;
        ul{
            display: flex;
        }
    }
    }
    @media screen and (max-width: 800px) {
    .container {
                ul{
                    display: none;
                }
            }
    }

</style>