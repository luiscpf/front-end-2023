import { defineStore } from "pinia";
import { auth } from "../firebase";

export const useAuthStore = defineStore('authStore', {
    state: ()=>{
        return {
        }
    },
    actions: {
        registerUser(credenciais) {
            console.log('Registo pela store', credenciais)
        },
        loginUser(credenciais){
            console.log('Login pela store', credenciais)
        },
        logoutUser(){
            console.log('Logout pela store')
        }
    }
});