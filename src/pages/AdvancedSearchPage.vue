<template>

<div class="navholder">
    <div class="search container">
            <div class="row">
                <div class="col">
                    <input type="search" name="cerca" id="cerca" placeholder="Località">
                </div>
            </div>
        </div>
    <div id="smartnavop">
        <div class="smartnav categorie container">
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
        <div class="smartnav servizi container">
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
            <div class="row container">
                <div class="col-6 labels">Numero mimimo stanze</div>
                <div class="col-6 lineasinistra labels">Posti letto</div>
            </div>
            <div class="row container">
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
        <div class="smartnav categorie container">
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


    <header>
        <HeaderComponent></HeaderComponent>
    </header>
    
    <!-- <div>
        <CardComponent></CardComponent>
    </div> -->


</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import CardComponent from '../components/AdvancedSearch/CardComponent.vue';

    export default {
        name: 'AdvancedSearchPage',
        components: {
        HeaderComponent,
        CardComponent
        },
        data(){
            return{
            }
        },
        methods: {
            functionOpener () {
                document.getElementById("filter_open_closer").onchange = (e) => {
                    let checked = e.target.checked;
                    if (checked) {
                        document.getElementById("smartnavop").style.height = "100%";
                        document.getElementById("smartnavop").style.opacity = "1";
                    } else {
                        document.getElementById("smartnavop").style.height = "0";
                        document.getElementById("smartnavop").style.opacity = "0";
                     }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


@media screen and (min-width: 800px) {
    .navholder {
    display: none;
    opacity: 0;
  }
}


.btnopen{
    height: 20px;
    width: 300px;
    margin: 0 auto;
    padding: 0;
    border-radius: 0px 0px 20px 20px ;
    transition: all 200ms;
    overflow: hidden;
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
    padding: 0px 5px;
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
  top:-2px;
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
    top: 0;
    font-size: 1rem;
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

                // align-items: center;
                // font-weight: 600;
                // font-size: 1.1rem;
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
        height: 50px;
        border: 2px solid $grey;
        border-radius: 20px;
        padding: 0px 15px;
        font-size: 1.5rem;
        outline: none;
    }
}

#smartnavop{
    overflow: hidden;
    transition: ease-in-out 250ms all;
}

</style>