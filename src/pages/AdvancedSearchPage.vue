<template>

<div class="allcont">
    <header>
        <HeaderComponent></HeaderComponent>
    </header>
    <div class="navholder">
        <div class="search">
                <div class="row">
                    <div class="col">
                        <input type="search" name="cerca" id="cerca" placeholder="Località">
                    </div>
                </div>
            </div>
        <div id="smartnavop">
            <div class="smartnav categorie ">
                <ul>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="open_space" checked>
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-person-shelter"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="case_intere">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-house"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="appartamento">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-city"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="attico">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-people-roof"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="villa_campagna">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-tree-city"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="villa_mare">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-house-flood-water"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="industriale">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-warehouse"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="contemporaneo">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-building"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain emerald">
                        <input type="radio" name="categoria" id="romano">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-building-columns"></i>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="smartnav servizi ">
                <ul>
                    <li class=" contain sangria">
                        <input type="checkbox" name="wifi" id="wifi">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-wifi"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="fan" id="fan">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-fan"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="garage" id="garage">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-square-parking"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="piscina" id="piscina">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-person-swimming"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="idromassaggio" id="idromassaggio">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-water-ladder"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="portineria" id="portineria">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-bell-concierge"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="sauna" id="sauna">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-spa"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="palestra" id="palestra">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-dumbbell"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="tennis" id="tennis">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-table-tennis-paddle-ball"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="golf" id="golf">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-golf-ball-tee"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="giardino" id="giardino">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-brands fa-pagelines"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="patio" id="patio">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-shop"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="mare" id="mare">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-water"></i>
                            </span>
                        </span>
                    </li>
                    <li class=" contain sangria">
                        <input type="checkbox" name="security" id="security">
                        <span class="checkmark">
                            <span class="checkedicon"><i class="fa-solid fa-person-military-pointing"></i>
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="smartnav altri_filtri">
                <div class="row ">
                    <div class="col-6 labels">Numero mimimo stanze</div>
                    <div class="col-6 lineasinistra labels">Posti letto</div>
                </div>
                <div class="row ">
                    <div class="col-6">
                        <ul>
                            <li class="rosegold">
                                <input type="radio" name="stanze" id="" checked>
                                <span class="checkmark2">
                                    <span class="checkedicon"><i class="fa-solid fa-3"></i>
                                    </span>
                                </span>
                            </li>
                            <li class="rosegold">
                                <input type="radio" name="stanze" id="">
                                <span class="checkmark2">
                                    <span class="checkedicon"><i class="fa-solid fa-6"></i>
                                    </span>
                                </span>
                            </li>
                            <li class="rosegold">
                                <input type="radio" name="stanze" id="">
                                <span class="checkmark2">
                                    <span class="checkedicon"><i class="fa-solid fa-9"></i>
                                    </span>
                                </span>
                            </li>
                            <li class="rosegold">
                                <input type="radio" name="stanze" id="">
                                <span class="checkmark2">
                                    <span class="checkedicon"><i class="fa-solid fa-plus"></i>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 lineasinistra">
                        <ul>
                            <li class="rosegold">
                                <input type="radio" name="letti" id="" checked>
                                <span class="checkmark2">
                                    <span class="checkedicon"><i class="fa-solid fa-2"></i>
                                    </span>
                                </span>
                            </li>
                            <li class="rosegold">
                                <input type="radio" name="letti" id="">
                                <span class="checkmark2">
                                    <span class="checkedicon"><i class="fa-solid fa-4"></i>
                                    </span>
                                </span>
                            </li>
                            <li class="rosegold">
                                <input type="radio" name="letti" id="">
                                <span class="checkmark2">
                                    <span class="checkedicon"><i class="fa-solid fa-6"></i>
                                    </span>
                                </span>
                            </li>
                            <li class="rosegold">
                                <input type="radio" name="letti" id="">
                                <span class="checkmark2">
                                    <span class="checkedicon"><i class="fa-solid fa-plus"></i>
                                    </span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="smartnav categorie ">
                <ul>
                    <li class="">
                        <h3>slider controllo distanza da aggiungere</h3>
                    </li>
                </ul>
            </div>
        </div>
        <div class="btnopen">
            <div class="contain3">
                <input @click="functionOpener()" type="checkbox" name="filter_open_closer" id="filter_open_closer" checked>
                    <span class="checkmark3down"><i class="fa-solid fa-chevron-down"></i></span>
                    <span class="checkmark3upper"><i class="fa-solid fa-chevron-up"></i></span>
                    
            </div>
        </div>
    </div>
</div>

    <div class="container maincont">
        <div class="row">
            <div class="col-12 col-md-8">
                <div class="row gy-4">
                    <!-- <div v-for="n in 2" class="col-6 col-md-12 card_sponsored_apartment">
                <div class="imgcont">
                    <a href="#" class="cardapartments row">
                            <div class="col-12 col-md-6">
                                <img id="imgeneric" src="https://images.pexels.com/photos/7595109/pexels-photo-7595109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                            </div>
                            
                            <div class="col-12 col-md-6">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="text_infob">
                                            <h1>Villa in Campagna con piano  dedicatyo</h1>
                                            <h4>descrizione generica di una villa in campagna</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </a>
                </div>
                    </div> -->
            
            <div v-for="(apartment, index) in array1" :key="index"  class="col-6 col-md-12 card_apartment">
                <div class="imgcont">
                    <a href="#" class="cardapartments row">
                            <div class="col-12 col-md-6">
                                <img id="imgeneric" src="{{apartment.cover_img}}" alt="">
                            </div>
                            
                            <div class="col-12 col-md-6">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="text_infob">
                                            <h1>{{apartment.title}}</h1>
                                            <h3><i class="fa-solid fa-location-dot"></i> {{apartment.address}}</h3>
                                            <h3><i class="fa-solid fa-euro-sign"></i> {{apartment.price}}/Notte</h3>
                                            <div class="d-flex">
                                                <h4><i class="fa-solid fa-bed"></i> {{apartment.bed_number}}</h4>
                                            <h4><i class="fa-solid fa-door-open"></i> {{apartment.room_number}}</h4>
                                            <h4><i class="fa-solid fa-toilet"></i> {{apartment.bath_number}}</h4>
                                            <h4><i class="fa-brands fa-codepen"></i> {{apartment.mq_value}}</h4></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </a>
                </div>
            </div>
        </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="wholefilter">
            
            <div id="search">
                
            </div>
            <!-- <input placeholder="inserisci una destinazione" type="search" name="location" id="location"> -->

            <div class="category">
                <label for="openspace">open space</label>
                <input type="radio" name="categoria" id="openspace">
                <label for="appartamento">appartamento</label>
                <input type="radio" name="categoria" id="appartamento">
                <label for="attico">attico</label>
                <input type="radio" name="categoria" id="attico">
            </div>

            <div class="services">
                <label for="wifi">Wi-Fi</label>
                <input type="checkbox" name="wi-fi" id="wifi">
                <label for="ariacondizionata">aria_condizionata</label>
                <input type="checkbox" name="aria_condizionata" id="ariacondizionata">
                <label for="piscina">piscina</label>
                <input type="checkbox" name="piscina" id="piscina">
            </div>

            <div class="stanze">
                <label for="tre">3</label>
                <input type="checkbox" name="tre" id="tre">
                <label for="seii">6</label>
                <input type="checkbox" name="seii" id="seii">
                <label for="nove">9</label>
                <input type="checkbox" name="nove" id="nove">
                <label for="moltii">more</label>
                <input type="checkbox" name="moltii" id="moltii">
            </div>

            <div class="beds">
                <label for="due">2</label>
                <input type="checkbox" name="due" id="due">
                <label for="quattro">4</label>
                <input type="checkbox" name="quattro" id="quattro">
                <label for="sei">6</label>
                <input type="checkbox" name="sei" id="sei">
                <label for="molti">more</label>
                <input type="checkbox" name="molti" id="molti">
            </div>
    </div>
            </div>
        </div>
    </div>

    <!-- <div>
        <CardComponent></CardComponent>
    </div> -->

</template>

<script>
import {store} from '../store';
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import CardComponent from '../components/AdvancedSearch/CardComponent.vue';
import FilterLargeComponent from '../components/FilterLargeComponent.vue';

    export default {
        name: 'AdvancedSearchPage',
        components: {
    HeaderComponent,
    CardComponent,
    FilterLargeComponent
},
        data(){
            return{
                store,
                array1: [],
                array2: [],
                loading: true,
                latitudine: "",
                longitudine: "",
                options: {
                    idleTimePress: 100,
                    minNumberOfCharacters: 0,
                    searchOptions: {
                        key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                        language: 'it-IT',
                        limit: 5
                    },
                    autocompleteOptions: {
                        key: 'mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh',
                        language: 'it-IT'
                    },
                    noResultsMessage: 'No results found.'
                },
            }
        },
        watch: {
            // whenever question changes, this function will run
            question(newQuestion, oldQuestion) {
            if (newQuestion.includes('?')) {
                this.getAnswer()
            }
            }
        },
        methods: {
            functionOpener () {
                document.getElementById("filter_open_closer").onchange = (e) => {
                    let checked = e.target.checked;
                    if (checked) {
                        document.getElementById("smartnavop").style.opacity = "1";
                        document.getElementById("smartnavop").style.height = "269px";
                    } else {
                        document.getElementById("smartnavop").style.opacity = "0";
                        document.getElementById("smartnavop").style.height = "0px";
                     }
                }
            },
            initSearchBox(){
                // let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
                let ttSearchBox = new tt.plugins.SearchBox(tt.services, this.options);
                // console.log(ttSearchBox);

                let searchBoxHTML = ttSearchBox.getSearchBoxHTML();
                document.getElementById('search').appendChild(searchBoxHTML);
                // console.log(searchBoxHTML);

                ttSearchBox.on('tomtom.searchbox.resultsfound', function(data){
                    // console.log(data);
                })

                ttSearchBox.on('tomtom.searchbox.resultselected', (data)=>{
                    console.log(data);
                    let lat = data.data.result.position.lat;
                    this.latitudine = lat;
                    console.log(this.latitudine);

                    let lng = data.data.result.position.lng;
                    this.longitudine = lng;
                    console.log(this.longitudine);

                })
            },
            getProducts() {
                axios.get(`${this.store.apiBaseUrl}/apartments`).then((res) => {
                this.array1 = res.data.results;
                console.log(this.array1);
                this.products.forEach((item) => {
                    if ((res.data.results.lat)){
                        this.array2.push(item);
                        }
                    });
                this.loading = false;
            });
            },
        },
        mounted() {
            this.getProducts();
            this.initSearchBox();
            },
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


.wholefilter{
    height: 800px;
    background-color: aqua;
    width: 500px;
}

@media screen and (min-width: 800px) {
    .navholder {
    display: none;
    opacity: 0;
  }
}

@media screen and (min-width: 800px) {
    .maincont {
    display: flex;
  }
}

@media screen and (max-width: 800px) {
    #imgeneric{
        height: 160px;
    }
}

// @media screen and (min-width: 800px) {
//         .cardapartments{
//         display: flex;
//         img{
//             width: 400px;
//         }
//     }
// }



.maincont::-webkit-scrollbar {
  display: none;
}

footer{
    z-index: 1;
}

.text_infoa{
    padding: 10px 15px;
    color: $darkgrey;
    h1 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1.6rem;
    text-overflow: ellipsis;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0;

    }
    h4 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
        margin-bottom: 0;

    }
}
.text_infob{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 5px;
    color: $darkgrey;
    h1 {
    width: 100%;
    font-size: 1.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 800;
    }
    h3 {
    width: 100%;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 800;
    }
    h4 {
    font-size: .9rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 800;
    margin: 0;
    }
}
.allcont{
    top: -1px;
    z-index: 100;
    position: fixed;
    width: 100%;
}
.maincont{
    z-index: 50;
    margin-top: 128px;
    padding-top: 40px;
    padding-bottom: 10px;
    overflow-y: scroll;
    .card_sponsored_apartment{
        .imgcont{
            
            position: relative;
            box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            .sponsored_txt{
                background-color: rgba(255, 255, 255, 0.61);
                padding: 2px 15px;
                position: absolute;
                left: 10px;
                top: 10px;
                text-transform: uppercase;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
            }
            .row{
                background-color: $white;
            }
            img{
                object-fit: cover;
                height: 280px;
                width: 100%;
            }
        }
    }
    .card_apartment{

        .imgcont{
            transition: all 250ms;
            filter: brightness(.8);
                &:hover{
                    filter: brightness(1.1);
                }  
            position: relative;
            box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
            .row{
            }
            img{
                // border-radius: 20px 20px 0px 0px;
                object-fit: cover;
                height: 250px;
                width: 100%;
            }
        }
        .img_case{
            height: 250px;
            overflow: hidden;
            border-radius: 20px;
            img{
            }
        }
    }
}


header{
    z-index: 100;
}
.btnopen{
    height: 20px;
    width: 300px;
    margin: 0 auto;
    padding: 0;
    border-radius: 0px 0px 20px 20px ;
    transition: all 200ms;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0);
    a{
        color: $grey;
        width: 100%;
    }
}
.lineasinistra{
    border-left: 2px solid $grey;
}
.labels{
    font-weight: 700;
}
.contain3 {
    justify-content: center;
    height: 20px;
    width: 100%;
    display: flex;
    position: relative;
    // border-radius: 50%;
    background-color: $emerald;
    transition: all 200ms;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  #filter_open_closer{
                        opacity: 0;
                        cursor: pointer;
                        z-index: 100;
                        left: 0;
                        height: 300px;
                        width: 300px;
  }
}
.contain{
    justify-content: center;
    height: 40px;
    width: 50px;
    display: flex;
    position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}
.rosegold{
    height: 30px;
    width: 40px;
    padding: 0px 5px;
    display: flex;
  display: block;
  position: relative;
//   padding-left: 35px;
//   margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide the browser's default checkbox */
.contain input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 100;
  left: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.rosegold input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 100;
  left: 0;
  height: 30px;
  width: 30px;
  border-radius: 10px;
}
.checkmark3down {
  position: absolute;
  left: auto;
  top:-2px;
    color: $white;
    transition: all 200ms;
}
.checkmark3upper {
  position: absolute;
  left: auto;
  top:-2;
opacity: 0;
color: $white;
transition: all 200ms;
}
.checkmark {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: $white;
  border: 4px solid $grey;
}
/* Create a custom checkbox */
.checkmark2 {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  background-color: $white;
  border: 4px solid $grey;
}
.checkedicon{
    font-size: 1.2rem;
    // display: none;
    color: $grey;
    text-align: center;
    transition: all 200ms;

}
// comandi apertura window
.contain3 input:checked ~ .checkmark3upper {
  opacity: 1;
}
.contain3 input:checked ~ .checkmark3down {
    opacity: 0;
}
/* When the checkbox is checked, add a blue background */
.emerald input:checked ~ .checkmark {
  background-color: $emerald;
  border: 4px solid $emerald;
}
.sangria input:checked ~ .checkmark {
  background-color: $sangria;
  border: 4px solid $sangria;
}
.rosegold input:checked ~ .checkmark2 {
  background-color: $rosegold;
  border: 4px solid $rosegold;
}
/* Show the checkmark when checked */
.contain input:checked ~ .checkmark > .checkedicon {
    display: block;
    color: $white;
}
.rosegold input:checked ~ .checkmark2 > .checkedicon {
    display: block;
    color: $white;
}
.smartnav{
    padding: 0px 10px;
    overflow-x: scroll;
    border-bottom: 2px solid $raindrop;
        ul{
            padding-left: 5px;
            display: flex;
            align-items: center;
            height: 60px;
            min-width: fit-content; 
            // oro colato

            li{
                input{
                }
                .checkmark {
                }
            }
        }
    }
.smartnav::-webkit-scrollbar {
    display: none;
}
.search{
    padding: 10px 10px;
    background-color: $emerald;
    #cerca{
        width: 100%;
        height: 46px;
        border: 2px solid $grey;
        border-radius: 50px;
        padding: 0px 20px;
        font-size: 1.5rem;
        outline: none;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
    }
}


#smartnavop{
    background-color: rgba(255, 255, 255, 0.85);
    overflow: hidden;
    // height: 0px;
    height: 269px;
    transition: ease-in-out 250ms all;
}

</style>