import { reactive } from "vue";

export const store = reactive({
  searchedCity: "",
  cityEndpoint:
    "https://api.tomtom.com/search/2/geocode/4%20north%202nd%20street%20san%20jose.json?storeResult=false&lat=37.337&lon=-121.89&view=Unified&key=*****",
  key: "mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh",
  apartmentsList: [],
});
