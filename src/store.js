import { reactive } from "vue";
import axios from 'axios';


export const store = reactive({
  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBasePath: "http://127.0.0.1:8000/storage/",
  searchedCity: "",
  apiBaseUrl: "http://127.0.0.1:8000/api",
  cityEndpoint:
    "https://api.tomtom.com/search/2/geocode/4%20north%202nd%20street%20san%20jose.json?storeResult=false&lat=37.337&lon=-121.89&view=Unified&key=*****",
  key: "mjOVKpgWnl7gsw0eNKkVguzisLjLZGIh",
  apartmentsList: [],
  sendForm(formData){
    formData.loading = true;
    const data = {
        apartment_id: formData.apartment_id,
        name: formData.name,
        email: formData.email,
        message: formData.message
    }

    axios.post(`${this.apiBaseUrl}/contacts`, data).then((response)=>{
        formData.success = response.data.success;
        console.log(response)
        if(!formData.success){
            // formData.errors = response.data.errors;
            console.log('errore')
            console.log(formData);
            console.log(data);
        } else {
            console.log('invio riuscito')
            formData.name = '';
            formData.email = '';
            formData.message = '';
        }
        formData.loading = false;
    });
} 
});
