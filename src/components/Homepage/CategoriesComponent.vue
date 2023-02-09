<template>
    <div>
        <div id="categoriesWrapper" class="d-flex flex-column vw-100">
            <div v-for="(category, index) in homeCategories" :key="index" class="category">
                <h4 class="categoryName text-uppercase rounded-pill">{{ category.name }}</h4>
                <div class="categoryPic">
                    <img :src="category.html" :alt="category.name">
                </div>
                <div class="layoverFull"></div>
                <div class="layoverPartial"></div>
                <div class="categoryInfo">
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CategoriesComponent',
        data(){
            return{
                homeCategories: [
                    {
                        name: 'apartments',
                        path: '#',
                        html: 'https://media.homeanddecor.com.sg/public/2019/06/104122-collective-design-holland-peak-1.png',
                        description: 'lorem lorem lorem'
                    },
                    {
                        name: 'mansions',
                        path: '#',
                        html: 'https://www.christies.com/media-library/images/features/articles/2016/05/04/luxury-living-tuscan-homes/california.jpg?w=780',
                        description: 'lorem lorem lorem'
                    },
                    {
                        name: 'attics',
                        path: '#',
                        html: 'https://txc5xc6e.cdn.imgeng.in/custom/01505/foto/20190328153632-17.jpg',
                        description: 'lorem lorem lorem'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '@/assets/styles/partials/variables.scss' as *;

#categoriesWrapper{
    .category{
        height: 75vh;
        background-color: green;
        border: 1px solid black;
        position: relative;
        cursor: pointer;

        &:hover .layoverFull{
            opacity: 0;
        }

        &:hover .layoverPartial{
            opacity: 1;
        }

        &:hover .categoryName{
            opacity: 0;
        }
        .categoryName{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: $mauve;
            color: white;
            z-index: 250;
            padding: 10px 20px;
            transition: opacity .5s ease-out;
        }
        .categoryPic{
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            z-index: 240;
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        .layoverFull{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(0deg, rgba(0,0,0,0.45) 100%, rgba(0,0,0,0.45) 100%);
            z-index: 245;
            transition: opacity .5s ease-out;
        }

        .layoverPartial{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(300deg, rgba(0,0,0,0.2231267507002801) 20%, $mauve 65%);
            z-index: 245;
            opacity: 0;
            transition: opacity .5s ease-out;
        }
        .categoryInfo{
            display: none;
            h3{

            }
            p{

            }
        }
    }
}
</style>