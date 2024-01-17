import {defineStore} from "pinia"

export const usePersonnageStore = defineStore('personnage', {
    state:()=>({
        personnages : [
            {
              pseudo:'Grégory',
              age: 15
            }, 
            {
              pseudo:'Paul',
              age:23
            },
            {
              pseudo:'Norman',
              age:47
            }
          ],
    }),
    actions:{
        ajoutPerso(personnage){
            this.personnages.push(personnage)
        }
    }
})