<template>
    <div v-if="formData.success" class="alert alert-success text-center" role="alert">
        L'invio è andato a buon fine! Riceverai notizie dall'Host al più presto!
    </div>
    <form  class="text-start w-100 d-flex flex-column" @submit.prevent="handleSendForm">
        <div class="mb-3">
            <label for="apartmentId" class="me-4">Id appartamento:</label>
            <input id="apartment_id" class="border-0 border-bottom" name="apartment_id" type="text" disabled :value="apartmentId">
        </div>
        <div class="mb-3">
            <input class="border-0 border-bottom w-100 d-block" type="text" name="name" id="name" placeholder="Name" v-model="formData.name" :class="{ 'is-invalid': formData.errors.name }" required/>
            <p v-for="(error, index) in formData.errors.name" :key="index" class="invalid-feedback">
                {{ error }}
            </p>
        </div>
        <div class="mb-3">
            <input class="border-0 border-bottom w-100 d-block" type="email" name="email" id="email" placeholder="Email" v-model="formData.email" :class="{ 'is-invalid': formData.errors.email }" required/>
            <p v-for="(error, index) in formData.errors.email" :key="index" class="invalid-feedback">
                {{ error }}
            </p>
        </div>
        <div class="mb-3">
            <textarea class="border-0 border-bottom w-100 d-block" name="message" id="message" cols="30" rows="5" placeholder="Message" v-model="formData.message" :class="{ 'is-invalid': formData.errors.message }" required></textarea>
            <p v-for="(error, index) in formData.errors.message" :key="index" class="invalid-feedback">
                {{ error }}
            </p>
        </div>
        <button class="btn btn-lg btn-outline-primary text-uppercase d-block" type="submit" :disabled="formData.loading">
            {{ formData.loading ? "Sto inviando..." : "Invia" }}
        </button>
    </form>
</template>

<script>
import { store } from '../../store';
    export default {
        name: 'ContactFormComponent',
        props: {
            apartmentId: {
                type: Number,
                required: true
            }
        },
        data(){
            return{
                store,
                formData: {
                    name: '',
                    apartment_id: this.$props.apartmentId,
                    email: '',
                    message: '',
                    success: false,
                    errors: {},
                    loading: false
                }
            }
        },
        methods: {
            handleSendForm(){
                this.store.sendForm(this.formData);
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '@/assets/styles/partials/_variables.scss' as *;

form{
    color: $white;
    #apartmentId{
        font-size: 1.5rem;
    }
    input{
        background-color: $mauve;
        color: $white;
        padding: 10px;
        &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active{
            background-color: transparent !important;
            -webkit-box-shadow: 0 0 0 50px $mauve inset;
            -webkit-text-fill-color: $white !important;
        }
        &:focus{
            background-color: $mauve;
            color: $white;
            outline: 1px solid $white;
        }
    }
    textarea{
        background-color: $mauve;
        color: $white;
        padding: 10px;
        &:focus{
            background-color: $mauve;
            color: $white;
            outline: 1px solid $white;
        }
    }
    button{
        border-color: $sangria;
        color: $sangria;
        &:hover{
            background-color: $sangria;
            color: $white
        }
    }
}
</style>