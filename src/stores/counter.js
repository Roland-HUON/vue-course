import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {
    state:()=>({
        compteur: 0,
    }), 
    actions:{
        increment(){
            this.compteur +=1
            return this.compteur
        }
    }
})